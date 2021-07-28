import React from 'react';

import { Card, CardHeader, ListGroup, ListGroupItem, Button } from 'reactstrap';

import PerfectScrollbar from 'react-perfect-scrollbar';
import stock1 from '../../../assets/images/stock-photos/stock-1.jpg';
import stock2 from '../../../assets/images/stock-photos/stock-2.jpg';
import stock3 from '../../../assets/images/stock-photos/stock-3.jpg';
import stock4 from '../../../assets/images/stock-photos/stock-4.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <Card className="card-box mb-5">
        <CardHeader className="bg-white">
          <div className="card-header--title">
            <small className="d-block text-uppercase mt-1">Targets</small>
            <b>Monthly Stats</b>
          </div>
          <div className="card-header--actions">
            <Button
              active
              tag="a"
              href="#/"
              onClick={(e) => e.preventDefault()}
              size="sm"
              color="neutral-primary">
              See all
            </Button>
          </div>
        </CardHeader>
        <div className="scroll-area-lg shadow-overflow">
          <PerfectScrollbar options={{ wheelPropagation: false }}>
            <ListGroup flush>
              <ListGroupItem className="py-4">
                <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-center">
                    <div>
                      <Card className="card-transparent mb-3 mb-sm-0">
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="card-img-wrapper card-box-hover-rise rounded-sm">
                          <img
                            alt="..."
                            className="card-img-top rounded-sm"
                            src={stock1}
                            style={{ width: 140 }}
                          />
                        </a>
                      </Card>
                    </div>
                    <div className="pl-0 pl-sm-4">
                      <b className="font-weight-bold font-size-lg text-black">
                        Bamburgh React Admin Dashboard with Reactstrap PRO
                      </b>
                      <p className="text-black-50 mb-0">
                        Browse through the live previews to see just how
                        powerful this admin template really is!
                      </p>
                      <small className="text-black-50 pt-1 d-block">
                        Created on: <b className="text-first">23 Feb 2021</b>
                      </small>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="text-right pl-3">
                      <span className="font-weight-bold font-size-lg">
                        12,349
                      </span>
                      <span className="text-black-50 d-block">visits</span>
                    </div>
                  </div>
                </div>
              </ListGroupItem>
              <ListGroupItem className="py-4">
                <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-center">
                    <div>
                      <Card className="card-transparent mb-3 mb-sm-0">
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="card-img-wrapper card-box-hover-rise rounded-sm">
                          <img
                            alt="..."
                            className="card-img-top rounded-sm"
                            src={stock2}
                            style={{ width: 140 }}
                          />
                        </a>
                      </Card>
                    </div>
                    <div className="pl-0 pl-sm-4">
                      <b className="font-weight-bold font-size-lg text-black">
                        Bamburgh React Admin Dashboard with Reactstrap PRO
                      </b>
                      <p className="text-black-50 mb-0">
                        Browse through the live previews to see just how
                        powerful this admin template really is!
                      </p>
                      <small className="text-black-50 pt-1 d-block">
                        Created on: <b className="text-first">24 Feb 2021</b>
                      </small>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="text-right pr-3 pl-3">
                      <span className="font-weight-bold font-size-lg text-danger">
                        345
                      </span>
                      <span className="text-black-50 d-block">reports</span>
                    </div>
                  </div>
                </div>
              </ListGroupItem>
              <ListGroupItem className="py-4">
                <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-center">
                    <div>
                      <Card className="card-transparent mb-3 mb-sm-0">
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="card-img-wrapper card-box-hover-rise rounded-sm">
                          <img
                            alt="..."
                            className="card-img-top rounded-sm"
                            src={stock3}
                            style={{ width: 140 }}
                          />
                        </a>
                      </Card>
                    </div>
                    <div className="pl-0 pl-sm-4">
                      <b className="font-weight-bold font-size-lg text-black">
                        Bamburgh React Admin Dashboard with Reactstrap PRO
                      </b>
                      <p className="text-black-50 mb-0">
                        Browse through the live previews to see just how
                        powerful this admin template really is!
                      </p>
                      <small className="text-black-50 pt-1 d-block">
                        Created on: <b className="text-first">23 Feb 2021</b>
                      </small>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="text-right pl-3">
                      <span className="font-weight-bold font-size-lg">
                        12,349
                      </span>
                      <span className="text-black-50 d-block">visits</span>
                    </div>
                  </div>
                </div>
              </ListGroupItem>
              <ListGroupItem className="py-4">
                <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-center">
                    <div>
                      <Card className="card-transparent mb-3 mb-sm-0">
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="card-img-wrapper card-box-hover-rise rounded-sm">
                          <img
                            alt="..."
                            className="card-img-top rounded-sm"
                            src={stock4}
                            style={{ width: 140 }}
                          />
                        </a>
                      </Card>
                    </div>
                    <div className="pl-0 pl-sm-4">
                      <b className="font-weight-bold font-size-lg text-black">
                        Bamburgh React Admin Dashboard with Reactstrap PRO
                      </b>
                      <p className="text-black-50 mb-0">
                        Browse through the live previews to see just how
                        powerful this admin template really is!
                      </p>
                      <small className="text-black-50 pt-1 d-block">
                        Created on: <b className="text-first">24 Feb 2021</b>
                      </small>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="text-right pr-3 pl-3">
                      <span className="font-weight-bold font-size-lg text-danger">
                        345
                      </span>
                      <span className="text-black-50 d-block">reports</span>
                    </div>
                  </div>
                </div>
              </ListGroupItem>
            </ListGroup>
          </PerfectScrollbar>
        </div>
        <div className="card-footer p-3 border-0 d-flex justify-content-between">
          <Button size="sm" color="neutral-danger">
            <span>Delete</span>
          </Button>
          <Button size="sm" color="first">
            View details
          </Button>
        </div>
      </Card>
    </>
  );
}
