import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row,
  Col,
  Card,
  Badge,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';
import { NavLink as NavLinkStrap } from 'reactstrap';
import Chart from 'react-apexcharts';
import CountUp from 'react-countup';
export default function LivePreviewExample() {
  const chartsLarge5Options = {
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
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    fill: {
      opacity: 0.85,
      colors: ['#f4772e', '#4191ff']
    },
    colors: ['#f4772e', '#4191ff'],
    legend: {
      show: false
    },
    grid: {
      strokeDashArray: '5',
      borderColor: 'rgba(125, 138, 156, 0.3)'
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
  const chartsLarge5Data = [
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
      <Card className="card-box mb-5 px-4 pt-4 text-center">
        <UncontrolledDropdown className="card-tr-actions">
          <DropdownToggle
            size="sm"
            color="link"
            className="btn-link-dark p-0 text-dark opacity-8">
            <FontAwesomeIcon
              icon={['fas', 'ellipsis-h']}
              className="font-size-lg"
            />
          </DropdownToggle>
          <DropdownMenu right className="dropdown-menu-lg overflow-hidden p-0">
            <Nav pills className=" flex-column p-3">
              <NavItem>
                <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                  <span>My Account</span>
                </NavLinkStrap>
              </NavItem>
              <NavItem>
                <NavLinkStrap
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  active>
                  <span>Profile settings</span>
                  <Badge color="first" className="ml-auto">
                    23
                  </Badge>
                </NavLinkStrap>
              </NavItem>
              <NavItem>
                <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                  <span>Active tasks</span>
                </NavLinkStrap>
              </NavItem>
            </Nav>
          </DropdownMenu>
        </UncontrolledDropdown>
        <div className="card-header-alt">
          <div className="font-weight-bold font-size-lg mb-0 text-black">
            Financial year
          </div>
          <p className="text-black-50">Expenses statistics to date</p>
        </div>
        <div className="divider mb-4 mt-3" />
        <h3 className="mb-0 display-3 mt-1 font-weight-bold">
          $
          <span className="pr-1">
            <CountUp
              start={0}
              end={458.695}
              duration={4}
              separator=""
              delay={3}
              decimals={3}
              decimal=","
              prefix=""
              suffix=""
            />
          </span>
        </h3>
        <div className="divider my-4" />
        <Row>
          <Col xs="6">
            <span className="opacity-6 pb-2">Current month</span>
            <div className="d-flex align-items-center justify-content-center">
              <span className="font-weight-bold font-size-lg">
                <small className="opacity-6 pr-1">$</small>
                46,362
              </span>
              <Badge color="neutral-danger" className="ml-2 text-danger">
                -8%
              </Badge>
            </div>
          </Col>
          <Col xs="6">
            <span className="opacity-6 pb-2">Last year</span>
            <div className="d-flex align-items-center justify-content-center">
              <span className="font-weight-bold font-size-lg">
                <small className="opacity-6 pr-1">$</small>
                34,546
              </span>
              <Badge color="neutral-success" className="text-success ml-2">
                +13%
              </Badge>
            </div>
          </Col>
        </Row>
        <div className="font-weight-bold font-size-lg mt-4 mb-2 text-black">
          Monthly report
        </div>
        <Chart
          options={chartsLarge5Options}
          series={chartsLarge5Data}
          type="bar"
          height={379}
        />
      </Card>
    </>
  );
}
