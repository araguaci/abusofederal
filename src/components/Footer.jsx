/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import '../css/footer.css';

function Footer() {
  return (
    <>
      <div className="section-content-container">
        <div>
          <p>
            <script
              async
              src="https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"
            />
            &nbsp;|&nbsp;
            <i className="fa fa-user" aria-hidden="true" />
            <span id="busuanzi_value_site_uv" />
            {' '}
            |
            <i className="fa fa-eye" aria-hidden="true" />
            <span id="busuanzi_value_site_pv" />
          </p>
        </div>
        <div>
          <a href="https://www.artesdosul.com" className="img-link">
            <img
              src="https://img.shields.io/endpoint?color=RGBA%2839%2C%20119%2C%20119%2C%201%29&amp;label=artesdosul&amp;url=https%3A%2F%2Fwww.artesdosul.com%2Fapi.php%3Fcallback%3Dweb"
              alt="Website"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
