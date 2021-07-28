import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Container, Button } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <Container className="py-3 py-xl-5">
        <div className="text-center mb-5">
          <h1 className="display-2 text-black mb-3 font-weight-bold">
            Plans & pricing
          </h1>
          <p className="font-size-xl mb-5 text-black-50">
            Indignation and dislike men who are so beguiled and demoralized.
          </p>
        </div>
        <Row className="d-flex align-items-center">
          <Col xl="4">
            <Card className="mb-5">
              <div className="card-body px-4 pb-4 pt-3 text-center">
                <h3 className="font-size-xxl text-uppercase my-4 font-weight-bold text-info">
                  Small
                </h3>
                <div className="bg-neutral-info p-3 rounded mb-4">
                  <span className="display-2 font-weight-bold">
                    <small>$</small>
                    69
                  </span>
                  <div className="text-black-50">Per month</div>
                </div>
                <ul className="list-unstyled text-lg-left mb-4 font-size-sm">
                  <li className="px-4 py-2">
                    <FontAwesomeIcon
                      icon={['far', 'check-circle']}
                      className="text-success mr-2"
                    />
                    Unlimited Tasks
                  </li>
                  <li className="px-4 py-2">
                    <FontAwesomeIcon
                      icon={['far', 'check-circle']}
                      className="text-success mr-2"
                    />
                    Unlimited Teams
                  </li>
                  <li className="px-4 py-2">
                    <FontAwesomeIcon
                      icon={['far', 'check-circle']}
                      className="text-success mr-2"
                    />
                    All Integrations
                  </li>
                  <li className="px-4 py-2 text-black-50">
                    <FontAwesomeIcon
                      icon={['far', 'times-circle']}
                      className="text-danger mr-2"
                    />
                    Premium support
                  </li>
                </ul>
                <Button
                  tag="a"
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                  className="btn-pill"
                  outline
                  color="info"
                  block>
                  Buy now
                </Button>
              </div>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="card-box border-2 border-first mb-5">
              <div className="card-body px-5 pb-5 pt-4 text-center">
                <h3 className="font-size-xxl text-uppercase my-4 font-weight-bold text-first">
                  Medium
                </h3>
                <div className="bg-neutral-first p-3 rounded mb-4">
                  <span className="display-2 font-weight-bold">
                    <small>$</small>
                    139
                  </span>
                  <div className="text-black-50">Per month</div>
                </div>
                <ul className="list-unstyled text-lg-left mb-4 font-weight-bold font-size-sm">
                  <li className="px-4 py-2">
                    <FontAwesomeIcon
                      icon={['far', 'check-circle']}
                      className="text-success mr-2"
                    />
                    Unlimited Tasks
                  </li>
                  <li className="px-4 py-2">
                    <FontAwesomeIcon
                      icon={['far', 'check-circle']}
                      className="text-success mr-2"
                    />
                    Unlimited Teams
                  </li>
                  <li className="px-4 py-2">
                    <FontAwesomeIcon
                      icon={['far', 'check-circle']}
                      className="text-success mr-2"
                    />
                    All Integrations
                  </li>
                  <li className="px-4 py-2 text-black-50">
                    <FontAwesomeIcon
                      icon={['far', 'times-circle']}
                      className="text-danger mr-2"
                    />
                    Premium support
                  </li>
                </ul>
                <Button
                  tag="a"
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                  block
                  color="first"
                  className="btn-pill">
                  Buy now
                </Button>
              </div>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="mb-5">
              <div className="card-body px-4 pb-4 pt-3 text-center">
                <h3 className="font-size-xxl text-uppercase my-4 font-weight-bold text-warning">
                  Large
                </h3>
                <div className="bg-neutral-warning p-3 rounded mb-4">
                  <span className="display-2 font-weight-bold">
                    <small>$</small>
                    99
                  </span>
                  <div className="text-black-50">Per month</div>
                </div>
                <ul className="list-unstyled text-lg-left mb-4 font-size-sm">
                  <li className="px-4 py-2">
                    <FontAwesomeIcon
                      icon={['far', 'check-circle']}
                      className="text-success mr-2"
                    />
                    Unlimited Tasks
                  </li>
                  <li className="px-4 py-2">
                    <FontAwesomeIcon
                      icon={['far', 'check-circle']}
                      className="text-success mr-2"
                    />
                    Unlimited Teams
                  </li>
                  <li className="px-4 py-2">
                    <FontAwesomeIcon
                      icon={['far', 'check-circle']}
                      className="text-success mr-2"
                    />
                    All Integrations
                  </li>
                  <li className="px-4 py-2 text-black-50">
                    <FontAwesomeIcon
                      icon={['far', 'times-circle']}
                      className="text-danger mr-2"
                    />
                    Premium support
                  </li>
                </ul>
                <Button
                  tag="a"
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                  className="btn-pill"
                  outline
                  color="warning"
                  block>
                  Buy now
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
