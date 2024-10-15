import React from 'react'
import Main from './Components/Main'
import Skills from './Components/Skills'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import About from './Components/About'

export default function App() {
  return (
    <div>
       <Navbar />

<Routes>
 
<Route exict path="/" element ={ <Main />} />

 <Route path="/about" element ={ <Skills />} />
 <Route path="/about" element ={ <Projects />} />
 <Route path="/about" element ={ <Experience />} />
 <Route path="/about" element ={ <About />} />
 <Route path="/contect" element ={ <Contact/>} />


</Routes>
    </div>
  )
}
