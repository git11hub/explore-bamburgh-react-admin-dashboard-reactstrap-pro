import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Badge, Nav, NavItem, Button } from 'reactstrap';
import { NavLink as NavLinkStrap } from 'reactstrap';

import logo1 from '../../../assets/images/stock-logos/coinbase.svg';
import logo2 from '../../../assets/images/stock-logos/netflix.svg';
import logo3 from '../../../assets/images/stock-logos/slack.svg';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col md="4" lg="12" xl="4">
          <Card className="mb-5">
            <div className="text-center pt-4 pb-3">
              <img
                alt="..."
                className="img-fluid mt-2 mx-auto"
                style={{ height: '40px' }}
                src={logo1}
              />

              <div className="pt-3 mx-auto font-size-xl">
                <Button
                  color="link"
                  className="text-warning d-20 btn-icon p-0 border-0 hover-scale-sm opacity-6"
                  href="#/"
                  onClick={(e) => e.preventDefault()}>
                  <FontAwesomeIcon icon={['fas', 'star']} />
                </Button>
                <Button
                  color="link"
                  className="text-warning d-20 btn-icon p-0 border-0 hover-scale-sm opacity-6"
                  href="#/"
                  onClick={(e) => e.preventDefault()}>
                  <FontAwesomeIcon icon={['fas', 'star']} />
                </Button>
                <Button
                  color="link"
                  className="text-warning d-20 btn-icon p-0 border-0 hover-scale-sm opacity-6"
                  href="#/"
                  onClick={(e) => e.preventDefault()}>
                  <FontAwesomeIcon icon={['fas', 'star']} />
                </Button>
                <Button
                  color="link"
                  className="text-warning d-20 btn-icon p-0 border-0 hover-scale-sm opacity-6"
                  href="#/"
                  onClick={(e) => e.preventDefault()}>
                  <FontAwesomeIcon icon={['fas', 'star']} />
                </Button>
                <Button
                  color="link"
                  className="text-muted d-20 btn-icon p-0 border-0 hover-scale-sm opacity-6"
                  href="#/"
                  onClick={(e) => e.preventDefault()}>
                  <FontAwesomeIcon icon={['fas', 'star']} />
                </Button>
              </div>

              <p className="font-size-lg text-dark px-3 my-4">
                Browse through the live previews to see just how powerful this
                admin template really is!
              </p>

              <Nav
                pills
                className="nav-neutral-second nav-pills-rounded nav-lg flex-column px-4">
                <NavItem>
                  <NavLinkStrap
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="px-4">
                    <div className="nav-link-icon">
                      <FontAwesomeIcon icon={['far', 'building']} />
                    </div>
                    <span>Dashboard</span>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="px-4 active">
                    <div className="nav-link-icon">
                      <FontAwesomeIcon icon={['far', 'question-circle']} />
                    </div>
                    <span>Layouts</span>
                    <Badge color="warning" className="ml-auto">
                      512
                    </Badge>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="px-4 disabled">
                    <div className="nav-link-icon">
                      <FontAwesomeIcon icon={['far', 'user-circle']} />
                    </div>
                    <span>Reports</span>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="px-4">
                    <div className="nav-link-icon">
                      <FontAwesomeIcon icon={['far', 'object-group']} />
                    </div>
                    <span>Components</span>
                  </NavLinkStrap>
                </NavItem>
              </Nav>
            </div>
          </Card>
        </Col>
        <Col md="4" lg="12" xl="4">
          <Card className="mb-5">
            <div className="text-center pt-4 pb-3">
              <img
                alt="..."
                className="img-fluid mt-2 mx-auto"
                style={{ height: '40px' }}
                src={logo2}
              />

              <div className="pt-3 mx-auto font-size-xl">
                <Button
                  color="link"
                  className="text-warning d-20 btn-icon p-0 border-0 hover-scale-sm opacity-6"
                  href="#/"
                  onClick={(e) => e.preventDefault()}>
                  <FontAwesomeIcon icon={['fas', 'star']} />
                </Button>
                <Button
                  color="link"
                  className="text-warning d-20 btn-icon p-0 border-0 hover-scale-sm opacity-6"
                  href="#/"
                  onClick={(e) => e.preventDefault()}>
                  <FontAwesomeIcon icon={['fas', 'star']} />
                </Button>
                <Button
                  color="link"
                  className="text-warning d-20 btn-icon p-0 border-0 hover-scale-sm opacity-6"
                  href="#/"
                  onClick={(e) => e.preventDefault()}>
                  <FontAwesomeIcon icon={['fas', 'star']} />
                </Button>
                <Button
                  color="link"
                  className="text-warning d-20 btn-icon p-0 border-0 hover-scale-sm opacity-6"
                  href="#/"
                  onClick={(e) => e.preventDefault()}>
                  <FontAwesomeIcon icon={['fas', 'star']} />
                </Button>
                <Button
                  color="link"
                  className="text-muted d-20 btn-icon p-0 border-0 hover-scale-sm opacity-6"
                  href="#/"
                  onClick={(e) => e.preventDefault()}>
                  <FontAwesomeIcon icon={['fas', 'star']} />
                </Button>
              </div>

              <p className="font-size-lg text-dark px-3 my-4">
                Browse through the live previews to see just how powerful this
                admin template really is!
              </p>

              <Nav
                pills
                className="nav-neutral-first nav-lg nav-alt flex-column pr-3">
                <NavItem>
                  <NavLinkStrap
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="br-tl br-bl pl-4 rounded-pill active">
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
                    className="br-tl br-bl pl-4 rounded-pill">
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
                    className="br-tl br-bl pl-4 rounded-pill">
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
                    className="br-tl br-bl pl-4 rounded-pill">
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
          </Card>
        </Col>
        <Col md="4" lg="12" xl="4">
          <Card className="mb-5">
            <div className="text-center pt-4 pb-3">
              <img
                alt="..."
                className="img-fluid mt-2 mx-auto"
                style={{ height: '40px' }}
                src={logo3}
              />

              <div className="pt-3 mx-auto font-size-xl">
                <Button
                  color="link"
                  className="text-warning d-20 btn-icon p-0 border-0 hover-scale-sm opacity-6"
                  href="#/"
                  onClick={(e) => e.preventDefault()}>
                  <FontAwesomeIcon icon={['fas', 'star']} />
                </Button>
                <Button
                  color="link"
                  className="text-warning d-20 btn-icon p-0 border-0 hover-scale-sm opacity-6"
                  href="#/"
                  onClick={(e) => e.preventDefault()}>
                  <FontAwesomeIcon icon={['fas', 'star']} />
                </Button>
                <Button
                  color="link"
                  className="text-warning d-20 btn-icon p-0 border-0 hover-scale-sm opacity-6"
                  href="#/"
                  onClick={(e) => e.preventDefault()}>
                  <FontAwesomeIcon icon={['fas', 'star']} />
                </Button>
                <Button
                  color="link"
                  className="text-warning d-20 btn-icon p-0 border-0 hover-scale-sm opacity-6"
                  href="#/"
                  onClick={(e) => e.preventDefault()}>
                  <FontAwesomeIcon icon={['fas', 'star']} />
                </Button>
                <Button
                  color="link"
                  className="text-muted d-20 btn-icon p-0 border-0 hover-scale-sm opacity-6"
                  href="#/"
                  onClick={(e) => e.preventDefault()}>
                  <FontAwesomeIcon icon={['fas', 'star']} />
                </Button>
              </div>

              <p className="font-size-lg text-dark px-3 my-4">
                Browse through the live previews to see just how powerful this
                admin template really is!
              </p>

              <Nav
                pills
                className="nav-neutral-danger nav-pills nav-lg flex-column px-4">
                <NavItem>
                  <NavLinkStrap
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="px-4">
                    <div className="nav-link-icon">
                      <FontAwesomeIcon icon={['far', 'building']} />
                    </div>
                    <span>Dashboard</span>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="px-4 active">
                    <div className="nav-link-icon">
                      <FontAwesomeIcon icon={['far', 'question-circle']} />
                    </div>
                    <span>Layouts</span>
                    <Badge color="warning" className="ml-auto">
                      512
                    </Badge>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="px-4 disabled">
                    <div className="nav-link-icon">
                      <FontAwesomeIcon icon={['far', 'user-circle']} />
                    </div>
                    <span>Reports</span>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="px-4">
                    <div className="nav-link-icon">
                      <FontAwesomeIcon icon={['far', 'object-group']} />
                    </div>
                    <span>Components</span>
                  </NavLinkStrap>
                </NavItem>
              </Nav>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
