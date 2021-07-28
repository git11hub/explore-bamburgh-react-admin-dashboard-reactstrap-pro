import React from 'react';

import { Badge } from 'reactstrap';

import {
  CircularProgressbarWithChildren,
  buildStyles
} from 'react-circular-progressbar';
export default function LivePreviewExample() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <CircularProgressbarWithChildren
          value={34}
          strokeWidth={7}
          className="m-3 circular-progress-second">
          <Badge color="second" pill>
            34
          </Badge>
        </CircularProgressbarWithChildren>
        <CircularProgressbarWithChildren
          value={58}
          strokeWidth={6}
          className="m-3 circular-progress-success">
          <Badge color="success" pill>
            58
          </Badge>
        </CircularProgressbarWithChildren>
        <CircularProgressbarWithChildren
          value={48}
          strokeWidth={4}
          className="m-3 circular-progress-warning">
          <Badge color="warning" pill>
            48
          </Badge>
        </CircularProgressbarWithChildren>
        <CircularProgressbarWithChildren
          value={28}
          strokeWidth={8}
          className="m-3 circular-progress-danger">
          <Badge color="danger" pill>
            28
          </Badge>
        </CircularProgressbarWithChildren>
        <CircularProgressbarWithChildren
          value={84}
          strokeWidth={12}
          className="m-3 circular-progress-first">
          <Badge color="first" pill>
            84
          </Badge>
        </CircularProgressbarWithChildren>
      </div>
      <div className="divider my-3" />
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <CircularProgressbarWithChildren
          circleRatio={0.75}
          styles={buildStyles({ rotation: 1 / 2 + 1 / 8 })}
          value={34}
          strokeWidth={5}
          className="m-3 circle-progress-sm circular-progress-first">
          <Badge color="first">34 %</Badge>
        </CircularProgressbarWithChildren>
        <CircularProgressbarWithChildren
          circleRatio={0.75}
          styles={buildStyles({ rotation: 1 / 2 + 1 / 8 })}
          value={58}
          strokeWidth={5}
          className="m-3 circular-progress-second">
          <Badge color="second">58 %</Badge>
        </CircularProgressbarWithChildren>
        <CircularProgressbarWithChildren
          circleRatio={0.75}
          styles={buildStyles({ rotation: 1 / 2 + 1 / 8 })}
          value={48}
          strokeWidth={5}
          className="m-3 circular-progress-lg circular-progress-dark">
          <Badge color="dark">48 %</Badge>
        </CircularProgressbarWithChildren>
        <CircularProgressbarWithChildren
          circleRatio={0.75}
          styles={buildStyles({ rotation: 1 / 2 + 1 / 8 })}
          value={28}
          strokeWidth={5}
          className="m-3 circular-progress-primary">
          <Badge color="primary">28 %</Badge>
        </CircularProgressbarWithChildren>
        <CircularProgressbarWithChildren
          circleRatio={0.75}
          styles={buildStyles({ rotation: 1 / 2 + 1 / 8 })}
          value={84}
          strokeWidth={5}
          className="m-3 circle-progress-sm circular-progress-info">
          <Badge color="info">84 %</Badge>
        </CircularProgressbarWithChildren>
      </div>
    </>
  );
}
