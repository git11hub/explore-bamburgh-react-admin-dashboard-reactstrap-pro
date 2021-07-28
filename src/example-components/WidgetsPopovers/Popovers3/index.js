import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row,
  Col,
  CardBody,
  Card,
  UncontrolledPopover,
  Badge,
  ListGroup,
  ListGroupItem,
  UncontrolledTooltip,
  Button,
  Progress
} from 'reactstrap';

import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Button
          id="popoverContent1"
          outline
          color="primary"
          className="transition-none m-2">
          Example I
        </Button>
        <Button
          id="popoverContent2"
          outline
          color="primary"
          className="transition-none m-2">
          Example II
        </Button>
        <Button
          id="popoverContent3"
          outline
          color="primary"
          className="transition-none m-2">
          Example III
        </Button>
        <Button
          id="popoverContent4"
          outline
          color="primary"
          className="transition-none m-2">
          Example IV
        </Button>
        <Button
          id="popoverContent5"
          outline
          color="primary"
          className="transition-none m-2">
          Example V
        </Button>
        <Button
          id="popoverContent6"
          outline
          color="primary"
          className="transition-none m-2">
          Example VI
        </Button>
      </div>

      <UncontrolledPopover
        placement="top"
        trigger="legacy"
        target="popoverContent1"
        className="popover-custom-wrapper popover-custom-lg">
        <ListGroup flush className="text-left bg-transparent">
          <ListGroupItem className="rounded-top">
            <div className="align-box-row">
              <div>
                <div className="avatar-icon-wrapper avatar-icon-md">
                  <div className="avatar-icon rounded-circle">
                    <img alt="..." src={avatar2} />
                  </div>
                </div>
              </div>
              <div className="pl-2">
                <span className="pb-1 d-block">
                  <span className="font-weight-bold">Emma Taylor</span>
                  <small className="text-black-50 pl-1">
                    (em.taylor@uifort.com)
                  </small>
                </span>
                <Badge color="success">Active Account</Badge>
              </div>
            </div>
            <div className="alert alert-warning p-2 mb-1 mt-3 rounded">
              <div className="align-box-row">
                <div className="pl-2">
                  <FontAwesomeIcon icon={['far', 'bell']} />
                </div>
                <div className="pl-3">
                  <small>
                    <b className="d-block">Unpaid invoice</b>
                  </small>
                  <small>
                    This account will be disabled starting{' '}
                    <b>12 January 2021</b>.
                  </small>
                </div>
              </div>
            </div>
          </ListGroupItem>
          <ListGroupItem className="bg-transparent p-0">
            <div className="grid-menu grid-menu-2col">
              <Row className="no-gutters">
                <Col sm="6" className="py-3">
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'chart-bar']}
                        className="font-size-xxl text-info"
                      />
                    </div>
                    <div className="mt-2 line-height-sm">
                      <b className="font-size-lg">$9,693</b>
                      <span className="text-black-50 d-block">revenue</span>
                    </div>
                  </div>
                </Col>
                <Col sm="6" className="py-3">
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'user']}
                        className="font-size-xxl text-success"
                      />
                    </div>
                    <div className="mt-2 line-height-sm">
                      <b className="font-size-lg">2,345</b>
                      <span className="text-black-50 d-block">users</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </ListGroupItem>
          <ListGroupItem className="rounded-bottom p-2 text-center">
            <Button
              tag="a"
              href="#/"
              onClick={(e) => e.preventDefault()}
              color="facebook"
              className="m-2 d-40 p-0 btn-icon btn-animated-icon-sm">
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon icon={['fab', 'facebook']} />
              </span>
            </Button>
            <Button
              tag="a"
              href="#/"
              onClick={(e) => e.preventDefault()}
              color="dribbble"
              className="m-2 d-40 p-0 btn-icon btn-animated-icon-sm">
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon icon={['fab', 'dribbble']} />
              </span>
            </Button>
            <Button
              tag="a"
              href="#/"
              onClick={(e) => e.preventDefault()}
              color="twitter"
              className="m-2 d-40 p-0 btn-icon btn-animated-icon-sm">
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon icon={['fab', 'twitter']} />
              </span>
            </Button>
          </ListGroupItem>
        </ListGroup>
      </UncontrolledPopover>

      <UncontrolledPopover
        placement="top"
        trigger="legacy"
        target="popoverContent2"
        className="popover-custom-wrapper popover-custom-lg">
        <ListGroup flush className="text-left bg-transparent">
          <ListGroupItem>
            <div className="align-box-row">
              <div className="align-self-start">
                <div className="bg-premium-dark text-center text-white font-size-lg d-40 rounded-circle">
                  <FontAwesomeIcon icon={['far', 'lightbulb']} />
                </div>
              </div>
              <div className="pl-3">
                <b>Blinded by desire</b>
                <p className="text-black-50 mt-1 mb-0">
                  A wonderful serenity has taken possession.
                </p>
                <div className="timeline-list mt-3">
                  <div className="timeline-item timeline-item-icon">
                    <div className="timeline-item--content">
                      <div className="timeline-item--icon-wrapper bg-danger text-white">
                        <FontAwesomeIcon icon={['far', 'gem']} />
                      </div>
                      <h4 className="timeline-item--label mb-2 font-weight-bold">
                        1998
                      </h4>
                      <p>
                        Bill Clinton's presidential scandal makes it online.
                      </p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-item--content">
                      <div className="timeline-item--icon" />
                      <h4 className="timeline-item--label mb-2 font-weight-bold">
                        Business investor meeting
                        <Badge color="neutral-info" className="text-info ml-2">
                          New
                        </Badge>
                      </h4>
                      <p>
                        Mosaic, the first graphical browser, is introduced to
                        the average consumer.
                      </p>
                      <div className="mt-3">
                        <Button size="sm" color="primary">
                          Submit Report
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ListGroupItem>
        </ListGroup>
        <div className="card-footer bg-light p-3 text-center">
          <Button
            tag="a"
            href="#/"
            onClick={(e) => e.preventDefault()}
            color="second">
            <span className="btn-wrapper--icon">
              <FontAwesomeIcon icon={['far', 'question-circle']} />
            </span>
            <span className="btn-wrapper--label">View details</span>
          </Button>
        </div>
      </UncontrolledPopover>

      <UncontrolledPopover
        placement="top"
        trigger="legacy"
        target="popoverContent3"
        className="popover-custom-wrapper popover-custom-lg">
        <CardBody>
          <div className="chat-wrapper">
            <div className="chat-item p-2 mb-2">
              <div className="align-box-row">
                <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                  <div className="avatar-icon rounded border-0">
                    <img alt="..." src={avatar7} />
                  </div>
                </div>
                <div>
                  <div className="chat-box bg-first text-white">
                    <p>Bye for now, talk to you later.</p>
                  </div>
                  <small className="mt-2 d-block text-black-50">
                    <FontAwesomeIcon
                      icon={['far', 'clock']}
                      className="mr-1 opacity-5"
                    />
                    11:01 AM | Yesterday
                  </small>
                </div>
              </div>
            </div>
            <div className="chat-item chat-item-reverse p-2 mb-2">
              <div className="align-box-row flex-row-reverse">
                <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                  <div className="avatar-icon rounded border-0">
                    <img alt="..." src={avatar3} />
                  </div>
                </div>
                <div>
                  <div className="chat-box bg-first text-white">
                    <p>Almost forgot about your tasks.</p>
                    <p>
                      <b>Check the links below:</b>
                    </p>
                    <Card className="bg-premium-dark p-2 mt-3 mb-2">
                      <div className="text-center py-2">
                        <Button
                          tag="a"
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          color="link"
                          className="m-1 p-0 btn-icon bg-grow-early d-inline-block text-center text-white font-sizelgxl d-40 rounded-circle"
                          id="MenuExampleTooltip18">
                          <FontAwesomeIcon icon={['far', 'bell']} />
                        </Button>
                        <UncontrolledTooltip target="MenuExampleTooltip18">
                          Menu Example
                        </UncontrolledTooltip>
                        <Button
                          tag="a"
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          color="link"
                          className="m-1 p-0 btn-icon bg-ripe-malin d-inline-block text-center text-white font-size-lg d-40 rounded-circle"
                          title="Menu Example">
                          <FontAwesomeIcon icon={['far', 'lightbulb']} />
                        </Button>
                        <Button
                          tag="a"
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          color="link"
                          className="m-1 p-0 btn-icon bg-plum-plate d-inline-block text-center text-white font-size-lg d-40 rounded-circle"
                          title="Menu Example">
                          <FontAwesomeIcon icon={['far', 'user']} />
                        </Button>
                      </div>
                    </Card>
                  </div>
                  <small className="mt-2 d-block text-black-50">
                    <FontAwesomeIcon
                      icon={['far', 'clock']}
                      className="mr-1 opacity-5"
                    />
                    11:03 AM | Yesterday
                  </small>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
        <div className="divider" />
        <div className="card-footer bg-white p-3 text-center d-block">
          <Button
            tag="a"
            href="#/"
            onClick={(e) => e.preventDefault()}
            color="primary"
            size="sm">
            <span className="btn-wrapper--icon">
              <FontAwesomeIcon icon={['far', 'file-alt']} />
            </span>
            <span className="btn-wrapper--label">View History</span>
          </Button>
        </div>
      </UncontrolledPopover>

      <UncontrolledPopover
        placement="top"
        trigger="legacy"
        target="popoverContent4"
        popperClassName="popover-custom-wrapper popover-custom-lg">
        <ListGroup flush className="text-left bg-transparent">
          <ListGroupItem className="rounded-top">
            <div className="align-box-row">
              <div>
                <div className="avatar-icon-wrapper avatar-icon-md">
                  <div className="avatar-icon rounded-circle">
                    <img alt="..." src={avatar2} />
                  </div>
                </div>
              </div>
              <div className="pl-2">
                <span className="pb-1 d-block font-weight-bold">
                  Bryan York
                </span>
                <small className="pb-1 text-black-50 d-block">
                  Bryan's description can go here...
                </small>
                <div className="divider my-2" />
                <small className="text-black-50">
                  Deadline: <b className="text-danger">12 July 2029</b>
                </small>
              </div>
            </div>
          </ListGroupItem>
          <ListGroupItem className="bg-transparent py-2">
            <div className="align-box-row mb-1">
              <div>
                <small className="font-weight-bold">Orders</small>
              </div>
              <div className="ml-auto">
                <div className="font-weight-bold text-success">348</div>
              </div>
            </div>
            <Progress
              className="progress-bar-rounded progress-bar-sm progress-animated-alt"
              color="success"
              value="43">
              43%
            </Progress>
            <div className="align-box-row progress-bar--label mt-1 text-muted">
              <small className="text-dark">0</small>
              <small className="ml-auto">100%</small>
            </div>
          </ListGroupItem>
        </ListGroup>
        <div className="card-footer bg-white p-2 text-center d-block">
          <Button
            tag="a"
            href="#/"
            onClick={(e) => e.preventDefault()}
            size="sm"
            color="success"
            className="m-2">
            <span className="btn-wrapper--icon">
              <FontAwesomeIcon icon={['fas', 'cog']} />
            </span>
            <span className="btn-wrapper--label">Refresh</span>
          </Button>
          <Button
            tag="a"
            href="#/"
            onClick={(e) => e.preventDefault()}
            size="sm"
            color="danger"
            className="m-2">
            <span className="btn-wrapper--icon">
              <FontAwesomeIcon icon={['fas', 'times']} />
            </span>
            <span className="btn-wrapper--label">Remove</span>
          </Button>
        </div>
      </UncontrolledPopover>

      <UncontrolledPopover
        placement="top"
        trigger="legacy"
        target="popoverContent5"
        className="popover-custom-wrapper popover-custom-lg"
        popperClassName="popover-second shadow-lg border-0">
        <div className="py-3 text-center">
          <div className="m-3 d-inline-block text-center">
            <a
              href="#/"
              onClick={(e) => e.preventDefault()}
              color="link"
              className="p-0 bg-ripe-malin d-inline-block text-center text-white font-size-xl d-50 rounded border-0 btn-icon mb-2 hover-scale-rounded">
              <FontAwesomeIcon icon={['far', 'gem']} className="font-size-lg" />
            </a>
            <div className="d-block text-white-50">Tasks</div>
          </div>
          <div className="m-3 d-inline-block text-center">
            <a
              href="#/"
              onClick={(e) => e.preventDefault()}
              color="link"
              className="p-0 bg-grow-early d-inline-block text-center text-white font-size-xl d-50 rounded border-0 btn-icon mb-2 hover-scale-rounded">
              <FontAwesomeIcon
                icon={['far', 'user']}
                className="font-size-lg"
              />
            </a>
            <div className="d-block text-white-50">Users</div>
          </div>
          <div className="m-3 d-inline-block text-center">
            <a
              href="#/"
              onClick={(e) => e.preventDefault()}
              color="link"
              className="p-0 bg-arielle-smile d-inline-block text-center text-white font-size-xl d-50 rounded border-0 btn-icon mb-2 hover-scale-rounded">
              <FontAwesomeIcon
                icon={['far', 'chart-bar']}
                className="font-size-lg"
              />
            </a>
            <div className="d-block text-white-50">Issues</div>
          </div>
        </div>
        <div className="divider opacity-2 bg-white mb-1" />
        <div className="text-center">
          <Button
            tag="a"
            href="#/"
            onClick={(e) => e.preventDefault()}
            color="link"
            className="hover-scale-lg btn-link-light text-white">
            View more items
          </Button>
        </div>
      </UncontrolledPopover>

      <UncontrolledPopover
        placement="top"
        trigger="legacy"
        target="popoverContent6"
        hideArrow
        className="popover-custom-wrapper popover-custom-lg border-0">
        <div className="bg-midnight-bloom">
          <ListGroup flush className="text-left bg-transparent">
            <ListGroupItem className="bg-transparent">
              <div className="card-body p-2">
                <div className="align-box-row align-items-start">
                  <div className="font-weight-bold">
                    <small className="text-white-50 d-block mb-1 text-uppercase">
                      New Accounts
                    </small>
                    <span className="font-size-xxl mt-1 text-white">
                      586,356
                    </span>
                  </div>
                  <div className="ml-auto">
                    <div className="bg-white text-center text-success font-size-xl d-50 rounded-circle">
                      <FontAwesomeIcon icon={['far', 'lightbulb']} />
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <FontAwesomeIcon
                    icon={['fas', 'arrow-up']}
                    className="text-success"
                  />
                  <span className="text-white px-1">15.4%</span>
                  <span className="text-white-50">increase this month</span>
                </div>
              </div>
            </ListGroupItem>
          </ListGroup>
        </div>
      </UncontrolledPopover>
    </>
  );
}
