import styles from '../styles/Button.module.css'


const Button = ( props : { text: string } ) => {
  return (
        <>
            <div className={styles.container}>
                <a href={"/"}>
                  {props.text}
                </a>
            </div>
        </>
  )
};

export default Button;