import styles from '../styles/Card.module.css'
import Link from 'next/link'


//https://api.giphy.com/v1/gifs/${props.gifID}?api_key=${apiKey}

const apiKey : string = "woT4G1j7wgBf009XLGBuOngeNzKO139h";

const Card = (props : {gif: string, description: string, gifID: string}) => {

  const newTo = { 
    pathname: `gifdetails/${props.gifID}`,
    param1: props.gifID 
  };

  return (
    <>
      <div>
        <Link     href={{
        pathname: "/gifdetails",
        query: {id: props.gifID},
    }}>
          <div className={styles.cardWrapper}>
              <img className={styles.image} src={props.gif} alt=""/>
              <h3 className={styles.description}>{props.description}</h3>
          </div>
        </Link>
      </div>
    </>
  )
}


export default Card;