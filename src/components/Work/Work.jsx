import styles from './Work.module.css'

export default function Work() {
  return (
    <section className={styles.wrok} id='work'>
      <h2 className={styles.wrokTitle}>My Potfolio</h2>
      <span className={styles.wrokDisc}>I take a pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am exited to bring my skills and experience to help businesses achive their goals and create a strong online presence.</span>
      <div className={styles.wrokimgs}>
        <img src="/assets/portfolio-1.png" alt="Image" />
        <img src="/assets/portfolio-2.png" alt="Image" />
        <img src="/assets/portfolio-3.png" alt="Image" />
        <img src="/assets/portfolio-4.png" alt="Image" />
        <img src="/assets/portfolio-5.png" alt="Image" />
        <img src="/assets/portfolio-6.png" alt="Image" />
      </div>
    </section>
  )
}
