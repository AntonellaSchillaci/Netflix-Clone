import FAQSection from "./FAQSection";
import GradientCard from "./GradientCard";
import MoreReasons from "./MoreReasons";
import TopTitles from "./TopTitles";
import styles from "./TrendingSection.module.scss";

const TrendingSection = () => {
  return (
    <section className={styles.trendingSection}>
      <GradientCard />
      <h3 className={styles.titleTop}>I titoli del momento</h3>
      <TopTitles />
      <h3 className={styles.titleTop}>Motivi in più per abbonarsi</h3>
      <MoreReasons />
      <h3 className={styles.titleTop}>Domande frequenti</h3>
      <FAQSection />
    </section>

  );
};

export default TrendingSection;
