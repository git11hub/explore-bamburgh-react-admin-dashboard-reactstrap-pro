import React from 'react';

import { Col, FormGroup, Input, Button } from 'reactstrap';

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
                    <div className="text-center mb-5">
                      <h1 className="display-4 mb-1 font-weight-bold">
                        Recover Password
                      </h1>
                      <p className="font-size-lg mb-0 text-black-50">
                        Forgot your password? No worries, we're here to help!
                      </p>
                    </div>
                    <FormGroup>
                      <label className="font-weight-bold">Email address</label>
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
