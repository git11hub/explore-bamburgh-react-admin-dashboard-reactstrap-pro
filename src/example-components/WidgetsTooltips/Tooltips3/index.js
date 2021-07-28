import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row,
  Col,
  Badge,
  ListGroup,
  ListGroupItem,
  UncontrolledTooltip,
  Button,
  Progress
} from 'reactstrap';

import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Button
          id="tooltipContent1"
          color="second"
          className="transition-none m-2">
          Example I
        </Button>
        <Button
          id="tooltipContent2"
          color="second"
          className="transition-none m-2">
          Example II
        </Button>
        <Button
          id="tooltipContent3"
          color="second"
          className="transition-none m-2">
          Example III
        </Button>
        <Button
          id="tooltipContent4"
          color="second"
          className="transition-none m-2">
          Example IV
        </Button>
        <Button
          id="tooltipContent5"
          color="second"
          className="transition-none m-2">
          Example V
        </Button>
        <Button
          id="tooltipContent6"
          color="second"
          className="transition-none m-2">
          Example VI
        </Button>
      </div>

      <UncontrolledTooltip
        trigger="legacy"
        placement="top"
        container="body"
        target="tooltipContent1"
        popperClassName="tooltip-xl tooltip-secondary">
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
      </UncontrolledTooltip>

      <UncontrolledTooltip
        trigger="legacy"
        placement="top"
        container="body"
        target="tooltipContent2"
        popperClassName="tooltip-lg tooltip-secondary">
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
                  <span className="font-weight-bold">Ana Deleon</span>
                  <small className="d-block text-black-50">
                    (anna@uifort.com)
                  </small>
                </span>
                <Badge color="success">Active</Badge>
              </div>
            </div>
          </ListGroupItem>
          <ListGroupItem className="bg-transparent p-0">
            <div className="grid-menu grid-menu-2col">
              <Row className="no-gutters">
                <Col sm="6" className="py-3">
                  <div className="line-height-sm text-center">
                    <b className="font-size-lg">2,345</b>
                    <span className="text-black-50 d-block">users</span>
                  </div>
                </Col>
                <Col sm="6" className="py-3">
                  <div className="line-height-sm text-center">
                    <b className="font-size-lg">$9,693</b>
                    <span className="text-black-50 d-block">revenue</span>
                  </div>
                </Col>
              </Row>
            </div>
          </ListGroupItem>
        </ListGroup>
      </UncontrolledTooltip>

      <UncontrolledTooltip
        trigger="legacy"
        placement="top"
        container="body"
        target="tooltipContent3"
        popperClassName="tooltip-lg tooltip-secondary">
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
                  Emma Taylor
                </span>
                <small className="pb-1 text-black-50 d-block">
                  Emma's bio description here...
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
      </UncontrolledTooltip>

      <UncontrolledTooltip
        trigger="legacy"
        placement="top"
        container="body"
        target="tooltipContent4"
        popperClassName="tooltip-lg tooltip-light">
        <ListGroup flush className="text-left bg-transparent">
          <ListGroupItem className="rounded-top">
            <div className="align-box-row">
              <div>
                <div className="avatar-icon-wrapper avatar-icon-md">
                  <div className="avatar-icon rounded-circle">
                    <img alt="..." src={avatar3} />
                  </div>
                </div>
              </div>
              <div className="pl-3">
                <span className="pb-1 d-block font-weight-bold">John Doe</span>
                <small className="pb-1 text-black-50 d-block">
                  John's bio description here...
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
              color="danger"
              value="54">
              54%
            </Progress>
            <div className="align-box-row progress-bar--label mt-1 text-muted">
              <small className="text-dark">0</small>
              <small className="ml-auto">100%</small>
            </div>
          </ListGroupItem>
        </ListGroup>
        <div className="card-footer bg-white p-3 text-center d-block">
          <Button
            tag="a"
            href="#/"
            onClick={(e) => e.preventDefault()}
            size="sm"
            color="success"
            className="mr-1">
            <FontAwesomeIcon icon={['fas', 'cog']} className="mr-1" />
            Refresh
          </Button>
          <Button
            tag="a"
            href="#/"
            onClick={(e) => e.preventDefault()}
            size="sm"
            color="danger"
            className="ml-1">
            <FontAwesomeIcon icon={['fas', 'times']} className="mr-1" />
            Remove
          </Button>
        </div>
      </UncontrolledTooltip>

      <UncontrolledTooltip
        trigger="legacy"
        placement="top"
        container="body"
        target="tooltipContent5"
        popperClassName="tooltip-lg tooltip-dark border-0">
        <div className="px-3 py-3 text-center">
          <div className="m-3 d-inline-block text-center">
            <a
              href="#/"
              onClick={(e) => e.preventDefault()}
              color="link"
              className="p-0 bg-ripe-malin d-inline-block text-center text-white font-size-xl d-50 rounded border-0 btn-icon hover-scale-rounded mb-2">
              <FontAwesomeIcon icon={['far', 'gem']} className="font-size-lg" />
            </a>
            <div className="d-block text-white-50">Tasks</div>
          </div>
          <div className="m-3 d-inline-block text-center">
            <a
              href="#/"
              onClick={(e) => e.preventDefault()}
              color="link"
              className="p-0 bg-grow-early d-inline-block text-center text-white font-size-xl d-50 rounded border-0 btn-icon hover-scale-rounded mb-2">
              <FontAwesomeIcon
                icon={['far', 'building']}
                className="font-size-lg"
              />
            </a>
            <div className="d-block text-white-50">Reports</div>
          </div>
          <div className="m-3 d-inline-block text-center">
            <a
              href="#/"
              onClick={(e) => e.preventDefault()}
              color="link"
              className="p-0 bg-arielle-smile d-inline-block text-center text-white font-size-xl d-50 rounded border-0 btn-icon hover-scale-rounded mb-2">
              <FontAwesomeIcon
                icon={['far', 'chart-bar']}
                className="font-size-lg"
              />
            </a>
            <div className="d-block text-white-50">Stats</div>
          </div>
        </div>
        <div className="divider opacity-2 bg-white mb-1" />
        <div className="text-center">
          <Button
            tag="a"
            href="#/"
            onClick={(e) => e.preventDefault()}
            color="link"
            className="btn-link-light text-white btn-transition-none">
            View more items
          </Button>
        </div>
      </UncontrolledTooltip>

      <UncontrolledTooltip
        trigger="legacy"
        placement="top"
        container="body"
        target="tooltipContent6"
        popperClassName="tooltip-lg tooltip-second border-0">
        <ListGroup flush className="text-left bg-transparent">
          <ListGroupItem className="bg-transparent">
            <div className="card-body p-2">
              <div className="align-box-row align-items-start">
                <div className="font-weight-bold">
                  <small className="text-white-50 d-block mb-1 text-uppercase">
                    New Accounts
                  </small>
                  <span className="font-size-xxl mt-1">586,356</span>
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
                <span className="text-success px-1">15.4%</span>
                <span className="text-white-50">increase this month</span>
              </div>
            </div>
          </ListGroupItem>
        </ListGroup>
      </UncontrolledTooltip>
    </>
  );
}
