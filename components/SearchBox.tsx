import { useRouter } from "next/router";
import { useState } from "react";
import styles from '../styles/SearchBox.module.css'


const SearchBox = () => {

    const [text, setText] = useState('');
    const router = useRouter();

    const handleChange = (e: any) => {
        const input = e.target.value.toLowerCase();
        setText(input);
    } 

    // const handleSubmit = (e: any) => {
    //         e.preventDefault();
    //         props.onSubmit(text);
    //         setText('');
    // }

    const handleSubmit = (e : any) => {
        e.preventDefault();
        router.push({pathname : "search",
                    query : {keyword: text}
                })
    }

  return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <img className={styles.mag} src="/images/mag.svg" alt="" />
            <input className={styles.searchSpace} type="text" placeholder='Search GIPHY' onChange={handleChange} value={text}/>
        </form>
  )
}


export default SearchBox