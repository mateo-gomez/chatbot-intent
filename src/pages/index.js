import InputPrompt from "@/components/InputPrompt";
import Loader from "@/components/Loader";
import Message from "@/components/Message";
import { useAskCohere } from "@/hooks/useAskCohere";
import { useEffect, useRef, useState } from "react";

const initialMessages = [
	{
		content: "¿Cómo te puedo ayudar?",
		isUser: false,
		options: [
			"¿Cómo creo un nit?",
			"¿Cómo genero un informe de auxiliar?",
			"¿Cómo exporto la nómina a contabilidad?",
		],
	},
];

export default function Home() {
	const messagesRef = useRef(null);

	const [messages, setMessages] = useState(initialMessages);
	const [askCohere, isLoading] = useAskCohere();

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

	const handleSelectOption = async (prompt) => {
		const iaMessage = await askCohere(prompt);

		addMessage(iaMessage);
	};

	return (
		<div className="h-screen">
			<main className="max-w-4xl min-w-[400px] p-4 m-auto w-md flex flex-col h-full justify-center content-center">
				<h1 className=" text-5xl font-bold text-center mb-8">Chabot Intent</h1>

				<div
					className="gap-2 p-4 flex flex-col h-5/6 sm:h-[600px] bg-zinc-800 rounded-2xl"
					id="main"
				>
					<div
						ref={messagesRef}
						className=" flex flex-col flex-1 overflow-auto"
					>
						<div className="flex flex-col gap-3 px-4">
							{messages?.map((message, index) => (
								<Message
									content={message.content}
									video={message.video}
									key={index}
									isUser={message.isUser}
									options={message.options}
									onSelectOption={handleSelectOption}
								/>
							))}

							{isLoading ? <Loader size={50} /> : null}
						</div>
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
	);
}
