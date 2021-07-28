import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Badge } from 'reactstrap';

import stock3 from '../../../assets/images/stock-photos/stock-6.jpg';

import avatar3 from '../../../assets/images/avatars/avatar6.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col xl="6">
          <Card className="shadow-sm rounded-lg overflow-hidden mb-5">
            <div className="card-img-wrapper rounded">
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="p-4 p-lg-5 img-wrapper-overlay img-wrapper-overlay--visible shadow-none rounded">
                <div className="overlay-btn-wrapper d-block p-3 p-lg-5 text-left text-white">
                  <h5 className="font-weight-bold display-3 mb-3">
                    Bamburgh React Admin Dashboard with Reactstrap PRO
                  </h5>
                  <p className="font-size-lg mb-3">
                    350+ custom-made, beautiful components, widgets, pages,
                    dashboards and applications.
                  </p>
                  <p className="font-size-md text-white-50">
                    This admin template is a complete frontend solution for
                    easy-building applications or presentation websites.
                    It&#39;s fully responsive and designed by professional
                    UI&#x2F;UX designers and developers.
                  </p>
                  <p className="font-size-md text-white-50">
                    Browse through the live previews to see just how powerful
                    this admin template really is!
                  </p>

                  <div className="divider bg-white opacity-1 my-4" />
                  <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper mr-3">
                        <div className="avatar-icon shadow-sm-dark">
                          <img alt="..." src={avatar3} />
                        </div>
                      </div>
                      <div className="font-size-lg">Shanelle Wynn</div>
                    </div>
                    <div className="d-flex align-items-center text-white-50">
                      <FontAwesomeIcon
                        icon={['far', 'clock']}
                        className="mr-2"
                      />
                      <small>5 days ago</small>
                    </div>
                  </div>
                </div>
                <div className="card-badges card-badges-top">
                  <Badge className="badge-pill" color="success">
                    Marketing
                  </Badge>
                </div>
              </a>
              <img
                src={stock3}
                className="card-overlay-image img-fit-container rounded"
                alt="..."
              />
            </div>
          </Card>
        </Col>
        <Col xl="6">
          <Card className="shadow-sm rounded-lg overflow-hidden mb-5">
            <div className="card-img-wrapper rounded">
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="img-wrapper-overlay img-wrapper-overlay--visible shadow-none rounded">
                <div className="overlay-btn-wrapper p-4 p-lg-5 text-left text-white">
                  <div className="d-flex align-items-center">
                    <div className="avatar-icon-wrapper mr-3">
                      <div className="avatar-icon shadow-sm-dark">
                        <img alt="..." src={avatar3} />
                      </div>
                    </div>
                    <div>
                      <div>Shanelle Wynn</div>
                      <span className="text-white-50">
                        UI Engineer, Apple Inc.
                      </span>
                    </div>
                  </div>

                  <div className="divider bg-white opacity-2 my-3 my-lg-5" />

                  <h5 className="font-weight-bold display-3">
                    Bamburgh React Admin Dashboard with Reactstrap PRO
                  </h5>
                  <p className="font-size-lg my-3 text-white-50">
                    Browse through the live previews to see just how powerful
                    this admin template really is!
                  </p>
                  <p className="text-light">
                    This admin template is a complete frontend solution for
                    easy-building applications or presentation websites.
                    It&#39;s fully responsive and designed by professional
                    UI&#x2F;UX designers and developers.
                  </p>

                  <div className="divider bg-white opacity-2 my-3 my-lg-5" />

                  <div className="d-flex align-items-center text-white-50">
                    <FontAwesomeIcon icon={['far', 'clock']} className="mr-2" />
                    <small>added 3 days ago</small>
                  </div>
                </div>
                <div className="card-badges card-badges-bottom">
                  <Badge color="first">Articles</Badge>
                </div>
              </a>
              <img
                src={stock3}
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
