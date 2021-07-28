import React from 'react';

import { Row, Col } from 'reactstrap';

import Nouislider from 'nouislider-react';
export default function LivePreviewExample() {
  return (
    <>
      <div className="p-4">
        <Row>
          <Col lg="6">
            <Nouislider
              range={{ min: 0, max: 50 }}
              step={1}
              start={[0, 5]}
              disabled
            />
          </Col>
          <Col lg="6">
            <Nouislider
              connect
              range={{ min: 0, max: 15 }}
              step={1}
              start={[0, 5]}
              disabled
            />
          </Col>
        </Row>
      </div>
    </>
  );
}
