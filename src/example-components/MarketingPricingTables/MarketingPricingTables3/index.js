import React from 'react';

import { Row, Col, Card, Container, Badge, Button } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <div className="bg-light">
        <Container className="py-3 py-xl-5">
          <div className="d-block d-xl-flex mb-5 justify-content-between">
            <div>
              <h1 className="display-3 text-dark mb-2 font-weight-bold">
                Plans & pricing
              </h1>
              <p className="font-size-lg text-black">
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
                  className="btn-pill"
                  outline
                  color="second">
                  Monthly
                </Button>
                <Button
                  tag="a"
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="btn-pill"
                  outline
                  color="second">
                  Yearly
                </Button>
              </div>
            </div>
          </div>
          <div className="divider" />
          <Row className="d-flex align-items-center">
            <Col xl="4">
              <Card className="mb-5 card-box-hover-rise card-box-hover">
                <div className="card-body px-4 pb-4 pt-3 text-center">
                  <h3 className="display-4 my-3 font-weight-bold text-dark">
                    Standard
                  </h3>
                  <span className="display-2 font-weight-bold">
                    <small className="font-size-lg">$</small>
                    69
                  </span>
                  <p className="text-black-50 mb-0">
                    monthly fee, for a single user
                  </p>
                  <Button
                    tag="a"
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    color="success"
                    size="lg"
                    outline
                    className="btn-block font-weight-bold text-uppercase my-4">
                    Buy now
                  </Button>
                  <ul className="list-unstyled text-left mb-3 font-weight-bold font-size-sm">
                    <li className="px-4 py-2">
                      <Badge
                        color="success"
                        className="badge-circle-inner mr-2">
                        Success
                      </Badge>
                      Unlimited Tasks
                    </li>
                    <li className="px-4 py-2">
                      <Badge
                        color="success"
                        className="badge-circle-inner mr-2">
                        Success
                      </Badge>
                      Unlimited Teams
                    </li>
                    <li className="px-4 py-2">
                      <Badge
                        color="success"
                        className="badge-circle-inner mr-2">
                        Success
                      </Badge>
                      All Integrations
                    </li>
                    <li className="px-4 py-2 text-black-50">
                      <Badge color="danger" className="badge-circle-inner mr-2">
                        Danger
                      </Badge>
                      Premium support
                    </li>
                  </ul>
                </div>
              </Card>
            </Col>
            <Col xl="4">
              <Card className="card-box shadow-xxl border-3 border-success mb-5">
                <div className="card-body px-5 pb-5 pt-4 text-center">
                  <h3 className="display-3 my-3 font-weight-bold text-black">
                    Business
                  </h3>
                  <span className="display-2 font-weight-bold">
                    <small className="font-size-lg">$</small>
                    139
                  </span>
                  <p className="text-black-50 mb-0">
                    monthly fee, for a single user
                  </p>
                  <Button
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                    color="success"
                    block
                    className="font-weight-bold text-uppercase my-4">
                    Buy now
                  </Button>
                  <ul className="list-unstyled text-left mb-3 font-weight-bold font-size-sm">
                    <li className="px-4 py-2">
                      <Badge
                        color="success"
                        className="badge-circle-inner mr-2">
                        Success
                      </Badge>
                      Unlimited Tasks
                    </li>
                    <li className="px-4 py-2">
                      <Badge
                        color="success"
                        className="badge-circle-inner mr-2">
                        Success
                      </Badge>
                      Unlimited Teams
                    </li>
                    <li className="px-4 py-2">
                      <Badge
                        color="success"
                        className="badge-circle-inner mr-2">
                        Success
                      </Badge>
                      All Integrations
                    </li>
                    <li className="px-4 py-2 text-black-50">
                      <Badge color="danger" className="badge-circle-inner mr-2">
                        Danger
                      </Badge>
                      Premium support
                    </li>
                  </ul>
                </div>
              </Card>
            </Col>
            <Col xl="4">
              <Card className="mb-5 card-box-hover-rise card-box-hover">
                <div className="card-body px-4 pb-4 pt-3 text-center">
                  <h3 className="display-4 my-3 font-weight-bold text-dark">
                    Enterprise
                  </h3>
                  <span className="display-2 font-weight-bold">
                    <small className="font-size-lg">$</small>
                    99
                  </span>
                  <p className="text-black-50 mb-0">
                    monthly fee, for a single user
                  </p>
                  <Button
                    tag="a"
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    color="success"
                    size="lg"
                    outline
                    className="btn-block font-weight-bold text-uppercase my-4">
                    Buy now
                  </Button>
                  <ul className="list-unstyled text-left mb-3 font-weight-bold font-size-sm">
                    <li className="px-4 py-2">
                      <Badge
                        color="success"
                        className="badge-circle-inner mr-2">
                        Success
                      </Badge>
                      Unlimited Tasks
                    </li>
                    <li className="px-4 py-2">
                      <Badge
                        color="success"
                        className="badge-circle-inner mr-2">
                        Success
                      </Badge>
                      Unlimited Teams
                    </li>
                    <li className="px-4 py-2">
                      <Badge
                        color="success"
                        className="badge-circle-inner mr-2">
                        Success
                      </Badge>
                      All Integrations
                    </li>
                    <li className="px-4 py-2 text-black-50">
                      <Badge color="danger" className="badge-circle-inner mr-2">
                        Danger
                      </Badge>
                      Premium support
                    </li>
                  </ul>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
