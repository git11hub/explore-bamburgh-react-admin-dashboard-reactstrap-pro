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
            <Nav
              pills
              className="nav-neutral-danger nav-lg nav-alt flex-column p-3">
              <NavItem className="nav-item pb-2 text-uppercase font-weight-bold text-danger font-size-sm">
                <span>Navigation Menu</span>
              </NavItem>
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
          </Card>
        </Col>
        <Col md="6">
          <Card className="mb-5 mb-xl-0 card-box p-0">
            <Nav
              pills
              className="nav-neutral-success nav-lg nav-pills-rounded flex-column p-3">
              <NavItem className="nav-item pb-2 text-uppercase font-weight-bold text-success font-size-sm">
                <span>Navigation Menu</span>
              </NavItem>
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
                    <Badge color="success" className="mr-3">
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
