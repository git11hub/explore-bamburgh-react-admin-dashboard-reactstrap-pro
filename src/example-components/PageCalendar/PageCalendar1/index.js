import React, { useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row,
  Col,
  CardBody,
  Card,
  CardHeader,
  Badge,
  UncontrolledTooltip,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import { NavLink as NavLinkStrap } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import DatePicker from 'react-datepicker';

import CalendarFullWidth from '../../WidgetsCalendars/Calendars2';

export default function LivePreviewExample() {
  const startDate = new Date();

  const [isSidebarMenuOpen, setIsSidebarMenuOpen] = useState(false);

  const toggleSidebarMenu = () => setIsSidebarMenuOpen(!isSidebarMenuOpen);

  return (
    <>
      <div className="app-inner-content-layout app-inner-content-layout-fixed">
        <div className="d-flex d-lg-none p-4 order-0 justify-content-between align-items-center">
          <Button
            onClick={toggleSidebarMenu}
            size="sm"
            color="primary"
            className="p-0 btn-icon d-40">
            <FontAwesomeIcon icon={['fas', 'ellipsis-v']} />
          </Button>
        </div>
        <div
          className={clsx(
            'app-inner-content-layout--sidebar app-inner-content-layout--sidebar__lg bg-secondary border-right',
            { 'layout-sidebar-open': isSidebarMenuOpen }
          )}>
          <PerfectScrollbar>
            <div className="bg-white d-xl-block d-none px-4 pt-4 pb-3 datepicker-inline-wrapper">
              <DatePicker selected={startDate} inline />
            </div>
            <div className="divider d-lg-block d-none" />
            <div className="px-4 pt-4 pb-3">
              <Nav pills className="nav-neutral-primary flex-column">
                <NavItem className="nav-header d-flex pb-2 align-items-center">
                  <div className="text-primary font-weight-bold">
                    Calendar Events
                  </div>
                  <div className="ml-auto font-size-xs">
                    <a href="#/" onClick={(e) => e.preventDefault()}>
                      <FontAwesomeIcon icon={['fas', 'plus-circle']} />
                    </a>
                  </div>
                </NavItem>
                <NavItem>
                  <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                    <Badge
                      color="success"
                      className="badge-circle-inner shadow-none mr-2">
                      1
                    </Badge>
                    Upcoming events
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                    <Badge
                      color="warning"
                      className="badge-circle-inner shadow-none mr-2">
                      2
                    </Badge>
                    Planned holidays
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                    <Badge
                      color="first"
                      className="badge-circle-inner shadow-none mr-2">
                      3
                    </Badge>
                    Meetups near you
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                    <Badge
                      color="danger"
                      className="badge-circle-inner shadow-none mr-2">
                      4
                    </Badge>
                    Other events
                  </NavLinkStrap>
                </NavItem>
              </Nav>
            </div>
            <div className="divider mt-2" />
            <div className="p-4 bg-white">
              <Nav pills className="nav-neutral-primary flex-column">
                <NavItem className="nav-header d-flex pb-3 align-items-center">
                  <div className="text-primary font-weight-bold">
                    Statistics
                  </div>
                  <div className="ml-auto font-size-xs">
                    <a
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="text-success"
                      id="RefreshStatsTooltip">
                      <FontAwesomeIcon icon={['fas', 'cog']} />
                    </a>
                    <UncontrolledTooltip
                      target="RefreshStatsTooltip"
                      placement="left">
                      Refresh stats
                    </UncontrolledTooltip>
                  </div>
                </NavItem>
              </Nav>
              <Row className="font-size-xs">
                <Col lg="6">
                  <Card className="border-1 shadow-none bg-light text-center my-2 p-3">
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
                  <Card className="border-1 shadow-none bg-light text-center my-2 p-3">
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
            </div>
            <div className="divider" />
            <div className="p-4">
              <Nav pills className="nav-neutral-primary flex-column">
                <li className="nav-header">
                  <div className="text-primary font-weight-bold">
                    Upcoming meetups
                  </div>
                </li>
              </Nav>
              <Card className="card-box mt-3 mb-4">
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
              <Card className="card-box mb-4">
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
              <Button
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="btn-pill"
                block={true}
                size="sm"
                color="primary">
                Add more events
              </Button>
            </div>
          </PerfectScrollbar>
        </div>
        <div className="app-inner-content-layout--main card-box bg-white p-0">
          <CardHeader className="rounded-0 bg-white p-4 border-bottom">
            <div className="card-header--title">
              <small>Events</small>
              <b className="font-size-lg">Events calendar</b>
            </div>
            <div className="card-header--actions">
              <Button
                href="#/"
                onClick={(e) => e.preventDefault()}
                size="sm"
                color="first"
                className="btn-icon d-40 p-0 hover-scale-sm btn-pill">
                <FontAwesomeIcon icon={['fas', 'plus']} />
              </Button>
            </div>
          </CardHeader>
          <PerfectScrollbar>
            <div className="p-4">
              <CalendarFullWidth />
            </div>
          </PerfectScrollbar>
        </div>

        <div
          onClick={toggleSidebarMenu}
          className={clsx('sidebar-inner-layout-overlay', {
            active: isSidebarMenuOpen
          })}
        />
      </div>
    </>
  );
}
