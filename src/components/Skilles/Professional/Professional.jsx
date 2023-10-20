
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
                        <ProgressBar progressTittle='CSS' percent='90%' className='css' />
                        <ProgressBar progressTittle='JAVA SCRIPT' percent='80%' className='javascript' />
                    </div>
                    <div className={styles.skill_bar}>    
                        <ProgressBar progressTittle='REACT JS' percent='88%' className='reactjs' />
                        <ProgressBar progressTittle='BOOTSTRAP' percent='80%' className='javascript' />
                        <ProgressBar progressTittle='RESPONSIVE DESIGN' percent='94%' className='RESPONSIVE' />
                    </div>    

                </div>
            </div>
        </div>
    );
}
