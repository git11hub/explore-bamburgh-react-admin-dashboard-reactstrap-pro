import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Button } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col md="6" lg="4">
          <Card className="rounded shadow-xxl mb-5">
            <div className="p-3 p-lg-4">
              <div className="bg-deep-blue text-white font-size-xl d-60 btn-icon card-icon-wrapper rounded-circle">
                <FontAwesomeIcon icon={['far', 'envelope']} />
              </div>
              <h3 className="font-weight-bold display-5 mt-4 mb-3">
                Lightweight
              </h3>
              <p className="card-text mb-4">
                Browse through the live previews to see just how powerful this
                admin template really is!
              </p>
              <div className="text-center">
                <Button
                  tag="a"
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  color="primary"
                  className="btn-block mt-1 text-uppercase font-size-sm rounded d-inline-block"
                  target="_blank"
                  title="Learn more">
                  <span>Learn more</span>
                </Button>
              </div>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="4">
          <Card className="rounded shadow-xxl mb-5">
            <div className="p-3 p-lg-4">
              <div className="bg-sunny-morning text-white font-size-xl d-60 btn-icon card-icon-wrapper rounded-circle">
                <FontAwesomeIcon icon={['far', 'keyboard']} />
              </div>
              <h3 className="font-weight-bold display-5 mt-4 mb-3">
                Simple to use
              </h3>
              <p className="card-text mb-4">
                Browse through the live previews to see just how powerful this
                admin template really is!
              </p>
              <div className="text-center">
                <Button
                  tag="a"
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  color="primary"
                  className="btn-block mt-1 text-uppercase font-size-sm rounded d-inline-block"
                  target="_blank"
                  title="Learn more">
                  <span>Learn more</span>
                </Button>
              </div>
            </div>
          </Card>
        </Col>
        <Col md="12" lg="4">
          <Card className="rounded shadow-xxl mb-5">
            <div className="p-3 p-lg-4">
              <div className="bg-grow-early text-white font-size-xl d-60 btn-icon card-icon-wrapper rounded-circle">
                <FontAwesomeIcon icon={['far', 'address-card']} />
              </div>
              <h3 className="font-weight-bold display-5 mt-4 mb-3">
                Starter Templates
              </h3>
              <p className="card-text mb-4">
                Browse through the live previews to see just how powerful this
                admin template really is!
              </p>
              <div className="text-center">
                <Button
                  tag="a"
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  color="primary"
                  className="btn-block mt-1 text-uppercase font-size-sm rounded d-inline-block"
                  target="_blank"
                  title="Learn more">
                  <span>Learn more</span>
                </Button>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
