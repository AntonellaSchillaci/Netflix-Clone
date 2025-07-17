import React, { useEffect, useState } from 'react';
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
  'Informazioni sull\'azienda',
  'Contattaci',
  'Test di velocità',
  'Garanzia legale',
  'Note legali',
  'Solo su Netflix',
  'Preferenze per la pubblicità',
];

const Footer: React.FC = () => {
  const [showButton, setShowButton] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const footerEl = document.getElementById('footerSection');
      const footerTop = footerEl?.getBoundingClientRect().top ?? Infinity;

      const scrollingDown = currentScrollY > lastScrollY;

      if (footerTop <= windowHeight) {
        setShowButton(true);
      } else if (scrollingDown) {
        setShowButton(currentScrollY > 100);
      } else {
        setShowButton(currentScrollY > docHeight / 2);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <footer id="footerSection" className={styles.footer}>
      <p className={styles.contact}>
        Domande? Chiama il numero <a href="tel:800931413">800 931 413</a>
      </p>

      <div className={styles.linkGrid}>
        {footerLinks.map((link, i) => (
          <a key={i} href="#" className={styles.link}>
            {link}
          </a>
        ))}
      </div>

      <div className={styles.language}>
        <select className={styles.languageSelect} aria-label="Seleziona la lingua">
          <option value="" hidden>🈂︎</option>
          <option value="it">Italiano</option>
          <option value="en">English</option>
        </select>
      </div>

      <div className={styles.bottomNote}>
        <p>Netflix Italia</p>
        <p className={styles.recaptcha}>
          Questa pagina è protetta da Google reCAPTCHA per garantire che tu non sia un bot. <a href="#">Scopri di più.</a>
        </p>

        <button
          type="submit"
          className={`${styles.btnLogin} ${showButton ? styles.show : styles.hide}`}
        >
          Inizia
        </button>
      </div>
    </footer>
  );
};

export default Footer;
