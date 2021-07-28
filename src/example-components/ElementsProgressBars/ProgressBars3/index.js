import React from 'react';

import { Progress } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <div className="d-block mb-4">
        <Progress value="25" color="danger">
          25%
        </Progress>
      </div>
      <div className="d-block mb-4">
        <Progress value="45" color="warning">
          45%
        </Progress>
      </div>
      <div className="d-block mb-4">
        <Progress value="65" color="success">
          65%
        </Progress>
      </div>
      <div className="d-block">
        <Progress value="85" color="first">
          85%
        </Progress>
      </div>
    </>
  );
}
