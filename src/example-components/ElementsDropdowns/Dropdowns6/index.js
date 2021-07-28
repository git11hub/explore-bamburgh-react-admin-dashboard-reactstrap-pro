import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row,
  Col,
  Badge,
  ListGroup,
  ListGroupItem,
  Button,
  UncontrolledDropdown,
  Progress,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';

import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar5 from '../../../assets/images/avatars/avatar5.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <UncontrolledDropdown className="m-2">
          <DropdownToggle outline color="primary">
            Profile 1
          </DropdownToggle>
          <DropdownMenu right className="dropdown-menu-xxl p-0">
            <ListGroup flush className="text-left bg-transparent">
              <ListGroupItem className="rounded-top">
                <div className="align-box-row">
                  <div>
                    <div className="avatar-icon-wrapper avatar-icon-md">
                      <div className="avatar-icon rounded-circle">
                        <img alt="..." src={avatar5} />
                      </div>
                    </div>
                  </div>
                  <div className="pl-3">
                    <span className="pb-1 d-block font-weight-bold">
                      John Doe
                      <small className="d-block text-black-50">
                        (john@example.com)
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
              <ListGroupItem className="rounded-bottom p-3 text-center">
                <Button
                  tag="a"
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  color="facebook">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fab', 'facebook']} />
                  </span>
                </Button>
                <Button
                  tag="a"
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  color="dribbble"
                  className="mx-2">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fab', 'dribbble']} />
                  </span>
                </Button>
                <Button
                  tag="a"
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  color="twitter">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                  </span>
                </Button>
              </ListGroupItem>
            </ListGroup>
          </DropdownMenu>
        </UncontrolledDropdown>

        <UncontrolledDropdown className="m-2">
          <DropdownToggle outline color="primary">
            Profile 2
          </DropdownToggle>
          <DropdownMenu right className="dropdown-menu-xl p-0">
            <ListGroup flush className="text-left bg-transparent">
              <ListGroupItem className="rounded-top">
                <div className="align-box-row">
                  <div className="avatar-icon-wrapper avatar-icon-md">
                    <div className="avatar-icon rounded-circle">
                      <img alt="..." src={avatar2} />
                    </div>
                  </div>
                  <div className="pl-2">
                    <span className="pb-1 font-weight-bold d-block">
                      John Doe
                    </span>
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
                  className="progress-animated-alt progress-bar-rounded progress-sm"
                  color="success"
                  value="75"
                />
                <div className="align-box-row mt-1 text-muted">
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
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['fas', 'cog']} spin />
                </span>
                <span className="btn-wrapper--label">Refresh</span>
              </Button>
              <Button
                tag="a"
                href="#/"
                onClick={(e) => e.preventDefault()}
                size="sm"
                color="danger"
                className="ml-1">
                Remove
              </Button>
            </div>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
      <div className="divider my-3" />

      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <UncontrolledDropdown className="m-2">
          <DropdownToggle outline color="primary">
            Statistics Box
          </DropdownToggle>
          <DropdownMenu
            right
            className="dropdown-menu-lg bg-vicious-stance overflow-hidden p-0">
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
                      className="text-success pr-1"
                    />
                    <span className="text-white px-1">15.4%</span>
                    <span className="text-white-50">increase</span>
                  </div>
                </div>
              </ListGroupItem>
            </ListGroup>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    </>
  );
}
