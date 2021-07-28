import React, { useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row,
  Col,
  CardBody,
  Card,
  CardHeader,
  Input,
  Badge,
  UncontrolledTooltip,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import { NavLink as NavLinkStrap } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../../assets/images/avatars/avatar4.jpg';
import avatar5 from '../../../assets/images/avatars/avatar5.jpg';
import avatar6 from '../../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

import people2 from '../../../assets/images/stock-photos/people-3.jpg';
import people1 from '../../../assets/images/stock-photos/people-2.jpg';

export default function LivePreviewExample() {
  const [isSidebarMenuOpen, setIsSidebarMenuOpen] = useState(false);
  const [isSidebarMenuOpen2, setIsSidebarMenuOpen2] = useState(false);

  const toggleSidebarMenu = () => setIsSidebarMenuOpen(!isSidebarMenuOpen);
  const toggleSidebarMenu2 = () => setIsSidebarMenuOpen2(!isSidebarMenuOpen2);

  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const [inputBg, setInputBg] = useState(false);
  const toggleInputBg = () => setInputBg(!inputBg);

  return (
    <>
      <div className="app-inner-content-layout app-inner-content-layout-fixed">
        <div className="btn-md-pane d-lg-none px-4 order-0">
          <Button
            onClick={toggleSidebarMenu}
            size="sm"
            color="primary"
            className="p-0 btn-icon d-40">
            <FontAwesomeIcon icon={['fas', 'ellipsis-v']} />
          </Button>
          <Button
            onClick={toggleSidebarMenu2}
            size="sm"
            color="primary"
            className="p-0 btn-icon d-40">
            <FontAwesomeIcon icon={['fas', 'bars']} />
          </Button>
        </div>
        <div
          className={clsx(
            'app-inner-content-layout--sidebar bg-white app-inner-content-layout--sidebar__lg order-1',
            { 'layout-sidebar-open': isSidebarMenuOpen }
          )}>
          <PerfectScrollbar>
            <div className="px-4 pt-4">
              <Nav pills className="nav-neutral-primary flex-column">
                <NavItem className="d-flex pt-1 pb-3 justify-content-between">
                  <div className="text-uppercase font-size-sm text-primary font-weight-bold">
                    Channels tags
                  </div>
                  <div className="ml-auto font-size-xs">
                    <a
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      id="AddChannelTooltip1">
                      <FontAwesomeIcon icon={['fas', 'plus-circle']} />
                    </a>
                    <UncontrolledTooltip target="AddChannelTooltip1">
                      Add new channel
                    </UncontrolledTooltip>
                  </div>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    active>
                    # development
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                    # angular_themes
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                    <span># react_templates</span>
                    <Badge color="first" className="ml-auto">
                      23
                    </Badge>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                    # vue_dashboards
                  </NavLinkStrap>
                </NavItem>
              </Nav>
              <div className="divider my-3" />
              <Nav pills className="nav-transparent flex-column">
                <NavItem className="pt-1 pb-3">
                  <div className="text-uppercase font-size-sm text-primary font-weight-bold">
                    Members list
                  </div>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="px-0 text-black">
                    <div className="align-box-row w-100">
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <Badge color="success" className="badge-circle">
                          Online
                        </Badge>
                        <div className="avatar-icon rounded-circle">
                          <img alt="..." src={avatar1} />
                        </div>
                      </div>
                      <div className="pl-2">
                        <span className="d-block font-size-sm font-weight-bold">
                          Adella Galen
                          <span className="d-block font-weight-normal font-size-xs text-black-50">
                            (Galen@example.com)
                          </span>
                        </span>
                      </div>
                      <div className="ml-auto">
                        <FontAwesomeIcon
                          icon={['fas', 'angle-right']}
                          className="text-right d-block font-size-sm"
                        />
                      </div>
                    </div>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="px-0 text-black">
                    <div className="align-box-row w-100">
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <Badge color="danger" className="badge-circle">
                          Offline
                        </Badge>
                        <div className="avatar-icon rounded-circle">
                          <img alt="..." src={avatar2} />
                        </div>
                      </div>
                      <div className="pl-2">
                        <span className="d-block font-size-sm font-weight-bold">
                          Mandy Erle
                          <span className="d-block font-weight-normal font-size-xs text-black-50">
                            (Mandyrle@gma.com)
                          </span>
                        </span>
                      </div>
                      <div className="ml-auto">
                        <FontAwesomeIcon
                          icon={['fas', 'angle-right']}
                          className="text-right d-block font-size-sm"
                        />
                      </div>
                    </div>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="px-0 text-black">
                    <div className="align-box-row w-100">
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <Badge color="success" className="badge-circle">
                          Online
                        </Badge>
                        <div className="avatar-icon rounded-circle">
                          <img alt="..." src={avatar3} />
                        </div>
                      </div>
                      <div className="pl-2">
                        <span className="d-block font-size-sm font-weight-bold">
                          Oliver Battle
                          <span className="d-block font-weight-normal font-size-xs text-black-50">
                            (Galen@example.com)
                          </span>
                        </span>
                      </div>
                      <div className="ml-auto">
                        <FontAwesomeIcon
                          icon={['fas', 'angle-right']}
                          className="text-right d-block font-size-sm"
                        />
                      </div>
                    </div>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="px-0 text-black">
                    <div className="align-box-row w-100">
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <Badge color="warning" className="badge-circle">
                          Idle
                        </Badge>
                        <div className="avatar-icon rounded-circle">
                          <img alt="..." src={avatar4} />
                        </div>
                      </div>
                      <div className="pl-2">
                        <span className="d-block font-size-sm font-weight-bold">
                          Napoleon Stacey
                          <span className="d-block font-weight-normal font-size-xs text-black-50">
                            (Napoleon@test.com)
                          </span>
                        </span>
                      </div>
                      <div className="ml-auto">
                        <FontAwesomeIcon
                          icon={['fas', 'angle-right']}
                          className="text-right d-block font-size-sm"
                        />
                      </div>
                    </div>
                  </NavLinkStrap>
                </NavItem>
              </Nav>
              <div className="divider my-3" />
              <Nav pills className="nav-neutral-primary flex-column">
                <li className="nav-item pt-1 pb-3">
                  <div className="text-uppercase font-size-sm text-primary font-weight-bold">
                    Statistics
                  </div>
                </li>
              </Nav>
              <Row className="font-size-xs">
                <Col lg="6">
                  <Card className="shadow-success-sm card-box text-center mb-4 p-3">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'user']}
                        className="font-size-xxl text-success"
                      />
                    </div>
                    <div className="mt-2 line-height-sm">
                      <b className="font-size-lg">345</b>
                      <span className="text-black-50 d-block">friends</span>
                    </div>
                  </Card>
                </Col>
                <Col lg="6">
                  <Card className="shadow-danger-sm card-box text-center mb-4 p-3">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'chart-bar']}
                        className="font-size-xxl text-danger"
                      />
                    </div>
                    <div className="mt-2 line-height-sm">
                      <b className="font-size-lg">2,693</b>
                      <span className="text-black-50 d-block">messages</span>
                    </div>
                  </Card>
                </Col>
              </Row>
              <Card className="shadow-first-sm card-box mb-4">
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
              <Card className="shadow-success-sm card-box mb-4">
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
            </div>
          </PerfectScrollbar>
        </div>
        <div className="app-inner-content-layout--main order-3 order-lg-2 card-box bg-secondary">
          <PerfectScrollbar>
            <CardHeader className="rounded-0 bg-white p-4 border-bottom">
              <div className="card-header--title">
                <small>Messenger</small>
                <b>Talking to Kate</b>
              </div>
              <div className="card-header--actions">
                <Button
                  size="sm"
                  color="first"
                  className="btn-pill d-40 p-0"
                  id="SendMessageTooltip30">
                  <FontAwesomeIcon icon={['fas', 'plus']} />
                </Button>
                <UncontrolledTooltip target="SendMessageTooltip30">
                  Add in conversation
                </UncontrolledTooltip>
              </div>
            </CardHeader>
            <div className="chat-wrapper p-3">
              <div className="chat-item p-2 mb-2">
                <div className="align-box-row">
                  <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                    <div className="avatar-icon rounded-circle shadow-none">
                      <img alt="..." src={avatar7} />
                    </div>
                  </div>
                  <div>
                    <div className="chat-box bg-gray-400 text-second">
                      <p>Hello, John.</p>
                      <p>This is Kenny. How are you?</p>
                    </div>
                    <small className="mt-2 d-block text-black-50">
                      <FontAwesomeIcon
                        icon={['far', 'clock']}
                        className="mr-1 opacity-5"
                      />
                      11:01 AM | Yesterday
                    </small>
                  </div>
                </div>
              </div>
              <div className="chat-item chat-item-reverse p-2 mb-2">
                <div className="align-box-row flex-row-reverse">
                  <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                    <div className="avatar-icon rounded-circle shadow-none">
                      <img alt="..." src={avatar3} />
                    </div>
                  </div>
                  <div>
                    <div className="chat-box bg-gray-400 text-second">
                      <p>Hey, Kate.</p>
                      <p>I'm attaching the pictures you requested below:</p>
                      <Card className="mt-3 mb-2 pt-2 pb-2 text-center">
                        <div>
                          <a href="#/" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img-fluid rounded m-1 shadow-sm"
                              src={people1}
                              width="54"
                            />
                          </a>
                          <a href="#/" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img-fluid rounded m-1 shadow-sm"
                              src={people2}
                              width="54"
                            />
                          </a>
                        </div>
                      </Card>
                    </div>
                    <small className="mt-2 d-block text-black-50">
                      <FontAwesomeIcon
                        icon={['far', 'clock']}
                        className="mr-1 opacity-5"
                      />
                      11:01 AM | Yesterday
                    </small>
                  </div>
                </div>
              </div>
              <div className="chat-item p-2 mb-2">
                <div className="align-box-row">
                  <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                    <div className="avatar-icon rounded-circle shadow-none">
                      <img alt="..." src={avatar7} />
                    </div>
                  </div>
                  <div>
                    <div className="chat-box bg-gray-400 text-second">
                      <p>Thanks.</p>
                      <p>Really appreciate it!</p>
                    </div>
                    <small className="mt-2 d-block text-black-50">
                      <FontAwesomeIcon
                        icon={['far', 'clock']}
                        className="mr-1 opacity-5"
                      />
                      11:01 AM | Yesterday
                    </small>
                  </div>
                </div>
              </div>
              <div className="chat-item p-2 mb-2">
                <div className="align-box-row">
                  <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                    <div className="avatar-icon rounded-circle shadow-none">
                      <img alt="..." src={avatar7} />
                    </div>
                  </div>
                  <div>
                    <div className="chat-box bg-gray-400 text-second">
                      <p>Bye for now, talk to you later.</p>
                    </div>
                    <small className="mt-2 d-block text-black-50">
                      <FontAwesomeIcon
                        icon={['far', 'clock']}
                        className="mr-1 opacity-5"
                      />
                      11:01 AM | Yesterday
                    </small>
                  </div>
                </div>
              </div>
              <div className="chat-item chat-item-reverse p-2 mb-2">
                <div className="align-box-row flex-row-reverse">
                  <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                    <div className="avatar-icon rounded-circle shadow-none">
                      <img alt="..." src={avatar3} />
                    </div>
                  </div>
                  <div>
                    <div className="chat-box bg-gray-400 text-second">
                      <p>Almost forgot about your tasks.</p>
                      <p>
                        <b>Check the links below:</b>
                      </p>
                      <Card className="bg-second p-1 mt-3 mb-2">
                        <div className="text-center py-2">
                          <Button
                            color="link"
                            className="p-0 btn-icon bg-ripe-malin d-inline-block text-center text-white font-size-xl d-40 rounded-circle border-0 m-2"
                            id="MenuExampleTooltip11164">
                            <FontAwesomeIcon
                              icon={['far', 'gem']}
                              className="font-size-sm"
                            />
                          </Button>
                          <Button
                            color="link"
                            className="p-0 btn-icon bg-grow-early d-inline-block text-center text-white font-size-xl d-40 rounded-circle border-0 m-2"
                            id="MenuExampleTooltip11864">
                            <FontAwesomeIcon
                              icon={['far', 'building']}
                              className="font-size-sm"
                            />
                          </Button>
                          <Button
                            color="link"
                            className="p-0 btn-icon bg-arielle-smile d-inline-block text-center text-white font-size-xl d-40 rounded-circle border-0 m-2"
                            id="MenuExampleTooltip12564">
                            <FontAwesomeIcon
                              icon={['far', 'chart-bar']}
                              className="font-size-sm"
                            />
                          </Button>
                          <UncontrolledTooltip target="MenuExampleTooltip11164">
                            Menu example
                          </UncontrolledTooltip>
                          <UncontrolledTooltip target="MenuExampleTooltip11864">
                            Menu Example
                          </UncontrolledTooltip>
                          <UncontrolledTooltip target="MenuExampleTooltip12564">
                            Menu Example
                          </UncontrolledTooltip>
                        </div>
                      </Card>
                    </div>
                    <small className="mt-2 d-block text-black-50">
                      <FontAwesomeIcon
                        icon={['far', 'clock']}
                        className="mr-1 opacity-5"
                      />
                      11:03 AM | Yesterday
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white">
              <div className="card-footer p-0">
                <div className="d-block d-md-flex text-center text-md-left transition-base align-items-center justify-content-between py-3 px-4">
                  <div>
                    <Button
                      size="sm"
                      color="neutral-primary"
                      className={clsx('d-inline-flex mr-2 btn-pill px-3 py-1', {
                        active: activeTab === '1'
                      })}
                      onClick={() => {
                        toggle('1');
                      }}>
                      <span className="btn-wrapper--label font-size-xs text-uppercase">
                        Create Post
                      </span>
                    </Button>
                    <Button
                      size="sm"
                      color="neutral-primary"
                      className={clsx('d-inline-flex btn-pill px-3 py-1', {
                        active: activeTab === '3'
                      })}
                      onClick={() => {
                        toggle('3');
                      }}>
                      <span className="btn-wrapper--label font-size-xs text-uppercase">
                        Event
                      </span>
                    </Button>
                  </div>
                  <div className="text-black-50 pt-3 pt-md-0 font-size-sm">
                    Posting as <b className="text-black">Emma Taylor</b>
                  </div>
                </div>
                <div className="divider" />
                <div
                  className={clsx(
                    'd-flex align-items-center transition-base px-4 py-3',
                    { 'bg-secondary': inputBg }
                  )}>
                  <div className="avatar-icon-wrapper avatar-initials avatar-icon-lg mr-3">
                    <div className="avatar-icon bg-neutral-dark text-black">
                      H
                    </div>
                    <Badge
                      color="success"
                      className="badge-position badge-position--bottom-center badge-circle"
                      title="Badge bottom center">
                      Online
                    </Badge>
                  </div>
                  <Input
                    onFocus={toggleInputBg}
                    onBlur={toggleInputBg}
                    className={clsx(
                      'transition-base border-0 pl-2 font-size-lg',
                      { 'pl-4': inputBg }
                    )}
                    bsSize="lg"
                    placeholder="Write your message here..."
                  />
                </div>
              </div>
            </div>
          </PerfectScrollbar>
        </div>
        <div
          className={clsx(
            'app-inner-content-layout--sidebar pos-r order-2 order-lg-3 bg-white app-inner-content-layout--sidebar__sm',
            { 'layout-sidebar-open': isSidebarMenuOpen2 }
          )}>
          <div className="text-uppercase font-size-sm text-primary font-weight-bold my-3 px-3">
            Friends list
          </div>
          <PerfectScrollbar>
            <Nav className="nav-neutral-first flex-column">
              <NavItem>
                <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                  <div className="align-box-row">
                    <div className="avatar-icon-wrapper avatar-icon-sm">
                      <Badge color="danger" className="badge-circle">
                        Offline
                      </Badge>
                      <div className="avatar-icon rounded-circle">
                        <img alt="..." src={avatar2} />
                      </div>
                    </div>
                    <div className="pl-2">
                      <span className="d-block text-black font-size-sm font-weight-bold">
                        Mandy Erle
                        <div className="d-block text-black-50 font-size-xs font-weight-normal">
                          3 hours ago
                        </div>
                      </span>
                    </div>
                  </div>
                </NavLinkStrap>
              </NavItem>
              <NavItem>
                <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                  <div className="align-box-row">
                    <div className="avatar-icon-wrapper avatar-icon-sm">
                      <Badge color="success" className="badge-circle">
                        Online
                      </Badge>
                      <div className="avatar-icon rounded-circle">
                        <img alt="..." src={avatar3} />
                      </div>
                    </div>
                    <div className="pl-2">
                      <span className="d-block text-black font-size-sm font-weight-bold">
                        Oliver Battle
                        <div className="d-block text-black-50 font-size-xs font-weight-normal">
                          2 hours ago
                        </div>
                      </span>
                    </div>
                  </div>
                </NavLinkStrap>
              </NavItem>
              <NavItem>
                <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                  <div className="align-box-row">
                    <div className="avatar-icon-wrapper avatar-icon-sm">
                      <Badge color="warning" className="badge-circle">
                        Idle
                      </Badge>
                      <div className="avatar-icon rounded-circle">
                        <img alt="..." src={avatar4} />
                      </div>
                    </div>
                    <div className="pl-2">
                      <span className="d-block text-black font-size-sm font-weight-bold">
                        Napoleon Stacey
                        <div className="d-block text-black-50 font-size-xs font-weight-normal">
                          3 hours ago
                        </div>
                      </span>
                    </div>
                  </div>
                </NavLinkStrap>
              </NavItem>
              <NavItem>
                <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                  <div className="align-box-row">
                    <div className="avatar-icon-wrapper avatar-icon-sm">
                      <Badge color="danger" className="badge-circle">
                        Offline
                      </Badge>
                      <div className="avatar-icon rounded-circle">
                        <img alt="..." src={avatar6} />
                      </div>
                    </div>
                    <div className="pl-2">
                      <span className="d-block text-black font-size-sm font-weight-bold">
                        Mandy Erle
                        <div className="d-block text-black-50 font-size-xs font-weight-normal">
                          3 hours ago
                        </div>
                      </span>
                    </div>
                  </div>
                </NavLinkStrap>
              </NavItem>
              <NavItem>
                <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                  <div className="align-box-row">
                    <div className="avatar-icon-wrapper avatar-icon-sm">
                      <Badge color="success" className="badge-circle">
                        Online
                      </Badge>
                      <div className="avatar-icon rounded-circle">
                        <img alt="..." src={avatar1} />
                      </div>
                    </div>
                    <div className="pl-2">
                      <span className="d-block text-black font-size-sm font-weight-bold">
                        Adella Galen
                        <div className="d-block text-black-50 font-size-xs font-weight-normal">
                          5 hours ago
                        </div>
                      </span>
                    </div>
                  </div>
                </NavLinkStrap>
              </NavItem>
              <NavItem>
                <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                  <div className="align-box-row">
                    <div className="avatar-icon-wrapper avatar-icon-sm">
                      <Badge color="danger" className="badge-circle">
                        Offline
                      </Badge>
                      <div className="avatar-icon rounded-circle">
                        <img alt="..." src={avatar2} />
                      </div>
                    </div>
                    <div className="pl-2">
                      <span className="d-block text-black font-size-sm font-weight-bold">
                        Mandy Erle
                        <div className="d-block text-black-50 font-size-xs font-weight-normal">
                          3 hours ago
                        </div>
                      </span>
                    </div>
                  </div>
                </NavLinkStrap>
              </NavItem>
              <NavItem>
                <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                  <div className="align-box-row">
                    <div className="avatar-icon-wrapper avatar-icon-sm">
                      <Badge color="success" className="badge-circle">
                        Online
                      </Badge>
                      <div className="avatar-icon rounded-circle">
                        <img alt="..." src={avatar3} />
                      </div>
                    </div>
                    <div className="pl-2">
                      <span className="d-block text-black font-size-sm font-weight-bold">
                        Oliver Battle
                        <div className="d-block text-black-50 font-size-xs font-weight-normal">
                          2 hours ago
                        </div>
                      </span>
                    </div>
                  </div>
                </NavLinkStrap>
              </NavItem>
              <NavItem>
                <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                  <div className="align-box-row">
                    <div className="avatar-icon-wrapper avatar-icon-sm">
                      <Badge color="warning" className="badge-circle">
                        Idle
                      </Badge>
                      <div className="avatar-icon rounded-circle">
                        <img alt="..." src={avatar4} />
                      </div>
                    </div>
                    <div className="pl-2">
                      <span className="d-block text-black font-size-sm font-weight-bold">
                        Napoleon Stacey
                        <div className="d-block text-black-50 font-size-xs font-weight-normal">
                          3 hours ago
                        </div>
                      </span>
                    </div>
                  </div>
                </NavLinkStrap>
              </NavItem>
              <NavItem>
                <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                  <div className="align-box-row">
                    <div className="avatar-icon-wrapper avatar-icon-sm">
                      <Badge color="danger" className="badge-circle">
                        Offline
                      </Badge>
                      <div className="avatar-icon rounded-circle">
                        <img alt="..." src={avatar6} />
                      </div>
                    </div>
                    <div className="pl-2">
                      <span className="d-block text-black font-size-sm font-weight-bold">
                        Mandy Erle
                        <div className="d-block text-black-50 font-size-xs font-weight-normal">
                          3 hours ago
                        </div>
                      </span>
                    </div>
                  </div>
                </NavLinkStrap>
              </NavItem>
              <NavItem>
                <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                  <div className="align-box-row">
                    <div className="avatar-icon-wrapper avatar-icon-sm">
                      <Badge color="success" className="badge-circle">
                        Online
                      </Badge>
                      <div className="avatar-icon rounded-circle">
                        <img alt="..." src={avatar5} />
                      </div>
                    </div>
                    <div className="pl-2">
                      <span className="d-block text-black font-size-sm font-weight-bold">
                        Oliver Battle
                        <div className="d-block text-black-50 font-size-xs font-weight-normal">
                          2 hours ago
                        </div>
                      </span>
                    </div>
                  </div>
                </NavLinkStrap>
              </NavItem>
            </Nav>
          </PerfectScrollbar>
          <div className="app-content--sidebar__footer text-center p-3 d-block">
            <Button color="neutral-danger" size="sm">
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon icon={['far', 'trash-alt']} />
              </span>
              <span className="btn-wrapper--label">Clear history</span>
            </Button>
          </div>
        </div>

        <div
          onClick={toggleSidebarMenu}
          className={clsx('sidebar-inner-layout-overlay', {
            active: isSidebarMenuOpen
          })}
        />
        <div
          onClick={toggleSidebarMenu2}
          className={clsx('sidebar-inner-layout-overlay', {
            active: isSidebarMenuOpen2
          })}
        />
      </div>
    </>
  );
}
