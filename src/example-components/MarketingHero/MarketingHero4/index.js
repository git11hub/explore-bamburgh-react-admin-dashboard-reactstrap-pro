import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Container, Button } from 'reactstrap';

import hero4 from '../../../assets/images/hero-bg/hero-4.jpg';
import illustration1 from '../../../assets/images/illustrations/pack2/credit_card.svg';

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
            className="bg-composed-wrapper--image opacity-6"
            style={{ backgroundImage: 'url(' + hero4 + ')' }}
          />
          <div className="bg-composed-wrapper--bg bg-white opacity-8" />
          <div className="bg-composed-wrapper--bg bg-amy-crisp opacity-6" />
          <div className="bg-composed-wrapper--content">
            <Container className="text-second py-4">
              <Container>
                <Row>
                  <Col lg="6" className="d-flex align-items-center">
                    <div>
                      <h2 className="display-3 font-weight-bold">
                        Bamburgh React Admin Dashboard with Reactstrap PRO
                      </h2>
                      <p className="font-size-xl py-3 text-black-50">
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
                          color="primary">
                          <span className="btn-wrapper--label">Wallets</span>
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
                          className="bg-white-50 text-second btn-pill ml-3">
                          <span>Learn more</span>
                        </Button>
                      </div>
                    </div>
                  </Col>
                  <Col lg="6" className="d-flex align-items-center">
                    <img
                      src={illustration1}
                      alt="..."
                      className="m-5 m-lg-0 w-100"
                    />
                  </Col>
                </Row>
              </Container>
            </Container>
            <div className="shape-container-top-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="var(--light)"
                  fillOpacity="1"
                  d="M0,224L80,197.3C160,171,320,117,480,112C640,107,800,149,960,165.3C1120,181,1280,171,1360,165.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
