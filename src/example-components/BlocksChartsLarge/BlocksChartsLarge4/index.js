import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row,
  Col,
  CardBody,
  Card,
  CardHeader,
  Button,
  Progress
} from 'reactstrap';

import Chart from 'react-apexcharts';
export default function LivePreviewExample() {
  const chart29Options = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#3c44b1', 'rgba(60, 68, 177, 0.27)'],
    fill: {
      opacity: 0.85,
      colors: ['#3c44b1', 'rgba(60, 68, 177, 0.27)']
    },
    grid: {
      strokeDashArray: '5',
      borderColor: 'rgba(125, 138, 156, 0.3)'
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    legend: {
      show: false
    },
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
  };
  const chart29Data = [
    {
      name: 'Net Profit',
      data: [3.3, 3.1, 4.0, 5.8, 2.1, 3.6, 3.2]
    },
    {
      name: 'Net Loss',
      data: [2.1, 2.1, 2.8, 2.8, 4.3, 2.7, 1.4]
    }
  ];

  return (
    <>
      <Card className="card-box mb-5">
        <CardHeader>
          <div className="card-header--title">
            <h4 className="font-size-lg mb-0 py-2 font-weight-bold">
              Users list
            </h4>
          </div>
          <div className="card-header--actions">
            <Button size="sm" color="neutral-first">
              <span className="btn-wrapper--label">Actions</span>
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon
                  icon={['fas', 'chevron-down']}
                  className="opacity-8 font-size-xs"
                />
              </span>
            </Button>
          </div>
        </CardHeader>
        <CardBody>
          <Chart
            options={chart29Options}
            series={chart29Data}
            type="bar"
            height={280}
          />
          <Row>
            <Col md="6">
              <div className="p-3">
                <div className="mb-1 font-weight-bold">Orders</div>
                <Progress
                  animated
                  className="progress-xs progress-animated-alt"
                  color="primary"
                  value="34"
                />
                <div className="align-box-row progress-bar--label mt-1 text-muted">
                  <small className="text-dark">0</small>
                  <div className="ml-auto">100%</div>
                </div>
              </div>
            </Col>
            <Col md="6">
              <div className="p-3">
                <div className="mb-1 font-weight-bold">Sales</div>
                <Progress
                  animated
                  className="progress-xs progress-animated-alt"
                  color="success"
                  value="51"
                />
                <div className="align-box-row progress-bar--label mt-1 text-muted">
                  <small className="text-dark">0</small>
                  <div className="ml-auto">100%</div>
                </div>
              </div>
            </Col>
            <Col md="6">
              <div className="p-3">
                <div className="mb-1 font-weight-bold">Users</div>
                <Progress
                  animated
                  className="progress-xs progress-animated-alt"
                  color="warning"
                  value="29"
                />
                <div className="align-box-row progress-bar--label mt-1 text-muted">
                  <small className="text-dark">0</small>
                  <div className="ml-auto">100%</div>
                </div>
              </div>
            </Col>
            <Col md="6">
              <div className="p-3">
                <div className="mb-1 font-weight-bold">Customers</div>
                <Progress
                  animated
                  className="progress-xs progress-animated-alt"
                  color="danger"
                  value="76"
                />
                <div className="align-box-row progress-bar--label mt-1 text-muted">
                  <small className="text-dark">0</small>
                  <div className="ml-auto">100%</div>
                </div>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
}
