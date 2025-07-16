import GradientCard from "./GradientCard";
import TopTitles from "./TopTitles";
import styles from "./TrendingSection.module.scss";

const TrendingSection = () => {
  return (
    <section className={styles.trendingSection}>
      <GradientCard />
      <h3 className={styles.titleTop}>I titoli del momento</h3>
      <TopTitles />
    </section>

  );
};

export default TrendingSection;
