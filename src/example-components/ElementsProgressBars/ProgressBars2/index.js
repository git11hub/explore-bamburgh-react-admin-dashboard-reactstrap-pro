import React from 'react';

import { Progress } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <div className="d-block mb-4">
        <Progress
          value="25"
          className="progress-bar-rounded progress-xs"
          color="danger"
        />
      </div>
      <div className="d-block mb-4">
        <Progress
          value="45"
          className="progress-bar-rounded progress-sm"
          color="success"
        />
      </div>
      <div className="d-block mb-4">
        <Progress value="65" className="progress-bar-rounded" color="first" />
      </div>
      <div className="d-block">
        <Progress
          value="85"
          className="progress-bar-rounded progress-lg"
          color="second"
        />
      </div>
    </>
  );
}
