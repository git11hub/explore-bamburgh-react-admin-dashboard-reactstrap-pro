import React from 'react';

import { Row, Col } from 'reactstrap';
import { PageTitle } from '../../layout-components';
import { ExampleWrapperSeamless } from '../../layout-components';

import BlocksListsSmall1 from '../../example-components/BlocksListsSmall/BlocksListsSmall1';
import BlocksListsSmall2 from '../../example-components/BlocksListsSmall/BlocksListsSmall2';
import BlocksListsSmall3 from '../../example-components/BlocksListsSmall/BlocksListsSmall3';
import BlocksListsSmall4 from '../../example-components/BlocksListsSmall/BlocksListsSmall4';
import BlocksListsSmall5 from '../../example-components/BlocksListsSmall/BlocksListsSmall5';
import BlocksListsSmall6 from '../../example-components/BlocksListsSmall/BlocksListsSmall6';
import BlocksListsSmall7 from '../../example-components/BlocksListsSmall/BlocksListsSmall7';
import BlocksListsSmall8 from '../../example-components/BlocksListsSmall/BlocksListsSmall8';
import BlocksListsSmall9 from '../../example-components/BlocksListsSmall/BlocksListsSmall9';
import BlocksListsSmall10 from '../../example-components/BlocksListsSmall/BlocksListsSmall10';
export default function BlocksListsSmall() {
  return (
    <>
      <PageTitle
        titleHeading="Small Lists"
        titleDescription="Take advantage of these extensive, easy to customize small lists component blocks."
      />

      <Row>
        <Col xl="6">
          <ExampleWrapperSeamless>
            <BlocksListsSmall1 />
          </ExampleWrapperSeamless>
        </Col>
        <Col xl="6">
          <ExampleWrapperSeamless>
            <BlocksListsSmall2 />
          </ExampleWrapperSeamless>
        </Col>
        <Col lg="6">
          <ExampleWrapperSeamless>
            <BlocksListsSmall3 />
          </ExampleWrapperSeamless>
        </Col>
        <Col lg="6">
          <ExampleWrapperSeamless>
            <BlocksListsSmall4 />
          </ExampleWrapperSeamless>
        </Col>
        <Col xl="6">
          <ExampleWrapperSeamless>
            <BlocksListsSmall5 />
          </ExampleWrapperSeamless>
        </Col>
        <Col xl="6">
          <ExampleWrapperSeamless>
            <BlocksListsSmall6 />
          </ExampleWrapperSeamless>
        </Col>
        <Col xl="6">
          <ExampleWrapperSeamless>
            <BlocksListsSmall7 />
          </ExampleWrapperSeamless>
        </Col>
        <Col xl="6">
          <ExampleWrapperSeamless>
            <BlocksListsSmall8 />
          </ExampleWrapperSeamless>
        </Col>
        <Col xl="6">
          <ExampleWrapperSeamless>
            <BlocksListsSmall9 />
          </ExampleWrapperSeamless>
        </Col>
        <Col xl="6">
          <ExampleWrapperSeamless>
            <BlocksListsSmall10 />
          </ExampleWrapperSeamless>
        </Col>
      </Row>
    </>
  );
}
