import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Table, Col, Card, Badge, Button } from 'reactstrap';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';

import stock6 from '../../../assets/images/stock-photos/stock-7.jpg';

import { ArrowDownRight, ArrowUpRight } from 'react-feather';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col xl="6">
          <Card className="card-shadow-xxl card-box-hover-rise card-box-hover mb-5">
            <div className="card-img-wrapper">
              <div className="card-badges card-badges-bottom">
                <Badge pill color="warning">
                  Warning
                </Badge>
              </div>
              <div className="bg-composed-wrapper text-center bg-deep-blue border-0">
                <div className="bg-composed-img-4 bg-composed-wrapper--image rounded-top" />
                <div className="bg-composed-wrapper--image bg-second opacity-3 rounded-top" />
                <div className="bg-composed-wrapper--content text-light p-5">
                  <h4 className="display-4 font-weight-bold mb-2">
                    Bamburgh React Admin Dashboard with Reactstrap PRO
                  </h4>
                  <p className="opacity-6 font-size-lg mb-4">
                    Browse through the live previews to see just how powerful
                    this admin template really is!
                  </p>
                  <Button
                    color="danger"
                    className="text-nowrap px-4 text-uppercase font-size-sm">
                    <small className="font-weight-bold">Contact us</small>
                  </Button>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive-md">
                <Table
                  hover
                  borderless
                  className="table-alternate text-nowrap text-left mb-0">
                  <thead className="thead-light">
                    <tr>
                      <th className="pt-0" style={{ width: '40%' }}>
                        Employee
                      </th>
                      <th className="pt-0 text-center">Status</th>
                      <th className="pt-0 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar-icon-wrapper mr-2">
                            <div className="avatar-icon">
                              <img alt="..." src={avatar2} />
                            </div>
                          </div>
                          <div>
                            <a
                              href="#/"
                              onClick={(e) => e.preventDefault()}
                              className="font-weight-bold text-black"
                              title="...">
                              Shanelle Wynn
                            </a>
                            <span className="text-black-50 d-block">
                              UI Engineer, Apple Inc.
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <Badge color="warning" className="h-auto py-0 px-3">
                          Pending
                        </Badge>
                      </td>
                      <td className="text-center">
                        <Button size="sm" color="neutral-first">
                          Chat
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar-icon-wrapper mr-2">
                            <div className="avatar-icon">
                              <img alt="..." src={avatar1} />
                            </div>
                          </div>
                          <div>
                            <a
                              href="#/"
                              onClick={(e) => e.preventDefault()}
                              className="font-weight-bold text-black"
                              title="...">
                              Beck Simpson
                            </a>
                            <span className="text-black-50 d-block">
                              Frontend Developer
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <Badge color="success" className="h-auto py-0 px-3">
                          Completed
                        </Badge>
                      </td>
                      <td className="text-center">
                        <Button size="sm" color="neutral-first">
                          Chat
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar-icon-wrapper mr-2">
                            <div className="avatar-icon">
                              <img alt="..." src={avatar3} />
                            </div>
                          </div>
                          <div>
                            <a
                              href="#/"
                              onClick={(e) => e.preventDefault()}
                              className="font-weight-bold text-black"
                              title="...">
                              Regan Norris
                            </a>
                            <span className="text-black-50 d-block">
                              Senior Project Manager
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <Badge color="danger" className="h-auto py-0 px-3">
                          Declined
                        </Badge>
                      </td>
                      <td className="text-center">
                        <Button size="sm" color="neutral-first">
                          Chat
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </Card>
        </Col>
        <Col xl="6">
          <Card className="card-shadow-xxl card-box-hover-rise card-box-hover mb-5">
            <div className="bg-composed-wrapper card-img-wrapper h-240px">
              <div className="card-badges card-badges-bottom">
                <Badge pill color="warning">
                  New Profile
                </Badge>
              </div>
              <img
                alt="..."
                className="card-img-top img-fit-container"
                src={stock6}
              />
            </div>
            <div className="card-body">
              <div className="table-responsive-md">
                <Table
                  hover
                  borderless
                  className="table-alternate text-nowrap text-left mb-1">
                  <thead className="thead-light">
                    <tr>
                      <th className="pt-0" style={{ width: '40%' }}>
                        Order
                      </th>
                      <th className="pt-0 text-right">Status</th>
                      <th className="pt-0 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-neutral-first text-first">
                            <ArrowDownRight />
                          </div>
                          <div>
                            <div className="font-size-sm font-weight-bold">
                              Paypal Withdraw
                            </div>
                            <div className="font-size-sm opacity-7">
                              19 March 2020
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <div>
                          <div className="font-size-sm font-weight-bold">
                            39FJDSHE84H
                          </div>
                          <div className="font-size-sm text-danger d-flex align-items-center justify-content-end">
                            <Badge
                              color="danger"
                              className="mr-1 border-0 badge-circle">
                              Withdraw
                            </Badge>
                            Deposit
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <Button
                          color="neutral-danger"
                          className="shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                          <FontAwesomeIcon
                            icon={['fas', 'times']}
                            className="font-size-sm"
                          />
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-neutral-first text-first">
                            <ArrowDownRight />
                          </div>
                          <div>
                            <div className="font-size-sm font-weight-bold">
                              Bank Withdraw
                            </div>
                            <div className="font-size-sm opacity-7">
                              18 March 2020
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <div>
                          <div className="font-size-sm font-weight-bold">
                            29ASDH76FD
                          </div>
                          <div className="font-size-sm text-danger d-flex align-items-center justify-content-end">
                            <Badge
                              color="danger"
                              className="mr-1 border-0 badge-circle">
                              Withdraw
                            </Badge>
                            Deposit
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <Button
                          color="neutral-danger"
                          className="shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                          <FontAwesomeIcon
                            icon={['fas', 'times']}
                            className="font-size-sm"
                          />
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-neutral-success text-success">
                            <ArrowUpRight />
                          </div>
                          <div>
                            <div className="font-size-sm font-weight-bold">
                              Held Funds
                            </div>
                            <div className="font-size-sm opacity-7">
                              17 March 2020
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <div>
                          <div className="font-size-sm font-weight-bold">
                            54GDSA98HT
                          </div>
                          <div className="font-size-sm text-warning d-flex align-items-center justify-content-end">
                            <Badge
                              color="warning"
                              className="mr-1 border-0 badge-circle">
                              Hold
                            </Badge>
                            Hold
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <Button
                          color="neutral-danger"
                          className="shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                          <FontAwesomeIcon
                            icon={['fas', 'times']}
                            className="font-size-sm"
                          />
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-neutral-success text-success">
                            <ArrowUpRight />
                          </div>
                          <div>
                            <div className="font-size-sm font-weight-bold">
                              Fiat deposit
                            </div>
                            <div className="font-size-sm opacity-7">
                              16 Feb 2020
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <div>
                          <div className="font-size-sm font-weight-bold">
                            54XHGSA34GJ
                          </div>
                          <div className="font-size-sm text-success d-flex align-items-center justify-content-end">
                            <Badge
                              color="success"
                              className="mr-1 border-0 badge-circle">
                              Deposit
                            </Badge>
                            Deposit
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <Button
                          color="neutral-danger"
                          className="shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                          <FontAwesomeIcon
                            icon={['fas', 'times']}
                            className="font-size-sm"
                          />
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
