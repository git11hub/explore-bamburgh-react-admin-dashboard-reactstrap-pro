import React from 'react';

import { Row, Col, Card, Container, Button } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <div className="bg-deep-sky py-5 my-5 rounded">
        <Container className="py-3 py-xl-5">
          <div className="d-block d-xl-flex mb-5 justify-content-between">
            <div>
              <h1 className="display-3 text-white mb-2 font-weight-bold">
                Plans & pricing
              </h1>
              <p className="font-size-lg text-white-50">
                Browse through the live previews to see just how powerful this
                admin template really is!
              </p>
            </div>
            <div className="d-flex align-items-center">
              <div role="group" className="btn-group-lg nav btn-group">
                <Button
                  tag="a"
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  active
                  className="btn-pill btn-transition-none shadow-none"
                  outline
                  color="secondary">
                  Monthly
                </Button>
                <Button
                  tag="a"
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="btn-pill btn-transition-none shadow-none"
                  outline
                  color="secondary">
                  Yearly
                </Button>
              </div>
            </div>
          </div>
          <div className="divider bg-white-10 mb-5" />
          <Row className="no-gutters d-flex align-items-center">
            <Col xl="4">
              <Card className="mb-5 br-xl-right-0 card-box-hover">
                <div className="card-body p-4 text-center">
                  <h3 className="font-size-xxl my-3 text-second">Standard</h3>
                  <span className="display-3 text-first">
                    <small className="font-size-lg">$</small>
                    69
                  </span>
                  <p className="text-black-50 mb-0">single user, monthly fee</p>
                  <div className="divider opacity-4 my-4" />
                  <ul className="list-unstyled text-center font-weight-bold mb-3">
                    <li className="py-2">Unlimited Tasks</li>
                    <li className="py-2">Unlimited Teams</li>
                    <li className="py-2">All Integrations</li>
                    <li className="px-4 py-2 text-black-50">Premium support</li>
                  </ul>
                  <Button
                    tag="a"
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    color="first"
                    outline
                    className="font-weight-bold font-size-sm text-uppercase my-3">
                    Buy now
                  </Button>
                </div>
              </Card>
            </Col>
            <Col xl="4">
              <Card className="card-box shadow-sm z-over border-3 border-white mb-5">
                <div className="card-body px-5 pb-5 pt-4 text-center">
                  <h3 className="display-3 my-3 font-weight-bold text-black">
                    Business
                  </h3>
                  <span className="display-3 text-first">
                    <small className="font-size-lg">$</small>
                    139
                  </span>
                  <p className="text-black-50 mb-0">
                    monthly fee, for a single user
                  </p>
                  <div className="divider opacity-4 my-4" />

                  <ul className="list-unstyled text-center font-weight-bold mb-3">
                    <li className="py-2">Unlimited Tasks</li>
                    <li className="py-2">Unlimited Teams</li>
                    <li className="py-2">All Integrations</li>
                    <li className="px-4 py-2 text-black-50">Premium support</li>
                  </ul>
                  <Button
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                    color="first"
                    className="font-weight-bold font-size-sm text-uppercase my-3">
                    Buy now
                  </Button>
                </div>
              </Card>
            </Col>
            <Col xl="4">
              <Card className="mb-5 br-xl-left-0">
                <div className="card-body p-4 text-center">
                  <h3 className="font-size-xxl my-3 text-second">Enterprise</h3>
                  <span className="display-3 text-first">
                    <small className="font-size-lg">$</small>
                    99
                  </span>
                  <p className="text-black-50 mb-0">single user, monthly fee</p>
                  <div className="divider opacity-4 my-4" />
                  <ul className="list-unstyled text-center font-weight-bold mb-3">
                    <li className="py-2">Unlimited Tasks</li>
                    <li className="py-2">Unlimited Teams</li>
                    <li className="py-2">All Integrations</li>
                    <li className="px-4 py-2 text-black-50">Premium support</li>
                  </ul>

                  <Button
                    tag="a"
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    color="first"
                    outline
                    className="font-weight-bold font-size-sm text-uppercase my-3">
                    Buy now
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
