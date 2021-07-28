import React from 'react';

import { Row, Col, Card, Badge } from 'reactstrap';

import stock1 from '../../../assets/images/stock-photos/stock-4.jpg';
import stock2 from '../../../assets/images/stock-photos/stock-5.jpg';

import avatar6 from '../../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col lg="6">
          <Card className="shadow-sm rounded-lg overflow-hidden mb-5">
            <div className="card-img-wrapper rounded">
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="img-wrapper-overlay p-4 p-xl-5 img-wrapper-overlay--visible rounded">
                <div className="overlay-btn-wrapper card-body text-white text-center">
                  <h5 className="px-2 font-weight-bold display-4 mb-4">
                    Bamburgh React Admin Dashboard with Reactstrap PRO
                  </h5>
                  <p className="font-size-lg text-white-50 mb-0">
                    This admin template is a complete frontend solution for
                    easy-building applications or presentation websites.
                    It&#39;s fully responsive and designed by professional
                    UI&#x2F;UX designers and developers.
                  </p>
                  <div className="mt-4">
                    <div className="avatar-icon-wrapper mx-auto mb-2">
                      <div className="avatar-icon shadow-sm-dark">
                        <img alt="..." src={avatar6} />
                      </div>
                    </div>
                    <div>Dalia Finney</div>
                  </div>
                </div>
                <div className="card-badges card-badges-top">
                  <Badge pill color="danger">
                    Development
                  </Badge>
                </div>
              </a>
              <img
                src={stock1}
                className="card-overlay-image img-fit-container rounded"
                alt="..."
              />
            </div>
          </Card>
        </Col>
        <Col lg="6">
          <Card className="shadow-sm rounded-lg overflow-hidden hover-scale-sm mb-5">
            <div className="card-img-wrapper rounded">
              <div className="img-wrapper-overlay align-items-end img-wrapper-overlay--visible p-4 p-xl-5">
                <div className="overlay-btn-wrapper p-4 card-body text-white">
                  <h5 className="px-2 font-weight-bold display-4 mb-4">
                    Bamburgh React Admin Dashboard with Reactstrap PRO
                  </h5>
                  <p className="font-size-lg mb-0 text-white-50">
                    This admin template is a complete frontend solution for
                    easy-building applications or presentation websites.
                    It&#39;s fully responsive and designed by professional
                    UI&#x2F;UX designers and developers.
                  </p>
                  <div className="mt-4">
                    <div className="avatar-icon-wrapper mx-auto mb-2">
                      <div className="avatar-icon shadow-sm-dark">
                        <img alt="..." src={avatar7} />
                      </div>
                    </div>
                    <div>Miranda Lawson</div>
                  </div>
                </div>
              </div>
              <div className="card-badges">
                <Badge pill color="neutral-success" className="text-success">
                  Marketing
                </Badge>
              </div>
              <img
                src={stock2}
                className="card-overlay-image img-fit-container rounded"
                alt="..."
              />
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
