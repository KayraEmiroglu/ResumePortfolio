import React from 'react'
import "./main.css"
import About from './about/About'
import Experiences from './experiences/Experiences'


const Main = () => {
  return (
    <div className="main-content pull-right">
        <About/>
        <Experiences/>
    </div>
  )
}

export default Main