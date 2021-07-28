import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, CardBody, Card } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col xl="3" md="6">
          <Card className="mb-5 card-box card-box-border-bottom border-success">
            <CardBody>
              <div className="text-center">
                <div className="mt-1">
                  <FontAwesomeIcon
                    icon={['far', 'user']}
                    className="font-size-xxl text-success"
                  />
                </div>
                <div className="mt-3 line-height-sm">
                  <b className="font-size-lg pr-1">2,345</b>
                  <span className="text-black-50">users</span>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xl="3" md="6">
          <Card className="mb-5 card-box card-box-border-bottom border-danger">
            <CardBody>
              <div className="text-center">
                <div className="mt-1">
                  <FontAwesomeIcon
                    icon={['far', 'keyboard']}
                    className="font-size-xxl text-danger"
                  />
                </div>
                <div className="mt-3 line-height-sm">
                  <b className="font-size-lg pr-1">3,568</b>
                  <span className="text-black-50">clicks</span>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xl="3" md="6">
          <Card className="mb-5 card-box card-box-border-bottom border-warning">
            <CardBody>
              <div className="text-center">
                <div className="mt-1">
                  <FontAwesomeIcon
                    icon={['far', 'chart-bar']}
                    className="font-size-xxl text-warning"
                  />
                </div>
                <div className="mt-3 line-height-sm">
                  <b className="font-size-lg pr-1">$9,693</b>
                  <span className="text-black-50">revenue</span>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xl="3" md="6">
          <Card className="mb-5 card-box card-box-border-bottom border-info">
            <CardBody>
              <div className="text-center">
                <div className="mt-1">
                  <FontAwesomeIcon
                    icon={['far', 'building']}
                    className="font-size-xxl text-info"
                  />
                </div>
                <div className="mt-3 line-height-sm">
                  <b className="font-size-lg pr-1">431</b>
                  <span className="text-black-50">sales</span>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
