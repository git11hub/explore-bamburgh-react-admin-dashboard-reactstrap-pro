import React from 'react';

import { CardBody, Card, CardHeader } from 'reactstrap';

import CountUp from 'react-countup';
import { Settings, Grid, Users, Layers } from 'react-feather';
export default function LivePreviewExample() {
  return (
    <>
      <Card className="card-box mb-5">
        <CardHeader>
          <h4 className="font-size-lg mb-0 py-2 font-weight-bold">
            Latest issues
          </h4>
        </CardHeader>
        <CardBody>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex">
              <Settings className="h1 d-block mr-3 text-warning" />
              <div>
                <b>Reports</b>
                <div className="text-black-50">Monthly sales reports</div>
              </div>
            </div>
            <div className="font-weight-bold text-danger font-size-lg">
              <CountUp
                start={0}
                end={2.363}
                duration={6}
                delay={2}
                separator=""
                decimals={3}
                decimal=","
              />
            </div>
          </div>
          <div className="divider my-3" />
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex">
              <Grid className="h1 d-block mr-3 text-success" />
              <div>
                <b>User</b>
                <div className="text-black-50">Visitors last week</div>
              </div>
            </div>
            <div className="font-weight-bold text-success font-size-lg">
              <CountUp
                start={0}
                end={643}
                duration={6}
                delay={2}
                separator=""
                decimals={0}
                decimal=","
              />
            </div>
          </div>
          <div className="divider my-3" />
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex">
              <Users className="h1 d-block mr-3 text-danger" />
              <div>
                <b>Sales</b>
                <div className="text-black-50">Total average weekly report</div>
              </div>
            </div>
            <div className="font-weight-bold text-warning font-size-lg">
              <CountUp
                start={0}
                end={483}
                duration={6}
                delay={2}
                separator=""
                decimals={0}
                decimal=","
              />
            </div>
          </div>
          <div className="divider my-3" />
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex">
              <Layers className="h1 d-block mr-3 text-first" />
              <div>
                <b>Stats</b>
                <div className="text-black-50">Last month targets</div>
              </div>
            </div>
            <div className="font-weight-bold text-first font-size-lg">
              {' '}
              $1,23M
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
