import React from "react";

const Testimonial = ({ img, desc, name }) => {
  return (
    <>
    <span className="author">{name}</span>
      <div className="col-md-2 col-sm-2 hidden-xs">
        <div className="thumb">
          <img
            src={img}
            alt="testimonial-customer"
          />
        </div>
      </div>
      <div className="text col-md-10 col-sm-10 col-xs-12">
        <p>
          {desc}
        </p>
        
      </div>
    </>
  );
};

export default Testimonial;
