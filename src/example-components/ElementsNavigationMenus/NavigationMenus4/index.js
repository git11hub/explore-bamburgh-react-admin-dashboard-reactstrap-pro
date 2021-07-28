import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Badge, Nav, NavItem } from 'reactstrap';
import { NavLink as NavLinkStrap } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col md="6">
          <Card className="mb-5 mb-md-0 card-box p-0">
            <Nav pills className="nav-neutral-primary flex-column p-3">
              <NavItem className="nav-item pb-2 text-uppercase font-weight-bold text-primary font-size-sm">
                <span>Navigation Menu</span>
              </NavItem>
              <NavItem>
                <NavLinkStrap
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="active pl-2">
                  <div className="mr-2">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-right']}
                      className="font-size-xs opacity-3"
                    />
                  </div>
                  <span>Analytics</span>
                </NavLinkStrap>
              </NavItem>
              <NavItem>
                <NavLinkStrap
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="pl-2">
                  <div className="mr-2">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-right']}
                      className="font-size-xs opacity-3"
                    />
                  </div>
                  <span>Reports Management</span>
                </NavLinkStrap>
              </NavItem>
              <NavItem>
                <NavLinkStrap
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="pl-2">
                  <div className="mr-2">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-right']}
                      className="font-size-xs opacity-3"
                    />
                  </div>
                  <span>Real Estate</span>
                </NavLinkStrap>
              </NavItem>
              <NavItem>
                <NavLinkStrap
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="pl-2">
                  <div className="mr-2">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-right']}
                      className="font-size-xs opacity-3"
                    />
                  </div>
                  <span>Server Status</span>
                  <Badge color="primary" className="ml-auto">
                    23
                  </Badge>
                </NavLinkStrap>
              </NavItem>
            </Nav>
          </Card>
        </Col>
        <Col md="6">
          <Card className="mb-5 mb-md-0 card-box p-0">
            <Nav pills className="nav-neutral-first flex-column p-3">
              <NavItem className="nav-item pb-2 text-uppercase font-weight-bold text-first font-size-sm">
                <span>Navigation Menu</span>
              </NavItem>
              <NavItem>
                <NavLinkStrap
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="active pl-2">
                  <div className="mr-2">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-right']}
                      className="font-size-xs opacity-3"
                    />
                  </div>
                  <span>Analytics</span>
                </NavLinkStrap>
              </NavItem>
              <NavItem>
                <NavLinkStrap
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="pl-2">
                  <div className="mr-2">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-right']}
                      className="font-size-xs opacity-3"
                    />
                  </div>
                  <span>Reports Management</span>
                </NavLinkStrap>
              </NavItem>
              <NavItem>
                <NavLinkStrap
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="pl-2">
                  <div className="mr-2">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-right']}
                      className="font-size-xs opacity-3"
                    />
                  </div>
                  <span>Real Estate</span>
                </NavLinkStrap>
              </NavItem>
              <NavItem>
                <NavLinkStrap
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="pl-2">
                  <div className="mr-2">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-right']}
                      className="font-size-xs opacity-3"
                    />
                  </div>
                  <span>Server Status</span>
                  <Badge color="first" className="ml-auto">
                    23
                  </Badge>
                </NavLinkStrap>
              </NavItem>
            </Nav>
          </Card>
        </Col>
      </Row>
    </>
  );
}
