import searchGifs from "./searchGifs";


const onSubmit = async (text : string) => {
    try{
        await searchGifs(text)
            .then((items : any)=>{
                return items
            });
    }
    catch{
        console.log("error")
    }
}

export default onSubmit;