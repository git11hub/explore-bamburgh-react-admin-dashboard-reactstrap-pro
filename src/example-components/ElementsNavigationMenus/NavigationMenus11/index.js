import React from 'react';

import { Card, Nav, NavItem } from 'reactstrap';
import { NavLink as NavLinkStrap } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <Card className="p-4 mb-5">
        <div className="nav-tabs-second">
          <Nav className="nav-line">
            <NavItem>
              <NavLinkStrap className="active">
                <span>Home</span>
                <div className="divider" />
              </NavLinkStrap>
            </NavItem>
            <NavItem>
              <NavLinkStrap>
                <span>Profile</span>
                <div className="divider" />
              </NavLinkStrap>
            </NavItem>
            <NavItem>
              <NavLinkStrap>
                <span>Messages</span>
                <div className="divider" />
              </NavLinkStrap>
            </NavItem>
          </Nav>
        </div>
        <div className="divider my-4" />
        <div className="nav-tabs-warning">
          <Nav className="nav-line">
            <NavItem>
              <NavLinkStrap className="active">
                <span className="font-weight-bold text-uppercase font-size-sm">
                  Home
                </span>
                <div className="divider" />
              </NavLinkStrap>
            </NavItem>
            <NavItem>
              <NavLinkStrap>
                <span className="font-weight-bold text-uppercase font-size-sm">
                  Profile
                </span>
                <div className="divider" />
              </NavLinkStrap>
            </NavItem>
            <NavItem>
              <NavLinkStrap>
                <span className="font-weight-bold text-uppercase font-size-sm">
                  Messages
                </span>
                <div className="divider" />
              </NavLinkStrap>
            </NavItem>
          </Nav>
        </div>
        <div className="divider my-4" />
        <div className="nav-tabs-success">
          <Nav className="nav-line">
            <NavItem>
              <NavLinkStrap className="active">
                <span className="font-weight-bold font-size-sm">Home</span>
                <div className="divider" />
              </NavLinkStrap>
            </NavItem>
            <NavItem>
              <NavLinkStrap>
                <span className="font-weight-bold font-size-sm">Profile</span>
                <div className="divider" />
              </NavLinkStrap>
            </NavItem>
            <NavItem>
              <NavLinkStrap>
                <span className="font-weight-bold font-size-sm">Messages</span>
                <div className="divider" />
              </NavLinkStrap>
            </NavItem>
          </Nav>
        </div>
      </Card>
    </>
  );
}
