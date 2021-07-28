import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row,
  Col,
  Card,
  CustomInput,
  Badge,
  UncontrolledTooltip,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import { NavLink as NavLinkStrap } from 'reactstrap';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col lg="6">
          <Card className="card-box mb-5">
            <div className="card-tr-actions">
              <CustomInput
                type="checkbox"
                id="checkboxProjects6"
                className="p-0 mt-3"
                label="&nbsp;"
              />
            </div>
            <div className="d-flex align-items-center p-4">
              <div className="avatar-icon-wrapper rounded mr-4">
                <Badge
                  color="danger"
                  className="badge-position badge-position--top-right badge-circle-inner"
                  id="OfflineTooltip1">
                  Offline
                </Badge>
                <UncontrolledTooltip target="OfflineTooltip1">
                  Offline
                </UncontrolledTooltip>
                <div className="rounded overflow-hidden d-100 bg-neutral-first font-size-lg text-center font-weight-bold text-first d-flex justify-content-center flex-column">
                  <span>TY</span>
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
                <span className="text-black-50 d-block pb-1">
                  Project Manager, Apple Inc.
                </span>
                <div className="d-flex align-items-center pt-2">
                  <Button
                    size="sm"
                    color="primary"
                    className="mr-3 shadow-none">
                    Chat
                  </Button>
                  <Button size="sm" color="neutral-success">
                    View
                  </Button>
                </div>
              </div>
            </div>
            <div className="divider bg-dark opacity-3" />
            <Nav className="nav-lg flex-column p-0">
              <NavItem>
                <NavLinkStrap
                  tag="a"
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="align-box-row my-0 py-3 text-white-50">
                  <div className="mr-3">
                    <div className="bg-success btn-icon font-size-xl d-50 rounded-circle text-white">
                      <FontAwesomeIcon icon={['far', 'bell']} />
                    </div>
                  </div>
                  <div>
                    <div className="text-second font-weight-bold">Sales</div>
                    <span className="font-size-sm text-success">
                      15.4% increase
                    </span>
                  </div>
                  <div className="ml-auto align-self-center">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-right']}
                      className="font-size-sm opacity-6"
                    />
                  </div>
                </NavLinkStrap>
              </NavItem>
              <div className="divider bg-dark opacity-3" />
              <NavItem>
                <NavLinkStrap
                  tag="a"
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="align-box-row my-0 py-3 text-white-50">
                  <div className="mr-3">
                    <div className="bg-danger btn-icon font-size-xl d-50 rounded-circle text-white">
                      <FontAwesomeIcon icon={['far', 'object-group']} />
                    </div>
                  </div>
                  <div>
                    <div className="text-second font-weight-bold">Income</div>
                    <span className="font-size-sm text-danger">
                      5.2% decrease
                    </span>
                  </div>
                  <div className="ml-auto align-self-center">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-right']}
                      className="font-size-sm opacity-6"
                    />
                  </div>
                </NavLinkStrap>
              </NavItem>
              <div className="divider bg-dark opacity-3" />
              <NavItem className="rounded-bottom">
                <NavLinkStrap
                  tag="a"
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="align-box-row my-0 py-3 text-white-50 rounded-bottom">
                  <div className="mr-3">
                    <div className="bg-warning btn-icon font-size-xl d-50 rounded-circle text-white">
                      <FontAwesomeIcon icon={['far', 'chart-bar']} />
                    </div>
                  </div>
                  <div>
                    <div className="text-second font-weight-bold">Expenses</div>
                    <span className="font-size-sm text-warning">5.2% down</span>
                  </div>
                  <div className="ml-auto align-self-center">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-right']}
                      className="font-size-sm opacity-6"
                    />
                  </div>
                </NavLinkStrap>
              </NavItem>
            </Nav>
          </Card>
        </Col>
        <Col lg="6">
          <Card className="card-box text-white bg-primary mb-5">
            <div className="card-tr-actions">
              <CustomInput
                type="checkbox"
                id="checkboxProjects10"
                className="p-0 mt-3"
                label="&nbsp;"
              />
            </div>
            <div className="d-flex align-items-center p-4">
              <div className="avatar-icon-wrapper shadow-sm-dark rounded mr-4">
                <div className="d-block p-0 avatar-icon-wrapper m-0 d-100">
                  <div className="rounded overflow-hidden">
                    <img alt="..." className="img-fluid" src={avatar3} />
                  </div>
                </div>
              </div>
              <div className="w-100">
                <a
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="font-weight-bold text-white font-size-lg"
                  title="...">
                  Matteo Mcphee
                </a>
                <span className="text-white-50 d-block pb-1">
                  Frontend Developer, Stripe Inc.
                </span>
                <div className="d-flex align-items-center pt-2">
                  <Button
                    size="sm"
                    color="secondary"
                    className="mr-3 shadow-sm-dark">
                    Chat
                  </Button>
                  <Button size="sm" color="first" className="shadow-sm-dark">
                    View
                  </Button>
                </div>
              </div>
            </div>
            <div className="divider bg-white opacity-2" />
            <Nav className="nav-lg nav-transparent nav-transparent-alt flex-column p-0">
              <NavItem>
                <NavLinkStrap
                  tag="a"
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="align-box-row my-0 py-3 text-white-50">
                  <div className="mr-3">
                    <div className="bg-first btn-icon font-size-xl d-50 rounded shadow-sm-dark text-white">
                      <FontAwesomeIcon icon={['far', 'bell']} />
                    </div>
                  </div>
                  <div>
                    <div className="text-white font-weight-bold">Sales</div>
                    <span className="font-size-sm">15.4% increase</span>
                  </div>
                  <div className="ml-auto align-self-center">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-right']}
                      className="font-size-sm opacity-6"
                    />
                  </div>
                </NavLinkStrap>
              </NavItem>
              <div className="divider bg-white opacity-2" />
              <NavItem>
                <NavLinkStrap
                  tag="a"
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="align-box-row my-0 py-3 text-white-50">
                  <div className="mr-3">
                    <div className="bg-first btn-icon font-size-xl d-50 rounded shadow-sm-dark text-white">
                      <FontAwesomeIcon icon={['far', 'object-group']} />
                    </div>
                  </div>
                  <div>
                    <div className="text-white font-weight-bold">Income</div>
                    <span className="font-size-sm">5.2% decrease</span>
                  </div>
                  <div className="ml-auto align-self-center">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-right']}
                      className="font-size-sm opacity-6"
                    />
                  </div>
                </NavLinkStrap>
              </NavItem>
              <div className="divider bg-white opacity-2" />
              <NavItem className="rounded-bottom">
                <NavLinkStrap
                  tag="a"
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="align-box-row my-0 py-3 text-white-50 rounded-bottom">
                  <div className="mr-3">
                    <div className="bg-first btn-icon font-size-xl d-50 rounded shadow-sm-dark text-white">
                      <FontAwesomeIcon icon={['far', 'chart-bar']} />
                    </div>
                  </div>
                  <div>
                    <div className="text-white font-weight-bold">Expenses</div>
                    <span className="font-size-sm">5.2% down</span>
                  </div>
                  <div className="ml-auto align-self-center">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-right']}
                      className="font-size-sm opacity-6"
                    />
                  </div>
                </NavLinkStrap>
              </NavItem>
            </Nav>
          </Card>
        </Col>
      </Row>
    </>
  );
}
