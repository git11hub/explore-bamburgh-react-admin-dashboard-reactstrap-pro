import React from 'react';

import { Row, Col, CardBody, Card, Badge } from 'reactstrap';

import stock1 from '../../../assets/images/stock-photos/stock-5.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <Card className="p-5 mb-5">
        <Row className="no-gutters align-items-center">
          <Col xl="6">
            <a
              href="#/"
              onClick={(e) => e.preventDefault()}
              className="d-flex h-280px rounded card-box-hover-rise">
              <img
                src={stock1}
                alt="Bamburgh React Admin Dashboard with Reactstrap PRO"
                className="img-fit-container rounded"
              />
            </a>
          </Col>
          <Col xl="6">
            <CardBody className="px-0 px-xl-4 pt-4 pb-xl-4">
              <a href="#/" onClick={(e) => e.preventDefault()}>
                <h2 className="font-weight-bold mb-4">
                  Bamburgh React Admin Dashboard with Reactstrap PRO
                </h2>
              </a>
              <p className="text-black-50 font-size-lg">
                This admin template is a complete frontend solution for
                easy-building applications or presentation websites. It&#39;s
                fully responsive and designed by professional UI&#x2F;UX
                designers and developers.
              </p>
              <div className="d-flex mt-4 justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <div className="avatar-icon-wrapper d-30 mr-2">
                    <Badge color="danger" className="badge-circle">
                      Offline
                    </Badge>
                    <div className="avatar-icon d-30 rounded-circle">
                      <img alt="..." src={avatar7} />
                    </div>
                  </div>
                  <div>Emma Taylor</div>
                </div>
                <div className="text-black-50 opacity-7">16 July, 2020</div>
              </div>
            </CardBody>
          </Col>
        </Row>
      </Card>
    </>
  );
}
