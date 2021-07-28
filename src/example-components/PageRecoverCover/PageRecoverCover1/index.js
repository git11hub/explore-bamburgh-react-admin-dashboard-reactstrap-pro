import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row,
  Col,
  FormGroup,
  Input,
  UncontrolledTooltip,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import { NavLink as NavLinkStrap } from 'reactstrap';

import hero6 from '../../../assets/images/hero-bg/hero-4.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <div className="app-wrapper min-vh-100 bg-white">
        <div className="app-main min-vh-100">
          <div className="app-content p-0">
            <div className="app-inner-content-layout--main">
              <div className="flex-grow-1 w-100 d-flex align-items-center">
                <div className="bg-composed-wrapper--content">
                  <Row className="min-vh-100 no-gutters">
                    <Col lg="7" xl="6" className="d-flex align-items-center">
                      <Col md="10" lg="8" xl="7" className="mx-auto">
                        <div className="py-4">
                          <div className="text-center mb-5">
                            <h1 className="display-4 mb-1 font-weight-bold">
                              Recover Password
                            </h1>
                            <p className="font-size-lg mb-0 text-black-50">
                              Forgot your password? No worries, we're here to
                              help!
                            </p>
                          </div>
                          <FormGroup>
                            <label className="font-weight-bold">
                              Email address
                            </label>
                            <Input
                              bsSize="lg"
                              placeholder="yourname@yourmail.com"
                              type="email"
                            />
                          </FormGroup>
                          <div className="text-center mb-5">
                            <Button
                              className="btn-block text-uppercase font-weight-bold font-size-sm mt-4"
                              color="primary">
                              Send password
                            </Button>
                          </div>
                        </div>
                      </Col>
                    </Col>
                    <Col lg="5" xl="6" className="d-flex">
                      <div className="hero-wrapper w-100 bg-composed-wrapper bg-happy-green min-vh-lg-100">
                        <div className="flex-grow-1 w-100 d-flex align-items-center">
                          <div
                            className="bg-composed-wrapper--image opacity-7"
                            style={{ backgroundImage: 'url(' + hero6 + ')' }}
                          />
                          <div className="bg-composed-wrapper--bg bg-second opacity-7" />
                          <div className="bg-composed-wrapper--bg bg-premium-dark opacity-4" />
                          <div className="bg-composed-wrapper--content text-center p-5">
                            <div className="text-white px-0 px-lg-2 px-xl-4">
                              <h1 className="display-3 mb-4 font-weight-bold">
                                Bamburgh React Admin Dashboard with Reactstrap
                                PRO
                              </h1>
                              <p className="font-size-lg mb-0 opacity-8">
                                This admin template is a complete frontend
                                solution for easy-building applications or
                                presentation websites. It&#39;s fully responsive
                                and designed by professional UI&#x2F;UX
                                designers and developers.
                              </p>
                              <div className="divider mx-auto border-1 my-5 border-light opacity-2 rounded w-25" />
                              <div>
                                <Button
                                  color="first"
                                  className="px-5 font-size-sm font-weight-bold btn-animated-icon text-uppercase rounded shadow-none py-3 hover-scale-sm hover-scale-lg">
                                  <span className="btn-wrapper--label">
                                    Members Login
                                  </span>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hero-footer pb-4">
                          <Nav pills className="nav-neutral-secondary">
                            <NavItem>
                              <NavLinkStrap
                                href="#/"
                                onClick={(e) => e.preventDefault()}
                                className="font-size-lg text-white-50"
                                id="FacebookTooltipExample7">
                                <FontAwesomeIcon icon={['fab', 'facebook']} />
                              </NavLinkStrap>
                              <UncontrolledTooltip
                                target="FacebookTooltipExample7"
                                container="body">
                                Facebook
                              </UncontrolledTooltip>
                            </NavItem>
                            <NavItem>
                              <NavLinkStrap
                                href="#/"
                                onClick={(e) => e.preventDefault()}
                                className="font-size-lg text-white-50"
                                id="btnTwitterTooltip">
                                <FontAwesomeIcon icon={['fab', 'twitter']} />
                              </NavLinkStrap>
                              <UncontrolledTooltip target="btnTwitterTooltip">
                                Twitter
                              </UncontrolledTooltip>
                            </NavItem>
                            <NavItem>
                              <NavLinkStrap
                                href="#/"
                                onClick={(e) => e.preventDefault()}
                                className="font-size-lg text-white-50"
                                id="btnGoogleTooltip">
                                <FontAwesomeIcon icon={['fab', 'google']} />
                              </NavLinkStrap>
                              <UncontrolledTooltip target="btnGoogleTooltip">
                                Google
                              </UncontrolledTooltip>
                            </NavItem>
                            <NavItem>
                              <NavLinkStrap
                                href="#/"
                                onClick={(e) => e.preventDefault()}
                                className="font-size-lg text-white-50"
                                id="btnInstagramTooltip">
                                <FontAwesomeIcon icon={['fab', 'instagram']} />
                              </NavLinkStrap>
                              <UncontrolledTooltip target="btnInstagramTooltip">
                                Instagram
                              </UncontrolledTooltip>
                            </NavItem>
                          </Nav>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
