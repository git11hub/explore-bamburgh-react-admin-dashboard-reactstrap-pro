import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row,
  Col,
  CardBody,
  Card,
  CardHeader,
  Badge,
  ListGroup,
  ListGroupItem,
  UncontrolledTooltip,
  Button
} from 'reactstrap';

import PerfectScrollbar from 'react-perfect-scrollbar';

import stock2 from '../../../assets/images/stock-photos/stock-2.jpg';
import stock3 from '../../../assets/images/stock-photos/stock-3.jpg';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar5 from '../../../assets/images/avatars/avatar5.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col xl="6">
          <Card className="card-box mb-5">
            <CardHeader className="bg-secondary">
              <div className="card-header--title">
                <small className="d-block text-uppercase mt-1">Blogs</small>
                <b>Latest articles</b>
              </div>
              <div className="card-header--actions">
                <Button
                  tag="a"
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  size="sm"
                  className="w-auto px-4 py-0 border-0 d-30"
                  color="primary">
                  View all
                </Button>
              </div>
            </CardHeader>
            <div className="scroll-area-lg shadow-overflow">
              <PerfectScrollbar options={{ wheelPropagation: false }}>
                <ListGroup flush>
                  <ListGroupItem className="py-4">
                    <div className="d-flex flex-column flex-sm-row align-items-start">
                      <div>
                        <Card className="card-transparent mb-3 mb-sm-0">
                          <a
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="card-img-wrapper rounded">
                            <div className="img-wrapper-overlay">
                              <div className="overlay-btn-wrapper">
                                <div className="rounded-circle d-40 mx-auto d-flex align-items-center justify-content-center">
                                  <FontAwesomeIcon
                                    icon={['fas', 'plus-circle']}
                                    className="font-size-lg"
                                  />
                                </div>
                              </div>
                            </div>
                            <img
                              alt="..."
                              className="card-img-top rounded"
                              src={stock3}
                              style={{ width: 170 }}
                            />
                          </a>
                        </Card>
                      </div>
                      <div className="pl-0 pl-sm-4">
                        <div className="mb-3 font-size-xxl font-weight-bold">
                          <a href="#/" onClick={(e) => e.preventDefault()}>
                            Bamburgh React Admin Dashboard with Reactstrap PRO
                          </a>
                        </div>
                        <div className="d-flex font-size-sm mb-3 opacity-7">
                          <FontAwesomeIcon
                            icon={['far', 'clock']}
                            className="mr-1"
                          />
                          <span>17 May 2020</span>
                        </div>
                        <p className="font-size-lg text-black-50">
                          This admin template is a complete frontend solution
                          for easy-building applications or presentation
                          websites. It&#39;s fully responsive and designed by
                          professional UI&#x2F;UX designers and developers.
                        </p>
                        <div className="mt-3">
                          <Button
                            color="primary"
                            className="btn-pill px-4 hover-scale-sm"
                            size="sm"
                            href="#/"
                            onClick={(e) => e.preventDefault()}>
                            Learn more
                          </Button>
                        </div>
                      </div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem className="py-4">
                    <div className="d-flex flex-column flex-sm-row align-items-start">
                      <div>
                        <Card className="card-transparent mb-3 mb-sm-0">
                          <a
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="card-img-wrapper rounded">
                            <div className="img-wrapper-overlay">
                              <div className="overlay-btn-wrapper">
                                <div className="rounded-circle d-40 mx-auto d-flex align-items-center justify-content-center">
                                  <FontAwesomeIcon
                                    icon={['fas', 'plus-circle']}
                                    className="font-size-lg"
                                  />
                                </div>
                              </div>
                            </div>
                            <img
                              alt="..."
                              className="card-img-top rounded"
                              src={stock2}
                              style={{ width: 170 }}
                            />
                          </a>
                        </Card>
                      </div>
                      <div className="pl-0 pl-sm-4">
                        <div className="mb-3 font-size-xxl font-weight-bold">
                          <a href="#/" onClick={(e) => e.preventDefault()}>
                            Bamburgh React Admin Dashboard with Reactstrap PRO
                          </a>
                        </div>
                        <div className="d-flex font-size-sm mb-3 opacity-7">
                          <FontAwesomeIcon
                            icon={['far', 'clock']}
                            className="mr-1"
                          />
                          <span>17 May 2020</span>
                        </div>
                        <p className="font-size-lg text-black-50">
                          This admin template is a complete frontend solution
                          for easy-building applications or presentation
                          websites. It&#39;s fully responsive and designed by
                          professional UI&#x2F;UX designers and developers.
                        </p>
                        <div className="mt-3">
                          <Button
                            color="primary"
                            className="btn-pill px-4 hover-scale-sm"
                            size="sm"
                            href="#/"
                            onClick={(e) => e.preventDefault()}>
                            Learn more
                          </Button>
                        </div>
                      </div>
                    </div>
                  </ListGroupItem>
                </ListGroup>
              </PerfectScrollbar>
            </div>
            <div className="card-footer bg-white text-center p-3">
              <Button
                color="facebook"
                className="btn-icon d-40 p-0 hover-scale-lg rounded-circle"
                id="facebookTooltip2000">
                <FontAwesomeIcon
                  icon={['fab', 'facebook']}
                  className="font-size-lg"
                />
              </Button>
              <UncontrolledTooltip target="facebookTooltip2000">
                Facebook
              </UncontrolledTooltip>
              <Button
                color="dribbble"
                className="btn-icon d-40 p-0 hover-scale-lg rounded-circle mx-2"
                id="dribbbleTooltip2000">
                <FontAwesomeIcon
                  icon={['fab', 'dribbble']}
                  className="font-size-lg"
                />
              </Button>
              <UncontrolledTooltip target="dribbbleTooltip2000">
                Dribbble
              </UncontrolledTooltip>
              <Button
                color="twitter"
                className="btn-icon d-40 p-0 hover-scale-lg rounded-circle"
                id="twitterTooltip2000">
                <FontAwesomeIcon
                  icon={['fab', 'twitter']}
                  className="font-size-lg"
                />
              </Button>
              <UncontrolledTooltip target="twitterTooltip2000">
                Twitter
              </UncontrolledTooltip>
            </div>
          </Card>
        </Col>
        <Col xl="6">
          <Card className="card-box mb-5">
            <CardHeader className="bg-secondary">
              <div className="card-header--title">
                <small className="d-block text-uppercase mt-1">Scrolling</small>
                <b>Composed text cards</b>
              </div>
              <div className="card-header--actions">
                <Button
                  tag="a"
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  size="sm"
                  className="btn-icon border-0 p-0 d-30"
                  color="primary">
                  <FontAwesomeIcon icon={['fas', 'plus']} />
                </Button>
              </div>
            </CardHeader>
            <div className="scroll-area-lg shadow-overflow">
              <PerfectScrollbar options={{ wheelPropagation: false }}>
                <CardBody>
                  <div className="d-flex justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper avatar-icon-lg mr-3">
                        <Badge color="danger" className="badge-circle">
                          Offline
                        </Badge>
                        <div className="avatar-icon rounded">
                          <img alt="..." src={avatar7} />
                        </div>
                      </div>
                      <div>
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="font-weight-bold"
                          title="...">
                          Kate Winchester
                        </a>
                        <span className="text-black-50 d-block">
                          Freelance Designer, Mutual Inc.
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="rounded-pill bg-neutral-success text-success px-3 py-1 h-auto font-size-sm">
                        Successful
                      </span>
                    </div>
                  </div>
                  <p className="text-black-50 mb-0">
                    From its medieval origins to the digital era, learn
                    everything there is to know about the ubiquitous lorem ipsum
                    passage learn everything there is.
                  </p>
                </CardBody>
                <div className="divider" />
                <CardBody>
                  <div className="d-flex justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper avatar-icon-lg mr-3">
                        <Badge color="success" className="badge-circle">
                          Online
                        </Badge>
                        <div className="avatar-icon rounded">
                          <img alt="..." src={avatar1} />
                        </div>
                      </div>
                      <div>
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="font-weight-bold"
                          title="...">
                          Solomon Mora
                        </a>
                        <span className="text-black-50 d-block">
                          <FontAwesomeIcon
                            icon={['far', 'clock']}
                            className="opacity-7 mr-1"
                          />
                          2 days ago
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="rounded-pill bg-neutral-warning text-warning px-3 py-1 h-auto font-size-sm">
                        Pending
                      </span>
                    </div>
                  </div>
                  <p className="text-black-50">
                    The purpose of lorem ipsum is to create a natural looking
                    block of text (sentence, paragraph, page, etc.) that doesn't
                    distract from the layout.
                  </p>
                  <p className="text-black-50 mb-0">
                    A practice not without controversy, laying out pages with
                    meaningless filler text can be very useful when the focus is
                    meant to be on design, not content.
                  </p>
                </CardBody>
                <div className="divider" />
                <CardBody>
                  <div className="d-flex justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper avatar-icon-lg mr-3">
                        <Badge
                          color="success"
                          className="badge-circle"
                          title="User Online">
                          Online
                        </Badge>
                        <div className="avatar-icon rounded">
                          <img alt="..." src={avatar5} />
                        </div>
                      </div>
                      <div>
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="font-weight-bold"
                          title="...">
                          Milly Dougherty
                        </a>
                        <span className="text-black-50 d-block">
                          <FontAwesomeIcon
                            icon={['far', 'calendar-alt']}
                            className="opacity-7 mr-1"
                          />
                          15 August 2021
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="rounded-pill bg-neutral-first text-first px-3 py-1 h-auto font-size-sm font-weight-bold">
                        Investigation
                      </span>
                    </div>
                  </div>
                  <p className="text-black-50 mb-0">
                    The purpose of lorem ipsum is to create a natural looking
                    block of text from the layout laying out pages with
                    meaningless filler.
                  </p>
                </CardBody>
                <div className="divider" />
                <CardBody>
                  <div className="d-flex justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper avatar-icon-lg mr-3">
                        <Badge
                          color="warning"
                          className="badge-position badge-position--bottom-center badge-circle-inner">
                          Idle
                        </Badge>
                        <div className="avatar-icon rounded">
                          <img alt="..." src={avatar3} />
                        </div>
                      </div>
                      <div>
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="font-weight-bold"
                          title="...">
                          Amy-Louise Mccaffrey
                        </a>
                        <span className="text-black-50 d-block">
                          <FontAwesomeIcon
                            icon={['far', 'clock']}
                            className="opacity-7 mr-1"
                          />
                          2 days ago
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="rounded-pill bg-neutral-danger text-danger px-3 py-1 h-auto font-size-sm font-weight-bold">
                        Declined
                      </span>
                    </div>
                  </div>
                  <p className="text-black-50 mb-0">
                    A practice not without controversy, laying out pages with
                    meaningless filler text can be very useful when the focus is
                    meant to be on design, not content.
                  </p>
                </CardBody>
                <div className="divider" />
              </PerfectScrollbar>
            </div>
            <div className="card-footer bg-white text-center p-3">
              <Button
                color="primary"
                className="btn-icon d-40 p-0 hover-scale-lg rounded-circle mr-2">
                <FontAwesomeIcon
                  icon={['far', 'question-circle']}
                  className="font-size-lg"
                />
              </Button>
              <Button
                color="primary"
                className="btn-icon d-40 p-0 hover-scale-lg rounded-circle">
                <FontAwesomeIcon
                  icon={['far', 'user-circle']}
                  className="font-size-lg"
                />
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
