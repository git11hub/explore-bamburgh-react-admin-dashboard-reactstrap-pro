import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col xl="4">
          <Card className="d-block mb-5 px-4 py-5 rounded-sm bg-primary">
            <div className="d-block d-xl-flex">
              <div className="rounded-circle flex-shrink-0 btn-icon d-50 bg-white text-primary mb-4 mb-xl-0">
                <FontAwesomeIcon
                  icon={['far', 'lightbulb']}
                  className="font-size-lg"
                />
              </div>
              <div className="pl-0 pl-xl-4">
                <div className="text-white font-weight-bold font-size-xxl mb-2">
                  bamburgh
                </div>
                <p className="mb-0 text-white-50">
                  350+ custom-made, beautiful components, widgets, pages,
                  dashboards and applications.
                </p>
              </div>
            </div>
          </Card>
        </Col>
        <Col xl="4">
          <Card className="d-block mb-5 px-4 py-5 rounded-sm bg-second hover-scale-lg">
            <div className="d-block d-xl-flex">
              <div className="rounded-circle flex-shrink-0 btn-icon d-50 bg-white text-second mb-4 mb-xl-0">
                <FontAwesomeIcon
                  icon={['far', 'heart']}
                  className="font-size-lg"
                />
              </div>
              <div className="pl-0 pl-xl-4">
                <div className="text-white font-weight-bold font-size-xxl mb-2">
                  bamburgh
                </div>
                <p className="mb-0 text-white-50">
                  350+ custom-made, beautiful components, widgets, pages,
                  dashboards and applications.
                </p>
              </div>
            </div>
          </Card>
        </Col>
        <Col xl="4">
          <Card className="d-block mb-5 px-4 py-5 rounded-sm bg-primary">
            <div className="d-block d-xl-flex">
              <div className="rounded-circle flex-shrink-0 btn-icon d-50 bg-white text-primary mb-4 mb-xl-0">
                <FontAwesomeIcon
                  icon={['far', 'user']}
                  className="font-size-lg"
                />
              </div>
              <div className="pl-0 pl-xl-4">
                <div className="text-white font-weight-bold font-size-xxl mb-2">
                  bamburgh
                </div>
                <p className="mb-0 text-white-50">
                  350+ custom-made, beautiful components, widgets, pages,
                  dashboards and applications.
                </p>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
