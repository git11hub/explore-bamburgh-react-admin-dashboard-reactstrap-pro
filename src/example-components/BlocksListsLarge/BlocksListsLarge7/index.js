import React from 'react';

import {
  Row,
  Col,
  Card,
  CardHeader,
  Badge,
  ListGroup,
  ListGroupItem,
  Button,
  Progress
} from 'reactstrap';

import CountUp from 'react-countup';
import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../../assets/images/avatars/avatar4.jpg';
import avatar5 from '../../../assets/images/avatars/avatar5.jpg';

import logo1 from '../../../assets/images/stock-logos/discord-icon.svg';
import logo2 from '../../../assets/images/stock-logos/google-icon.svg';
import logo3 from '../../../assets/images/stock-logos/spotify-icon.svg';
import logo4 from '../../../assets/images/stock-logos/slack-icon.svg';
import logo5 from '../../../assets/images/stock-logos/pinterest-icon.svg';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col xl="5">
          <Card className="card-box mb-5">
            <CardHeader>
              <div className="card-header--title text-center">
                <small className="d-block text-uppercase mt-1">Estimates</small>
                <b>Products Roadmap</b>
              </div>
            </CardHeader>

            <ListGroup flush>
              <ListGroupItem
                tag="a"
                action
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="d-flex bg-white hover-scale-rounded align-items-center py-3">
                <div className="d-flex align-items-center">
                  <div className="avatar-icon mr-3 d-50">
                    <img className="img-fit-container" alt="..." src={logo1} />
                  </div>
                  <div>
                    <div className="font-weight-bold text-black">
                      Build React Interface
                    </div>
                    <div className="text-black-50">Development</div>
                  </div>
                </div>
                <div className="ml-auto">
                  <Badge
                    color="neutral-success"
                    className="text-success font-size-xs font-weight-normal py-1 h-auto px-3 badge-pill">
                    $3884
                  </Badge>
                </div>
              </ListGroupItem>
              <ListGroupItem
                tag="a"
                action
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="d-flex bg-white hover-scale-rounded align-items-center py-3">
                <div className="d-flex align-items-center">
                  <div className="avatar-icon mr-3 d-50">
                    <img className="img-fit-container" alt="..." src={logo2} />
                  </div>
                  <div>
                    <div className="font-weight-bold text-black">
                      Create Ads Campaign
                    </div>
                    <div className="text-black-50">Marketing</div>
                  </div>
                </div>
                <div className="ml-auto">
                  <Badge
                    color="neutral-warning"
                    className="text-warning font-size-xs font-weight-normal py-1 h-auto px-3 badge-pill">
                    $8362
                  </Badge>
                </div>
              </ListGroupItem>
              <ListGroupItem
                tag="a"
                action
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="d-flex bg-white hover-scale-rounded align-items-center py-3">
                <div className="d-flex align-items-center">
                  <div className="avatar-icon mr-3 d-50">
                    <img className="img-fit-container" alt="..." src={logo3} />
                  </div>
                  <div>
                    <div className="font-weight-bold text-black">
                      Resolve All Github Issues
                    </div>
                    <div className="text-black-50">Bugfixes</div>
                  </div>
                </div>
                <div className="ml-auto">
                  <Badge
                    color="neutral-success"
                    className="text-success font-size-xs font-weight-normal py-1 h-auto px-3 badge-pill">
                    $9385
                  </Badge>
                </div>
              </ListGroupItem>
              <ListGroupItem
                tag="a"
                action
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="d-flex bg-white hover-scale-rounded align-items-center py-3">
                <div className="d-flex align-items-center">
                  <div className="avatar-icon mr-3 d-50">
                    <img className="img-fit-container" alt="..." src={logo4} />
                  </div>
                  <div>
                    <div className="font-weight-bold text-black">
                      Build UI for Angular
                    </div>
                    <div className="text-black-50">Development</div>
                  </div>
                </div>
                <div className="ml-auto">
                  <Badge
                    color="neutral-success"
                    className="text-success font-size-xs font-weight-normal py-1 h-auto px-3 badge-pill">
                    $1964
                  </Badge>
                </div>
              </ListGroupItem>
              <ListGroupItem
                tag="a"
                action
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="d-flex bg-white hover-scale-rounded align-items-center py-3">
                <div className="d-flex align-items-center">
                  <div className="avatar-icon mr-3 d-50">
                    <img className="img-fit-container" alt="..." src={logo5} />
                  </div>
                  <div>
                    <div className="font-weight-bold text-black">
                      Create UI Designs
                    </div>
                    <div className="text-black-50">Marketing</div>
                  </div>
                </div>
                <div className="ml-auto">
                  <Badge
                    color="neutral-danger"
                    className="text-danger font-size-xs font-weight-normal py-1 h-auto px-3 badge-pill">
                    $5825
                  </Badge>
                </div>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
        <Col xl="7">
          <Card className="card-box mb-5">
            <CardHeader className="bg-light">
              <div className="card-header--title">
                <small className="d-block text-uppercase mt-1">Progress</small>
                <b>Users Analytics</b>
              </div>
              <div className="card-header--actions">
                <Badge pill color="dark">
                  Pending
                </Badge>
              </div>
            </CardHeader>
            <ListGroup flush>
              <ListGroupItem className="py-3">
                <Row className="no-gutters">
                  <Col xl="6" md="12" className="d-flex align-items-center">
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
                  </Col>
                  <Col
                    xl="6"
                    md="12"
                    className="pt-3 pt-xl-0 d-flex align-items-center">
                    <div className="align-box-row flex-grow-1">
                      <div className="d-flex flex-column flex-grow-1">
                        <div className="d-flex justify-content-between text-dark">
                          <div className="ml-auto">
                            <div className="font-weight-bold">
                              <CountUp
                                start={0}
                                end={583}
                                duration={4}
                                separator=""
                                decimals={0}
                                decimal=","
                                prefix=""
                                suffix=""
                              />
                            </div>
                          </div>
                        </div>
                        <Progress
                          className="progress-sm progress-bar-rounded"
                          color="primary"
                          value="52"
                        />
                      </div>
                      <Button
                        size="sm"
                        color="neutral-primary"
                        className="ml-4">
                        View
                      </Button>
                    </div>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem className="py-3">
                <Row className="no-gutters">
                  <Col xl="6" md="12" className="d-flex align-items-center">
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
                          Akeem Griffith
                        </a>
                        <span className="text-black-50 d-block">
                          Manager, Google Inc.
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col
                    xl="6"
                    md="12"
                    className="pt-3 pt-xl-0 d-flex align-items-center">
                    <div className="align-box-row flex-grow-1">
                      <div className="d-flex flex-column flex-grow-1">
                        <div className="d-flex justify-content-between text-dark">
                          <div className="ml-auto">
                            <div className="font-weight-bold">
                              <CountUp
                                start={0}
                                end={340}
                                duration={4}
                                separator=""
                                decimals={0}
                                decimal=","
                                prefix=""
                                suffix=""
                              />
                            </div>
                          </div>
                        </div>
                        <Progress
                          className="progress-bar-rounded progress-sm"
                          color="danger"
                          value="38"
                        />
                      </div>
                      <Button size="sm" color="neutral-danger" className="ml-4">
                        View
                      </Button>
                    </div>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem className="py-3">
                <Row className="no-gutters">
                  <Col xl="6" md="12" className="d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper mr-2">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar4} />
                        </div>
                      </div>
                      <div>
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Abigayle Hicks
                        </a>
                        <span className="text-black-50 d-block">
                          Project Manager, Spotify
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col
                    xl="6"
                    md="12"
                    className="pt-3 pt-xl-0 d-flex align-items-center">
                    <div className="align-box-row flex-grow-1">
                      <div className="d-flex flex-column flex-grow-1">
                        <div className="d-flex justify-content-between text-dark">
                          <div className="ml-auto">
                            <div className="font-weight-bold">
                              <CountUp
                                start={0}
                                end={473}
                                duration={4}
                                separator=""
                                decimals={0}
                                decimal=","
                                prefix=""
                                suffix=""
                              />
                            </div>
                          </div>
                        </div>
                        <Progress
                          className="progress-bar-rounded progress-sm"
                          color="warning"
                          value="34"
                        />
                      </div>
                      <Button
                        size="sm"
                        color="neutral-warning"
                        className="ml-4">
                        View
                      </Button>
                    </div>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem className="py-3">
                <Row className="no-gutters">
                  <Col xl="6" md="12" className="d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper mr-2">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar5} />
                        </div>
                      </div>
                      <div>
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Tyrell Macleod
                        </a>
                        <span className="text-black-50 d-block">
                          DevOps, Netflix
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col
                    xl="6"
                    md="12"
                    className="pt-3 pt-xl-0 d-flex align-items-center">
                    <div className="align-box-row flex-grow-1">
                      <div className="d-flex flex-column flex-grow-1">
                        <div className="d-flex justify-content-between text-dark">
                          <div className="ml-auto">
                            <div className="font-weight-bold">
                              <CountUp
                                start={0}
                                end={836}
                                duration={6}
                                delay={2}
                                separator=""
                                decimals={0}
                                decimal=","
                              />
                            </div>
                          </div>
                        </div>
                        <Progress
                          className="progress-bar-rounded progress-sm"
                          color="first"
                          value="83"
                        />
                      </div>
                      <Button size="sm" color="neutral-first" className="ml-4">
                        View
                      </Button>
                    </div>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem className="py-3">
                <Row className="no-gutters">
                  <Col xl="6" md="12" className="d-flex align-items-center">
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
                          Huw Conley
                        </a>
                        <span className="text-black-50 d-block">
                          Manager, Dribbble
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col
                    xl="6"
                    md="12"
                    className="pt-3 pt-xl-0 d-flex align-items-center">
                    <div className="align-box-row flex-grow-1">
                      <div className="d-flex flex-column flex-grow-1">
                        <div className="d-flex justify-content-between text-dark">
                          <div className="ml-auto">
                            <div className="font-weight-bold">
                              <CountUp
                                start={0}
                                end={236}
                                duration={6}
                                delay={2}
                                separator=""
                                prefix="+"
                                suffix="%"
                                decimals={0}
                                decimal=","
                              />
                            </div>
                          </div>
                        </div>
                        <Progress
                          className="progress-bar-rounded progress-sm"
                          color="success"
                          value="62"
                        />
                      </div>
                      <Button
                        size="sm"
                        color="neutral-success"
                        className="ml-4">
                        View
                      </Button>
                    </div>
                  </Col>
                </Row>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
}
