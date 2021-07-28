import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, CardBody, Card, Badge } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col md="6" xl="3">
          <Card className="card-box mb-5">
            <div className="card-indicator bg-first" />
            <CardBody className="px-4 py-3">
              <div className="pb-3 d-flex justify-content-between">
                <a href="#/" onClick={(e) => e.preventDefault()}>
                  Presentation site UX
                </a>
              </div>
              <div className="d-flex align-items-center justify-content-start">
                <Badge color="first" className="px-3">
                  On hold
                </Badge>
                <div className="font-size-sm text-danger px-2">
                  <FontAwesomeIcon icon={['far', 'clock']} className="mr-1" />
                  14:22
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md="6" xl="3">
          <Card className="card-box mb-5">
            <div className="card-indicator bg-info" />
            <CardBody className="px-4 py-3">
              <div className="pb-3 d-flex justify-content-between">
                <a href="#/" onClick={(e) => e.preventDefault()}>
                  Implement in Vuejs
                </a>
              </div>
              <div className="d-flex align-items-center justify-content-start">
                <Badge color="info" className="px-3">
                  Processed
                </Badge>
                <div className="font-size-sm text-dark px-2">
                  <FontAwesomeIcon icon={['far', 'clock']} className="mr-1" />
                  17:56
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md="6" xl="3">
          <Card className="card-box mb-5">
            <div className="card-indicator bg-success" />
            <CardBody className="px-4 py-3">
              <div className="pb-3 d-flex justify-content-between">
                <a href="#/" onClick={(e) => e.preventDefault()}>
                  Create UI mockups
                </a>
              </div>
              <div className="d-flex align-items-center justify-content-start">
                <Badge color="success" className="px-3">
                  Fixed
                </Badge>
                <div className="font-size-sm text-dark px-2">
                  <FontAwesomeIcon icon={['far', 'clock']} className="mr-1" />
                  09:41
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md="6" xl="3">
          <Card className="card-box mb-5">
            <div className="card-indicator bg-warning" />
            <CardBody className="px-4 py-3">
              <div className="pb-3 d-flex justify-content-between">
                <a href="#/" onClick={(e) => e.preventDefault()}>
                  UX research
                </a>
              </div>
              <div className="d-flex align-items-center justify-content-start">
                <Badge color="warning" className="px-3">
                  Scheduled
                </Badge>
                <div className="font-size-sm text-danger px-2">
                  <FontAwesomeIcon icon={['far', 'clock']} className="mr-1" />
                  11:35
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
