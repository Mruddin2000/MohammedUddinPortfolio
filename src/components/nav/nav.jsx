import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {MdOutlineMapsHomeWork} from 'react-icons/md'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('about')} className={activeNav === '#' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#experience'onClick={() => setActiveNav('experience')} className={activeNav === '#' ? 'active' : ''}><MdOutlineMapsHomeWork/></a>
      <a href='#portfolio'onClick={() => setActiveNav('portfolio')} className={activeNav === '#' ? 'active' : ''}><BiBook/></a>
      <a href='#contact'onClick={() => setActiveNav('contact')} className={activeNav === '#' ? 'active' : ''}><BiMessageSquareDetail/></a>

</nav>
    )
}

export default Nav