import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Badge, Button } from 'reactstrap';

import stock1 from '../../../assets/images/stock-photos/stock-1.jpg';
import stock2 from '../../../assets/images/stock-photos/stock-2.jpg';
import stock3 from '../../../assets/images/stock-photos/stock-3.jpg';
import avatar5 from '../../../assets/images/avatars/avatar5.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col xl="4">
          <Card className="shadow-xxl mb-5">
            <a
              href="#/"
              onClick={(e) => e.preventDefault()}
              className="card-img-wrapper rounded">
              <div className="img-wrapper-overlay">
                <div className="overlay-btn-wrapper">
                  <Button
                    color="facebook"
                    className="m-2 btn-icon hover-scale-lg btn-animated-icon d-50 p-0 border-0 rounded-lg">
                    <span className="btn-wrapper--icon d-flex">
                      <FontAwesomeIcon
                        icon={['fab', 'facebook']}
                        className="font-size-lg"
                      />
                    </span>
                  </Button>
                  <Button
                    color="twitter"
                    className="m-2 btn-icon hover-scale-lg btn-animated-icon d-50 p-0 border-0 rounded-lg">
                    <span className="btn-wrapper--icon d-flex">
                      <FontAwesomeIcon
                        icon={['fab', 'twitter']}
                        className="font-size-lg"
                      />
                    </span>
                  </Button>
                </div>
              </div>
              <div className="card-badges card-badges-bottom">
                <Badge pill color="warning">
                  Pending
                </Badge>
              </div>
              <img src={stock1} className="card-img-top rounded" alt="..." />
            </a>
          </Card>
        </Col>
        <Col xl="4">
          <Card className="shadow-xxl mb-5">
            <a
              href="#/"
              onClick={(e) => e.preventDefault()}
              className="card-img-wrapper rounded">
              <div className="img-wrapper-overlay">
                <div className="overlay-btn-wrapper">
                  <div className="avatar-icon-wrapper mx-auto mb-2">
                    <div className="avatar-icon">
                      <img alt="..." src={avatar5} />
                    </div>
                  </div>
                  <div className="font-size-lg font-weight-bold">
                    Darrel Devlin
                  </div>
                  <div className="text-white-50 pb-4">
                    Senior UX Developer, Apple Inc.
                  </div>
                  <Button
                    size="sm"
                    color="info"
                    className="btn-pill px-4 hover-scale-sm">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fas', 'download']} />
                    </span>
                    <span className="btn-wrapper--label">View Profile</span>
                  </Button>
                </div>
              </div>
              <div className="card-badges">
                <Badge pill color="neutral-info" className="text-info">
                  Articles
                </Badge>
              </div>
              <img src={stock2} className="card-img-top rounded" alt="..." />
            </a>
          </Card>
        </Col>
        <Col xl="4">
          <Card className="shadow-xxl mb-5">
            <a
              href="#/"
              onClick={(e) => e.preventDefault()}
              className="card-img-wrapper rounded">
              <div className="img-wrapper-overlay">
                <div className="overlay-btn-wrapper">
                  <Button
                    outline
                    color="secondary"
                    className="shadow-sm-dark btn-pill d-inline-flex justify-content-center align-items-center border-2 p-0 d-40 m-1">
                    <FontAwesomeIcon icon={['far', 'comment-dots']} />
                  </Button>
                  <Button
                    outline
                    color="secondary"
                    className="shadow-sm-dark btn-pill d-inline-flex justify-content-center align-items-center border-2 p-0 d-40 m-1">
                    <FontAwesomeIcon icon={['far', 'envelope']} />
                  </Button>
                </div>
              </div>
              <div className="card-badges card-badges-bottom">
                <Badge color="danger">Overdue</Badge>
              </div>
              <img src={stock3} className="card-img-top rounded" alt="..." />
            </a>
          </Card>
        </Col>
      </Row>
    </>
  );
}
