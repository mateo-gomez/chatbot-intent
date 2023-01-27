export default function Message({ children, isUser = false }) {
	const classes = isUser
		? "bg-green-800 rounded-br-none"
		: "bg-zinc-600 rounded-bl-none";

	const side = isUser ? "justify-end" : "justify-start";

	return (
		<div className={`flex ${side}`}>
			<p className={`${classes} p-2 rounded-lg`}>{children}</p>
		</div>
	);
}
