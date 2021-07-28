import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Container, Button } from 'reactstrap';

import particles3 from '../../../assets/images/hero-bg/particles-3.svg';

import MarketingHeaders1 from '../../MarketingHeaders/MarketingHeaders1';

export default function LivePreviewExample() {
  return (
    <>
      <div className="hero-wrapper bg-composed-wrapper bg-dark">
        <div className="w-100 px-4">
          <MarketingHeaders1 />
        </div>
        <div className="hero-wrapper--content">
          <div
            className="bg-composed-wrapper--image bg-composed-filter-rm opacity-6"
            style={{ backgroundImage: 'url(' + particles3 + ')' }}
          />
          <div className="bg-composed-wrapper--bg bg-second opacity-5" />
          <div className="bg-composed-wrapper--content">
            <div className="z-over pt-5">
              <Container className="text-white text-center py-5">
                <Col md="10" lg="8" className="mx-auto py-5">
                  <h2 className="display-4 font-weight-bold">
                    Bamburgh React Admin Dashboard with Reactstrap PRO
                  </h2>
                  <p className="font-size-xl py-3 text-white-50">
                    This admin template is a complete frontend solution for
                    easy-building applications or presentation websites.
                    It&#39;s fully responsive and designed by professional
                    UI&#x2F;UX designers and developers.
                  </p>
                  <div className="pt-3">
                    <Button
                      tag="a"
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      size="lg"
                      className="shadow-second-sm"
                      color="danger">
                      <span className="btn-wrapper--label">Support Center</span>
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                      </span>
                    </Button>
                    <Button
                      tag="a"
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      size="lg"
                      color="success"
                      className="shadow-second-sm ml-3">
                      <span>Browse Issues</span>
                    </Button>
                  </div>
                </Col>
              </Container>
              <Container className="py-5">
                <Row>
                  <Col md="6" xl="4">
                    <a
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="card shadow-xxl card-box card-box-border-bottom br-tl br-tr card-box-hover-rise border-primary text-center p-3 p-xl-4 mb-5 d-block">
                      <div className="d-50 btn-icon rounded-circle bg-primary text-white mb-4 mx-auto">
                        <FontAwesomeIcon
                          icon={['far', 'keyboard']}
                          className="font-size-xl"
                        />
                      </div>
                      <h5 className="font-weight-bold font-size-lg text-second mb-0">
                        Profiles
                      </h5>
                      <p className="text-second opacity-8 mt-3 mb-4">
                        350+ custom-made, beautiful components, widgets, pages,
                        dashboards and applications.
                      </p>
                      <div className="rounded-pill py-1 px-4 text-uppercase font-size-xs bg-neutral-dark text-second d-inline-flex font-weight-bold">
                        PROMO
                      </div>
                    </a>
                  </Col>
                  <Col md="6" xl="4">
                    <a
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="card shadow-xxl card-box card-box-border-bottom br-tl br-tr card-box-hover-rise border-danger text-center p-3 p-xl-4 mb-5 d-block">
                      <div className="d-50 btn-icon rounded-circle bg-danger text-white mb-4 mx-auto">
                        <FontAwesomeIcon
                          icon={['far', 'envelope']}
                          className="font-size-xl"
                        />
                      </div>
                      <h5 className="font-weight-bold font-size-lg text-second mb-0">
                        Applications
                      </h5>
                      <p className="text-second opacity-8 mt-3 mb-4">
                        350+ custom-made, beautiful components, widgets, pages,
                        dashboards and applications.
                      </p>
                      <div className="rounded-pill py-1 px-4 text-uppercase font-size-xs bg-neutral-dark text-second d-inline-flex font-weight-bold">
                        ADS
                      </div>
                    </a>
                  </Col>
                  <Col md="6" xl="4" className="d-none d-xl-flex">
                    <a
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="card shadow-xxl card-box card-box-border-bottom br-tl br-tr card-box-hover-rise border-success text-center p-3 p-xl-4 mb-5 d-block">
                      <div className="d-50 btn-icon rounded-circle bg-success text-white mb-4 mx-auto">
                        <FontAwesomeIcon
                          icon={['far', 'address-card']}
                          className="font-size-xl"
                        />
                      </div>
                      <h5 className="font-weight-bold font-size-lg text-second mb-0">
                        Settings
                      </h5>
                      <p className="text-second opacity-8 mt-3 mb-4">
                        350+ custom-made, beautiful components, widgets, pages,
                        dashboards and applications.
                      </p>
                      <div className="rounded-pill py-1 px-4 text-uppercase font-size-xs bg-neutral-dark text-second d-inline-flex font-weight-bold">
                        SEO
                      </div>
                    </a>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="z-below" style={{ marginTop: '-300px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="var(--light)"
                  fillOpacity="1"
                  d="M0,32L120,58.7C240,85,480,139,720,138.7C960,139,1200,85,1320,58.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
