export const getVideoIdFromYoutubeUrl = (url) => {
	const regExp =
		/(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]vi?=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
	const match = url.match(regExp);

	return match && match[1].length == 11 ? match[1] : "";
};
