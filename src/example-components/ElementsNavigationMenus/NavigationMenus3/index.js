import React from 'react';

import { Row, Col, Card, Button } from 'reactstrap';

import { Settings, Grid, Users, Layers } from 'react-feather';

export default function LivePreviewExample() {
  return (
    <>
      <Card className="p-4 card-box">
        <Row>
          <Col xl="6">
            <div className="mb-5 mb-xl-0 d-flex align-items-center justify-content-center flex-wrap">
              <div className="w-50 p-2">
                <Button
                  color="primary"
                  className="btn-gradient bg-night-sky text-left px-4 py-3 w-100 rounded-lg shadow-none">
                  <div>
                    <Settings className="h1 d-block my-2 text-warning" />
                    <div className="font-weight-bold font-size-lg">Reports</div>
                    <div className="font-size-md mb-1 opacity-8">
                      Monthly Stats
                    </div>
                  </div>
                </Button>
              </div>
              <div className="w-50 p-2">
                <Button
                  color="primary"
                  className="btn-gradient bg-midnight-bloom text-left px-4 py-3 w-100 rounded-lg shadow-none">
                  <div>
                    <Grid className="h1 d-block my-2 text-success" />
                    <div className="font-weight-bold font-size-lg">
                      Statistics
                    </div>
                    <div className="font-size-md mb-1 opacity-8">
                      Customers stats
                    </div>
                  </div>
                </Button>
              </div>
              <div className="w-50 p-2">
                <Button
                  color="primary"
                  className="btn-gradient bg-vicious-stance text-left px-4 py-3 w-100 rounded-lg shadow-none">
                  <div>
                    <Users className="h1 d-block my-2 text-danger" />
                    <div className="font-weight-bold font-size-lg">
                      Projects
                    </div>
                    <div className="font-size-md mb-1 opacity-8">
                      Manage servers
                    </div>
                  </div>
                </Button>
              </div>
              <div className="w-50 p-2">
                <Button
                  color="primary"
                  className="btn-gradient bg-royal text-left px-4 py-3 w-100 rounded-lg shadow-none">
                  <div>
                    <Layers className="h1 d-block my-2 text-first" />
                    <div className="font-weight-bold font-size-lg">Tasks</div>
                    <div className="font-size-md mb-1 opacity-8">
                      Pending items
                    </div>
                  </div>
                </Button>
              </div>
            </div>
          </Col>
          <Col xl="6">
            <div className="d-flex align-items-center justify-content-center flex-wrap">
              <div className="w-50 p-2">
                <a
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="btn card card-box text-left d-flex justify-content-center p-3 w-100">
                  <div>
                    <Grid className="h1 d-block my-2 text-success" />
                    <div className="font-weight-bold">Projects</div>
                    <div className="font-size-md mb-1 opacity-8">
                      Newest tasks
                    </div>
                  </div>
                </a>
              </div>
              <div className="w-50 p-2">
                <a
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="btn card card-box text-left d-flex justify-content-center p-3 w-100">
                  <div>
                    <Users className="h1 d-block my-2 text-danger" />
                    <div className="font-weight-bold">Helpdesk</div>
                    <div className="font-size-md mb-1 opacity-8">
                      Tickets overview
                    </div>
                  </div>
                </a>
              </div>
              <div className="w-50 p-2">
                <a
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="btn card card-box text-left d-flex justify-content-center p-3 w-100">
                  <div>
                    <Settings className="h1 d-block my-2 text-warning" />
                    <div className="font-weight-bold">CRM UI</div>
                    <div className="font-size-md mb-1 opacity-8">
                      Daily operations
                    </div>
                  </div>
                </a>
              </div>
              <div className="w-50 p-2">
                <a
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="btn card card-box text-left d-flex justify-content-center p-3 w-100">
                  <div>
                    <Layers className="h1 d-block my-2 text-first" />
                    <div className="font-weight-bold">Customers</div>
                    <div className="font-size-md mb-1 opacity-8">
                      Manage data
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
}
