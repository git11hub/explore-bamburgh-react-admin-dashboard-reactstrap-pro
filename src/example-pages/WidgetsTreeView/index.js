import React from 'react';

import { Row, Col } from 'reactstrap';
import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';
import WidgetsTreeView1 from '../../example-components/WidgetsTreeView/TreeView1';
import WidgetsTreeView2 from '../../example-components/WidgetsTreeView/TreeView2';
import WidgetsTreeView3 from '../../example-components/WidgetsTreeView/TreeView3';
export default function WidgetsTreeView() {
  return (
    <>
      <PageTitle
        titleHeading="Tree View"
        titleDescription="Create stunning tree like views with this awesome React plugin."
      />

      <Row>
        <Col xl="4">
          <ExampleWrapperSimple>
            <WidgetsTreeView1 />
          </ExampleWrapperSimple>
        </Col>
        <Col xl="4">
          <ExampleWrapperSimple>
            <WidgetsTreeView2 />
          </ExampleWrapperSimple>
        </Col>
        <Col xl="4">
          <ExampleWrapperSimple>
            <WidgetsTreeView3 />
          </ExampleWrapperSimple>
        </Col>
      </Row>
    </>
  );
}
