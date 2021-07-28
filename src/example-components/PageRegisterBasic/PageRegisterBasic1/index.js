import React from 'react';

import { Row, Col, FormGroup, Input, Button } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <div className="app-wrapper bg-white min-vh-100">
        <div className="app-main min-vh-100">
          <div className="app-content p-0">
            <div className="app-content--inner d-flex align-items-center">
              <div className="flex-grow-1 w-100 d-flex align-items-center">
                <div className="bg-composed-wrapper--content py-5">
                  <Col md="10" lg="8" xl="4" className="mx-auto">
                    <div className="text-center mb-4">
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
                      <Input
                        placeholder="Enter your password"
                        type="password"
                      />
                    </FormGroup>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <label className="font-weight-bold">First name</label>
                          <Input
                            placeholder="Enter your firstname"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <label className="font-weight-bold">Last name</label>
                          <Input
                            placeholder="Enter your lastname"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <div className="form-group mb-3">
                      By clicking the <strong>Create account</strong> button
                      below you agree to our terms of service and privacy
                      statement.
                    </div>
                    <div className="text-center mb-5">
                      <Button
                        color="primary"
                        className="text-uppercase font-weight-bold font-size-sm my-3">
                        Create account
                      </Button>
                    </div>
                  </Col>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
