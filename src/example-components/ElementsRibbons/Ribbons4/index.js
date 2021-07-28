import React from 'react';

import { Card } from 'reactstrap';

import people2 from '../../../assets/images/stock-photos/people-2.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <Card>
        <span className="ribbon-horizontal ribbon-horizontal--bottom ribbon-horizontal--danger">
          <span>30% OFF - Today Only!</span>
        </span>
        <div className="card-img-wrapper">
          <img src={people2} className="card-img-top rounded" alt="..." />
        </div>
      </Card>
    </>
  );
}
