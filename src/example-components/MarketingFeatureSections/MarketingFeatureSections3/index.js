import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Container, Badge, Button } from 'reactstrap';

import illustration1 from '../../../assets/images/illustrations/pack3/balloon.svg';
export default function LivePreviewExample() {
  return (
    <>
      <Container className="py-1 py-xl-3">
        <Card className="card-box p-0 mb-5">
          <Row className="no-gutters">
            <Col lg="7" className="d-flex align-items-center">
              <div className="p-4 text-center text-lg-left p-lg-5">
                <div className="mb-4">
                  <Badge pill color="warning">
                    Latest release
                  </Badge>
                  <h1 className="display-3 my-3 font-weight-bold">bamburgh</h1>
                  <p className="font-size-xl text-black opacity-7">
                    350+ custom-made, beautiful components, widgets, pages,
                    dashboards and applications.
                  </p>
                  <p className="font-size-lg text-black-50">
                    This admin template is a complete frontend solution for
                    easy-building applications or presentation websites.
                    It&#39;s fully responsive and designed by professional
                    UI&#x2F;UX designers and developers.
                  </p>
                </div>
                <div>
                  <Button size="lg" outline color="primary">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['far', 'question-circle']} />
                    </span>
                    <span className="btn-wrapper--label">Read more</span>
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg="5" className="d-flex align-items-center">
              <img alt="..." className="w-100" src={illustration1} />
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
}
