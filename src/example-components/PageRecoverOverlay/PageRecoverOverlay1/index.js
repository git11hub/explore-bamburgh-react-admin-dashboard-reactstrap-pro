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

import particles3 from '../../../assets/images/hero-bg/particles-3.svg';

export default function LivePreviewExample() {
  return (
    <>
      <div className="app-wrapper min-vh-100 bg-white">
        <div className="hero-wrapper w-100 bg-composed-wrapper bg-second min-vh-100">
          <div className="flex-grow-1 w-100 d-flex align-items-center">
            <div
              className="bg-composed-wrapper--image opacity-6"
              style={{ backgroundImage: 'url(' + particles3 + ')' }}
            />
            <div className="bg-composed-wrapper--bg bg-light-pure opacity-2" />
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
                          <h1 className="display-4 mb-1 font-weight-bold">
                            Recover Password
                          </h1>
                          <p className="font-size-lg mb-0 text-black-50">
                            Forgot your password? No worries, we're here to
                            help!
                          </p>
                        </div>
                        <div className="p-5 w-100">
                          <FormGroup>
                            <label className="font-weight-bold">
                              Email address
                            </label>
                            <Input
                              bsSize="lg"
                              placeholder="yourname@yourmail.com"
                              type="email"
                            />
                          </FormGroup>
                          <div className="text-center">
                            <Button
                              className="btn-block text-uppercase font-weight-bold font-size-sm mt-4"
                              color="primary">
                              Send password
                            </Button>
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
