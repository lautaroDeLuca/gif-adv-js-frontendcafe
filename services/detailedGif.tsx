import { ObjectHTMLAttributes } from "react";

const apiKey : string = "woT4G1j7wgBf009XLGBuOngeNzKO139h";

const detailedGif = (gifID : string) => {

const apiURL = `https://api.giphy.com/v1/gifs/${gifID}?api_key=${apiKey}`

interface GifData {
  username: string;
  embedURL: string;
  source: string;
  created: string;
  title: string;
  datalog : object
}

  return fetch (apiURL)
            .then( res => res.json())
            .then( response => {
                  const { data } = response
                  const fetchedData : GifData = {
                    username : data.username,
                    embedURL : data.embed_URL,
                    source : data.source,
                    created : data.create_datetime,
                    title : data.title,
                    datalog: data
                  }
                  return fetchedData
                })
}

export default detailedGif