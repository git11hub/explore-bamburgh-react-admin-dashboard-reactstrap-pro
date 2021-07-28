import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Container, Button } from 'reactstrap';

import hero3 from '../../../assets/images/hero-bg/hero-3.jpg';

import logo1 from '../../../assets/images/stock-logos/netflix.svg';
import logo2 from '../../../assets/images/stock-logos/airbnb.svg';
import logo3 from '../../../assets/images/stock-logos/instagram.svg';
import logo4 from '../../../assets/images/stock-logos/slack.svg';

import stock1 from '../../../assets/images/stock-photos/stock-1.jpg';
import stock2 from '../../../assets/images/stock-photos/stock-2.jpg';
import stock3 from '../../../assets/images/stock-photos/stock-3.jpg';
import stock4 from '../../../assets/images/stock-photos/stock-4.jpg';

import MarketingHeaders3 from '../../MarketingHeaders/MarketingHeaders3';

export default function LivePreviewExample() {
  return (
    <>
      <div className="hero-wrapper bg-composed-wrapper bg-night-sky">
        <Container className="header-top-section pb-2">
          <MarketingHeaders3 />
        </Container>
        <div className="hero-wrapper--content">
          <div
            className="bg-composed-wrapper--image"
            style={{ backgroundImage: 'url(' + hero3 + ')' }}
          />
          <div className="bg-composed-wrapper--bg bg-second opacity-2" />
          <div className="bg-composed-wrapper--bg bg-nice-redora opacity-4" />
          <div className="bg-composed-wrapper--content">
            <Container className="text-white py-5">
              <Container className="py-4">
                <Row className="pb-5">
                  <Col lg="6" xl="5" className="d-flex align-items-center">
                    <div className="text-center px-4 px-lg-0 text-lg-left">
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
                          className="btn-pill shadow-second-sm"
                          color="success">
                          <span className="btn-wrapper--label">
                            View all partners
                          </span>
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
                          className="bg-white-10 text-white btn-pill ml-3">
                          <span>View details</span>
                        </Button>
                      </div>
                    </div>
                  </Col>
                  <Col
                    lg="6"
                    xl="7"
                    className="d-flex mt-5 mt-lg-0 align-items-center">
                    <Row className="justify-content-end">
                      <Col md="6" lg="5">
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="card mt-4 shadow-sm-dark card-box-hover-rise mb-5">
                          <img
                            src={stock1}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="p-3 bg-secondary rounded text-center p-xl-4 d-flex align-items-center justify-content-center">
                            <img src={logo1} alt="..." style={{ height: 25 }} />
                          </div>
                        </a>
                      </Col>
                      <Col md="6" lg="4">
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="card shadow-sm-dark card-box-hover-rise mb-5">
                          <img
                            src={stock2}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="p-3 bg-secondary rounded text-center p-xl-4 d-flex align-items-center justify-content-center">
                            <img src={logo2} alt="..." style={{ height: 25 }} />
                          </div>
                        </a>
                      </Col>
                      <Col md="6" lg="6">
                        <div className="mb-3">
                          <a
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="card shadow-sm-dark card-box-hover-rise mb-5">
                            <img
                              src={stock3}
                              className="card-img-top"
                              alt="..."
                            />
                            <div className="p-3 bg-secondary rounded text-center p-xl-4 d-flex align-items-center justify-content-center">
                              <img
                                src={logo3}
                                alt="..."
                                style={{ height: 25 }}
                              />
                            </div>
                          </a>
                        </div>
                      </Col>
                      <Col md="6" lg="4">
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="card shadow-sm-dark card-box-hover-rise mb-5">
                          <img
                            src={stock4}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="p-3 bg-secondary rounded text-center p-xl-4 d-flex align-items-center justify-content-center">
                            <img src={logo4} alt="..." style={{ height: 25 }} />
                          </div>
                        </a>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Container>
            <div className="shape-container-top-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="var(--light)"
                  fillOpacity="1"
                  d="M0,256L26.7,213.3C53.3,171,107,85,160,85.3C213.3,85,267,171,320,176C373.3,181,427,107,480,85.3C533.3,64,587,96,640,106.7C693.3,117,747,107,800,96C853.3,85,907,75,960,58.7C1013.3,43,1067,21,1120,42.7C1173.3,64,1227,128,1280,144C1333.3,160,1387,128,1413,112L1440,96L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
