import React from 'react';

import { Row, Col } from 'reactstrap';
import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';
import ElementsSearchBars1 from '../../example-components/ElementsSearchBars/SearchBars1';
import ElementsSearchBars2 from '../../example-components/ElementsSearchBars/SearchBars2';
import ElementsSearchBars3 from '../../example-components/ElementsSearchBars/SearchBars3';
import ElementsSearchBars4 from '../../example-components/ElementsSearchBars/SearchBars4';
export default function ElementsSearchBars() {
  return (
    <>
      <PageTitle
        titleHeading="Search Bars"
        titleDescription="Extended collection of multiple search bars variations."
      />

      <Row>
        <Col md="6">
          <ExampleWrapperSimple>
            <ElementsSearchBars1 />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple>
            <ElementsSearchBars3 />
          </ExampleWrapperSimple>
        </Col>
        <Col md="6">
          <ExampleWrapperSimple>
            <ElementsSearchBars2 />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple>
            <ElementsSearchBars4 />
          </ExampleWrapperSimple>
        </Col>
      </Row>
    </>
  );
}
