import React from 'react';

function Footer() {
  return (
    <footer className="pb-30 pt-30">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <p className="fz-13">
                © 2023 Gavi is Proudly Powered by{' '}
                <span className="underline main-color">
                  <a
                    href="https://themeforest.net/user/UiCamp"
                    target="_blank"
                  >
                    UiCamp
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
