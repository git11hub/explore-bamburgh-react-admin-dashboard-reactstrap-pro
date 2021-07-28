import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row,
  Col,
  Container,
  FormGroup,
  Input,
  UncontrolledTooltip,
  Button
} from 'reactstrap';

import illustration1 from '../../../assets/images/illustrations/pack1/authentication.svg';

export default function LivePreviewExample() {
  return (
    <>
      <div className="app-wrapper bg-white min-vh-100">
        <div className="app-main min-vh-100">
          <div className="app-content p-0">
            <div className="app-content--inner d-flex align-items-center">
              <div className="flex-grow-1 w-100 d-flex align-items-center">
                <div className="bg-composed-wrapper--content py-5">
                  <Container>
                    <Row>
                      <Col lg="6" className="d-flex align-items-center">
                        <div className="divider-v d-none d-lg-block divider-v-md" />
                        <div className="w-100 pr-0 pr-lg-5">
                          <div className="text-black mt-3">
                            <span className="text-center">
                              <h1 className="display-4 mb-1 font-weight-bold">
                                Login to your account
                              </h1>
                              <p className="font-size-lg mb-0 text-black-50">
                                We're glad you're working on your app. Login
                                below to continue.
                              </p>
                            </span>
                            <div className="bg-secondary rounded p-4 my-4">
                              <div className="text-black-50 text-center mb-3">
                                Sign in with
                              </div>
                              <Row>
                                <Col md="6">
                                  <Button
                                    color="facebook"
                                    className="btn-block btn-animated-icon"
                                    id="btnFacebookTooltip23465">
                                    <span className="btn-wrapper--icon d-flex align-items-center justify-content-center">
                                      <FontAwesomeIcon
                                        icon={['fab', 'facebook']}
                                      />
                                    </span>
                                  </Button>
                                  <UncontrolledTooltip target="btnFacebookTooltip23465">
                                    Facebook
                                  </UncontrolledTooltip>
                                </Col>
                                <Col md="6">
                                  <Button
                                    color="twitter"
                                    className="btn-block btn-animated-icon"
                                    id="btnTwitterTooltip452346">
                                    <span className="btn-wrapper--icon d-flex align-items-center justify-content-center">
                                      <FontAwesomeIcon
                                        icon={['fab', 'twitter']}
                                      />
                                    </span>
                                  </Button>
                                  <UncontrolledTooltip target="btnTwitterTooltip452346">
                                    Twitter
                                  </UncontrolledTooltip>
                                </Col>
                              </Row>
                            </div>
                            <div>
                              <FormGroup>
                                <label className="font-weight-bold">
                                  Email address
                                </label>
                                <Input
                                  placeholder="yourname@yourmail.com"
                                  type="email"
                                />
                              </FormGroup>
                              <div className="form-group mb-4">
                                <div className="d-flex justify-content-between">
                                  <label className="font-weight-bold">
                                    Password
                                  </label>
                                  <a
                                    href="#/"
                                    onClick={(e) => e.preventDefault()}>
                                    Forgot password?
                                  </a>
                                </div>
                                <Input
                                  placeholder="Enter your password"
                                  type="password"
                                />
                              </div>

                              <Button
                                size="lg"
                                className="btn-block text-uppercase font-weight-bold font-size-sm"
                                color="primary">
                                Sign in
                              </Button>
                            </div>
                            <div className="text-center pt-4 text-black-50">
                              Don't have an account?{' '}
                              <a href="#/" onClick={(e) => e.preventDefault()}>
                                Create an Account
                              </a>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col
                        lg="6"
                        className="d-none d-lg-flex align-items-center">
                        <img
                          alt="..."
                          className="w-100 mx-auto d-block img-fluid"
                          src={illustration1}
                        />
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
