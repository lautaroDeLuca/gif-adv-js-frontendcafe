import navbarStyles from '../../styles/Navbar.module.css'
import Button from '../../components/Button'
import { useRouter } from "next/router"
import SearchBox from '../../components/SearchBox'
import onSubmit from '../../services/onSubmit'
import { useEffect, useState } from 'react'
import searchGifs from '../../services/searchGifs'
import styles from '../../styles/Search.module.css'
import { v4 as uuid } from 'uuid';
import Card from '../../components/Card';

const index = () => {
    const router = useRouter();
    const queryData = router.query;
    const keyword = queryData.keyword as string;
    const [gifs, setGifs] = useState([])
    const [titles, setTitles] = useState([])
    const [gifsID, setGifsID] = useState([])
    
    useEffect(()=>{
        if(!router.isReady) return;
        if(keyword !== undefined){

          searchGifs(keyword).then((items : any) => {
            setGifs(items[0]);
            setTitles(items[1]);
            setGifsID(items[2]);
          })
        }
    
      }, [keyword]);


      console.log(keyword)

  return ( 
    <>
        <nav className={navbarStyles.navbar}>
            <a href="/">
                <h2 className={navbarStyles.logo}>Gifs</h2>
            </a>
            <div className={navbarStyles.buttonsContainer}>
                <Button text = {'Trending'}/>
                <SearchBox/>
            </div>
        </nav>
        <section className={styles.gifsWrapper}>
                    {
                        gifs.map((singleGif, index) => <Card key = {uuid()} gif = {singleGif} description = {titles[index]} gifID={gifsID[index]}/>)
                    }
        </section>
    </>
  )
}

export default index;
