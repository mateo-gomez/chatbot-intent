export default function YTVideo({ url, width = 560, height = 315 }) {
	return (
		<iframe
			width={width}
			height={height}
			src={url}
			title="YouTube video player"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
			allowFullScreen={true}
		></iframe>
	);
}
