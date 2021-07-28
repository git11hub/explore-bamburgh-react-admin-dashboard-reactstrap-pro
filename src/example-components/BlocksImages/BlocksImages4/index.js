import React from 'react';

import { Row, Col, CardBody, Card, Button } from 'reactstrap';

import stock1 from '../../../assets/images/stock-photos/stock-1.jpg';
import stock2 from '../../../assets/images/stock-photos/stock-2.jpg';
export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col lg="6">
          <Card className="mb-5">
            <img alt="..." className="card-img-top" src={stock1} />
            <CardBody>
              <h5 className="card-title font-weight-bold font-size-xxl">
                Bamburgh React Admin Dashboard with Reactstrap PRO
              </h5>
              <p className="card-text">
                This admin template is a complete frontend solution for
                easy-building applications or presentation websites. It&#39;s
                fully responsive and designed by professional UI&#x2F;UX
                designers and developers.
              </p>
              <Button color="primary">Learn more</Button>
            </CardBody>
          </Card>
        </Col>
        <Col lg="6">
          <Card className="mb-5">
            <img alt="..." className="card-img-top" src={stock2} />
            <CardBody>
              <h5 className="card-title font-weight-bold font-size-xxl">
                Bamburgh React Admin Dashboard with Reactstrap PRO
              </h5>
              <p className="card-text">
                This admin template is a complete frontend solution for
                easy-building applications or presentation websites. It&#39;s
                fully responsive and designed by professional UI&#x2F;UX
                designers and developers.
              </p>
              <Button color="primary">Learn more</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
