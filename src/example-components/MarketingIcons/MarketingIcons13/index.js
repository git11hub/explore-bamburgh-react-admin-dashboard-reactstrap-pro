import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Container } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <Card className="pt-5">
        <Container className="py-5">
          <Row>
            <Col md="6" xl="4">
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="card shadow-xxl card-border-top card-box-hover-rise border-primary text-center p-3 p-xl-4 mb-5 d-block">
                <div className="d-50 btn-icon rounded-circle bg-primary text-white mb-4 mx-auto">
                  <FontAwesomeIcon
                    icon={['far', 'keyboard']}
                    className="font-size-xl"
                  />
                </div>
                <h5 className="font-weight-bold font-size-lg text-second mb-4">
                  Profiles
                </h5>
                <div className="rounded-pill py-1 px-4 text-lowercase font-size-xs bg-neutral-first text-first d-inline-flex">
                  click for details
                </div>
              </a>
            </Col>
            <Col md="6" xl="4">
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="card shadow-xxl card-border-top card-box-hover-rise border-danger text-center p-3 p-xl-4 mb-5 d-block">
                <div className="d-50 btn-icon rounded-circle bg-danger text-white mb-4 mx-auto">
                  <FontAwesomeIcon
                    icon={['far', 'envelope']}
                    className="font-size-xl"
                  />
                </div>
                <h5 className="font-weight-bold font-size-lg text-second mb-4">
                  Applications
                </h5>
                <div className="rounded-pill py-1 px-4 text-lowercase font-size-xs bg-neutral-first text-first d-inline-flex">
                  click for details
                </div>
              </a>
            </Col>
            <Col md="6" xl="4">
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="card shadow-xxl card-border-top card-box-hover-rise border-success text-center p-3 p-xl-4 mb-5 d-block">
                <div className="d-50 btn-icon rounded-circle bg-success text-white mb-4 mx-auto">
                  <FontAwesomeIcon
                    icon={['far', 'address-card']}
                    className="font-size-xl"
                  />
                </div>
                <h5 className="font-weight-bold font-size-lg text-second mb-4">
                  Settings
                </h5>
                <div className="rounded-pill py-1 px-4 text-lowercase font-size-xs bg-neutral-first text-first d-inline-flex">
                  click for details
                </div>
              </a>
            </Col>
            <Col md="6" xl="4">
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="card shadow-xxl card-border-top card-box-hover-rise border-first text-center p-3 p-xl-4 mb-5 d-block">
                <div className="d-50 btn-icon rounded-circle bg-first text-white mb-4 mx-auto">
                  <FontAwesomeIcon
                    icon={['far', 'lightbulb']}
                    className="font-size-xl"
                  />
                </div>
                <h5 className="font-weight-bold font-size-lg text-second mb-4">
                  Invoices
                </h5>
                <div className="rounded-pill py-1 px-4 text-lowercase font-size-xs bg-neutral-first text-first d-inline-flex">
                  click for details
                </div>
              </a>
            </Col>
            <Col md="6" xl="4">
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="card shadow-xxl card-border-top card-box-hover-rise border-warning text-center p-3 p-xl-4 mb-5 d-block">
                <div className="d-50 btn-icon rounded-circle bg-warning text-white mb-4 mx-auto">
                  <FontAwesomeIcon
                    icon={['far', 'object-group']}
                    className="font-size-xl"
                  />
                </div>
                <h5 className="font-weight-bold font-size-lg text-second mb-4">
                  Campaigns
                </h5>
                <div className="rounded-pill py-1 px-4 text-lowercase font-size-xs bg-neutral-first text-first d-inline-flex">
                  click for details
                </div>
              </a>
            </Col>
            <Col md="6" xl="4">
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="card shadow-xxl card-border-top card-box-hover-rise border-info text-center p-3 p-xl-4 mb-5 d-block">
                <div className="d-50 btn-icon rounded-circle bg-info text-white mb-4 mx-auto">
                  <FontAwesomeIcon
                    icon={['fas', 'bomb']}
                    className="font-size-xl"
                  />
                </div>
                <h5 className="font-weight-bold font-size-lg text-second mb-4">
                  Performance
                </h5>
                <div className="rounded-pill py-1 px-4 text-lowercase font-size-xs bg-neutral-first text-first d-inline-flex">
                  click for details
                </div>
              </a>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
}
