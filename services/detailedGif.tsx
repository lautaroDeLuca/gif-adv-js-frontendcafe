const apiKey : string = "woT4G1j7wgBf009XLGBuOngeNzKO139h";

export interface GifData {
  user: {
        avatarURL: "",
        description: "",
        displayName: "",
        instagramURL: "",
        verified: Boolean,
        websiteURL: "" 
      },
  embedURL: string;
  url: string;
  source: string;
  created: string;
  title: string
}

const detailedGif = (gifID : string) => {
  const axios = require('axios')

const apiURL = `https://api.giphy.com/v1/gifs/${gifID}?api_key=${apiKey}`

console.log(apiURL)

  // return fetch (apiURL)
  //           .then( res => res.json())
            // .then( response => {
            //       const { data } = response
            //       if(data.username !== ""){                  
            //         const fetchedData : GifData = {
            //           user : {
            //             avatarURL: (data.user.avatar_url !== undefined) ? data.user.avatar_url : '',
            //             description: data.user.description,
            //             displayName: data.user.display_name,
            //             instagramURL: data.user.instagram_url,
            //             verified: data.is_verified,
            //             websiteURL: data.website_url 
            //           },
            //           embedURL : data.embed_url,
            //           url : data.images.downsized_medium.url,
            //           source : data.source,
            //           created : data.create_datetime,
            //           title : data.title
            //       }
            //       return fetchedData
            //     }else{
            //       const fetchedData : GifData = {
            //         user : {
            //           avatarURL: '',
            //           description: '',
            //           displayName: '',
            //           instagramURL: '',
            //           verified: false,
            //           websiteURL: '' 
            //         },
            //         embedURL : data.embed_url,
            //         url : data.images.downsized_medium.url,
            //         source : data.source,
            //         created : data.create_datetime,
            //         title : data.title
            //       }
            //     return fetchedData
            //   }
            //     })

  return axios.get(apiURL)
    .then((response : any) =>{
        const { data } = response.data
        if(data.username !== ""){                  
          const fetchedData : GifData = {
            user : {
              avatarURL: (data.user.avatar_url !== undefined) ? data.user.avatar_url : '',
              description: data.user.description,
              displayName: data.user.display_name,
              instagramURL: data.user.instagram_url,
              verified: data.is_verified,
              websiteURL: data.website_url 
            },
            embedURL : data.embed_url,
            url : data.images.downsized_medium.url,
            source : data.source,
            created : data.create_datetime,
            title : data.title
        }
        return fetchedData
      }else{
        const fetchedData : GifData = {
          user : {
            avatarURL: '',
            description: '',
            displayName: '',
            instagramURL: '',
            verified: false,
            websiteURL: '' 
          },
          embedURL : data.embed_url,
          url : data.images.downsized_medium.url,
          source : data.source,
          created : data.create_datetime,
          title : data.title
        }
      return fetchedData
    }
      })
}

export default detailedGif