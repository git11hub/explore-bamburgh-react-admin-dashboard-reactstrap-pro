import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Button } from 'reactstrap';

import CountUp from 'react-countup';
import Chart from 'react-apexcharts';
export default function LivePreviewExample() {
  const chartsSmall1AOptions = {
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
      show: true,
      color: '#f4772e',
      curve: 'smooth',
      width: 2
    },
    fill: {
      color: '#f4772e'
    },
    colors: ['#f4772e'],
    legend: {
      show: false
    },
    labels: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
      'Last Week',
      'Last Month',
      'Last Year'
    ],
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    }
  };
  const chartsSmall1AData = [
    {
      name: 'Sales',
      data: [32, 52, 45, 32, 54, 56, 28, 25, 36, 62]
    }
  ];

  const chartsSmall1BOptions = {
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
        endingShape: 'rounded',
        columnWidth: '60%'
      }
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    colors: ['#3c44b1', 'rgba(122, 123, 151, 0.4)'],
    fill: {
      opacity: 1
    },
    legend: {
      show: false
    },
    labels: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
      'Last Week',
      'Last Month',
      'Last Year',
      'Last Decade'
    ],
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    }
  };
  const chartsSmall1BData = [
    {
      name: 'Net Profit',
      data: [2.3, 3.1, 4.0, 3.8, 5.1, 3.6, 4.0, 3.8, 5.1, 3.6, 3.2]
    },
    {
      name: 'Net Loss',
      data: [2.1, 2.1, 3.0, 2.8, 4.0, 3.8, 5.1, 3.6, 4.1, 2.6, 1.2]
    }
  ];

  const chartsSmall1COptions = {
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
      color: '#1bc943',
      curve: 'smooth',
      width: 2
    },
    colors: ['#1bc943'],
    fill: {
      color: '#1bc943',
      opacity: 0.3
    },
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
  const chartsSmall1CData = [
    {
      name: 'Net Profit',
      data: [2.3, 3.1, 4.0, 3.8, 5.1, 3.6, 4.0, 3.8, 5.1, 3.6, 3.2]
    }
  ];
  return (
    <>
      <Row>
        <Col md="4" lg="12" xl="4">
          <Card className="card-box mb-5">
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
            <div className="px-4 pt-4 pb-3">
              <div className="text-uppercase text-black-50">Monthly Sales</div>
              <div className="d-flex align-items-center pt-3 font-weight-bold display-4">
                <FontAwesomeIcon
                  icon={['far', 'dot-circle']}
                  className="text-warning mr-2 font-size-md"
                />
                $8,489
                <span className="text-success pl-2 font-size-md">+ 54</span>
              </div>
            </div>
            <Chart
              options={chartsSmall1AOptions}
              series={chartsSmall1AData}
              type="area"
              height={150}
            />
          </Card>
        </Col>
        <Col md="4" lg="12" xl="4">
          <Card className="card-box mb-5">
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
            <div className="px-4 pt-4 pb-3">
              <div className="text-uppercase text-black-50">Last 10 Orders</div>
              <div className="d-flex align-items-center pt-3 font-weight-bold display-4">
                <FontAwesomeIcon
                  icon={['fas', 'arrow-up']}
                  className="text-success mr-2 font-size-md"
                />
                $
                <span>
                  <CountUp
                    start={0}
                    end={1.54}
                    duration={6}
                    delay={2}
                    separator=""
                    decimals={3}
                    decimal=","
                  />
                </span>
                <span className="text-danger pl-2 font-size-md">- 20%</span>
              </div>
            </div>
            <div>
              <Chart
                options={chartsSmall1BOptions}
                series={chartsSmall1BData}
                type="bar"
                height={142}
              />
            </div>
          </Card>
        </Col>
        <Col md="4" lg="12" xl="4">
          <Card className="card-box mb-5">
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
            <div className="px-4 pt-4 pb-3">
              <div className="text-uppercase text-black-50">
                2020 Total Sales
              </div>
              <div className="d-flex align-items-center pt-3 font-weight-bold display-4">
                <FontAwesomeIcon
                  icon={['fas', 'chevron-down']}
                  className="text-danger mr-2 font-size-md"
                />
                $9,324
                <span className="text-info pl-2 font-size-md">+ 56</span>
              </div>
            </div>
            <div>
              <Chart
                options={chartsSmall1COptions}
                series={chartsSmall1CData}
                type="area"
                height={142}
              />
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
