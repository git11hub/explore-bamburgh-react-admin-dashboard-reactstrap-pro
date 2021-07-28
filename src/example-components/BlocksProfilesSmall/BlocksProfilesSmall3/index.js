import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Badge, UncontrolledTooltip, Button } from 'reactstrap';

import avatar4 from '../../../assets/images/avatars/avatar7.jpg';
import avatar5 from '../../../assets/images/avatars/avatar6.jpg';

import stock6 from '../../../assets/images/stock-photos/stock-6.jpg';
import stock7 from '../../../assets/images/stock-photos/stock-7.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col lg="6" className="d-flex">
          <Card className="card-box w-100 card-box-hover-rise mb-5">
            <div className="card-img-wrapper h-240px">
              <div className="card-badges card-badges-bottom">
                <Badge pill color="warning">
                  New Profile
                </Badge>
              </div>
              <img
                alt="..."
                className="card-img-top img-fit-container"
                src={stock6}
              />
            </div>
            <div className="card-body text-center card-body-avatar">
              <div className="avatar-icon-wrapper border-white overflow-hidden rounded border-3">
                <div className="avatar-icon rounded-0">
                  <img alt="..." src={avatar4} />
                </div>
              </div>
              <h3 className="font-weight-bold font-size-xl mt-2 mb-3">
                Zara Wagstaff
              </h3>
              <p className="font-size-lg text-black-50 mb-0 px-4">
                Browse through the live previews to see just how powerful this
                admin template really is!
              </p>
              <div className="pt-4 pb-2">
                <Button
                  color="facebook"
                  className="btn-icon btn-animated-icon-sm d-50 hover-scale-lg rounded-circle p-0 border-0 m-1"
                  id="btnFacebookTooltip55">
                  <span className="btn-wrapper--icon d-flex">
                    <FontAwesomeIcon
                      icon={['fab', 'facebook']}
                      className="font-size-lg"
                    />
                  </span>
                </Button>
                <UncontrolledTooltip target="btnFacebookTooltip55">
                  Facebook
                </UncontrolledTooltip>
                <Button
                  color="dribbble"
                  className="btn-icon btn-animated-icon-sm d-50 hover-scale-lg rounded-circle p-0 border-0 m-1"
                  id="btnDribbbleTooltip55">
                  <span className="btn-wrapper--icon d-flex">
                    <FontAwesomeIcon
                      icon={['fab', 'dribbble']}
                      className="font-size-lg"
                    />
                  </span>
                </Button>
                <UncontrolledTooltip target="btnDribbbleTooltip55">
                  Dribbble
                </UncontrolledTooltip>
                <Button
                  color="twitter"
                  className="btn-icon btn-animated-icon-sm d-50 hover-scale-lg rounded-circle p-0 border-0 m-1"
                  id="btnTwitterTooltip55">
                  <span className="btn-wrapper--icon d-flex">
                    <FontAwesomeIcon
                      icon={['fab', 'twitter']}
                      className="font-size-lg"
                    />
                  </span>
                </Button>
                <UncontrolledTooltip target="btnTwitterTooltip55">
                  Twitter
                </UncontrolledTooltip>
              </div>
            </div>
          </Card>
        </Col>
        <Col lg="6" className="d-flex">
          <Card className="card-box w-100 p-3 mb-5">
            <a
              href="#/"
              onClick={(e) => e.preventDefault()}
              className="card-img-wrapper h-240px card-box-hover-rise-alt-lg rounded">
              <div className="img-wrapper-overlay">
                <div className="overlay-btn-wrapper">
                  <Button
                    color="facebook"
                    className="btn-icon btn-animated-icon-sm d-50 p-0 border-0 m-2">
                    <span className="btn-wrapper--icon d-flex">
                      <FontAwesomeIcon icon={['fab', 'facebook']} />
                    </span>
                  </Button>
                  <Button
                    color="twitter"
                    className="btn-icon btn-animated-icon-sm d-50 p-0 border-0 m-2">
                    <span className="btn-wrapper--icon d-flex">
                      <FontAwesomeIcon icon={['fab', 'twitter']} />
                    </span>
                  </Button>
                </div>
              </div>
              <div className="card-badges card-badges-top">
                <Badge pill color="success">
                  Updated
                </Badge>
              </div>
              <img
                src={stock7}
                className="card-img-top img-fit-container rounded"
                alt="..."
              />
            </a>
            <div className="card-body text-center card-body-avatar">
              <div className="avatar-icon-wrapper rounded-circle border-white overflow-hidden border-3">
                <div className="avatar-icon rounded-circle">
                  <img alt="..." src={avatar5} />
                </div>
              </div>
              <h3 className="font-weight-bold font-size-xl mt-2 mb-3">
                Emma Taylor
              </h3>
              <p className="font-size-lg text-black-50 mb-0 px-4">
                Browse through the live previews to see just how powerful this
                admin template really is!
              </p>
              <div className="pt-4 pb-2">
                <Button
                  color="primary"
                  className="d-50 px-4 line-height-1 py-0 w-auto hover-scale-lg btn-pill">
                  View complete profile
                </Button>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
