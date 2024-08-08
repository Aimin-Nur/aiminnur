import React from 'react';

function Nav() {
  return (
    <div className="nav-top pt-30 pb-30">
      <div className="container">
        <div className="row">
          {/* <div className="col-md-4 valign">
            <a href="/dark" className="logo icon-img-60">
              <img src="/assets/imgs/logo-dark.png" alt="" />
            </a>
          </div> */}
          <div className="col-md-12">
            <div className="navbar">
              <div className="row justify-content-end rest">
                <div className="col-lg-8 rest">
                  <ul className="navbar-nav main-bg d-flex justify-content-end">
                    <li className="nav-item">
                      <a href="/home">
                        <span>Home</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/home">
                        <span>Services</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/home">
                        <span>About</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/home">
                        <span>Portfolio</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/home">
                        <span>Contact</span>
                      </a>
                    </li>
                  </ul>
                </div>
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

export default Nav;
