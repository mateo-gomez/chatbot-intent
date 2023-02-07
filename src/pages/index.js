import InputPrompt from "@/components/InputPrompt";
import Message from "@/components/Message";
import { useAskCohere } from "@/hooks/useAskCohere";
import { useEffect, useRef, useState } from "react";

const initialMessages = [{ content: "¿Cómo te puedo ayudar?", isUser: false }];

export default function Home() {
	const messagesRef = useRef(null);

	const [messages, setMessages] = useState(initialMessages);
	const askCohere = useAskCohere();

	const addMessage = (message) => {
		setMessages((prevMessages) => {
			return [...prevMessages, message];
		});
	};

	const handleEnterKey = async (value) => {
		addMessage({
			content: value,
			isUser: true,
		});

		const iaMessage = await askCohere(value);

		addMessage(iaMessage);
	};

	useEffect(() => {
		messagesRef?.current.scrollTo({
			behavior: "smooth",
			top: messagesRef.current.scrollHeight,
		});
	}, [messages]);

	return (
		<>
			<div className="h-screen">
				<main className="max-w-4xl min-w-[400px] p-4 m-auto w-md flex flex-col gap-4 h-full justify-center content-center">
					<h1 className="text-3xl font-bold text-center">Chabot Intent</h1>

					<div className="gap-2 p-4 flex flex-col h-5/6 sm:h-[600px] bg-zinc-800 rounded-2xl">
						<div
							ref={messagesRef}
							className=" flex flex-col flex-1 overflow-auto gap-3"
						>
							{messages.map((message, index) => (
								<Message
									content={message.content}
									video={message.video}
									key={index}
									isUser={message.isUser}
								/>
							))}
						</div>

						<footer className="px-4">
							<InputPrompt
								placeholder="Escribe tus preguntas..."
								className="w-full"
								handleEnterKey={handleEnterKey}
							/>
						</footer>
					</div>
				</main>
			</div>
		</>
	);
}
