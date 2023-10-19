import styles from './Button.module.css'

export default function Button({isSubmit ,icone, text, contact }) {
//   console.log(
//     onclick
//   )

//   const contactView = ()=>{
//       if(contact){document.getElementById("contact").scrollIntoView({behavior:'smooth'})}
//   }

//   // const SubmitFrom = () =>{
//   //   ty
//   // }
    

// //   onclick={()=>{
// //     document.getElementById("contact").scrollIntoView({behavior:'smooth'})
// // }}

  return (


    <div>
      <button className={isSubmit? styles.Submitbtn : styles.btn}
      // onClick={ contactView}
      type={isSubmit ? 'submit' : 'button'}
      ><img src={icone} alt="" 
      
      />{text}</button>
    </div>
  )
}
