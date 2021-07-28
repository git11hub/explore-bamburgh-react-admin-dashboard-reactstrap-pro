import React, { useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, TabContent, TabPane, Nav, NavItem } from 'reactstrap';
import { NavLink as NavLinkStrap } from 'reactstrap';

export default function LivePreviewExample() {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <>
      <Row>
        <Col lg="6">
          <Card className="shadow-xxl p-3 mb-5">
            <div className="nav-tabs-primary">
              <Nav className="nav-line">
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === '1' })}
                    onClick={() => {
                      toggle('1');
                    }}>
                    <span>Home</span>
                    <div className="divider" />
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === '2' })}
                    onClick={() => {
                      toggle('2');
                    }}>
                    <span>Profile</span>
                    <div className="divider" />
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === '3' })}
                    onClick={() => {
                      toggle('3');
                    }}>
                    <span>Messages</span>
                    <div className="divider" />
                  </NavLinkStrap>
                </NavItem>
              </Nav>
            </div>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <div className="text-center my-5">
                  <div className="d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-primary shadow-primary-sm text-primary mb-2 d-90">
                    <FontAwesomeIcon
                      icon={['fas', 'lightbulb']}
                      className="d-flex align-self-center font-size-xxl"
                    />
                  </div>
                  <h6 className="font-weight-bold font-size-xxl mb-1 mt-3 text-primary">
                    Tabbed Section
                  </h6>
                  <p className="text-black-50 font-size-lg mb-0">
                    You have pending actions to take care of.
                  </p>
                </div>
              </TabPane>
              <TabPane tabId="2">
                <div className="text-center my-5">
                  <div className="d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-primary shadow-primary-sm text-primary mb-2 d-90">
                    <FontAwesomeIcon
                      icon={['far', 'user']}
                      className="d-flex align-self-center font-size-xxl"
                    />
                  </div>
                  <h6 className="font-weight-bold font-size-xxl mb-1 mt-3 text-primary">
                    Tabbed Section
                  </h6>
                  <p className="text-black-50 font-size-lg mb-0">
                    You have pending actions to take care of.
                  </p>
                </div>
              </TabPane>
              <TabPane tabId="3">
                <div className="text-center my-5">
                  <div className="d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-primary shadow-primary-sm text-primary mb-2 d-90">
                    <FontAwesomeIcon
                      icon={['far', 'gem']}
                      className="d-flex align-self-center font-size-xxl"
                    />
                  </div>
                  <h6 className="font-weight-bold font-size-xxl mb-1 mt-3 text-primary">
                    Tabbed Section
                  </h6>
                  <p className="text-black-50 font-size-lg mb-0">
                    You have pending actions to take care of.
                  </p>
                </div>
              </TabPane>
            </TabContent>
          </Card>
        </Col>
        <Col lg="6">
          <Card className="shadow-xxl p-3 mb-5">
            <div className="nav-tabs-warning">
              <Nav className="nav-line">
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === '1' })}
                    onClick={() => {
                      toggle('1');
                    }}>
                    <span className="font-weight-bold font-size-sm text-uppercase">
                      Home
                    </span>
                    <div className="divider" />
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === '2' })}
                    onClick={() => {
                      toggle('2');
                    }}>
                    <span className="font-weight-bold font-size-sm text-uppercase">
                      Profile
                    </span>
                    <div className="divider" />
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === '3' })}
                    onClick={() => {
                      toggle('3');
                    }}>
                    <span className="font-weight-bold font-size-sm text-uppercase">
                      Messages
                    </span>
                    <div className="divider" />
                  </NavLinkStrap>
                </NavItem>
              </Nav>
            </div>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <div className="text-center my-5">
                  <div className="d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-warning shadow-warning-sm text-warning mb-2 d-90">
                    <FontAwesomeIcon
                      icon={['fas', 'lightbulb']}
                      className="d-flex align-self-center font-size-xxl"
                    />
                  </div>
                  <h6 className="font-weight-bold font-size-xxl mb-1 mt-3 text-warning">
                    Tabbed Section
                  </h6>
                  <p className="text-black-50 font-size-lg mb-0">
                    You have pending actions to take care of.
                  </p>
                </div>
              </TabPane>
              <TabPane tabId="2">
                <div className="text-center my-5">
                  <div className="d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-warning shadow-warning-sm text-warning mb-2 d-90">
                    <FontAwesomeIcon
                      icon={['far', 'user']}
                      className="d-flex align-self-center font-size-xxl"
                    />
                  </div>
                  <h6 className="font-weight-bold font-size-xxl mb-1 mt-3 text-warning">
                    Tabbed Section
                  </h6>
                  <p className="text-black-50 font-size-lg mb-0">
                    You have pending actions to take care of.
                  </p>
                </div>
              </TabPane>
              <TabPane tabId="3">
                <div className="text-center my-5">
                  <div className="d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-warning shadow-warning-sm text-warning mb-2 d-90">
                    <FontAwesomeIcon
                      icon={['far', 'gem']}
                      className="d-flex align-self-center font-size-xxl"
                    />
                  </div>
                  <h6 className="font-weight-bold font-size-xxl mb-1 mt-3 text-warning">
                    Tabbed Section
                  </h6>
                  <p className="text-black-50 font-size-lg mb-0">
                    You have pending actions to take care of.
                  </p>
                </div>
              </TabPane>
            </TabContent>
          </Card>
        </Col>
        <Col lg="6">
          <Card className="shadow-xxl p-3 mb-5">
            <div className="nav-line-alt nav-tabs-info">
              <Nav className="nav-line">
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === '1' })}
                    onClick={() => {
                      toggle('1');
                    }}>
                    <span className="font-size-lg">Home</span>
                    <div className="divider" />
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === '2' })}
                    onClick={() => {
                      toggle('2');
                    }}>
                    <span className="font-size-lg">Profile</span>
                    <div className="divider" />
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === '3' })}
                    onClick={() => {
                      toggle('3');
                    }}>
                    <span className="font-size-lg">Messages</span>
                    <div className="divider" />
                  </NavLinkStrap>
                </NavItem>
              </Nav>
            </div>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <div className="text-center my-5">
                  <div className="d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-info shadow-info-sm text-info mb-2 d-90">
                    <FontAwesomeIcon
                      icon={['fas', 'lightbulb']}
                      className="d-flex align-self-center font-size-xxl"
                    />
                  </div>
                  <h6 className="font-weight-bold font-size-xxl mb-1 mt-3 text-info">
                    Tabbed Section
                  </h6>
                  <p className="text-black-50 font-size-lg mb-0">
                    You have pending actions to take care of.
                  </p>
                </div>
              </TabPane>
              <TabPane tabId="2">
                <div className="text-center my-5">
                  <div className="d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-info shadow-info-sm text-info mb-2 d-90">
                    <FontAwesomeIcon
                      icon={['far', 'user']}
                      className="d-flex align-self-center font-size-xxl"
                    />
                  </div>
                  <h6 className="font-weight-bold font-size-xxl mb-1 mt-3 text-info">
                    Tabbed Section
                  </h6>
                  <p className="text-black-50 font-size-lg mb-0">
                    You have pending actions to take care of.
                  </p>
                </div>
              </TabPane>
              <TabPane tabId="3">
                <div className="text-center my-5">
                  <div className="d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-info shadow-info-sm text-info mb-2 d-90">
                    <FontAwesomeIcon
                      icon={['far', 'gem']}
                      className="d-flex align-self-center font-size-xxl"
                    />
                  </div>
                  <h6 className="font-weight-bold font-size-xxl mb-1 mt-3 text-info">
                    Tabbed Section
                  </h6>
                  <p className="text-black-50 font-size-lg mb-0">
                    You have pending actions to take care of.
                  </p>
                </div>
              </TabPane>
            </TabContent>
          </Card>
        </Col>
        <Col lg="6">
          <Card className="shadow-xxl p-3 mb-5">
            <div className="nav-line-alt nav-tabs-second">
              <Nav className="nav-line">
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === '1' })}
                    onClick={() => {
                      toggle('1');
                    }}>
                    <span className="font-size-md font-weight-bold">Home</span>
                    <div className="divider" />
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === '2' })}
                    onClick={() => {
                      toggle('2');
                    }}>
                    <span className="font-size-md font-weight-bold">
                      Profile
                    </span>
                    <div className="divider" />
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === '3' })}
                    onClick={() => {
                      toggle('3');
                    }}>
                    <span className="font-size-md font-weight-bold">
                      Messages
                    </span>
                    <div className="divider" />
                  </NavLinkStrap>
                </NavItem>
              </Nav>
            </div>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <div className="text-center my-5">
                  <div className="d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-second shadow-second-sm text-second mb-2 d-90">
                    <FontAwesomeIcon
                      icon={['fas', 'lightbulb']}
                      className="d-flex align-self-center font-size-xxl"
                    />
                  </div>
                  <h6 className="font-weight-bold font-size-xxl mb-1 mt-3 text-second">
                    Tabbed Section
                  </h6>
                  <p className="text-black-50 font-size-lg mb-0">
                    You have pending actions to take care of.
                  </p>
                </div>
              </TabPane>
              <TabPane tabId="2">
                <div className="text-center my-5">
                  <div className="d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-second shadow-second-sm text-second mb-2 d-90">
                    <FontAwesomeIcon
                      icon={['far', 'user']}
                      className="d-flex align-self-center font-size-xxl"
                    />
                  </div>
                  <h6 className="font-weight-bold font-size-xxl mb-1 mt-3 text-second">
                    Tabbed Section
                  </h6>
                  <p className="text-black-50 font-size-lg mb-0">
                    You have pending actions to take care of.
                  </p>
                </div>
              </TabPane>
              <TabPane tabId="3">
                <div className="text-center my-5">
                  <div className="d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-second shadow-second-sm text-second mb-2 d-90">
                    <FontAwesomeIcon
                      icon={['far', 'gem']}
                      className="d-flex align-self-center font-size-xxl"
                    />
                  </div>
                  <h6 className="font-weight-bold font-size-xxl mb-1 mt-3 text-second">
                    Tabbed Section
                  </h6>
                  <p className="text-black-50 font-size-lg mb-0">
                    You have pending actions to take care of.
                  </p>
                </div>
              </TabPane>
            </TabContent>
          </Card>
        </Col>
      </Row>
    </>
  );
}
