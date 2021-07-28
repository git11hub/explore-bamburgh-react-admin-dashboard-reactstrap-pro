import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, CardBody, Card } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col xl="4">
          <Card className="mb-5 bg-premium-dark text-light">
            <CardBody>
              <div className="align-box-row align-items-start">
                <div className="font-weight-bold">
                  <small className="text-white-50 d-block mb-1 display-5 text-uppercase">
                    New Accounts
                  </small>
                  <span className="display-4 font-weight-bold mt-1">
                    586,356
                  </span>
                </div>
                <div className="ml-auto">
                  <div className="bg-white text-center text-success font-size-xxl d-60 btn-icon rounded">
                    <FontAwesomeIcon icon={['far', 'building']} />
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <FontAwesomeIcon
                  icon={['fas', 'arrow-up']}
                  className="text-success"
                />
                <span className="text-success px-1">15.4%</span>
                <span className="text-white-50">increase this month</span>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xl="4">
          <Card className="mb-5 bg-midnight-bloom text-light">
            <CardBody>
              <div className="align-box-row align-items-start">
                <div className="font-weight-bold">
                  <small className="text-white-50 d-block mb-1 display-5 text-uppercase">
                    Sales
                  </small>
                  <span className="display-4 font-weight-bold mt-1">
                    23,274
                  </span>
                </div>
                <div className="ml-auto">
                  <div className="bg-white text-center text-primary font-size-xxl d-60 btn-icon rounded">
                    <FontAwesomeIcon icon={['far', 'dot-circle']} />
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <FontAwesomeIcon
                  icon={['fas', 'arrow-up']}
                  className="text-warning"
                />
                <span className="text-warning px-1">5.9%</span>
                <span className="text-white-50">same as before</span>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xl="4">
          <Card className="mb-5 bg-red-lights text-light">
            <CardBody>
              <div className="align-box-row align-items-start">
                <div className="font-weight-bold">
                  <small className="text-white-50 d-block mb-1 display-5 text-uppercase">
                    Orders
                  </small>
                  <span className="display-4 font-weight-bold mt-1">
                    36,245
                  </span>
                </div>
                <div className="ml-auto">
                  <div className="bg-white text-center text-info font-size-xxl d-60 btn-icon rounded">
                    <FontAwesomeIcon icon={['far', 'keyboard']} />
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <FontAwesomeIcon
                  icon={['fas', 'arrow-up']}
                  className="text-white"
                />
                <span className="text-white px-1">12.4%</span>
                <span className="text-white-50">lower order numbers</span>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
