export default function Loader({ size = 50 }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height={size}
			width={size}
			viewBox="0 0 100 100"
		>
			<circle cx="6" cy="50" r="6" fill="#fff">
				<animate
					attributeName="opacity"
					begin=".1"
					dur="1s"
					repeatCount="indefinite"
					values="0;1;0"
				/>
			</circle>
			<circle cx="26" cy="50" r="6" fill="#fff">
				<animate
					attributeName="opacity"
					begin=".2"
					dur="1s"
					repeatCount="indefinite"
					values="0;1;0"
				/>
			</circle>
			<circle cx="46" cy="50" r="6" fill="#fff">
				<animate
					attributeName="opacity"
					begin=".3"
					dur="1s"
					repeatCount="indefinite"
					values="0;1;0"
				/>
			</circle>
		</svg>
	);
}
