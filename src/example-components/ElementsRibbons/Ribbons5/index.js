import React from 'react';

import { Card, Badge } from 'reactstrap';

import stock1 from '../../../assets/images/stock-photos/stock-1.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <Card className="card-transparent">
        <span className="ribbon-vertical ribbon-vertical--primary text-uppercase">
          <span>New</span>
        </span>
        <div className="card-img-wrapper">
          <div className="card-badges card-badges-bottom">
            <Badge pill color="success" className="mr-2">
              Success
            </Badge>
            <Badge pill color="neutral-info" className="text-info">
              Info
            </Badge>
          </div>
          <img src={stock1} className="card-img-top rounded" alt="..." />
        </div>
      </Card>
    </>
  );
}
