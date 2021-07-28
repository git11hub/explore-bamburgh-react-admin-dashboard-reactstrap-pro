import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Button } from 'reactstrap';

import stock2 from '../../../assets/images/stock-photos/stock-6.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <Card className="card-box card-box-hover-rise mb-5">
        <Row className="no-gutters">
          <Col lg="6">
            <div className="p-5">
              <a href="#/" onClick={(e) => e.preventDefault()}>
                <h1 className="display-3 mt-3 mb-4 font-weight-bold">
                  Bamburgh React Admin Dashboard with Reactstrap PRO
                </h1>
              </a>
              <p className="font-size-xxl text-black-50">
                Browse through the live previews to see just how powerful this
                admin template really is!
              </p>
              <p className="mb-5 font-size-lg">
                This admin template is a complete frontend solution for
                easy-building applications or presentation websites. It&#39;s
                fully responsive and designed by professional UI&#x2F;UX
                designers and developers.
              </p>
              <Button
                tag="a"
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="btn-pill hover-scale-lg"
                color="primary">
                <span className="btn-wrapper--label">Continue reading</span>
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                </span>
              </Button>
            </div>
          </Col>
          <Col lg="6">
            <img
              alt="..."
              className="rounded br-lg-left-0 img-fit-container"
              src={stock2}
            />
          </Col>
        </Row>
      </Card>
    </>
  );
}
