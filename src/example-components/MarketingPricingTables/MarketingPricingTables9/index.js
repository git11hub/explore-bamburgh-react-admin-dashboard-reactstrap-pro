import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Container, Button } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <div className="pb-5">
        <Container className="pb-5">
          <div className="pb-5 text-center">
            <h1 className="display-3 text-black mb-2 font-weight-bold">
              Plans & pricing
            </h1>
            <p className="font-size-lg px-5 text-black-50">
              Browse through the live previews to see just how powerful this
              admin template really is!
            </p>
          </div>
          <Col lg="10" xl="8" className="mx-auto">
            <Row>
              <Col lg="6">
                <Card className="rounded-lg mb-5 text-second shadow-xxl">
                  <div className="text-center d-block pt-4 pb-2">
                    <div className="d-inline-block text-uppercase font-weight-bold d-40 w-auto px-4 font-size-sm text-warning">
                      Developer
                    </div>
                    <div className="font-weight-bold line-height-1 text-second text-uppercase display-3">
                      <small>$</small>99
                    </div>
                  </div>
                  <div className="px-5 py-4">
                    <div className="d-flex align-items-center">
                      <div className="d-40 rounded-circle btn-icon text-warning">
                        <FontAwesomeIcon
                          icon={['fas', 'check']}
                          className="font-size-xs"
                        />
                      </div>
                      <div className="opacity-7">Unlimited Tasks</div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="d-40 rounded-circle btn-icon text-warning">
                        <FontAwesomeIcon
                          icon={['fas', 'check']}
                          className="font-size-xs"
                        />
                      </div>
                      <div className="opacity-7">Unlimited Teams</div>
                    </div>
                  </div>
                  <div className="mt-3 pb-5 text-center">
                    <Button
                      className="rounded-lg font-weight-bold px-4"
                      color="neutral-warning">
                      Purchase now
                    </Button>
                  </div>
                </Card>
              </Col>
              <Col lg="6">
                <Card className="rounded-lg mb-5 text-white bg-sunrise-purple shadow-xxl">
                  <div className="text-center d-block pt-4 pb-2">
                    <div className="d-inline-block text-uppercase font-weight-bold d-40 w-auto px-4 font-size-sm text-warning">
                      Enterprise
                    </div>
                    <div className="font-weight-bold line-height-1 text-white text-uppercase display-3">
                      <small>$</small>599
                    </div>
                  </div>
                  <div className="px-5 py-4">
                    <div className="d-flex align-items-center">
                      <div className="d-40 rounded-circle btn-icon text-warning">
                        <FontAwesomeIcon
                          icon={['fas', 'check']}
                          className="font-size-xs"
                        />
                      </div>
                      <div className="opacity-7">Unlimited Tasks</div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="d-40 rounded-circle btn-icon text-warning">
                        <FontAwesomeIcon
                          icon={['fas', 'check']}
                          className="font-size-xs"
                        />
                      </div>
                      <div className="opacity-7">Unlimited Teams</div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="d-40 rounded-circle btn-icon text-warning">
                        <FontAwesomeIcon
                          icon={['fas', 'check']}
                          className="font-size-xs"
                        />
                      </div>
                      <div className="opacity-7">All Integrations</div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="d-40 rounded-circle btn-icon text-warning">
                        <FontAwesomeIcon
                          icon={['fas', 'check']}
                          className="font-size-xs"
                        />
                      </div>
                      <div className="opacity-7">Premium support</div>
                    </div>
                  </div>
                  <div className="mt-3 pb-5 text-center">
                    <Button
                      className="rounded-lg font-weight-bold py-3 px-5"
                      color="warning">
                      Purchase now
                    </Button>
                  </div>
                </Card>
              </Col>
            </Row>
          </Col>
        </Container>
      </div>
    </>
  );
}
