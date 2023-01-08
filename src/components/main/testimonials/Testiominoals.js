import React from 'react'
import SectionHeader from '../section-header/SectionHeader'
import testimonials from "./testimonials.json";
import "./testimonial.css"
import Testimonial from './Testimonial';


const Testiominoals = () => {
  return (
    <section id="testimonials" className="testimonials">
        <SectionHeader title = "Testimonials" isButtonVisible={false}/>

        
        <div className="row">
            {testimonials.map((test,i)=>(
            <div className="col-md-12 col-sm-12 col-xs-12" key={i}>
            <Testimonial {...test}/>
            </div>
            ))}
        </div> 

       
    </section>
  )
}

export default Testiominoals