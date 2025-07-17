import React, { useEffect, useRef, useState } from 'react';
import styles from './Footer.module.scss';

const footerLinks = [
  'Domande frequenti',
  'Centro assistenza',
  'Account',
  'Media Center',
  'Rapporti con gli investitori',
  'Opportunità di lavoro',
  'Riscatta carte regalo',
  'Acquista carte regalo',
  'Come guardare Netflix',
  'Condizioni di utilizzo',
  'Privacy',
  'Preferenze per i cookie',
  "Informazioni sull'azienda",
  'Contattaci',
  'Test di velocità',
  'Garanzia legale',
  'Note legali',
  'Solo su Netflix',
  'Preferenze per la pubblicità',
];

const Footer: React.FC = () => {
  const [showFooterBtn, setShowFooterBtn] = useState(true);
  const observedButtons = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const buttonIds = ['startBtn1', 'startBtn2']; 
    observedButtons.current = buttonIds
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const anyVisible = entries.some(entry => entry.isIntersecting);
        setShowFooterBtn(!anyVisible);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    observedButtons.current.forEach(el => observer.observe(el));

    return () => {
      observedButtons.current.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <footer id="footerSection" className={styles.footer}>
      <p className={styles.contact}>
        Domande? Chiama il numero <a href="tel:800931413">800 931 413</a>
      </p>

      <div className={styles.linkGrid}>
        {footerLinks.map((link, index) => (
          <a key={index} href="#" className={styles.link}>
            {link}
          </a>
        ))}
      </div>

      <div className={styles.language}>
        <select className={styles.languageSelect} aria-label="Seleziona la lingua">
          <option value="" hidden>
            🈂︎
          </option>
          <option value="it">Italiano</option>
          <option value="en">English</option>
        </select>
      </div>

      <div className={styles.bottomNote}>
        <p>Netflix Italia</p>
        <p className={styles.recaptcha}>
          Questa pagina è protetta da Google reCAPTCHA per garantire che tu non sia un bot.{' '}
          <a href="#">Scopri di più.</a>
        </p>

        <button
          type="submit"
          className={`${styles.btnLogin} ${showFooterBtn ? styles.show : styles.hide}`}
        >
          Inizia
        </button>
      </div>
    </footer>
  );
};

export default Footer;
