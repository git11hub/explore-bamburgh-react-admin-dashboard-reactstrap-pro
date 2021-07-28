import React from 'react';

import { Progress } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <div className="d-block mb-4">
        <Progress multi>
          <Progress bar value="15" />
          <Progress bar color="success" value="30" />
          <Progress bar color="warning" value="20" />
          <Progress bar color="danger" value="5" />
        </Progress>
      </div>
      <div className="d-block mb-4">
        <Progress multi className="progress-bar-rounded">
          <Progress bar color="danger" value="15">
            15%
          </Progress>
          <Progress bar color="success" value="30">
            30%
          </Progress>
          <Progress bar color="info" value="20">
            20%
          </Progress>
          <Progress bar color="danger" value="5">
            5%
          </Progress>
        </Progress>
      </div>
      <div className="d-block">
        <Progress multi className="progress-sm">
          <Progress bar value="15" />
          <Progress bar color="success" value="30" />
          <Progress bar color="warning" value="20" />
          <Progress bar color="danger" value="5" />
        </Progress>
      </div>
    </>
  );
}
