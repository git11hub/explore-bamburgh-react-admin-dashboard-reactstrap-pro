import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Container } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <Card>
        <Container className="pt-5">
          <Row>
            <Col lg="6">
              <div className="feature-box mb-5">
                <div className="font-size-xxl text-primary rounded-circle">
                  <FontAwesomeIcon icon={['fas', 'bomb']} />
                </div>
                <h3 className="font-size-lg font-weight-bold mt-2">Widgets</h3>
                <p className="text-black-50 mt-3">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born.
                </p>
              </div>
            </Col>
            <Col lg="6">
              <div className="feature-box mb-5">
                <div className="font-size-xxl text-danger rounded-circle">
                  <FontAwesomeIcon icon={['fas', 'network-wired']} />
                </div>
                <h3 className="font-size-lg font-weight-bold mt-2">
                  Components
                </h3>
                <p className="text-black-50 mt-3">
                  The master-builder of human happiness. No one rejects,
                  dislikes, or avoids pleasure itself, because it is pleasure.
                </p>
              </div>
            </Col>
            <Col lg="6">
              <div className="feature-box mb-5">
                <div className="font-size-xxl text-success rounded-circle">
                  <FontAwesomeIcon icon={['fas', 'birthday-cake']} />
                </div>
                <h3 className="font-size-lg font-weight-bold mt-2">Blocks</h3>
                <p className="text-black-50 mt-3">
                  Who are so beguiled and demoralized by the charms of pleasure
                  of the moment, so blinded by desire, that they cannot foresee.
                </p>
              </div>
            </Col>
            <Col lg="6">
              <div className="feature-box mb-5">
                <div className="font-size-xxl text-warning rounded-circle">
                  <FontAwesomeIcon icon={['fas', 'bus-alt']} />
                </div>
                <h3 className="font-size-lg font-weight-bold mt-2">Pages</h3>
                <p className="text-black-50 mt-3">
                  Which toil and pain can procure him some great pleasure. To
                  take a trivial example, which of us avoids pleasure.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
}
