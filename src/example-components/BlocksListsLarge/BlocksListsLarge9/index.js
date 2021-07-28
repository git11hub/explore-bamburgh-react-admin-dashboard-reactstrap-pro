import React from 'react';

import { Row, Col, Card } from 'reactstrap';

import CountUp from 'react-countup';
export default function LivePreviewExample() {
  return (
    <>
      <Card className="card-box mb-5">
        <Row className="no-gutters">
          <Col xl="4" className="p-4">
            <div className="divider-v divider-v-lg" />

            <div className="d-flex align-items-center justify-content-between">
              <div>
                <b>Reports</b>
                <div className="text-black-50">Monthly sales reports</div>
              </div>
              <div className="font-weight-bold text-danger font-size-xl">
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
              <div>
                <b>User</b>
                <div className="text-black-50">Visitors last week</div>
              </div>
              <div className="font-weight-bold text-success font-size-xl">
                <CountUp
                  start={0}
                  end={987}
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
              <div>
                <b>Sales</b>
                <div className="text-black-50">Total average weekly report</div>
              </div>
              <div className="font-weight-bold text-warning font-size-xl">
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
          </Col>
          <Col xl="4" className="p-4">
            <div className="divider-v divider-v-lg" />

            <div className="d-flex align-items-center justify-content-between">
              <div>
                <b>Stats</b>
                <div className="text-black-50">Last month targets</div>
              </div>
              <div className="font-weight-bold text-warning font-size-xl">
                $1,23M
              </div>
            </div>
            <div className="divider my-3" />
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <b>Payments</b>
                <div className="text-black-50">Week's expenses</div>
              </div>
              <div className="font-weight-bold text-danger font-size-xl">
                - $123,305
              </div>
            </div>
            <div className="divider my-3" />
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <b>Orders</b>
                <div className="text-black-50">Total products ordered</div>
              </div>
              <div className="font-weight-bold text-warning font-size-xl">
                65
              </div>
            </div>
          </Col>
          <Col xl="4" className="p-4">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <b>Deliveries</b>
                <div className="text-black-50">Deliveries total report</div>
              </div>
              <div className="font-weight-bold text-info font-size-xl">
                $33,1k
              </div>
            </div>
            <div className="divider my-3" />
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <b>Tasks</b>
                <div className="text-black-50">Pending task actions</div>
              </div>
              <div className="font-weight-bold text-success font-size-xl">
                34
              </div>
            </div>
            <div className="divider my-3" />
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <b>Issues</b>
                <div className="text-black-50">Server errors and issues</div>
              </div>
              <div className="font-weight-bold text-danger font-size-xl">
                346
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
}
