import React from 'react'
import "./main.css"
import About from './about/About'
import Experiences from './experiences/Experiences'
import Educations from './education/Educations'
import Testiominoals from './testimonials/Testiominoals'
import Contacts from './contact-form/Contacts'


const Main = () => {
  return (
    <div className="main-content pull-right">
        <About/>
        <Experiences/>
        <Educations/>
        <Testiominoals/>
        <Contacts/>
    </div>
  )
}

export default Main