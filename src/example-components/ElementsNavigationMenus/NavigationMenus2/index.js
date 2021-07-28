import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Button } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col xl="5">
          <Card className="mb-5 mb-xl-0 card-box overflow-hidden">
            <div className="grid-menu grid-menu-2col">
              <Row className="no-gutters">
                <Col md="6">
                  <Button
                    outline
                    color="light"
                    className="border-0 w-100 btn-transition-none rounded-0 shadow-none py-4 px-1">
                    <FontAwesomeIcon
                      icon={['far', 'bell']}
                      className="h2 d-block mb-2 mx-auto mt-1 text-primary"
                    />
                    <div className="font-weight-bold text-black">Reports</div>
                    <div className="font-size-md mb-1 text-black-50">
                      Monthly Stats
                    </div>
                  </Button>
                </Col>
                <Col md="6">
                  <Button
                    outline
                    color="light"
                    className="border-0 w-100 btn-transition-none rounded-0 shadow-none py-4 px-1">
                    <FontAwesomeIcon
                      icon={['far', 'file-excel']}
                      className="h2 d-block mx-auto mb-2 mt-1 text-primary"
                    />
                    <div className="font-weight-bold text-black">
                      Statistics
                    </div>
                    <div className="font-size-md mb-1 text-black-50">
                      Customers stats
                    </div>
                  </Button>
                </Col>
                <Col md="6">
                  <Button
                    outline
                    color="light"
                    className="border-0 w-100 btn-transition-none rounded-0 shadow-none py-4 px-1">
                    <FontAwesomeIcon
                      icon={['far', 'eye']}
                      className="h2 d-block mb-2 mx-auto mt-1 text-primary"
                    />
                    <div className="font-weight-bold text-black">Projects</div>
                    <div className="font-size-md mb-1 text-black-50">
                      Manage servers
                    </div>
                  </Button>
                </Col>
                <Col md="6">
                  <Button
                    outline
                    color="light"
                    className="border-0 w-100 btn-transition-none rounded-0 shadow-none py-4 px-1">
                    <FontAwesomeIcon
                      icon={['far', 'chart-bar']}
                      className="h2 d-block mx-auto mb-2 mt-1 text-primary"
                    />
                    <div className="font-weight-bold text-black">Tasks</div>
                    <div className="font-size-md mb-1 text-black-50">
                      Pending items
                    </div>
                  </Button>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
        <Col xl="7">
          <Card>
            <Card className="card-box overflow-hidden">
              <div className="grid-menu grid-menu-3col">
                <Row className="no-gutters">
                  <Col md="4">
                    <Button
                      outline
                      color="secondary"
                      className="border-0 w-100 btn-transition-none rounded-0 shadow-none py-4 px-1">
                      <FontAwesomeIcon
                        icon={['far', 'comment-dots']}
                        className="h2 d-block mb-2 mx-auto mt-1 text-danger"
                      />
                      <div className="font-weight-bold text-black">
                        Profiles
                      </div>
                      <div className="font-size-md mb-1 text-black-50">
                        Client details
                      </div>
                    </Button>
                  </Col>
                  <Col md="4">
                    <Button
                      outline
                      color="secondary"
                      className="border-0 w-100 btn-transition-none rounded-0 shadow-none py-4 px-1">
                      <FontAwesomeIcon
                        icon={['far', 'question-circle']}
                        className="h2 d-block mx-auto mb-2 mt-1 text-primary"
                      />
                      <div className="font-weight-bold text-black">
                        Accounts
                      </div>
                      <div className="font-size-md mb-1 text-black-50">
                        Statistics
                      </div>
                    </Button>
                  </Col>
                  <Col md="4">
                    <Button
                      outline
                      color="secondary"
                      className="border-0 w-100 btn-transition-none rounded-0 shadow-none py-4 px-1">
                      <FontAwesomeIcon
                        icon={['far', 'eye']}
                        className="h2 d-block mb-2 mx-auto mt-1 text-success"
                      />
                      <div className="font-weight-bold text-black">Servers</div>
                      <div className="font-size-md mb-1 text-black-50">
                        Uptime status
                      </div>
                    </Button>
                  </Col>
                  <Col md="4">
                    <Button
                      outline
                      color="secondary"
                      className="border-0 w-100 btn-transition-none rounded-0 shadow-none py-4 px-1">
                      <FontAwesomeIcon
                        icon={['far', 'chart-bar']}
                        className="h2 d-block mx-auto mb-2 mt-1 text-warning"
                      />
                      <div className="font-weight-bold text-black">
                        Deliveries
                      </div>
                      <div className="font-size-md mb-1 text-black-50">
                        Status reports
                      </div>
                    </Button>
                  </Col>
                  <Col md="4">
                    <Button
                      outline
                      color="secondary"
                      className="border-0 w-100 btn-transition-none rounded-0 shadow-none py-4 px-1">
                      <FontAwesomeIcon
                        icon={['far', 'file-word']}
                        className="h2 d-block mx-auto mb-2 mt-1 text-first"
                      />
                      <div className="font-weight-bold text-black">
                        Car fleet
                      </div>
                      <div className="font-size-md mb-1 text-black-50">
                        View details
                      </div>
                    </Button>
                  </Col>
                  <Col md="4">
                    <Button
                      outline
                      color="secondary"
                      className="border-0 w-100 btn-transition-none rounded-0 shadow-none py-4 px-1">
                      <FontAwesomeIcon
                        icon={['far', 'building']}
                        className="h2 d-block mx-auto mb-2 mt-1 text-info"
                      />
                      <div className="font-weight-bold text-black">Income</div>
                      <div className="font-size-md mb-1 text-black-50">
                        Annual report
                      </div>
                    </Button>
                  </Col>
                </Row>
              </div>
            </Card>
          </Card>
        </Col>
      </Row>
    </>
  );
}
