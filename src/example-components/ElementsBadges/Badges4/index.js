import React from 'react';

import { Badge } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Badge color="primary" className="m-1 badge-circle">
          Primary
        </Badge>
        <Badge color="second" className="m-1 badge-circle">
          Secondary
        </Badge>
        <Badge color="success" className="m-1 badge-circle">
          Success
        </Badge>
        <Badge color="danger" className="m-1 badge-circle">
          Danger
        </Badge>
        <Badge color="warning" className="m-1 badge-circle">
          Warning
        </Badge>
        <Badge color="info" className="m-1 badge-circle">
          Info
        </Badge>
        <Badge color="dark" className="m-1 badge-circle">
          Dark
        </Badge>
      </div>

      <div className="divider my-3" />

      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Badge color="primary" className="m-1 badge-circle-inner">
          Primary
        </Badge>
        <Badge color="second" className="m-1 badge-circle-inner">
          Secondary
        </Badge>
        <Badge color="success" className="m-1 badge-circle-inner">
          Success
        </Badge>
        <Badge color="danger" className="m-1 badge-circle-inner">
          Danger
        </Badge>
        <Badge color="warning" className="m-1 badge-circle-inner">
          Warning
        </Badge>
        <Badge color="info" className="m-1 badge-circle-inner">
          Info
        </Badge>
        <Badge color="dark" className="m-1 badge-circle-inner">
          Dark
        </Badge>
      </div>
    </>
  );
}
