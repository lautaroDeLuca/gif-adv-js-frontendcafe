import type { NextPage } from 'next'
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import detailedGif from "../../services/detailedGif"

const GifDetails = () => {

  const [gifID, setGifID] = useState('')
  const [gifData, setGifData] = useState({})
  const router = useRouter()


  useEffect(() =>{
    detailedGif('3o7bukVodFfbQUpIEE').then( item =>{
      const data = item;
      console.log(data)
    })
  })


  // useEffect(() => {
  //   if(!router.isReady) return;
  //   const id = router.query.id;
  //   setGifID(id);
  // }, [router.isReady]);

  // useEffect(() => {
  //   console.log(gifID)
  //   detailedGif(gifID).then(item => {
  //     setGifData(item);
  //   })
  // }, [gifID]);


  return (
    <>
      <div>{}</div>
    </>
  )
}




export default GifDetails;