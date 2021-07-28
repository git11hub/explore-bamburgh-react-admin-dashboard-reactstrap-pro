import React from 'react';

import { Row, Col, Card, Badge, Button } from 'reactstrap';

import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import stock7 from '../../../assets/images/stock-photos/stock-7.jpg';
import stock6 from '../../../assets/images/stock-photos/stock-6.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col lg="6" className="d-flex">
          <Card className="mb-5">
            <div className="card-badges">
              <Badge pill color="warning" className="h-auto px-3 py-1">
                Blog Posts
              </Badge>
            </div>
            <a
              href="#/"
              onClick={(e) => e.preventDefault()}
              className="image-title-overlay h-280px"
              title="...">
              <div className="image-title-overlay--bottom px-5 py-4">
                <h3 className="font-size-xxl font-weight-bold m-0 text-white">
                  Bamburgh React Admin Dashboard with Reactstrap PRO
                </h3>
              </div>
              <img
                alt="..."
                className="card-img-top img-fit-container"
                src={stock7}
              />
            </a>
            <div className="p-5">
              <div className="d-flex justify-content-between mb-4">
                <div className="d-flex align-items-center">
                  <div className="avatar-icon-wrapper mr-2">
                    <div className="avatar-icon">
                      <img alt="..." src={avatar2} />
                    </div>
                  </div>
                  <div>
                    <a
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="font-weight-bold"
                      title="...">
                      Shanelle Wynn
                    </a>
                    <span className="text-black-50 d-block">
                      UI Engineer, Apple Inc.
                    </span>
                  </div>
                </div>
                <div>
                  <Button color="neutral-primary" className="py-1 px-2">
                    <span className="font-size-lg font-weight-bold">23</span>
                    <span className="d-block opacity-6">Reviews</span>
                  </Button>
                </div>
              </div>
              <p className="text-black font-size-xl">
                Browse through the live previews to see just how powerful this
                admin template really is!
              </p>
              <p className="card-text font-size-lg">
                This admin template is a complete frontend solution for
                easy-building applications or presentation websites. It&#39;s
                fully responsive and designed by professional UI&#x2F;UX
                designers and developers.
              </p>
              <div className="d-flex justify-content-between pt-2">
                <Button color="first" className="hover-scale-lg">
                  Learn more
                </Button>
              </div>
            </div>
          </Card>
        </Col>
        <Col lg="6" className="d-flex">
          <Card className="mb-5">
            <div className="px-3 pt-3 position-relative">
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="image-title-overlay d-block rounded h-280px"
                title="...">
                <div className="card-badges">
                  <Badge pill color="success" className="h-auto px-3 py-1">
                    New Content
                  </Badge>
                </div>
                <div className="image-title-overlay--bottom p-4">
                  <h3 className="font-size-xxl font-weight-bold m-0 text-white">
                    Bamburgh React Admin Dashboard with Reactstrap PRO
                  </h3>
                </div>
                <img
                  alt="..."
                  className="rounded img-fit-container"
                  src={stock6}
                />
              </a>
            </div>
            <div className="p-4">
              <div className="d-flex justify-content-between mb-4">
                <div className="d-flex align-items-center">
                  <div className="avatar-icon-wrapper mr-2">
                    <div className="avatar-icon">
                      <img alt="..." src={avatar3} />
                    </div>
                  </div>
                  <div>
                    <a
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="font-weight-bold"
                      title="...">
                      Shanelle Wynn
                    </a>
                    <span className="text-black-50 d-block">
                      UI Engineer, Apple Inc.
                    </span>
                  </div>
                </div>
                <div>
                  <Button color="neutral-primary" className="py-1 px-2">
                    <span className="font-size-lg font-weight-bold">23</span>
                    <span className="d-block opacity-6">Reviews</span>
                  </Button>
                </div>
              </div>
              <p className="text-black font-size-xl">
                Browse through the live previews to see just how powerful this
                admin template really is!
              </p>
              <p className="card-text font-size-lg">
                This admin template is a complete frontend solution for
                easy-building applications or presentation websites. It&#39;s
                fully responsive and designed by professional UI&#x2F;UX
                designers and developers.
              </p>
              <div className="d-flex justify-content-between pt-2">
                <Button color="first" className="hover-scale-lg">
                  Learn more
                </Button>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
