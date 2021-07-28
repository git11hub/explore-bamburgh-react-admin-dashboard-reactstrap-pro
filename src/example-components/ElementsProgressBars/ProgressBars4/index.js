import React from 'react';

import { Progress } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <div className="d-block mb-4">
        <Progress value="25" color="success" />
      </div>
      <div className="d-block mb-4">
        <Progress value="45" color="first" />
      </div>
      <div className="d-block mb-4">
        <Progress value="65" color="dark" />
      </div>
      <div className="d-block">
        <Progress value="55" color="info" />
      </div>
    </>
  );
}
