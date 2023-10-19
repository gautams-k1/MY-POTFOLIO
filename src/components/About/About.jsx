import styles from './About.module.css';



export default function About() {
  return (
    <div className={styles.About} id='About' >
        
        
        <div className={styles.About_Img}>
            <img className={styles.about_IMG} src="/my-Potfolio/assets/image.jpg" alt="Image" />
            <div className={styles.resume_Btn}>
              <a href="/my-Potfolio/assets/GAUTAM SINGH KHICHI RESUME.pdf" download>
                <img className={styles.rasumeIMG} src="/my-Potfolio/assets/download.png" alt="Image" /> Download Resume
              </a>
            </div>
        </div>
        <div className={styles.About_Text}>
            <div className={styles.tittle}><h2>About Me</h2></div>
            <p>Hello! "I'm Gautam Singh, a skilled web developer and designer with a strong grasp of the fundamentals. Having an in-depth knowledge, including advanced HTML5, CSS3, JavaScript, jQuery, and Angular JS, I create attractive and functional websites. I pay attention to the finer details and prioritize user-friendly design. I'm enthusiastic about expanding my skills and taking on exciting web projects."</p>
            <ul className={styles.profile_menu}>
              <li><span>Name:</span> Gautam Singh Khichi</li>
              <li><span>Date of Birth:</span> 17 May 2001</li>
              <li><span>Address:</span> Choutina will , Bikaner , Rajasthan</li>
              <li><span>Phone:</span> 9999030365</li>
              <li><span>E-mail:</span> gautamsinghk1@gmail.com</li>
            </ul>
        </div>
    </div>
  )
}
