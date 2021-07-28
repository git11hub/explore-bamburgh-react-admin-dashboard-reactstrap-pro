import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Button } from 'reactstrap';

import Chart from 'react-apexcharts';
import hero2 from '../../../assets/images/hero-bg/hero-2.jpg';

export default function LivePreviewExample() {
  const chartSparklinesLarge3AOptions = {
    stroke: {
      curve: 'smooth',
      width: [0, 4]
    },
    chart: {
      toolbar: {
        show: false
      }
    },
    colors: ['rgba(60, 68, 177, 0.3)', '#3c44b1'],
    fill: {
      opacity: 1
    },
    labels: [
      '01 Aug 2020',
      '02 Aug 2020',
      '03 Aug 2020',
      '04 Aug 2020',
      '05 Aug 2020',
      '06 Aug 2020',
      '07 Aug 2020',
      '08 Aug 2020',
      '09 Aug 2020',
      '10 Aug 2020',
      '11 Aug 2020',
      '12 Aug 2020'
    ],
    xaxis: {
      type: 'datetime'
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      strokeDashArray: '5',
      borderColor: 'rgba(125, 138, 156, 0.3)'
    },
    legend: {
      show: false
    }
  };
  const chartSparklinesLarge3AData = [
    {
      name: 'Income',
      type: 'column',
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
    },
    {
      name: 'Expenses',
      type: 'line',
      data: [231, 442, 335, 227, 433, 222, 117, 316, 242, 252, 162, 176]
    }
  ];

  const chartSparklinesLarge3BOptions = {
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
        startingShape: 'rounded',
        endingShape: 'rounded',
        columnWidth: '60%'
      }
    },
    colors: ['#1bc943'],
    fill: {
      opacity: 1
    },
    stroke: {
      color: '#1bc943',
      width: 3
    },
    legend: {
      show: false
    },
    markers: {
      size: 0
    },
    xaxis: {
      crosshairs: {
        width: 0
      }
    },
    yaxis: {
      min: 0
    }
  };
  const chartSparklinesLarge3BData = [
    {
      name: 'Orders',
      data: [47, 38, 56, 24, 43, 24, 56, 56, 24, 65]
    }
  ];

  const chartSparklinesLarge3COptions = {
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
        startingShape: 'rounded',
        endingShape: 'rounded',
        columnWidth: '60%'
      }
    },
    colors: ['#f83245'],
    fill: {
      opacity: 1
    },
    stroke: {
      color: '#f83245',
      width: 3
    },
    legend: {
      show: false
    },
    markers: {
      size: 0
    },
    xaxis: {
      crosshairs: {
        width: 0
      }
    },
    yaxis: {
      min: 0
    }
  };
  const chartSparklinesLarge3CData = [
    {
      name: 'Orders',
      data: [38, 43, 24, 56, 43, 24, 56, 35, 56, 65]
    }
  ];

  return (
    <>
      <Card className="card-box mb-5">
        <Row className="no-gutters">
          <Col xl="5">
            <div className="hero-wrapper bg-composed-wrapper bg-sunrise-purple h-100 rounded br-xl-right-0">
              <div className="flex-grow-1 w-100 d-flex align-items-center">
                <div
                  className="bg-composed-wrapper--image rounded br-xl-right-0"
                  style={{ backgroundImage: 'url(' + hero2 + ')' }}
                />
                <div className="bg-composed-wrapper--bg bg-second opacity-5 rounded br-xl-right-0" />
                <div className="bg-composed-wrapper--content p-5">
                  <div className="align-self-center px-4">
                    <div className="py-3">
                      <Card className="card-box shadow-lg border-success card-box-border-bottom rounded hover-scale-sm">
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
                        <div className="p-4 text-left">
                          <div className="display-3 text-success font-weight-bold">
                            $33.485
                          </div>
                          <div className="font-size-xxl font-weight-bold text-black">
                            Income
                          </div>
                        </div>
                        <div className="rounded-bottom overflow-hidden">
                          <Chart
                            options={chartSparklinesLarge3BOptions}
                            series={chartSparklinesLarge3BData}
                            type="area"
                            height={70}
                          />
                        </div>
                      </Card>
                    </div>
                    <div className="py-3">
                      <Card className="card-box shadow-lg border-danger card-box-border-bottom rounded hover-scale-sm">
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
                        <div className="p-4 text-left">
                          <div className="display-3 text-danger font-weight-bold">
                            $71.684
                          </div>
                          <div className="font-size-xxl font-weight-bold text-black">
                            Expenses
                          </div>
                        </div>
                        <div className="rounded-bottom overflow-hidden">
                          <Chart
                            options={chartSparklinesLarge3COptions}
                            series={chartSparklinesLarge3CData}
                            type="area"
                            height={70}
                          />
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xl="7">
            <div className="p-4">
              <div className="p-2">
                <h6 className="font-weight-bold font-size-xl mb-1 text-black">
                  Monthly Financial Status
                </h6>
                <p className="text-black-50 font-size-lg mb-0">
                  Check how you're doing financially for current month
                </p>
              </div>
            </div>
            <div className="divider" />
            <div>
              <Chart
                options={chartSparklinesLarge3AOptions}
                series={chartSparklinesLarge3AData}
                type="line"
                height={365}
              />
            </div>
            <div className="divider bg-dark opacity-1" />
            <div className="p-4 bg-secondary text-center">
              <Button color="primary" className="hover-scale-sm px-5">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['fas', 'download']} />
                </span>
                <span className="btn-wrapper--label">Create Report</span>
              </Button>
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
}
