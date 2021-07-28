import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Container, Badge, Button } from 'reactstrap';

import stock6 from '../../../assets/images/stock-photos/stock-6.jpg';

import MarketingHeaders4 from '../../MarketingHeaders/MarketingHeaders4';

export default function LivePreviewExample() {
  return (
    <>
      <div className="hero-wrapper bg-composed-wrapper bg-serious-blue">
        <div className="bg-composed-wrapper--bg bg-white opacity-8" />
        <div className="bg-composed-wrapper--bg bg-deep-blue opacity-4" />
        <Container className="header-top-section py-2">
          <MarketingHeaders4 />
        </Container>
        <div className="hero-wrapper--content">
          <div className="bg-composed-wrapper--content">
            <Container className="text-second pb-0 pb-lg-5">
              <Row className="py-5">
                <Col lg="6" className="d-flex align-items-center">
                  <div className="text-center text-lg-left">
                    <h2 className="display-3 font-weight-bold">
                      Bamburgh React Admin Dashboard with Reactstrap PRO
                    </h2>
                    <p className="font-size-xl py-3 text-black-50">
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
                        color="primary">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                        </span>
                        <span className="btn-wrapper--label">
                          View all articles
                        </span>
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col lg="6" className="d-flex align-items-center">
                  <a
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="shadow-xxl mt-5 mt-lg-0 image-title-overlay d-block rounded h-320px"
                    title="...">
                    <div className="card-badges">
                      <Badge pill color="success" className="h-auto px-3 py-1">
                        New Content
                      </Badge>
                    </div>
                    <div className="image-title-overlay--bottom p-4">
                      <h3 className="font-size-xxl font-weight-bold m-0 text-white">
                        Bamburgh React Admin Dashboard with Reactstrap PRO
                      </h3>
                    </div>
                    <img
                      alt="..."
                      className="rounded img-fit-container"
                      src={stock6}
                    />
                  </a>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}
