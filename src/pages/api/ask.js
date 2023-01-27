// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { askCohere } from "@/services/askCohere";

export default async function handler(req, res) {
	if (req.method !== "POST") {
		return res.status(404).json({ message: "Nothing here" });
	}

	const { prompt } = req.body;

	const prediction = await askCohere([prompt]);

	res.status(200).json({ data: prediction });
}
