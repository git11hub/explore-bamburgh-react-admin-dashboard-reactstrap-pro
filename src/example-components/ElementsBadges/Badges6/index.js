import React from 'react';

import { Badge } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Badge pill color="primary" className="m-1">
          Primary
        </Badge>
        <Badge pill color="second" className="m-1">
          Secondary
        </Badge>
        <Badge pill color="success" className="m-1">
          Success
        </Badge>
        <Badge pill color="danger" className="m-1">
          Danger
        </Badge>
        <Badge pill color="warning" className="m-1">
          Warning
        </Badge>
        <Badge pill color="info" className="m-1">
          Info
        </Badge>
        <Badge pill color="dark" className="m-1">
          Dark
        </Badge>
      </div>
      <div className="divider my-4" />
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Badge pill color="neutral-primary" className="m-1 text-primary">
          Primary
        </Badge>
        <Badge pill color="neutral-second" className="m-1 text-second">
          Secondary
        </Badge>
        <Badge pill color="neutral-success" className="m-1 text-success">
          Success
        </Badge>
        <Badge pill color="neutral-danger" className="m-1 text-danger">
          Danger
        </Badge>
        <Badge pill color="neutral-warning" className="m-1 text-warning">
          Warning
        </Badge>
        <Badge pill color="neutral-info" className="m-1 text-info">
          Info
        </Badge>
        <Badge pill color="neutral-dark" className="m-1 text-dark">
          Dark
        </Badge>
      </div>
    </>
  );
}
