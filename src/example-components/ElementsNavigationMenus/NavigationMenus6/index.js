import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Badge, Nav, NavItem } from 'reactstrap';
import { NavLink as NavLinkStrap } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col md="6">
          <Card className="mb-5 mb-xl-0 card-box p-0">
            <Nav pills className="nav-second flex-column p-3">
              <NavItem className="nav-item pb-2 text-uppercase font-weight-bold text-second font-size-sm">
                <span>Navigation Menu</span>
              </NavItem>
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
                    <FontAwesomeIcon icon={['far', 'user-circle']} />
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
                    <Badge color="first" className="mr-3">
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
          </Card>
        </Col>
        <Col md="6">
          <Card className="mb-5 mb-xl-0 card-box p-0">
            <Nav pills className="nav-info nav-pills-rounded flex-column p-3">
              <NavItem className="nav-item pb-2 text-uppercase font-weight-bold text-info font-size-sm">
                <span>Navigation Menu</span>
              </NavItem>
              <NavItem>
                <NavLinkStrap
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="active">
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
                <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
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
                <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
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
                <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
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
            </Nav>
          </Card>
        </Col>
      </Row>
    </>
  );
}
