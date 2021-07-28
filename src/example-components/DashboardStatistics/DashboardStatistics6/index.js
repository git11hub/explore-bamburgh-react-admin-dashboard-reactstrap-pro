import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row,
  Col,
  CardBody,
  Card,
  CardHeader,
  UncontrolledTooltip,
  Button
} from 'reactstrap';

import Chart from 'react-apexcharts';
export default function LivePreviewExample() {
  const chartDashboardStatistics6AOptions = {
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
      color: '#f4772e',
      curve: 'smooth',
      width: 2
    },
    colors: ['#f4772e'],
    fill: {
      color: '#f4772e',
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
  const chartDashboardStatistics6AData = [
    {
      name: 'Sales',
      data: [32, 52, 45, 32, 54, 56, 28, 25, 36, 62]
    }
  ];

  const chartDashboardStatistics6BOptions = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },

    stroke: {
      color: '#1bc943',
      curve: 'smooth',
      width: 4
    },
    colors: ['#1bc943'],
    fill: {
      color: '1bc943',
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
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    }
  };
  const chartDashboardStatistics6BData = [
    {
      name: 'Monthly Analytics',
      data: [47, 38, 56, 24, 45, 54, 38, 56, 24, 65]
    }
  ];
  return (
    <>
      <Row>
        <Col lg="6">
          <Card className="card-box mb-5">
            <CardHeader className="bg-light">
              <div className="card-header--title">
                <small>Statistics</small>
                <b>Last quarter report</b>
              </div>
              <div className="card-header--actions">
                <a
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  id="ViewDetailsTooltip9">
                  <FontAwesomeIcon icon={['fas', 'plus']} />
                </a>
                <UncontrolledTooltip target="ViewDetailsTooltip9">
                  View details
                </UncontrolledTooltip>
              </div>
            </CardHeader>
            <div className="pt-3">
              <Row className="mt-3 mb-2">
                <Col>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'user']}
                        className="font-size-xxl text-success"
                      />
                    </div>
                    <div className="mt-2 line-height-sm">
                      <b className="font-size-lg">2,345</b>
                      <span className="text-black-50 d-block">users</span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'keyboard']}
                        className="font-size-xxl text-danger"
                      />
                    </div>
                    <div className="mt-2 line-height-sm">
                      <b className="font-size-lg">3,568</b>
                      <span className="text-black-50 d-block">clicks</span>
                    </div>
                  </div>
                </Col>
              </Row>
              <div>
                <Chart
                  options={chartDashboardStatistics6AOptions}
                  series={chartDashboardStatistics6AData}
                  type="area"
                  height={150}
                />
              </div>
            </div>
            <div className="p-4 text-center">
              <Button outline color="primary" className="mb-1">
                <span className="btn-wrapper--label">View complete report</span>
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['fas', 'angle-right']} />
                </span>
              </Button>
            </div>
          </Card>
        </Col>
        <Col lg="6">
          <Card className="card-box mb-5">
            <CardHeader className="bg-light">
              <div className="card-header--title">
                <small>Statistics</small>
                <b>Users overview</b>
              </div>
              <div className="card-header--actions">
                <Button
                  tag="a"
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  color="link"
                  className="btn-link-primary p-0 font-size-xl text-primary"
                  id="ViewOptionsTooltip1">
                  <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                </Button>
                <UncontrolledTooltip target="ViewOptionsTooltip1">
                  View options
                </UncontrolledTooltip>
              </div>
            </CardHeader>
            <CardBody className="pb-0">
              <div className="align-box-row">
                <div className="font-weight-bold">
                  <small className="text-black-50 d-block mt-2 mb-2 text-uppercase">
                    New Accounts
                  </small>
                  <span className="font-size-xxl ">586,356</span>
                </div>
                <div className="ml-auto">
                  <div className="bg-first text-center text-white font-size-xl d-50 rounded-circle">
                    <FontAwesomeIcon icon={['far', 'building']} />
                  </div>
                </div>
              </div>
              <div className="mt-1">
                <FontAwesomeIcon
                  icon={['fas', 'arrow-up']}
                  className="text-danger"
                />
                <span className="text-success px-1">15.4%</span>
                <span className="text-black-50">increase this month</span>
              </div>
              <div className="mt-4">
                <Button outline color="primary" className="btn-pill mb-3">
                  <span className="btn-wrapper--label">
                    View complete report
                  </span>
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fas', 'angle-right']} />
                  </span>
                </Button>
              </div>
            </CardBody>
            <Chart
              options={chartDashboardStatistics6BOptions}
              series={chartDashboardStatistics6BData}
              type="area"
              height={165}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}
