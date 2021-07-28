import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Container, Button } from 'reactstrap';

import MarketingHeaders2 from '../../MarketingHeaders/MarketingHeaders2';

export default function LivePreviewExample() {
  return (
    <>
      <div className="hero-wrapper bg-composed-wrapper bg-serious-blue">
        <MarketingHeaders2 />
        <div className="divider bg-white-5" />
        <div className="hero-wrapper--content">
          <div className="bg-composed-wrapper--bg bg-second opacity-5" />
          <div className="bg-composed-wrapper--content">
            <Container className="text-white py-0 py-xl-5">
              <Row className="py-5">
                <Col
                  lg="6"
                  xl="7"
                  className="d-flex align-items-center pr-0 pr-xl-5">
                  <div className="text-center mb-5 mb-lg-0 text-lg-center">
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
                        color="first">
                        <span className="btn-wrapper--label">
                          Create Newsletter
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
                        <span>Dashboard</span>
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col
                  lg="6"
                  xl="5"
                  className="d-flex justify-content-center align-items-center">
                  <Card className="card-box modal-content m-4 m-xl-5 p-4">
                    <div className="font-weight-bold font-size-sm text-uppercase text-second mt-2">
                      Invites Sent
                    </div>
                    <div className="d-flex py-4 align-items-center">
                      <div className="d-60 rounded border-0 card-icon-wrapper bg-success text-white btn-icon text-center shadow-success mr-3">
                        <FontAwesomeIcon
                          icon={['fas', 'tachometer-alt']}
                          className="display-4"
                        />
                      </div>
                      <div className="display-3 text-black font-weight-bold ml-1">
                        64.39%
                      </div>
                    </div>
                    <div className="text-black-50 font-weight-bold mb-2">
                      <a
                        className="text-first"
                        href="#/"
                        onClick={(e) => e.preventDefault()}>
                        See clients
                      </a>{' '}
                      that accepted your invitation to connect.
                    </div>
                  </Card>
                </Col>
              </Row>
            </Container>
            <div className="shadow-container-blocks-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="var(--light)"
                  fillOpacity="1"
                  d="M0,32L1440,160L1440,320L0,320Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
