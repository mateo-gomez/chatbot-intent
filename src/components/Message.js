import { Fragment } from "react";
import YTVideo from "./YTVideo";

export default function Message({
	content,
	video = "",
	link = "",
	isUser = false,
}) {
	const classes = isUser
		? "bg-green-800 rounded-br-none self-end"
		: "bg-zinc-600 rounded-bl-none self-start";

	const messageSplitted = content.split("\n");

	const text = messageSplitted.map((text, index) => {
		return (
			<Fragment key={text}>
				{text}
				<br />
			</Fragment>
		);
	});

	return (
		<div className={`flex flex-col px-4`}>
			<div className={`flex ${isUser ? "flex-row" : "flex-row-reverse"}`}>
				<div className="flex-1 px-8"></div>
				<div className={`flex flex-col gap-4 p-2 rounded-lg ${classes}`}>
					<p>{text}</p>

					{video ? (
						<div className="aspect-video">
							<YTVideo url={video} height="100%" width={"100%"} />
						</div>
					) : (
						""
					)}
				</div>
			</div>
		</div>
	);
}
