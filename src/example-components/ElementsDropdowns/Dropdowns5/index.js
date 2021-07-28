import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Badge,
  ListGroup,
  ListGroupItem,
  Nav,
  NavItem,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';
import { NavLink as NavLinkStrap } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
export default function LivePreviewExample() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <UncontrolledDropdown className="m-2">
          <DropdownToggle outline color="primary">
            Vertical 1
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-xl">
            <Nav className="flex-column">
              <NavItem>
                <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                  <div className="nav-link-icon">
                    <FontAwesomeIcon icon={['far', 'chart-bar']} />
                  </div>
                  <span>Services</span>
                </NavLinkStrap>
              </NavItem>
              <li className="dropdown-divider" />
              <NavItem>
                <NavLinkStrap
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  active>
                  <div className="nav-link-icon">
                    <FontAwesomeIcon icon={['far', 'question-circle']} />
                  </div>
                  <span>Layouts</span>
                  <Badge color="warning" className="ml-auto">
                    512
                  </Badge>
                </NavLinkStrap>
              </NavItem>
              <NavItem>
                <NavLinkStrap
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="disabled">
                  <div className="nav-link-icon">
                    <FontAwesomeIcon icon={['far', 'user-circle']} />
                  </div>
                  <span>Reports</span>
                </NavLinkStrap>
              </NavItem>
              <NavItem className="nav-item--header">
                <span className="text-second px-3 mb-2 d-block font-weight-bold">
                  Others
                </span>
              </NavItem>
              <NavItem>
                <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                  <div className="nav-link-icon">
                    <FontAwesomeIcon icon={['far', 'object-group']} />
                  </div>
                  <span>Components</span>
                </NavLinkStrap>
              </NavItem>
              <NavItem>
                <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                  <div className="nav-link-icon">
                    <FontAwesomeIcon icon={['far', 'chart-bar']} />
                  </div>
                  <span>Services</span>
                </NavLinkStrap>
              </NavItem>
            </Nav>
          </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown className="m-2">
          <DropdownToggle outline color="primary">
            Vertical 2
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-xl p-0">
            <Nav className="nav-neutral-danger nav-pills flex-column p-3">
              <NavItem className="nav-item--header">
                <span className="text-second px-3 mb-2 d-block font-weight-bold">
                  Navigation
                </span>
              </NavItem>
              <NavItem>
                <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                  <span>My Account</span>
                </NavLinkStrap>
              </NavItem>
              <NavItem>
                <NavLinkStrap
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  active>
                  <span>Profile settings</span>
                  <Badge color="primary" className="ml-auto">
                    23
                  </Badge>
                </NavLinkStrap>
              </NavItem>
              <NavItem>
                <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                  <span>Active tasks</span>
                </NavLinkStrap>
              </NavItem>
              <NavItem className="nav-item--header">
                <span className="text-second px-3 mb-2 d-block font-weight-bold">
                  Heading
                </span>
              </NavItem>
              <NavItem>
                <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                  <div className="nav-link-icon">
                    <FontAwesomeIcon icon={['far', 'bell']} />
                  </div>
                  <span>Customers</span>
                </NavLinkStrap>
              </NavItem>
              <NavItem>
                <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                  <div className="nav-link-icon">
                    <FontAwesomeIcon icon={['far', 'eye']} />
                  </div>
                  <span>Statistics</span>
                </NavLinkStrap>
              </NavItem>
            </Nav>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
      <div className="divider my-3" />
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <UncontrolledDropdown className="m-2">
          <DropdownToggle outline color="primary">
            Vertical 3
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-xl p-0">
            <div className="bg-composed-wrapper bg-vicious-stance mt-0">
              <div className="bg-composed-wrapper--image bg-composed-img-5" />
              <div className="bg-composed-wrapper--content text-white text-center p-4">
                <h5 className="mb-1">Scrollable</h5>
                <p className="mb-0 opacity-7">
                  This menu box is scrollable (sm)
                </p>
              </div>
            </div>
            <div className="scroll-area-sm shadow-overflow">
              <PerfectScrollbar>
                <Nav className="flex-column py-2">
                  <NavItem>
                    <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                      <div className="nav-link-icon">
                        <FontAwesomeIcon icon={['far', 'chart-bar']} />
                      </div>
                      <span>Services</span>
                    </NavLinkStrap>
                  </NavItem>
                  <NavItem>
                    <NavLinkStrap
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      active>
                      <div className="nav-link-icon">
                        <FontAwesomeIcon icon={['far', 'question-circle']} />
                      </div>
                      <span>Layouts</span>
                      <Badge color="warning" className="ml-auto">
                        512
                      </Badge>
                    </NavLinkStrap>
                  </NavItem>
                  <NavItem>
                    <NavLinkStrap
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="disabled">
                      <div className="nav-link-icon">
                        <FontAwesomeIcon icon={['far', 'user-circle']} />
                      </div>
                      <span>Reports</span>
                    </NavLinkStrap>
                  </NavItem>
                  <NavItem className="nav-item--header">
                    <span className="text-second px-3 mb-2 d-block font-weight-bold">
                      Others
                    </span>
                  </NavItem>
                  <NavItem>
                    <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                      <div className="nav-link-icon">
                        <FontAwesomeIcon icon={['far', 'object-group']} />
                      </div>
                      <span>Components</span>
                    </NavLinkStrap>
                  </NavItem>
                  <NavItem>
                    <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                      <div className="nav-link-icon">
                        <FontAwesomeIcon icon={['far', 'chart-bar']} />
                      </div>
                      <span>Services</span>
                    </NavLinkStrap>
                  </NavItem>
                </Nav>
              </PerfectScrollbar>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <Button size="sm" color="neutral-success">
                Action
              </Button>
              <Button color="link" size="sm" className="btn-link-success px-0">
                <span>View details</span>
              </Button>
            </div>
          </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown className="m-2">
          <DropdownToggle outline color="primary">
            Vertical 4
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-xl p-0">
            <div className="bg-composed-wrapper bg-dark mt-0">
              <div className="bg-composed-wrapper--image bg-composed-img-1" />
              <div className="bg-composed-wrapper--content text-white p-4">
                <h5 className="mb-0 font-weight-bold">Composed backgrounds</h5>
                <p className="mb-0 opacity-7">
                  Highly configurable & easy to integrate.
                </p>
              </div>
            </div>
            <ListGroup flush>
              <ListGroupItem
                tag="a"
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="list-group-item-action align-box-row">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={['far', 'file-pdf']}
                    className="text-black-50 font-size-xl mr-3"
                  />
                  Adobe_file.pdf
                  <Badge color="neutral-info" className="text-info ml-2">
                    New
                  </Badge>
                </div>
                <div className="ml-auto">
                  <FontAwesomeIcon
                    icon={['fas', 'angle-right']}
                    className="text-primary"
                  />
                </div>
              </ListGroupItem>
              <ListGroupItem
                tag="a"
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="list-group-item-action align-box-row">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={['far', 'file-word']}
                    className="text-black-50 font-size-xl mr-3"
                  />
                  Word_file.docx
                </div>
                <div className="ml-auto">
                  <FontAwesomeIcon
                    icon={['fas', 'angle-right']}
                    className="text-primary"
                  />
                </div>
              </ListGroupItem>
              <ListGroupItem
                tag="a"
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="list-group-item-action align-box-row">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={['far', 'file-excel']}
                    className="text-black-50 font-size-xl mr-3"
                  />
                  Excel_doc.csv
                  <Badge color="neutral-success" className="text-success ml-2">
                    Draft
                  </Badge>
                </div>
                <div className="ml-auto">
                  <FontAwesomeIcon
                    icon={['fas', 'angle-right']}
                    className="text-primary"
                  />
                </div>
              </ListGroupItem>
              <ListGroupItem
                tag="a"
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="list-group-item-action align-box-row">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={['far', 'file-alt']}
                    className="text-black-50 font-size-xl mr-3"
                  />
                  Archive_docs.zip
                </div>
                <div className="ml-auto">
                  <FontAwesomeIcon
                    icon={['fas', 'angle-right']}
                    className="text-primary"
                  />
                </div>
              </ListGroupItem>
              <ListGroupItem
                tag="a"
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="list-group-item-action text-center">
                <FontAwesomeIcon
                  icon={['fas', 'chevron-down']}
                  className="text-muted mr-3"
                />
                <small className="text-primary">
                  Show all files <b>(93)</b>
                </small>
                <FontAwesomeIcon
                  icon={['fas', 'chevron-down']}
                  className="text-muted ml-3"
                />
              </ListGroupItem>
            </ListGroup>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    </>
  );
}
