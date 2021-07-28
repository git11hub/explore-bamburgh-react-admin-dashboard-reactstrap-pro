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

import hero3 from '../../../assets/images/hero-bg/hero-5.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <div className="app-wrapper min-vh-100 bg-white">
        <div className="hero-wrapper w-100 bg-composed-wrapper bg-light-pure min-vh-100">
          <div className="flex-grow-1 w-100 d-flex align-items-center">
            <div
              className="bg-composed-wrapper--image opacity-6"
              style={{ backgroundImage: 'url(' + hero3 + ')' }}
            />
            <div className="bg-composed-wrapper--bg bg-second opacity-7" />
            <div className="bg-composed-wrapper--bg bg-premium-dark opacity-5" />
            <div className="bg-composed-wrapper--content p-3 p-md-5">
              <Container>
                <Card className="rounded-sm modal-content p-3 bg-white-10">
                  <Card className="rounded-sm shadow-none font-size-sm p-3 p-sm-0">
                    <Row className="no-gutters">
                      <Col
                        lg="6"
                        className="d-flex align-items-center justify-content-center flex-column">
                        <div className="divider-v divider-v-lg d-none d-lg-block" />
                        <div className="text-center mt-4">
                          <h1 className="font-size-xxl mb-1 font-weight-bold">
                            Create account
                          </h1>
                          <p className="mb-0 text-black-50">
                            Start benefiting from our tools right away!
                          </p>
                        </div>
                        <div className="px-5 py-4">
                          <FormGroup>
                            <label className="font-weight-bold">
                              Email address
                            </label>
                            <Input
                              placeholder="Enter your email address"
                              type="email"
                            />
                          </FormGroup>
                          <FormGroup>
                            <div className="d-flex justify-content-between mg-b-5">
                              <label className="font-weight-bold">
                                Password
                              </label>
                            </div>
                            <Input
                              placeholder="Enter your password"
                              type="password"
                            />
                          </FormGroup>
                          <Row>
                            <Col md="6">
                              <FormGroup>
                                <label className="font-weight-bold">
                                  First name
                                </label>
                                <Input
                                  placeholder="Enter your firstname"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>
                            <Col md="6">
                              <FormGroup>
                                <label className="font-weight-bold">
                                  Last name
                                </label>
                                <Input
                                  placeholder="Enter your lastname"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <div className="form-group mb-3">
                            By clicking the <strong>Create account</strong>{' '}
                            button below you agree to our terms of service and
                            privacy statement.
                          </div>
                          <div className="text-center mb-5">
                            <Button
                              color="primary"
                              className="text-uppercase font-weight-bold font-size-sm my-3">
                              Create account
                            </Button>
                          </div>
                        </div>
                      </Col>
                      <Col
                        lg="6"
                        className="d-flex align-items-center justify-content-center flex-column">
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
