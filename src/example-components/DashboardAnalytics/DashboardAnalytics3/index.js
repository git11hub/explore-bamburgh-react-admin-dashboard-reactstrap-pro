import React from 'react';

import { Row, Col, Card, Progress } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <Card className="card-box mb-5">
        <Row className="no-gutters">
          <Col lg="6" className="p-4">
            <div className="divider-v divider-v-lg" />
            <div className="d-flex align-items-center pb-4 justify-content-between">
              <div>
                <div className="font-weight-bold">Orders</div>
                <span className="text-black-50 d-block">
                  Total orders to date
                </span>
              </div>
              <div className="display-4 font-weight-bold text-info">
                $12,346
              </div>
            </div>
            <div>
              <Progress
                animated
                className="progress-sm progress-bar-rounded"
                color="info"
                value="76"
              />
              <div className="align-box-row progress-bar--label mt-2 text-muted">
                <div>Target</div>
                <div className="ml-auto">100%</div>
              </div>
            </div>
          </Col>
          <Col lg="6" className="p-4">
            <div className="d-flex align-items-center pb-4 justify-content-between">
              <div>
                <div className="font-weight-bold">Customers</div>
                <span className="text-black-50 d-block">
                  Total customers to date
                </span>
              </div>
              <div className="display-4 font-weight-bold text-success">
                $ 2,3M
              </div>
            </div>
            <div>
              <Progress
                animated
                className="progress-sm progress-bar-rounded"
                color="success"
                value="53"
              />
              <div className="align-box-row progress-bar--label mt-2 text-muted">
                <div>Target</div>
                <div className="ml-auto">100%</div>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
}
