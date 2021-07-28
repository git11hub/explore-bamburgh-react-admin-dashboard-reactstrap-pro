import React from 'react';

import { Row, Col } from 'reactstrap';

import illustration1 from '../../../assets/images/illustrations/pack1/analysis.svg';
import illustration2 from '../../../assets/images/illustrations/pack1/businessman.svg';
import illustration3 from '../../../assets/images/illustrations/pack1/handshake.svg';
import illustration4 from '../../../assets/images/illustrations/pack1/moving.svg';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col md="6" xl="3">
          <a
            href="#/"
            onClick={(e) => e.preventDefault()}
            className="d-block card card-box-hover-rise text-left hover-scale-sm card-box mb-5">
            <img
              src={illustration1}
              style={{ height: 110 }}
              alt="..."
              className="mt-3"
            />
            <div className="px-4 pt-2 pb-4">
              <div className="font-size-lg font-weight-bold mb-2">
                Analytics
              </div>
              <p className="mb-0 text-black-50">
                Browse through the live previews to see just how powerful this
                admin template really is!
              </p>
            </div>
          </a>
        </Col>
        <Col md="6" xl="3">
          <a
            href="#/"
            onClick={(e) => e.preventDefault()}
            className="d-block card card-box-hover-rise text-left hover-scale-sm card-box mb-5">
            <img
              src={illustration2}
              style={{ height: 110 }}
              alt="..."
              className="mt-3"
            />
            <div className="px-4 pt-2 pb-4">
              <div className="font-size-lg font-weight-bold mb-2">Budgets</div>
              <p className="mb-0 text-black-50">
                Browse through the live previews to see just how powerful this
                admin template really is!
              </p>
            </div>
          </a>
        </Col>
        <Col md="6" xl="3">
          <a
            href="#/"
            onClick={(e) => e.preventDefault()}
            className="d-block card card-box-hover-rise text-left hover-scale-sm card-box mb-5">
            <img
              src={illustration3}
              style={{ height: 110 }}
              alt="..."
              className="mt-3"
            />
            <div className="px-4 pt-2 pb-4">
              <div className="font-size-lg font-weight-bold mb-2">Profiles</div>
              <p className="mb-0 text-black-50">
                Browse through the live previews to see just how powerful this
                admin template really is!
              </p>
            </div>
          </a>
        </Col>
        <Col md="6" xl="3">
          <a
            href="#/"
            onClick={(e) => e.preventDefault()}
            className="d-block card card-box-hover-rise text-left hover-scale-sm card-box mb-5">
            <img
              src={illustration4}
              style={{ height: 110 }}
              alt="..."
              className="mt-3"
            />
            <div className="px-4 pt-2 pb-4">
              <div className="font-size-lg font-weight-bold mb-2">
                Performance
              </div>
              <p className="mb-0 text-black-50">
                Browse through the live previews to see just how powerful this
                admin template really is!
              </p>
            </div>
          </a>
        </Col>
      </Row>
    </>
  );
}
