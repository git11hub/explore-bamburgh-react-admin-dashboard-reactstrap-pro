import React from 'react';
import Dustbin from './Dustbin';
import Box from './Box';

import { Row, Col } from 'reactstrap';

const Container = () => (
  <div>
    <div className="text-center">
      <Box />
    </div>
    <div className="divider my-4" />
    <Row>
      <Col lg="6" className="d-flex justify-content-center">
        <Dustbin greedy={true}>
          <Dustbin greedy={true}>
            <Dustbin greedy={true} />
          </Dustbin>
        </Dustbin>
      </Col>
      <Col lg="6" className="d-flex justify-content-center">
        <Dustbin>
          <Dustbin>
            <Dustbin />
          </Dustbin>
        </Dustbin>
      </Col>
    </Row>
  </div>
);
export default Container;
