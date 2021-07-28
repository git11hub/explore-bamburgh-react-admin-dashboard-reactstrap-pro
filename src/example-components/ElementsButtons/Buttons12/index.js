import React from 'react';

import { Button } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Button className="m-2 btn-square" color="primary">
          Primary
        </Button>
        <Button className="m-2 btn-square" color="first">
          First
        </Button>
        <Button className="m-2 btn-square" color="second">
          Second
        </Button>

        <Button className="m-2 btn-square" color="info">
          Info
        </Button>
        <Button className="m-2 btn-square" color="success">
          Success
        </Button>
        <Button className="m-2 btn-square" color="warning">
          Warning
        </Button>
        <Button className="m-2 btn-square" color="danger">
          Danger
        </Button>
        <Button className="m-2 btn-square" color="dark">
          Dark
        </Button>
      </div>
    </>
  );
}
