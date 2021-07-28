import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card } from 'reactstrap';

import CountUp from 'react-countup';
export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col xl="6">
          <Card className="card-box mb-5">
            <Row className="no-gutters">
              <Col lg="4" className="p-3">
                <div className="divider-v divider-v-lg" />
                <Row>
                  <Col>
                    <div className="text-center">
                      <div>
                        <FontAwesomeIcon
                          icon={['far', 'envelope']}
                          className="font-size-xxl text-info"
                        />
                      </div>
                      <div className="mt-2 line-height-sm">
                        <b className="font-size-lg">
                          <CountUp
                            start={0}
                            end={993}
                            duration={12}
                            deplay={2}
                            separator=" "
                            decimals={0}
                            decimal=","
                            prefix="$ "
                            suffix=""
                          />
                        </b>
                        <span className="text-black-50 d-block">revenue</span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col lg="4" className="p-3">
                <div className="divider-v divider-v-lg" />
                <Row>
                  <Col>
                    <div className="text-center">
                      <div>
                        <FontAwesomeIcon
                          icon={['far', 'lightbulb']}
                          className="font-size-xxl text-success"
                        />
                      </div>
                      <div className="mt-2 line-height-sm">
                        <b className="font-size-lg">
                          <CountUp
                            start={0}
                            end={2345}
                            duration={12}
                            deplay={2}
                            separator=""
                            decimals={0}
                            decimal=","
                            prefix=""
                            suffix=""
                          />
                        </b>
                        <span className="text-black-50 d-block">users</span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col lg="4" className="p-3">
                <Row>
                  <Col>
                    <div className="text-center">
                      <div>
                        <FontAwesomeIcon
                          icon={['far', 'keyboard']}
                          className="font-size-xxl text-danger"
                        />
                      </div>
                      <div className="mt-2 line-height-sm">
                        <b className="font-size-lg">
                          <CountUp
                            start={0}
                            end={1024}
                            duration={9}
                            separator=""
                            decimals={0}
                            decimal=","
                            prefix=""
                            suffix=""
                          />
                        </b>
                        <span className="text-black-50 d-block">orders</span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xl="6">
          <Card className="card-box mb-5">
            <Row className="no-gutters">
              <Col lg="4" className="p-3">
                <div className="divider-v divider-v-lg" />
                <Row>
                  <Col>
                    <div className="d-flex p-3">
                      <FontAwesomeIcon
                        icon={['far', 'envelope']}
                        className="display-4 text-info"
                      />
                      <div className="ml-3 line-height-sm">
                        <b className="font-size-xxl">
                          <CountUp
                            start={0}
                            end={5468}
                            duration={9}
                            separator=""
                            decimals={0}
                            decimal=","
                            prefix="$ "
                            suffix=""
                          />
                        </b>
                        <span className="text-black-50 d-block">revenue</span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col lg="4" className="p-3">
                <div className="divider-v divider-v-lg" />
                <Row>
                  <Col>
                    <div className="d-flex p-3">
                      <FontAwesomeIcon
                        icon={['far', 'lightbulb']}
                        className="display-4 text-success"
                      />
                      <div className="ml-3 line-height-sm">
                        <b className="font-size-xxl">
                          <CountUp
                            start={0}
                            end={2346}
                            duration={5}
                            separator=""
                            decimals={0}
                            decimal=","
                            prefix=""
                            suffix=""
                          />
                        </b>
                        <span className="text-black-50 d-block">users</span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col lg="4" className="p-3">
                <Row>
                  <Col>
                    <div className="d-flex p-3">
                      <FontAwesomeIcon
                        icon={['far', 'keyboard']}
                        className="display-4 text-danger"
                      />
                      <div className="ml-3 line-height-sm">
                        <b className="font-size-xxl">
                          <CountUp
                            start={0}
                            end={7764}
                            duration={5}
                            separator=""
                            decimals={0}
                            decimal=","
                            prefix=""
                            suffix=""
                          />
                        </b>
                        <span className="text-black-50 d-block">orders</span>
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
