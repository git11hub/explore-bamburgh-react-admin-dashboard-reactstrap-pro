import React from 'react';

import { Progress } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <div className="d-block mb-4">
        <Progress
          value="34"
          striped
          animated
          className="progress-bar-rounded"
          color="warning">
          34%
        </Progress>
      </div>
      <div className="d-block mb-4">
        <Progress
          value="76"
          className="progress-animated-alt progress-lg"
          color="danger">
          76%
        </Progress>
      </div>

      <div className="d-block">
        <Progress
          value="86"
          className="progress-animated-alt progress-sm"
          color="success"
        />
      </div>
    </>
  );
}
