import React from 'react';

import { Row, Col } from 'reactstrap';
import { PageTitle } from '../../layout-components';
import { ExampleWrapperSeamless } from '../../layout-components';

import { UncontrolledAlert } from 'reactstrap';

import FormsUpload1 from '../../example-components/FormsUpload/FormsUpload1';
import FormsUpload2 from '../../example-components/FormsUpload/FormsUpload2';
import FormsUpload3 from '../../example-components/FormsUpload/FormsUpload3';
import FormsUpload4 from '../../example-components/FormsUpload/FormsUpload4';
import FormsUpload5 from '../../example-components/FormsUpload/FormsUpload5';
export default function FormsUpload() {
  return (
    <>
      <PageTitle
        titleHeading="Upload"
        titleDescription="Handle your file uploads on the server easily and with style."
      />

      <UncontrolledAlert color="warning" className="text-center">
        These example do not actually upload any of the selected files, only
        simulates the upload process for live preview purposes!
      </UncontrolledAlert>

      <Row>
        <Col lg="6">
          <ExampleWrapperSeamless>
            <FormsUpload1 />
          </ExampleWrapperSeamless>
        </Col>
        <Col lg="6">
          <ExampleWrapperSeamless>
            <FormsUpload2 />
          </ExampleWrapperSeamless>
        </Col>
      </Row>
      <Row>
        <Col lg="8">
          <ExampleWrapperSeamless>
            <FormsUpload3 />
          </ExampleWrapperSeamless>
        </Col>
        <Col lg="4">
          <ExampleWrapperSeamless>
            <FormsUpload4 />
          </ExampleWrapperSeamless>
          <ExampleWrapperSeamless>
            <FormsUpload5 />
          </ExampleWrapperSeamless>
        </Col>
      </Row>
    </>
  );
}
