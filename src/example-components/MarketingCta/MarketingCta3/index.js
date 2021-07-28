import React from 'react';

import { Row, Col, Card, Button } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col lg="6">
          <Card className="bg-neutral-first d-block card-border-top border-first text-center p-4 p-xl-5 mb-5">
            <h4 className="px-3 px-xl-5 display-4 line-height-2 font-weight-bold mb-0">
              Bamburgh React Admin Dashboard with Reactstrap PRO
            </h4>
            <p className="px-3 px-xl-5 opacity-6 font-size-lg my-4">
              Browse through the live previews to see just how powerful this
              admin template really is!
            </p>
            <Button
              color="first"
              className="px-4 text-uppercase font-size-sm hover-scale-lg font-weight-bold">
              Browse Issues
            </Button>
          </Card>
        </Col>
        <Col lg="6">
          <Card className="bg-neutral-danger d-block card-border-top border-danger text-center p-4 p-xl-5 mb-5">
            <h4 className="px-3 px-xl-5 display-4 line-height-2 font-weight-bold mb-0">
              Bamburgh React Admin Dashboard with Reactstrap PRO
            </h4>
            <p className="px-3 px-xl-5 opacity-6 font-size-lg my-4">
              Browse through the live previews to see just how powerful this
              admin template really is!
            </p>
            <Button
              color="danger"
              className="px-4 text-uppercase font-size-sm hover-scale-lg font-weight-bold">
              Get in Touch
            </Button>
          </Card>
        </Col>
      </Row>
    </>
  );
}
