import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row,
  Col,
  Card,
  Container,
  FormGroup,
  Input,
  Button
} from 'reactstrap';

import hero1 from '../../../assets/images/hero-bg/hero-1.jpg';

import MarketingHeaders5 from '../../MarketingHeaders/MarketingHeaders5';

export default function LivePreviewExample() {
  return (
    <>
      <div className="hero-wrapper bg-composed-wrapper bg-midnight-bloom">
        <Container className="header-top-section py-2">
          <MarketingHeaders5 />
        </Container>
        <div className="divider bg-white-5" />
        <div className="hero-wrapper--content">
          <div
            className="bg-composed-wrapper--image"
            style={{ backgroundImage: 'url(' + hero1 + ')' }}
          />
          <div className="bg-composed-wrapper--bg bg-second opacity-5" />
          <div className="bg-composed-wrapper--content">
            <Container className="z-over">
              <Container className="text-white py-5">
                <Row className="pb-5">
                  <Col
                    lg="6"
                    className="d-flex align-items-center pr-0 pr-xl-3">
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
                          className="btn-pill shadow-second-sm"
                          color="first">
                          <span className="btn-wrapper--label">
                            Browse gallery
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
                          <span>Documentation</span>
                        </Button>
                      </div>
                    </div>
                  </Col>
                  <Col
                    lg="6"
                    className="d-flex align-items-center justify-content-center">
                    <Card className="rounded-sm shadow-none mt-5 mt-lg-0 p-3 bg-white-10">
                      <Card className="rounded-sm font-size-sm p-4">
                        <div className="py-4">
                          <div className="text-center mb-3">
                            <Button
                              className="m-2 btn-pill px-4 font-weight-bold"
                              size="sm"
                              color="google">
                              <span className="btn-wrapper--icon">
                                <FontAwesomeIcon icon={['fab', 'google']} />
                              </span>
                              <span className="btn-wrapper--label">
                                Login with Google
                              </span>
                            </Button>
                            <Button
                              className="m-2 btn-pill px-4 font-weight-bold"
                              size="sm"
                              color="facebook">
                              <span className="btn-wrapper--icon">
                                <FontAwesomeIcon icon={['fab', 'facebook']} />
                              </span>
                              <span className="btn-wrapper--label">
                                Login with Facebook
                              </span>
                            </Button>
                          </div>
                          <div className="text-center text-black-50 py-2 mb-4">
                            or sign in with credentials
                          </div>
                          <div>
                            <div className="form-group mb-3">
                              <Input placeholder="Email" type="email" />
                            </div>
                            <FormGroup>
                              <Input placeholder="Password" type="password" />
                            </FormGroup>
                            <div className="d-flex justify-content-between">
                              <div className="custom-control custom-control-alternative d-flex align-items-center custom-checkbox">
                                <input
                                  className="custom-control-input"
                                  id=" customCheckLogin55"
                                  type="checkbox"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor=" customCheckLogin55">
                                  <span>Remember me</span>
                                </label>
                              </div>
                              <div>
                                <a
                                  className="text-first"
                                  href="#/"
                                  onClick={(e) => e.preventDefault()}>
                                  Recover password
                                </a>
                              </div>
                            </div>
                            <div className="text-center py-4">
                              <Button
                                color="second"
                                className="font-weight-bold w-50 my-2">
                                Sign in
                              </Button>
                            </div>
                            <div className="text-center text-black-50 mt-3">
                              Don't have an account?{' '}
                              <a
                                href="#/"
                                onClick={(e) => e.preventDefault()}
                                className="text-first">
                                Sign up
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </Container>
            <div
              className="shape-container-top-1 z-below"
              style={{ marginTop: '-320px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="var(--light)"
                  fillOpacity="1"
                  d="M0,224L288,192L576,224L864,256L1152,128L1440,160L1440,320L1152,320L864,320L576,320L288,320L0,320Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
