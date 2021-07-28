import React from 'react';

import { Card } from 'reactstrap';

import { Bell, Settings, Grid, Briefcase, LifeBuoy } from 'react-feather';

export default function LivePreviewExample() {
  return (
    <>
      <Card className="card-box mb-5 d-flex flex-row flex-wrap justify-content-center">
        <div className="py-4 px-5 d-flex align-items-center">
          <Bell className="d-50 text-dark opacity-2 mr-3" />
          <div>
            <span className="d-block opacity-7">Expenses</span>
            <span className="font-weight-bold font-size-lg text-danger">
              <small className="opacity-6 pr-1">$</small>1,693
            </span>
          </div>
        </div>
        <div className="py-4 px-5 d-flex align-items-center">
          <Settings className="d-50 text-dark opacity-2 mr-3" />
          <div>
            <span className="d-block opacity-7">Revenue</span>
            <span className="font-weight-bold font-size-lg">
              <small className="opacity-6 pr-1">$</small>54,233
            </span>
          </div>
        </div>
        <div className="py-4 px-5 d-flex align-items-center">
          <Grid className="d-50 text-dark opacity-2 mr-3" />
          <div>
            <span className="d-block opacity-7">Users</span>
            <span className="font-weight-bold font-size-lg">
              <small className="opacity-6 pr-1">$</small>658
            </span>
          </div>
        </div>
        <div className="py-4 px-5 d-flex align-items-center">
          <LifeBuoy className="d-50 text-dark opacity-2 mr-3" />
          <div>
            <span className="d-block opacity-7">Sales</span>
            <span className="font-weight-bold font-size-lg text-success">
              <small className="opacity-6 pr-1">$</small>385
            </span>
          </div>
        </div>
        <div className="py-4 px-5 d-flex align-items-center">
          <Briefcase className="d-50 text-dark opacity-2 mr-3" />
          <div>
            <span className="d-block opacity-7">Income</span>
            <span className="font-weight-bold font-size-lg">
              <small className="opacity-6 pr-1">$</small>3,217
            </span>
          </div>
        </div>
      </Card>
    </>
  );
}
