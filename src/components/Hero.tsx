import styles from './Hero.module.scss';
import logo from '../assets/images/logo.svg';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.header}>
        <img src={logo} alt="Netflix" className={styles.logo} />
        <div className={styles.topRight}>
          <select className={styles.languageSelect}>
            <option value="" hidden >🈂︎</option>
            <option value="it">Italiano</option>
            <option value="en">English</option>
          </select>
          <button className={styles.loginButton}>Accedi</button>
        </div>
      </div>

      <div className={styles.content}>
        <h1 className={styles.titleHero}>Film, serie TV e tanto altro, senza limiti</h1>
        <p className={styles.paragraphHero}>A partire da 6,99 €. Disdici quando vuoi.</p>
        <p className={styles.paragraphHero}>
          Vuoi guardare Netflix? Inserisci l'indirizzo email per abbonarti o
          riattivare il tuo abbonamento.
        </p>

        <form className={styles.form}>
          <input className={styles.loginInput} type="email" placeholder="Indirizzo email" />
          <button className={styles.btnLogin} type="submit">Inizia ＞</button>
        </form>
      </div>

    </section>
  );
};

export default Hero;
