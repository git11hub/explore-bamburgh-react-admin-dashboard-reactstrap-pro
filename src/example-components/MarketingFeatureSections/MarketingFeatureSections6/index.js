import React from 'react';

import { Row, Col, Card, Container, Badge } from 'reactstrap';

import stock1 from '../../../assets/images/stock-photos/stock-4.jpg';
import avatar6 from '../../../assets/images/avatars/avatar6.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <div className="feature-box">
        <Container className="py-5">
          <Col xl="7" md="9" lg="10" className="px-0">
            <h1 className="display-3 mb-3 font-weight-bold">
              Bamburgh React Admin Dashboard with Reactstrap PRO
            </h1>
            <p className="font-size-lg text-black-50">
              This admin template is a complete frontend solution for
              easy-building applications or presentation websites. It&#39;s
              fully responsive and designed by professional UI&#x2F;UX designers
              and developers.
            </p>
          </Col>
          <Row className="mt-5">
            <Col xl="4" className="d-flex align-items-center">
              <Row className="w-100 mb-3 mb-xl-0">
                <Col lg="4" xl="12">
                  <div className="feature-box pr-4">
                    <h3 className="font-size-lg font-weight-bold my-3">
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        title=""
                        className="text-first">
                        Components
                      </a>
                    </h3>
                    <p className="text-black-50 mb-3">
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born...
                    </p>
                  </div>
                </Col>
                <Col lg="4" xl="12">
                  <div className="feature-box pr-4">
                    <h3 className="font-size-lg font-weight-bold my-3">
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        title=""
                        className="text-first">
                        Widgets
                      </a>
                    </h3>
                    <p className="text-black-50 mb-3">
                      Expound the actual teachings of the great explorer of the
                      truth, the master-builder of human happiness...
                    </p>
                  </div>
                </Col>
                <Col lg="4" xl="12">
                  <div className="feature-box pr-4">
                    <h3 className="font-size-lg font-weight-bold my-3">
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        title=""
                        className="text-first">
                        Elements
                      </a>
                    </h3>
                    <p className="text-black-50 mb-3">
                      No one rejects, dislikes, or avoids pleasure itself,
                      because it is pleasure, but because those who do not
                      know...
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md="8" xl="5" className="d-flex align-items-center">
              <Card className="mt-2 mt-xl-0 shadow-sm card-box-hover-rise-alt-lg rounded-lg overflow-hidden">
                <div className="card-img-wrapper rounded">
                  <a
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="img-wrapper-overlay p-3 p-xl-4 img-wrapper-overlay--visible shadow-none rounded">
                    <div className="overlay-btn-wrapper card-body text-white text-center">
                      <h5 className="px-2 font-weight-bold display-4 mb-4">
                        Bamburgh React Admin Dashboard with Reactstrap PRO
                      </h5>
                      <p className="font-size-lg text-white-50 mb-0">
                        Browse through the live previews to see just how
                        powerful this admin template really is!
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
            <Col md="4" xl="3" className="d-flex align-items-center">
              <div className="py-2 py-xl-4">
                <div className="d-flex align-items-end flex-column">
                  <div className="feature-box">
                    <h3 className="font-size-lg font-weight-bold my-3">
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        title=""
                        className="text-first">
                        Components
                      </a>
                    </h3>
                    <p className="text-black-50 mb-0">
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born...
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
