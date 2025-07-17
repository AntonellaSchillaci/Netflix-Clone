import styles from './LoginSection.module.scss';

const LoginSection = () => {
    return (
        <div className={styles.loginSection}>
             <p className={styles.paragraphLogin}>
          Vuoi guardare Netflix? Inserisci l'indirizzo email per abbonarti o
          riattivare il tuo abbonamento.
        </p>

        <form className={styles.form}>
          <input className={styles.loginInput} type="email" placeholder="Indirizzo email" />
          <div className={styles.btnLoginContainer}>
            <button className={styles.btnLogin} type="submit">Inizia ＞</button>
          </div>
        </form>
        </div>
    )
}

export default LoginSection;