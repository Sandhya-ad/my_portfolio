import React from "react";
import "./intro.css";
import bg from "../../assets/profilePic.jpeg";

const Intro = () => {
  return (
    <section className="intro">
      <div className="introContent">
        <span className="hello">Hello</span>
        <span className="introText">
          I'm <span className="introName">Sandhya</span>
          <br />
          Blah blah
        </span>
        <p className="introPara">
          I'm a 4th year Computer Science student. I love blah blah.
        </p>
      </div>

      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;