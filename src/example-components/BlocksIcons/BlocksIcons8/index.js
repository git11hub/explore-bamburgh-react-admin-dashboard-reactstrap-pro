import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col xl="4">
          <Card className="card-box card-box-alt mb-5">
            <div className="card-content-overlay text-left">
              <div className="px-4">
                <div className="d-50 rounded-lg border-0 mb-1 card-icon-wrapper bg-danger text-white btn-icon text-center shadow-danger">
                  <FontAwesomeIcon
                    icon={['far', 'user']}
                    className="display-4"
                  />
                </div>
                <div className="font-weight-bold text-black display-4 mt-4 mb-3">
                  Bamburgh React Admin Dashboard with Reactstrap PRO
                </div>
                <div className="font-size-lg text-dark opacity-8">
                  Browse through the live previews to see just how powerful this
                  admin template really is!
                </div>
              </div>
              <div className="divider mt-4" />
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="px-4 py-3 btn-transition-none text-danger btn btn-white shadow-none d-flex justify-content-between align-items-center">
                <div>Manage my account</div>
                <FontAwesomeIcon icon={['fas', 'chevron-right']} />
              </a>
            </div>
          </Card>
        </Col>
        <Col xl="4">
          <Card className="card-box card-box-alt mb-5">
            <div className="card-content-overlay text-left">
              <div className="px-4">
                <div className="d-50 rounded-lg border-0 mb-1 card-icon-wrapper bg-info text-white btn-icon text-center shadow-info">
                  <FontAwesomeIcon
                    icon={['far', 'keyboard']}
                    className="display-4"
                  />
                </div>
                <div className="font-weight-bold text-black display-4 mt-4 mb-3">
                  Bamburgh React Admin Dashboard with Reactstrap PRO
                </div>
                <div className="font-size-lg text-dark opacity-8">
                  Browse through the live previews to see just how powerful this
                  admin template really is!
                </div>
              </div>
              <div className="divider mt-4" />
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="px-4 py-3 btn-transition-none text-info btn btn-white shadow-none d-flex justify-content-between align-items-center">
                <div>Create sales reports</div>
                <FontAwesomeIcon icon={['fas', 'chevron-right']} />
              </a>
            </div>
          </Card>
        </Col>
        <Col xl="4">
          <Card className="card-box bg-deep-blue card-box-alt mb-5">
            <div className="card-content-overlay text-left">
              <div className="px-4">
                <div className="d-50 rounded-lg border-0 mb-1 card-icon-wrapper bg-serious-blue text-white btn-icon text-center shadow-sm-dark">
                  <FontAwesomeIcon
                    icon={['far', 'object-group']}
                    className="display-4"
                  />
                </div>
                <div className="font-weight-bold text-second display-4 mt-4 mb-3">
                  Bamburgh React Admin Dashboard with Reactstrap PRO
                </div>
                <div className="font-size-lg text-second opacity-8">
                  Browse through the live previews to see just how powerful this
                  admin template really is!
                </div>
              </div>
              <div className="divider bg-white opacity-3 mt-4" />
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="px-4 py-3 btn-transition-none text-white btn btn-white shadow-none d-flex justify-content-between align-items-center">
                <div>View all profiles</div>
                <FontAwesomeIcon icon={['fas', 'chevron-right']} />
              </a>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
