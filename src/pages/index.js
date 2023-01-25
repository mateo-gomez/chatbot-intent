import Message from "@/components/Message";
import { useState } from "react";

const initialMessages = [{ content: "¿Cómo te puedo ayudar?", isUser: false }];

export default function Home() {
	const [messages, setMessages] = useState(initialMessages);

	const addMessage = (content, isUser = false) => {
		const message = { content, isUser };

		setMessages(message);
	};

	const handleEnterKey = (ev) => {
		if (ev.key !== "Enter") return;

		addMessage(ev.target.value, true);
	};

	return (
		<>
			<main className="container gap-4 max-w-2xl mx-auto h-screen grid content-center">
				<h1 className="text-3xl font-bold text-center">Chabot Intent</h1>

				<div className="w-full h-screen md:h-[600px] bg-zinc-800 rounded-2xl p-6 flex flex-col">
					<div className="w-full flex flex-col flex-1 gap-2">
						{messages.map((message, index) => (
							<Message key={index} isUser={message.isUser}>
								{message.content}
							</Message>
						))}
					</div>

					<input
						className="bg-zinc-900 rounded-lg p-4 active:bg-neutral-900 focus-visible:outline-none focus:ring focus:ring-green-800 text-zinc-300 placeholder:text-zinc-700"
						placeholder="Type your questions..."
						type="text"
						onKeyUp={handleEnterKey}
					/>
				</div>
			</main>
		</>
	);
}
