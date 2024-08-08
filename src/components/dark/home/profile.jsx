import React from 'react';

function Profile() {
  return (
    <section className="intro-profile md-mb50">
      <div className="row rest">
        <div className="col-lg-4 box-img main-bg">
          <div className="cont valign">
            <div className="full-width">
              <div className="img">
                <img src="/assets/imgs/header/profile.png" alt="" />
                <span className="icon">
                  <img src="/assets/imgs/header/icon1.png" alt="" />
                </span>
                <span className="icon">
                  <img src="/assets/imgs/header/icon2.png" alt="" />
                </span>
                <span className="icon">
                  <img src="/assets/imgs/header/icon4.png" alt="" />
                </span>
              </div>
              <div className="info text-center mt-30">
                <h5>Muhaimin Nur</h5>
                <p className="fz-13 text-u">Available For Freelance</p>
              </div>
              <div className="social text-center mt-20">
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
          </div>
        </div>
        <div className="col-lg-8 content main-bg">
          <h1>
            Hello, I’m <span className="main-color">Muhaimin Nur</span>, Website
            Developer and{' '}
            <span className="bord">
              Data Scientist <i></i>
            </span>{' '}
            South Sulawesi, Indonesia.
          </h1>
          <div className="stauts mt-80">
            <div className="d-flex align-items-center">
              <div className="mr-40">
                <div className="d-flex align-items-center">
                  <h2>4</h2>
                  <p>
                    Years <br /> Learning Experience
                  </p>
                </div>
              </div>
              <div className="mr-40">
                <div className="d-flex align-items-center">
                  <h2>49</h2>
                  <p>
                    Project <br /> Related Technology
                  </p>
                </div>
              </div>
              <div>
                <div className="butn-presv">
                  <a href="https://drive.google.com/file/d/1NhXHtDquaHX32qiFvEvi4Qu0H6rlO6Rx/view" className="butn butn-md butn-bord radius-5 skew">
                    <span>Donwload CV</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
