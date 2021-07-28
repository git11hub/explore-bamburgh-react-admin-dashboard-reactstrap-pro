import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Container, Badge, Button } from 'reactstrap';

import illustration1 from '../../../assets/images/illustrations/pack2/video_call.svg';

export default function LivePreviewExample() {
  return (
    <>
      <div className="bg-white py-3 py-xl-5">
        <Container className="py-3 py-xl-5">
          <Row>
            <Col
              xl="8"
              className="d-flex align-items-center text-center text-xl-left">
              <div className="mb-5 pr-0 pr-xl-5 mb-xl-0">
                <div className="mb-4">
                  <Badge pill color="warning">
                    Latest release
                  </Badge>
                  <h1 className="display-3 mt-3 font-weight-bold">bamburgh</h1>
                  <div className="divider mx-auto mx-xl-0 my-4 bg-dark opacity-1 w-43" />
                  <p className="font-size-xl text-second opacity-6">
                    This admin template is a complete frontend solution for
                    easy-building applications or presentation websites.
                    It&#39;s fully responsive and designed by professional
                    UI&#x2F;UX designers and developers.
                  </p>
                </div>
                <div>
                  <Button
                    tag="a"
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    color="success"
                    className="d-block d-sm-inline-block">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['far', 'question-circle']} />
                    </span>
                    <span className="btn-wrapper--label">Read more</span>
                  </Button>
                  <Button
                    tag="a"
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    color="link"
                    className="btn-link-first d-block d-sm-inline-block ml-0 mt-3 mt-sm-0 ml-sm-3"
                    title="View documentation">
                    <span>Documentation</span>
                  </Button>
                </div>
              </div>
            </Col>
            <Col xl="4" className="d-none d-xl-flex align-items-center">
              <Card className="shadow-xxl rounded-circle p-3 w-100">
                <img src={illustration1} className="img-fluid" alt="..." />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
