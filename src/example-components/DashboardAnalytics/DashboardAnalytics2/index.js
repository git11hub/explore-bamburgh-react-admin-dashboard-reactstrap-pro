import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row,
  Col,
  Card,
  Badge,
  ListGroup,
  ListGroupItem,
  Button,
  UncontrolledDropdown,
  Progress,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';

import Chart from 'react-apexcharts';
import CountUp from 'react-countup';
import { CircularProgressbar } from 'react-circular-progressbar';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../../assets/images/avatars/avatar4.jpg';

export default function LivePreviewExample() {
  const chartDashboardAnalytics2Options = {
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
    stroke: {
      color: '#4191ff',
      curve: 'smooth',
      width: 2
    },
    fill: {
      color: '#1bc943',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.3,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0,
        stops: [0, 100]
      }
    },
    colors: ['#1bc943'],
    legend: {
      show: false
    },
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    }
  };
  const chartDashboardAnalytics2Data = [
    {
      name: 'Weekly sales',
      data: [47, 38, 56, 24, 45, 54, 38, 56, 24, 65]
    }
  ];

  return (
    <>
      <Row>
        <Col xl="6">
          <Card className="card-box mb-5">
            <div className="card-header">
              <div className="card-header--title">
                <small className="d-block text-uppercase mt-1">Progress</small>
                <b>Users Analytics</b>
              </div>
              <div className="card-header--actions">
                <Badge pill color="dark">
                  Pending
                </Badge>
              </div>
            </div>
            <ListGroup flush>
              <ListGroupItem className="py-3">
                <Row className="no-gutters">
                  <Col xl="6" md="12" className="d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper mr-2">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar2} />
                        </div>
                      </div>
                      <div>
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Shanelle Wynn
                        </a>
                        <span className="text-black-50 d-block">
                          UI Engineer, Apple Inc.
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col
                    xl="6"
                    md="12"
                    className="pt-3 pt-xl-0 d-flex align-items-center">
                    <div className="align-box-row flex-grow-1">
                      <div className="d-flex flex-column flex-grow-1">
                        <div className="d-flex justify-content-between text-dark">
                          <div className="ml-auto">
                            <div className="font-weight-bold">
                              <CountUp
                                start={0}
                                end={583}
                                duration={4}
                                separator=""
                                decimals={0}
                                decimal=","
                                prefix=""
                                suffix=""
                              />
                            </div>
                          </div>
                        </div>
                        <Progress
                          className="progress-sm progress-bar-rounded"
                          color="primary"
                          value="52"
                        />
                      </div>
                      <Button
                        size="sm"
                        color="neutral-primary"
                        className="ml-4">
                        View
                      </Button>
                    </div>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem className="py-3">
                <Row className="no-gutters">
                  <Col xl="6" md="12" className="d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper mr-2">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar3} />
                        </div>
                      </div>
                      <div>
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Akeem Griffith
                        </a>
                        <span className="text-black-50 d-block">
                          Manager, Google Inc.
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col
                    xl="6"
                    md="12"
                    className="pt-3 pt-xl-0 d-flex align-items-center">
                    <div className="align-box-row flex-grow-1">
                      <div className="d-flex flex-column flex-grow-1">
                        <div className="d-flex justify-content-between text-dark">
                          <div className="ml-auto">
                            <div className="font-weight-bold">
                              <CountUp
                                start={0}
                                end={340}
                                duration={4}
                                separator=""
                                decimals={0}
                                decimal=","
                                prefix=""
                                suffix=""
                              />
                            </div>
                          </div>
                        </div>
                        <Progress
                          className="progress-bar-rounded progress-sm"
                          color="danger"
                          value="38"
                        />
                      </div>
                      <Button
                        size="sm"
                        color="neutral-primary"
                        className="ml-4">
                        View
                      </Button>
                    </div>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem className="py-3">
                <Row className="no-gutters">
                  <Col xl="6" md="12" className="d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper mr-2">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar4} />
                        </div>
                      </div>
                      <div>
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Abigayle Hicks
                        </a>
                        <span className="text-black-50 d-block">
                          Project Manager, Spotify
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col
                    xl="6"
                    md="12"
                    className="pt-3 pt-xl-0 d-flex align-items-center">
                    <div className="align-box-row flex-grow-1">
                      <div className="d-flex flex-column flex-grow-1">
                        <div className="d-flex justify-content-between text-dark">
                          <div className="ml-auto">
                            <div className="font-weight-bold">
                              <CountUp
                                start={0}
                                end={473}
                                duration={4}
                                separator=""
                                decimals={0}
                                decimal=","
                                prefix=""
                                suffix=""
                              />
                            </div>
                          </div>
                        </div>
                        <Progress
                          className="progress-bar-rounded progress-sm"
                          color="warning"
                          value="34"
                        />
                      </div>
                      <Button
                        size="sm"
                        color="neutral-primary"
                        className="ml-4">
                        View
                      </Button>
                    </div>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem className="py-3">
                <Row className="no-gutters">
                  <Col xl="6" md="12" className="d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper mr-2">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar4} />
                        </div>
                      </div>
                      <div>
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Gordon Barnett
                        </a>
                        <span className="text-black-50 d-block">
                          UI Developer, UiFort
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col
                    xl="6"
                    md="12"
                    className="pt-3 pt-xl-0 d-flex align-items-center">
                    <div className="align-box-row flex-grow-1">
                      <div className="d-flex flex-column flex-grow-1">
                        <div className="d-flex justify-content-between text-dark">
                          <div className="ml-auto">
                            <div className="font-weight-bold">
                              <CountUp
                                start={0}
                                end={683}
                                duration={6}
                                delay={2}
                                separator=" "
                                decimals={0}
                                decimal=","
                                prefix=""
                                suffix=""
                              />
                            </div>
                          </div>
                        </div>
                        <Progress
                          className="progress-bar-rounded progress-sm"
                          color="success"
                          value="48"
                        />
                      </div>
                      <Button
                        size="sm"
                        color="neutral-primary"
                        className="ml-4">
                        View
                      </Button>
                    </div>
                  </Col>
                </Row>
              </ListGroupItem>
            </ListGroup>
          </Card>
          <Row>
            <Col md="6">
              <Card className="card-box card-box-border-bottom border-danger shadow-danger-sm mb-5">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="p-3">
                    <div className="text-black-50 text-uppercase pb-2 font-size-sm">
                      Accounts
                    </div>
                    <h3 className="font-weight-bold display-4 mb-0 text-black">
                      <FontAwesomeIcon
                        icon={['fas', 'chevron-up']}
                        className="font-size-lg mr-2 text-success"
                      />
                      <span>
                        <CountUp
                          start={0}
                          end={34}
                          duration={6}
                          delay={2}
                          separator=""
                          decimals={0}
                          decimal=","
                        />
                      </span>
                      <small className="opacity-6 pl-1 text-black-50">%</small>
                    </h3>
                  </div>
                  <CircularProgressbar
                    value={53}
                    text={53 + '%'}
                    strokeWidth={5}
                    className="m-3 circular-progress-sm circular-progress-danger"
                  />
                </div>
              </Card>
            </Col>
            <Col md="6">
              <Card className="card-box card-box-border-bottom border-success shadow-success-sm mb-5">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="p-3">
                    <div className="text-black-50 text-uppercase pb-2 font-size-sm">
                      Subscriptions
                    </div>
                    <h3 className="font-weight-bold display-4 mb-0 text-black">
                      <span className="font-size-lg mr-2 text-success font-weight-bold">
                        +
                      </span>
                      <CountUp start={0} end={35} />
                      <small className="opacity-6 pl-1 text-black-50">
                        sales
                      </small>
                    </h3>
                  </div>
                  <CircularProgressbar
                    value={91}
                    text={91 + '%'}
                    strokeWidth={8}
                    className="m-3 circular-progress-sm circular-progress-success"
                  />
                </div>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xl="6">
          <Card className="card-box mb-5">
            <div className="card-header">
              <div className="card-header--title">
                <small className="d-block text-uppercase mt-1">Reports</small>
                <b>Weekly Sales</b>
              </div>
              <div className="card-header--actions">
                <UncontrolledDropdown>
                  <DropdownToggle
                    color="link"
                    className="btn-link-second p-0 text-second font-size-xl">
                    <FontAwesomeIcon
                      icon={['fas', 'ellipsis-h']}
                      className="font-size-lg"
                    />
                  </DropdownToggle>
                  <DropdownMenu
                    right
                    className="dropdown-menu-xl overflow-hidden p-0">
                    <div className="grid-menu grid-menu-2col">
                      <Row className="no-gutters">
                        <Col sm="6">
                          <Button
                            outline
                            color="secondary"
                            className="border-0 w-100 btn-transition-none rounded-0 shadow-none py-4 px-1">
                            <FontAwesomeIcon
                              icon={['far', 'bell']}
                              className="h2 d-block mx-auto mb-2 mt-1 text-first"
                            />
                            <div className="font-weight-bold text-black">
                              Reports
                            </div>
                            <div className="font-size-md mb-1 text-black-50">
                              Monthly Stats
                            </div>
                          </Button>
                        </Col>
                        <Col sm="6">
                          <Button
                            outline
                            color="secondary"
                            className="border-0 w-100 btn-transition-none rounded-0 shadow-none py-4 px-1">
                            <FontAwesomeIcon
                              icon={['far', 'file-excel']}
                              className="h2 d-block mx-auto mb-2 mt-1 text-first"
                            />
                            <div className="font-weight-bold text-black">
                              Statistics
                            </div>
                            <div className="font-size-md mb-1 text-black-50">
                              Customers stats
                            </div>
                          </Button>
                        </Col>
                        <Col sm="6">
                          <Button
                            outline
                            color="secondary"
                            className="border-0 w-100 btn-transition-none rounded-0 shadow-none py-4 px-1">
                            <FontAwesomeIcon
                              icon={['far', 'eye']}
                              className="h2 d-block mx-auto mb-2 mt-1 text-first"
                            />
                            <div className="font-weight-bold text-black">
                              Projects
                            </div>
                            <div className="font-size-md mb-1 text-black-50">
                              Manage servers
                            </div>
                          </Button>
                        </Col>
                        <Col sm="6">
                          <Button
                            outline
                            color="secondary"
                            className="border-0 w-100 btn-transition-none rounded-0 shadow-none py-4 px-1">
                            <FontAwesomeIcon
                              icon={['far', 'chart-bar']}
                              className="h2 d-block mx-auto mb-2 mt-1 text-first"
                            />
                            <div className="font-weight-bold text-black">
                              Tasks
                            </div>
                            <div className="font-size-md mb-1 text-black-50">
                              Pending items
                            </div>
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </div>
            <div className="px-5 pt-5 pb-2">
              <h1 className="display-2 font-weight-bold mb-4">
                $
                <span className="pl-1">
                  <CountUp
                    start={0}
                    end={477.693}
                    duration={4}
                    separator=""
                    decimals={3}
                    decimal=","
                    prefix=""
                    suffix=""
                  />
                </span>
              </h1>
              <Row>
                <Col sm="4">
                  <div>
                    <span className="font-size-xl font-weight-bold">76%</span>
                  </div>
                  <Progress
                    value="76"
                    animated
                    striped
                    className="progress-bar-rounded progress-sm mb-2"
                    color="success"
                  />
                  <div className="text-dark">Orders</div>
                </Col>
                <Col sm="4">
                  <div>
                    <span className="font-size-xl font-weight-bold">34%</span>
                  </div>
                  <Progress
                    value="34"
                    color="danger"
                    className="progress-bar-rounded progress-sm mb-2"
                  />
                  <div className="text-dark">Deliveries</div>
                </Col>
                <Col sm="4">
                  <div>
                    <span className="font-size-xl font-weight-bold">49%</span>
                  </div>
                  <Progress
                    value="49"
                    color="warning"
                    className="progress-bar-rounded progress-sm mb-2"
                  />
                  <div className="text-dark">Products</div>
                </Col>
              </Row>
            </div>
            <div>
              <Chart
                options={chartDashboardAnalytics2Options}
                series={chartDashboardAnalytics2Data}
                type="area"
                height={197}
              />
            </div>
            <div className="card-footer p-3 text-center">
              <Button size="sm" outline color="second">
                <span className="btn-wrapper--label">View complete report</span>
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                </span>
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
