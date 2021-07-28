import React from 'react';

import { Row, Col, Card, Container, Button } from 'reactstrap';

import svgImage1 from '../../../assets/images/illustrations/pack4/business_plan.svg';
import svgImage13 from '../../../assets/images/illustrations/pack4/businesswoman.svg';
import svgImage14 from '../../../assets/images/illustrations/pack4/powerful.svg';
export default function LivePreviewExample() {
  return (
    <>
      <Card>
        <Container className="pt-5">
          <Row>
            <Col lg="4">
              <div className="feature-box text-center mb-5">
                <img
                  src={svgImage1}
                  style={{ height: 90 }}
                  className="mx-auto d-block img-fluid"
                  alt="..."
                />
                <h3 className="font-size-xl font-weight-bold my-3">Widgets</h3>
                <p className="text-black-50 mb-3">
                  Browse through the live previews to see just how powerful this
                  admin template really is!
                </p>
                <Button
                  tag="a"
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  color="first"
                  size="sm"
                  title="Learn more">
                  <span>Learn more</span>
                </Button>
              </div>
            </Col>
            <Col lg="4">
              <div className="feature-box text-center mb-5">
                <img
                  src={svgImage13}
                  style={{ height: 90 }}
                  className="mx-auto d-block img-fluid"
                  alt="..."
                />
                <h3 className="font-size-xl font-weight-bold my-3">
                  Components
                </h3>
                <p className="text-black-50 mb-3">
                  Browse through the live previews to see just how powerful this
                  admin template really is!
                </p>
                <Button
                  tag="a"
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  color="first"
                  size="sm"
                  title="Learn more">
                  <span>Learn more</span>
                </Button>
              </div>
            </Col>
            <Col lg="4">
              <div className="feature-box text-center mb-5">
                <img
                  src={svgImage14}
                  style={{ height: 90 }}
                  className="mx-auto d-block img-fluid"
                  alt="..."
                />
                <h3 className="font-size-xl font-weight-bold my-3">Blocks</h3>
                <p className="text-black-50 mb-3">
                  Browse through the live previews to see just how powerful this
                  admin template really is!
                </p>
                <Button
                  tag="a"
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  color="first"
                  size="sm"
                  title="Learn more">
                  <span>Learn more</span>
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
}
