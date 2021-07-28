import React from 'react';

import { Col, Container, Button } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <div className="py-5 bg-white rounded shadow-xxl shape-container-top-1">
        <Container className="py-0 py-lg-5 text-center">
          <div>
            <div className="badge bg-neutral-primary mb-5 text-primary h-auto py-2 px-3 font-size-xs badge-pill font-weight-normal">
              Marketing Plans
            </div>
            <h4 className="font-weight-bold text-second display-3">
              Try our services
            </h4>
            <Col md="8" lg="6" className="mx-auto">
              <p className="text-second opacity-6 mt-3 mb-5 font-size-xxl">
                Browse through the live previews to see just how powerful this
                admin template really is!
              </p>
            </Col>
          </div>
          <Button
            color="primary"
            className="px-5 font-size-sm font-weight-bold text-uppercase shadow-none py-3 hover-scale-sm hover-scale-lg mx-2">
            Get Started
          </Button>
        </Container>
      </div>
    </>
  );
}
