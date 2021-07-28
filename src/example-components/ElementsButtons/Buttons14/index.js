import React from 'react';

import { Button } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Button color="link" className="m-2 btn-link-primary">
          <span>Primary</span>
        </Button>
        <Button color="link" className="m-2 btn-link-first">
          <span>First</span>
        </Button>
        <Button color="link" className="m-2 btn-link-second">
          <span>Second</span>
        </Button>

        <Button color="link" className="m-2 btn-link-info">
          <span>Info</span>
        </Button>
        <Button color="link" className="m-2 btn-link-success">
          <span>Success</span>
        </Button>
        <Button color="link" className="m-2 btn-link-warning">
          <span>Warning</span>
        </Button>
        <Button color="link" className="m-2 btn-link-danger">
          <span>Danger</span>
        </Button>
        <Button color="link" className="m-2 btn-link-dark">
          <span>Dark</span>
        </Button>
      </div>
    </>
  );
}
