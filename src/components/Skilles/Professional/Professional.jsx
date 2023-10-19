
import styles from './Professional.module.css';
import ProgressBar from './ProgressBar/ProgressBar';

export default function Professional() {

    return (
        <div className={styles.profcontainer}>
                <h2 className={styles.Tittle}>Professional Skills</h2>
            <div className={styles.container}>
                <div className={styles.skills}>
                    <div className={styles.skill_bar}>
                        <ProgressBar progressTittle='HtML' percent='95%' className='html' />
                        <ProgressBar progressTittle='CSS' percent='45%' className='css' />
                        <ProgressBar progressTittle='JAVA SCRIPT' percent='80%' className='javascript' />
                    </div>
                    <div className={styles.skill_bar}>    
                        <ProgressBar progressTittle='ILLUSTRATOR' percent='45%' className='ILLUSTRATOR' />
                        <ProgressBar progressTittle='JAVA SCRIPT' percent='80%' className='javascript' />
                        <ProgressBar progressTittle='ILLUSTRATOR' percent='45%' className='ILLUSTRATOR' />
                    </div>    

                </div>
            </div>
        </div>
    );
}
