import React from 'react';

import { Row, Col, Card, Progress } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <Card className="p-4 mb-5">
        <Row className="d-flex align-items-center">
          <Col xl="6">
            <div className="text-black-50 pb-3">Project management</div>
            <div className="d-flex justify-content-center">
              <div>
                <div className="text-center font-size-lg px-5">
                  <span className="font-weight-bold">456</span>
                  <small className="text-black-50 d-block">Visitors</small>
                </div>
              </div>
              <div>
                <div className="text-center font-size-lg px-5">
                  <span className="font-weight-bold text-first">+34</span>
                  <small className="text-black-50 d-block">New users</small>
                </div>
              </div>
              <div>
                <div className="text-center font-size-lg px-5">
                  <span className="font-weight-bold">56%</span>
                  <small className="text-black-50 d-block">Increase</small>
                </div>
              </div>
            </div>
          </Col>
          <Col xl="6">
            <div className="text-black-50 pb-3">Current progress</div>
            <Progress
              className="progress-animated-alt progress-bar-rounded"
              color="success"
              value="34">
              34%
            </Progress>
            <div className="align-box-row mt-1 text-muted">
              <div className="font-weight-bold">Orders</div>
              <div className="ml-auto">
                <div className="font-size-lg font-weight-bold text-success">
                  348
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Card>

      <Card className="card-box p-4 text-center mb-5">
        <Row>
          <Col md="4">
            <div className="mb-1 font-weight-bold font-size-xl">76%</div>
            <Progress
              className="p-2 bg-secondary box-sizing-content progress-sm progress-bar-rounded-alt"
              color="danger"
              value="76"
            />
            <div className="text-black-50 pt-2">Sales</div>
          </Col>
          <Col md="4">
            <div className="mb-1 font-weight-bold font-size-xl">23%</div>
            <Progress
              className="p-2 bg-secondary box-sizing-content progress-sm progress-bar-rounded-alt"
              color="info"
              value="23"
            />
            <div className="text-black-50 pt-2">Profiles</div>
          </Col>
          <Col md="4">
            <div className="mb-1 font-weight-bold font-size-xl">51%</div>
            <Progress
              className="p-2 bg-secondary box-sizing-content progress-sm progress-bar-rounded-alt"
              color="warning"
              value="51"
            />
            <div className="text-black-50 pt-2">Tickets</div>
          </Col>
        </Row>
      </Card>

      <Card className="card-box bg-royal p-4 text-center mb-5">
        <Row>
          <Col md="4">
            <div className="mb-1 font-weight-bold font-size-xl text-white">
              88%
            </div>
            <Progress
              className="p-2 bg-white-10 box-sizing-content progress-sm progress-bar-rounded-alt"
              color="success"
              value="88"
            />
            <div className="text-white-50 pt-2">Sales</div>
          </Col>
          <Col md="4">
            <div className="mb-1 font-weight-bold font-size-xl text-white">
              61%
            </div>
            <Progress
              className="p-2 bg-white-10 box-sizing-content progress-sm progress-bar-rounded-alt"
              color="warning"
              value="61"
            />
            <div className="text-white-50 pt-2">Profiles</div>
          </Col>
          <Col md="4">
            <div className="mb-1 font-weight-bold font-size-xl text-white">
              53%
            </div>
            <Progress
              className="p-2 bg-white-10 box-sizing-content progress-sm progress-bar-rounded-alt"
              color="first"
              value="53"
            />
            <div className="text-white-50 pt-2">Tickets</div>
          </Col>
        </Row>
      </Card>
    </>
  );
}
