import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Container, Button } from 'reactstrap';

import hero1 from '../../../assets/images/hero-bg/hero-9.jpg';
import particles3 from '../../../assets/images/hero-bg/particles-3.svg';

export default function LivePreviewExample() {
  return (
    <>
      <div className="hero-wrapper bg-composed-wrapper py-3 py-xl-5 bg-night-sky">
        <div className="hero-wrapper--content">
          <div
            className="bg-composed-wrapper--image"
            style={{ backgroundImage: 'url(' + hero1 + ')' }}
          />
          <div
            className="bg-composed-wrapper--image opacity-4"
            style={{ backgroundImage: 'url(' + particles3 + ')' }}
          />
          <div className="bg-composed-wrapper--bg bg-premium-dark opacity-5" />
          <div className="bg-composed-wrapper--content">
            <Container className="text-white py-3 py-xl-5">
              <div className="mb-5 text-center">
                <h1 className="display-3 text-white mb-2 font-weight-bold">
                  Plans & pricing
                </h1>
                <p className="font-size-lg text-white-50">
                  Browse through the live previews to see just how powerful this
                  admin template really is!
                </p>
                <div role="group" className="btn-group mt-4">
                  <Button
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    active
                    outline
                    color="secondary"
                    className="shadow-none">
                    Monthly plans
                  </Button>
                  <Button
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    outline
                    color="secondary"
                    className="shadow-none">
                    Yearly plans
                  </Button>
                </div>
              </div>
              <Col md="9" className="mx-auto">
                <Row className="no-gutters">
                  <Col
                    xl="6"
                    className="order-2 order-xl-1 d-flex align-items-center">
                    <Card className="bg-white text-second w-100 p-5 br-xl-right-0">
                      <h5 className="pl-4 mb-0">
                        <div className="display-4 font-weight-bold">
                          Developer
                        </div>
                        <div className="pt-4 line-height-1 font-weight-bold display-3">
                          $69
                        </div>
                        <div className="font-size-md font-weight-normal opacity-6">
                          one time fee
                        </div>
                      </h5>
                      <ul className="list-unstyled text-black-50 text-left my-4">
                        <li className="px-4 py-1 d-flex align-items-center">
                          <div className="d-30 bg-neutral-success text-success rounded-circle btn-icon mr-2">
                            <FontAwesomeIcon
                              icon={['fas', 'check']}
                              className="font-size-xs text-success"
                            />
                          </div>
                          Unlimited Tasks
                        </li>
                        <li className="px-4 py-1 d-flex align-items-center">
                          <div className="d-30 bg-neutral-success text-success rounded-circle btn-icon mr-2">
                            <FontAwesomeIcon
                              icon={['fas', 'check']}
                              className="font-size-xs text-success"
                            />
                          </div>
                          Unlimited Teams
                        </li>
                        <li className="px-4 py-1 d-flex align-items-center">
                          <div className="d-30 bg-neutral-success text-success rounded-circle btn-icon mr-2">
                            <FontAwesomeIcon
                              icon={['fas', 'check']}
                              className="font-size-xs text-success"
                            />
                          </div>
                          All Integrations
                        </li>
                        <li className="px-4 py-1 d-flex align-items-center">
                          <div className="d-30 bg-neutral-danger text-danger rounded-circle btn-icon mr-2">
                            <FontAwesomeIcon
                              icon={['fas', 'times']}
                              className="font-size-xs text-danger"
                            />
                          </div>
                          <span className="opacity-7">Premium support</span>
                        </li>
                      </ul>
                      <Button
                        size="lg"
                        className="btn-block rounded-sm hover-scale-sm"
                        color="primary">
                        Buy now
                      </Button>
                    </Card>
                  </Col>
                  <Col xl="6" className="order-1 mb-5 mb-xl-0 order-xl-2">
                    <Card className="w-100 shadow-lg p-5 text-white p-5 bg-plum-plate">
                      <h5 className="mt-4 pl-4 mb-0">
                        <div className="display-4 font-weight-bold">
                          Enterprise
                        </div>
                        <div className="pt-4 line-height-1 font-weight-bold display-3">
                          $599
                        </div>
                        <div className="font-size-md font-weight-normal opacity-6">
                          one time fee
                        </div>
                      </h5>
                      <ul className="list-unstyled text-left my-4">
                        <li className="px-4 py-1 d-flex align-items-center">
                          <div className="d-30 bg-white-10 rounded-circle btn-icon mr-2">
                            <FontAwesomeIcon
                              icon={['fas', 'check']}
                              className="font-size-xs text-success"
                            />
                          </div>
                          Unlimited Tasks
                        </li>
                        <li className="px-4 py-1 d-flex align-items-center">
                          <div className="d-30 bg-white-10 rounded-circle btn-icon mr-2">
                            <FontAwesomeIcon
                              icon={['fas', 'check']}
                              className="font-size-xs text-success"
                            />
                          </div>
                          Unlimited Teams
                        </li>
                        <li className="px-4 py-1 d-flex align-items-center">
                          <div className="d-30 bg-white-10 rounded-circle btn-icon mr-2">
                            <FontAwesomeIcon
                              icon={['fas', 'check']}
                              className="font-size-xs text-success"
                            />
                          </div>
                          All Integrations
                        </li>
                        <li className="px-4 py-1 d-flex align-items-center">
                          <div className="d-30 bg-white-10 rounded-circle btn-icon mr-2">
                            <FontAwesomeIcon
                              icon={['fas', 'check']}
                              className="font-size-xs text-success"
                            />
                          </div>
                          Premium support
                        </li>
                      </ul>
                      <Button
                        size="lg"
                        className="btn-block font-weight-bold rounded-sm shadow-sm-dark mb-4 hover-scale-sm"
                        color="success">
                        Buy now
                      </Button>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}
