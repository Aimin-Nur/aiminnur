import React from 'react';
import data2 from '@/data/home/skills2.json';
function Skills() {
  return (
    <div
      className="sec-box skills section-padding bord-thin-bottom"
      data-scroll-index="2"
    >
      <div className="row">
        <div className="col-lg-12 valign">
          <div className="sec-head md-mb80 wow fadeIn">
            <h6 className="sub-title opacity-7 mb-15">Skills</h6>
            <h3>
              <span className="main-color">Awards</span> & Recognitions
            </h3>
          </div>
        </div>
      </div>
      <div className="awards mt-100">
        <div className="row md-marg">
          {data2.map((item, index) => (
            <div key={index} className="col-lg-4">
              <div
                className="award-item sub-bg md-mb30 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="d-flex">
                  <div>
                    <span>{item.No}</span>
                  </div>
                  <div className="ml-auto">
                    <span>{item.year}</span>
                  </div>
                </div>
                <div className="img icon-img-180 mt-80 mb-30">
                  <img src={item.photo} alt="" />
                </div>
                <h6>{item.judul}</h6>
                <span className="sub-title main-color mt-10">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
