import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Progress } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col lg="6" xl="4">
          <Card className="card-box p-4 mb-5">
            <div className="d-flex justify-content-between mb-4">
              <div className="d-40 rounded-sm btn-icon bg-neutral-first text-first text-center font-size-lg">
                <FontAwesomeIcon icon={['far', 'keyboard']} />
              </div>
              <div className="font-size-lg line-height-sm text-second text-right">
                <div className="font-weight-bold">$3,485</div>
                <small className="opacity-5">Sales</small>
              </div>
            </div>
            <div>
              <div className="d-flex mb-1 font-weight-bold justify-content-between font-size-sm">
                <div className="text-uppercase opacity-6">Target</div>
                <div>17%</div>
              </div>
              <Progress
                animated
                className="progress-sm"
                color="first"
                value="17"
              />
            </div>
          </Card>
        </Col>
        <Col lg="6" xl="4">
          <Card className="card-box p-4 mb-5">
            <div className="d-flex justify-content-between mb-4">
              <div className="d-40 rounded-sm btn-icon bg-neutral-success text-success text-center font-size-lg">
                <FontAwesomeIcon icon={['far', 'file-excel']} />
              </div>
              <div className="font-size-lg line-height-sm text-second text-right">
                <div className="font-weight-bold">436</div>
                <small className="opacity-5">Reports</small>
              </div>
            </div>
            <div>
              <div className="d-flex mb-1 font-weight-bold justify-content-between font-size-sm">
                <div className="text-uppercase opacity-6">Target</div>
                <div>44%</div>
              </div>
              <Progress
                animated
                className="progress-sm"
                color="success"
                value="44"
              />
            </div>
          </Card>
        </Col>
        <Col lg="12" xl="4">
          <Card className="card-box p-4 mb-5">
            <div className="d-flex justify-content-between mb-4">
              <div className="d-40 rounded-sm btn-icon bg-neutral-danger text-danger text-center font-size-lg">
                <FontAwesomeIcon icon={['far', 'user']} />
              </div>
              <div className="font-size-lg line-height-sm text-second text-right">
                <div className="font-weight-bold">4867</div>
                <small className="opacity-5">Visitors</small>
              </div>
            </div>
            <div>
              <div className="d-flex mb-1 font-weight-bold justify-content-between font-size-sm">
                <div className="text-uppercase opacity-6">Target</div>
                <div>65%</div>
              </div>
              <Progress
                animated
                className="progress-sm"
                color="danger"
                value="65"
              />
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
