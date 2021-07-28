import React, { useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row,
  Col,
  Collapse,
  Container,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import { NavLink as NavLinkStrap } from 'reactstrap';
import projectLogo from '../../../assets/images/react.svg';

import {
  Bell,
  Settings,
  Grid,
  Users,
  Briefcase,
  LifeBuoy
} from 'react-feather';

import hero5 from '../../../assets/images/hero-bg/hero-5.jpg';
import particles3 from '../../../assets/images/hero-bg/particles-3.svg';

export default function LivePreviewExample() {
  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);

  return (
    <>
      <div className="hero-wrapper overflow-hidden bg-composed-wrapper bg-second mb-5">
        <div className="hero-wrapper--content">
          <div className="bg-composed-wrapper--bg bg-second opacity-4" />
          <div
            className="bg-composed-wrapper--image bg-composed-filter-rm"
            style={{ backgroundImage: 'url(' + hero5 + ')' }}
          />
          <div
            className="bg-composed-wrapper--image opacity-6"
            style={{ backgroundImage: 'url(' + particles3 + ')' }}
          />
          <div className="bg-composed-wrapper--content">
            <div className="header-nav-wrapper bg-white px-4 shadow-lg header-nav-wrapper-lg navbar-light">
              <div className="app-nav-logo">
                <a
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  title="Bamburgh React Admin Dashboard with Reactstrap PRO"
                  className="app-nav-logo app-nav-logo--dark">
                  <div className="app-nav-logo--icon rounded-sm bg-white border-0">
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
              <div className="header-nav-menu d-none d-lg-block">
                <ul className="d-flex nav nav-neutral-first justify-content-center">
                  <li>
                    <a
                      className="font-size-lg text-first rounded"
                      href="#/"
                      onClick={(e) => e.preventDefault()}>
                      Pages
                      <span className="opacity-5 dropdown-arrow">
                        <FontAwesomeIcon icon={['fas', 'angle-down']} />
                      </span>
                    </a>
                    <div className="submenu-dropdown">
                      <div className="shadow-xxl bg-white rounded">
                        <Nav
                          pills
                          className="nav-neutral-primary nav-lg flex-column p-3">
                          <NavItem>
                            <NavLinkStrap
                              href="#/"
                              onClick={(e) => e.preventDefault()}
                              className="px-4 d-flex align-items-center">
                              <span>Courses</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </NavLinkStrap>
                          </NavItem>
                          <NavItem>
                            <NavLinkStrap
                              href="#/"
                              onClick={(e) => e.preventDefault()}
                              className="px-4 d-flex align-items-center">
                              <span>Listings</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </NavLinkStrap>
                          </NavItem>
                          <NavItem>
                            <NavLinkStrap
                              href="#/"
                              onClick={(e) => e.preventDefault()}
                              className="px-4 d-flex align-items-center">
                              <span>Workplace</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </NavLinkStrap>
                          </NavItem>
                          <NavItem>
                            <NavLinkStrap
                              href="#/"
                              onClick={(e) => e.preventDefault()}
                              className="px-4 d-flex align-items-center">
                              <span>Software</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </NavLinkStrap>
                          </NavItem>
                          <NavItem>
                            <NavLinkStrap
                              href="#/"
                              onClick={(e) => e.preventDefault()}
                              className="px-4 d-flex align-items-center">
                              <span>Exchanges</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </NavLinkStrap>
                          </NavItem>
                          <NavItem>
                            <NavLinkStrap
                              href="#/"
                              onClick={(e) => e.preventDefault()}
                              className="px-4 d-flex align-items-center">
                              <span>Services</span>
                              <FontAwesomeIcon
                                icon={['fas', 'angle-right']}
                                className="opacity-6 ml-auto"
                              />
                            </NavLinkStrap>
                          </NavItem>
                        </Nav>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="font-size-lg text-first rounded">
                      Landings
                      <span className="opacity-5 dropdown-arrow">
                        <FontAwesomeIcon icon={['fas', 'angle-down']} />
                      </span>
                    </a>
                    <div className="submenu-dropdown submenu-dropdown--xxl">
                      <Row className="no-gutters">
                        <Col lg="6" className="z-over">
                          <div className="shadow-sm-dark bg-white rounded">
                            <div className="px-4 text-uppercase pt-4 pb-2 text-primary font-weight-bold font-size-sm">
                              Applications
                            </div>
                            <Nav
                              pills
                              className="nav-neutral-first nav-lg flex-column px-3 pb-3">
                              <NavItem className="py-1">
                                <NavLinkStrap
                                  href="#/"
                                  onClick={(e) => e.preventDefault()}
                                  className="px-3">
                                  <div className="d-flex">
                                    <Briefcase className="text-black-50" />
                                    <div className="pl-3 text-black">
                                      <div className="font-weight-bold">
                                        General
                                      </div>
                                      <div className="text-black-50 font-size-sm">
                                        Multi-purpose user interface for
                                        dashboards
                                      </div>
                                    </div>
                                  </div>
                                </NavLinkStrap>
                              </NavItem>
                              <NavItem className="py-1">
                                <NavLinkStrap
                                  href="#/"
                                  onClick={(e) => e.preventDefault()}
                                  className="px-3">
                                  <div className="d-flex">
                                    <Users className="text-black-50" />
                                    <div className="pl-3 text-black">
                                      <div className="font-weight-bold">
                                        Messenger
                                      </div>
                                      <div className="text-black-50 font-size-sm">
                                        Niche application UI for building chat
                                        windows
                                      </div>
                                    </div>
                                  </div>
                                </NavLinkStrap>
                              </NavItem>
                              <NavItem className="py-1">
                                <NavLinkStrap
                                  href="#/"
                                  onClick={(e) => e.preventDefault()}
                                  className="px-3">
                                  <div className="d-flex">
                                    <Grid className="text-black-50" />
                                    <div className="pl-3 text-black">
                                      <div className="font-weight-bold">
                                        Commerce
                                      </div>
                                      <div className="text-black-50 font-size-sm">
                                        Build a commerce related app with this
                                        template
                                      </div>
                                    </div>
                                  </div>
                                </NavLinkStrap>
                              </NavItem>
                            </Nav>
                          </div>
                        </Col>
                        <Col lg="6" className="d-flex align-items-center">
                          <div className="shadow-sm-dark w-100 bg-secondary rounded-right p-3">
                            <Nav
                              pills
                              className="nav-neutral-first nav-lg flex-column p-0">
                              <NavItem className="py-1">
                                <NavLinkStrap
                                  href="#/"
                                  onClick={(e) => e.preventDefault()}
                                  className="px-3">
                                  <div className="d-flex">
                                    <Bell />
                                    <div className="pl-3">
                                      <div className="font-weight-bold">
                                        Crypto
                                      </div>
                                      <div className=" font-size-sm">
                                        User interface inspired by a
                                        cryptocurrency exchange
                                      </div>
                                    </div>
                                  </div>
                                </NavLinkStrap>
                              </NavItem>
                              <NavItem className="py-1">
                                <NavLinkStrap
                                  href="#/"
                                  onClick={(e) => e.preventDefault()}
                                  className="px-3">
                                  <div className="d-flex">
                                    <LifeBuoy />
                                    <div className="pl-3">
                                      <div className="font-weight-bold">
                                        Learning
                                        <span className="ml-3 badge badge-danger">
                                          Soon
                                        </span>
                                      </div>
                                      <div className=" font-size-sm">
                                        Courses platform template to start
                                        development faster
                                      </div>
                                    </div>
                                  </div>
                                </NavLinkStrap>
                              </NavItem>
                              <NavItem className="py-1">
                                <NavLinkStrap
                                  href="#/"
                                  onClick={(e) => e.preventDefault()}
                                  className="px-3">
                                  <div className="d-flex">
                                    <Settings />
                                    <div className="pl-3">
                                      <div className="font-weight-bold">
                                        Banking
                                        <span className="ml-3 badge badge-danger">
                                          Soon
                                        </span>
                                      </div>
                                      <div className=" font-size-sm">
                                        Financial dashboard template inspired by
                                        banking apps
                                      </div>
                                    </div>
                                  </div>
                                </NavLinkStrap>
                              </NavItem>
                            </Nav>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </li>
                  <li>
                    <a
                      className="font-size-lg text-first rounded"
                      href="#/"
                      onClick={(e) => e.preventDefault()}>
                      Blocks
                    </a>
                  </li>
                </ul>
              </div>
              <div className="header-nav-actions flex-grow-0 flex-lg-grow-1">
                <span className="d-none d-lg-block">
                  <Button
                    tag="a"
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="rounded-sm btn-icon d-40 text-nowrap font-size-lg shadow-xxl"
                    color="first">
                    <FontAwesomeIcon icon={['far', 'user-circle']} />
                  </Button>
                </span>
                <span className="d-block d-lg-none">
                  <button
                    onClick={toggle}
                    className={clsx(
                      'navbar-toggler hamburger hamburger--elastic',
                      { 'is-active': collapse }
                    )}>
                    <span className="hamburger-box">
                      <span className="hamburger-inner" />
                    </span>
                  </button>
                </span>
              </div>
              <div className="d-flex d-lg-none">
                <Collapse
                  isOpen={collapse}
                  className="nav-collapsed-wrapper navbar-collapse">
                  <div className="nav-inner-wrapper">
                    <Button
                      onClick={toggle}
                      color="danger"
                      className="btn-icon d-40 shadow-sm hover-scale-lg btn-animated-icon-sm nav-toggle-inner-btn p-0">
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={['fas', 'times']} />
                      </span>
                    </Button>

                    <Nav
                      pills
                      className="nav-neutral-primary nav-lg flex-column p-3">
                      <NavItem>
                        <NavLinkStrap
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-4 d-flex align-items-center">
                          <span>Courses</span>
                          <FontAwesomeIcon
                            icon={['fas', 'angle-right']}
                            className="opacity-6 ml-auto"
                          />
                        </NavLinkStrap>
                      </NavItem>
                      <NavItem>
                        <NavLinkStrap
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-4 d-flex align-items-center">
                          <span>Listings</span>
                          <FontAwesomeIcon
                            icon={['fas', 'angle-right']}
                            className="opacity-6 ml-auto"
                          />
                        </NavLinkStrap>
                      </NavItem>
                      <NavItem>
                        <NavLinkStrap
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-4 d-flex align-items-center">
                          <span>Workplace</span>
                          <FontAwesomeIcon
                            icon={['fas', 'angle-right']}
                            className="opacity-6 ml-auto"
                          />
                        </NavLinkStrap>
                      </NavItem>
                      <NavItem>
                        <NavLinkStrap
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-4 d-flex align-items-center">
                          <span>Software</span>
                          <FontAwesomeIcon
                            icon={['fas', 'angle-right']}
                            className="opacity-6 ml-auto"
                          />
                        </NavLinkStrap>
                      </NavItem>
                      <NavItem>
                        <NavLinkStrap
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-4 d-flex align-items-center">
                          <span>Exchanges</span>
                          <FontAwesomeIcon
                            icon={['fas', 'angle-right']}
                            className="opacity-6 ml-auto"
                          />
                        </NavLinkStrap>
                      </NavItem>
                      <NavItem>
                        <NavLinkStrap
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-4 d-flex align-items-center">
                          <span>Services</span>
                          <FontAwesomeIcon
                            icon={['fas', 'angle-right']}
                            className="opacity-6 ml-auto"
                          />
                        </NavLinkStrap>
                      </NavItem>
                    </Nav>
                  </div>
                </Collapse>
                <div
                  className={clsx('collapse-page-trigger', {
                    'is-active': collapse
                  })}
                  onClick={toggle}
                />
              </div>
            </div>
            <div className="py-3 text-center text-white py-xl-5">
              <div className="py-2" />
              <Container className="py-3 py-xl-5">
                <Row>
                  <Col lg="10" xl="8" className="mx-auto">
                    <div className="font-size-sm d-inline-flex bg-white-10 px-4 rounded-lg text-white py-2 text-uppercase">
                      Examples
                    </div>
                    <h3 className="display-3 font-weight-bold my-4 text-uppercase">
                      How can we help?
                    </h3>
                    <p className="text-white-50 line-height-2 font-size-xxl px-3 px-xl-5 mb-0">
                      Browse through the live previews to see just how powerful
                      this admin template really is!
                    </p>
                  </Col>
                </Row>
              </Container>
              <div className="py-5" />
            </div>
            <div className="shape-container-top-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="var(--light)"
                  fillOpacity="1"
                  d="M0,64L120,58.7C240,53,480,43,720,48C960,53,1200,75,1320,85.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
