import React from 'react';

import { PageTitle } from '../../layout-components';
import { ExampleWrapperSeamless } from '../../layout-components';

import FormsDatepicker1 from '../../example-components/FormsDatepicker/FormsDatepicker1';
import FormsDatepicker2 from '../../example-components/FormsDatepicker/FormsDatepicker2';
export default function FormsDatepicker() {
  return (
    <>
      <PageTitle
        titleHeading="Datepicker"
        titleDescription="Build beautiful datepickers perfectly integrated in the general style of the application."
      />

      <ExampleWrapperSeamless>
        <FormsDatepicker1 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless>
        <FormsDatepicker2 />
      </ExampleWrapperSeamless>
    </>
  );
}
