import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';

import Chart from 'react-apexcharts';
import PerfectScrollbar from 'react-perfect-scrollbar';
import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../../assets/images/avatars/avatar4.jpg';
import avatar5 from '../../../assets/images/avatars/avatar5.jpg';

export default function LivePreviewExample() {
  const chartListsLarge1Options = {
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
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '65%'
      }
    },
    stroke: {
      color: '#4191ff',
      curve: 'smooth',
      width: 2
    },
    colors: ['#4191ff'],
    fill: {
      color: '#4191ff',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.7,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 0,
        stops: [0, 100]
      }
    },
    legend: {
      show: false
    },
    tooltip: {
      enabled: false
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
  const chartListsLarge1Data = [
    {
      name: 'Sales',
      data: [32, 52, 45, 32, 54, 56, 28, 25, 36, 62]
    }
  ];

  return (
    <>
      <Card className="shadow-xxl mb-5">
        <UncontrolledDropdown className="card-tr-actions">
          <DropdownToggle
            color="link"
            className="btn-link-first p-0 font-size-xl text-first">
            <FontAwesomeIcon
              icon={['fas', 'ellipsis-h']}
              className="font-size-lg"
            />
          </DropdownToggle>
          <DropdownMenu right className="dropdown-menu-xl overflow-hidden p-0">
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
                    <div className="font-weight-bold text-black">Reports</div>
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
                    <div className="font-weight-bold text-black">Projects</div>
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
                    <div className="font-weight-bold text-black">Tasks</div>
                    <div className="font-size-md mb-1 text-black-50">
                      Pending items
                    </div>
                  </Button>
                </Col>
              </Row>
            </div>
          </DropdownMenu>
        </UncontrolledDropdown>
        <div className="card-header-alt px-4 pt-4 pb-2">
          <h6 className="font-weight-bold font-size-lg mb-1 text-black">
            Weekly Sales
          </h6>
          <p className="text-black-50 mb-0">
            Reports for what we sold this week.
          </p>
        </div>
        <div>
          <Chart
            options={chartListsLarge1Options}
            series={chartListsLarge1Data}
            type="area"
            height={160}
          />
        </div>
        <div className="scroll-area shadow-overflow">
          <PerfectScrollbar options={{ wheelPropagation: false }}>
            <ListGroup flush>
              <ListGroupItem className="d-flex justify-content-between align-items-center py-3">
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
                <Button size="sm" color="neutral-dark" className="ml-4">
                  View
                </Button>
              </ListGroupItem>
              <ListGroupItem className="d-flex justify-content-between align-items-center py-3">
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
                <Button size="sm" color="neutral-dark" className="ml-4">
                  View
                </Button>
              </ListGroupItem>
              <ListGroupItem className="d-flex justify-content-between align-items-center py-3">
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
                <Button size="sm" color="neutral-dark" className="ml-4">
                  View
                </Button>
              </ListGroupItem>
              <ListGroupItem className="d-flex justify-content-between align-items-center py-3">
                <div className="d-flex align-items-center">
                  <div className="avatar-icon-wrapper mr-2">
                    <div className="avatar-icon">
                      <img alt="..." src={avatar1} />
                    </div>
                  </div>
                  <div>
                    <a
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="font-weight-bold text-black"
                      title="...">
                      Reece Corbett
                    </a>
                    <span className="text-black-50 d-block">
                      Senior Designer, Amazon Inc.
                    </span>
                  </div>
                </div>
                <div>
                  <Button size="sm" color="neutral-dark" className="ml-4">
                    View
                  </Button>
                </div>
              </ListGroupItem>
              <ListGroupItem className="d-flex justify-content-between align-items-center py-3">
                <div className="d-flex align-items-center">
                  <div className="avatar-icon-wrapper mr-2">
                    <div className="avatar-icon">
                      <img alt="..." src={avatar5} />
                    </div>
                  </div>
                  <div>
                    <a
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="font-weight-bold text-black"
                      title="...">
                      Reece Corbett
                    </a>
                    <span className="text-black-50 d-block">
                      Senior Designer, Amazon Inc.
                    </span>
                  </div>
                </div>
                <Button size="sm" color="neutral-dark" className="ml-4">
                  View
                </Button>
              </ListGroupItem>
              <ListGroupItem className="d-flex justify-content-between align-items-center py-3">
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
                <Button size="sm" color="neutral-dark" className="ml-4">
                  View
                </Button>
              </ListGroupItem>
              <ListGroupItem className="d-flex justify-content-between align-items-center py-3">
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
                <Button size="sm" color="neutral-dark" className="ml-4">
                  View
                </Button>
              </ListGroupItem>
              <ListGroupItem className="d-flex justify-content-between align-items-center py-3">
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
                <Button size="sm" color="neutral-dark" className="ml-4">
                  View
                </Button>
              </ListGroupItem>
            </ListGroup>
          </PerfectScrollbar>
        </div>
        <div className="card-footer p-3 text-center">
          <Button size="sm" color="primary">
            <span className="btn-wrapper--label">View all employees</span>
            <span className="btn-wrapper--icon">
              <FontAwesomeIcon icon={['fas', 'arrow-right']} />
            </span>
          </Button>
        </div>
      </Card>
    </>
  );
}
