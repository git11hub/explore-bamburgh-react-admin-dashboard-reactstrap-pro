import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Container, Nav, NavItem, Button } from 'reactstrap';
import { NavLink as NavLinkStrap } from 'reactstrap';
import projectLogo from '../../../assets/images/react.svg';

export default function LivePreviewExample() {
  return (
    <>
      <div className="bg-white rounded py-5">
        <Container className="py-0 text-center text-xl-left py-xl-5">
          <Row>
            <Col xl="5" className="d-flex align-items-center">
              <div className="mb-5 mb-xl-0 w-100">
                <div className="app-nav-logo justify-content-center text-left justify-content-xl-left flex-column flex-xl-row">
                  <a
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    title="Bamburgh React Admin Dashboard with Reactstrap PRO"
                    className="app-nav-logo app-nav-logo--dark">
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
                <p className="text-black-50 font-size-lg my-4">
                  The home of perfectly built UI kits, dashboards, themes &
                  templates.
                </p>
                <div className="divider border-1 rounded-circle border-dark bg-dark opacity-2 mx-auto mx-xl-0 mb-4 w-25" />
                <Nav className="justify-content-center justify-content-xl-start">
                  <NavItem>
                    <Button
                      tag="a"
                      color="facebook"
                      className="btn-icon btn-animated-icon-sm d-30 p-0 mr-2"
                      href="#/"
                      onClick={(e) => e.preventDefault()}>
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon
                          icon={['fab', 'facebook']}
                          className="font-size-sm"
                        />
                      </span>
                    </Button>
                  </NavItem>
                  <NavItem>
                    <Button
                      tag="a"
                      color="twitter"
                      className="btn-icon btn-animated-icon-sm d-30 p-0 mr-2"
                      href="#/"
                      onClick={(e) => e.preventDefault()}>
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon
                          icon={['fab', 'twitter']}
                          className="font-size-sm"
                        />
                      </span>
                    </Button>
                  </NavItem>
                  <NavItem>
                    <Button
                      tag="a"
                      color="google"
                      className="btn-icon btn-animated-icon-sm d-30 p-0 mr-2"
                      href="#/"
                      onClick={(e) => e.preventDefault()}>
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon
                          icon={['fab', 'google']}
                          className="font-size-sm"
                        />
                      </span>
                    </Button>
                  </NavItem>
                  <NavItem>
                    <Button
                      tag="a"
                      color="instagram"
                      className="btn-icon btn-animated-icon-sm d-30 p-0"
                      href="#/"
                      onClick={(e) => e.preventDefault()}>
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon
                          icon={['fab', 'instagram']}
                          className="font-size-sm"
                        />
                      </span>
                    </Button>
                  </NavItem>
                </Nav>
              </div>
            </Col>
            <Col xl="7" className="d-none d-md-flex align-items-center">
              <Row className="no-gutters w-100">
                <Col md="4">
                  <div className="divider-v divider-v-lg opacity-1 d-none d-xl-block" />
                  <div className="pl-0 pl-lg-3">
                    <h6 className="text-second font-weight-bold mb-3">
                      Services
                    </h6>
                    <Nav className="nav-transparent flex-column">
                      <NavItem>
                        <NavLinkStrap
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-0 d-block d-xl-flex py-1">
                          Products
                        </NavLinkStrap>
                      </NavItem>
                      <NavItem>
                        <NavLinkStrap
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-0 d-block d-xl-flex py-1">
                          Services
                        </NavLinkStrap>
                      </NavItem>
                      <NavItem>
                        <NavLinkStrap
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-0 d-block d-xl-flex py-1">
                          About us
                        </NavLinkStrap>
                      </NavItem>
                    </Nav>
                  </div>
                </Col>
                <Col md="4">
                  <div className="divider-v divider-v-lg opacity-1 d-none d-xl-block" />
                  <div className="pl-0 pl-lg-3">
                    <h6 className="text-second font-weight-bold mb-3">
                      Support
                    </h6>
                    <Nav className="nav-transparent flex-column">
                      <NavItem>
                        <NavLinkStrap
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-0 d-block d-xl-flex py-1">
                          Support center
                        </NavLinkStrap>
                      </NavItem>
                      <NavItem>
                        <NavLinkStrap
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-0 d-block d-xl-flex py-1">
                          Affiliates
                        </NavLinkStrap>
                      </NavItem>
                      <NavItem>
                        <NavLinkStrap
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-0 d-block d-xl-flex py-1">
                          Contact us
                        </NavLinkStrap>
                      </NavItem>
                    </Nav>
                  </div>
                </Col>
                <Col md="4">
                  <div className="pl-0 pl-lg-3">
                    <h6 className="text-second font-weight-bold mb-3">
                      UI Themes
                    </h6>
                    <Nav className="nav-transparent flex-column">
                      <NavItem>
                        <NavLinkStrap
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-0 d-block d-xl-flex py-1">
                          React themes
                        </NavLinkStrap>
                      </NavItem>
                      <NavItem>
                        <NavLinkStrap
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-0 d-block d-xl-flex py-1">
                          HTML5 themes
                        </NavLinkStrap>
                      </NavItem>
                      <NavItem>
                        <NavLinkStrap
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-0 d-block d-xl-flex py-1">
                          Angular themes
                        </NavLinkStrap>
                      </NavItem>
                    </Nav>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className="divider border-1 d-none d-md-block rounded-circle border-dark bg-dark opacity-2 mx-auto my-4 my-lg-5 w-25" />
          <small className="text-center d-block text-black-50">
            Copyright &copy; 2020 - UiFort.com
          </small>
        </Container>
      </div>
    </>
  );
}
