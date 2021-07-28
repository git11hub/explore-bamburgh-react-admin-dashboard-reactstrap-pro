import React from 'react';

import { Row, Col } from 'reactstrap';
import { PageTitle } from '../../layout-components';
import { ExampleWrapperSeamless } from '../../layout-components';

import BlocksListsLarge1 from '../../example-components/BlocksListsLarge/BlocksListsLarge1';
import BlocksListsLarge2 from '../../example-components/BlocksListsLarge/BlocksListsLarge2';
import BlocksListsLarge3 from '../../example-components/BlocksListsLarge/BlocksListsLarge3';
import BlocksListsLarge4 from '../../example-components/BlocksListsLarge/BlocksListsLarge4';
import BlocksListsLarge5 from '../../example-components/BlocksListsLarge/BlocksListsLarge5';
import BlocksListsLarge6 from '../../example-components/BlocksListsLarge/BlocksListsLarge6';
import BlocksListsLarge7 from '../../example-components/BlocksListsLarge/BlocksListsLarge7';
import BlocksListsLarge8 from '../../example-components/BlocksListsLarge/BlocksListsLarge8';
import BlocksListsLarge9 from '../../example-components/BlocksListsLarge/BlocksListsLarge9';
export default function BlocksListsLarge() {
  return (
    <>
      <PageTitle
        titleHeading="Large Lists"
        titleDescription="Take advantage of these extensive, easy to customize large lists component blocks."
      />

      <Row>
        <Col lg="6">
          <ExampleWrapperSeamless>
            <BlocksListsLarge1 />
          </ExampleWrapperSeamless>
        </Col>
        <Col lg="6">
          <ExampleWrapperSeamless>
            <BlocksListsLarge2 />
          </ExampleWrapperSeamless>
        </Col>
      </Row>
      <Row>
        <Col xl="6">
          <ExampleWrapperSeamless>
            <BlocksListsLarge3 />
          </ExampleWrapperSeamless>
        </Col>
        <Col xl="6">
          <ExampleWrapperSeamless>
            <BlocksListsLarge4 />
          </ExampleWrapperSeamless>
        </Col>
        <Col xl="7">
          <ExampleWrapperSeamless>
            <BlocksListsLarge5 />
          </ExampleWrapperSeamless>
        </Col>
        <Col xl="5">
          <ExampleWrapperSeamless>
            <BlocksListsLarge6 />
          </ExampleWrapperSeamless>
        </Col>
      </Row>
      <ExampleWrapperSeamless>
        <BlocksListsLarge7 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless>
        <BlocksListsLarge8 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless>
        <BlocksListsLarge9 />
      </ExampleWrapperSeamless>
    </>
  );
}
