import styles from '../styles/Login.module.css'

export default function index() {
  return (
    <>
        <div className={styles.loginContainer}>
            <div className={styles.loginCard}>
                <div className={styles.content}>
                    <h1 className={styles.logo}>Gifs</h1>
                    <form className={styles.formContainer} action="">
                        <label htmlFor="username">Username : </label>
                        <input type="text" placeholder='username'/>
                        <br />
                        <label htmlFor="password">Password : </label>
                        <input type="password" placeholder='password' />
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}
