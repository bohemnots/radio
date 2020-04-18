import React from "react";

import "./styles/footer.css";

const rel = "noopener noreferrer";
const target = "_blank";

const fb = "https://www.facebook.com/bohemnotsradio/";
const ig = "https://www.instagram.com/bohemnotsradio/";
const tw = "https://twitter.com/bohemnotsradio";
const sc = "https://soundcloud.com/bohemnotsradio";
const pt = "https://www.patreon.com/bohemnotsradio";

export default function Footer() {
  return (
    <nav className="social-links">
      <ul>
        <li>
          <a className={'donate'}  href={pt} target={target} rel={rel}>
            <img src="images/donate.svg" width="60" alt="donate" />
          </a>
        </li>
        <li>
          <a href={fb} target={target} rel={rel}>
            <i className="fa-lg fa fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href={ig} target={target} rel={rel}>
            <i className="fa-lg fa fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href={tw} target={target} rel={rel}>
            <i className="fa-lg fa fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href={sc} target={target} rel={rel}>
            <i className="fa-lg fa fa-soundcloud"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}
