import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Badge, Button } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col xl="4">
          <Card className="p-5 mb-5">
            <div className="card-badges">
              <Badge pill color="danger" className="shadow-none">
                27
              </Badge>
            </div>
            <div className="bg-arielle-smile text-center text-white font-size-xl d-50 rounded btn-icon">
              <FontAwesomeIcon icon={['far', 'map']} />
            </div>
            <h3 className="font-size-lg font-weight-bold mt-4">
              Sales statistics
            </h3>
            <p className="text-black-50 mt-2">
              We've included only the most popular solutions included ...
            </p>
            <Button
              tag="a"
              href="#/"
              onClick={(e) => e.preventDefault()}
              outline
              color="first"
              className="mt-1">
              <span className="btn-wrapper--label">View live preview</span>
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon icon={['fas', 'arrow-right']} />
              </span>
            </Button>
          </Card>
        </Col>
        <Col xl="4">
          <Card className="p-5 mb-5">
            <div className="card-badges">
              <Badge pill color="warning" className="shadow-none mr-1">
                Promo
              </Badge>
              <Badge pill color="info" className="shadow-none">
                Special
              </Badge>
            </div>
            <div className="bg-night-sky text-center text-white font-size-xl d-50 rounded btn-icon">
              <FontAwesomeIcon icon={['far', 'chart-bar']} />
            </div>
            <h3 className="font-size-lg font-weight-bold mt-4">
              Generated reports
            </h3>
            <p className="text-black-50 mt-2">
              Mosaic, the first graphical browser, is introduced to the ...
            </p>
            <Button
              tag="a"
              href="#/"
              onClick={(e) => e.preventDefault()}
              outline
              color="first"
              className="mt-1">
              <span className="btn-wrapper--label">View live preview</span>
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon icon={['fas', 'arrow-right']} />
              </span>
            </Button>
          </Card>
        </Col>
        <Col xl="4">
          <Card className="p-5 mb-5">
            <div className="card-badges">
              <Badge
                pill
                color="neutral-danger"
                className="shadow-none text-danger">
                Overdue
              </Badge>
            </div>
            <div className="bg-vicious-stance text-center text-white font-size-xl d-50 rounded btn-icon">
              <FontAwesomeIcon icon={['far', 'object-group']} />
            </div>
            <h3 className="font-size-lg font-weight-bold mt-4">
              Pricing plans
            </h3>
            <p className="text-black-50 mt-2">
              Bill Clinton's presidential scandal makes it online for the ...
            </p>
            <Button
              tag="a"
              href="#/"
              onClick={(e) => e.preventDefault()}
              outline
              color="first"
              className="mt-1">
              <span className="btn-wrapper--label">View live preview</span>
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon icon={['fas', 'arrow-right']} />
              </span>
            </Button>
          </Card>
        </Col>
      </Row>
    </>
  );
}
