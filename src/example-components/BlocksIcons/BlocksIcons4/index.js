import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Badge } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col xl="4">
          <a
            href="#/"
            onClick={(e) => e.preventDefault()}
            className="card btn rounded text-left mb-5 p-4">
            <div className="d-flex align-items-center">
              <div className="d-70 rounded-circle bg-success text-white mr-3 text-center">
                <FontAwesomeIcon
                  icon={['far', 'user']}
                  className="font-size-lg"
                />
              </div>
              <div className="flex-grow-1">
                <div className="text-black-50 pb-1">Project management</div>
                <div className="text-success">+ 5,72%</div>
              </div>
              <div className="font-size-sm opacity-5">
                <FontAwesomeIcon icon={['fas', 'arrow-right']} />
              </div>
            </div>
          </a>
        </Col>
        <Col xl="4">
          <a
            href="#/"
            onClick={(e) => e.preventDefault()}
            className="card btn rounded text-left mb-5 p-4">
            <div className="d-flex align-items-center">
              <div className="d-70 rounded-circle bg-warning text-white mr-3 text-center">
                <FontAwesomeIcon
                  icon={['far', 'bell']}
                  className="font-size-lg"
                />
              </div>
              <div className="flex-grow-1">
                <div className="text-black-50 pb-1">Analytics statistics</div>
                <div className="text-warning">457 new users</div>
              </div>
              <div className="font-size-sm opacity-5">
                <FontAwesomeIcon icon={['fas', 'arrow-right']} />
              </div>
            </div>
          </a>
        </Col>
        <Col xl="4">
          <a
            href="#/"
            onClick={(e) => e.preventDefault()}
            className="card btn rounded text-left mb-5 p-4">
            <div className="d-flex align-items-center">
              <div className="d-70 rounded-circle bg-neutral-first text-first mr-3 text-center">
                <FontAwesomeIcon
                  icon={['far', 'lightbulb']}
                  className="font-size-lg"
                />
              </div>
              <div className="flex-grow-1">
                <div className="text-black-50 pb-1">Tasks overview</div>
                <div className="text-danger">
                  <Badge pill color="danger" className="mr-1">
                    23 tasks
                  </Badge>
                  due today
                </div>
              </div>
              <div className="font-size-sm opacity-5">
                <FontAwesomeIcon icon={['fas', 'arrow-right']} />
              </div>
            </div>
          </a>
        </Col>
      </Row>
    </>
  );
}
