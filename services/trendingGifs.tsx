const apiKey : string = "woT4G1j7wgBf009XLGBuOngeNzKO139h";

const trendingGifs = () => {
    const apiUrl : string = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=25&offset=0&rating=g&lang=en`;
        return fetch(apiUrl)
                .then(response => response.json())
                .then(res => {
                    const {data} = res;
                    const fetchedURL = data.map((image: any) => image.images.downsized_medium.url);
                    const fetchedTitle = data.map((titles: any) => titles.title)
                    const fetchedGifID = data.map((GifID: any) => GifID.id);
                    return [fetchedURL, fetchedTitle, fetchedGifID];
                })
}

export default trendingGifs;