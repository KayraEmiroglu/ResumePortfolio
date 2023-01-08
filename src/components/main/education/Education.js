import React from "react";

const Education = ({school, date, desc}) => {
  return (
    <div className="top-item resume-item">
      <h2>{school}</h2>
      <span>{date}</span>
      <p>
        {desc}
      </p>
    </div>
  );
};

export default Education;
