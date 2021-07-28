import React, { useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row,
  Col,
  CardBody,
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  TabContent,
  TabPane,
  Button,
  Progress
} from 'reactstrap';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar5 from '../../../assets/images/avatars/avatar5.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

export default function LivePreviewExample() {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      <Row>
        <Col xl="6">
          <Card className="card-box mb-5">
            <CardHeader>
              <div className="card-header--title">
                <b>Monthly targets</b>
                <small className="d-block text-capitalize mt-1">
                  Card with progress bars list items.
                </small>
              </div>
              <div className="card-header--actions">
                <div className="btn-group btn-group-sm" role="group">
                  <Button
                    className={clsx({ active: activeTab === '1' })}
                    onClick={() => {
                      toggle('1');
                    }}
                    color="primary">
                    Tab 1
                  </Button>
                  <Button
                    className={clsx({ active: activeTab === '2' })}
                    onClick={() => {
                      toggle('2');
                    }}
                    color="primary">
                    Tab 2
                  </Button>
                </div>
              </div>
            </CardHeader>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <ListGroup flush>
                  <ListGroupItem className="py-2">
                    <div className="align-box-row mb-1">
                      <div>
                        <div className="font-weight-bold">Orders</div>
                      </div>
                      <div className="ml-auto">
                        <div className="font-size-xl font-weight-bold text-success">
                          348
                        </div>
                      </div>
                    </div>
                    <Progress
                      className="progress-animated-alt"
                      color="success"
                      value="34">
                      34%
                    </Progress>
                    <div className="align-box-row mt-1 text-muted">
                      <small className="text-dark">0</small>
                      <div className="ml-auto">100%</div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem className="py-2">
                    <div className="align-box-row mb-1">
                      <div>
                        <div className="font-weight-bold">Sales</div>
                      </div>
                      <div className="ml-auto">
                        <div className="font-size-xl font-weight-bold text-danger">
                          <small>$</small>
                          2.3M
                        </div>
                      </div>
                    </div>
                    <Progress
                      className="progress-animated-alt"
                      color="danger"
                      value="39">
                      39%
                    </Progress>
                    <div className="align-box-row mt-1 text-muted">
                      <small className="text-dark">0</small>
                      <div className="ml-auto">100%</div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem className="py-2">
                    <div className="align-box-row mb-1">
                      <div>
                        <div className="font-weight-bold">Users</div>
                      </div>
                      <div className="ml-auto">
                        <div className="font-size-xl font-weight-bold text-info">
                          <small>#</small>
                          87
                        </div>
                      </div>
                    </div>
                    <Progress
                      className="progress-animated-alt"
                      color="info"
                      value="51">
                      51%
                    </Progress>
                    <div className="align-box-row mt-1 text-muted">
                      <small className="text-dark">0</small>
                      <div className="ml-auto">100%</div>
                    </div>
                  </ListGroupItem>
                </ListGroup>
              </TabPane>
              <TabPane tabId="2">
                <ListGroup flush>
                  <ListGroupItem>
                    <div className="align-box-row">
                      <div className="mr-4">
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="avatar-icon-wrapper avatar-icon-lg m-0">
                          <div className="dot-badge" />
                          <div className="avatar-icon">
                            <img alt="..." src={avatar7} />
                          </div>
                        </a>
                      </div>
                      <div className="flex-grow-1">
                        <Progress
                          className="progress-bar-rounded progress-animated-alt"
                          color="success"
                          value="61">
                          61%
                        </Progress>
                      </div>
                      <div className="line-height-sm text-center ml-4">
                        <small className="text-black-50 d-block text-uppercase">
                          Totals
                        </small>
                        <b className="font-size-lg text-success">
                          <small className="pr-1 text-black-50">$</small>
                          1,628
                        </b>
                      </div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem>
                    <div className="align-box-row">
                      <div className="mr-4">
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="avatar-icon-wrapper avatar-icon-lg m-0">
                          <div className="dot-badge" />
                          <div className="avatar-icon">
                            <img alt="..." src={avatar5} />
                          </div>
                        </a>
                      </div>
                      <div className="flex-grow-1">
                        <Progress
                          className="progress-animated-alt progress-bar-rounded"
                          color="info"
                          value="44">
                          44%
                        </Progress>
                      </div>
                      <div className="line-height-sm text-center ml-4">
                        <small className="text-black-50 d-block text-uppercase">
                          Totals
                        </small>
                        <b className="font-size-lg text-info">
                          <small className="text-black-50 pr-1">$</small>
                          7,389
                        </b>
                      </div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem>
                    <div className="align-box-row">
                      <div className="mr-4">
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="avatar-icon-wrapper avatar-icon-lg m-0">
                          <div className="dot-badge" />
                          <div className="avatar-icon">
                            <img alt="..." src={avatar1} />
                          </div>
                        </a>
                      </div>
                      <div className="flex-grow-1">
                        <Progress
                          className="progress-bar-rounded progress-animated-alt"
                          color="danger"
                          value="29">
                          29%
                        </Progress>
                      </div>
                      <div className="line-height-sm text-center ml-4">
                        <small className="text-black-50 d-block text-uppercase">
                          Totals
                        </small>
                        <b className="font-size-lg text-danger">
                          <small className="text-black-50 pr-1">$</small>
                          8,493
                        </b>
                      </div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem>
                    <div className="align-box-row">
                      <div className="mr-4">
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="avatar-icon-wrapper avatar-icon-lg m-0">
                          <div className="dot-badge" />
                          <div className="avatar-icon">
                            <img alt="..." src={avatar2} />
                          </div>
                        </a>
                      </div>
                      <div className="flex-grow-1">
                        <Progress
                          className="progress-bar-rounded progress-animated-alt"
                          color="warning"
                          value="38">
                          38%
                        </Progress>
                      </div>
                      <div className="line-height-sm text-center ml-4">
                        <small className="text-black-50 d-block text-uppercase">
                          Totals
                        </small>
                        <b className="font-size-lg text-warning">
                          <small className="text-black-50 pr-1">$</small>
                          2,594
                        </b>
                      </div>
                    </div>
                  </ListGroupItem>
                </ListGroup>
              </TabPane>
            </TabContent>

            <div className="card-footer bg-light p-4 text-center">
              <Button size="sm" color="second">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['far', 'question-circle']} />
                </span>
                <span className="btn-wrapper--label">View details</span>
              </Button>
            </div>
          </Card>
        </Col>
        <Col xl="6">
          <Card className="card-box mb-5">
            <ListGroupItem className="border-top-0 border-left-0 border-right-0 d-flex justify-content-between bg-light align-items-center">
              <div className="avatar-icon-wrapper avatar-icon-lg">
                <div className="avatar-icon rounded">
                  <img alt="..." src={avatar1} />
                </div>
              </div>
              <div className="flex-grow-1 pl-2">
                <h5 className="mt-0 font-weight-bold mb-1">Rubi Donnelly</h5>
                <p className="card-text mb-0">
                  This is a short profile bio description...
                </p>
              </div>
              <span className="pl-3">
                <Button size="sm" color="second" className="pl-2 pr-2">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fas', 'cog']} />
                  </span>
                </Button>
              </span>
            </ListGroupItem>
            <div className="card-header bg-white p-2">
              <div className="card-header--title">
                <Row>
                  <Col md="6">
                    <div className="p-2">
                      <Button
                        onClick={() => {
                          toggle('1');
                        }}
                        outline
                        color="primary"
                        className={clsx('btn-block btn-pill', {
                          active: activeTab === '1'
                        })}>
                        Earnings
                      </Button>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="p-2">
                      <Button
                        onClick={() => {
                          toggle('2');
                        }}
                        outline
                        color="primary"
                        className={clsx('btn-block btn-pill', {
                          active: activeTab === '2'
                        })}>
                        Sales
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <CardBody className="p-0">
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <Row className="mt-3">
                    <Col>
                      <div className="text-center">
                        <div>
                          <FontAwesomeIcon
                            icon={['far', 'keyboard']}
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
                            icon={['far', 'gem']}
                            className="font-size-xxl text-info"
                          />
                        </div>
                        <div className="mt-2 line-height-sm">
                          <b className="font-size-lg">$9,693</b>
                          <span className="text-black-50 d-block">revenue</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className="divider mt-3 mb-2" />
                  <div className="text-center pb-1">
                    <Button
                      tag="a"
                      color="primary"
                      className="m-3 p-0 d-inline-flex align-items-center justify-content-center text-center font-size-xxl d-70 rounded"
                      href="#/"
                      onClick={(e) => e.preventDefault()}>
                      <FontAwesomeIcon
                        icon={['far', 'chart-bar']}
                        className="font-size-xxl"
                      />
                    </Button>
                    <Button
                      tag="a"
                      color="success"
                      className="m-3 p-0 d-inline-flex align-items-center justify-content-center text-center font-size-xxl d-70 rounded"
                      href="#/"
                      onClick={(e) => e.preventDefault()}>
                      <FontAwesomeIcon
                        icon={['far', 'keyboard']}
                        className="font-size-xxl"
                      />
                    </Button>
                    <Button
                      tag="a"
                      color="danger"
                      className="m-3 p-0 d-inline-flex align-items-center justify-content-center text-center font-size-xxl d-70 rounded"
                      href="#/"
                      onClick={(e) => e.preventDefault()}>
                      <FontAwesomeIcon
                        icon={['far', 'lightbulb']}
                        className="font-size-xxl"
                      />
                    </Button>
                  </div>
                </TabPane>
                <TabPane tabId="2">
                  <Row className="mt-3">
                    <Col>
                      <div className="text-center">
                        <div>
                          <FontAwesomeIcon
                            icon={['far', 'user']}
                            className="font-size-xxl text-success"
                          />
                        </div>
                        <div className="mt-2 line-height-sm">
                          <b className="font-size-lg">565</b>
                          <span className="text-black-50 d-block">users</span>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className="text-center">
                        <div>
                          <FontAwesomeIcon
                            icon={['far', 'gem']}
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
                  <div className="divider mt-3 mb-2" />
                  <div className="text-center pb-1">
                    <Button
                      tag="a"
                      color="primary"
                      className="m-3 border-0 p-0 shadow-sm bg-sunny-morning d-inline-block text-center text-white font-size-xxl d-70 rounded"
                      href="#/"
                      onClick={(e) => e.preventDefault()}>
                      <FontAwesomeIcon
                        icon={['far', 'bell']}
                        className="font-size-xxl"
                      />
                    </Button>
                    <Button
                      tag="a"
                      color="primary"
                      className="m-3 border-0 p-0 shadow-sm bg-strong-bliss d-inline-block text-center text-white font-size-xxl d-70 rounded"
                      href="#/"
                      onClick={(e) => e.preventDefault()}>
                      <FontAwesomeIcon
                        icon={['far', 'gem']}
                        className="font-size-xxl"
                      />
                    </Button>
                    <Button
                      tag="a"
                      color="primary"
                      className="m-3 border-0 p-0 shadow-sm bg-night-sky d-inline-block text-center text-white font-size-xxl d-70 rounded"
                      href="#/"
                      onClick={(e) => e.preventDefault()}>
                      <FontAwesomeIcon
                        icon={['far', 'building']}
                        className="font-size-xxl"
                      />
                    </Button>
                  </div>
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
