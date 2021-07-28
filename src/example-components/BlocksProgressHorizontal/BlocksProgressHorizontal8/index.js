import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Button, Progress } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col xl="4">
          <Card className="p-4 mb-5">
            <div className="d-flex justify-content-between">
              <div className="d-60 rounded-sm border-0 mb-4 card-icon-wrapper bg-warning text-white btn-icon text-center shadow-warning">
                <FontAwesomeIcon
                  icon={['far', 'bell']}
                  className="font-size-xl"
                />
              </div>
              <div className="badge badge-neutral-warning text-warning">
                + 57.32%
              </div>
            </div>
            <div className="display-4 mt-2 text-second font-weight-bold">
              bamburgh
            </div>
            <div className="pt-2 text-black-50">
              Browse through the live previews to see just how powerful this
              admin template really is!
            </div>
            <div className="py-4 my-2">
              <Progress
                className="p-2 bg-secondary box-sizing-content progress-sm progress-bar-rounded-alt d-flex justify-content-start"
                color="warning"
                value="67"
              />
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <Button size="sm" color="warning" className="btn-pill">
                View Project
              </Button>
              <div className="text-dark opacity-6">In Progress</div>
            </div>
          </Card>
        </Col>
        <Col xl="4">
          <Card className="p-4 mb-5">
            <div className="d-flex justify-content-between">
              <div className="d-60 rounded-sm border-0 mb-4 card-icon-wrapper bg-first text-white btn-icon text-center shadow-first">
                <FontAwesomeIcon
                  icon={['far', 'lightbulb']}
                  className="font-size-xl"
                />
              </div>
              <div className="badge badge-neutral-warning text-warning">
                + 57.32%
              </div>
            </div>
            <div className="display-4 mt-2 text-second font-weight-bold">
              bamburgh
            </div>
            <div className="pt-2 text-black-50">
              Browse through the live previews to see just how powerful this
              admin template really is!
            </div>
            <div className="py-4 my-2">
              <Progress
                className="p-2 bg-secondary box-sizing-content progress-sm progress-bar-rounded-alt d-flex justify-content-start"
                color="danger"
                value="83"
              />
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <Button size="sm" color="danger" className="btn-pill">
                View Project
              </Button>
              <div className="text-danger">Overdue</div>
            </div>
          </Card>
        </Col>
        <Col xl="4">
          <Card className="bg-deep-blue p-4">
            <div className="d-flex justify-content-between">
              <div className="d-60 rounded-sm border-0 mb-4 card-icon-wrapper bg-plum-plate text-white btn-icon text-center shadow-sm">
                <FontAwesomeIcon
                  icon={['far', 'user']}
                  className="font-size-xl"
                />
              </div>
              <div className="badge badge-second text-white">+ 57.32%</div>
            </div>
            <div className="display-4 mt-2 text-second font-weight-bold">
              bamburgh
            </div>
            <div className="pt-2 text-black-50">
              Browse through the live previews to see just how powerful this
              admin template really is!
            </div>
            <div className="py-4 my-2">
              <Progress
                className="p-2 bg-white-10 box-sizing-content progress-sm progress-bar-rounded-alt d-flex justify-content-start"
                color="white"
                value="88"
              />
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <Button
                size="sm"
                color="first"
                className="overflow-hidden btn-gradient bg-plum-plate shadow-none btn-pill">
                View Project
              </Button>
              <div className="test-second opacity-8">Finished</div>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
