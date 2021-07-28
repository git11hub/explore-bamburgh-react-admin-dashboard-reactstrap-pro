import React from 'react';

import { Row, Col } from 'reactstrap';

import CountUp from 'react-countup';
export default function LivePreviewExample() {
  return (
    <>
      <Row className="text-center">
        <Col lg="4">
          <div className="display-3 font-weight-bold">
            <CountUp
              start={0}
              end={4.385}
              duration={12}
              deplay={2}
              separator=" "
              decimals={3}
              decimal=","
              prefix="$ "
              suffix=""
            />
          </div>
        </Col>
        <Col lg="4">
          <div className="display-3 font-weight-bold">
            <CountUp
              start={0}
              end={22.76}
              duration={12}
              deplay={2}
              separator=" "
              decimals={2}
              decimal=","
              prefix="$ "
              suffix=" M"
            />
          </div>
        </Col>
        <Col lg="4">
          <div className="display-3 font-weight-bold">
            <CountUp
              start={0}
              end={498}
              duration={12}
              deplay={2}
              separator=""
              decimals={0}
              decimal=","
            />
          </div>
        </Col>
      </Row>
    </>
  );
}
