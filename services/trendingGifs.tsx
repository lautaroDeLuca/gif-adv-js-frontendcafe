
const apiKey : string = "woT4G1j7wgBf009XLGBuOngeNzKO139h";
const apiUrl : string = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=25&offset=0&rating=g&lang=en`;

const trendingGifs = () => {
    const axios = require('axios');
    
        // return fetch(apiUrl)
        //         .then(response => response.json())
        //         .then(res => {
        //             const {data} = res;
        //             const fetchedURL = data.map((image: any) => image.images.original.webp);
        //             const fetchedTitle = data.map((titles: any) => titles.title)
        //             const fetchedGifID = data.map((GifID: any) => GifID.id);
        //             return [fetchedURL, fetchedTitle, fetchedGifID];
        //         })

    return axios.get(apiUrl)
        .then((res: any) => {
            const {data} = res.data;
            const fetchedURL = data.map((image: any) => image.images.original.webp);
            const fetchedTitle = data.map((titles: any) => titles.title)
            const fetchedGifID = data.map((GifID: any) => GifID.id);
            return [fetchedURL, fetchedTitle, fetchedGifID];
        })
        .catch((error : any) => {
            console.log(error)
            return [[], [],[]];
        })
}



export default trendingGifs;