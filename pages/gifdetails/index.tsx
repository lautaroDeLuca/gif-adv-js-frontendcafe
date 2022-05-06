import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import detailedGif from "../../services/detailedGif"
import Button from '../../components/Button' 
import navbarStyles from '../../styles/Navbar.module.css'
import detailedStyles from '../../styles/Details.module.css'
import { GifData } from "../../services/detailedGif"

const GifDetails = () => {

  const [gifData , setGifData] = useState<GifData>({
    user: {
      avatarURL: "",
      description: "",
      displayName: "",
      instagramURL: "",
      verified: false,
      websiteURL: "" 
    },
    embedURL: "",
    url: "",
    source: "",
    created: "",
    title: ""
  })
  const router = useRouter()
  const queryData = router.query;
  const id = queryData.id as string;

   useEffect(()=>{
    if(!router.isReady) return;
    if(id !== undefined){
      detailedGif(id).then((item : GifData) => {
        setGifData(item)
      })
    }

  }, [id]);


  return (
    <>
      <nav className={navbarStyles.navbar}>
        <a href="/">
            <h2 className={navbarStyles.logo}>Gifs</h2>
        </a>
        <div className={navbarStyles.buttonsContainer}>
          <Button text = {'Trending'}/>
        </div>
      </nav>
      <section>
        <div className={detailedStyles.detailsCard}>
          <div className={detailedStyles.infoContainer}>
              <h2 className={detailedStyles.title}>{gifData.title}</h2>            
            <div className={detailedStyles.profileCard}>
              <div className={detailedStyles.basicInfo}>
                <div className={detailedStyles.avatarContainer}>
                  <img className={detailedStyles.avatar} src={gifData.user.avatarURL} alt="" /> 
                </div>
                <div className={detailedStyles.userContainer}>
                  <h2 className={detailedStyles.username}>{gifData.user.displayName}</h2>
                  <p className={detailedStyles.description}>{gifData.user.description}</p>
                  <a href={gifData.user.instagramURL}>Instagram</a>
                </div>
              </div>
              <a href={gifData.embedURL}>
                <img className={detailedStyles.embedURL} src="/images/embed.svg" alt="" />
              </a>
            </div>        
          </div>
          <img className={detailedStyles.detailsGif} src={gifData.url} alt=""/>
        </div>
      </section>
    </>
  )
}

export default GifDetails;