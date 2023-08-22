import { useState } from 'react'
import './App.css'
import homeback from './IMAGES/homeback.jpg'
import res from './IMAGES/RES.pdf'
import Project from './Project'
import gymflow from './IMAGES/gymflow.png'
import fitfinder from './IMAGES/fitfinder.png'
import cvconnect from './IMAGES/cvconnect.png'
import Skill from './Skill'
import react from './IMAGES/languages/react.png'
import javascript from './IMAGES/languages/javascript.png'
import html from './IMAGES/languages/html.png'
import css from './IMAGES/languages/css.png'
import native from './IMAGES/languages/react-native.png'
import python from './IMAGES/languages/python.png'
import express from './IMAGES/languages/express.png'
import node from './IMAGES/languages/node.png'
import PostgressSQL from './IMAGES/languages/PostgressSQL .png'
import MongoDB from './IMAGES/languages/MongoDB.png'
import Github from './IMAGES/languages/Github.png'
import Visual from './IMAGES/languages/Visual Studio Code.png'
import Pycharm from './IMAGES/languages/Pycharm.png'
import linkdin from './IMAGES/linkdinwhite.png'
import github from './IMAGES/github.png'
import emailjs from 'emailjs-com';




function App() {
  const [email, setemail] = useState()
  const [name, setname] = useState()
  const [text, settext] = useState()
  const [current, setcurrent] = useState(0)
  const [projects, setprojects] = useState(false)
  const [contact, setcontact] = useState(false)
  const [about, setabout] = useState(false)

  function reveal() {
    let reveals = document.querySelectorAll(".not");
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
      // else {
      //   reveals[i].classList.remove("active");
      // }
    }
  }

  function revealskill() {
    let reveals = document.querySelectorAll(".skill-div");
    console.log(reveals);
    for (let i = 0; i < reveals.length; i++) {
      reveals[i].classList.add("activeskill");
      // setTimeout(() => {
      //   reveals[i].classList.remove("activeskill");
      // },2000); 
      reveals[i].addEventListener("animationend", () => {
        reveals[i].classList.remove("activeskill");
      }, { once: true });
    }
  }

  // {name:'',img:''}

  window.addEventListener("scroll", reveal);

  const stack = ['Front-End', 'Back-End', 'Tools']
  const skillsarray = [
    [{ name: 'React', img: native }, { name: 'Javascript', img: javascript }, { name: 'Html', img: html }, { name: 'Css', img: css }, { name: 'React-Native', img: native }]
    , [{ name: 'Python', img: python }, { name: 'Express', img: express }, { name: 'Node.js', img: node }, { name: 'PostgressSQL ', img: PostgressSQL }, { name: 'MongoDB', img: MongoDB }]
    , [{ name: 'Github', img: Github }, { name: 'Visual Studio Code', img: Visual }, { name: 'Pycharm', img: Pycharm }]
  ]


  function emailforme(e) {
    e.preventDefault()
    const emailtemplate = {
      reply_to: email,
      email_name: name,
      email_text: text,
    }
    emailjs.send('service_121jt28', 'template_2dsnlbo', emailtemplate, 'QEn71pL3Eu8fl57Hz')
      .then((result) => {
        console.log(result);
      }, (error) => {
        console.log(error);
      });

    setemail('')
    setname('')
    settext('')
  }


  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = res
    link.download = 'GilKricheli.pdf';
    link.click();
  };

  function scroll(e) {
    if (e=='projects') {
      window.scroll({top: 1450,left: 0,behavior: 'smooth'})
    }
    else if (e=='contact'){
      window.scroll({top:4240,right: 0,behavior: 'smooth'})
    }
    else if (e=='about'){
      window.scroll({top: 765,left: 0,behavior: 'smooth'})
    }
    else if (e=='home'){
      window.scroll({top: 0,left: 0,behavior: 'smooth'})
    }
    else if (e=='skills'&&window.innerWidth > 790){
      window.scroll({top: 2250,left: 0,behavior: 'smooth'})
    }
    else if (e=='skills'&&window.innerWidth < 790){
      window.scroll({top: 3550,left: 0,behavior: 'smooth'})
    }
  }


  return (
    <div className='main-main'>
      <nav className='nav-bar'>
        <div className='links-side'>
          <h5 className={projects ? 'nav-link-big' : 'nav-link'} value='projects' onClick={(e) => { setprojects(true), setabout(false), setcontact(false),scroll('projects')}}>
            PROJECTS
          </h5>
          <h5 className={contact ? 'nav-link-big' : 'nav-link'} value='contact' onClick={(e) => { setprojects(false), setabout(false), setcontact(true) ,scroll('contact')}}>
            CONTACT
          </h5>
          <h5 className={about ? 'nav-link-big' : 'nav-link'} value='about' onClick={(e) => { setprojects(false), setabout(true), setcontact(false) ,scroll('about')}}>
            ABOUT
          </h5>
        </div>
        <h1 className='logo' onClick={()=>{ setprojects(false), setabout(false), setcontact(false),scroll('home')}}>GK</h1>
      </nav>

      <div className='hero-section-container'>
        {/* <img src='' alt="" className='background' /> */}
        <div className='background'></div>
        <div className='hero-section-text-container'>
          <h1 className='hero-text-one'>Hi , My name is <span className='name'>Gil Kricheli.</span> </h1>
          <h1 className='hero-text-two'>I'm a full-stack developer</h1>
          <button className='projects-button' onClick={()=>{ setprojects(false), setabout(false), setcontact(false),scroll('skills')}}>My Skills</button>
        </div>
      </div>

      <div className='about-section-container'>
        <div>
          <h1 className='about-us-title not'>About Me</h1>
          <hr className='breaktwo not' />
        </div>
        <div className='about-content '>
          <div className='about-text not'>
            <p className='about-text-body'>
              Motivated and dedicated Full Stack Developer with a strong affinity for the field of
              full stack development.After 3 years in the army being in the combat field i grew a
              desire to evolve and improve as time goes on. I am highly driven to gain valuable
              experience, continuously improve, and grow as a developer and to be a part of a
              team.
            </p>
            <button className='projects-button resume' onClick={() => handleDownload()}>Resume</button>
          </div>
          <img className='about-image not' src="https://media.tenor.com/NOYF3f82b_gAAAAC/programmer.gif" alt="" />
          {/* <div className='about-image'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, rem nulla? Aliquid ullam illo natus voluptatibus ipsum, nesciunt repudiandae laboriosam cum dolor obcaecati eos, vel amet inventore. Sint, dicta magnam.
           </div> */}
        </div>
      </div>

      <div className='project-section-cont'>
        <div>
          <h1>My Projects</h1>
          <hr className='break' />
        </div>

        <div className='Projects-area'>
          <Project image={fitfinder} info={'Developed a user-friendly website allowing users to input their body measurements such as waist and chest, and receive accurate clothing size suggestions across diverse retail stores, streamlining the shopping experience'} title={'fitfinder'} live={"https://fitifinder.netlify.app"} code={"https://github.com/gilkrich/fitfinderfront"}></Project>
          <Project image={cvconnect} info={'Designed an intuitive website enabling users to effortlessly create personalized CVs. By inputting their information, the platform generates professional CV templates tailored to individual details, simplifying the resume-building process.'} title={'cvconnect'} live={"https://cvconnect.netlify.app"} code={"https://github.com/gilkrich/Cvfront"}></Project>
          <Project image={gymflow} info={'Crafted an interactive membership-based website dedicated to fitness enthusiasts. Upon registration, members gain access to diverse workout plans and weight recommendations customized to their unique BMI and body proportions, ensuring tailored fitness routines for optimal results.'} title={'GymFlow'} live={'https://gymflow.netlify.app'} code={'https://github.com/gilkrich/workout-site'}></Project>
          {/* <Project image={gymflow} title={'GymFlow'}></Project> */}

        </div>
      </div>

      <div className='skills-section'>
        <div>
          <h1>My Skills</h1>
          <hr className='break' />
        </div>

        <div className='skills-button-cont'>
          {skillsarray.map((item, index) => (
            <button className='skill-button' onClick={() => { setcurrent(index), revealskill() }}>{stack[index]}</button>
          ))}
        </div>

        <div className='skill-cont'>
          {skillsarray[current].map((item, index) => (
            <Skill pic={item.img} title={item.name}></Skill>
          ))}
        </div>
      </div>


      <div className='Contact-section'>
        <div>
          <h1 style={{ color: 'white', marginTop: '50px' }}>Get in touch</h1>
          <hr className='break' />
        </div>
        <div className='contact'>
          <form action="" className='left-side' onSubmit={(e) => emailforme(e)}>
            <div className='small-cont'>
              <input type="email" value={email} onChange={(e) => setemail(e.target.value)} className='small-input' placeholder='email' />
              <input type="text" value={name} onChange={(e) => setname(e.target.value)} className='small-input' placeholder='name' />
            </div>
            <textarea name="" id="" value={text} onChange={(e) => settext(e.target.value)} cols="30" rows="10" className='big-input' placeholder='text-content'></textarea>
            <button type='submit' className='submit'>Submit</button>
          </form>
          <div className='my-details'>
            <div>
              <h4 style={{ color: 'white' }}>Email:</h4>
              <p style={{ color: 'white' }}>gildebil2@gmail.com</p>
            </div>
            <div>
              <h4 style={{ color: 'white' }}>Phone:</h4>
              <p style={{ color: 'white' }}>052-8708464</p>
            </div>
            <h4 style={{ color: 'white' }}>Links:</h4>
            <div className='social-cont'>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={linkdin} className='social-image' alt="" width='40px' />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={github} className='social-image' alt="" width='40px' />
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
