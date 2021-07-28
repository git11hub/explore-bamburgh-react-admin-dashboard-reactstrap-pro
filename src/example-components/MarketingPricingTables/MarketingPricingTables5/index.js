import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, CardHeader, Container, Button } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <div className="py-4">
        <Container>
          <div className="pb-5 text-center">
            <h1 className="display-4 text-black mb-2 font-weight-bold">
              Plans & pricing
            </h1>
            <p className="font-size-lg text-black-50">
              Browse through the live previews to see just how powerful this
              admin template really is!
            </p>
          </div>
          <Row>
            <Col lg="4">
              <Card className="shadow-xxl mb-5 mb-lg-0">
                <CardHeader className="text-center d-block py-4 bg-secondary">
                  <div className="my-4 bg-first text-white d-inline-block shadow-xxl text-uppercase font-weight-bold d-40 w-auto px-4 font-size-xs rounded-pill">
                    Developer
                  </div>
                  <div className="font-weight-bold line-height-1 text-second text-uppercase display-2">
                    <small>$</small>99
                  </div>
                  <div className="font-size-md text-black-50">
                    monthly fee, for a single user
                  </div>
                  <div className="mt-4 pb-4">
                    <Button
                      className="rounded-sm font-weight-bold px-4"
                      outline
                      color="second">
                      Purchase now
                    </Button>
                  </div>
                </CardHeader>
                <div className="divider" />
                <div className="px-5 py-4">
                  <div className="d-flex align-items-center py-2">
                    <div className="d-30 rounded-circle btn-icon bg-neutral-success text-success mr-3">
                      <FontAwesomeIcon
                        icon={['fas', 'check']}
                        className="font-size-xs"
                      />
                    </div>
                    <div className="text-second opacity-7">Unlimited Tasks</div>
                  </div>
                  <div className="divider opacity-8 my-1 mx-2" />
                  <div className="d-flex align-items-center py-2">
                    <div className="d-30 rounded-circle btn-icon bg-neutral-success text-success mr-3">
                      <FontAwesomeIcon
                        icon={['fas', 'check']}
                        className="font-size-xs"
                      />
                    </div>
                    <div className="text-second opacity-7">Unlimited Teams</div>
                  </div>
                  <div className="divider opacity-8 my-1 mx-2" />
                  <div className="d-flex align-items-center py-2">
                    <div className="d-30 rounded-circle btn-icon bg-neutral-success text-success mr-3">
                      <FontAwesomeIcon
                        icon={['fas', 'check']}
                        className="font-size-xs"
                      />
                    </div>
                    <div className="text-second opacity-7">
                      All Integrations
                    </div>
                  </div>
                  <div className="divider opacity-8 my-1 mx-2" />
                  <div className="d-flex align-items-center py-2">
                    <div className="d-30 rounded-circle btn-icon bg-neutral-danger text-danger mr-3">
                      <FontAwesomeIcon
                        icon={['fas', 'times']}
                        className="font-size-xs"
                      />
                    </div>
                    <div className="text-danger">Premium support</div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="shadow-xxl mb-5 mb-lg-0">
                <CardHeader className="text-center d-block py-4 bg-secondary">
                  <div className="my-4 bg-success text-white d-inline-block shadow-xxl text-uppercase font-weight-bold d-40 w-auto px-4 font-size-xs rounded-pill">
                    Designer
                  </div>
                  <div className="font-weight-bold line-height-1 text-second text-uppercase display-2">
                    <small>$</small>199
                  </div>
                  <div className="font-size-md text-black-50">
                    monthly fee, for a single user
                  </div>
                  <div className="mt-4 pb-4">
                    <Button
                      className="rounded-sm font-weight-bold py-3 px-5"
                      color="second">
                      Purchase now
                    </Button>
                  </div>
                </CardHeader>
                <div className="divider" />
                <div className="px-5 py-4">
                  <div className="d-flex align-items-center py-2">
                    <div className="d-30 rounded-circle btn-icon bg-neutral-success text-success mr-3">
                      <FontAwesomeIcon
                        icon={['fas', 'check']}
                        className="font-size-xs"
                      />
                    </div>
                    <div className="text-second opacity-7">Unlimited Tasks</div>
                  </div>
                  <div className="divider opacity-8 my-1 mx-2" />
                  <div className="d-flex align-items-center py-2">
                    <div className="d-30 rounded-circle btn-icon bg-neutral-success text-success mr-3">
                      <FontAwesomeIcon
                        icon={['fas', 'check']}
                        className="font-size-xs"
                      />
                    </div>
                    <div className="text-second opacity-7">Unlimited Teams</div>
                  </div>
                  <div className="divider opacity-8 my-1 mx-2" />
                  <div className="d-flex align-items-center py-2">
                    <div className="d-30 rounded-circle btn-icon bg-neutral-success text-success mr-3">
                      <FontAwesomeIcon
                        icon={['fas', 'check']}
                        className="font-size-xs"
                      />
                    </div>
                    <div className="text-second opacity-7">
                      All Integrations
                    </div>
                  </div>
                  <div className="divider opacity-8 my-1 mx-2" />
                  <div className="d-flex align-items-center py-2">
                    <div className="d-30 rounded-circle btn-icon bg-neutral-danger text-danger mr-3">
                      <FontAwesomeIcon
                        icon={['fas', 'times']}
                        className="font-size-xs"
                      />
                    </div>
                    <div className="text-danger">Premium support</div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="shadow-xxl mb-5 mb-lg-0">
                <CardHeader className="text-center d-block py-4 bg-secondary">
                  <div className="my-4 bg-danger text-white d-inline-block shadow-xxl text-uppercase font-weight-bold d-40 w-auto px-4 font-size-xs rounded-pill">
                    Enterprise
                  </div>
                  <div className="font-weight-bold line-height-1 text-second text-uppercase display-2">
                    <small>$</small>599
                  </div>
                  <div className="font-size-md text-black-50">
                    monthly fee, for a single user
                  </div>
                  <div className="mt-4 pb-4">
                    <Button
                      className="rounded-sm font-weight-bold px-4"
                      outline
                      color="second">
                      Purchase now
                    </Button>
                  </div>
                </CardHeader>
                <div className="divider" />
                <div className="px-5 py-4">
                  <div className="d-flex align-items-center py-2">
                    <div className="d-30 rounded-circle btn-icon bg-neutral-success text-success mr-3">
                      <FontAwesomeIcon
                        icon={['fas', 'check']}
                        className="font-size-xs"
                      />
                    </div>
                    <div className="text-second opacity-7">Unlimited Tasks</div>
                  </div>
                  <div className="divider opacity-8 my-1 mx-2" />
                  <div className="d-flex align-items-center py-2">
                    <div className="d-30 rounded-circle btn-icon bg-neutral-success text-success mr-3">
                      <FontAwesomeIcon
                        icon={['fas', 'check']}
                        className="font-size-xs"
                      />
                    </div>
                    <div className="text-second opacity-7">Unlimited Teams</div>
                  </div>
                  <div className="divider opacity-8 my-1 mx-2" />
                  <div className="d-flex align-items-center py-2">
                    <div className="d-30 rounded-circle btn-icon bg-neutral-success text-success mr-3">
                      <FontAwesomeIcon
                        icon={['fas', 'check']}
                        className="font-size-xs"
                      />
                    </div>
                    <div className="text-second opacity-7">
                      All Integrations
                    </div>
                  </div>
                  <div className="divider opacity-8 my-1 mx-2" />
                  <div className="d-flex align-items-center py-2">
                    <div className="d-30 rounded-circle btn-icon bg-neutral-success text-success mr-3">
                      <FontAwesomeIcon
                        icon={['fas', 'check']}
                        className="font-size-xs"
                      />
                    </div>
                    <div className="text-second opacity-7">Premium support</div>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
