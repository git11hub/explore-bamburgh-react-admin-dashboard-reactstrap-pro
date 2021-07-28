import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge, Button } from 'reactstrap';
import { NavLink as NavLinkStrap } from 'reactstrap';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';

export default function LivePreviewExample() {
  const attributes = {
    className: 'nav-item my-1'
  };
  const attributes3 = {
    className: 'list-group-item list-group-item-action my-0 px-3'
  };
  return (
    <>
      <div className="text-center">
        <span className="position-relative">
          <ContextMenuTrigger renderTag="span" id="ContextMenuTrigger1">
            <Button color="primary" className="m-2">
              Right click menu 1
            </Button>
          </ContextMenuTrigger>
          <ContextMenu
            className="rel-container dropdown-menu nav nav-neutral-danger nav-pills flex-column p-3 dropdown-menu-lg"
            id="ContextMenuTrigger1">
            <MenuItem preventClose={true} attributes={attributes}>
              <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                <div className="nav-link-icon">
                  <FontAwesomeIcon icon={['far', 'object-group']} />
                </div>
                <span>Dashboard</span>
              </NavLinkStrap>
            </MenuItem>
            <MenuItem preventClose={true} attributes={attributes}>
              <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                <div className="nav-link-icon">
                  <FontAwesomeIcon icon={['far', 'building']} />
                </div>
                <span>Accounts</span>
              </NavLinkStrap>
            </MenuItem>
            <MenuItem className="my-3" divider />
            <MenuItem preventClose={true} attributes={attributes}>
              <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                <div className="nav-link-icon">
                  <FontAwesomeIcon icon={['far', 'keyboard']} />
                </div>
                <span>Reports</span>
              </NavLinkStrap>
            </MenuItem>
            <MenuItem preventClose={true} attributes={attributes}>
              <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                <div className="nav-link-icon">
                  <FontAwesomeIcon icon={['far', 'chart-bar']} />
                </div>
                <span>Deliveries</span>
              </NavLinkStrap>
            </MenuItem>
          </ContextMenu>
        </span>
        <span className="position-relative">
          <ContextMenuTrigger renderTag="span" id="ContextMenuTrigger2">
            <Button color="primary" className="m-2">
              Right click menu 2
            </Button>
          </ContextMenuTrigger>
          <ContextMenu
            className="rel-container dropdown-menu nav nav-neutral-warning nav-pills dropdown-menu-xl nav-pills-rounded flex-column p-3"
            id="ContextMenuTrigger2">
            <MenuItem preventClose={true} attributes={attributes}>
              <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                <div className="nav-link-icon">
                  <FontAwesomeIcon icon={['far', 'lightbulb']} />
                </div>
                <span>My Account</span>
              </NavLinkStrap>
            </MenuItem>
            <MenuItem preventClose={true} attributes={attributes}>
              <NavLinkStrap
                href="#/"
                onClick={(e) => e.preventDefault()}
                active>
                <div className="nav-link-icon">
                  <FontAwesomeIcon icon={['far', 'heart']} />
                </div>
                <span>Profile settings</span>
              </NavLinkStrap>
            </MenuItem>
            <MenuItem preventClose={true} attributes={attributes}>
              <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                <span className="d-flex align-items-center">
                  <div className="nav-link-icon">
                    <FontAwesomeIcon icon={['far', 'user']} />
                  </div>
                  <span>Active tasks</span>
                </span>
                <Badge className="ml-auto" color="success">
                  New
                </Badge>
              </NavLinkStrap>
            </MenuItem>
            <MenuItem preventClose={true} attributes={attributes}>
              <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                <div className="nav-link-icon">
                  <FontAwesomeIcon icon={['far', 'bell']} />
                </div>
                <span>Customers</span>
              </NavLinkStrap>
            </MenuItem>
            <MenuItem preventClose={true} attributes={attributes}>
              <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                <div className="nav-link-icon">
                  <FontAwesomeIcon icon={['far', 'eye']} />
                </div>
                <span>Statistics</span>
              </NavLinkStrap>
            </MenuItem>
          </ContextMenu>
        </span>
        <span className="position-relative">
          <ContextMenuTrigger renderTag="span" id="ContextMenuTrigger3">
            <Button color="primary" className="m-2">
              Right click menu 3
            </Button>
          </ContextMenuTrigger>
          <ContextMenu
            className="rel-container dropdown-menu py-0 list-group list-group-flush dropdown-menu-xl"
            id="ContextMenuTrigger3">
            <MenuItem preventClose={true} attributes={attributes3}>
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="align-box-row w-100">
                <div className="mr-3">
                  <div className="bg-grow-early btn-icon text-center text-white font-size-xl d-50 rounded-circle">
                    <FontAwesomeIcon icon={['far', 'bell']} />
                  </div>
                </div>
                <div>
                  <div className="font-weight-bold text-primary d-block">
                    Sales
                  </div>
                  <small className="text-success">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-up']}
                      className="text-success mr-1"
                    />
                    <span>15.4% increase</span>
                  </small>
                </div>
              </a>
            </MenuItem>
            <MenuItem preventClose={true} attributes={attributes3}>
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="align-box-row w-100">
                <div className="mr-3">
                  <div className="bg-warning btn-icon text-center text-white font-size-xl d-50 rounded-circle">
                    <FontAwesomeIcon icon={['far', 'chart-bar']} />
                  </div>
                </div>
                <div>
                  <div className="font-weight-bold text-primary d-block">
                    Expenses
                  </div>
                  <small className="text-warning">
                    <FontAwesomeIcon
                      icon={['fas', 'arrow-down']}
                      className="text-warning mr-1"
                    />
                    <span>5.2% down</span>
                  </small>
                </div>
              </a>
            </MenuItem>
          </ContextMenu>
        </span>
        <span className="position-relative">
          <ContextMenuTrigger renderTag="span" id="ContextMenuTrigger4">
            <Button color="primary" className="m-2">
              Right click menu 4
            </Button>
          </ContextMenuTrigger>
          <ContextMenu
            className="rel-container dropdown-menu nav nav-neutral-primary nav-pills dropdown-menu-xl flex-column p-3"
            id="ContextMenuTrigger4">
            <MenuItem preventClose={true} attributes={attributes}>
              <span className="font-weight-bold px-2 pb-2 d-block text-primary text-uppercase font-size-sm">
                Reports
              </span>
            </MenuItem>
            <MenuItem preventClose={true} attributes={attributes}>
              <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                <span>My Account</span>
              </NavLinkStrap>
            </MenuItem>
            <MenuItem preventClose={true} attributes={attributes}>
              <NavLinkStrap
                active
                href="#/"
                onClick={(e) => e.preventDefault()}>
                <span>Profile settings</span>
                <Badge color="first" className="ml-auto">
                  23
                </Badge>
              </NavLinkStrap>
            </MenuItem>
            <MenuItem preventClose={true} attributes={attributes}>
              <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                <span>Active tasks</span>
              </NavLinkStrap>
            </MenuItem>
            <MenuItem className="my-2" divider />
            <MenuItem preventClose={true} attributes={attributes}>
              <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                <div className="nav-link-icon">
                  <FontAwesomeIcon icon={['far', 'bell']} />
                </div>
                <span>Customers</span>
              </NavLinkStrap>
            </MenuItem>
            <MenuItem preventClose={true} attributes={attributes}>
              <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                <div className="nav-link-icon">
                  <FontAwesomeIcon icon={['far', 'eye']} />
                </div>
                <span>Statistics</span>
              </NavLinkStrap>
            </MenuItem>
          </ContextMenu>
        </span>
      </div>
    </>
  );
}
