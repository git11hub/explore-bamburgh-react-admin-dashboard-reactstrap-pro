import React from 'react';

import { Progress } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <div className="d-block mb-4">
        <Progress value="25" className="progress-xs" />
      </div>
      <div className="d-block mb-4">
        <Progress value="45" className="progress-sm" />
      </div>
      <div className="d-block mb-4">
        <Progress value="65" />
      </div>
      <div className="d-block">
        <Progress value="85" className="progress-lg" />
      </div>
    </>
  );
}
