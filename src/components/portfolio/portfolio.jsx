import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/website.png'
import IMG2 from '../../assets/game.png'
import IMG3 from '../../assets/app.jpg'
import IMG4 from '../../assets/netbeans.png'
import IMG5 from '../../assets/android.jpg'
import IMG6 from '../../assets/c.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Central London Attraction",
    link:'https://github.com/Mruddin2000/CentralLondonTourist.git'
    ,
    demo: "https://drive.google.com/drive/folders/1hwYOyapHteO_HsAQddX0axKBOmmLJwUx?usp=sharing",


  },
  {
    id: 2,
    image: IMG2,
    title: "Super Bouncer Game",
    link: "https://github.com/Mruddin2000/SuperBouncerGame.git",
    demo: "https://drive.google.com/drive/folders/1FstnsvEdFh-yI7dbQjII0Qj2Kx5rKzwc?usp=sharing"
  },
  {
    id: 3,
    image: IMG3,
    title: "Progress Checker",
    link: "https://github.com/Mruddin2000/FYP.git",
    demo: "https://drive.google.com/drive/folders/1s5N9vQSQU51pQHaAUu9Ib3niEVGJ9e--?usp=sharing"
  },
  {
    id: 4,
    image: IMG4,
    title: "Train Menu Operator",
    link: "https://github.com/Mruddin2000/TrainStation.git",
    demo: "https://drive.google.com/drive/folders/13xp6gH3bYPkJEwhITo3J507SINu83dpB?usp=sharing"
  },
  {
    id: 5,
    image: IMG5,
    title: "Movie Site",
    link: "https://github.com/Mruddin2000/MovieSite.git",
    demo: "https://drive.google.com/drive/folders/1UU3RZwfX56H_I_cpQUKRXwn7I4NEVGRh?usp=sharing"
  },
  {
    id: 6,
    image: IMG6,
    title: "Project Management System",
    link: "https://github.com/Mruddin2000/ProjectManagementSystem.git",
    demo: "https://drive.google.com/drive/folders/1HBogU8WI6oLtKKxsvgGy2xiE4Y3YWKtS?usp=sharing"
  },
]
const portfolio = () => {
  return (
<section id='portfolio'>
  <h5>My Recent Work</h5>
  <h2>Portfolio</h2>

  <div className='container portfolio_container'>
{
  data.map(({id, image,title, link, demo}) =>{
    return (
      <article className='portfolio_item'>
  <div className='portfolio_item-image'>
    <img src={image} alt={title}/>
  </div>
  <h3>{title}</h3>
  <div className='portfolio_item-cta'>
  <a href={link} className='btn' target='_blank'>Github</a>
  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
  </div>

</article>

    )
  })
}
  </div>
</section>  )
}

export default portfolio