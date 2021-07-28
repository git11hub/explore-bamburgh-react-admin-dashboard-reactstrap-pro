import React from 'react';

import { Row, Col, Card } from 'reactstrap';

import { CircularProgressbar } from 'react-circular-progressbar';
export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col xl="3" md="6">
          <Card className="mb-5 text-center p-3">
            <div className="mx-auto pb-3 pt-2">
              <CircularProgressbar
                value={39}
                text={39 + '%'}
                strokeWidth={8}
                className="circular-progress-xl circular-progress-primary"
              />
            </div>
            <div className="text-black-50 mt-2">Project management</div>
          </Card>
        </Col>
        <Col xl="3" md="6">
          <Card className="mb-5 text-center p-3">
            <div className="mx-auto pb-3 pt-2">
              <CircularProgressbar
                value={81}
                text={81 + '%'}
                strokeWidth={8}
                className="circular-progress-xl circular-progress-danger"
              />
            </div>
            <div className="text-black-50 mt-2">Recent messages</div>
          </Card>
        </Col>
        <Col xl="3" md="6">
          <Card className="mb-5 bg-premium-dark text-center p-3">
            <div className="mx-auto pb-3 pt-2">
              <CircularProgressbar
                value={44}
                text={44 + '%'}
                strokeWidth={8}
                className="circular-progress-xl circular-progress-success"
              />
            </div>
            <div className="text-white-50 mt-2">Task manager</div>
          </Card>
        </Col>
        <Col xl="3" md="6">
          <Card className="mb-5 bg-night-sky text-center p-3">
            <div className="mx-auto pb-3 pt-2">
              <CircularProgressbar
                value={56}
                text={56 + '%'}
                strokeWidth={8}
                className="circular-progress-xl circular-progress-warning"
              />
            </div>
            <div className="text-white-50 mt-2">Analytics statistics</div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
