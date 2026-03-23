import "./about.css";
import { useRef, useEffect } from "react";

import react from "../../assets/react.png";
import django from "../../assets/django.png";
import js from "../../assets/js.png";
import python from "../../assets/python.png";
import docker from "../../assets/docker.png";
import github from "../../assets/github.png";
import c from "../../assets/c.png";
import git from "../../assets/git.png";
import firebase from "../../assets/firebase.png";
import figma from "../../assets/figma.png";

const skills = [
  { name: "React", icon: react },
  { name: "Django", icon: django },
  { name: "JavaScript", icon: js },
  { name: "Python", icon: python },
  { name: "Docker", icon: docker },
  { name: "Github", icon: github },
  { name: "C", icon: c },
  { name: "Git", icon: git },
  { name: "Firebase", icon: firebase },
  { name: "Figma", icon: figma },
];

const About = () => {
  const trackRef = useRef(null);
  const posRef = useRef(0);
  const rafRef = useRef(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Wait for layout so scrollWidth is accurate
    const animate = () => {
      const halfWidth = track.scrollWidth / 2;

      if (!pausedRef.current) {
        posRef.current -= 1; // speed: px per frame
        if (Math.abs(posRef.current) >= halfWidth) {
          posRef.current = 0; // snap back exactly at the seam
        }
        track.style.transform = `translate3d(${posRef.current}px, 0, 0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    const slider = track.parentElement;
    const pause = () => (pausedRef.current = true);
    const resume = () => (pausedRef.current = false);
    slider.addEventListener("mouseenter", pause);
    slider.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(rafRef.current);
      slider.removeEventListener("mouseenter", pause);
      slider.removeEventListener("mouseleave", resume);
    };
  }, []);

  return (
    <section id="about">
      <h2 className="aboutTitle">About Me</h2>
      <p className="aboutText">
      I’m a 4th year Computer Science student who enjoys building things and learning as I go. I like taking an idea and slowly turning it into something real, even if it’s not perfect. Right now I’m just focused on improving, trying new things, and getting better over time.
      </p>
      <h3 className="skillsTitle">Skills & Tools</h3>
      <div className="skillsSlider">
        <div className="skillsTrack" ref={trackRef}>
          {[...skills, ...skills].map((skill, index) => (
            <div className="skill" key={index}>
              <img src={skill.icon} alt={skill.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;