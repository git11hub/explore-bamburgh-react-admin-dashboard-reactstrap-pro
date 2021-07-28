import React from 'react';

import { Row, Col, Card, Button } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col md="6">
          <Card className="card-box bg-neutral-success p-3 p-xl-4 mb-5">
            <div className="d-block text-center text-xl-left d-xl-flex justify-content-between align-items-center">
              <p className="opacity-9 font=size-xl mr-0 mr-xl-3 mb-4 mb-xl-0">
                Browse through the live previews to see just how powerful this
                admin template really is!
              </p>
              <Button
                color="success"
                className="text-nowrap px-4 text-uppercase font-size-sm font-weight-bold">
                Orders
              </Button>
            </div>
          </Card>
        </Col>
        <Col md="6">
          <Card className="card-box bg-neutral-warning p-3 p-xl-4 mb-5">
            <div className="d-block text-center text-xl-left d-xl-flex justify-content-between align-items-center">
              <p className="opacity-9 font=size-xl mr-0 mr-xl-3 mb-4 mb-xl-0">
                Browse through the live previews to see just how powerful this
                admin template really is!
              </p>
              <Button
                color="warning"
                className="text-nowrap px-4 text-uppercase font-size-sm font-weight-bold">
                Contact
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
