import React, { useEffect } from 'react';
import styles from './ProgressBar.module.css'

export default function ProgressBar(props) {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove(styles.hidden);
        }
        // else{
        //     entry.target.classList.add(styles.hidden);
        // }
      });
    });

    const progressBars = document.querySelectorAll(`.${styles.progress_Bar}`);
    progressBars.forEach((progressBar) => {
      observer.observe(progressBar);
    });

    return () => {
      observer.disconnect();
    };
  }, []);



  return (
    <div>
      <div className={styles.progress_Bar_container}>
        <h2 className={styles.progress_Bar_tittle}>{props.progressTittle}</h2>
        <div className={`${styles.progress_Bar_outer}`}>
          <div className={`${styles.progress_Bar}  ${styles[props.className]}  ${styles.hidden}`}>
            <span>{props.percent}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
