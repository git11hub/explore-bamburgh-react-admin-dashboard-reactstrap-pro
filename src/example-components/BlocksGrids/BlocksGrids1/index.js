import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col xl="6">
          <Card className="card-box mb-5">
            <Row className="no-gutters">
              <Col md="4" className="p-3">
                <div className="divider-v divider-v-lg" />
                <div className="text-center">
                  <div>
                    <FontAwesomeIcon
                      icon={['far', 'envelope']}
                      className="font-size-xxl text-info"
                    />
                  </div>
                  <div className="mt-2 line-height-sm">
                    <b className="font-size-lg">$9,693</b>
                    <span className="text-black-50 d-block">revenue</span>
                  </div>
                </div>
              </Col>
              <Col md="4" className="p-3">
                <div className="divider-v divider-v-lg" />

                <div className="text-center">
                  <div>
                    <FontAwesomeIcon
                      icon={['far', 'lightbulb']}
                      className="font-size-xxl text-success"
                    />
                  </div>
                  <div className="mt-2 line-height-sm">
                    <b className="font-size-lg">2,345</b>
                    <span className="text-black-50 d-block">users</span>
                  </div>
                </div>
              </Col>
              <Col md="4" className="p-3">
                <div className="text-center">
                  <div>
                    <FontAwesomeIcon
                      icon={['far', 'keyboard']}
                      className="font-size-xxl text-danger"
                    />
                  </div>
                  <div className="mt-2 line-height-sm">
                    <b className="font-size-lg">1,024</b>
                    <span className="text-black-50 d-block">orders</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xl="6">
          <Card className="card-box mb-5">
            <Row className="no-gutters">
              <Col md="6" className="p-3">
                <div className="divider-v divider-v-lg" />
                <Row>
                  <Col md="12">
                    <div className="d-flex p-3">
                      <FontAwesomeIcon
                        icon={['far', 'envelope']}
                        className="display-4 text-info"
                      />
                      <div className="ml-4 line-height-sm">
                        <b className="font-size-xxl">$9,693</b>
                        <span className="text-black-50 d-block">revenue</span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md="6" className="p-3">
                <div className="divider-v divider-v-lg" />
                <Row>
                  <Col md="12">
                    <div className="d-flex p-3">
                      <FontAwesomeIcon
                        icon={['far', 'lightbulb']}
                        className="display-4 text-success"
                      />
                      <div className="ml-4 line-height-sm">
                        <b className="font-size-xxl">2,345</b>
                        <span className="text-black-50 d-block">users</span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
}
