import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row,
  Col,
  Card,
  CardHeader,
  UncontrolledTooltip,
  Button
} from 'reactstrap';

import Chart from 'react-apexcharts';
export default function LivePreviewExample() {
  const chartSparklinesLarge4Options = {
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
  const chartSparklinesLarge4Data = [
    {
      name: 'Sales',
      data: [32, 52, 45, 32, 54, 56, 28, 25, 36, 62]
    }
  ];

  return (
    <>
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
              options={chartSparklinesLarge4Options}
              series={chartSparklinesLarge4Data}
              type="area"
              height={158}
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
    </>
  );
}
