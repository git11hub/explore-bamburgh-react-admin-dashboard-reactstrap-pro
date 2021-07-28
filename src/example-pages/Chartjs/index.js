import React from 'react';

import { Row, Col } from 'reactstrap';
import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';

import { UncontrolledAlert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Chartjs1 from '../../example-components/Chartjs/Chartjs1';
import Chartjs2 from '../../example-components/Chartjs/Chartjs2';
import Chartjs3 from '../../example-components/Chartjs/Chartjs3';
import Chartjs4 from '../../example-components/Chartjs/Chartjs4';
import Chartjs5 from '../../example-components/Chartjs/Chartjs5';
import Chartjs6 from '../../example-components/Chartjs/Chartjs6';
export default function Chartjs() {
  return (
    <>
      <PageTitle
        titleHeading="Chart.js"
        titleDescription="Huge selection of charts created with the ChartJS Plugin."
      />

      <UncontrolledAlert className="alerts-alternate mb-5" color="warning">
        <div className="d-flex align-items-center align-content-start">
          <span className="font-size-lg d-block d-40 btn-icon mr-3 text-center bg-danger text-white rounded-sm">
            <FontAwesomeIcon icon={['fas', 'exclamation']} />
          </span>
          <span>
            Check out the the <b>Data Blocks</b> and <b>Marketing</b> sections
            to see more examples with these components in action, integrated
            together with others.
          </span>
        </div>
      </UncontrolledAlert>

      <Row>
        <Col lg="6">
          <ExampleWrapperSimple>
            <Chartjs1 />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple>
            <Chartjs3 />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple>
            <Chartjs5 />
          </ExampleWrapperSimple>
        </Col>
        <Col lg="6">
          <ExampleWrapperSimple>
            <Chartjs2 />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple>
            <Chartjs4 />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple>
            <Chartjs6 />
          </ExampleWrapperSimple>
        </Col>
      </Row>
    </>
  );
}
