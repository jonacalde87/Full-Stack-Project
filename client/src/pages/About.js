import React from 'react'
import RollTide from '../images/RollTide.bmp'

export default function About() {
  return (
    <div
    className="about-content"
      style={{ 
        backgroundImage: `url(${RollTide})`,
       
      }}>
        <p>
        Hello! My name is Jonathan, and I have a passion for learning and developing websites. <br/><br/>
        When I am not coding, you will find me learning more about carnivorous plants in my backyard. <br/><br/>
        I have a saying, "if you are not teaching something, you should be learning something."<br/><br/>
        I started my professional journey by serving in the US Army.<br/><br/>
        After my service, I completed a Bachelor of Science majoring in Software Development from Bellevue University. <br/><br/>
        I built many great relationships during my service, which made me grow into the professional individual I am today.<br/><br/>
        I am currently enrolled in V School to solidify my skills and obtain more web development experience.<br/><br/><br/><br/><br/><br/>
        </p>
    </div>
  )
}
