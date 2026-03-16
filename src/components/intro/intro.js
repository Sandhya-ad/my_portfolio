import React, { useState } from "react";
import "./intro.css";
import bg from "../../assets/profilePic.jpeg";

const Intro = () => {

    const [fact, setFact] = useState("");

    const fetchRandomFact = async () => {
        try {
            const response = await fetch("https://api.api-ninjas.com/v1/facts", {
                headers:{
                    "X-API-Key":process.env.REACT_APP_FACTS_API_KEY
                }
    });
            const data = await response.json();
            setFact(data[0].fact);
        } catch (error) {
            setFact("Could not fetch a random fact at this time.");
        }
    };
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
        <span className ="randomFact">{fact && <>Random fact:{fact}</>}</span>
        <button className="factButton" onClick={fetchRandomFact}>
          {fact ? "Show Another Fact" :"Show Random Fact"}
        </button>
      </div>

      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;