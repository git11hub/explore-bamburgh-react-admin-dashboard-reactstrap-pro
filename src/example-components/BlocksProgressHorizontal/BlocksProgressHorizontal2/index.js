import React from 'react';

import { Row, Col, Card, Progress } from 'reactstrap';

import CountUp from 'react-countup';
export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col xl="4">
          <Card className="card-box mb-5 p-3">
            <div className="d-flex align-items-center pb-4 justify-content-between">
              <div>
                <div className="font-weight-bold">Deliveries</div>
                <span className="text-black-50 d-block">
                  Total deliveries to date
                </span>
              </div>
              <div className="display-4 font-weight-bold text-second">
                <CountUp
                  start={0}
                  end={23.485}
                  duration={6}
                  delay={2}
                  separator=""
                  decimals={3}
                  decimal=","
                />
              </div>
            </div>
            <div>
              <Progress
                className="progress-sm progress-bar-rounded progress-animated-alt"
                color="second"
                value="85"
              />
              <div className="align-box-row progress-bar--label mt-2 text-muted">
                <div>Target</div>
                <div className="ml-auto">100%</div>
              </div>
            </div>
          </Card>
        </Col>
        <Col xl="4">
          <Card className="card-box mb-5 p-3">
            <div className="d-flex align-items-center pb-4 justify-content-between">
              <div>
                <div className="font-weight-bold">Orders</div>
                <span className="text-black-50 d-block">
                  Total orders to date
                </span>
              </div>
              <div className="display-4 font-weight-bold text-first">
                $12,346
              </div>
            </div>
            <div>
              <Progress
                className="progress-sm progress-bar-rounded progress-animated-alt"
                color="first"
                value="87"
              />
              <div className="align-box-row progress-bar--label mt-2 text-muted">
                <div>Target</div>
                <div className="ml-auto">100%</div>
              </div>
            </div>
          </Card>
        </Col>
        <Col xl="4">
          <Card className="card-box mb-5 p-3">
            <div className="d-flex align-items-center pb-4 justify-content-between">
              <div>
                <div className="font-weight-bold">Customers</div>
                <span className="text-black-50 d-block">
                  Total customers to date
                </span>
              </div>
              <div className="display-4 font-weight-bold text-warning">
                $ 2,3M
              </div>
            </div>
            <div>
              <Progress
                className="progress-sm progress-bar-rounded progress-animated-alt"
                color="warning"
                value="55"
              />
              <div className="align-box-row progress-bar--label mt-2 text-muted">
                <div>Target</div>
                <div className="ml-auto">100%</div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
