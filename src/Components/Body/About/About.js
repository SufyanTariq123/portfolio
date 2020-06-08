import React from "react";
import bg from "../../../Images/w.jpg";
import style from "./About.module.css";
import { HashLink as Link } from "react-router-hash-link";
import Slide from "react-reveal/Slide";
function About() {
  return (
    <React.Fragment>
      <Slide top>
        <div className="fluid">
          <img src={bg} className={style.bg} />
          <div className="container">
            <div className={style.about}>
              <h1 className={style.textcolor}>Welcome To My PortFolio</h1>
              <h5 className="text-justify mr-3  ">
                I am a Computer Scientist a self-motivated IT professional with
                huge knowledge and proficiency in HTML,CSS, JavaScript, React.
                Js and responsive web development.I am extremely motivated to
                constantly develop my skills and grow professionally to earn
                experience by working with experts for learning new skills.
              </h5>
              <br />
              <Link smooth to="#contact">
                <button className="btn btn-danger ml-5 ">Contact Me</button>
              </Link>
            </div>
          </div>
        </div>
      </Slide>
    </React.Fragment>
  );
}
export default About;
