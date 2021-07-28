import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Container, Button } from 'reactstrap';

import hero5 from '../../../assets/images/hero-bg/hero-5.jpg';
import logo1 from '../../../assets/images/stock-logos/netflix-icon.svg';
import logo2 from '../../../assets/images/stock-logos/airbnb-icon.svg';
import logo3 from '../../../assets/images/stock-logos/instagram-icon.svg';
import logo4 from '../../../assets/images/stock-logos/slack-icon.svg';
import logo5 from '../../../assets/images/stock-logos/google-icon.svg';
import logo6 from '../../../assets/images/stock-logos/microsoft-icon.svg';

import MarketingHeaders5 from '../../MarketingHeaders/MarketingHeaders5';

export default function LivePreviewExample() {
  return (
    <>
      <div className="hero-wrapper bg-composed-wrapper bg-midnight-bloom">
        <Container className="header-top-section pt-2">
          <MarketingHeaders5 />
        </Container>
        <div className="hero-wrapper--content">
          <div
            className="bg-composed-wrapper--image opacity-7"
            style={{ backgroundImage: 'url(' + hero5 + ')' }}
          />
          <div className="bg-composed-wrapper--bg bg-second opacity-6" />
          <div className="bg-composed-wrapper--bg bg-mean-fruit opacity-3" />
          <div className="bg-composed-wrapper--content">
            <Container className="text-white pt-2 pb-5">
              <Row className="py-0 py-lg-5">
                <Col lg="6" className="d-flex align-items-center">
                  <div className="text-center text-lg-left">
                    <h2 className="display-3 font-weight-bold">
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
                        className="shadow-second-sm font-weight-bold"
                        color="success">
                        <span className="btn-wrapper--label">Sponsorships</span>
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                        </span>
                      </Button>
                      <Button
                        tag="a"
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        size="lg"
                        color="link"
                        className="bg-white-5 font-weight-bold text-white ml-3">
                        <span>Partners</span>
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col
                  lg="6"
                  className="d-flex flex-wrap mt-4 mt-lg-0 align-items-center justify-content-center">
                  <div className="rounded-circle bg-white btn-icon d-120 shadow-sm m-4 hover-scale-lg d-flex align-self-stretch">
                    <img
                      src={logo1}
                      style={{ height: 46 }}
                      className="m-auto img-fluid"
                      alt="..."
                    />
                  </div>
                  <div className="rounded-circle bg-white btn-icon d-90 shadow-sm m-4 hover-scale-lg d-flex align-self-stretch">
                    <img
                      src={logo2}
                      style={{ height: 49 }}
                      className="m-auto img-fluid"
                      alt="..."
                    />
                  </div>
                  <div className="rounded-circle bg-white btn-icon d-140 shadow-sm m-4 hover-scale-lg d-flex align-self-stretch">
                    <img
                      src={logo3}
                      style={{ height: 51 }}
                      className="m-auto img-fluid"
                      alt="..."
                    />
                  </div>
                  <div className="rounded-circle bg-white btn-icon d-110 shadow-sm m-4 hover-scale-lg d-flex align-self-stretch">
                    <img
                      src={logo4}
                      style={{ height: 55 }}
                      className="m-auto img-fluid"
                      alt="..."
                    />
                  </div>
                  <div className="rounded-circle bg-white btn-icon d-90 shadow-sm m-4 hover-scale-lg d-flex align-self-stretch">
                    <img
                      src={logo5}
                      style={{ height: 41 }}
                      className="m-auto img-fluid"
                      alt="..."
                    />
                  </div>
                  <div className="rounded-circle bg-white btn-icon d-100 shadow-sm m-4 hover-scale-lg d-flex align-self-stretch">
                    <img
                      src={logo6}
                      style={{ height: 51 }}
                      className="m-auto img-fluid"
                      alt="..."
                    />
                  </div>
                </Col>
              </Row>
            </Container>
            <div className="shape-container-top-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="var(--light)"
                  fillOpacity="1"
                  d="M0,32L48,69.3C96,107,192,181,288,186.7C384,192,480,128,576,106.7C672,85,768,107,864,112C960,117,1056,107,1152,101.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
