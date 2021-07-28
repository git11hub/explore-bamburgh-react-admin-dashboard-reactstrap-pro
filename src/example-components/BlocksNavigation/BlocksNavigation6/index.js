import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row,
  Col,
  Card,
  Badge,
  UncontrolledTooltip,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import { NavLink as NavLinkStrap } from 'reactstrap';

import avatar4 from '../../../assets/images/avatars/avatar4.jpg';
import avatar5 from '../../../assets/images/avatars/avatar5.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col md="6" lg="12" xl="6">
          <Card className="shadow-xxl pt-4 mb-5">
            <div className="card-tr-actions">
              <Button
                size="sm"
                color="neutral-warning"
                id="SendMessageTooltip2945">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['far', 'envelope']} />
                </span>
              </Button>
              <UncontrolledTooltip target="SendMessageTooltip2945">
                Send Message
              </UncontrolledTooltip>
            </div>
            <div className="text-center">
              <div className="avatar-icon-wrapper rounded-circle m-0">
                <div className="d-block p-0 avatar-icon-wrapper m-0 d-90">
                  <div className="rounded-circle overflow-hidden">
                    <img alt="..." className="img-fluid" src={avatar4} />
                  </div>
                </div>
              </div>
              <h3 className="font-weight-bold mt-3">Leopold Magana</h3>
              <Badge
                color="neutral-warning"
                className="mt-1 mb-3 text-warning font-size-xs px-4 py-1 h-auto">
                Idle for 5 minutes
              </Badge>
              <div className="mt-3 rounded mx-4 bg-night-sky p-3">
                <Button
                  color="discord"
                  className="btn-pill d-50 m-2 p-0"
                  id="btnDiscordTooltip33567">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon
                      icon={['fab', 'discord']}
                      className="font-size-lg"
                    />
                  </span>
                </Button>
                <UncontrolledTooltip target="btnDiscordTooltip33567">
                  Discord
                </UncontrolledTooltip>
                <Button
                  color="instagram"
                  className="btn-pill d-50 m-2 p-0"
                  id="btnInstagramTooltip33567">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon
                      icon={['fab', 'instagram']}
                      className="font-size-lg"
                    />
                  </span>
                </Button>
                <UncontrolledTooltip target="btnInstagramTooltip33567">
                  Instagram
                </UncontrolledTooltip>
                <Button
                  color="google"
                  className="btn-pill d-50 m-2 p-0"
                  id="btnGoogleTooltip33567">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon
                      icon={['fab', 'google']}
                      className="font-size-lg"
                    />
                  </span>
                </Button>
                <UncontrolledTooltip target="btnGoogleTooltip33567">
                  Google
                </UncontrolledTooltip>
              </div>
              <Nav className="nav-neutral-first nav-lg flex-column p-4">
                <NavItem>
                  <NavLinkStrap
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="rounded font-weight-bold">
                    <div className="nav-link-icon">
                      <FontAwesomeIcon icon={['far', 'chart-bar']} />
                    </div>
                    <span>Services</span>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="rounded font-weight-bold active">
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
                    className="rounded font-weight-bold disabled">
                    <div className="nav-link-icon">
                      <FontAwesomeIcon icon={['far', 'user-circle']} />
                    </div>
                    <span>Reports</span>
                  </NavLinkStrap>
                </NavItem>
                <li className="dropdown-divider" />
                <NavItem>
                  <NavLinkStrap
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="rounded font-weight-bold">
                    <div className="nav-link-icon">
                      <FontAwesomeIcon icon={['far', 'object-group']} />
                    </div>
                    <span>Components</span>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="rounded font-weight-bold">
                    <div className="nav-link-icon">
                      <FontAwesomeIcon icon={['far', 'chart-bar']} />
                    </div>
                    <span>Services</span>
                  </NavLinkStrap>
                </NavItem>
              </Nav>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="12" xl="6">
          <Card className="shadow-xxl pt-4 mb-5">
            <div className="card-tr-actions">
              <Button size="sm" color="danger" id="SendMessageTooltip223">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['far', 'envelope']} />
                </span>
              </Button>
              <UncontrolledTooltip target="SendMessageTooltip223">
                Send Message
              </UncontrolledTooltip>
            </div>
            <div className="text-center">
              <div className="avatar-icon-wrapper rounded-circle m-0">
                <div className="d-block p-0 avatar-icon-wrapper m-0 d-90">
                  <div className="rounded-circle overflow-hidden">
                    <img alt="..." className="img-fluid" src={avatar5} />
                  </div>
                </div>
              </div>
              <h3 className="font-weight-bold mt-3">Boyd Hardin</h3>
              <Badge
                color="neutral-danger"
                className="mt-1 mb-4 text-danger font-size-xs px-4 py-1 h-auto">
                Offline
              </Badge>
              <p className="mb-0 font-size-lg text-black-50">
                Browse through the live previews to see just how powerful this
                admin template really is!
              </p>
              <div className="py-3">
                <Button
                  color="github"
                  className="btn-pill d-50 m-2 p-0"
                  id="btnGithubTooltip43">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon
                      icon={['fab', 'github']}
                      className="font-size-lg"
                    />
                  </span>
                </Button>
                <UncontrolledTooltip target="btnGithubTooltip43">
                  Github
                </UncontrolledTooltip>
                <Button
                  color="instagram"
                  className="btn-pill d-50 m-2 p-0"
                  id="btnInstagramTooltip4386">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon
                      icon={['fab', 'instagram']}
                      className="font-size-lg"
                    />
                  </span>
                </Button>
                <UncontrolledTooltip target="btnInstagramTooltip4386">
                  Instagram
                </UncontrolledTooltip>
                <Button
                  color="google"
                  className="btn-pill d-50 m-2 p-0"
                  id="btnGoogleTooltip4386">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon
                      icon={['fab', 'google']}
                      className="font-size-lg"
                    />
                  </span>
                </Button>
                <UncontrolledTooltip target="btnGoogleTooltip4386">
                  Google
                </UncontrolledTooltip>
              </div>
              <div className="divider" />
              <Nav
                pills
                className="nav-pills-rounded nav-lg font-weight-bold flex-column py-3 px-3">
                <NavItem>
                  <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                    <div className="nav-link-icon opacity-6 mr-2">
                      <FontAwesomeIcon
                        icon={['far', 'keyboard']}
                        className="mx-auto"
                      />
                    </div>
                    <span>My Account</span>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    active>
                    <div className="nav-link-icon opacity-6 mr-2">
                      <FontAwesomeIcon
                        icon={['far', 'object-group']}
                        className="mx-auto"
                      />
                    </div>
                    <span>Profile settings</span>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                    <div className="nav-link-icon opacity-6 mr-2">
                      <FontAwesomeIcon
                        icon={['far', 'user-circle']}
                        className="mx-auto"
                      />
                    </div>
                    <span>Active tasks</span>
                    <Badge className="ml-auto" color="success">
                      New
                    </Badge>
                  </NavLinkStrap>
                </NavItem>
                <NavItem className="px-4 text-left font-size-sm text-uppercase mt-4 mb-2 font-weight-bold text-black nav-item--header">
                  <span>Other items</span>
                </NavItem>
                <NavItem>
                  <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                    <div className="nav-link-icon opacity-6 mr-2">
                      <FontAwesomeIcon
                        icon={['far', 'building']}
                        className="mx-auto"
                      />
                    </div>
                    <span>Customers</span>
                  </NavLinkStrap>
                </NavItem>
                <li className="dropdown-divider" />
                <NavItem>
                  <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                    <div className="nav-link-icon opacity-6 mr-2">
                      <FontAwesomeIcon
                        icon={['far', 'eye']}
                        className="mx-auto"
                      />
                    </div>
                    <span>Statistics</span>
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
