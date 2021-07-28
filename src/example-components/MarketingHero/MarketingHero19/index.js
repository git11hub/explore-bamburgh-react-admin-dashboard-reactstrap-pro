import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, CardBody, Container, Button } from 'reactstrap';

import particles1 from '../../../assets/images/hero-bg/particles-1.svg';

import MarketingHeaders4 from '../../MarketingHeaders/MarketingHeaders4';

export default function LivePreviewExample() {
  return (
    <>
      <div className="hero-wrapper bg-composed-wrapper bg-white">
        <Container>
          <MarketingHeaders4 />
        </Container>
        <div className="hero-wrapper--content">
          <div
            className="bg-composed-wrapper--image bg-composed-filter-rm opacity-2"
            style={{ backgroundImage: 'url(' + particles1 + ')' }}
          />
          <div className="bg-composed-wrapper--content">
            <div className="py-5">
              <Container className="text-black text-center py-5">
                <Col md="10" lg="8" className="mx-auto py-5">
                  <h2 className="display-4 font-weight-bold">
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
                      className="btn-pill font-size-lg shadow-second-sm"
                      color="primary">
                      <span className="btn-wrapper--label">Browse gallery</span>
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                      </span>
                    </Button>
                  </div>
                </Col>
                <div className="bg-plum-plate shadow-xxl pt-5 px-5 my-5 rounded">
                  <Row>
                    <Col xl="3" md="6">
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="mb-5 card card-box card-box-border-bottom border-success card-box-hover-rise-alt">
                        <CardBody>
                          <div className="align-box-row">
                            <div className="text-left">
                              <div className="mt-1">
                                <FontAwesomeIcon
                                  icon={['far', 'user']}
                                  className="font-size-xxl text-success"
                                />
                              </div>
                              <div className="mt-2 line-height-sm">
                                <b className="font-size-lg text-black pr-1">
                                  2,345
                                </b>
                                <span className="text-black-50">users</span>
                              </div>
                            </div>
                            <div className="ml-auto card-hover-indicator">
                              <FontAwesomeIcon
                                icon={['fas', 'chevron-right']}
                                className="font-size-xl"
                              />
                            </div>
                          </div>
                        </CardBody>
                      </a>
                    </Col>
                    <Col xl="3" md="6">
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="mb-5 card card-box card-box-border-bottom border-danger card-box-hover-rise-alt">
                        <CardBody>
                          <div className="align-box-row">
                            <div className="text-left">
                              <div className="mt-1">
                                <FontAwesomeIcon
                                  icon={['far', 'keyboard']}
                                  className="font-size-xxl text-danger"
                                />
                              </div>
                              <div className="mt-2 line-height-sm">
                                <b className="font-size-lg text-black pr-1">
                                  3,568
                                </b>
                                <span className="text-black-50">clicks</span>
                              </div>
                            </div>
                            <div className="ml-auto card-hover-indicator">
                              <FontAwesomeIcon
                                icon={['fas', 'chevron-right']}
                                className="font-size-xl"
                              />
                            </div>
                          </div>
                        </CardBody>
                      </a>
                    </Col>
                    <Col xl="3" md="6">
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="mb-5 card card-box card-box-border-bottom border-warning card-box-hover-rise-alt">
                        <CardBody>
                          <div className="align-box-row">
                            <div className="text-left">
                              <div className="mt-1">
                                <FontAwesomeIcon
                                  icon={['far', 'chart-bar']}
                                  className="font-size-xxl text-warning"
                                />
                              </div>
                              <div className="mt-2 line-height-sm">
                                <b className="font-size-lg text-black pr-1">
                                  $9,693
                                </b>
                                <span className="text-black-50">revenue</span>
                              </div>
                            </div>
                            <div className="ml-auto card-hover-indicator">
                              <FontAwesomeIcon
                                icon={['fas', 'chevron-right']}
                                className="font-size-xl"
                              />
                            </div>
                          </div>
                        </CardBody>
                      </a>
                    </Col>
                    <Col xl="3" md="6">
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="mb-5 card card-box card-box-border-bottom border-info card-box-hover-rise-alt">
                        <CardBody>
                          <div className="align-box-row">
                            <div className="text-left">
                              <div className="mt-1">
                                <FontAwesomeIcon
                                  icon={['far', 'building']}
                                  className="font-size-xxl text-info"
                                />
                              </div>
                              <div className="mt-2 line-height-sm">
                                <b className="font-size-lg text-black pr-1">
                                  431
                                </b>
                                <span className="text-black-50">sales</span>
                              </div>
                            </div>
                            <div className="ml-auto card-hover-indicator">
                              <FontAwesomeIcon
                                icon={['fas', 'chevron-right']}
                                className="font-size-xl"
                              />
                            </div>
                          </div>
                        </CardBody>
                      </a>
                    </Col>
                  </Row>
                </div>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
