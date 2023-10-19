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
                <h3>WEB DESIGN</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur autem fugit molestiae aliquam in maiores porro vero atque consectetur quasi!</p>
            </div>
            <div className={`${styles.card_items} ${styles.card_items_main} ${styles.hidean}`}>
                <span>01.</span>
                <h3>UX/UI DESIGN</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur autem fugit molestiae aliquam in maiores porro vero atque consectetur quasi!</p>
            </div>
            <div className={`${styles.card_items} ${styles.hidean}`}>
                <span>03.</span>
                <h3>APP DESIGN</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur autem fugit molestiae aliquam in maiores porro vero atque consectetur quasi!</p>
            </div>
      </div>
    </div>
  )
}
