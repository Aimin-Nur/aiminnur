import React from 'react';
import data from '@/data/home/works.json';
function Portfolio() {
  return (
    <div className="sec-box portfolio main-bg section-padding radius-15">
      <div className="sec-head mb-30 text-center">
        <h6 className="sub-title opacity-7 mb-15">Portfolio</h6>
        <h3>
          Look at my <span className="main-color">Portfolio</span>
        </h3>
      </div>
      <div className="gallery">
        <div className="row">
          {data.map((item, index) => (
            <div key={index} className="col-lg-6 items">
              <div className="item mt-50">
                <div className="img">
                    <img src={item.photo} alt="" />
                </div>
                <div className="cont mt-30 d-flex align-items-center">
                  <div>
                    <span className="tag">{item.link}</span>
                    <h6 className="line-height-1">
                      <a href={item.link}>{item.title}</a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
