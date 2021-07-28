import React from 'react';

import { Row, Col, Card, Button } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col md="6">
          <Card className="card-box bg-composed-wrapper bg-slick-carbon p-3 p-xl-4 mb-5 text-white">
            <div className="bg-composed-img-1 bg-composed-wrapper--image" />
            <div className="d-block text-center text-xl-left d-xl-flex justify-content-between align-items-center">
              <p className="opacity-9 font=size-xl mr-0 mr-xl-3 mb-4 mb-xl-0">
                Browse through the live previews to see just how powerful this
                admin template really is!
              </p>
              <Button
                color="info"
                className="text-nowrap px-4 text-uppercase font-size-xs font-weight-bold shadow-sm-dark">
                Issues
              </Button>
            </div>
          </Card>
        </Col>
        <Col md="6">
          <Card className="card-box bg-composed-wrapper bg-vicious-stance p-3 p-xl-4 mb-5 text-white">
            <div className="bg-composed-img-2 bg-composed-wrapper--image" />
            <div className="bg-composed-wrapper--content d-block text-center text-xl-left d-xl-flex justify-content-between align-items-center">
              <p className="opacity-9 font=size-xl mr-0 mr-xl-3 mb-4 mb-xl-0">
                Browse through the live previews to see just how powerful this
                admin template really is!
              </p>
              <Button
                color="danger"
                className="text-nowrap px-4 text-uppercase font-size-xs font-weight-bold shadow-sm-dark">
                Tasks
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
