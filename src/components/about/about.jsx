import React from 'react'
import './about.css'
import ME2 from '../../assets/secondpic.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import {MdOutlineMapsHomeWork} from 'react-icons/md'



const about = () => {
  return (
<section id="about">
  <h5>Get to know</h5>
  <h2>About me</h2>

  <div className="container about_container">
    <div className="about_me">
      <div className="about_me-image">
        <img src={ME2} alt="Picture of me"/>
      
      </div>
    </div>

<div className="about_content">
<div className="about_cards">
  <article className="about_card">
    <FaAward className="about_icon"/>
    <h5>Academic Achievements</h5>
    <small>BSc Computer Sceince</small><br></br>
    <small>BTEC Extended Diploma</small><br></br>
    <small>GCSE</small>
  </article>
  <article className="about_card">
    <MdOutlineMapsHomeWork className="about_icon"/>
    <h5>Work Experience</h5>
    <small>6+ Years</small>
  </article>
  <article className="about_card">
    <VscFolderLibrary className="about_icon"/>
    <h5>Academic Projects</h5>
    <small>20+ Completed</small>
  </article>
  </div>
  <div className='intro2'>
  <p>
    Hello again, I've Recently Graduated with 2:1 from University of Westminster in Computer Science. I'm currently employed at Sainsburys Local Store with a part time role.
    </p>
    <p>
    I am looking to challenge myself with a new and exciting challenge in software development. I am mostly comfortable with Java and C# Programming Language. I am also familiar with other programming languages too which are listed below
  </p>
  </div>
  <a href='#contact' className='btn btn-primary'>Contact Me</a>
</div>
  </div>
</section>
  )
}

export default about