import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, UncontrolledTooltip, Button } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <Card className="card-box mb-5">
        <Row className="no-gutters">
          <Col xl="6" className="pt-3">
            <div className="divider-v divider-v-md" />
            <Row className="mt-2">
              <Col>
                <div className="text-center">
                  <div>
                    <FontAwesomeIcon
                      icon={['far', 'user']}
                      className="font-size-xxl text-success"
                    />
                  </div>
                  <div className="mt-2 line-height-sm">
                    <b className="font-size-lg">2,345</b>
                    <span className="text-black-50 d-block">users</span>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="text-center">
                  <div>
                    <FontAwesomeIcon
                      icon={['far', 'chart-bar']}
                      className="font-size-xxl text-info"
                    />
                  </div>
                  <div className="mt-2 line-height-sm">
                    <b className="font-size-lg">$9,693</b>
                    <span className="text-black-50 d-block">revenue</span>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="divider my-3" />
            <div className="text-center">
              <Button
                tag="a"
                href="#/"
                onClick={(e) => e.preventDefault()}
                color="primary"
                className="m-3 p-0 d-inline-flex align-items-center justify-content-center text-center font-size-xxl d-70 rounded"
                id="MenuExampleTooltip15">
                <FontAwesomeIcon
                  icon={['far', 'building']}
                  className="font-size-lg"
                />
              </Button>
              <UncontrolledTooltip target="MenuExampleTooltip15">
                Menu Example
              </UncontrolledTooltip>
              <Button
                tag="a"
                href="#/"
                onClick={(e) => e.preventDefault()}
                color="success"
                className="m-3 p-0 d-inline-flex align-items-center justify-content-center text-center font-size-xxl d-70 rounded"
                id="MenuExampleTooltip26">
                <FontAwesomeIcon
                  icon={['far', 'lightbulb']}
                  className="font-size-lg"
                />
              </Button>
              <UncontrolledTooltip target="MenuExampleTooltip26">
                Menu example
              </UncontrolledTooltip>
              <Button
                tag="a"
                href="#/"
                onClick={(e) => e.preventDefault()}
                color="danger"
                className="m-3 p-0 d-inline-flex align-items-center justify-content-center text-center font-size-xxl d-70 rounded"
                id="MenuExampleTooltip28">
                <FontAwesomeIcon
                  icon={['far', 'object-group']}
                  className="font-size-lg"
                />
              </Button>
              <UncontrolledTooltip target="MenuExampleTooltip28">
                Menu Example
              </UncontrolledTooltip>
            </div>
          </Col>
          <Col xl="6" className="pt-3">
            <Row className="mt-2">
              <Col>
                <div className="text-center">
                  <div>
                    <FontAwesomeIcon
                      icon={['far', 'user']}
                      className="font-size-xxl text-success"
                    />
                  </div>
                  <div className="mt-2 line-height-sm">
                    <b className="font-size-lg">2,345</b>
                    <span className="text-black-50 d-block">users</span>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="text-center">
                  <div>
                    <FontAwesomeIcon
                      icon={['far', 'chart-bar']}
                      className="font-size-xxl text-info"
                    />
                  </div>
                  <div className="mt-2 line-height-sm">
                    <b className="font-size-lg">$9,693</b>
                    <span className="text-black-50 d-block">revenue</span>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="divider my-3" />
            <div className="text-center">
              <Button
                tag="a"
                href="#/"
                onClick={(e) => e.preventDefault()}
                color="primary"
                className="m-3 border-0 p-0 shadow-sm bg-sunny-morning d-inline-block text-center text-white font-size-xxl d-70 rounded">
                <FontAwesomeIcon
                  icon={['far', 'comment-dots']}
                  className="font-size-lg"
                />
              </Button>
              <Button
                tag="a"
                href="#/"
                onClick={(e) => e.preventDefault()}
                color="primary"
                className="m-3 border-0 p-0 shadow-sm bg-strong-bliss d-inline-block text-center text-white font-size-xxl d-70 rounded">
                <FontAwesomeIcon
                  icon={['far', 'question-circle']}
                  className="font-size-lg"
                />
              </Button>
              <Button
                tag="a"
                href="#/"
                onClick={(e) => e.preventDefault()}
                color="primary"
                className="m-3 border-0 p-0 shadow-sm bg-night-sky d-inline-block text-center text-white font-size-xxl d-70 rounded">
                <FontAwesomeIcon
                  icon={['far', 'lightbulb']}
                  className="font-size-lg"
                />
              </Button>
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
}
