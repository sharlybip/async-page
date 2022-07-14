API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCjRo5p5NFu7m8WN4OPbVEXQ&part=snippet%2Cid&order=date&maxResults=5'

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b1d4aa8b62mshf5c034791f12059p100771jsnb23d9cea5560',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData() {
	const response = await fetch(API, options);
	const data = await response.json();
	return data;
}

(async() => {
	try {
		const videos = await fetchData(API);
		let view = `
			${videos.items.map(video => `
				<div class="group relative">
					<div
						class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
						<img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
					</div>
					<div class="mt-4 flex justify-between">
						<h3 class="text-sm text-gray-700">
						<span aria-hidden="true" class="absolute inset-0"></span>
						${video.snippet.title}
						</h3>
					</div>
				</div>
			`).slice(0, 6).join('')}
		`;
		content.innerHTML = view;
	}catch(error){
		alert("lo sentimos no se pudieron cargar los videos desde la Api de Yutube");
	}
})();