import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col md="6" lg="3">
          <div className="timeline-list mb-5 timeline-list--success">
            <div className="timeline-item">
              <div className="timeline-item--content">
                <div className="timeline-item--icon" />
                <h4 className="timeline-item--label">
                  Business investor meeting
                </h4>
                <small className="mt-2 d-block">
                  <FontAwesomeIcon icon={['far', 'clock']} className="mr-1" />
                  17<sup>th</sup> September
                </small>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-item--content">
                <div className="timeline-item--icon" />
                <h4 className="timeline-item--label font-weight-bold">
                  Learning round table gathering
                </h4>
                <small className="mt-2 d-block">
                  <FontAwesomeIcon icon={['far', 'clock']} className="mr-1" />
                  18<sup>th</sup> September
                </small>
                <p className="mt-3">
                  The World Wide Web goes live with its first web page.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-item--content">
                <div className="timeline-item--icon" />
                <h4 className="timeline-item--label">Java exam day</h4>
                <small className="mt-2 d-block">
                  <FontAwesomeIcon icon={['far', 'clock']} className="mr-1" />
                  19<sup>th</sup> September
                </small>
              </div>
            </div>
          </div>
        </Col>
        <Col md="6" lg="3">
          <div className="timeline-list mb-5 timeline-list--danger">
            <div className="timeline-item">
              <div className="timeline-item--content">
                <div className="timeline-item--icon" />
                <h4 className="timeline-item--label font-weight-bold">
                  Business investor meeting
                </h4>
                <small className="mt-2 d-block">
                  <FontAwesomeIcon icon={['far', 'clock']} className="mr-1" />
                  17<sup>th</sup> September
                </small>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-item--content">
                <div className="timeline-item--icon" />
                <h4 className="timeline-item--label">
                  Learning round table gathering
                </h4>
                <small className="mt-2 d-block">
                  <FontAwesomeIcon icon={['far', 'clock']} className="mr-1" />
                  18<sup>th</sup> September
                </small>
                <p className="mt-3">
                  The World Wide Web goes live with its first web page.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-item--content">
                <div className="timeline-item--icon" />
                <h4 className="timeline-item--label">Java exam day</h4>
                <small className="mt-2 d-block">
                  <FontAwesomeIcon icon={['far', 'clock']} className="mr-1" />
                  19<sup>th</sup> September
                </small>
              </div>
            </div>
          </div>
        </Col>
        <Col md="6" lg="3">
          <div className="timeline-list mb-5 timeline-list--warning">
            <div className="timeline-item">
              <div className="timeline-item--content">
                <div className="timeline-item--icon" />
                <h4 className="timeline-item--label">
                  Business investor meeting
                </h4>
                <small className="mt-2 d-block">
                  <FontAwesomeIcon icon={['far', 'clock']} className="mr-1" />
                  17<sup>th</sup> September
                </small>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-item--content">
                <div className="timeline-item--icon" />
                <h4 className="timeline-item--label">
                  Learning round table gathering
                </h4>
                <small className="mt-2 d-block">
                  <FontAwesomeIcon icon={['far', 'clock']} className="mr-1" />
                  18<sup>th</sup> September
                </small>
                <p className="mt-3">
                  The World Wide Web goes live with its first web page.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-item--content">
                <div className="timeline-item--icon" />
                <h4 className="timeline-item--label font-weight-bold">
                  Java exam day
                </h4>
                <small className="mt-2 d-block">
                  <FontAwesomeIcon icon={['far', 'clock']} className="mr-1" />
                  19<sup>th</sup> September
                </small>
              </div>
            </div>
          </div>
        </Col>
        <Col md="6" lg="3">
          <div className="timeline-list mb-5 timeline-list--info">
            <div className="timeline-item">
              <div className="timeline-item--content">
                <div className="timeline-item--icon" />
                <h4 className="timeline-item--label">
                  Business investor meeting
                </h4>
                <small className="mt-2 d-block">
                  <FontAwesomeIcon icon={['far', 'clock']} className="mr-1" />
                  17<sup>th</sup> September
                </small>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-item--content">
                <div className="timeline-item--icon" />
                <h4 className="timeline-item--label font-weight-bold">
                  Learning round table gathering
                </h4>
                <small className="mt-2 d-block">
                  <FontAwesomeIcon icon={['far', 'clock']} className="mr-1" />
                  18<sup>th</sup> September
                </small>
                <p className="mt-3">
                  The World Wide Web goes live with its first web page.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-item--content">
                <div className="timeline-item--icon" />
                <h4 className="timeline-item--label">Java exam day</h4>
                <small className="mt-2 d-block">
                  <FontAwesomeIcon icon={['far', 'clock']} className="mr-1" />
                  19<sup>th</sup> September
                </small>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}
