import React from "react";

function Skills() {
  return (
    <React.Fragment>
      <div className="container">
        <br />
        <h3>Skills</h3>
        <br />
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated "
            role="progressbar"
            style={{ width: "95%" }}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            HTML
          </div>
        </div>
        <br />
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated bg-info"
            role="progressbar"
            style={{ width: "90%" }}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            CSS
          </div>
        </div>
        <br />
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated bg-sucess"
            role="progressbar"
            style={{ width: "85%" }}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            Bootstrap
          </div>
        </div>
        <br />
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
            role="progressbar"
            style={{ width: "80%" }}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            JavaScript
          </div>
        </div>
        <br />
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated bg-warning "
            role="progressbar"
            style={{ width: "85%" }}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            React Js
          </div>
        </div>
        <br />
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated bg-dark"
            role="progressbar"
            style={{ width: "96%" }}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            Node js
          </div>
        </div>
        <br />
      </div>
    </React.Fragment>
  );
}
export default Skills;
