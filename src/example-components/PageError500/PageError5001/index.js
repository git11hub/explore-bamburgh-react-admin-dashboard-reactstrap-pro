import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Button } from 'reactstrap';

import hero6 from '../../../assets/images/hero-bg/hero-4.jpg';

import illustration2 from '../../../assets/images/illustrations/pack4/500.svg';

export default function LivePreviewExample() {
  return (
    <>
      <div className="app-wrapper min-vh-100 bg-white">
        <div className="app-main min-vh-100">
          <div className="app-content p-0">
            <div className="app-inner-content-layout--main">
              <div className="flex-grow-1 w-100 d-flex align-items-center">
                <div className="bg-composed-wrapper--content">
                  <Row className="min-vh-100 no-gutters">
                    <Col lg="7" xl="6" className="d-flex align-items-center">
                      <Col md="11" xl="9" className="mx-auto text-center">
                        <div className="py-4">
                          <img
                            src={illustration2}
                            className="w-50 mx-auto d-block mb-5 img-fluid"
                            alt="..."
                          />

                          <h1 className="display-1 mb-3 px-4 font-weight-bold">
                            500 Internal Server Error
                          </h1>
                          <h3 className="font-size-xxl line-height-sm font-weight-light d-block px-3 mb-3 text-black-50">
                            There was an error, please try again later.
                          </h3>
                          <p>
                            The server encountered an internal server error and
                            was unable to complete your request.
                          </p>
                        </div>
                      </Col>
                    </Col>
                    <Col lg="5" xl="6" className="d-flex">
                      <div className="hero-wrapper w-100 bg-composed-wrapper bg-second min-vh-lg-100">
                        <div className="flex-grow-1 w-100 d-flex align-items-center">
                          <div
                            className="bg-composed-wrapper--image opacity-7"
                            style={{ backgroundImage: 'url(' + hero6 + ')' }}
                          />
                          <div className="bg-composed-wrapper--bg bg-premium-dark opacity-4" />
                          <div className="bg-composed-wrapper--content text-center p-5">
                            <div className="text-white px-0 px-lg-3 px-xl-5">
                              <h1 className="display-3 mb-4 font-weight-bold">
                                Bamburgh React Admin Dashboard with Reactstrap
                                PRO
                              </h1>
                              <p className="font-size-lg mb-0 opacity-8">
                                This admin template is a complete frontend
                                solution for easy-building applications or
                                presentation websites. It&#39;s fully responsive
                                and designed by professional UI&#x2F;UX
                                designers and developers.
                              </p>
                              <div className="divider mx-auto border-1 my-5 border-light opacity-2 rounded w-25" />
                              <div>
                                <Button
                                  color="success"
                                  className="px-5 font-size-sm font-weight-bold btn-animated-icon text-uppercase rounded shadow-none py-3 hover-scale-sm hover-scale-lg mr-3">
                                  <span className="btn-wrapper--label">
                                    See Features List
                                  </span>
                                  <span className="btn-wrapper--icon">
                                    <FontAwesomeIcon
                                      icon={['fas', 'arrow-right']}
                                    />
                                  </span>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hero-footer pb-4"></div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
