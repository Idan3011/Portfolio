import React from 'react'
import './About.css'
import '../header/Header.css'



const About = ({focus1}) => {



  return (
    
    <>
    <div id="about"  onMouseEnter={focus1} onMouseLeave={focus1}>
    <div className="header"><h2>About Me</h2>
    <h4>KNOW ABOUT ME</h4>
    </div>
     <section className='about-container'>
        <h1>My Name Is Idan</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt debitis deleniti dolor nam itaque quae autem, dolorum earum repudiandae quia culpa doloribus pariatur suscipit beatae eaque consectetur incidunt aut numquam!</p>
        <h4>Age: <span>32</span></h4>
        <h4>Gender: <span>Male</span></h4>
        <h4>Language: <span>Hebrew, English</span></h4>
        <h4>Work: <span>Web Developer</span></h4>
     </section>
      <a href="#form-contact"><button  className='form-btn'>Contact Me</button></a>
    
    </div>
   
    </>
   
  )
}





export default About