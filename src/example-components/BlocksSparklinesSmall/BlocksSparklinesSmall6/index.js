import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row,
  Col,
  CardBody,
  Card,
  Badge,
  Nav,
  NavItem,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';
import { NavLink as NavLinkStrap } from 'reactstrap';
import CountUp from 'react-countup';
import { Line } from 'react-chartjs-2';
const chartSparklinesSmall6Danger = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August'
  ],
  datasets: [
    {
      backgroundColor: 'rgba(248, 50, 69, 0.1)',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 2,
      borderColor: '#f83245',
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#f83245',
      pointBackgroundColor: '#ffffff',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBackgroundColor: '#ffffff',
      pointHoverBorderColor: '#f83245',
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      pointHitRadius: 0,
      data: [80, 81, 55, 65, 38, 53, 59, 77, 48],
      datalabels: {
        display: false
      }
    }
  ]
};
const chartSparklinesSmall6DangerOptions = {
  layout: {
    padding: {
      left: -10,
      right: 0,
      top: 0,
      bottom: -10
    }
  },
  scales: {
    yAxes: [
      {
        ticks: {
          display: false,
          beginAtZero: true
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ],
    xAxes: [
      {
        ticks: {
          display: false,
          beginAtZero: true
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ]
  },
  legend: {
    display: false
  },
  responsive: true,
  maintainAspectRatio: false
};

const chartSparklinesSmall6Success = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August'
  ],
  datasets: [
    {
      backgroundColor: 'rgba(27, 201, 67, 0.1)',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 2,
      borderColor: '#1bc943',
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#1bc943',
      pointBackgroundColor: '#ffffff',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBackgroundColor: '#ffffff',
      pointHoverBorderColor: '#1bc943',
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      pointHitRadius: 0,
      data: [65, 59, 80, 81, 55, 38, 59, 80, 46],
      datalabels: {
        display: false
      }
    }
  ]
};
const chartSparklinesSmall6SuccessOptions = {
  layout: {
    padding: {
      left: -10,
      right: 0,
      top: 0,
      bottom: -10
    }
  },
  scales: {
    yAxes: [
      {
        ticks: {
          display: false,
          beginAtZero: true
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ],
    xAxes: [
      {
        ticks: {
          display: false,
          beginAtZero: true
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ]
  },
  legend: {
    display: false
  },
  responsive: true,
  maintainAspectRatio: false
};

const chartSparklinesSmall6Warning = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August'
  ],
  datasets: [
    {
      backgroundColor: 'rgba(244, 119, 46, 0.1)',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 2,
      borderColor: '#f4772e',
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#f4772e',
      pointBackgroundColor: '#ffffff',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBackgroundColor: '#ffffff',
      pointHoverBorderColor: '#f4772e',
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      pointHitRadius: 0,
      data: [80, 81, 55, 65, 38, 53, 59, 77, 48],
      datalabels: {
        display: false
      }
    }
  ]
};
const chartSparklinesSmall6WarningOptions = {
  layout: {
    padding: {
      left: -10,
      right: 0,
      top: 0,
      bottom: -10
    }
  },
  scales: {
    yAxes: [
      {
        ticks: {
          display: false,
          beginAtZero: true
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ],
    xAxes: [
      {
        ticks: {
          display: false,
          beginAtZero: true
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ]
  },
  legend: {
    display: false
  },
  responsive: true,
  maintainAspectRatio: false
};

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col xl="4">
          <Card className="card-box mb-5">
            <CardBody>
              <div className="d-flex align-items-center justify-content-between">
                <div className="font-weight-bold font-size-md m-0">
                  Bandwidth allocation
                </div>
                <UncontrolledDropdown>
                  <DropdownToggle size="sm" color="neutral-dark">
                    Export
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-down']}
                      className="opacity-8 font-size-xs ml-2"
                    />
                  </DropdownToggle>
                  <DropdownMenu right className="dropdown-menu-xl">
                    <Nav pills className="nav-neutral-dark flex-column px-3">
                      <NavItem>
                        <NavLinkStrap
                          href="#/"
                          onClick={(e) => e.preventDefault()}>
                          <span>View all reports</span>
                        </NavLinkStrap>
                      </NavItem>
                      <NavItem>
                        <NavLinkStrap
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          active>
                          <span>View active items</span>
                          <Badge className="ml-auto" color="success">
                            23
                          </Badge>
                        </NavLinkStrap>
                      </NavItem>
                      <NavItem>
                        <NavLinkStrap
                          href="#/"
                          onClick={(e) => e.preventDefault()}>
                          <div className="nav-link-icon">
                            <FontAwesomeIcon icon={['fas', 'download']} />
                          </div>
                          <span>Download</span>
                        </NavLinkStrap>
                      </NavItem>
                      <NavItem>
                        <NavLinkStrap
                          href="#/"
                          onClick={(e) => e.preventDefault()}>
                          <div className="nav-link-icon">
                            <FontAwesomeIcon icon={['far', 'file-excel']} />
                          </div>
                          <span>Export to CSV</span>
                        </NavLinkStrap>
                      </NavItem>
                    </Nav>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
              <div className="mt-5">
                <span className="display-3 text-primary font-weight-bold d-block">
                  12,56k
                </span>
                <span className="text-black-50">
                  Successful production deployments
                </span>
              </div>
            </CardBody>
            <div className="sparkline-full-wrapper sparkline-full-wrapper--sm">
              <Line
                data={chartSparklinesSmall6Success}
                options={chartSparklinesSmall6SuccessOptions}
              />
            </div>
          </Card>
        </Col>
        <Col xl="4">
          <Card className="card-box mb-5">
            <CardBody>
              <div className="d-flex align-items-center justify-content-between">
                <div className="font-weight-bold font-size-md m-0">
                  Production servers
                </div>
                <UncontrolledDropdown>
                  <DropdownToggle size="sm" color="neutral-danger">
                    Export
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-down']}
                      className="opacity-8 font-size-xs ml-2"
                    />
                  </DropdownToggle>
                  <DropdownMenu right className="dropdown-menu-xl">
                    <Nav pills className="nav-neutral-danger flex-column px-3">
                      <NavItem>
                        <NavLinkStrap
                          href="#/"
                          onClick={(e) => e.preventDefault()}>
                          <span>View all reports</span>
                        </NavLinkStrap>
                      </NavItem>
                      <NavItem>
                        <NavLinkStrap
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          active>
                          <span>View active items</span>
                          <Badge className="ml-auto" color="success">
                            23
                          </Badge>
                        </NavLinkStrap>
                      </NavItem>
                      <NavItem>
                        <NavLinkStrap
                          href="#/"
                          onClick={(e) => e.preventDefault()}>
                          <div className="nav-link-icon">
                            <FontAwesomeIcon icon={['fas', 'download']} />
                          </div>
                          <span>Download</span>
                        </NavLinkStrap>
                      </NavItem>
                      <NavItem>
                        <NavLinkStrap
                          href="#/"
                          onClick={(e) => e.preventDefault()}>
                          <div className="nav-link-icon">
                            <FontAwesomeIcon icon={['far', 'file-excel']} />
                          </div>
                          <span>Export to CSV</span>
                        </NavLinkStrap>
                      </NavItem>
                    </Nav>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
              <div className="mt-5">
                <span className="display-3 text-danger font-weight-bold d-block">
                  <CountUp
                    start={0}
                    end={35}
                    duration={6}
                    delay={2}
                    separator=""
                    prefix="+"
                    suffix="%"
                    decimals={0}
                    decimal=","
                  />
                </span>
                <span className="text-black-50">Returning clients reports</span>
              </div>
            </CardBody>
            <div className="sparkline-full-wrapper">
              <Line
                data={chartSparklinesSmall6Danger}
                options={chartSparklinesSmall6DangerOptions}
              />
            </div>
          </Card>
        </Col>
        <Col xl="4">
          <Card className="card-box mb-5">
            <CardBody>
              <div className="d-flex align-items-center justify-content-between">
                <div className="font-weight-bold font-size-md m-0">
                  Returning customers
                </div>
                <Button
                  size="sm"
                  color="first"
                  className="text-uppercase font-weight-bold font-size-xs">
                  <FontAwesomeIcon
                    icon={['far', 'chart-bar']}
                    className="opacity-8 mr-1"
                  />
                  Generate
                </Button>
              </div>
              <div className="mt-5">
                <span className="display-3 text-warning font-weight-bold d-block">
                  <CountUp
                    start={0}
                    end={1.253}
                    duration={6}
                    delay={2}
                    separator=""
                    prefix="+"
                    suffix="%"
                    decimals={3}
                    decimal=","
                  />
                </span>
                <span className="text-warning opacity-7">
                  Pending services integrations
                </span>
              </div>
            </CardBody>
            <div className="sparkline-full-wrapper sparkline-full-wrapper--lg">
              <Line
                data={chartSparklinesSmall6Warning}
                options={chartSparklinesSmall6WarningOptions}
              />
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
