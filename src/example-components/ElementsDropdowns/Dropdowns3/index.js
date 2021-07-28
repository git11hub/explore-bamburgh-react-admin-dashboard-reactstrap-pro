import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row,
  Col,
  UncontrolledTooltip,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <UncontrolledDropdown className="m-2">
          <DropdownToggle outline color="primary">
            Grid 1
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-xl p-0">
            <div className="grid-menu grid-menu-2col">
              <Row className="no-gutters">
                <Col sm="6" className="p-3">
                  <Button outline color="primary" className="border-0 w-100">
                    <span className="font-size-xxl d-block">
                      <FontAwesomeIcon icon={['far', 'bell']} />
                    </span>
                    <span>Primary</span>
                  </Button>
                </Col>
                <Col sm="6" className="p-3">
                  <Button outline color="info" className="border-0 w-100">
                    <span className="font-size-xxl d-block">
                      <FontAwesomeIcon icon={['far', 'chart-bar']} />
                    </span>
                    <span>Info</span>
                  </Button>
                </Col>
                <Col sm="6" className="p-3">
                  <Button outline color="success" className="border-0 w-100">
                    <span className="font-size-xxl d-block">
                      <FontAwesomeIcon icon={['far', 'lightbulb']} />
                    </span>
                    <span>Success</span>
                  </Button>
                </Col>
                <Col sm="6" className="p-3">
                  <Button outline color="danger" className="border-0 w-100">
                    <span className="font-size-xxl d-block">
                      <FontAwesomeIcon icon={['far', 'user']} />
                    </span>
                    <span>Danger</span>
                  </Button>
                </Col>
              </Row>
            </div>
          </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown className="m-2">
          <DropdownToggle outline color="primary">
            Grid 2
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-xl overflow-hidden p-0">
            <div className="grid-menu grid-menu-2col">
              <Row className="no-gutters">
                <Col sm="6">
                  <Button
                    outline
                    color="secondary"
                    className="border-0 w-100 btn-transition-none rounded-0 shadow-none py-4 px-1">
                    <FontAwesomeIcon
                      icon={['far', 'bell']}
                      className="h2 d-block mb-2 mx-auto mt-1 text-success"
                    />
                    <div className="font-weight-bold text-black">Reports</div>
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
                      className="h2 d-block mb-2 mx-auto mt-1 text-success"
                    />
                    <div className="font-weight-bold text-black">Projects</div>
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
      </div>
      <div className="divider my-3" />
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <UncontrolledDropdown className="m-2">
          <DropdownToggle outline color="primary">
            Bullets 1
          </DropdownToggle>
          <DropdownMenu className="bg-night-sky menu-items-container border-0 dropdown-menu-xl">
            <div className="p-2 text-center">
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                id="MenuExampleTooltip535"
                color="link"
                className="m-2 p-0 border-0 bg-love-kiss d-inline-flex align-items-center justify-content-center text-center d-50 rounded-circle card-box-hover-rise-alt">
                <FontAwesomeIcon
                  icon={['far', 'question-circle']}
                  className="font-size-xl text-white"
                />
              </a>
              <UncontrolledTooltip
                target="MenuExampleTooltip535"
                container=".menu-items-container">
                Menu example
              </UncontrolledTooltip>
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                id="MenuExampleTooltip536"
                color="link"
                className="m-2 p-0 border-0 bg-ripe-malin d-inline-flex align-items-center justify-content-center text-center d-50 rounded-circle card-box-hover-rise-alt">
                <FontAwesomeIcon
                  icon={['far', 'building']}
                  className="font-size-xl text-white"
                />
              </a>
              <UncontrolledTooltip
                target="MenuExampleTooltip536"
                container=".menu-items-container">
                Menu Example
              </UncontrolledTooltip>
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                id="MenuExampleTooltip537"
                color="link"
                className="m-2 p-0 border-0 bg-grow-early d-inline-flex align-items-center justify-content-center text-center d-50 rounded-circle card-box-hover-rise-alt">
                <FontAwesomeIcon
                  icon={['far', 'bell']}
                  className="font-size-xl text-white"
                />
              </a>
              <UncontrolledTooltip
                target="MenuExampleTooltip537"
                container=".menu-items-container">
                Menu Example
              </UncontrolledTooltip>
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                id="MenuExampleTooltip538"
                color="link"
                className="m-2 p-0 border-0 bg-arielle-smile d-inline-flex align-items-center justify-content-center text-center d-50 rounded-circle card-box-hover-rise-alt">
                <FontAwesomeIcon
                  icon={['far', 'file-excel']}
                  className="font-size-xl text-white"
                />
              </a>
              <UncontrolledTooltip
                target="MenuExampleTooltip538"
                container=".menu-items-container">
                Menu Example
              </UncontrolledTooltip>
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                id="MenuExampleTooltip539"
                color="link"
                className="m-2 p-0 border-0 bg-night-fade d-inline-flex align-items-center justify-content-center text-center d-50 rounded-circle card-box-hover-rise-alt">
                <FontAwesomeIcon
                  icon={['far', 'eye']}
                  className="font-size-xl text-white"
                />
              </a>
              <UncontrolledTooltip
                target="MenuExampleTooltip539"
                container=".menu-items-container">
                Menu Example
              </UncontrolledTooltip>
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                id="MenuExampleTooltip534"
                color="link"
                className="m-2 p-0 border-0 bg-strong-bliss d-inline-flex align-items-center justify-content-center text-center d-50 rounded-circle card-box-hover-rise-alt">
                <FontAwesomeIcon
                  icon={['far', 'chart-bar']}
                  className="font-size-xl text-white"
                />
              </a>
              <UncontrolledTooltip
                target="MenuExampleTooltip534"
                container=".menu-items-container">
                Menu Example
              </UncontrolledTooltip>
            </div>
          </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown className="m-2">
          <DropdownToggle outline color="primary">
            Bullets 2
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-xl bg-slick-carbon p-0">
            <div className="px-3 py-3 text-center">
              <div className="m-3 d-inline-block text-center">
                <a
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  color="link"
                  className="p-0 bg-ripe-malin d-inline-block text-center text-white font-size-xl d-50 rounded border-0 mb-2">
                  <FontAwesomeIcon
                    icon={['far', 'gem']}
                    className="font-size-lg"
                  />
                </a>
                <div className="d-block text-white-50">Tasks</div>
              </div>
              <div className="m-3 d-inline-block text-center">
                <a
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  color="link"
                  className="p-0 bg-grow-early d-inline-block text-center text-white font-size-xl d-50 rounded border-0 mb-2">
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
                  className="p-0 bg-arielle-smile d-inline-block text-center text-white font-size-xl d-50 rounded border-0 mb-2">
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
                className="btn-link-light text-white">
                View more items
              </Button>
            </div>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    </>
  );
}
