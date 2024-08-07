import React from 'react';

function Info() {
  return (
    <div
      className="sec-box contact section-padding bord-thin-top"
      data-scroll-index="5"
    >
      <div className="row">
        <div className="col-lg-12">
          <div className="sec-head md-mb80 wow fadeIn">
            <h6 className="sub-title mb-15 opacity-7">Get In Touch</h6>
            <h2 className="fz-50">Let is make your brand or idea brilliant!</h2>
            <p className="fz-15 mt-10">
              If you would like to work with us or just want to get in touch,
              we’d love to hear from you!
            </p>
            <div className="phone fz-30 fw-600 mt-30 underline">
              <a href="https://api.whatsapp.com/send/?phone=%2B6287812364164&text&type=phone_number&app_absent=0" className="main-color">
                +62-878-1236-4164
              </a>
            </div>
            <ul className="rest social-text d-flex mt-60">
              <li className="mr-30">
                <a href="https://www.instagram.com/aimin_nur/" className="hover-this">
                  <span className="hover-anim">Instagram</span>
                </a>
              </li>
              <li className="mr-30">
                <a href="https://github.com/" className="hover-this">
                  <span className="hover-anim">Github</span>
                </a>
              </li>
              <li className="mr-30">
                <a href="https://www.linkedin.com/in/muhammad-muhaimin-nur-81a3302ab" className="hover-this">
                  <span className="hover-anim">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
          <div className="mt-30">
              <button type="button">
                  <a className="text" href="malto:aiminnur02@gmail.com">Send A Email</a>
              </button>
          </div>
      </div>
    </div>
  );
}

export default Info;
