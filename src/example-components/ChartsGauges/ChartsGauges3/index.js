import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Badge, Button } from 'reactstrap';

import GaugeChart from 'react-gauge-chart';
export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col xl="4" className="d-flex">
          <Card className="card-box mb-5 w-100 d-flex align-items-center">
            <div className="card-tr-actions">
              <Button color="link" className="btn-link-second p-0 text-muted">
                <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
              </Button>
            </div>
            <div className="d-flex flex-column flex-grow-1 justify-content-center w-100">
              <div className="card-header-alt d-flex justify-content-center px-4 pt-4 pb-2">
                <h6 className="font-weight-bold font-size-xl mb-2 text-black">
                  Storage Capacity
                </h6>
              </div>
              <div className="mx-auto">
                <GaugeChart
                  id="chartsGauges3A"
                  nrOfLevels={20}
                  colors={['#1bc943', '#f83245']}
                  arcWidth={0.4}
                  hideText
                  percent={0.77}
                />
              </div>
              <div className="px-4 pb-4 pt-2">
                <div className="d-flex text-uppercase justify-content-center text-black-50 font-size-xs font-weight-bold mb-4">
                  <div className="d-flex align-items-center">
                    <Badge color="success" className="badge-circle mx-2">
                      available
                    </Badge>
                    <span className="d-20 w-auto">Available</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <Badge color="danger" className="badge-circle mx-2">
                      total
                    </Badge>
                    <span className="d-20 w-auto">Total</span>
                  </div>
                </div>
                <Button
                  color="neutral-dark"
                  className="btn-block font-weight-bold text-uppercase font-size-sm hover-scale-sm">
                  Increase Storage
                </Button>
              </div>
            </div>
          </Card>
        </Col>
        <Col xl="4" className="d-flex">
          <Card className="card-box mb-5 w-100 d-flex align-items-center">
            <div className="d-flex flex-column flex-grow-1 justify-content-center w-100">
              <div className="card-header-alt d-flex justify-content-center px-4 pt-4 pb-2">
                <h6 className="font-weight-bold font-size-xl mb-2 text-black">
                  Lost Packages
                </h6>
              </div>
              <div className="mx-auto">
                <GaugeChart
                  id="chartsGauges3B"
                  nrOfLevels={20}
                  colors={['rgba(65,145,255,0.3)', '#4191ff']}
                  arcWidth={0.4}
                  hideText
                  percent={0.55}
                />
              </div>
              <p className="mb-3 text-black-50 text-center">
                These issues require immediate action !
              </p>
              <div className="px-4 pb-4 pt-2">
                <Button
                  color="neutral-dark"
                  className="btn-block font-weight-bold text-uppercase font-size-sm hover-scale-sm">
                  View Network Issues
                </Button>
              </div>
            </div>
          </Card>
        </Col>
        <Col xl="4" className="d-flex">
          <Card className="card-box mb-5 w-100 d-flex align-items-center">
            <div className="d-flex flex-column flex-grow-1 justify-content-center w-100">
              <div className="card-header-alt d-flex justify-content-center px-4 pt-4 pb-2">
                <h6 className="font-weight-bold font-size-xl mb-2 text-black">
                  Internet Speed
                </h6>
              </div>
              <div className="mx-auto">
                <GaugeChart
                  id="chartsGauges3C"
                  nrOfLevels={20}
                  colors={['#1bc943', '#f4772e', '#f83245']}
                  arcWidth={0.4}
                  hideText
                  percent={0.47}
                />
              </div>
              <div className="px-5 mt-2">
                <Row className="text-black-50 font-size-sm">
                  <Col md="4" className="d-flex justify-content-center">
                    <div>
                      <div className="d-flex p-1 align-items-center">
                        <Badge color="success" className="badge-circle mr-2">
                          fast
                        </Badge>
                        <span className="d-20 w-auto">fast</span>
                      </div>
                    </div>
                  </Col>
                  <Col md="4" className="d-flex justify-content-center">
                    <div>
                      <div className="d-flex p-1 align-items-center">
                        <Badge color="warning" className="badge-circle mr-2">
                          normal
                        </Badge>
                        <span className="d-20 w-auto">normal</span>
                      </div>
                    </div>
                  </Col>
                  <Col md="4" className="d-flex justify-content-center">
                    <div>
                      <div className="d-flex p-1 align-items-center">
                        <Badge color="danger" className="badge-circle mr-2">
                          slow
                        </Badge>
                        <span className="d-20 w-auto">slow</span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="p-4">
                <Button
                  color="neutral-dark"
                  className="btn-block font-weight-bold text-uppercase font-size-sm hover-scale-sm">
                  Increase capacity
                </Button>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
