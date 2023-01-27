export default function InputPrompt({ handleEnterKey }) {
	const onKeyUp = (ev) => {
		if (ev.key !== "Enter") return;

		handleEnterKey(ev.target.value);
		ev.target.value = "";
	};

	return (
		<input
			className="bg-zinc-900 rounded-lg p-4 active:bg-neutral-900 focus-visible:outline-none focus:ring focus:ring-green-800 text-zinc-300 placeholder:text-zinc-700"
			placeholder="Type your questions..."
			type="text"
			onKeyUp={onKeyUp}
		/>
	);
}
