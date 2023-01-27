export function useAskCohere() {
	return async (prompt) => {
		const response = await fetch("/api/ask", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ prompt }),
		});

		return await response.json();
	};
}
