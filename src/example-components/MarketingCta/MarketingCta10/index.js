import React from 'react';

import { Col, Container, Button } from 'reactstrap';

import particles3 from '../../../assets/images/hero-bg/particles-3.svg';

export default function LivePreviewExample() {
  return (
    <>
      <div className="hero-wrapper bg-composed-wrapper bg-primary">
        <div className="hero-wrapper--content flex-column">
          <div className="shape-container-bottom-1 w-100">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="var(--light)"
                fillOpacity="1"
                d="M0,64L1440,128L1440,0L0,0Z"></path>
            </svg>
          </div>
          <div
            className="bg-composed-wrapper--image bg-composed-filter-rm opacity-6"
            style={{ backgroundImage: 'url(' + particles3 + ')' }}
          />
          <div className="bg-composed-wrapper--content pb-5">
            <Container className="py-5 text-center">
              <div className="py-5 py-xl-0">
                <div>
                  <h4 className="font-weight-bold text-white display-3">
                    Start your subscription!
                  </h4>
                  <Col md="8" lg="6" className="mx-auto">
                    <p className="text-white opacity-6 mt-4 mb-5 font-size-xxl">
                      Browse through the live previews to see just how powerful
                      this admin template really is!
                    </p>
                  </Col>
                </div>
                <Button
                  color="warning"
                  className="px-5 font-size-lg shadow-sm-dark py-3 hover-scale-sm btn-pill mx-2">
                  Get Started
                </Button>
                <Button
                  color="primary"
                  className="bg-white px-5 text-second border-0 shadow-sm-dark hover-scale-sm font-weight-bold py-3 btn-pill mx-2">
                  Learn more
                </Button>
              </div>
            </Container>
          </div>
          <div className="shape-container-top-2 w-100">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="var(--light)"
                fillOpacity="1"
                d="M0,64L1440,128L1440,320L0,320Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
