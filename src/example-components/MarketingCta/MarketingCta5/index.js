import React from 'react';

import { Row, Col, Card, Button } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col xl="4">
          <Card className="card-box-alt card-border-top border-success mb-5 p-4 hover-scale-sm">
            <h3 className="font-size-lg font-weight-bold px-3 px-xl-4 m-0">
              Bamburgh React Admin Dashboard with Reactstrap PRO
            </h3>
            <p className="card-text px-3 px-xl-4 my-4">
              Browse through the live previews to see just how powerful this
              admin template really is!
            </p>
            <Button
              tag="a"
              href="#/"
              onClick={(e) => e.preventDefault()}
              color="link"
              className="btn-link-first mb-2 p-0"
              title="Find out more">
              <span>Find out more</span>
            </Button>
          </Card>
        </Col>
        <Col xl="4">
          <Card className="card-box-alt card-border-top border-warning mb-5 p-4 hover-scale-sm">
            <h3 className="font-size-lg font-weight-bold px-3 px-xl-4 m-0">
              Bamburgh React Admin Dashboard with Reactstrap PRO
            </h3>
            <p className="card-text px-3 px-xl-4 my-4">
              Browse through the live previews to see just how powerful this
              admin template really is!
            </p>
            <Button
              tag="a"
              href="#/"
              onClick={(e) => e.preventDefault()}
              color="link"
              className="btn-link-first mb-2 p-0"
              title="Find out more">
              <span>Find out more</span>
            </Button>
          </Card>
        </Col>
        <Col xl="4">
          <Card className="card-box-alt card-border-top border-first mb-5 p-4 hover-scale-sm">
            <h3 className="font-size-lg font-weight-bold px-3 px-xl-4 m-0">
              Bamburgh React Admin Dashboard with Reactstrap PRO
            </h3>
            <p className="card-text px-3 px-xl-4 my-4">
              Browse through the live previews to see just how powerful this
              admin template really is!
            </p>
            <Button
              tag="a"
              href="#/"
              onClick={(e) => e.preventDefault()}
              color="link"
              className="btn-link-first mb-2 p-0"
              title="Find out more">
              <span>Find out more</span>
            </Button>
          </Card>
        </Col>
      </Row>
    </>
  );
}
