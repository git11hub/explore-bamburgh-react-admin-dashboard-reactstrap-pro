import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Container, Button } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <Card>
        <Container className="pt-5">
          <Row>
            <Col md="6" xl="3">
              <div className="feature-box text-center mb-5">
                <div className="text-center text-primary font-size-xxl rounded-circle">
                  <FontAwesomeIcon icon={['fas', 'bomb']} />
                </div>
                <h3 className="font-size-lg font-weight-bold my-3">Widgets</h3>
                <p className="text-black-50 mb-3">
                  But I must explain to you how all this mistaken.
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
              </div>
            </Col>
            <Col md="6" xl="3">
              <div className="feature-box text-center mb-5">
                <div className="text-center text-primary font-size-xxl rounded-circle">
                  <FontAwesomeIcon icon={['fas', 'network-wired']} />
                </div>
                <h3 className="font-size-lg font-weight-bold my-3">
                  Components
                </h3>
                <p className="text-black-50 mb-3">
                  So blinded by desire, that they cannot foresee.
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
              </div>
            </Col>
            <Col md="6" xl="3">
              <div className="feature-box text-center mb-5">
                <div className="text-center text-primary font-size-xxl rounded-circle">
                  <FontAwesomeIcon icon={['fas', 'birthday-cake']} />
                </div>
                <h3 className="font-size-lg font-weight-bold my-3">Blocks</h3>
                <p className="text-black-50 mb-3">
                  It takes a trivial example, which of us ever undertakes.
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
              </div>
            </Col>
            <Col md="6" xl="3">
              <div className="feature-box text-center mb-5">
                <div className="text-center text-primary font-size-xxl rounded-circle">
                  <FontAwesomeIcon icon={['fas', 'bus-alt']} />
                </div>
                <h3 className="font-size-lg font-weight-bold my-3">Pages</h3>
                <p className="text-black-50 mb-3">
                  Pleasure that has no annoying consequences of the moment.
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
              </div>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
}
