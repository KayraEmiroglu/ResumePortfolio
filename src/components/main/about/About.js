import React from 'react'
import SectionHeader from '../section-header/SectionHeader';
import Intro from './intro/Intro';
import Skills from './skills/Skills';
import "./about.css";


const About = () => {
  return (
    <section id="about" className="about">
        <SectionHeader title="About Us" isButtonVisible={true}/>
        <Intro/>
        <Skills/>
    </section>
  )
}
export default About