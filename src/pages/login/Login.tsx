import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import TrendingSection from '../../components/TrendingSection';
import styles from './Login.module.scss';

const LoginPage = () => {
  return (
    <main className={styles.page}>
      <Hero />
      <TrendingSection />
      <Footer />
    </main>
  );
};

export default LoginPage;
