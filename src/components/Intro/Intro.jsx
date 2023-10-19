import styles from './Intro.module.css';
import Button from '../Button/Button';


export default function Intro() {
  return (
    <section className={styles.intro} id='intro'>
        <div className={styles.introcontant}>
            <span className={styles.hello}>Hello,</span>
            <span className={styles.introText}>I'm <span className={styles.introName}>Gautam Singh</span><br />Website Designer</span>
            <p className={styles.introPara}> I am a skilled and passionate Web-Designer with experience in creating visually appealing and user-friendly websites.</p>
            <Button contact={true} icone='/assets/hireme.png' text='Hire Me'></Button>
        </div>
        <img className={styles.introBG} src="/assets/image.png" alt="Image" />

    </section>
  )
}
