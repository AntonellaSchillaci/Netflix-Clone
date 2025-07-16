import { useEffect, useState, useRef } from "react";
import styles from "./TopTitles.module.scss";

interface MediaItem {
  id: number;
  poster_path: string;
  title?: string;
  name?: string;
}

function TopTitles() {
  const [titles, setTitles] = useState<MediaItem[]>([]);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchTopTitles = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
        );
        const data = await res.json();

        const filtered = (data.results as MediaItem[])
          .filter((item) => item.poster_path && (item.title || item.name) && item.id)
          .slice(0, 10);

        setTitles(filtered);
      } catch (err) {
        console.error("Errore nel fetch dei Top Titles:", err);
      }
    };

    fetchTopTitles();
  }, []);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  useEffect(() => {
    checkScroll(); 
  }, [titles]);

  const scrollByAmount = (distance: number) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: distance, behavior: "smooth" });
  };

  return (
    <section className={styles.topTitles}>
      {canScrollLeft && (
        <button
          className={`${styles.scrollArrow} ${styles.left}`}
          onClick={() => scrollByAmount(-366)}
          aria-label="Scroll left"
        >
          &#60;
        </button>
      )}
      <div
        className={styles.postersGrid}
        ref={scrollRef}
        onScroll={checkScroll}
      >
        {titles.map((item, index) => (
          <div key={item.id} className={styles.poster}>
            <img
              className={styles.imgTop}
              src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
              alt={item.title || item.name}
            />
            <div className={styles.number}>{index + 1}</div>
          </div>
        ))}
      </div>
      {canScrollRight && (
        <button
          className={`${styles.scrollArrow} ${styles.right}`}
          onClick={() => scrollByAmount(366)}
          aria-label="Scroll right"
        >
          &#62;
        </button>
      )}
    </section>
  );
}

export default TopTitles;
