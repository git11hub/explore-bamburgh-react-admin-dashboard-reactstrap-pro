import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, CardBody, Card, Button } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col xl="4">
          <Card className="shadow-xxl card-box-hover-rise mb-5 p-2">
            <CardBody>
              <div className="bg-deep-blue text-center text-white font-size-xl d-60 rounded-circle btn-icon">
                <FontAwesomeIcon icon={['far', 'envelope']} />
              </div>
              <h3 className="heading-6 mt-4 mb-3 font-weight-bold">
                Lightweight
              </h3>
              <p className="card-text mb-3">
                Browse through the live previews to see just how powerful this
                admin template really is!
              </p>
              <Button
                tag="a"
                href="#/"
                onClick={(e) => e.preventDefault()}
                color="link"
                className="btn-link-primary pl-0 pr-0"
                title="Learn more">
                <span>Learn more</span>
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col xl="4">
          <Card className="shadow-xxl card-box-hover-rise mb-5 p-2">
            <CardBody>
              <div className="bg-sunny-morning text-center text-white font-size-xl d-60 rounded-circle btn-icon">
                <FontAwesomeIcon icon={['far', 'keyboard']} />
              </div>
              <h3 className="heading-6 mt-4 mb-3 font-weight-bold">
                Simple to use
              </h3>
              <p className="card-text mb-3">
                Browse through the live previews to see just how powerful this
                admin template really is!
              </p>
              <Button
                tag="a"
                href="#/"
                onClick={(e) => e.preventDefault()}
                color="link"
                className="btn-link-primary pl-0 pr-0"
                title="Learn more">
                <span>Learn more</span>
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col xl="4">
          <Card className="shadow-xxl card-box-hover-rise mb-5 p-2">
            <CardBody>
              <div className="bg-grow-early text-center text-white font-size-xl d-60 rounded-circle btn-icon">
                <FontAwesomeIcon icon={['far', 'address-card']} />
              </div>
              <h3 className="heading-6 mt-4 mb-3 font-weight-bold">
                Starter templates
              </h3>
              <p className="card-text mb-3">
                Browse through the live previews to see just how powerful this
                admin template really is!
              </p>
              <Button
                tag="a"
                href="#/"
                onClick={(e) => e.preventDefault()}
                color="link"
                className="btn-link-primary pl-0 pr-0"
                title="Learn more">
                <span>Learn more</span>
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
