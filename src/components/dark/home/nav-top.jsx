import React from 'react';

function NavTop() {
  return (
    <div className="nav-top pt-30 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-md-4 valign">
            <a href="#0" className="logo icon-img-60">
              <img src="/assets/imgs/logo-dark.png" alt="" />
            </a>
          </div>
          <div className="col-md-4 valign">
            <div className="social text-center full-width">
              <a href="https://api.whatsapp.com/send/?phone=087812364164&text&type=phone_number&app_absent=0">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://github.com/Aimin-Nur?tab=repositories">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/muhammad-muhaimin-nur-81a3302ab">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.instagram.com/aimin_nur/">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="col-md-4 valign">
            <div className="full-width info">
              <div className="d-flex justify-content-end">
                <a href="https://aiminnur.vercel.app/home">
                  <span className="sub-title fz-12">aiminnur.vercel.app</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-butn">
          <span className="pe-7s-menu"></span>
        </div>
      </div>
    </div>
  );
}

export default NavTop;
