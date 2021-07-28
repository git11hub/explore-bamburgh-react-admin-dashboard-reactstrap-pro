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
import { FlagIcon } from 'react-flag-kit';
import projectLogo from '../../../assets/images/react.svg';

import {
  Bell,
  Settings,
  Grid,
  Users,
  Briefcase,
  LifeBuoy
} from 'react-feather';

export default function LivePreviewExample() {
  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);

  return (
    <>
      <Container className="pt-3">
        <div className="header-top-section bg-white-5 rounded p-2">
          <div className="d-flex header-nav-menu justify-content-between align-items-center navbar-dark">
            <ul className="d-flex">
              <li className="ml-0">
                <Button
                  color="link"
                  className="rounded-sm d-30 p-0 btn-icon btn-transition-none"
                  href="#/"
                  onClick={(e) => e.preventDefault()}>
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon
                      icon={['far', 'bell']}
                      className="font-size-sm"
                    />
                  </span>
                </Button>
              </li>
            </ul>
            <ul className="d-flex">
              <li>
                <a
                  className="rounded-sm py-1 px-3 font-size-sm"
                  href="#/"
                  onClick={(e) => e.preventDefault()}>
                  Languages
                  <span className="opacity-5 dropdown-arrow">
                    <FontAwesomeIcon icon={['fas', 'angle-down']} />
                  </span>
                </a>
                <div className="submenu-dropdown submenu-dropdown--sm">
                  <div className="shadow-sm-dark bg-second rounded-sm">
                    <Nav pills className="nav-transparent flex-column p-2">
                      <NavItem>
                        <NavLinkStrap
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-3 d-flex align-items-center text-white-50">
                          <span className="mr-3">
                            <FlagIcon code="US" size={28} />
                          </span>
                          <span>English</span>
                        </NavLinkStrap>
                      </NavItem>
                      <NavItem>
                        <NavLinkStrap
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-3 d-flex align-items-center text-white-50">
                          <span className="mr-3">
                            <FlagIcon code="ES" size={28} />
                          </span>
                          <span>Spanish</span>
                        </NavLinkStrap>
                      </NavItem>
                      <NavItem>
                        <NavLinkStrap
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-3 d-flex align-items-center text-white-50">
                          <span className="mr-3">
                            <FlagIcon code="DE" size={28} />
                          </span>
                          <span>German</span>
                        </NavLinkStrap>
                      </NavItem>
                    </Nav>
                  </div>
                </div>
              </li>
              <li className="mr-0">
                <Button
                  color="link"
                  className="rounded-sm d-30 p-0 btn-icon btn-transition-none"
                  href="#/"
                  onClick={(e) => e.preventDefault()}>
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon
                      icon={['fas', 'user']}
                      className="font-size-sm"
                    />
                  </span>
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-nav-wrapper h-auto my-3 py-3 rounded navbar-dark">
          <div className="app-nav-logo flex-grow-0 mr-3">
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
          <div className="header-nav-menu flex-grow-0 ml-auto d-none d-lg-block">
            <ul className="d-flex justify-content-center">
              <li>
                <a
                  className="text-white font-weight-bold rounded"
                  href="#/"
                  onClick={(e) => e.preventDefault()}>
                  Pages
                  <span className="opacity-5 dropdown-arrow">
                    <FontAwesomeIcon icon={['fas', 'angle-down']} />
                  </span>
                </a>
                <div className="submenu-dropdown">
                  <div className="shadow-sm-dark w-100 bg-second rounded">
                    <Nav
                      pills
                      className="nav-transparent nav-lg flex-column p-3">
                      <NavItem>
                        <NavLinkStrap
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-4 d-flex align-items-center text-white-50">
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
                          className="px-4 d-flex align-items-center text-white-50">
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
                          className="px-4 d-flex align-items-center text-white-50">
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
                          className="px-4 d-flex align-items-center text-white-50">
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
                          className="px-4 d-flex align-items-center text-white-50">
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
                          className="px-4 d-flex align-items-center text-white-50">
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
                  className="rounded text-white font-weight-bold">
                  Landings
                  <span className="opacity-5 dropdown-arrow">
                    <FontAwesomeIcon icon={['fas', 'angle-down']} />
                  </span>
                </a>
                <div className="submenu-dropdown submenu-dropdown--xxl">
                  <Row className="no-gutters">
                    <Col lg="6" className="z-over">
                      <div className="shadow-sm-dark bg-white rounded">
                        <div className="px-4 text-uppercase pt-4 pb-2 text-dark font-weight-bold font-size-sm">
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
                                    Multi-purpose user interface for dashboards
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
                      <div className="shadow-sm-dark w-100 bg-second rounded-right p-3">
                        <Nav
                          pills
                          className="nav-transparent-alt nav-lg flex-column p-0">
                          <NavItem className="py-1">
                            <NavLinkStrap
                              href="#/"
                              onClick={(e) => e.preventDefault()}
                              className="text-white-50 px-3">
                              <div className="d-flex">
                                <Bell className="text-white-50" />
                                <div className="pl-3 text-white">
                                  <div className="font-weight-bold">Crypto</div>
                                  <div className="text-white-50 font-size-sm">
                                    User interface inspired by a cryptocurrency
                                    exchange
                                  </div>
                                </div>
                              </div>
                            </NavLinkStrap>
                          </NavItem>
                          <NavItem className="py-1">
                            <NavLinkStrap
                              href="#/"
                              onClick={(e) => e.preventDefault()}
                              className="text-white-50 px-3">
                              <div className="d-flex">
                                <LifeBuoy className="text-white-50" />
                                <div className="pl-3 text-white">
                                  <div className="font-weight-bold">
                                    Learning
                                    <span className="ml-3 badge badge-danger">
                                      Soon
                                    </span>
                                  </div>
                                  <div className="text-white-50 font-size-sm">
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
                              className="text-white-50 px-3">
                              <div className="d-flex">
                                <Settings className="text-white-50" />
                                <div className="pl-3 text-white">
                                  <div className="font-weight-bold">
                                    Banking
                                    <span className="ml-3 badge badge-danger">
                                      Soon
                                    </span>
                                  </div>
                                  <div className="text-white-50 font-size-sm">
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
                  className="rounded text-white font-weight-bold"
                  href="#/"
                  onClick={(e) => e.preventDefault()}>
                  Blocks
                </a>
              </li>
            </ul>
          </div>
          <div className="header-nav-actions ml-auto ml-xl-4 flex-grow-0">
            <span className="d-none d-lg-block">
              <Button
                tag="a"
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="btn-pill font-weight-bold text-nowrap font-size-sm hover-scale-sm shadow-second-sm"
                color="success">
                Buy Now
              </Button>
            </span>
            <span className="d-block d-lg-none">
              <button
                onClick={toggle}
                className={clsx('navbar-toggler hamburger hamburger--elastic', {
                  'is-active': collapse
                })}>
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
                  className="nav-neutral-primary nav-pills-rounded nav-lg flex-column p-3">
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
          </div>
        </div>
      </Container>
      <div
        className={clsx('collapse-page-trigger', { 'is-active': collapse })}
        onClick={toggle}
      />
    </>
  );
}
