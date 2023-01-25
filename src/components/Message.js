export default function Message({ children, isUser = false }) {
	const color = isUser ? "bg-green-800" : "bg-zinc-600";
	const side = isUser ? "end" : "start";

	return (
		<div className={`flex justify-${side}`}>
			<p className={`${color} p-2 rounded-lg rounded-bl-none`}>{children}</p>
		</div>
	);
}
