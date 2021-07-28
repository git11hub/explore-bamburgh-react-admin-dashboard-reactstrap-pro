import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row,
  Col,
  Card,
  Badge,
  Button,
  UncontrolledDropdown,
  Progress,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';

import avatar2 from '../../../assets/images/avatars/avatar2.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col lg="6">
          <Card className="card-box mb-5 p-4">
            <UncontrolledDropdown className="card-tr-actions">
              <DropdownToggle
                color="link"
                className="btn-link-primary p-0 font-size-xl text-dark">
                <FontAwesomeIcon
                  icon={['fas', 'ellipsis-h']}
                  className="font-size-lg"
                />
              </DropdownToggle>
              <DropdownMenu
                right
                className="dropdown-menu-xl overflow-hidden p-0">
                <div className="grid-menu grid-menu-2col">
                  <Row className="no-gutters">
                    <Col sm="6">
                      <Button
                        outline
                        color="secondary"
                        className="border-0 w-100 btn-transition-none rounded-0 shadow-none py-4 px-1">
                        <FontAwesomeIcon
                          icon={['far', 'bell']}
                          className="h2 d-block mx-auto mb-2 mt-1 text-success"
                        />
                        <div className="font-weight-bold text-black">
                          Reports
                        </div>
                        <div className="font-size-md mb-1 text-black-50">
                          Monthly Stats
                        </div>
                      </Button>
                    </Col>
                    <Col sm="6">
                      <Button
                        outline
                        color="secondary"
                        className="border-0 w-100 btn-transition-none rounded-0 shadow-none py-4 px-1">
                        <FontAwesomeIcon
                          icon={['far', 'file-excel']}
                          className="h2 d-block mx-auto mb-2 mt-1 text-success"
                        />
                        <div className="font-weight-bold text-black">
                          Statistics
                        </div>
                        <div className="font-size-md mb-1 text-black-50">
                          Customers stats
                        </div>
                      </Button>
                    </Col>
                    <Col sm="6">
                      <Button
                        outline
                        color="secondary"
                        className="border-0 w-100 btn-transition-none rounded-0 shadow-none py-4 px-1">
                        <FontAwesomeIcon
                          icon={['far', 'eye']}
                          className="h2 d-block mx-auto mb-2 mt-1 text-success"
                        />
                        <div className="font-weight-bold text-black">
                          Projects
                        </div>
                        <div className="font-size-md mb-1 text-black-50">
                          Manage servers
                        </div>
                      </Button>
                    </Col>
                    <Col sm="6">
                      <Button
                        outline
                        color="secondary"
                        className="border-0 w-100 btn-transition-none rounded-0 shadow-none py-4 px-1">
                        <FontAwesomeIcon
                          icon={['far', 'chart-bar']}
                          className="h2 d-block mx-auto mb-2 mt-1 text-success"
                        />
                        <div className="font-weight-bold text-black">Tasks</div>
                        <div className="font-size-md mb-1 text-black-50">
                          Pending items
                        </div>
                      </Button>
                    </Col>
                  </Row>
                </div>
              </DropdownMenu>
            </UncontrolledDropdown>
            <div className="d-flex align-items-center mb-3">
              <div
                className="avatar-icon-wrapper rounded-circle mr-3"
                title="Online">
                <Badge
                  color="success"
                  className="badge-position badge-position--bottom-center badge-circle">
                  Online
                </Badge>
                <div className="rounded-circle overflow-hidden d-100 bg-neutral-danger font-size-lg text-center font-weight-bold text-danger d-flex justify-content-center flex-column">
                  <span>KA</span>
                </div>
              </div>
              <div className="w-100">
                <a
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="font-weight-bold font-size-lg"
                  title="...">
                  Kris Alexander
                </a>
                <span className="text-black-50 d-block">
                  Project Manager, Apple Inc.
                </span>
                <div className="d-flex align-items-center pt-1">
                  <Progress
                    animated
                    className="progress-xs flex-grow-1 progress-bar-rounded"
                    color="warning"
                    value="42"
                  />
                  <div className="font-weight-bold text-black-50 pl-2">42%</div>
                </div>
              </div>
            </div>
            <p className="text-black-50 font-size-md mb-0">
              Creation timelines for the standard lorem ipsum passage vary, with
              some citing ...
            </p>
            <div className="my-4 font-size-sm p-3 bg-secondary rounded-sm">
              <div className="d-flex justify-content-between">
                <span className="font-weight-bold">Email:</span>
                <span className="text-black-50">krisa@example.com</span>
              </div>
              <div className="d-flex justify-content-between py-2">
                <span className="font-weight-bold">Job Description:</span>
                <span className="text-black-50">Project Manager</span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="font-weight-bold">Location:</span>
                <span className="text-black-50">Montreal, CA</span>
              </div>
            </div>
            <Button
              color="neutral-warning"
              className="btn-block text-uppercase font-size-xs">
              <small className="font-weight-bold">View Complete Profile</small>
            </Button>
          </Card>
        </Col>
        <Col lg="6">
          <Card className="card-box mb-5 p-4">
            <UncontrolledDropdown className="card-tr-actions">
              <DropdownToggle
                color="link"
                className="btn-link-primary p-0 font-size-xl text-dark">
                <FontAwesomeIcon
                  icon={['fas', 'ellipsis-h']}
                  className="font-size-lg"
                />
              </DropdownToggle>
              <DropdownMenu
                right
                className="dropdown-menu-xl overflow-hidden p-0">
                <div className="grid-menu grid-menu-2col">
                  <Row className="no-gutters">
                    <Col sm="6">
                      <Button
                        outline
                        color="secondary"
                        className="border-0 w-100 btn-transition-none rounded-0 shadow-none py-4 px-1">
                        <FontAwesomeIcon
                          icon={['far', 'bell']}
                          className="h2 d-block mx-auto mb-2 mt-1 text-success"
                        />
                        <div className="font-weight-bold text-black">
                          Reports
                        </div>
                        <div className="font-size-md mb-1 text-black-50">
                          Monthly Stats
                        </div>
                      </Button>
                    </Col>
                    <Col sm="6">
                      <Button
                        outline
                        color="secondary"
                        className="border-0 w-100 btn-transition-none rounded-0 shadow-none py-4 px-1">
                        <FontAwesomeIcon
                          icon={['far', 'file-excel']}
                          className="h2 d-block mx-auto mb-2 mt-1 text-success"
                        />
                        <div className="font-weight-bold text-black">
                          Statistics
                        </div>
                        <div className="font-size-md mb-1 text-black-50">
                          Customers stats
                        </div>
                      </Button>
                    </Col>
                    <Col sm="6">
                      <Button
                        outline
                        color="secondary"
                        className="border-0 w-100 btn-transition-none rounded-0 shadow-none py-4 px-1">
                        <FontAwesomeIcon
                          icon={['far', 'eye']}
                          className="h2 d-block mx-auto mb-2 mt-1 text-success"
                        />
                        <div className="font-weight-bold text-black">
                          Projects
                        </div>
                        <div className="font-size-md mb-1 text-black-50">
                          Manage servers
                        </div>
                      </Button>
                    </Col>
                    <Col sm="6">
                      <Button
                        outline
                        color="secondary"
                        className="border-0 w-100 btn-transition-none rounded-0 shadow-none py-4 px-1">
                        <FontAwesomeIcon
                          icon={['far', 'chart-bar']}
                          className="h2 d-block mx-auto mb-2 mt-1 text-success"
                        />
                        <div className="font-weight-bold text-black">Tasks</div>
                        <div className="font-size-md mb-1 text-black-50">
                          Pending items
                        </div>
                      </Button>
                    </Col>
                  </Row>
                </div>
              </DropdownMenu>
            </UncontrolledDropdown>
            <div className="d-flex align-items-center mb-3">
              <div className="avatar-icon-wrapper rounded-circle mr-3">
                <div className="d-block p-0 avatar-icon-wrapper m-0 d-100">
                  <div className="rounded-circle overflow-hidden">
                    <img alt="..." className="img-fluid" src={avatar2} />
                  </div>
                </div>
              </div>
              <div className="w-100">
                <a
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="font-weight-bold font-size-lg"
                  title="...">
                  Matteo Mcphee
                </a>
                <span className="text-black-50 d-block">
                  Frontend Developer, Stripe Inc.
                </span>
                <div className="d-flex align-items-center pt-1">
                  <Progress
                    animated
                    className="progress-xs flex-grow-1 progress-bar-rounded"
                    color="first"
                    value="31"
                  />
                  <div className="font-weight-bold text-black-50 pl-2">31%</div>
                </div>
              </div>
            </div>
            <p className="text-black-50 font-size-md mb-0">
              So how did the classical Latin become so incoherent? According to
              McClintock ...
            </p>
            <div className="font-size-sm p-3 my-4 bg-light rounded-sm">
              <div className="d-flex justify-content-between">
                <span className="font-weight-bold">Email:</span>
                <span className="text-black-50">matteo@mophee.com</span>
              </div>
              <div className="d-flex justify-content-between py-2">
                <span className="font-weight-bold">Job Description:</span>
                <span className="text-black-50">Frontend Developer</span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="font-weight-bold">Location:</span>
                <span className="text-black-50">London, UK</span>
              </div>
            </div>
            <Button
              block
              color="neutral-first"
              className="text-uppercase font-size-xs">
              <small className="font-weight-bold">View Complete Profile</small>
            </Button>
          </Card>
        </Col>
      </Row>
    </>
  );
}
