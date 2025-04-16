import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about' >
      <div className='about-left'>
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon'onClick={()=>{setPlayState(true)}}/>
        </div>  

        <div className='about-right'>
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leader Today</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quaerat architecto minus impedit iusto aspernatur sunt dignissimos quia, ipsum dolorem ex, nesciunt molestiae dolor a. Nulla, delectus! Quasi eius excepturi aliquid, velit voluptatem, nobis nihil in alias nam est, dolores temporibus nostrum quis sequi at provident illo qui. Eum obcaecati delectus accusantium amet aut praesentium id voluptates facere aliquam optio! Praesentium provident possimus, sit quidem blanditiis ad nulla molestias aspernatur!</p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis earum repellendus, eligendi deserunt illo dolorum nostrum modi, veritatis, quidem sequi ratione rem quasi doloribus pariatur inventore totam corporis odit velit.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate harum numquam quasi optio tempore beatae facilis ipsam tempora eveniet. Reiciendis esse, consequuntur quisquam molestias vero dolorem quia accusantium nihil. Commodi!</p>
        </div>
      
    </div>
  )
}

export default About
