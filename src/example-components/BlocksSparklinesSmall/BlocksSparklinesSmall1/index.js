import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Badge, Button } from 'reactstrap';

import Chart from 'react-apexcharts';
export default function LivePreviewExample() {
  const chartSparklinesSmall1AOptions = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },

    stroke: {
      color: '#4191ff',
      curve: 'smooth',
      width: 3
    },
    colors: ['#f4772e'],
    markers: {
      size: 0
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
  const chartSparklinesSmall1AData = [
    {
      name: 'Daily visitors',
      data: [47, 38, 56, 24, 45, 54, 38, 47, 38, 56, 24, 56, 24, 65]
    }
  ];

  const chartSparklinesSmall1BOptions = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },

    stroke: {
      color: '#f83245',
      curve: 'smooth',
      width: 3
    },
    colors: ['#f83245'],
    markers: {
      size: 0
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
  const chartSparklinesSmall1BData = [
    {
      name: 'Revenue',
      data: [45, 56, 24, 56, 54, 38, 47, 38, 56, 24, 38, 47, 24, 65]
    }
  ];

  const chartSparklinesSmall1COptions = {
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
      width: 3
    },
    colors: ['#1bc943'],
    markers: {
      size: 0
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
  const chartSparklinesSmall1CData = [
    {
      name: 'Sales',
      data: [45, 56, 24, 54, 38, 47, 38, 56, 24, 38, 56, 47, 24, 65]
    }
  ];

  const chartSparklinesSmall1DOptions = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },

    stroke: {
      color: '#4191ff',
      curve: 'smooth',
      width: 3
    },
    colors: ['#4191ff'],
    markers: {
      size: 0
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
  const chartSparklinesSmall1DData = [
    {
      name: 'Tests',
      data: [24, 54, 38, 47, 56, 47, 45, 56, 38, 56, 24, 38, 24, 65]
    }
  ];

  return (
    <>
      <Row>
        <Col xl="3" md="6">
          <Card className="card-box mb-5 card-box-border-bottom border-warning">
            <div className="card-badges">
              <Badge
                pill
                color="neutral-info"
                className="text-info shadow-none">
                NEW
              </Badge>
            </div>
            <div className="card-body pb-1">
              <div className="align-box-row">
                <div className="text-left w-100">
                  <div className="mt-1">
                    <FontAwesomeIcon
                      icon={['far', 'user']}
                      className="font-size-xxl text-warning"
                    />
                  </div>
                  <div className="mt-3 line-height-sm">
                    <b className="font-size-lg text-black pr-2">2,345</b>
                    <span className="text-black-50">users</span>
                  </div>
                  <div className="mt-2 pt-3">
                    <Chart
                      options={chartSparklinesSmall1AOptions}
                      series={chartSparklinesSmall1AData}
                      type="line"
                      height={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Col>
        <Col xl="3" md="6">
          <Card className="card-box mb-5 card-box-border-bottom border-danger">
            <div className="card-tr-actions">
              <Button
                color="link"
                className="btn-link-primary p-0 font-size-xl text-primary shadow-none">
                <FontAwesomeIcon
                  icon={['fas', 'ellipsis-h']}
                  className="font-size-lg"
                />
              </Button>
            </div>
            <div className="card-body pb-1">
              <div className="align-box-row">
                <div className="text-left w-100">
                  <div className="mt-1">
                    <FontAwesomeIcon
                      icon={['far', 'chart-bar']}
                      className="font-size-xxl text-danger"
                    />
                  </div>
                  <div className="mt-3 line-height-sm">
                    <b className="font-size-lg pr-2">$9,693</b>
                    <span className="text-black-50">revenue</span>
                  </div>
                  <div className="mt-2 pt-3">
                    <Chart
                      options={chartSparklinesSmall1BOptions}
                      series={chartSparklinesSmall1BData}
                      type="line"
                      height={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Col>
        <Col xl="3" md="6">
          <Card className="card-box-alt mb-5 card-border-top border-success">
            <div className="card-tr-actions">
              <Button
                color="link"
                className="btn-link-primary p-0 font-size-xl text-primary shadow-none">
                <FontAwesomeIcon
                  icon={['fas', 'ellipsis-h']}
                  className="font-size-lg"
                />
              </Button>
            </div>
            <div className="card-body pb-1">
              <div className="align-box-row">
                <div className="text-left w-100">
                  <div className="mt-1">
                    <FontAwesomeIcon
                      icon={['far', 'user']}
                      className="font-size-xxl text-success"
                    />
                  </div>
                  <div className="mt-3 line-height-sm">
                    <b className="font-size-lg pr-2">489</b>
                    <span className="text-black-50">users</span>
                  </div>
                  <div className="mt-2 pt-3">
                    <Chart
                      options={chartSparklinesSmall1COptions}
                      series={chartSparklinesSmall1CData}
                      type="line"
                      height={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Col>
        <Col xl="3" md="6">
          <Card className="card-box-alt mb-5 card-border-top border-first">
            <div className="card-tr-actions">
              <Button
                color="link"
                className="btn-link-primary p-0 font-size-xl text-primary shadow-none">
                <FontAwesomeIcon
                  icon={['fas', 'ellipsis-h']}
                  className="font-size-lg"
                />
              </Button>
            </div>
            <div className="card-body pb-1">
              <div className="align-box-row">
                <div className="text-left w-100">
                  <div className="mt-1">
                    <FontAwesomeIcon
                      icon={['far', 'bell']}
                      className="font-size-xxl text-first"
                    />
                  </div>
                  <div className="mt-3 line-height-sm">
                    <b className="font-size-lg pr-2">463</b>
                    <span className="text-black-50">tests</span>
                  </div>
                  <div className="mt-2 pt-3">
                    <Chart
                      options={chartSparklinesSmall1DOptions}
                      series={chartSparklinesSmall1DData}
                      type="line"
                      height={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
