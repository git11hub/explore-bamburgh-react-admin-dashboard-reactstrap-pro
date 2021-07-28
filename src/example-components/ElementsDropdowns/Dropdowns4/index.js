import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row,
  Col,
  CardBody,
  Card,
  Badge,
  ListGroup,
  ListGroupItem,
  Nav,
  NavItem,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';
import { NavLink as NavLinkStrap } from 'reactstrap';
import Chart from 'react-apexcharts';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

export default function LivePreviewExample() {
  const chartDataOptions = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#3c44b1'],
    stroke: {
      color: '#4191ff',
      curve: 'smooth',
      width: 4
    },
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    },
    legend: {
      show: false
    }
  };
  const chartData = [
    {
      name: 'Customers',
      data: [47, 38, 56, 24, 45, 54, 38, 47, 38, 56, 24, 56, 24, 65]
    }
  ];

  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <UncontrolledDropdown className="m-2">
          <DropdownToggle outline color="primary">
            Blocks 1
          </DropdownToggle>
          <DropdownMenu right className="dropdown-menu-xl p-0">
            <CardBody className="p-0">
              <Row className="mt-4">
                <Col>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'chart-bar']}
                        className="font-size-xxl text-danger"
                      />
                    </div>
                    <div className="mt-3 line-height-sm">
                      <b className="font-size-lg">3,568</b>
                      <span className="text-black-50 d-block">sales</span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'object-group']}
                        className="font-size-xxl text-info"
                      />
                    </div>
                    <div className="mt-3 line-height-sm">
                      <b className="font-size-lg">$9,693</b>
                      <span className="text-black-50 d-block">revenue</span>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="divider mt-4" />
              <div className="text-center py-4">
                <Button size="sm" color="primary">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['far', 'eye']} />
                  </span>
                  <span className="btn-wrapper--label">Generate reports</span>
                </Button>
              </div>
            </CardBody>
            <div className="card-footer bg-light text-center">
              <div className="pt-4 pr-2 pl-2">
                <Chart
                  options={chartDataOptions}
                  series={chartData}
                  type="line"
                  height={80}
                />
              </div>
            </div>
          </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown className="m-2">
          <DropdownToggle outline color="primary">
            Blocks 2
          </DropdownToggle>
          <DropdownMenu right className="dropdown-menu-xl p-0">
            <ListGroup flush className="text-left bg-transparent">
              <ListGroupItem className="rounded-top">
                <Nav pills className="nav-neutral-primary flex-column">
                  <NavItem className="nav-header d-flex text-primary pt-0 pb-2 font-weight-bold align-items-center">
                    <div>Profile options</div>
                    <div className="ml-auto font-size-xs">
                      <a href="#/" onClick={(e) => e.preventDefault()}>
                        <FontAwesomeIcon icon={['fas', 'plus-circle']} />
                      </a>
                    </div>
                  </NavItem>
                  <NavItem>
                    <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                      My Account
                    </NavLinkStrap>
                  </NavItem>
                  <NavItem>
                    <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                      Profile settings
                    </NavLinkStrap>
                  </NavItem>
                  <NavItem>
                    <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                      Active tasks
                    </NavLinkStrap>
                  </NavItem>
                </Nav>
              </ListGroupItem>
              <ListGroupItem className="bg-light p-0">
                <div className="grid-menu grid-menu-2col">
                  <div className="py-3">
                    <div className="d-flex justify-content-center">
                      <div className="d-flex align-items-center">
                        <div>
                          <FontAwesomeIcon
                            icon={['far', 'chart-bar']}
                            className="font-size-xxl text-info"
                          />
                        </div>
                        <div className="pl-3 line-height-sm">
                          <b className="font-size-lg">$9,693</b>
                          <span className="text-black-50 d-block">revenue</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ListGroupItem>
              <ListGroupItem className="rounded-bottom p-3 text-center">
                <Button
                  tag="a"
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  color="facebook"
                  title="Facebook">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fab', 'facebook']} />
                  </span>
                </Button>
                <Button
                  tag="a"
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  color="dribbble"
                  className="mx-2"
                  title="Dribbble">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fab', 'dribbble']} />
                  </span>
                </Button>
                <Button
                  tag="a"
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  color="twitter"
                  title="Twitter">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                  </span>
                </Button>
              </ListGroupItem>
            </ListGroup>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
      <div className="divider my-3" />

      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <UncontrolledDropdown className="m-2">
          <DropdownToggle outline color="primary">
            Blocks 3
          </DropdownToggle>
          <DropdownMenu right className="dropdown-menu-xl overflow-hidden p-0">
            <ListGroup flush className="text-left bg-transparent">
              <ListGroupItem>
                <div className="align-box-row">
                  <div className="align-self-start">
                    <div className="bg-premium-dark text-center text-white font-size-lg d-40 rounded-circle">
                      <FontAwesomeIcon icon={['far', 'lightbulb']} />
                    </div>
                  </div>
                  <div className="pl-3">
                    <b>Blinded by desire</b>
                    <p className="text-black-50 mt-1 mb-0">
                      A wonderful serenity has taken possession.
                    </p>
                    <div className="timeline-list mt-3">
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
                      <div className="timeline-item">
                        <div className="timeline-item--content">
                          <div className="timeline-item--icon" />
                          <h4 className="timeline-item--label mb-2 font-weight-bold">
                            Business investor meeting
                            <Badge
                              color="neutral-info"
                              className="text-info ml-2">
                              New
                            </Badge>
                          </h4>
                          <p>
                            Mosaic, the first graphical browser, is introduced
                            to the average consumer.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ListGroupItem>
            </ListGroup>
          </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown className="m-2">
          <DropdownToggle outline color="primary">
            Blocks 4
          </DropdownToggle>
          <DropdownMenu right className="dropdown-menu-xxl p-0">
            <CardBody>
              <div className="chat-wrapper">
                <div className="chat-item p-2 mb-2">
                  <div className="align-box-row">
                    <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                      <div className="avatar-icon rounded border-0">
                        <img alt="..." src={avatar7} />
                      </div>
                    </div>
                    <div>
                      <div className="chat-box bg-first text-white">
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
                      <div className="avatar-icon rounded border-0">
                        <img alt="..." src={avatar3} />
                      </div>
                    </div>
                    <div>
                      <div className="chat-box bg-first text-white">
                        <p>Almost forgot about your tasks.</p>
                        <p>
                          <b>Check the links below:</b>
                        </p>
                        <Card className="bg-premium-dark p-2 mt-3 mb-2">
                          <div className="text-center py-2">
                            <a
                              href="#/"
                              onClick={(e) => e.preventDefault()}
                              color="link"
                              className="m-1 p-0 bg-grow-early d-inline-block text-center text-white font-size-lg d-40 rounded-circle btn-icon">
                              <FontAwesomeIcon icon={['far', 'building']} />
                            </a>
                            <a
                              href="#/"
                              onClick={(e) => e.preventDefault()}
                              color="link"
                              className="m-1 p-0 bg-ripe-malin d-inline-block text-center text-white font-size-lg d-40 rounded-circle btn-icon">
                              <FontAwesomeIcon icon={['far', 'gem']} />
                            </a>
                            <a
                              href="#/"
                              onClick={(e) => e.preventDefault()}
                              color="link"
                              className="m-1 p-0 bg-plum-plate d-inline-block text-center text-white font-size-lg d-40 rounded-circle btn-icon">
                              <FontAwesomeIcon icon={['far', 'chart-bar']} />
                            </a>
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
            </CardBody>
            <div className="card-footer bg-white p-3 text-center d-block">
              <Button
                tag="a"
                href="#/"
                onClick={(e) => e.preventDefault()}
                color="primary"
                size="sm">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon
                    icon={['far', 'object-group']}
                    className="mr-1"
                  />
                </span>
                <span className="btn-wrapper--label">View History</span>
              </Button>
            </div>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    </>
  );
}
