import React from "react";

import "./projects.css";
function ProjectsHoc(props) {
  return (
    <React.Fragment>
      <div className="container">
        <br />
        <div className="card">
          <div className="overflow-hidden">
            <img src={props.img} className="card-img-top " alt="..." />
          </div>

          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.desc}</p>
            <a
              className="btn btn-outline-success"
              href={props.link}
              target="_blank"
            >
              Goto Project{" "}
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default ProjectsHoc;
