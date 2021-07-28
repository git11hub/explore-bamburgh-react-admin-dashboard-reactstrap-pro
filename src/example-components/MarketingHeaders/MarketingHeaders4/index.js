import React, { useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Collapse, Nav, NavItem, Button } from 'reactstrap';
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

export default function LivePreviewExample() {
  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);

  return (
    <>
      <div className="header-nav-wrapper header-nav-wrapper-lg rounded navbar-light">
        <div className="app-nav-logo flex-grow-0 app-nav-logo--dark mr-3">
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
                className="font-size-sm text-uppercase font-weight-bold rounded-pill"
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
              </div>
            </li>
            <li>
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="rounded-pill font-size-sm text-uppercase font-weight-bold">
                Landings
                <span className="opacity-5 dropdown-arrow">
                  <FontAwesomeIcon icon={['fas', 'angle-down']} />
                </span>
              </a>
              <div className="submenu-dropdown submenu-dropdown--xxl">
                <Row className="no-gutters">
                  <Col lg="6" className="z-over">
                    <div className="shadow-xxl bg-white rounded">
                      <div className="px-4 text-uppercase pt-4 pb-2 text-primary font-weight-bold font-size-sm">
                        Applications
                      </div>
                      <Nav
                        pills
                        className="nav-neutral-primary nav-lg flex-column px-3 pb-3">
                        <NavItem className="py-1">
                          <NavLinkStrap
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="px-3">
                            <div className="d-flex">
                              <Briefcase className="text-black-50" />
                              <div className="pl-3 text-black">
                                <div className="font-weight-bold">General</div>
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
                                  Niche application UI for building chat windows
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
                                <div className="font-weight-bold">Commerce</div>
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
                    <div className="shadow-xxl w-100 bg-primary rounded-right p-3">
                      <Nav
                        pills
                        className="nav-neutral-second nav-lg flex-column p-0">
                        <NavItem className="py-1">
                          <NavLinkStrap
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="px-3 text-white-50">
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
                            className="px-3 text-white-50">
                            <div className="d-flex">
                              <LifeBuoy className="text-white-50" />
                              <div className="pl-3 text-white">
                                <div className="font-weight-bold">
                                  Learning
                                  <span className="ml-3 badge badge-info">
                                    Soon
                                  </span>
                                </div>
                                <div className="text-white-50 font-size-sm">
                                  Courses platform template to start development
                                  faster
                                </div>
                              </div>
                            </div>
                          </NavLinkStrap>
                        </NavItem>
                        <NavItem className="py-1">
                          <NavLinkStrap
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="px-3 text-white-50">
                            <div className="d-flex">
                              <Settings className="text-white-50" />
                              <div className="pl-3 text-white">
                                <div className="font-weight-bold">
                                  Banking
                                  <span className="ml-3 badge badge-info">
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
                className="rounded-pill font-size-sm text-uppercase font-weight-bold"
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
              className="btn-pill text-uppercase font-weight-bold text-nowrap font-size-xs"
              color="primary">
              My account
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
            className="nav-collapsed-wrapper bg-second shadow-xxl navbar-collapse">
            <div className="nav-inner-wrapper">
              <Button
                onClick={toggle}
                color="danger"
                className="btn-icon d-40 shadow-sm hover-scale-lg btn-animated-icon-sm nav-toggle-inner-btn p-0">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['fas', 'times']} />
                </span>
              </Button>

              <Nav pills className="nav-transparent nav-lg flex-column p-3">
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
          </Collapse>
        </div>
      </div>
      <div
        className={clsx('collapse-page-trigger', { 'is-active': collapse })}
        onClick={toggle}
      />
    </>
  );
}
