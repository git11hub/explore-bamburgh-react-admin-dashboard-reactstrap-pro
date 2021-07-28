import React from 'react';

import { Row, Col } from 'reactstrap';

import Nouislider from 'nouislider-react';
export default function LivePreviewExample() {
  return (
    <>
      <div className="p-4">
        <Row>
          <Col lg="6">
            <div className="m-4">
              <Nouislider
                range={{ min: 0, max: 50 }}
                step={1}
                start={[0, 5]}
                className="slider-dark"
              />
            </div>
            <div className="m-4">
              <Nouislider
                range={{ min: 0, max: 50 }}
                step={1}
                start={[0, 5]}
                className="slider-success"
              />
            </div>
            <div className="m-4">
              <Nouislider
                range={{ min: 0, max: 50 }}
                step={1}
                start={[0, 5]}
                className="slider-warning"
              />
            </div>
            <div className="m-4">
              <Nouislider
                range={{ min: 0, max: 50 }}
                step={1}
                start={[0, 5]}
                className="slider-info"
              />
            </div>
          </Col>
          <Col lg="6">
            <div className="m-4">
              <Nouislider
                connect
                range={{ min: 0, max: 15 }}
                step={1}
                start={[0, 5]}
                className="slider-danger"
              />
            </div>
            <div className="m-4">
              <Nouislider
                connect
                range={{ min: 0, max: 15 }}
                step={1}
                start={[0, 5]}
                className="slider-success"
              />
            </div>
            <div className="m-4">
              <Nouislider
                connect
                range={{ min: 0, max: 15 }}
                step={1}
                start={[0, 5]}
                className="slider-first"
              />
            </div>
            <div className="m-4">
              <Nouislider
                connect
                range={{ min: 0, max: 15 }}
                step={1}
                start={[0, 5]}
                className="slider-warning"
              />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
