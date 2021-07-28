import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Container, Nav, NavItem } from 'reactstrap';
import { NavLink as NavLinkStrap } from 'reactstrap';
import projectLogo from '../../../assets/images/react.svg';

export default function LivePreviewExample() {
  return (
    <>
      <div className="bg-vicious-stance font-size-sm">
        <Container className="py-5">
          <div className="app-nav-logo d-flex w-100 pb-5 justify-content-center">
            <a
              href="#/"
              onClick={(e) => e.preventDefault()}
              title="Bamburgh React Admin Dashboard with Reactstrap PRO"
              className="d-inline-flex">
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
          <div className="pt-4">
            <Row className="text-center no-gutters w-100">
              <Col md="6" xl="3">
                <div className="my-4 my-xl-0">
                  <h6 className="text-white font-weight-bold mb-3 text-uppercase">
                    Services
                  </h6>
                  <Nav className="nav-transparent flex-column justify-content-center">
                    <NavItem>
                      <NavLinkStrap
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="px-0 py-1 d-block text-white-50">
                        Products
                      </NavLinkStrap>
                    </NavItem>
                    <NavItem>
                      <NavLinkStrap
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="px-0 py-1 d-block text-white-50">
                        Services
                      </NavLinkStrap>
                    </NavItem>
                    <NavItem>
                      <NavLinkStrap
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="px-0 py-1 d-block text-white-50">
                        About us
                      </NavLinkStrap>
                    </NavItem>
                  </Nav>
                </div>
              </Col>
              <Col md="6" xl="3">
                <div className="my-4 my-xl-0">
                  <h6 className="text-white font-weight-bold mb-3 text-uppercase">
                    Support
                  </h6>
                  <Nav className="nav-transparent flex-column justify-content-center">
                    <NavItem>
                      <NavLinkStrap
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="px-0 py-1 d-block text-white-50">
                        Support center
                      </NavLinkStrap>
                    </NavItem>
                    <NavItem>
                      <NavLinkStrap
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="px-0 py-1 d-block text-white-50">
                        Affiliates
                      </NavLinkStrap>
                    </NavItem>
                    <NavItem>
                      <NavLinkStrap
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="px-0 py-1 d-block text-white-50">
                        Contact us
                      </NavLinkStrap>
                    </NavItem>
                  </Nav>
                </div>
              </Col>
              <Col md="6" xl="3">
                <div className="my-4 my-xl-0">
                  <h6 className="text-white font-weight-bold mb-3 text-uppercase">
                    Applications
                  </h6>
                  <Nav className="nav-transparent flex-column justify-content-center">
                    <NavItem>
                      <NavLinkStrap
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="px-0 py-1 d-block text-white-50">
                        Exchange
                      </NavLinkStrap>
                    </NavItem>
                    <NavItem>
                      <NavLinkStrap
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="px-0 py-1 d-block text-white-50">
                        Generic
                      </NavLinkStrap>
                    </NavItem>
                    <NavItem>
                      <NavLinkStrap
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="px-0 py-1 d-block text-white-50">
                        Helpdesk
                      </NavLinkStrap>
                    </NavItem>
                  </Nav>
                </div>
              </Col>
              <Col md="6" xl="3">
                <div className="my-4 my-xl-0">
                  <h6 className="text-white font-weight-bold mb-3 text-uppercase pl-2">
                    Social Connections
                  </h6>
                  <p className="text-white-50">
                    Stay up to date with our latest updates and releases!
                  </p>
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
                </div>
              </Col>
            </Row>
            <div className="divider mb-4 mt-5 bg-white opacity-2" />
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
              <Nav className="nav-transparent justify-content-center">
                <NavItem>
                  <NavLinkStrap
                    className="text-white-50"
                    href="#/"
                    onClick={(e) => e.preventDefault()}>
                    My Account
                  </NavLinkStrap>
                </NavItem>
              </Nav>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
