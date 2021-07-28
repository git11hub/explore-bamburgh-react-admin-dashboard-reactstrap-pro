import React from 'react';

import { Button } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Button className="m-2" color="primary">
          Primary
        </Button>
        <Button className="m-2" color="first">
          First
        </Button>
        <Button className="m-2" color="second">
          Second
        </Button>
        <Button className="m-2" color="info">
          Info
        </Button>
        <Button className="m-2" color="success">
          Success
        </Button>
        <Button className="m-2" color="warning">
          Warning
        </Button>
        <Button className="m-2" color="danger">
          Danger
        </Button>
        <Button className="m-2" color="dark">
          Dark
        </Button>
      </div>
      <div className="divider my-3" />
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Button className="m-2" color="neutral-primary">
          Primary
        </Button>
        <Button className="m-2" color="neutral-first">
          First
        </Button>
        <Button className="m-2" color="neutral-second">
          Second
        </Button>
        <Button className="m-2" color="neutral-info">
          Info
        </Button>
        <Button className="m-2" color="neutral-success">
          Success
        </Button>
        <Button className="m-2" color="neutral-warning">
          Warning
        </Button>
        <Button className="m-2" color="neutral-danger">
          Danger
        </Button>
        <Button className="m-2" color="neutral-dark">
          Dark
        </Button>
      </div>
    </>
  );
}
