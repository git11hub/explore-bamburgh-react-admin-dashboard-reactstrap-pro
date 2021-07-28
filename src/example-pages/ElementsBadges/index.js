import React from 'react';

import { Row, Col } from 'reactstrap';
import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';
import ElementsBadges1 from '../../example-components/ElementsBadges/Badges1';
import ElementsBadges2 from '../../example-components/ElementsBadges/Badges2';
import ElementsBadges3 from '../../example-components/ElementsBadges/Badges3';
import ElementsBadges4 from '../../example-components/ElementsBadges/Badges4';
import ElementsBadges5 from '../../example-components/ElementsBadges/Badges5';
import ElementsBadges6 from '../../example-components/ElementsBadges/Badges6';
export default function ElementsBadges() {
  return (
    <>
      <PageTitle
        titleHeading="Badges"
        titleDescription="Badges and labels are used to offer extra small pieces of info for your content."
      />

      <Row>
        <Col lg="6">
          <ExampleWrapperSimple>
            <ElementsBadges1 />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple>
            <ElementsBadges3 />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple>
            <ElementsBadges5 />
          </ExampleWrapperSimple>
        </Col>
        <Col lg="6">
          <ExampleWrapperSimple>
            <ElementsBadges2 />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple>
            <ElementsBadges4 />
          </ExampleWrapperSimple>
          <ExampleWrapperSimple>
            <ElementsBadges6 />
          </ExampleWrapperSimple>
        </Col>
      </Row>
    </>
  );
}
