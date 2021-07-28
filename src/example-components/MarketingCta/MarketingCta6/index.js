import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Container, Button } from 'reactstrap';

import illustration1 from '../../../assets/images/illustrations/pack2/video_call.svg';
import illustration2 from '../../../assets/images/illustrations/pack3/question.svg';
export default function LivePreviewExample() {
  return (
    <>
      <Container>
        <Card className="card-box p-0 mb-5">
          <Row className="no-gutters">
            <Col lg="7" className="d-flex align-items-center">
              <div className="p-4 text-center text-lg-left p-lg-5">
                <div className="bg-primary btn-icon mx-auto mx-lg-0 text-white font-size-xl d-50 rounded-circle mb-4">
                  <FontAwesomeIcon icon={['far', 'bell']} />
                </div>
                <h4 className="display-4 font-weight-bold mb-3">
                  Bamburgh React Admin Dashboard with Reactstrap PRO
                </h4>
                <p className="opacity-7 mb-4 font-size-lg line-height-2">
                  Browse through the live previews to see just how powerful this
                  admin template really is!
                </p>
                <Button
                  color="primary"
                  className="text-uppercase font-weight-bold btn-pill px-4 font-size-sm">
                  <span className="btn-wrapper--label">View details</span>
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                  </span>
                </Button>
              </div>
            </Col>
            <Col lg="5" className="d-flex align-items-center">
              <img alt="..." className="w-100 p-4 p-lg-0" src={illustration1} />
            </Col>
          </Row>
        </Card>
        <Card className="card-box p-0 mb-5">
          <Row className="no-gutters">
            <Col lg="5" className="d-flex align-items-center">
              <img alt="..." className="w-100 p-4 p-lg-0" src={illustration2} />
            </Col>
            <Col lg="7" className="d-flex align-items-center">
              <div className="p-4 text-center text-lg-left p-lg-5">
                <div className="bg-warning btn-icon mx-auto mx-lg-0 text-white font-size-xl d-50 rounded mb-4">
                  <FontAwesomeIcon icon={['far', 'lightbulb']} />
                </div>
                <h4 className="display-4 font-weight-bold mb-3">
                  Bamburgh React Admin Dashboard with Reactstrap PRO
                </h4>
                <p className="text-warning mb-4 font-size-lg line-height-2">
                  Browse through the live previews to see just how powerful this
                  admin template really is!
                </p>
                <Button
                  color="warning"
                  className="text-uppercase font-weight-bold px-4 font-size-sm">
                  <span className="btn-wrapper--label">View details</span>
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                  </span>
                </Button>
              </div>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
}
