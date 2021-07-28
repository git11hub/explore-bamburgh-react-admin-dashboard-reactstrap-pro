import React from 'react';

import { Button } from 'reactstrap';

import { ButtonGroup } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <ButtonGroup size="sm" className="m-2">
          <Button color="primary">Left</Button>
          <Button active color="primary">
            Middle
          </Button>
          <Button color="primary">Right</Button>
        </ButtonGroup>
      </div>
      <div className="divider my-2" />
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <ButtonGroup className="m-2">
          <Button color="primary">Left</Button>
          <Button active color="primary">
            Middle
          </Button>
          <Button color="primary">Right</Button>
        </ButtonGroup>
      </div>
      <div className="divider my-2" />
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <ButtonGroup size="lg" className="m-2">
          <Button color="primary">Left</Button>
          <Button active color="primary">
            Middle
          </Button>
          <Button color="primary">Right</Button>
        </ButtonGroup>
      </div>
    </>
  );
}
