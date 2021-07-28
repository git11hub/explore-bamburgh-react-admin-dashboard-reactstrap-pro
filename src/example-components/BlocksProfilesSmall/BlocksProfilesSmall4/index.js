import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Badge, Button } from 'reactstrap';

import avatar5 from '../../../assets/images/avatars/avatar5.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

import stock2 from '../../../assets/images/stock-photos/stock-7.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col lg="6">
          <Card className="mb-5">
            <div className="card-img-wrapper h-280px">
              <div className="card-badges">
                <Badge pill color="success" className="mr-2">
                  New
                </Badge>
                <Badge pill color="neutral-info" className="text-info">
                  Update Available
                </Badge>
              </div>
              <img
                alt="..."
                className="card-img-top img-fit-container"
                src={stock2}
              />
            </div>
            <div className="card-body p-5 card-body-avatar">
              <div className="avatar-icon-wrapper shadow-sm-dark border-white rounded">
                <div className="avatar-icon rounded">
                  <img alt="..." src={avatar5} />
                </div>
              </div>
              <div className="pt-4">
                <h3 className="font-weight-bold font-size-xl my-3">
                  Bradleigh Whitmore
                </h3>
                <p className="font-size-lg text-black-50 mb-0">
                  This admin template is a complete frontend solution for
                  easy-building applications or presentation websites. It&#39;s
                  fully responsive and designed by professional UI&#x2F;UX
                  designers and developers.
                </p>
              </div>
              <div className="pt-4">
                <Button
                  color="primary"
                  className="d-50 px-4 line-height-1 py-0 w-auto hover-scale-sm">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['far', 'comment-dots']} />
                  </span>
                  <span className="btn-wrapper--label">Send Message</span>
                </Button>
              </div>
            </div>
          </Card>
        </Col>
        <Col lg="6">
          <Card className="mb-5">
            <div className="card-img-wrapper card-box-hover-rise-alt-lg h-280px">
              <div className="card-badges">
                <Badge pill color="danger">
                  Profile Update
                </Badge>
              </div>
              <img
                alt="..."
                className="card-img-top img-fit-container"
                src={stock2}
              />
            </div>
            <div className="card-body p-5 card-body-avatar">
              <div className="avatar-icon-wrapper shadow-sm-dark border-white rounded-circle">
                <div className="avatar-icon rounded-circle">
                  <img alt="..." src={avatar7} />
                </div>
              </div>
              <div className="pt-4">
                <h3 className="font-weight-bold font-size-xl my-3">
                  Shelly Hays
                </h3>
                <p className="font-size-lg text-black-50 mb-0">
                  This admin template is a complete frontend solution for
                  easy-building applications or presentation websites. It&#39;s
                  fully responsive and designed by professional UI&#x2F;UX
                  designers and developers.
                </p>
              </div>
              <div className="pt-4">
                <Button
                  color="primary"
                  className="d-50 px-4 line-height-1 py-0 w-auto hover-scale-sm">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['far', 'comment-dots']} />
                  </span>
                  <span className="btn-wrapper--label">Send Message</span>
                </Button>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
