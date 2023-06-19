import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiTwitter} from 'react-icons/si'



const HeaderSocials = () => {
  return (
<div className='header_socials'>
    <a href='https://www.linkedin.com/in/m0hammeduddin/' target="_blank"><BsLinkedin/></a>
    <a href='https://github.com/Mruddin2000' target="_blank"><FaGithub/></a>
    <a href='https://twitter.com/M0hammed_uddin' target="_blank"><SiTwitter/></a>

</div>
  )
}

export default HeaderSocials