/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import '../css/footer.css';

function Footer() {
  return (
    <>
      <div className="section-content-container">
        <div>
          <a href="https://www.artesdosul.com" className="img-link">
            <img
              src="https://img.shields.io/endpoint?color=RGBA%2839%2C%20119%2C%20119%2C%201%29&amp;label=artesdosul&amp;url=https%3A%2F%2Fwww.artesdosul.com%2Fapi.php%3Fcallback%3Dweb"
              alt="Website"
              loading="lazy"
            />
          </a>
          <a href="https://x.com/artesdosul" className="img-link">
            <img
              src="https://img.shields.io/badge/X_Org-%40artesdosul-1d9bf0.svg"
              alt="X Org"
              loading="lazy"
            />
          </a>
          <a href="https://x.com/araguaci" className="img-link">
            <img
              src="https://img.shields.io/badge/X_User-%40araguaci-1d9bf0.svg"
              alt="X User"
              loading="lazy"
            />
          </a>
          <a href="https://stop-war-for-ever.vercel.app" className="img-link">
            <img
              src="https://img.shields.io/endpoint?color=purple&amp;label=STOP&amp;url=https%3A%2F%2Fwww.artesdosul.com%2Fapi.php%3Fcallback%3Dstop"
              alt="stop-war-for-ever"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
