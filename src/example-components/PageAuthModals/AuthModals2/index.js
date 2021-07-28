import React, { useState } from 'react';

import { Row, Col, FormGroup, Input, Button, Modal } from 'reactstrap';

import people2 from '../../../assets/images/stock-photos/people-1.jpg';
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
          Horizontal Register Modal
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
              <div className="hero-wrapper bg-composed-wrapper bg-skim-blue h-100 rounded br-xl-right-0">
                <div className="flex-grow-1 w-100 d-flex align-items-center">
                  <div
                    className="bg-composed-wrapper--image rounded br-xl-right-0 opacity-7"
                    style={{ backgroundImage: 'url(' + people2 + ')' }}
                  />
                  <div className="bg-composed-wrapper--bg bg-second opacity-1 rounded br-xl-right-0" />
                  <div className="bg-composed-wrapper--bg bg-slick-carbon opacity-5 rounded br-xl-right-0" />
                  <div className="bg-composed-wrapper--content justify-content-center text-center text-xl-left p-5">
                    <div className="text-white text-center">
                      <h1 className="display-3 my-3 font-weight-bold">
                        Register
                      </h1>
                      <p className="font-size-lg mb-0 px-4 text-white-50">
                        Browse through the live previews to see just how
                        powerful this admin template really is!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl="7">
              <Col lg="8" xl="10" className="mx-auto">
                <div className="bg-white p-4 rounded">
                  <div className="text-center my-4">
                    <h1 className="display-4 mb-1 font-weight-bold">
                      Create your account
                    </h1>
                    <p className="font-size-lg mb-0 text-black-50">
                      Start benefiting from our tools right away
                    </p>
                  </div>
                  <FormGroup>
                    <label className="font-weight-bold">Email address</label>
                    <Input
                      placeholder="Enter your email address"
                      type="email"
                    />
                  </FormGroup>
                  <FormGroup>
                    <div className="d-flex justify-content-between mg-b-5">
                      <label className="font-weight-bold">Password</label>
                    </div>
                    <Input placeholder="Enter your password" type="password" />
                  </FormGroup>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label className="font-weight-bold">First name</label>
                        <Input placeholder="Enter your firstname" type="text" />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label className="font-weight-bold">Last name</label>
                        <Input placeholder="Enter your lastname" type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <div className="form-group mb-3">
                    By clicking the <strong>Create account</strong> button below
                    you agree to our terms of service and privacy statement.
                  </div>
                  <div className="text-center mb-4">
                    <Button
                      color="primary"
                      className="text-uppercase font-weight-bold font-size-sm my-3">
                      Create account
                    </Button>
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
          <div className="hero-wrapper bg-composed-wrapper bg-ripe-malin h-100 rounded-top">
            <div className="flex-grow-1 w-100 d-flex align-items-center">
              <div
                className="bg-composed-wrapper--image rounded-top opacity-5"
                style={{ backgroundImage: 'url(' + people3 + ')' }}
              />
              <div className="bg-composed-wrapper--bg bg-second opacity-3 rounded-top" />
              <div className="bg-composed-wrapper--content text-center pt-5">
                <div className="text-white">
                  <h1 className="display-3 my-3 font-weight-bold">Register</h1>
                  <p className="font-size-lg mb-0 px-4 text-white-50">
                    Browse through the live previews to see just how powerful
                    this admin template really is!
                  </p>
                </div>
                <div className="shape-container-top-1" style={{ margin: 0 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320">
                    <path
                      fill="var(--white)"
                      fillOpacity="1"
                      d="M0,224L80,197.3C160,171,320,117,480,112C640,107,800,149,960,165.3C1120,181,1280,171,1360,165.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
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
                <div className="text-center my-4">
                  <h1 className="display-4 mb-1 font-weight-bold">
                    Create your account
                  </h1>
                  <p className="font-size-lg mb-0 text-black-50">
                    Start benefiting from our tools right away
                  </p>
                </div>
                <FormGroup>
                  <label className="font-weight-bold">Email address</label>
                  <Input placeholder="Enter your email address" type="email" />
                </FormGroup>
                <FormGroup>
                  <div className="d-flex justify-content-between mg-b-5">
                    <label className="font-weight-bold">Password</label>
                  </div>
                  <Input placeholder="Enter your password" type="password" />
                </FormGroup>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label className="font-weight-bold">First name</label>
                      <Input placeholder="Enter your firstname" type="text" />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label className="font-weight-bold">Last name</label>
                      <Input placeholder="Enter your lastname" type="text" />
                    </FormGroup>
                  </Col>
                </Row>
                <div className="form-group mb-3">
                  By clicking the <strong>Create account</strong> button below
                  you agree to our terms of service and privacy statement.
                </div>
                <div className="text-center mb-4">
                  <Button
                    color="primary"
                    className="text-uppercase font-weight-bold font-size-sm my-3">
                    Create account
                  </Button>
                </div>
              </div>
            </Col>
          </div>
        </Modal>
      </div>
    </>
  );
}
