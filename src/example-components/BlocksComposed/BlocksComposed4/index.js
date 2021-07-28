import React, { useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row,
  Col,
  CardBody,
  Card,
  CardHeader,
  InputGroupText,
  FormGroup,
  Input,
  Badge,
  UncontrolledTooltip,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  Button,
  Progress
} from 'reactstrap';
import { NavLink as NavLinkStrap } from 'reactstrap';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar6 from '../../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';
import hero1 from '../../../assets/images/hero-bg/hero-1.jpg';

export default function LivePreviewExample() {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      <Card className="card-box mb-5">
        <Row className="no-gutters">
          <Col xl="5">
            <div className="hero-wrapper bg-composed-wrapper bg-plum-plate h-100 m-4 m-xl-0 rounded-lg br-xl-right-0">
              <div className="flex-grow-1 w-100 d-flex align-items-center">
                <div
                  className="bg-composed-wrapper--image rounded-lg br-xl-right-0"
                  style={{ backgroundImage: 'url(' + hero1 + ')' }}
                />
                <div className="bg-composed-wrapper--bg bg-second opacity-5 rounded-lg br-xl-right-0" />
                <div className="bg-composed-wrapper--content p-4 p-lg-5">
                  <div className="d-flex align-items-center">
                    <Badge pill color="second" className="px-4 h-auto py-1">
                      New release
                    </Badge>
                    <span
                      className="text-white-50 pl-3"
                      placement="right"
                      id="PlaceholderTooltip4">
                      <FontAwesomeIcon icon={['far', 'question-circle']} />
                    </span>
                    <UncontrolledTooltip
                      placement="right"
                      target="PlaceholderTooltip4">
                      More info placeholder!
                    </UncontrolledTooltip>
                  </div>
                  <div className="text-white mt-3">
                    <h1 className="display-3 my-3 font-weight-bold">
                      Bamburgh React Admin Dashboard with Reactstrap PRO
                    </h1>
                    <p className="font-size-lg mb-0 text-white-50">
                      This admin template is a complete frontend solution for
                      easy-building applications or presentation websites.
                      It&#39;s fully responsive and designed by professional
                      UI&#x2F;UX designers and developers.
                    </p>
                    <div className="divider border-2 my-4 border-light opacity-2 rounded w-25" />
                    <div>
                      <Button className="hover-scale-lg" color="warning">
                        <span className="btn-wrapper--label">
                          Browse gallery
                        </span>
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-footer pb-4">
                <Nav className="nav-transparent">
                  <NavItem>
                    <NavLinkStrap
                      color="link"
                      className="btn-icon d-40 p-0 font-size-lg text-white-50"
                      id="btnTooltipFacebook1000">
                      <FontAwesomeIcon icon={['fab', 'facebook']} />
                    </NavLinkStrap>
                    <UncontrolledTooltip target="btnTooltipFacebook1000">
                      Facebook
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLinkStrap
                      color="link"
                      className="btn-icon d-40 p-0 font-size-lg text-white-50"
                      id="btnTooltipTwitter1000">
                      <FontAwesomeIcon icon={['fab', 'twitter']} />
                    </NavLinkStrap>
                    <UncontrolledTooltip target="btnTooltipTwitter1000">
                      Twitter
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLinkStrap
                      color="link"
                      className="btn-icon d-40 p-0 font-size-lg text-white-50"
                      id="btnTooltipGoogle1000">
                      <FontAwesomeIcon icon={['fab', 'google']} />
                    </NavLinkStrap>
                    <UncontrolledTooltip target="btnTooltipGoogle1000">
                      Google
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLinkStrap
                      color="link"
                      className="btn-icon d-40 p-0 font-size-lg text-white-50"
                      id="btnTooltipInstagram1000">
                      <FontAwesomeIcon icon={['fab', 'instagram']} />
                    </NavLinkStrap>
                    <UncontrolledTooltip target="btnTooltipInstagram1000">
                      Instagram
                    </UncontrolledTooltip>
                  </NavItem>
                </Nav>
              </div>
            </div>
          </Col>
          <Col xl="7">
            <div className="mt-4 mt-xl-0 tabs-animated tabs-animated-shadow tabs-bordered tab-container">
              <Nav tabs justified>
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === '1' })}
                    onClick={() => {
                      toggle('1');
                    }}>
                    <span>Overview</span>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === '2' })}
                    onClick={() => {
                      toggle('2');
                    }}>
                    <span>Sign in</span>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === '3' })}
                    onClick={() => {
                      toggle('3');
                    }}>
                    <span>Recent activity</span>
                  </NavLinkStrap>
                </NavItem>
              </Nav>
            </div>
            <TabContent className="p-4 pt-0" activeTab={activeTab}>
              <TabPane tabId="1">
                <div className="px-1 pt-3 pb-2">
                  <Row>
                    <Col md="4">
                      <Card className="card-box text-black-50 mb-5 p-3">
                        <div className="display-3 text-black font-weight-bold">
                          31
                        </div>
                        <div className="divider mt-2 mb-3 border-2 w-25 bg-first rounded border-first" />
                        <div className="font-weight-bold font-size-sm text-uppercase">
                          Implemented
                          <br />
                          bugfixes
                        </div>
                      </Card>
                    </Col>
                    <Col md="4">
                      <Card className="card-box text-black-50 mb-5 p-3">
                        <div className="display-3 text-black font-weight-bold">
                          68
                        </div>
                        <div className="divider mt-2 mb-3 border-2 w-25 bg-success rounded border-success" />
                        <div className="font-weight-bold font-size-sm text-uppercase">
                          Unresolved
                          <br />
                          tickets
                        </div>
                      </Card>
                    </Col>
                    <Col md="4">
                      <Card className="card-box text-black-50 mb-5 p-3">
                        <div className="display-3 text-black font-weight-bold">
                          57
                        </div>
                        <div className="divider mt-2 mb-3 border-2 w-25 bg-warning rounded border-warning" />
                        <div className="font-weight-bold font-size-sm text-uppercase">
                          Support
                          <br />
                          requests
                        </div>
                      </Card>
                    </Col>
                  </Row>
                  <Card className="card-box mb-5">
                    <CardBody>
                      <div className="text-left mb-3">
                        <div className="mt-1">
                          <FontAwesomeIcon
                            icon={['fas', 'lemon']}
                            className="font-size-xxl text-danger"
                          />
                        </div>
                        <div className="mt-3 line-height-sm">
                          <b className="font-size-lg text-black">3,568</b>
                          <span className="text-black-50 pl-1">clicks</span>
                        </div>
                      </div>
                      <Progress multi>
                        <Progress bar value="5" max={55}>
                          5
                        </Progress>
                        <Progress bar color="success" value="15" max={55}>
                          15
                        </Progress>
                        <Progress bar color="warning" value="10" max={55}>
                          10
                        </Progress>
                        <Progress bar color="danger" value="10" max={55}>
                          10
                        </Progress>
                      </Progress>
                    </CardBody>
                  </Card>
                </div>
                <div className="text-center">
                  <Button outline color="primary">
                    Create new report
                  </Button>
                </div>
              </TabPane>
              <TabPane tabId="2">
                <Card className="m-0 shadow-none border-0 my-4 mx-1">
                  <CardHeader className="d-block p-3 pt-0 rounded bg-light">
                    <div className="text-muted text-center mb-3">
                      <small>Sign in with</small>
                    </div>
                    <div className="text-center">
                      <Button color="facebook" className="mr-2">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['fab', 'facebook']} />
                        </span>
                        <span className="btn-wrapper--label">Facebook</span>
                      </Button>
                      <Button color="twitter" className="ml-2">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['fab', 'twitter']} />
                        </span>
                        <span className="btn-wrapper--label">Twitter</span>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <div className="text-center text-muted mb-3">
                      <small>Or sign in with credentials</small>
                    </div>

                    <div className="form-group mb-3">
                      <div className="input-group input-group-alternative">
                        <div className="input-group-prepend">
                          <InputGroupText>
                            <FontAwesomeIcon icon={['far', 'envelope']} />
                          </InputGroupText>
                        </div>
                        <Input placeholder="Email" type="email" />
                      </div>
                    </div>
                    <FormGroup>
                      <div className="input-group input-group-alternative">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <FontAwesomeIcon icon={['fas', 'unlock-alt']} />
                          </span>
                        </div>
                        <Input placeholder="Password" type="password" />
                      </div>
                    </FormGroup>
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id=" customCheckLogin"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor=" customCheckLogin">
                        <span>Remember me</span>
                      </label>
                    </div>
                    <div className="text-center">
                      <Button color="second" className="my-2">
                        Sign in
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </TabPane>
              <TabPane tabId="3">
                <div className="pt-4 px-1">
                  <Row>
                    <Col md="6">
                      <Card className="card-box mb-5">
                        <div className="card-indicator bg-first" />
                        <CardBody className="px-4 py-3">
                          <div className="pb-3 d-flex justify-content-between">
                            <a href="#/" onClick={(e) => e.preventDefault()}>
                              Presentation site design
                            </a>
                          </div>
                          <div className="d-flex align-items-center justify-content-start">
                            <Badge color="first" className="px-3">
                              On hold
                            </Badge>
                            <div className="font-size-sm text-danger px-2">
                              <FontAwesomeIcon
                                icon={['far', 'clock']}
                                className="mr-1"
                              />
                              14:22
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col md="6">
                      <Card className="card-box mb-5">
                        <div className="card-indicator bg-success" />
                        <CardBody className="px-4 py-3">
                          <div className="pb-3 d-flex justify-content-between">
                            <a href="#/" onClick={(e) => e.preventDefault()}>
                              Create UI mockups
                            </a>
                          </div>
                          <div className="d-flex align-items-center justify-content-start">
                            <Badge color="success" className="px-3">
                              Fixed
                            </Badge>
                            <div className="font-size-sm text-dark px-2">
                              <FontAwesomeIcon
                                icon={['far', 'clock']}
                                className="mr-1"
                              />
                              09:41
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </div>
                <div className="timeline-list">
                  <div className="timeline-item timeline-item-icon">
                    <div className="timeline-item--content">
                      <div className="timeline-item--icon-wrapper bg-danger text-white">
                        <FontAwesomeIcon icon={['far', 'gem']} />
                      </div>
                      <h4 className="timeline-item--label mb-2 font-weight-bold">
                        1998
                      </h4>
                      <p>
                        Bill Clinton's presidential scandal makes it online.
                      </p>
                    </div>
                  </div>
                  <div className="timeline-item mb-3">
                    <div className="timeline-item--content">
                      <div className="timeline-item--icon" />
                      <h4 className="timeline-item--label mb-2 font-weight-bold">
                        Java exam day
                      </h4>
                      <p>
                        Bill Clinton's presidential scandal makes it online.
                      </p>
                      <div className="avatar-wrapper-overlap mt-2 mb-1">
                        <div className="avatar-icon-wrapper avatar-icon-sm">
                          <div className="avatar-icon">
                            <img alt="..." src={avatar1} />
                          </div>
                        </div>
                        <div className="avatar-icon-wrapper avatar-icon-sm">
                          <div className="avatar-icon">
                            <img alt="..." src={avatar7} />
                          </div>
                        </div>
                        <div className="avatar-icon-wrapper avatar-icon-sm">
                          <div className="avatar-icon">
                            <img alt="..." src={avatar1} />
                          </div>
                        </div>
                        <div className="avatar-icon-wrapper avatar-icon-sm">
                          <div className="avatar-icon">
                            <img alt="..." src={avatar2} />
                          </div>
                        </div>
                        <div className="avatar-icon-wrapper avatar-icon-sm">
                          <div className="avatar-icon">
                            <img alt="..." src={avatar6} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-item--content">
                      <div className="timeline-item--icon" />
                      <h4 className="timeline-item--label mb-2 font-weight-bold">
                        Business investor meeting
                        <Badge color="neutral-info" className="text-info ml-2">
                          New
                        </Badge>
                      </h4>
                      <p>
                        Mosaic, the first graphical browser, is introduced to
                        the average consumer.
                      </p>
                      <div className="mt-2">
                        <Button size="sm" color="primary">
                          Submit Report
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </Card>
    </>
  );
}
