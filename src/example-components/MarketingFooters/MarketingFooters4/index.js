import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row,
  Col,
  CardBody,
  Card,
  Container,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import { NavLink as NavLinkStrap } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <div className="bg-white pb-5 pt-0 pt-md-5 rounded">
        <Container className="pt-0 pt-xl-5">
          <Row>
            <Col xl="7" className="d-flex align-items-center">
              <div className="w-100">
                <Row className="d-none d-md-flex mt-3">
                  <Col md="4">
                    <div className="divider-v divider-v-lg opacity-1 d-none d-xl-block" />
                    <div className="pl-0 pl-lg-3">
                      <h6 className="text-black font-weight-bold mb-3">
                        Services
                      </h6>
                      <Nav className="nav-transparent flex-column">
                        <NavItem>
                          <NavLinkStrap
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="px-0 py-1 text-black-50">
                            Products
                          </NavLinkStrap>
                        </NavItem>
                        <NavItem>
                          <NavLinkStrap
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="px-0 py-1 text-black-50">
                            Services
                          </NavLinkStrap>
                        </NavItem>
                        <NavItem>
                          <NavLinkStrap
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="px-0 py-1 text-black-50">
                            About us
                          </NavLinkStrap>
                        </NavItem>
                      </Nav>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="divider-v divider-v-lg opacity-1 d-none d-xl-block" />
                    <div className="pl-0 pl-lg-3">
                      <h6 className="text-black font-weight-bold mb-3">
                        Support
                      </h6>
                      <Nav className="nav-transparent flex-column">
                        <NavItem>
                          <NavLinkStrap
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="px-0 py-1 text-black-50">
                            Support center
                          </NavLinkStrap>
                        </NavItem>
                        <NavItem>
                          <NavLinkStrap
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="px-0 py-1 text-black-50">
                            Affiliates
                          </NavLinkStrap>
                        </NavItem>
                        <NavItem>
                          <NavLinkStrap
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="px-0 py-1 text-black-50">
                            Contact us
                          </NavLinkStrap>
                        </NavItem>
                      </Nav>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="pl-0 pl-lg-3">
                      <h6 className="text-black font-weight-bold mb-3">
                        UI Themes
                      </h6>
                      <Nav className="nav-transparent flex-column">
                        <NavItem>
                          <NavLinkStrap
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="px-0 py-1 text-black-50">
                            React themes
                          </NavLinkStrap>
                        </NavItem>
                        <NavItem>
                          <NavLinkStrap
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="px-0 py-1 text-black-50">
                            HTML5 themes
                          </NavLinkStrap>
                        </NavItem>
                        <NavItem>
                          <NavLinkStrap
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="px-0 py-1 text-black-50">
                            Angular themes
                          </NavLinkStrap>
                        </NavItem>
                      </Nav>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xl="5" className="d-flex align-items-center">
              <div className="w-100 mb-4 mb-md-0">
                <Card className="border-0 bg-deep-sky mt-5 mt-xl-0 card-box">
                  <CardBody>
                    <div className="text-black">
                      <h1 className="font-size-xl mb-2 text-white font-weight-bold">
                        Newsletter Subscribe
                      </h1>
                      <p className="font-size-md mb-4 text-white-50">
                        Stay up to date with our latest news and updates by
                        subscribing to our monthly newsletter
                      </p>
                      <div>
                        <Row>
                          <Col md="7">
                            <input
                              type="text"
                              className="form-control border-0"
                              placeholder="Email"
                            />
                          </Col>
                          <Col md="5">
                            <Button
                              className="w-100 mt-3 mt-md-0 shadow-none"
                              color="success">
                              <span className="btn-wrapper--label">
                                Sign up
                              </span>
                            </Button>
                          </Col>
                        </Row>
                      </div>
                      <small className="text-white-50 d-block pt-2">
                        We promise not to spam you with unwanted emails!
                      </small>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
          <div>
            <div className="divider d-sm-none d-md-block rounded-circle bg-dark opacity-2 mx-auto mb-4 mt-5 w-25" />
            <Nav className="nav-transparent justify-content-center">
              <NavItem>
                <NavLinkStrap
                  className="text-facebook hover-scale-sm"
                  href="#/"
                  onClick={(e) => e.preventDefault()}>
                  <FontAwesomeIcon
                    icon={['fab', 'facebook']}
                    className="font-size-lg"
                  />
                </NavLinkStrap>
              </NavItem>
              <NavItem>
                <NavLinkStrap
                  className="text-twitter hover-scale-sm"
                  href="#/"
                  onClick={(e) => e.preventDefault()}>
                  <FontAwesomeIcon
                    icon={['fab', 'twitter']}
                    className="font-size-lg"
                  />
                </NavLinkStrap>
              </NavItem>
              <NavItem>
                <NavLinkStrap
                  className="text-google hover-scale-sm"
                  href="#/"
                  onClick={(e) => e.preventDefault()}>
                  <FontAwesomeIcon
                    icon={['fab', 'google']}
                    className="font-size-lg"
                  />
                </NavLinkStrap>
              </NavItem>
              <NavItem>
                <NavLinkStrap
                  className="text-instagram hover-scale-sm"
                  href="#/"
                  onClick={(e) => e.preventDefault()}>
                  <FontAwesomeIcon
                    icon={['fab', 'instagram']}
                    className="font-size-lg"
                  />
                </NavLinkStrap>
              </NavItem>
            </Nav>
            <div className="divider d-sm-none d-md-block rounded-circle bg-dark opacity-2 mx-auto my-4 w-25" />
            <div className="text-center d-block text-black-50">
              Copyright &copy; 2020 - UiFort.com
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
