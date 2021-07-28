import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Badge, Nav, NavItem, Button } from 'reactstrap';
import { NavLink as NavLinkStrap } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
export default function LivePreviewExample() {
  return (
    <>
      <Card className="card-box p-0">
        <div className="bg-composed-wrapper bg-night-sky">
          <div className="bg-composed-wrapper--image bg-second opacity-1" />
          <div className="bg-composed-wrapper--image bg-composed-img-2" />
          <div className="bg-composed-wrapper--content text-center text-light p-5">
            <h5 className="mb-2 font-size-xl font-weight-bold">
              Bamburgh React Admin Dashboard with Reactstrap PRO
            </h5>
            <p className="mb-0 font-size-lg opacity-8">
              Scrollable boxes example with navigation menus and fixed footer
              areas.
            </p>
          </div>
        </div>
        <div className="shadow-overflow">
          <PerfectScrollbar
            className="scroll-area"
            option={{ wheelPropagation: false }}>
            <Nav pills className="nav-neutral-first nav-lg flex-column p-3">
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
        <div className="card-footer d-flex py-3 justify-content-center">
          <Button color="first">
            <small className="font-weight-bold text-uppercase px-4">
              Generate Reports
            </small>
          </Button>
        </div>
      </Card>
    </>
  );
}
