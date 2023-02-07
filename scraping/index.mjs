import { load } from "cheerio";
import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import labels from "../src/database/labels.json" assert { type: "json" };

const getPage = async ({ url }) => {
	const res = await fetch(url);
	const html = await res.text();

	const $ = load(html);

	const text = $(
		"p[style='text-align: left; color: #ffffff; background: #67ccbe; font-size: 18px; padding: 50px;']"
	).text();

	const video = $("iframe").attr("src");

	return {
		text,
		video,
	};
};

const res = await fetch("https://begranda.com/web/ayudas/");
const html = await res.text();
const $ = load(html);

const dataPromises = $(
	"div.vc_row.wpb_row.vc_row-fluid.vc_column-gap-10 a"
).map(async (i, el) => {
	const url = el.attribs.href;

	const { text: content, video } = await getPage({ url });
	const label = labels[i].label;

	return {
		label,
		url,
		content,
		video: video,
	};
});

const data = await Promise.all(dataPromises);

const notFound = {
	label: "sin datos",
	url: "mailto:soporte@begranda.com",
	content:
		"Lo siento, no tengo información en el momento sobre el tema que estás consultando. \n Envíanos tus dudas a soporte@begranda.com y te responderemos cuanto antes",
	video: "",
};

const filename = "db.json";
const filepath = join(process.cwd(), "src", "database", filename);

await writeFile(
	filepath,
	JSON.stringify([...data, notFound], null, 2),
	"utf-8"
);
