import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row,
  Col,
  Card,
  Container,
  FormGroup,
  Input,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import { NavLink as NavLinkStrap } from 'reactstrap';

import hero6 from '../../../assets/images/hero-bg/hero-1.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <div className="app-wrapper min-vh-100 bg-white">
        <div className="hero-wrapper w-100 bg-composed-wrapper bg-midnight-bloom min-vh-100">
          <div className="flex-grow-1 w-100 d-flex align-items-center">
            <div
              className="bg-composed-wrapper--image opacity-6"
              style={{ backgroundImage: 'url(' + hero6 + ')' }}
            />
            <div className="bg-composed-wrapper--bg bg-second opacity-7" />
            <div className="bg-composed-wrapper--content p-3 p-md-5">
              <Container>
                <Card className="rounded-sm modal-content p-3 bg-white-10">
                  <Card className="rounded-sm overflow-hidden shadow-xxl font-size-sm p-3 p-sm-0">
                    <Row className="no-gutters">
                      <Col
                        lg="6"
                        className="d-flex align-items-center justify-content-center flex-column">
                        <div className="divider-v divider-v-lg d-none d-lg-block" />
                        <div className="text-center mt-4">
                          <h1 className="font-size-xxl mb-1 font-weight-bold">
                            Login
                          </h1>
                          <p className="mb-0 text-black-50">
                            Fill in the fields below to login to your account
                          </p>
                        </div>
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
                                className="text-first"
                                href="#/"
                                onClick={(e) => e.preventDefault()}>
                                Sign up
                              </a>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col
                        lg="6"
                        className="d-flex align-items-center justify-content-center flex-column bg-secondary">
                        <div className="p-3">
                          <div className="p-4">
                            <div className="d-block d-xl-flex">
                              <div className="mt-0 mt-xl-1 mb-md-2 mb-lg-0">
                                <FontAwesomeIcon
                                  icon={['far', 'heart']}
                                  className="font-size-xl text-first"
                                />
                              </div>
                              <div className="pl-0 pl-xl-3">
                                <div className="text-black font-weight-bold font-size-lg mb-1">
                                  Widgets
                                </div>
                                <p className="mb-0 text-black-50">
                                  350+ custom-made, beautiful components,
                                  widgets, pages, dashboards and applications.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="p-4">
                            <div className="d-block d-xl-flex">
                              <div className="mt-0 mt-xl-1 mb-md-2 mb-lg-0">
                                <FontAwesomeIcon
                                  icon={['far', 'lightbulb']}
                                  className="font-size-xl text-first"
                                />
                              </div>
                              <div className="pl-0 pl-xl-3">
                                <div className="text-black font-weight-bold font-size-lg mb-1">
                                  Components
                                </div>
                                <p className="mb-0 text-black-50">
                                  Browse through the live previews to see just
                                  how powerful this admin template really is!
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="p-4">
                            <div className="d-block d-xl-flex">
                              <div className="mt-0 mt-xl-1 mb-md-2 mb-lg-0">
                                <FontAwesomeIcon
                                  icon={['far', 'user']}
                                  className="font-size-xl text-first"
                                />
                              </div>
                              <div className="pl-0 pl-xl-3">
                                <div className="text-black font-weight-bold font-size-lg mb-1">
                                  Elements
                                </div>
                                <p className="mb-0 text-black-50">
                                  350+ custom-made, beautiful components,
                                  widgets, pages, dashboards and applications.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Card>
                </Card>
              </Container>
            </div>
          </div>
          <div className="hero-footer w-100 pb-4">
            <Container>
              <div className="py-3 d-block d-lg-flex font-size-xs justify-content-between">
                <div className="text-center d-block mb-3 mb-md-0 text-white">
                  Copyright &copy; 2020 - UiFort.com
                </div>
                <Nav className="nav-transparent justify-content-center">
                  <NavItem>
                    <NavLinkStrap
                      className="text-white-50"
                      href="#/"
                      onClick={(e) => e.preventDefault()}>
                      Privacy Policy
                    </NavLinkStrap>
                  </NavItem>
                  <NavItem>
                    <NavLinkStrap
                      className="text-white-50"
                      href="#/"
                      onClick={(e) => e.preventDefault()}>
                      Terms of Service
                    </NavLinkStrap>
                  </NavItem>
                </Nav>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}
