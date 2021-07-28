import React from 'react';

import { PageTitle } from '../../layout-components';
import { ExampleWrapperSeamless } from '../../layout-components';
import { ExampleWrapperSimple } from '../../layout-components';
import FormsSteppers1 from '../../example-components/FormsSteppers/FormsSteppers1';
import FormsSteppers2 from '../../example-components/FormsSteppers/FormsSteppers2';
import FormsSteppers3 from '../../example-components/FormsSteppers/FormsSteppers3';
import FormsSteppers4 from '../../example-components/FormsSteppers/FormsSteppers4';
export default function FormsSteppers() {
  return (
    <>
      <PageTitle
        titleHeading="Content Steppers"
        titleDescription="Easily create beautiful form multi step wizards or presentation steps."
      />

      <ExampleWrapperSeamless>
        <FormsSteppers1 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSimple>
        <FormsSteppers2 />
      </ExampleWrapperSimple>
      <ExampleWrapperSeamless>
        <FormsSteppers3 />
      </ExampleWrapperSeamless>
      <ExampleWrapperSeamless>
        <FormsSteppers4 />
      </ExampleWrapperSeamless>
    </>
  );
}
