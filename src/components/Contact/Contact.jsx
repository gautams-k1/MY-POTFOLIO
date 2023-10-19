import styles from './contact.module.css';
import { useRef } from 'react';
import Button from '../Button/Button';
import emailjs from '@emailjs/browser';



export default function Contact() {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5yl70lg', 'template_1amh95j', form.current, 'wnutDM2O5EdjXOQkK')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent')
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className={styles.contact} id='contact'>
        <h3>Contact Me</h3>
        <span className={styles.dic}>Please fill out the form below to discuss any work opportunies</span>

        <form action="" className={styles.contact_form} ref={form} onSubmit={sendEmail}>
           
                <input type="text" name='from_name' placeholder='Your Name' required/>
               
            
                <input type="email" name='your_email' required placeholder='Your Email'/>
            
            
                <textarea name="message" cols="30" required rows="10" placeholder='Your Message'></textarea>
             
                <Button isSubmit={true} text='Submit'></Button>

        </form>
        <div className={styles.socialLinks}>
            <img src="/my-Potfolio/assets/instagram.png" alt="Image" />
            <img src="/my-Potfolio/assets/facebook-icon.png" alt="Image" />
            <img src="/my-Potfolio/assets/twitter.png" alt="Image" />
            <img src="/my-Potfolio/assets/inkedin.png" alt="Image" />
        </div>
    </section>
  )
}
