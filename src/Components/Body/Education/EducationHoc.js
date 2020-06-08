import React from "react";

import style from "./Education.module.css";
import cx from "../../../../node_modules/classnames";
import { faPeopleArrows } from "@fortawesome/free-solid-svg-icons";
function EducationHoc(props) {
  return (
    <React.Fragment>
      <div className="container">
        <br />
        <div className="card">
          <div className="overflow-hidden">
            <img
              src={props.img}
              className={cx("card-img-top ", style.img)}
              alt="..."
            />
          </div>

          <div className="card-body">
            <h3 className="text-center">2012-2014</h3>
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              {props.education}
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default EducationHoc;
