import styles from './Cards.module.css'

import { useEffect } from 'react';

export default function Cards() {
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log()
        if(entry.isIntersecting){
          entry.target.classList.add(styles.show)
        }
      });
    });

    const Cards = document.querySelectorAll(`.${styles.card_items}`);
    Cards.forEach((Card) => {
      observer.observe(Card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <div>
      <div className={styles.card_container}>
            <div className={`${styles.card_items} ${styles.hidean}`}>
                <span>02.</span>
                <h3>SEO Awareness</h3>
                <p>Understanding the basics of search engine optimization (SEO) is beneficial. Web designers can create designs that are optimized for search engines</p>
            </div>
            <div className={`${styles.card_items} ${styles.card_items_main} ${styles.hidean}`}>
                <span>01.</span>
                <h3>Frameworks and Libraries</h3>
                <p>Familiarity with frameworks and libraries, such as React js or Bootstrap, can speed up the process and provide consistent user interfaces.</p>
            </div>
            <div className={`${styles.card_items} ${styles.hidean}`}>
                <span>03.</span>
                <h3>Web Performance Optimization</h3>
                <p> Knowledge of web performance optimization techniques, such as image optimization and minification, can lead to faster-loading websites.</p>
            </div>
      </div>
    </div>
  )
}
