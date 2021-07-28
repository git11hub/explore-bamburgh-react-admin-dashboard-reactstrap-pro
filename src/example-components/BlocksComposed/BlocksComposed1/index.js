import React from 'react';

import { Row, Col, Card, CardHeader, Button, Progress } from 'reactstrap';

import Chart from 'react-apexcharts';
export default function LivePreviewExample() {
  const chartComposed1Options = {
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
    colors: ['#3c44b1', '#4191ff'],
    fill: {
      opacity: 1,
      colors: ['#3c44b1', '#4191ff']
    },
    grid: {
      strokeDashArray: '5',
      borderColor: 'rgba(125, 138, 156, 0.3)'
    },
    stroke: {
      show: true,
      width: 3,
      colors: ['#3c44b1', '#4191ff']
    },
    legend: {
      show: false
    },
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
  };
  const chartComposed1Data = [
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
        <CardHeader className="border-0">
          <div className="card-header--title py-2 font-size-lg">
            Sales Statistics
          </div>
        </CardHeader>
        <div className="divider" />
        <div className="px-4 m-0">
          <Chart
            options={chartComposed1Options}
            series={chartComposed1Data}
            type="area"
            height={238}
          />
        </div>
        <div className="bg-neutral-dark mt-2 text-center">
          <div className="btn-group btn-group-sm m-4" role="group">
            <Button color="primary" active>
              Last week
            </Button>
            <Button color="primary">Last month</Button>
          </div>
        </div>
        <div className="p-4">
          <h6 className="font-weight-bold font-size-lg mb-1 text-black">
            Performance
          </h6>
          <p className="text-black-50 mb-0">
            Portfolio performance for selected period.
          </p>
        </div>
        <div className="divider" />
        <Row className="no-gutters">
          <Col lg="6">
            <div className="p-4">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <div className="font-weight-bold">Orders</div>
                <div className="font-size-lg font-weight-bold text-danger">
                  345
                </div>
              </div>
              <div>
                <Progress className="progress-sm" color="danger" value="65" />
                <div className="align-box-row progress-bar--label mt-2 text-muted">
                  <div>Target</div>
                  <div className="ml-auto">100%</div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div className="p-4">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <div className="font-weight-bold">Customers</div>
                <div className="font-size-lg font-weight-bold text-warning">
                  435
                </div>
              </div>
              <div>
                <Progress className="progress-sm" color="warning" value="44" />
                <div className="align-box-row progress-bar--label mt-2 text-muted">
                  <div>Target</div>
                  <div className="ml-auto">100%</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
}
