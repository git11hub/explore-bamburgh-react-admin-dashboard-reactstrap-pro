import React from 'react';

import { Card, Nav, NavItem } from 'reactstrap';
import { NavLink as NavLinkStrap } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <Card className="p-4 mb-5">
        <div className="nav-line-alt">
          <Nav className="nav-line">
            <NavItem>
              <NavLinkStrap className="active">
                Home
                <div className="divider" />
              </NavLinkStrap>
            </NavItem>
            <NavItem>
              <NavLinkStrap>
                Profile
                <div className="divider" />
              </NavLinkStrap>
            </NavItem>
            <NavItem>
              <NavLinkStrap>
                Messages
                <div className="divider" />
              </NavLinkStrap>
            </NavItem>
          </Nav>
        </div>
      </Card>
      <Card className="p-4 mb-5">
        <div className="tabs-animated tabs-animated-line">
          <Nav tabs>
            <NavItem>
              <NavLinkStrap className="active">
                <span>Home</span>
              </NavLinkStrap>
            </NavItem>
            <NavItem>
              <NavLinkStrap>
                <span>Profile</span>
              </NavLinkStrap>
            </NavItem>
            <NavItem>
              <NavLinkStrap>
                <span>Messages</span>
              </NavLinkStrap>
            </NavItem>
          </Nav>
        </div>
      </Card>
    </>
  );
}
