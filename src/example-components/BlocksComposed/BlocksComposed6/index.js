import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row,
  Col,
  Card,
  CardHeader,
  UncontrolledTooltip,
  Button,
  Progress
} from 'reactstrap';

import Chart from 'react-apexcharts';
import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar5 from '../../../assets/images/avatars/avatar5.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

export default function LivePreviewExample() {
  const chartComposed6Options = {
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
        columnWidth: '70%'
      }
    },
    stroke: {
      show: true,
      color: '#f4772e',
      curve: 'smooth',
      width: 2
    },
    fill: {
      color: '#f4772e',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.3,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0,
        stops: [0, 100]
      }
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
      'Sunday'
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
  const chartComposed6Data = [
    {
      name: 'Sales',
      data: [32, 52, 45, 32, 54, 56, 28, 25, 36, 62]
    }
  ];

  return (
    <>
      <Card className="card-box mb-5">
        <div className="px-4 px-xl-5 pb-1">
          <CardHeader className="border-0 d-block">
            <span className="text-uppercase py-xl-4 text-black d-block text-center font-weight-bold font-size-lg">
              Inventory
            </span>
          </CardHeader>
          <div className="rounded bg-secondary">
            <Row className="no-gutters">
              <Col md="6" className="p-3">
                <div className="text-center">
                  <FontAwesomeIcon
                    icon={['fas', 'lemon']}
                    className="font-size-xxl text-warning my-2"
                  />
                  <span className="text-black-50 d-block">Users</span>
                  <b className="font-size-xxl">2,345</b>
                </div>
              </Col>
              <Col md="6" className="p-3">
                <div className="text-center">
                  <FontAwesomeIcon
                    icon={['far', 'user']}
                    className="font-size-xxl text-success my-2"
                  />
                  <span className="text-black-50 d-block">Revenue</span>
                  <b className="font-size-xxl">$9,693</b>
                </div>
              </Col>
            </Row>
          </div>
          <CardHeader className="border-0 d-block">
            <span className="text-uppercase pt-4 pb-2 text-black d-block text-center font-weight-bold font-size-lg">
              Activity
            </span>
          </CardHeader>
          <div className="align-box-row">
            <div className="mr-4">
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="avatar-icon-wrapper avatar-icon-lg m-0"
                id="ViewDetailsTooltip7">
                <div className="dot-badge" />
                <div className="avatar-icon">
                  <img alt="..." src={avatar7} />
                </div>
              </a>
              <UncontrolledTooltip target="ViewDetailsTooltip7">
                View details
              </UncontrolledTooltip>
            </div>

            <div className="flex-grow-1">
              <Progress
                value="43"
                color="success"
                className="progress-bar-rounded">
                {' '}
                43%
              </Progress>
            </div>
            <div className="font-size-lg text-success line-height-sm text-center ml-4">
              $1,754
            </div>
          </div>
          <div className="align-box-row">
            <div className="mr-4">
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="avatar-icon-wrapper avatar-icon-lg m-0"
                id="ViewDetailsTooltip9">
                <div className="dot-badge" />
                <div className="avatar-icon">
                  <img alt="..." src={avatar5} />
                </div>
              </a>
              <UncontrolledTooltip target="ViewDetailsTooltip9">
                View details
              </UncontrolledTooltip>
            </div>

            <div className="flex-grow-1">
              <Progress
                value="61"
                color="info"
                className="progress-bar-rounded">
                61%
              </Progress>
            </div>
            <div className="font-size-lg text-info line-height-sm text-center ml-4">
              $7,428
            </div>
          </div>
          <div className="align-box-row">
            <div className="mr-4">
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="avatar-icon-wrapper avatar-icon-lg m-0"
                id="ViewDetailsTooltip11">
                <div className="dot-badge" />
                <div className="avatar-icon">
                  <img alt="..." src={avatar1} />
                </div>
              </a>
              <UncontrolledTooltip target="ViewDetailsTooltip11">
                View details
              </UncontrolledTooltip>
            </div>

            <div className="flex-grow-1">
              <Progress
                value="22"
                color="danger"
                className="progress-bar-rounded">
                22%
              </Progress>
            </div>
            <div className="font-size-lg text-danger line-height-sm text-center ml-4">
              $5,358
            </div>
          </div>
        </div>
        <div>
          <Chart
            options={chartComposed6Options}
            series={chartComposed6Data}
            type="area"
            height={175}
          />
        </div>
        <div className="p-4 d-block text-center">
          <Button
            tag="a"
            href="#/"
            onClick={(e) => e.preventDefault()}
            size="sm"
            color="success"
            id="RefreshTooltip1">
            <FontAwesomeIcon icon={['fas', 'cog']} spin />
          </Button>
          <UncontrolledTooltip target="RefreshTooltip1">
            Refresh
          </UncontrolledTooltip>
        </div>
      </Card>
    </>
  );
}
