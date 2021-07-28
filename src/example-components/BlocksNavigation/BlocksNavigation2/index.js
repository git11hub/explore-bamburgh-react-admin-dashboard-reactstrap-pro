import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Badge, Nav, NavItem } from 'reactstrap';
import { NavLink as NavLinkStrap } from 'reactstrap';

import logo1 from '../../../assets/images/stock-logos/stripe.svg';
import stock5 from '../../../assets/images/stock-photos/stock-5.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <Card className="card-box mb-5">
        <Row className="no-gutters">
          <Col xl="4">
            <div className="text-center pt-4 pb-3">
              <img
                alt="..."
                className="img-fluid mt-2 mx-auto"
                style={{ height: '60px' }}
                src={logo1}
              />

              <p className="font-size-lg text-dark px-3 my-4">
                Browse through the live previews to see just how powerful this
                admin template really is!
              </p>

              <Nav
                pills
                className="nav-neutral-primary nav-lg nav-alt flex-column pr-4">
                <NavItem>
                  <NavLinkStrap
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="active">
                    <span>Analytics</span>
                    <div className="ml-auto">
                      <FontAwesomeIcon
                        icon={['fas', 'chevron-right']}
                        className="font-size-xs opacity-3"
                      />
                    </div>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                    <span>Reports Management</span>
                    <div className="ml-auto">
                      <FontAwesomeIcon
                        icon={['fas', 'chevron-right']}
                        className="font-size-xs opacity-3"
                      />
                    </div>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                    <span>Real Estate</span>
                    <div className="ml-auto">
                      <FontAwesomeIcon
                        icon={['fas', 'chevron-right']}
                        className="font-size-xs opacity-3"
                      />
                    </div>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                    <span>Server Status</span>
                    <div className="ml-auto">
                      <Badge color="danger" className="mr-3">
                        23
                      </Badge>
                      <FontAwesomeIcon
                        icon={['fas', 'chevron-right']}
                        className="font-size-xs opacity-3"
                      />
                    </div>
                  </NavLinkStrap>
                </NavItem>
              </Nav>
            </div>
          </Col>
          <Col xl="8">
            <div className="hero-wrapper bg-composed-wrapper h-100 rounded br-xl-left-0">
              <div className="flex-grow-1 w-100 d-flex align-items-end">
                <div
                  className="bg-composed-wrapper--image rounded br-xl-left-0 opacity-9 bg-composed-filter-rm"
                  style={{ backgroundImage: 'url(' + stock5 + ')' }}
                />
                <div className="bg-composed-wrapper--bg bg-night-sky opacity-5 rounded br-xl-left-0" />
                <div className="bg-composed-wrapper--bg bg-sunrise-purple opacity-7 rounded br-xl-left-0" />
                <div className="bg-composed-wrapper--content align-self-center p-4 p-xl-5">
                  <Row className="no-gutters">
                    <Col md="6" className="d-flex">
                      <Card className="card-box mx-3 mb-3 mb-lg-0 p-3 p-xl-4 w-100">
                        <div className="font-weight-bold font-size-sm text-uppercase text-second mt-2">
                          Positive Reviews
                        </div>
                        <div className="d-flex py-4 align-items-center">
                          <div className="d-60 rounded border-0 card-icon-wrapper flex-shrink-0 bg-success text-white btn-icon text-center shadow-success mr-3">
                            <FontAwesomeIcon
                              icon={['far', 'comment-dots']}
                              className="display-4"
                            />
                          </div>
                          <div className="display-3 text-success font-weight-bold ml-1">
                            0.16%
                          </div>
                        </div>
                        <div className="text-black-50 font-weight-bold mb-2">
                          <a
                            className="text-first"
                            href="#/"
                            onClick={(e) => e.preventDefault()}>
                            See reviews
                          </a>{' '}
                          that were left by past customers from USA.
                        </div>
                      </Card>
                    </Col>
                    <Col md="6" className="d-flex">
                      <Card className="card-box mx-3 p-3 p-xl-4 w-100">
                        <div className="font-weight-bold font-size-sm text-uppercase text-second mt-2">
                          Bounce Rate
                        </div>
                        <div className="d-flex py-4 align-items-center">
                          <div className="d-60 rounded border-0 card-icon-wrapper flex-shrink-0 bg-warning text-white btn-icon text-center shadow-warning mr-3">
                            <FontAwesomeIcon
                              icon={['fas', 'map-marked-alt']}
                              className="display-4"
                            />
                          </div>
                          <div className="display-3 text-warning font-weight-bold ml-1">
                            12.87%
                          </div>
                        </div>
                        <div className="text-black-50 font-weight-bold mb-2">
                          <a
                            className="text-first"
                            href="#/"
                            onClick={(e) => e.preventDefault()}>
                            See visits
                          </a>{' '}
                          that had a higher than expected bounce rate.
                        </div>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
}
