import { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid';
import searchGifs from '../services/searchGifs'
import trendingGifs from '../services/trendingGifs'
import Card from '../components/Card';
import styles from '../styles/MyApp.module.css'
import type { NextPage } from 'next'
import SearchBox from '../components/SearchBox'
import Button from '../components/Button';

const Index: NextPage = ()=>{

    const [gifs, setGifs] = useState([]);
    const [titles, setTitles] = useState([]);
    const [gifsID, setGifsID] = useState([]);
  
    useEffect(() =>{
        trendingGifs().then(items => {
            setGifs(items[0]);
            setTitles(items[1]);
            setGifsID(items[2]);
        })
    }, [])
  
    const onSubmit = async (text : string) => {
        try{
            await searchGifs(text)
                .then(items =>{
                    setGifs(items[0]);
                    setTitles(items[1]);
                    setGifsID(items[2]);
                });
        }
        catch{
            console.log("error");
        }
    }
  
    return(        
        <>
            <nav className={styles.navbar}>
                <a href="/">
                    <h2 className={styles.logo}>
                        Gifs
                    </h2>
                </a>
                <Button text = {'Trending'}></Button>       
                <SearchBox onSubmit={onSubmit}/>
            </nav>    
            <section className={styles.gifsWrapper}>
                    {
                        gifs.map((singleGif, index) => <Card key = {uuid()} gif = {singleGif} description = {titles[index]} gifID={gifsID[index]}/>)
                    }
            </section>
        </>        
        )}            
            
export default Index;