import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, FormGroup, Input, Button, Modal } from 'reactstrap';

import people2 from '../../../assets/images/stock-photos/people-2.jpg';
import people3 from '../../../assets/images/stock-photos/people-3.jpg';
export default function LivePreviewExample() {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);

  const toggle1 = () => setModal1(!modal1);
  const toggle2 = () => setModal2(!modal2);

  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Button onClick={toggle1} color="primary" className="m-2">
          Horizontal Login Modal
        </Button>
        <Modal
          zIndex={2000}
          centered
          size="xl"
          isOpen={modal1}
          toggle={toggle1}
          contentClassName="modal-example-1 border-0 shadow-sm-dark bg-white p-3 p-xl-0">
          <Row className="no-gutters">
            <Col xl="5">
              <div className="hero-wrapper bg-composed-wrapper bg-sunrise-purple h-100 rounded br-xl-right-0">
                <div className="flex-grow-1 w-100 d-flex align-items-center">
                  <div
                    className="bg-composed-wrapper--image rounded br-xl-right-0 opacity-7"
                    style={{ backgroundImage: 'url(' + people2 + ')' }}
                  />
                  <div className="bg-composed-wrapper--bg bg-second opacity-2 rounded br-xl-right-0" />
                  <div className="bg-composed-wrapper--bg bg-slick-carbon opacity-3 rounded br-xl-right-0" />
                  <div className="bg-composed-wrapper--content justify-content-center text-center text-xl-left p-5">
                    <div className="text-white text-center">
                      <h1 className="display-3 mb-3 font-weight-bold">Login</h1>
                      <p className="font-size-lg mb-0 text-white-50">
                        Fill in the fields below to login to your account
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl="7">
              <Col lg="8" xl="10" className="mx-auto">
                <div className="bg-white p-4 rounded">
                  <div className="text-center py-4 rounded bg-secondary my-4">
                    <Button
                      className="m-2 btn-pill px-4 font-weight-bold"
                      size="sm"
                      color="google">
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={['fab', 'google']} />
                      </span>
                      <span className="btn-wrapper--label">
                        Login with Google
                      </span>
                    </Button>
                    <Button
                      className="m-2 btn-pill px-4 font-weight-bold"
                      size="sm"
                      color="facebook">
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={['fab', 'facebook']} />
                      </span>
                      <span className="btn-wrapper--label">
                        Login with Facebook
                      </span>
                    </Button>
                  </div>
                  <div className="text-center text-black-50 mb-4">
                    or sign in with credentials
                  </div>
                  <div>
                    <div className="form-group mb-3">
                      <Input placeholder="Email" type="email" />
                    </div>
                    <FormGroup>
                      <Input placeholder="Password" type="password" />
                    </FormGroup>
                    <div className="d-flex justify-content-between">
                      <div className="custom-control custom-control-alternative d-flex align-items-center custom-checkbox">
                        <input
                          className="custom-control-input"
                          id=" customCheckLogin55"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor=" customCheckLogin55">
                          <span>Remember me</span>
                        </label>
                      </div>
                      <div>
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="text-first">
                          Recover password
                        </a>
                      </div>
                    </div>
                    <div className="text-center py-4">
                      <Button
                        color="second"
                        className="font-weight-bold w-50 my-2">
                        Sign in
                      </Button>
                    </div>
                    <div className="text-center text-black-50 mt-3">
                      Don't have an account?{' '}
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="text-first">
                        Sign up
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            </Col>
          </Row>
        </Modal>

        <Button onClick={toggle2} color="primary" className="m-2">
          Vertical Login Modal
        </Button>
        <Modal
          zIndex={2000}
          centered
          size="lg"
          isOpen={modal2}
          toggle={toggle2}
          contentClassName="modal-example-2 shadow-sm-dark border-0 bg-white">
          <div className="hero-wrapper bg-composed-wrapper bg-skim-blue h-100 rounded-top">
            <div className="flex-grow-1 w-100 d-flex align-items-center">
              <div
                className="bg-composed-wrapper--image rounded-top opacity-4"
                style={{ backgroundImage: 'url(' + people3 + ')' }}
              />
              <div className="bg-composed-wrapper--bg bg-second opacity-4 rounded-top" />
              <div className="bg-composed-wrapper--content text-center pt-5">
                <div className="text-white">
                  <h1 className="display-3 my-3 font-weight-bold">Login</h1>
                  <p className="font-size-lg mb-0 text-white-50">
                    Fill in the fields below to login to your account
                  </p>
                </div>
                <div className="shape-container-top-1" style={{ margin: 0 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320">
                    <path
                      fill="var(--white)"
                      fillOpacity="1"
                      d="M0,288L48,250.7C96,213,192,139,288,106.7C384,75,480,85,576,112C672,139,768,181,864,176C960,171,1056,117,1152,128C1248,139,1344,213,1392,250.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-white rounded pt-4 pt-lg-0"
            style={{ marginTop: '-80px' }}>
            <Col lg="10" xl="9" className="z-over pt-5 pt-lg-4 pb-4 mx-auto">
              <div className="px-4 py-5">
                <FormGroup>
                  <label className="font-weight-bold">Email address</label>
                  <Input placeholder="yourname@yourmail.com" type="email" />
                </FormGroup>
                <div className="form-group mb-4">
                  <div className="d-flex justify-content-between">
                    <label className="font-weight-bold">Password</label>
                    <a href="#/" onClick={(e) => e.preventDefault()}>
                      Forgot password?
                    </a>
                  </div>
                  <Input placeholder="Enter your password" type="password" />
                </div>
                <Button
                  size="lg"
                  className="btn-block text-uppercase font-weight-bold font-size-sm"
                  color="primary">
                  Sign in
                </Button>
              </div>
            </Col>
          </div>
        </Modal>
      </div>
    </>
  );
}
