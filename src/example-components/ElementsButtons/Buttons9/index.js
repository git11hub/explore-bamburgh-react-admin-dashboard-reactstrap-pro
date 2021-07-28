import React from 'react';

import { Button } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Button className="m-2" outline color="primary">
          Primary
        </Button>
        <Button className="m-2" outline color="first">
          First
        </Button>
        <Button className="m-2" outline color="second">
          Second
        </Button>

        <Button className="m-2" outline color="info">
          Info
        </Button>
        <Button className="m-2" outline color="success">
          Success
        </Button>
        <Button className="m-2" outline color="warning">
          Warning
        </Button>
        <Button className="m-2" outline color="danger">
          Danger
        </Button>
        <Button className="m-2" outline color="dark">
          Dark
        </Button>
      </div>
    </>
  );
}
