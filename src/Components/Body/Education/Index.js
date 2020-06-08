import React from "react";
import EducationHoc from "./EducationHoc";
import college from "../../../Images/college.png";
import university from "../../../Images/university.png";
import Slide from "react-reveal/Slide";
export default function Education() {
  return (
    <React.Fragment>
      <br />
      <br />
      <Slide right>
        <div className="container" id="education">
          <h3>Education</h3> <br />
          <div className="card-deck ">
            <div className="col-md-4 col-sm-12">
              <EducationHoc
                title="FSC Pre Engineering"
                img={college}
                education={"Sir Syed College Wah Cantt"}
              />
            </div>
            <div className="col-md-4 col-sm-12">
              <EducationHoc
                title="BS Computer science"
                img={university}
                education={"COMSATS University Islamabad  "}
              />
            </div>
            <div className="col-md-4 col-sm-12">
              <EducationHoc
                title="Web development Course"
                img={college}
                education={"Digitec Institute wah Cantt"}
              />
            </div>
          </div>
        </div>
      </Slide>
    </React.Fragment>
  );
}
