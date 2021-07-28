import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                    <div className="text-center">
                      <h1 className="display-4 mb-1 font-weight-bold">Login</h1>
                      <p className="font-size-lg mb-0 text-black-50">
                        Fill in the fields below to login to your account
                      </p>
                    </div>
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
