import React from 'react';

import { Card, Nav, NavItem } from 'reactstrap';
import { NavLink as NavLinkStrap } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <Card className="p-4 mb-5">
        <div className="tabs-animated nav-tabs-primary tabs-animated-shadow">
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
        <div className="divider my-4" />
        <div className="tabs-animated nav-tabs-first tabs-animated-shadow">
          <Nav tabs>
            <NavItem>
              <NavLinkStrap className="active">
                <span className="font-weight-bold text-uppercase font-size-sm">
                  Home
                </span>
              </NavLinkStrap>
            </NavItem>
            <NavItem>
              <NavLinkStrap>
                <span className="font-weight-bold text-uppercase font-size-sm">
                  Profile
                </span>
              </NavLinkStrap>
            </NavItem>
            <NavItem>
              <NavLinkStrap>
                <span className="font-weight-bold text-uppercase font-size-sm">
                  Messages
                </span>
              </NavLinkStrap>
            </NavItem>
          </Nav>
        </div>
        <div className="divider my-4" />
        <div className="tabs-animated nav-tabs-danger tabs-animated-shadow">
          <Nav tabs>
            <NavItem>
              <NavLinkStrap className="active">
                <span className="px-3 font-weight-bold font-size-sm">Home</span>
              </NavLinkStrap>
            </NavItem>
            <NavItem>
              <NavLinkStrap>
                <span className="px-3 font-weight-bold font-size-sm">
                  Profile
                </span>
              </NavLinkStrap>
            </NavItem>
            <NavItem>
              <NavLinkStrap>
                <span className="px-3 font-weight-bold font-size-sm">
                  Messages
                </span>
              </NavLinkStrap>
            </NavItem>
          </Nav>
        </div>
      </Card>
    </>
  );
}
