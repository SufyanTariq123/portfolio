import React from "react";
import cx from "classnames";
import style from "./Header.module.css";
import { HashLink as Link } from "react-router-hash-link";

function Header() {
  return (
    <React.Fragment>
      <div className="fluid" id="home">
        <nav
          className={cx(
            "navbar navbar-dark fixed-top navbar-expand-lg  bg-dark  ",
            style.opacity
          )}
        >
          <a className="navbar-brand ml-5  text-white">Sufu Bhai</a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#id"
          >
            <span className="navbar-toggler-icon white"></span>
          </button>

          <div className="collapse navbar-collapse" id="id">
            <div className="container">
              <ul className="navbar-nav ml-auto ">
                <li className="nav-item active ">
                  <Link
                    smooth
                    to="#home"
                    className={cx("nav-link text-white ", style.textcolor)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    smooth
                    to="#education"
                    className={cx("nav-link text-white ", style.textcolor)}
                  >
                    Education
                  </Link>
                </li>
                <li>
                  <Link
                    smooth
                    to="#projects"
                    className={cx("nav-link text-white ", style.textcolor)}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    smooth
                    to="#contact"
                    className={cx("nav-link text-white ", style.textcolor)}
                  >
                    Contact Me
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}
export default Header;
