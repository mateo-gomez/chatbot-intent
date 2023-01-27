import InputPrompt from "@/components/InputPrompt";
import Message from "@/components/Message";
import { useAskCohere } from "@/hooks/useAskCohere";
import { useState } from "react";

const initialMessages = [{ content: "¿Cómo te puedo ayudar?", isUser: false }];

export default function Home() {
	const [messages, setMessages] = useState(initialMessages);
	const askCohere = useAskCohere();

	const addMessage = (content, isUser = false) => {
		const message = { content, isUser };

		setMessages((prevMessages) => [...prevMessages, message]);
	};

	const handleEnterKey = async (value) => {
		addMessage(value, true);

		const response = await askCohere(value);

		addMessage(response.data);
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

					<InputPrompt handleEnterKey={handleEnterKey} />
				</div>
			</main>
		</>
	);
}
