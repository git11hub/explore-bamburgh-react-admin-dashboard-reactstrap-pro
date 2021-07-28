import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Badge,
  ListGroup,
  ListGroupItem,
  UncontrolledTooltip,
  Nav,
  NavItem,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';
import { NavLink as NavLinkStrap } from 'reactstrap';
import avatar7 from '../../assets/images/avatars/avatar7.jpg';

const HeaderUserbox = () => {
  return (
    <>
      <UncontrolledDropdown className="position-relative ml-2">
        <DropdownToggle
          color="link"
          className="p-0 text-left d-flex btn-transition-none align-items-center">
          <div className="d-block p-0 avatar-icon-wrapper">
            <Badge color="success" className="badge-circle p-top-a">
              Online
            </Badge>
            <div className="avatar-icon rounded">
              <img src={avatar7} alt="..." />
            </div>
          </div>
          <div className="d-none d-xl-block pl-2">
            <div className="font-weight-bold">Emma Taylor</div>
            <span className="text-black-50">Senior accountant</span>
          </div>
          <span className="pl-1 pl-xl-3">
            <FontAwesomeIcon
              icon={['fas', 'angle-down']}
              className="opacity-5"
            />
          </span>
        </DropdownToggle>
        <DropdownMenu right className="dropdown-menu-lg overflow-hidden p-0">
          <ListGroup flush className="text-left bg-transparent">
            <ListGroupItem className="rounded-top">
              <Nav pills className="nav-neutral-primary flex-column">
                <NavItem className="nav-header d-flex text-primary pt-1 pb-2 font-weight-bold align-items-center">
                  <div>Profile options</div>
                  <div className="ml-auto font-size-xs">
                    <a
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      id="ChangeSettingsTooltip">
                      <FontAwesomeIcon icon={['fas', 'plus-circle']} />
                    </a>
                    <UncontrolledTooltip
                      target="ChangeSettingsTooltip"
                      container="body">
                      Change settings
                    </UncontrolledTooltip>
                  </div>
                </NavItem>
                <NavItem>
                  <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                    My Account
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                    Profile settings
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                    Active tasks
                  </NavLinkStrap>
                </NavItem>
              </Nav>
            </ListGroupItem>
            <ListGroupItem className="bg-transparent p-0">
              <div className="grid-menu grid-menu-2col">
                <div className="py-3">
                  <div className="d-flex justify-content-center">
                    <div className="d-flex align-items-center">
                      <div>
                        <FontAwesomeIcon
                          icon={['far', 'chart-bar']}
                          className="font-size-xxl text-info"
                        />
                      </div>
                      <div className="pl-3 line-height-sm">
                        <b className="font-size-lg">$9,693</b>
                        <span className="text-black-50 d-block">revenue</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ListGroupItem>
            <ListGroupItem className="rounded-bottom p-3 text-center">
              <Button
                tag="a"
                href="#/"
                onClick={(e) => e.preventDefault()}
                color="facebook"
                className="d-40 btn-icon p-0"
                id="FacebookTooltipHeader"
                container="body">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['fab', 'facebook']} />
                </span>
              </Button>
              <UncontrolledTooltip target="FacebookTooltipHeader">
                Facebook
              </UncontrolledTooltip>
              <Button
                tag="a"
                href="#/"
                onClick={(e) => e.preventDefault()}
                color="dribbble"
                className="mx-2 d-40 btn-icon p-0"
                id="btnDribbbleTooltipHeader"
                container="body">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['fab', 'dribbble']} />
                </span>
              </Button>
              <UncontrolledTooltip target="btnDribbbleTooltipHeader">
                Dribbble
              </UncontrolledTooltip>
              <Button
                tag="a"
                href="#/"
                onClick={(e) => e.preventDefault()}
                color="twitter"
                className="d-40 btn-icon p-0"
                id="btnTwitterTooltipHeader"
                container="body">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['fab', 'twitter']} />
                </span>
              </Button>
              <UncontrolledTooltip target="btnTwitterTooltipHeader">
                Twitter
              </UncontrolledTooltip>
            </ListGroupItem>
          </ListGroup>
        </DropdownMenu>
      </UncontrolledDropdown>
    </>
  );
};

export default HeaderUserbox;
