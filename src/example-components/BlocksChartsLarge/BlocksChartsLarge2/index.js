import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Button } from 'reactstrap';

import Chart from 'react-apexcharts';
export default function LivePreviewExample() {
  const chartsLarge2Options = {
    stroke: {
      curve: 'smooth',
      width: [0, 4]
    },
    chart: {
      toolbar: {
        show: false
      }
    },
    colors: ['rgba(65, 145, 255, 0.38)', '#4191ff'],
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
  const chartsLarge2Data = [
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

  return (
    <>
      <Card className="card-box p-4 text-center mb-5">
        <div className="card-tr-actions">
          <Button color="link" className="btn-link-primary p-0">
            <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
          </Button>
        </div>
        <h6 className="text-uppercase font-weight-bold mb-1 text-black">
          Total Revenue
        </h6>
        <Chart
          options={chartsLarge2Options}
          series={chartsLarge2Data}
          type="line"
          height={350}
        />

        <Col lg="8" className="mx-auto mt-2 p-0">
          <Row className="no-gutters mb-4 font-weight-bold text-uppercase font-size-sm text-center">
            <Col xs="6">
              Income
              <div className="divider bg-danger border-2 mt-2 h-auto border-danger" />
            </Col>
            <Col xs="6">
              Expenses
              <div className="divider bg-first border-2 mt-2 h-auto border-first" />
            </Col>
          </Row>
          <div className="text-center font-size-sm font-weight-bold text-black-50">
            18 February 2020
          </div>
          <Row className="no-gutters text-uppercase font-weight-bold text-center font-size-xl">
            <Col xs="6" className="text-danger">
              32.5%
            </Col>
            <Col xs="6" className="text-first">
              67.5%
            </Col>
          </Row>
          <div className="divider my-4" />
          <div className="text-center font-size-sm font-weight-bold text-black-50">
            18 February 2019
          </div>
          <Row className="no-gutters text-uppercase font-weight-bold text-center font-size-xl">
            <Col xs="6" className="text-danger">
              15.23%
            </Col>
            <Col xs="6" className="text-first">
              84.77%
            </Col>
          </Row>
        </Col>
      </Card>
    </>
  );
}
