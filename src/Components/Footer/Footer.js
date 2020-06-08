import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { HashLink as Link } from "react-router-hash-link";

function Footer() {
  return (
    <React.Fragment>
      <div className="fluid footerlinks">
        <footer className="container page-footer">
          <div>
            <br />
            <br />
            <ul>
              <li>
                <Link smooth to="#home" className="text-dark">
                  Home
                </Link>
              </li>
              <li>
                <Link smooth to="#projects" className="text-dark">
                  Porfolio
                </Link>
              </li>
              <li>
                <Link smooth to="#education" className="text-dark">
                  Education
                </Link>
              </li>
            </ul>
          </div>
          <div className="footericons">
            <a href="https://www.Twitter.com/" target="_blank">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://www.Youtube.com/"
              target="_blank"
              style={{ color: "red" }}
            >
              <FontAwesomeIcon icon={faYoutube} size="2x" className="ml-5" />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <FontAwesomeIcon icon={faFacebook} size="2x" className="ml-5" />
            </a>
          </div>
          <div className="text-center copyright">
            <small>Developed By Sufu_bhai</small>
            <br />
            <small>&copy; By Sufu_bhai 2020</small>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}
export default Footer;
