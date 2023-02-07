import { Fragment } from "react";
import YTVideo from "./YTVideo";

export default function Message({
	content,
	video = "",
	options = [],
	isUser = false,
	onSelectOption,
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

					{options.length ? (
						<div className="flex flex-col gap-2">
							{options.map((option, i) => {
								return (
									<button
										className="border rounded-xl p-1 hover:opacity-80"
										onClick={onSelectOption.bind(this, option)}
										key={`option-${i}`}
									>
										{option}
									</button>
								);
							})}
						</div>
					) : null}

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
