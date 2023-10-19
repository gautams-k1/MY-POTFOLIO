import styles from './Introduction.module.css';


export default function Introduction() {
  return (
    <div className={styles.Introduction} id='Home'>
      <div className={styles.Introduction_text}>
            <span className={styles.hello}>Hello!</span>
            <h3><span className={styles.captal}>i'm </span>Gautam singh</h3>
            <p>Web & Interface Designer</p>
      </div>
    </div>
  )
}
