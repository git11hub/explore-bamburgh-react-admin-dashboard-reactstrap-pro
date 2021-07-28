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
          <Card className="shadow-xxl mb-5">
            <div className="nav-tabs-first tabs-animated tabs-bordered tabs-animated-shadow">
              <Nav tabs>
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === '1' })}
                    onClick={() => {
                      toggle('1');
                    }}>
                    <span>Home</span>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === '2' })}
                    onClick={() => {
                      toggle('2');
                    }}>
                    <span>Profile</span>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === '3' })}
                    onClick={() => {
                      toggle('3');
                    }}>
                    <span>Messages</span>
                  </NavLinkStrap>
                </NavItem>
              </Nav>
            </div>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <div className="text-center my-5">
                  <div className="d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-first shadow-first-sm text-first mb-2 d-90">
                    <FontAwesomeIcon
                      icon={['fas', 'lightbulb']}
                      className="d-flex align-self-center font-size-xxl"
                    />
                  </div>
                  <h6 className="font-weight-bold font-size-xxl mb-1 mt-3 text-first">
                    Tabbed Section
                  </h6>
                  <p className="text-black-50 font-size-lg mb-0">
                    You have pending actions to take care of.
                  </p>
                </div>
              </TabPane>
              <TabPane tabId="2">
                <div className="text-center my-5">
                  <div className="d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-first shadow-first-sm text-first mb-2 d-90">
                    <FontAwesomeIcon
                      icon={['far', 'user']}
                      className="d-flex align-self-center font-size-xxl"
                    />
                  </div>
                  <h6 className="font-weight-bold font-size-xxl mb-1 mt-3 text-first">
                    Tabbed Section
                  </h6>
                  <p className="text-black-50 font-size-lg mb-0">
                    You have pending actions to take care of.
                  </p>
                </div>
              </TabPane>
              <TabPane tabId="3">
                <div className="text-center my-5">
                  <div className="d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-first shadow-first-sm text-first mb-2 d-90">
                    <FontAwesomeIcon
                      icon={['far', 'gem']}
                      className="d-flex align-self-center font-size-xxl"
                    />
                  </div>
                  <h6 className="font-weight-bold font-size-xxl mb-1 mt-3 text-first">
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
          <Card className="shadow-xxl mb-5">
            <div className="nav-tabs-primary tabs-animated tabs-bordered tabs-animated-shadow">
              <Nav tabs className="justify-content-center">
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === '1' })}
                    onClick={() => {
                      toggle('1');
                    }}>
                    <span className="font-weight-bold text-uppercase font-size-sm">
                      Home
                    </span>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === '2' })}
                    onClick={() => {
                      toggle('2');
                    }}>
                    <span className="font-weight-bold text-uppercase font-size-sm">
                      Profile
                    </span>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === '3' })}
                    onClick={() => {
                      toggle('3');
                    }}>
                    <span className="font-weight-bold text-uppercase font-size-sm">
                      Messages
                    </span>
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
          <Card className="shadow-xxl mb-5">
            <div className="nav-tabs-warning tabs-animated tabs-animated-line">
              <Nav tabs>
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === '1' })}
                    onClick={() => {
                      toggle('1');
                    }}>
                    <span className="px-3 py-2 font-weight-bold">Home</span>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === '2' })}
                    onClick={() => {
                      toggle('2');
                    }}>
                    <span className="px-3 py-2 font-weight-bold">Profile</span>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === '3' })}
                    onClick={() => {
                      toggle('3');
                    }}>
                    <span className="px-3 py-2 font-weight-bold">Messages</span>
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
          <Card className="shadow-xxl mb-5">
            <div className="nav-tabs-dark tabs-animated tabs-animated-line">
              <Nav tabs justified className="justify-content-center">
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === '1' })}
                    onClick={() => {
                      toggle('1');
                    }}>
                    <span className="font-size-lg text-black text-capitalize px-3 py-2">
                      Home
                    </span>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === '2' })}
                    onClick={() => {
                      toggle('2');
                    }}>
                    <span className="font-size-lg text-black text-capitalize px-3 py-2">
                      Profile
                    </span>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === '3' })}
                    onClick={() => {
                      toggle('3');
                    }}>
                    <span className="font-size-lg text-black text-capitalize px-3 py-2">
                      Messages
                    </span>
                  </NavLinkStrap>
                </NavItem>
              </Nav>
            </div>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <div className="text-center my-5">
                  <div className="d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-dark shadow-dark-sm text-dark mb-2 d-90">
                    <FontAwesomeIcon
                      icon={['fas', 'lightbulb']}
                      className="d-flex align-self-center font-size-xxl"
                    />
                  </div>
                  <h6 className="font-weight-bold font-size-xxl mb-1 mt-3 text-dark">
                    Tabbed Section
                  </h6>
                  <p className="text-black-50 font-size-lg mb-0">
                    You have pending actions to take care of.
                  </p>
                </div>
              </TabPane>
              <TabPane tabId="2">
                <div className="text-center my-5">
                  <div className="d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-dark shadow-dark-sm text-dark mb-2 d-90">
                    <FontAwesomeIcon
                      icon={['far', 'user']}
                      className="d-flex align-self-center font-size-xxl"
                    />
                  </div>
                  <h6 className="font-weight-bold font-size-xxl mb-1 mt-3 text-dark">
                    Tabbed Section
                  </h6>
                  <p className="text-black-50 font-size-lg mb-0">
                    You have pending actions to take care of.
                  </p>
                </div>
              </TabPane>
              <TabPane tabId="3">
                <div className="text-center my-5">
                  <div className="d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-dark shadow-dark-sm text-dark mb-2 d-90">
                    <FontAwesomeIcon
                      icon={['far', 'gem']}
                      className="d-flex align-self-center font-size-xxl"
                    />
                  </div>
                  <h6 className="font-weight-bold font-size-xxl mb-1 mt-3 text-dark">
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
