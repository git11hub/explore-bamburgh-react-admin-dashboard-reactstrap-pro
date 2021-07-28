import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Badge } from 'reactstrap';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';

import stock4 from '../../../assets/images/stock-photos/stock-4.jpg';
import stock5 from '../../../assets/images/stock-photos/stock-5.jpg';
import stock6 from '../../../assets/images/stock-photos/stock-6.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col xl="4" lg="6">
          <a
            className="card card-box-hover-rise mb-5"
            href="#/"
            onClick={(e) => e.preventDefault()}>
            <div className="card-badges">
              <Badge pill color="warning">
                Warning
              </Badge>
            </div>
            <img alt="..." className="card-img-top" src={stock4} />
            <div className="card-body card-body-avatar px-4 pb-4">
              <div className="avatar-icon-wrapper rounded-pill border-white border-3 avatar-icon-wrapper--sm">
                <div className="avatar-icon rounded-pill">
                  <img alt="..." src={avatar2} />
                </div>
              </div>
              <h5 className="card-title font-weight-bold font-size-xl">
                Bamburgh React Admin Dashboard with Reactstrap PRO
              </h5>
              <p className="card-text">
                Browse through the live previews to see just how powerful this
                admin template really is!
              </p>
              <div className="card-date text-black-50 mt-2">
                <FontAwesomeIcon icon={['far', 'clock']} className="mr-1" />
                <small>added moments ago</small>
              </div>
            </div>
          </a>
        </Col>
        <Col xl="4" lg="6">
          <a
            className="card card-box-hover-rise mb-5"
            href="#/"
            onClick={(e) => e.preventDefault()}>
            <div className="card-badges">
              <Badge pill color="success" className="mr-2">
                Success
              </Badge>
              <Badge pill color="neutral-info" className="text-info">
                Info
              </Badge>
            </div>
            <img alt="..." className="card-img-top" src={stock5} />
            <div className="card-body card-body-avatar px-4 pb-4">
              <div className="avatar-icon-wrapper rounded-pill border-white border-3 avatar-icon-wrapper--sm">
                <div className="avatar-icon rounded-pill">
                  <img alt="..." src={avatar1} />
                </div>
              </div>
              <h5 className="card-title font-weight-bold font-size-xl">
                Bamburgh React Admin Dashboard with Reactstrap PRO
              </h5>
              <p className="card-text">
                Browse through the live previews to see just how powerful this
                admin template really is!
              </p>
              <div className="card-date text-black-50 mt-2">
                <FontAwesomeIcon icon={['far', 'clock']} className="mr-1" />
                <small>added moments ago</small>
              </div>
            </div>
          </a>
        </Col>
        <Col xl="4" lg="12">
          <a
            className="card card-box-hover-rise mb-5"
            href="#/"
            onClick={(e) => e.preventDefault()}>
            <div className="card-badges">
              <Badge color="danger">Danger</Badge>
            </div>
            <img alt="..." className="card-img-top" src={stock6} />
            <div className="card-body card-body-avatar px-4 pb-4">
              <div className="avatar-icon-wrapper rounded-pill border-white border-3 avatar-icon-wrapper--sm">
                <div className="avatar-icon rounded-pill">
                  <img alt="..." src={avatar3} />
                </div>
              </div>
              <h5 className="card-title font-weight-bold font-size-xl">
                Bamburgh React Admin Dashboard with Reactstrap PRO
              </h5>
              <p className="card-text">
                Browse through the live previews to see just how powerful this
                admin template really is!
              </p>
              <div className="card-date text-black-50 mt-2">
                <FontAwesomeIcon icon={['far', 'clock']} className="mr-1" />
                <small>added moments ago</small>
              </div>
            </div>
          </a>
        </Col>
      </Row>
    </>
  );
}
