import cohere from "cohere-ai";

export const askCohere = async (prompts) => {
	cohere.init(process.env.COHERE_API_KEY);

	const response = await cohere.classify({
		model: process.env.COHERE_MODEL,
		inputs: prompts,
	});

	return response.body.classifications[0].prediction;
};
