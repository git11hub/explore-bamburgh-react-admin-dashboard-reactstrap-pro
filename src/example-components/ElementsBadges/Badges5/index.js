import React from 'react';

import { Card, Badge } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <div className="p-3">
        <Card className="card-box w-100 shadow-none demo-box-positions bg-neutral-dark border-dark badge-wrapper badge-wrapper">
          <Badge
            color="danger"
            className="badge-position badge-position--top-left badge-circle"
            title="Badge top left">
            Badge top left
          </Badge>
          <Badge
            color="success"
            className="badge-position badge-position--top-center badge-circle"
            title="Badge top center">
            Badge top center
          </Badge>
          <Badge
            color="info"
            className="badge-position badge-position--top-right badge-circle"
            title="Badge top right">
            Badge top right
          </Badge>

          <Badge
            color="warning"
            className="badge-position badge-position--bottom-left badge-circle"
            title="Badge bottom left">
            Badge bottom left
          </Badge>
          <Badge
            color="first"
            className="badge-position badge-position--bottom-center badge-circle"
            title="Badge bottom center">
            Badge bottom center
          </Badge>
          <Badge
            color="primary"
            className="badge-position badge-position--bottom-right badge-circle"
            title="Badge bottom right">
            Badge bottom right
          </Badge>
        </Card>
      </div>
      <div className="divider my-3" />
      <div className="p-3">
        <Card className="card-box w-100 shadow-none demo-box-positions bg-neutral-dark border-dark badge-wrapper badge-wrapper">
          <Badge
            color="success"
            className="badge-position badge-position--top-left badge-circle-inner"
            title="Badge top left">
            Badge top left
          </Badge>
          <Badge
            color="danger"
            className="badge-position badge-position--top-center badge-circle-inner"
            title="Badge top center">
            Badge top center
          </Badge>
          <Badge
            color="warning"
            className="badge-position badge-position--top-right badge-circle-inner"
            title="Badge top right">
            Badge top right
          </Badge>

          <Badge
            color="info"
            className="badge-position badge-position--bottom-left badge-circle-inner"
            title="Badge bottom left">
            Badge bottom left
          </Badge>
          <Badge
            color="first"
            className="badge-position badge-position--bottom-center badge-circle-inner"
            title="Badge bottom center">
            Badge bottom center
          </Badge>
          <Badge
            color="second"
            className="badge-position badge-position--bottom-right badge-circle-inner"
            title="Badge bottom right">
            Badge bottom right
          </Badge>
        </Card>
      </div>
    </>
  );
}
