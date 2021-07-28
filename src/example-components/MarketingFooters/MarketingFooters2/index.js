import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Container, Nav, NavItem, Button } from 'reactstrap';
import { NavLink as NavLinkStrap } from 'reactstrap';
import projectLogo from '../../../assets/images/react.svg';

export default function LivePreviewExample() {
  return (
    <>
      <div className="bg-second rounded py-5">
        <Container className="py-0 text-center text-xl-left py-xl-5">
          <Row>
            <Col xl="5" className="d-flex align-items-center">
              <div className="mb-5 mb-xl-0 w-100">
                <div className="app-nav-logo justify-content-center text-left justify-content-xl-left flex-column flex-xl-row">
                  <a
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    title="Bamburgh React Admin Dashboard with Reactstrap PRO"
                    className="app-nav-logo">
                    <div className="app-nav-logo--icon rounded-circle">
                      <img
                        alt="Bamburgh React Admin Dashboard with Reactstrap PRO"
                        src={projectLogo}
                      />
                    </div>
                    <div className="app-nav-logo--text">
                      <span>General</span>

                      <b>bamburgh</b>
                    </div>
                  </a>
                </div>
                <p className="my-4 text-white-50">
                  I will give you a complete account of the system, and expound
                  the actual teachings.
                </p>
                <div>
                  <Button
                    tag="a"
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    color="first"
                    className="mr-3">
                    Contact us
                  </Button>
                  <Button
                    tag="a"
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    outline
                    color="first">
                    Affiliates
                  </Button>
                </div>
              </div>
            </Col>
            <Col xl="7" className="d-none d-md-flex align-items-center">
              <Row className="w-100">
                <Col md="4">
                  <div className="divider-v divider-v-lg opacity-1 d-none d-xl-block" />
                  <div className="pl-0 pl-lg-3">
                    <h6 className="text-white font-weight-bold mb-3">
                      Services
                    </h6>
                    <Nav className="nav-transparent flex-column">
                      <NavItem>
                        <NavLinkStrap
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="d-block d-xl-flex px-0 py-1 text-white-50">
                          Products
                        </NavLinkStrap>
                      </NavItem>
                      <NavItem>
                        <NavLinkStrap
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="d-block d-xl-flex px-0 py-1 text-white-50">
                          Services
                        </NavLinkStrap>
                      </NavItem>
                      <NavItem>
                        <NavLinkStrap
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="d-block d-xl-flex px-0 py-1 text-white-50">
                          About us
                        </NavLinkStrap>
                      </NavItem>
                    </Nav>
                  </div>
                </Col>
                <Col md="4">
                  <div className="divider-v divider-v-lg opacity-1 d-none d-xl-block" />
                  <div className="pl-0 pl-lg-3">
                    <h6 className="text-white font-weight-bold mb-3">
                      Support
                    </h6>
                    <Nav className="nav-transparent flex-column">
                      <NavItem>
                        <NavLinkStrap
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="d-block d-xl-flex px-0 py-1 text-white-50">
                          Support center
                        </NavLinkStrap>
                      </NavItem>
                      <NavItem>
                        <NavLinkStrap
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="d-block d-xl-flex px-0 py-1 text-white-50">
                          Affiliates
                        </NavLinkStrap>
                      </NavItem>
                      <NavItem>
                        <NavLinkStrap
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="d-block d-xl-flex px-0 py-1 text-white-50">
                          Contact us
                        </NavLinkStrap>
                      </NavItem>
                    </Nav>
                  </div>
                </Col>
                <Col md="4">
                  <div className="pl-0 pl-lg-3">
                    <h6 className="text-white font-weight-bold mb-3">
                      UI Themes
                    </h6>
                    <Nav className="nav-transparent flex-column">
                      <NavItem>
                        <NavLinkStrap
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="d-block d-xl-flex px-0 py-1 text-white-50">
                          React themes
                        </NavLinkStrap>
                      </NavItem>
                      <NavItem>
                        <NavLinkStrap
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="d-block d-xl-flex px-0 py-1 text-white-50">
                          HTML5 themes
                        </NavLinkStrap>
                      </NavItem>
                      <NavItem>
                        <NavLinkStrap
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="d-block d-xl-flex px-0 py-1 text-white-50">
                          Angular themes
                        </NavLinkStrap>
                      </NavItem>
                    </Nav>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className="divider border-2 d-none d-md-block rounded-circle border-white bg-white opacity-2 mx-auto my-5 w-50" />
          <Nav className="nav-transparent justify-content-center">
            <NavItem>
              <NavLinkStrap
                className="text-white-50"
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
                className="text-white-50"
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
                className="text-white-50"
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
                className="text-white-50"
                href="#/"
                onClick={(e) => e.preventDefault()}>
                <FontAwesomeIcon
                  icon={['fab', 'instagram']}
                  className="font-size-lg"
                />
              </NavLinkStrap>
            </NavItem>
          </Nav>
        </Container>
      </div>
    </>
  );
}
