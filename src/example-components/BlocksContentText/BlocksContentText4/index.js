import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Button } from 'reactstrap';

import stock1 from '../../../assets/images/stock-photos/stock-7.jpg';
import svgImage1 from '../../../assets/images/illustrations/pack1/wireframe.svg';

export default function LivePreviewExample() {
  return (
    <>
      <Card className="card-box mb-5">
        <Row className="no-gutters">
          <Col lg="5">
            <img
              alt="..."
              className="rounded br-lg-right-0 img-fit-container"
              src={stock1}
            />
          </Col>
          <Col lg="7">
            <div className="pb-2">
              <img
                alt="..."
                className="w-50 d-block img-fluid"
                src={svgImage1}
              />
            </div>
            <div className="px-5 pb-5">
              <a href="#/" onClick={(e) => e.preventDefault()}>
                <h3 className="display-3 my-3 font-weight-bold">
                  Bamburgh React Admin Dashboard with Reactstrap PRO
                </h3>
              </a>
              <p className="font-size-xxl text-black-50">
                Browse through the live previews to see just how powerful this
                admin template really is!
              </p>
              <p className="mb-4 font-size-lg text-black">
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
        </Row>
      </Card>
    </>
  );
}
