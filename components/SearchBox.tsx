import { useState } from "react";
import styles from '../styles/SearchBox.module.css'

const SearchBox = (props : { onSubmit : Function }) => {

    const [text, setText] = useState('');

    const handleChange = (e: any) => {
        const input = e.target.value.toLowerCase();
        setText(input);
    } 

    const handleSubmit = (e: any) => {
            e.preventDefault();
            props.onSubmit(text);
            setText('');
    }

  return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <img className={styles.mag} src="/images/mag.svg" alt="" />
            <input className={styles.searchSpace} type="text" placeholder='Search GIPHY' onChange={handleChange} value={text}/>
        </form>
  )
}


export default SearchBox