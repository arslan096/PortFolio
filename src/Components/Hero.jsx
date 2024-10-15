import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram,  faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
  return (
    <div className='hero'>
        <div className="content">
        <h1>
            Hi,I am Muhammad Arslan
        </h1>
        <h2>I am a MERN-Stack Developer</h2>
        <p>I am a MERN stack developer at EziTech, where I specialize in building dynamic <br></br>
         web applications using MongoDB, Express.js, React, and Node.js. With a passion for <br></br>
         creating seamless user experiences and efficient back-end systems, I thrive on tackling complex challenges and delivering high-quality solutions.</p>
         
      <div className="social-icons">
        <a href="https://www.facebook.com/profile.php?id=100008450387068&mibextid=kFxxJD" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="icon" />
        </a>
        <a href="https://www.instagram.com/akmalktk096/profilecard/?igsh=MW1hN2Q4aW0xMTFzdQ==" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="icon" />
        </a>
        {/* <a href="mailto:your-email@gmail.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faEnvelope} className="icon" /> 
        </a> */}
        <a href="https://www.linkedin.com/in/muhammad-arsalan-4449a3332" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </a>
      </div>
         </div>
         
         
         <div className="section-background">
            <section className='background'>
                {/* <h1>background image</h1> */}

            </section>

         </div>
    </div>
  )
}
