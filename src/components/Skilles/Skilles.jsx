import styles from './Skilles.module.css';
import Professional from './Professional/Professional'
import Cards from './Cards/Cards';

export default function Skilles() {
  return (
    <section className={styles.sliks} id='Skilles'>
       

    <Professional></Professional>
    <Cards></Cards>
    </section>
  )
}
