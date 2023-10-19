import './App.css'
// import Intro from './components/Intro/Intro';
import Introduction from './components/Introduction/Introduction'
import About from './components/About/About'
import NavBar from './components/NavBar/NavBar'
import Skilles from './components/Skilles/Skilles'
// import Work from './components/Work/Work'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import React from 'react'

function App() {

  return (
    <>
    <div className='AppDiv'>
     <NavBar></NavBar>
     {/* <Intro/> */}
     <Introduction></Introduction>
     <About></About>
     <Skilles></Skilles>
     {/* <Work></Work> */}
     <MyWork></MyWork>
    <Contact></Contact>
    </div>
    <Footer></Footer>
    </>
  )
}

export default App
