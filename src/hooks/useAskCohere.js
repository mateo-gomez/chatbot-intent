import { useState } from "react";

export function useAskCohere() {
	const [isLoading, setIsLoading] = useState(false);

	const ask = async (prompt) => {
		setIsLoading(() => true);

		const response = await fetch("/api/ask", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ prompt }),
		});

		const data = await response.json();
		setIsLoading(() => false);

		return data;
	};

	return [ask, isLoading];
}
