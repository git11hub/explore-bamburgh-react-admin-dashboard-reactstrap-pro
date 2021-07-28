import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Button } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col xl="7">
          <Card className="mb-5 mb-xl-0">
            <div className="grid-menu grid-menu-3col">
              <Row className="no-gutters">
                <Col md="4" className="p-3">
                  <Button
                    outline
                    color="primary"
                    className="border-0 w-100 py-3">
                    <span className="font-size-xxl d-block">
                      <FontAwesomeIcon icon={['far', 'bell']} />
                    </span>
                    <span className="text-uppercase font-weight-bold font-size-xs">
                      Customers
                    </span>
                  </Button>
                </Col>
                <Col md="4" className="p-3">
                  <Button outline color="first" className="border-0 w-100 py-3">
                    <span className="font-size-xxl d-block">
                      <FontAwesomeIcon icon={['far', 'chart-bar']} />
                    </span>
                    <span className="text-uppercase font-weight-bold font-size-xs">
                      Orders
                    </span>
                  </Button>
                </Col>
                <Col md="4" className="p-3">
                  <Button
                    outline
                    color="warning"
                    className="border-0 w-100 py-3">
                    <span className="font-size-xxl d-block">
                      <FontAwesomeIcon icon={['far', 'lightbulb']} />
                    </span>
                    <span className="text-uppercase font-weight-bold font-size-xs">
                      Tickets
                    </span>
                  </Button>
                </Col>
                <Col md="4" className="p-3">
                  <Button
                    outline
                    color="danger"
                    className="border-0 w-100 py-3">
                    <span className="font-size-xxl d-block">
                      <FontAwesomeIcon icon={['far', 'user']} />
                    </span>
                    <span className="text-uppercase font-weight-bold font-size-xs">
                      Projects
                    </span>
                  </Button>
                </Col>
                <Col md="4" className="p-3">
                  <Button
                    outline
                    color="success"
                    className="border-0 w-100 py-3">
                    <span className="font-size-xxl d-block">
                      <FontAwesomeIcon icon={['far', 'object-group']} />
                    </span>
                    <span className="text-uppercase font-weight-bold font-size-xs">
                      Profiles
                    </span>
                  </Button>
                </Col>
                <Col md="4" className="p-3">
                  <Button outline color="info" className="border-0 w-100 py-3">
                    <span className="font-size-xxl d-block">
                      <FontAwesomeIcon icon={['far', 'building']} />
                    </span>
                    <span className="text-uppercase font-weight-bold font-size-xs">
                      Servers
                    </span>
                  </Button>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
        <Col xl="5">
          <Card>
            <div className="grid-menu grid-menu-2col">
              <Row className="no-gutters">
                <Col md="6" className="p-2">
                  <Button
                    outline
                    color="primary"
                    className="border-0 w-100 shadow-none py-3 btn-transition-none btn-animated-icon-sm">
                    <div className="mx-auto">
                      <span className="btn-wrapper--icon btn-icon mx-auto font-size-lg d-40 bg-light rounded-pill d-block text-primary mb-2">
                        <FontAwesomeIcon icon={['far', 'bell']} />
                      </span>
                    </div>
                    <span className="font-weight-bold">Deliveries</span>
                  </Button>
                </Col>
                <Col md="6" className="p-2">
                  <Button
                    outline
                    color="primary"
                    className="border-0 w-100 shadow-none py-3 btn-transition-none btn-animated-icon-sm">
                    <div className="mx-auto">
                      <span className="btn-wrapper--icon btn-icon mx-auto font-size-lg d-40 bg-light rounded-pill d-block text-primary mb-2">
                        <FontAwesomeIcon icon={['far', 'chart-bar']} />
                      </span>
                    </div>
                    <span className="font-weight-bold">Accounts</span>
                  </Button>
                </Col>
                <Col md="6" className="p-2">
                  <Button
                    outline
                    color="primary"
                    className="border-0 w-100 shadow-none py-3 btn-transition-none btn-animated-icon-sm">
                    <div className="mx-auto">
                      <span className="btn-wrapper--icon btn-icon mx-auto font-size-lg d-40 bg-light rounded-pill d-block text-primary mb-2">
                        <FontAwesomeIcon icon={['far', 'lightbulb']} />
                      </span>
                    </div>
                    <span className="font-weight-bold">Reports</span>
                  </Button>
                </Col>
                <Col md="6" className="p-2">
                  <Button
                    outline
                    color="primary"
                    className="border-0 w-100 shadow-none py-3 btn-transition-none btn-animated-icon-sm">
                    <div className="mx-auto">
                      <span className="btn-wrapper--icon btn-icon mx-auto font-size-lg d-40 bg-light rounded-pill d-block text-primary mb-2">
                        <FontAwesomeIcon icon={['far', 'user']} />
                      </span>
                    </div>
                    <span className="font-weight-bold">Projects</span>
                  </Button>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
