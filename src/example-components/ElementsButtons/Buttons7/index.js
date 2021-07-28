import React from 'react';

import { Button } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Button className="btn-pill m-2" color="primary">
          Primary
        </Button>
        <Button className="btn-pill m-2" color="first">
          First
        </Button>
        <Button className="btn-pill m-2" color="second">
          Second
        </Button>
        <Button className="btn-pill m-2" color="info">
          Info
        </Button>
        <Button className="btn-pill m-2" color="success">
          Success
        </Button>
        <Button className="btn-pill m-2" color="warning">
          Warning
        </Button>
        <Button className="btn-pill m-2" color="danger">
          Danger
        </Button>
        <Button className="btn-pill m-2" color="dark">
          Dark
        </Button>
      </div>
      <div className="divider my-3" />
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Button outline className="btn-pill m-2" color="primary">
          Primary
        </Button>
        <Button outline className="btn-pill m-2" color="first">
          First
        </Button>
        <Button outline className="btn-pill m-2" color="second">
          Second
        </Button>
        <Button outline className="btn-pill m-2" color="info">
          Info
        </Button>
        <Button outline className="btn-pill m-2" color="success">
          Success
        </Button>
        <Button outline className="btn-pill m-2" color="warning">
          Warning
        </Button>
        <Button outline className="btn-pill m-2" color="danger">
          Danger
        </Button>
        <Button outline className="btn-pill m-2" color="dark">
          Dark
        </Button>
      </div>
    </>
  );
}
