import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Container, Button } from 'reactstrap';

import hero9 from '../../../assets/images/hero-bg/hero-9.jpg';

import MarketingHeaders4 from '../../MarketingHeaders/MarketingHeaders4';

export default function LivePreviewExample() {
  return (
    <>
      <div className="hero-wrapper bg-composed-wrapper bg-white">
        <Container className="header-top-section py-2">
          <MarketingHeaders4 />
        </Container>
        <div className="hero-wrapper--content">
          <div
            className="bg-composed-wrapper--image opacity-6 bg-composed-filter-rm"
            style={{ backgroundImage: 'url(' + hero9 + ')' }}
          />
          <div className="bg-composed-wrapper--bg bg-white opacity-8" />
          <div className="bg-composed-wrapper--bg bg-mixed-hopes opacity-2" />
          <div className="bg-composed-wrapper--content">
            <Container className="z-over text-black pb-5">
              <Row className="pt-5">
                <Col
                  lg="6"
                  xl="5"
                  className="order-2 order-lg-1 d-flex align-items-center">
                  <Card className="card-box bg-royal shadow-xxl w-100 object-skew hover-scale-lg text-center p-5 mt-5 mt-lg-0 mr-0 mr-xl-5 text-white">
                    <span className="ribbon-vertical ribbon-vertical--success ribbon-vertical--left text-uppercase">
                      <span>-30%</span>
                    </span>
                    <h5 className="font-size-xl text-uppercase font-weight-bold mb-4">
                      Developer Subscription
                    </h5>
                    <div className="divider bg-white-10 mb-4" />
                    <div>
                      <div className="mb-2">
                        <span className="display-2 font-weight-bold">$69</span>
                        <span className="opacity-8">/ month</span>
                      </div>
                      <ul className="list-unstyled opacity-6 mb-4">
                        <li>Commercial license included</li>
                      </ul>
                    </div>
                    <div className="divider bg-white-10 mb-4" />
                    <div className="mb-3 font-size-lg font-weight-bold">
                      License active for next <b>65</b> days
                    </div>
                    <Button
                      color="success"
                      className="font-weight-bold shadow-sm-dark text-uppercase font-size-sm d-inline-block">
                      Renew License
                    </Button>
                  </Card>
                </Col>
                <Col
                  lg="6"
                  xl="7"
                  className="order-1 order-lg-2 d-flex align-items-center">
                  <div>
                    <h2 className="display-3 font-weight-bold">
                      Bamburgh React Admin Dashboard with Reactstrap PRO
                    </h2>
                    <p className="font-size-xl py-3 text-black opacity-8">
                      Browse through the live previews to see just how powerful
                      this admin template really is!
                    </p>
                    <div className="pt-3">
                      <Button
                        tag="a"
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        size="lg"
                        className="btn-pill shadow-second-sm"
                        color="first">
                        <span className="btn-wrapper--label">Shop Now</span>
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
                        className="bg-white-10 text-black btn-pill ml-3">
                        <span>Bundles</span>
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
            <div className="shadow-container-blocks-3 z-below">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="var(--light)"
                  fillOpacity="1"
                  d="M0,160L480,96L960,256L1440,160L1440,320L960,320L480,320L0,320Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
