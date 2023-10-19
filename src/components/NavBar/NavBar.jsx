import styles from './navBar.module.css'
import Logo from '/assets/logo.png'
import Menu from '/assets/menu.png'
import Button from '../Button/Button';
import { Link } from 'react-scroll';
import { useState , useEffect } from 'react';

export default function NavBar (){
    const [showManu, setshowManu] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
          const navBar = document.getElementsByClassName(styles.navBar_outer)[0];
          if (window.scrollY >= 200) {
            navBar.classList.add(styles.navBar_Bg);
          } else {
            navBar.classList.remove(styles.navBar_Bg);
          }
        };
    
        // Add the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);



    return <div className={styles.navBar_outer}>
        <nav className={styles.navBar}>
            <img className={styles.Logo} src={Logo} alt=""/>
            <div className={styles.dextopManu}>
               <Link activeClass={styles.active} to='Home' spy={true} smooth={true} offset={-100} duration={500} className={styles.dextopManuitems}>Home</Link>
               <Link activeClass={styles.active} to='About' spy={true} smooth={true} offset={-50} duration={500} className={styles.dextopManuitems}>About</Link>
               <Link activeClass={styles.active} to='Skilles' spy={true} smooth={true} offset={-50} duration={500} className={styles.dextopManuitems}>Skilles</Link>
               <Link activeClass={styles.active} to='work' spy={true} smooth={true} offset={-50} duration={500} className={styles.dextopManuitems}>Potfolio</Link>
            </div>
            <Link activeClass={styles.BTNactive} to='contact' spy={true} smooth={true} offset={-50} duration={500} onClick={()=>setshowManu(false)} className={styles.navBtn}><Button icone='/assets/contact.png' text='Contact Me' contact={true}></Button></Link>

            <img className={styles.MobManu} src={Menu} alt="" onClick={()=>setshowManu(!showManu)}/>
            <div className={styles.Manu} style={{display: showManu ? 'flex' : 'none'}}>
               <Link activeClass={styles.active} to='Home' spy={true} smooth={true} offset={-100} duration={500} className={styles.Manuitems} onClick={()=>setshowManu(false)}>Home</Link>
               <Link activeClass={styles.active} to='About' spy={true} smooth={true} offset={-50} duration={500} className={styles.Manuitems} onClick={()=>setshowManu(false)}>About</Link>
               <Link activeClass={styles.active} to='Skilles' spy={true} smooth={true} offset={-50} duration={500} className={styles.Manuitems} onClick={()=>setshowManu(false)}>Skilles</Link>
               <Link activeClass={styles.active} to='work' spy={true} smooth={true} offset={-50} duration={500} className={styles.Manuitems} onClick={()=>setshowManu(false)}>Potfolio</Link>
            </div>

        </nav>
    </div>;
}                         