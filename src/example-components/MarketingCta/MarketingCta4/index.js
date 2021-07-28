import React from 'react';

import { Row, Col, Card, Button } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col lg="6">
          <Card className="card-box bg-composed-wrapper bg-plum-plate border-0 text-center p-4 p-xl-5 mb-5 shadow-xxl">
            <div className="bg-composed-img-4 bg-composed-wrapper--image rounded" />
            <div className="bg-composed-wrapper--content text-light">
              <h4 className="display-4 font-weight-bold mb-0">
                Bamburgh React Admin Dashboard with Reactstrap PRO
              </h4>
              <p className="opacity-6 font-size-lg my-4">
                Browse through the live previews to see just how powerful this
                admin template really is!
              </p>
              <Button
                color="warning"
                className="text-nowrap px-4 text-uppercase font-size-sm font-weight-bold">
                Browse Issues
              </Button>
            </div>
          </Card>
        </Col>
        <Col lg="6">
          <Card className="card-box bg-composed-wrapper bg-midnight-bloom border-0 text-center p-4 p-xl-5 mb-5 shadow-xxl">
            <div className="bg-composed-img-2 bg-composed-wrapper--image rounded" />
            <div className="bg-composed-wrapper--content text-light">
              <h4 className="display-4 font-weight-bold mb-0">
                Bamburgh React Admin Dashboard with Reactstrap PRO
              </h4>
              <p className="opacity-6 font-size-lg my-4">
                Browse through the live previews to see just how powerful this
                admin template really is!
              </p>
              <Button
                color="danger"
                className="text-nowrap px-4 text-uppercase font-size-sm font-weight-bold">
                Get in Touch
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
