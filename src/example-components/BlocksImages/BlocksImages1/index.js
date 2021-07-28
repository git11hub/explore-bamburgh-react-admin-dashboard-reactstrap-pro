import React from 'react';

import { Row, Col, Card, Badge, Button } from 'reactstrap';

import stock1 from '../../../assets/images/stock-photos/stock-1.jpg';
import stock2 from '../../../assets/images/stock-photos/stock-2.jpg';
import stock3 from '../../../assets/images/stock-photos/stock-3.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col xl="4" lg="6">
          <Card className="card-transparent mb-5">
            <a
              href="#/"
              onClick={(e) => e.preventDefault()}
              className="card-img-wrapper rounded card-box-hover-rise-alt">
              <div className="card-badges card-badges-bottom">
                <Badge pill color="warning">
                  Warning
                </Badge>
              </div>
              <img src={stock1} className="card-img-top rounded" alt="..." />
            </a>
            <div className="card-body text-center">
              <h5 className="card-title px-2 font-weight-bold font-size-lg">
                Bamburgh React Admin Dashboard with Reactstrap PRO
              </h5>
              <p className="card-text">
                Browse through the live previews to see just how powerful this
                admin template really is!
              </p>
              <Button
                size="sm"
                outline
                color="first"
                className="hover-scale-sm btn-pill mt-1">
                View Details
              </Button>
            </div>
          </Card>
        </Col>
        <Col xl="4" lg="6">
          <Card className="card-transparent mb-5">
            <a
              href="#/"
              onClick={(e) => e.preventDefault()}
              className="card-img-wrapper rounded card-box-hover-rise-alt">
              <div className="card-badges card-badges-bottom">
                <Badge pill color="success" className="mr-2">
                  Success
                </Badge>
                <Badge pill color="neutral-info" className="text-info">
                  Info
                </Badge>
              </div>
              <img src={stock2} className="card-img-top rounded" alt="..." />
            </a>
            <div className="card-body text-center">
              <h5 className="card-title px-2 font-weight-bold font-size-lg">
                Bamburgh React Admin Dashboard with Reactstrap PRO
              </h5>
              <p className="card-text">
                Browse through the live previews to see just how powerful this
                admin template really is!
              </p>
              <Button
                size="sm"
                outline
                color="first"
                className="hover-scale-sm btn-pill mt-1">
                View Details
              </Button>
            </div>
          </Card>
        </Col>
        <Col xl="4" lg="12">
          <Card className="card-transparent mb-5">
            <a
              href="#/"
              onClick={(e) => e.preventDefault()}
              className="card-img-wrapper rounded card-box-hover-rise-alt">
              <div className="card-badges card-badges-bottom">
                <Badge color="danger">Danger</Badge>
              </div>
              <img src={stock3} className="card-img-top rounded" alt="..." />
            </a>
            <div className="card-body text-center">
              <h5 className="card-title px-2 font-weight-bold font-size-lg">
                Bamburgh React Admin Dashboard with Reactstrap PRO
              </h5>
              <p className="card-text">
                Browse through the live previews to see just how powerful this
                admin template really is!
              </p>
              <Button
                size="sm"
                outline
                color="first"
                className="hover-scale-sm btn-pill mt-1">
                View Details
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
