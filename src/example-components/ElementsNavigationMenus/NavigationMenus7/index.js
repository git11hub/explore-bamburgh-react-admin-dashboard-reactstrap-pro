import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Badge, Nav, NavItem, Button } from 'reactstrap';
import { NavLink as NavLinkStrap } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col md="6">
          <Card className="mb-5 mb-xl-0 card-box p-0">
            <div className="bg-composed-wrapper bg-malibu-beach">
              <div className="bg-composed-wrapper--image bg-composed-img-2" />
              <div className="bg-composed-wrapper--content text-light p-5">
                <h5 className="mb-2 font-size-xl font-weight-bold">
                  Bamburgh React Admin Dashboard with Reactstrap PRO
                </h5>
                <p className="mb-0 font-size-lg opacity-8">
                  These are examples of vertical navigation menus with composed
                  card headers.
                </p>
              </div>
            </div>
            <div className="scroll-area-sm shadow-overflow">
              <PerfectScrollbar options={{ wheelPropagation: false }}>
                <Nav
                  pills
                  className="nav-neutral-first nav-lg nav-alt flex-column pr-3 py-3">
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
                      <span>
                        <span>Server Status</span>
                      </span>
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
                </Nav>
              </PerfectScrollbar>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <Button color="neutral-first" size="sm">
                <span>View details</span>
              </Button>
              <Button size="sm" color="first">
                Save now
              </Button>
            </div>
          </Card>
        </Col>
        <Col md="6">
          <Card className="mb-5 mb-xl-0 card-box p-0">
            <div className="bg-composed-wrapper bg-danger">
              <div className="bg-composed-wrapper--image bg-composed-img-3" />
              <div className="bg-composed-wrapper--content text-center text-light p-5">
                <h5 className="mb-2 font-size-xl font-weight-bold">
                  Bamburgh React Admin Dashboard with Reactstrap PRO
                </h5>
                <p className="mb-0 font-size-lg opacity-8">
                  These are examples of scrollable vertical navigation menus
                  with composed card headers.
                </p>
              </div>
            </div>
            <div className="scroll-area-sm shadow-overflow">
              <PerfectScrollbar options={{ wheelPropagation: false }}>
                <Nav
                  pills
                  className="nav-neutral-danger nav-lg nav-pills-rounded flex-column p-3">
                  <NavItem>
                    <NavLinkStrap
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="active pl-2">
                      <div className="nav-link-icon opacity-7">
                        <FontAwesomeIcon icon={['far', 'chart-bar']} />
                      </div>
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
                    <NavLinkStrap
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="pl-2">
                      <div className="nav-link-icon opacity-7">
                        <FontAwesomeIcon icon={['far', 'question-circle']} />
                      </div>
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
                    <NavLinkStrap
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="pl-2">
                      <div className="nav-link-icon opacity-7">
                        <FontAwesomeIcon icon={['far', 'question-circle']} />
                      </div>
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
                    <NavLinkStrap
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="pl-2">
                      <div className="nav-link-icon opacity-7">
                        <FontAwesomeIcon icon={['far', 'object-group']} />
                      </div>
                      <span>
                        <span>Server Status</span>
                      </span>
                      <div className="ml-auto">
                        <Badge color="primary" className="mr-3">
                          23
                        </Badge>
                        <FontAwesomeIcon
                          icon={['fas', 'chevron-right']}
                          className="font-size-xs opacity-3"
                        />
                      </div>
                    </NavLinkStrap>
                  </NavItem>
                  <NavItem>
                    <NavLinkStrap
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="pl-2">
                      <div className="nav-link-icon opacity-7">
                        <FontAwesomeIcon icon={['far', 'question-circle']} />
                      </div>
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
                    <NavLinkStrap
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="pl-2">
                      <div className="nav-link-icon opacity-7">
                        <FontAwesomeIcon icon={['far', 'question-circle']} />
                      </div>
                      <span>Real Estate</span>
                      <div className="ml-auto">
                        <FontAwesomeIcon
                          icon={['fas', 'chevron-right']}
                          className="font-size-xs opacity-3"
                        />
                      </div>
                    </NavLinkStrap>
                  </NavItem>
                </Nav>
              </PerfectScrollbar>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <Button color="neutral-danger" size="sm">
                <span>View details</span>
              </Button>
              <Button size="sm" color="danger">
                Save now
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
