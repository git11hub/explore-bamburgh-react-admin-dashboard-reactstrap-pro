import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardHeader, Badge, ListGroup, Button } from 'reactstrap';

import CountUp from 'react-countup';
import Chart from 'react-apexcharts';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  CircularProgressbarWithChildren,
  buildStyles
} from 'react-circular-progressbar';
export default function LivePreviewExample() {
  const chartListsLarge3Options = {
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
  const chartListsLarge3Data = [
    {
      name: 'Net Profit',
      data: [2.3, 3.1, 4.0, 3.8, 5.1, 3.6, 4.0, 3.8, 5.1, 3.6, 3.2]
    },
    {
      name: 'Net Loss',
      data: [2.1, 2.1, 3.0, 2.8, 4.0, 3.8, 5.1, 3.6, 4.1, 2.6, 1.2]
    }
  ];

  return (
    <>
      <Card className="card-box mb-5">
        <CardHeader className="pr-2">
          <div className="card-header--title py-2 font-size-lg font-weight-bold">
            Top sellers
          </div>
          <div className="card-header--actions">
            <Button size="sm" color="neutral-primary" className="mr-3">
              View all
            </Button>
          </div>
        </CardHeader>
        <div className="px-4 pt-4 bg-secondary">
          <div className="align-box-row">
            <div className="font-weight-bold">
              <small className="text-black-50 d-block mt-2 mb-2 text-uppercase font-weight-bold">
                New Accounts
              </small>
              <span className="font-size-xxl ">26,248</span>
            </div>
            <div className="ml-auto">
              <div className="bg-white text-center text-primary font-size-xl d-50 rounded-circle">
                <FontAwesomeIcon icon={['far', 'lightbulb']} />
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
          <div>
            <Chart
              options={chartListsLarge3Options}
              series={chartListsLarge3Data}
              type="bar"
              height={130}
            />
          </div>
        </div>
        <div className="divider bg-dark opacity-3" />
        <div className="text-uppercase px-3 pt-3 pb-1 text-black-50">
          Top sellers
        </div>
        <div className="scroll-area-sm shadow-overflow">
          <PerfectScrollbar>
            <ListGroup flush>
              <li className="d-flex justify-content-between align-items-center py-2 pl-3 pr-4">
                <div className="d-flex align-items-center flex-grow-1">
                  <CircularProgressbarWithChildren
                    value={32}
                    styles={buildStyles({ rotation: 1 / 2 + 1 / 4 })}
                    strokeWidth={6}
                    className="circular-progress-xs circular-progress-danger justify-content-center d-flex">
                    <div className="bg-danger text-white mr-3 rounded-circle d-30 btn-icon mx-auto">
                      <FontAwesomeIcon
                        icon={['fas', 'chevron-down']}
                        className="font-size-xs"
                      />
                    </div>
                  </CircularProgressbarWithChildren>
                  <div className="pb-1 pl-3">
                    <a
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="font-weight-bold text-black"
                      title="...">
                      Shanelle Wynn
                    </a>
                    <div>
                      <Badge className="font-size-sm mt-1" color="neutral-dark">
                        168
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="text-black font-size-lg d-flex align-items-center">
                  <span className="opacity-6 pr-1">$</span>
                  <CountUp
                    start={0}
                    end={587}
                    duration={4}
                    separator=""
                    decimals={0}
                    decimal=","
                    prefix=""
                    suffix=""
                  />
                </div>
              </li>
              <li className="d-flex justify-content-between align-items-center py-2 pl-3 pr-4">
                <div className="d-flex align-items-center flex-grow-1">
                  <CircularProgressbarWithChildren
                    value={32}
                    styles={buildStyles({ rotation: 1 / 2 + 1 / 4 })}
                    strokeWidth={6}
                    className="circular-progress-xs circular-progress-warning justify-content-center d-flex">
                    <div className="bg-success text-white mr-3 rounded-circle d-30 btn-icon mx-auto">
                      <FontAwesomeIcon
                        icon={['fas', 'chevron-up']}
                        className="font-size-xs"
                      />
                    </div>
                  </CircularProgressbarWithChildren>
                  <div className="pb-1 pl-3">
                    <a
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="font-weight-bold text-black"
                      title="...">
                      Shawn Galloway
                    </a>
                    <div>
                      <Badge className="font-size-sm mt-1" color="neutral-dark">
                        567
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="text-black font-size-lg d-flex align-items-center">
                  <span className="opacity-6 pr-1">$</span>
                  <CountUp
                    start={0}
                    end={3463}
                    duration={4}
                    separator=""
                    decimals={0}
                    decimal=","
                    prefix=""
                    suffix=""
                  />
                </div>
              </li>
              <li className="d-flex justify-content-between align-items-center py-2 pl-3 pr-4">
                <div className="d-flex align-items-center flex-grow-1">
                  <CircularProgressbarWithChildren
                    value={32}
                    styles={buildStyles({ rotation: 1 / 2 + 1 / 4 })}
                    strokeWidth={6}
                    className="circular-progress-xs circular-progress-success justify-content-center d-flex">
                    <div className="bg-success text-white mr-3 rounded-circle d-30 btn-icon mx-auto">
                      <FontAwesomeIcon
                        icon={['fas', 'arrow-up']}
                        className="font-size-xs"
                      />
                    </div>
                  </CircularProgressbarWithChildren>
                  <div className="pb-1 pl-3">
                    <a
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="font-weight-bold text-black"
                      title="...">
                      Latisha Allison
                    </a>
                    <div>
                      <Badge className="font-size-sm mt-1" color="neutral-dark">
                        937
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="text-black font-size-lg d-flex align-items-center">
                  <span className="opacity-6 pr-1">$</span>
                  <CountUp
                    start={0}
                    end={762}
                    duration={4}
                    separator=""
                    decimals={0}
                    decimal=","
                    prefix=""
                    suffix=""
                  />
                </div>
              </li>
              <li className="d-flex justify-content-between align-items-center py-2 pl-3 pr-4">
                <div className="d-flex align-items-center flex-grow-1">
                  <CircularProgressbarWithChildren
                    value={32}
                    styles={buildStyles({ rotation: 1 / 2 + 1 / 4 })}
                    strokeWidth={6}
                    className="circular-progress-xs circular-progress-success justify-content-center d-flex">
                    <div className="bg-warning text-white mr-3 rounded-circle d-30 btn-icon mx-auto">
                      <FontAwesomeIcon
                        icon={['far', 'dot-circle']}
                        className="font-size-xs"
                      />
                    </div>
                  </CircularProgressbarWithChildren>
                  <div className="pb-1 pl-3">
                    <a
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="font-weight-bold text-black"
                      title="...">
                      Lilly-Mae White
                    </a>
                    <div>
                      <Badge className="font-size-sm mt-1" color="neutral-dark">
                        367
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="text-black font-size-lg d-flex align-items-center">
                  <span className="opacity-6 pr-1">$</span>
                  <CountUp
                    start={0}
                    end={5743}
                    duration={4}
                    separator=""
                    decimals={0}
                    decimal=","
                    prefix=""
                    suffix=""
                  />
                </div>
              </li>
              <li className="d-flex justify-content-between align-items-center py-2 pl-3 pr-4">
                <div className="d-flex align-items-center flex-grow-1">
                  <CircularProgressbarWithChildren
                    value={32}
                    styles={buildStyles({ rotation: 1 / 2 + 1 / 4 })}
                    strokeWidth={6}
                    className="circular-progress-xs circular-progress-warning justify-content-center d-flex">
                    <div className="bg-success text-white mr-3 rounded-circle d-30 btn-icon mx-auto">
                      <FontAwesomeIcon
                        icon={['fas', 'chevron-up']}
                        className="font-size-xs"
                      />
                    </div>
                  </CircularProgressbarWithChildren>
                  <div className="pb-1 pl-3">
                    <a
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="font-weight-bold text-black"
                      title="...">
                      Julie Prosser
                    </a>
                    <div>
                      <Badge className="font-size-sm mt-1" color="neutral-dark">
                        283
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="text-black font-size-lg d-flex align-items-center">
                  <span className="opacity-6 pr-1">$</span>
                  <CountUp
                    start={0}
                    end={3463}
                    duration={4}
                    separator=""
                    decimals={0}
                    decimal=","
                    prefix=""
                    suffix=""
                  />
                </div>
              </li>
              <li className="d-flex justify-content-between align-items-center py-2 pl-3 pr-4">
                <div className="d-flex align-items-center flex-grow-1">
                  <CircularProgressbarWithChildren
                    value={32}
                    styles={buildStyles({ rotation: 1 / 2 + 1 / 4 })}
                    strokeWidth={6}
                    className="circular-progress-xs circular-progress-danger justify-content-center d-flex">
                    <div className="bg-danger text-white mr-3 rounded-circle d-30 btn-icon mx-auto">
                      <FontAwesomeIcon
                        icon={['fas', 'chevron-down']}
                        className="font-size-xs"
                      />
                    </div>
                  </CircularProgressbarWithChildren>
                  <div className="pb-1 pl-3">
                    <a
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="font-weight-bold text-black"
                      title="...">
                      Amin Hamer
                    </a>
                    <div>
                      <Badge className="font-size-sm mt-1" color="neutral-dark">
                        793
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="text-black font-size-lg d-flex align-items-center">
                  <span className="opacity-6 pr-1">$</span>
                  <CountUp
                    start={0}
                    end={1587}
                    duration={6}
                    delay={2}
                    separator=""
                    decimals={0}
                    decimal=","
                  />
                </div>
              </li>
            </ListGroup>
          </PerfectScrollbar>
        </div>
      </Card>
    </>
  );
}
