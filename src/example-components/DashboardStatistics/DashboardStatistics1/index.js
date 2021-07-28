import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, CardBody, Card } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col lg="6" xl="4">
          <Card className="card-box mb-5 bg-premium-dark border-0 text-light">
            <CardBody>
              <div className="align-box-row align-items-start">
                <div className="font-weight-bold">
                  <small className="text-white-50 d-block mb-1 text-uppercase">
                    New Accounts
                  </small>
                  <span className="font-size-xxl mt-1">586,356</span>
                </div>
                <div className="ml-auto">
                  <div className="bg-white text-center text-success font-size-xl d-50 rounded-circle btn-icon">
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
        <Col lg="6" xl="4">
          <Card className="card-box mb-5 bg-night-sky text-light">
            <CardBody>
              <div className="align-box-row align-items-start">
                <div className="font-weight-bold">
                  <small className="text-white-50 d-block mb-1 text-uppercase">
                    Sales
                  </small>
                  <span className="font-size-xxl mt-1">23,274</span>
                </div>
                <div className="ml-auto">
                  <div className="bg-white text-center text-primary font-size-xl d-50 rounded-circle btn-icon">
                    <FontAwesomeIcon icon={['far', 'dot-circle']} />
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <FontAwesomeIcon
                  icon={['fas', 'arrow-up']}
                  className="text-success"
                />
                <span className="text-success px-1">12.65%</span>
                <span className="text-white-50">same as before</span>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="12" xl="4">
          <Card className="card-box mb-5 bg-midnight-bloom text-white">
            <CardBody>
              <div className="align-box-row align-items-start">
                <div className="font-weight-bold">
                  <small className="text-white-50 d-block mb-1 text-uppercase">
                    Orders
                  </small>
                  <span className="font-size-xxl mt-1">345</span>
                </div>
                <div className="ml-auto">
                  <div className="bg-white text-center text-danger font-size-xl d-50 rounded-circle btn-icon">
                    <FontAwesomeIcon icon={['far', 'keyboard']} />
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <FontAwesomeIcon
                  icon={['fas', 'arrow-up']}
                  className="text-warning"
                />
                <span className="text-warning px-1">4.2%</span>
                <span className="text-white-50">lower order numbers</span>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
