import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [show, setShow] = useState(false)
    const toggle = ()=>{
        setShow(!show)
    }
  return (
    <div>
        <div className="navbar bg-black">
            <div className="links">
                <ul className={`navlinks ${show?"open":"close"}`}>
                    <li className='navitems'>
                        <Link  to="/">Home</Link>
                         </li>
                 <li className='navitems'>
                 <a  href="#skillSection">Skills</a>
                    </li>
                    <li className='navitems'>
                 <a  href="#projectSection">Projects</a>
                    </li>
                 <li className='navitems'>
                        <a href="#exp">Experience</a>
                    </li>
                    <li className='navitems'>
                        <a href='#about'>About</a>
                    </li>
                 <li className='navitems'>
                        <Link  to="/contact">Contact</Link>
                    </li>
                    


                </ul>
                <div className="burger" onClick={toggle}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>

                </div>
            </div>
        </div>
    </div>
  )
}
