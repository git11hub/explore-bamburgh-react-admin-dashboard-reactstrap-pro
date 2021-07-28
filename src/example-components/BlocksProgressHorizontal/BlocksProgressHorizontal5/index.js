import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Button,
  Progress
} from 'reactstrap';

import PerfectScrollbar from 'react-perfect-scrollbar';
export default function LivePreviewExample() {
  return (
    <>
      <Card className="card-box mb-5">
        <CardHeader>
          <div className="card-header--title">
            <b>Monthly targets</b>
            <small className="d-block text-capitalize mt-1">
              Card with progress bars list items.
            </small>
          </div>

          <div className="card-header--actions">
            <Button
              size="sm"
              color="link"
              className="btn-link-primary p-0 font-size-xl text-primary">
              <FontAwesomeIcon
                icon={['fas', 'ellipsis-h']}
                className="font-size-lg"
              />
            </Button>
          </div>
        </CardHeader>
        <div className="scroll-area shadow-overflow">
          <PerfectScrollbar options={{ wheelPropagation: false }}>
            <ListGroup flush>
              <ListGroupItem className="py-2">
                <div className="align-box-row py-1">
                  <div>
                    <div className="font-weight-bold">Orders</div>
                  </div>
                  <div className="ml-auto">
                    <div className="font-size-xl font-weight-bold text-success">
                      348
                    </div>
                  </div>
                </div>
                <Progress
                  className="progress-animated-alt"
                  color="success"
                  value="34">
                  34%
                </Progress>
                <div className="align-box-row progress-bar--label mt-1 text-muted">
                  <small className="text-dark">0</small>
                  <div className="ml-auto">100%</div>
                </div>
              </ListGroupItem>
              <ListGroupItem className="py-2">
                <div className="align-box-row py-1">
                  <div>
                    <div className="font-weight-bold">Sales</div>
                  </div>
                  <div className="ml-auto">
                    <div className="font-size-xl font-weight-bold text-danger">
                      <small>$</small>
                      2.3M
                    </div>
                  </div>
                </div>
                <Progress
                  className="progress-animated-alt"
                  color="danger"
                  value="39">
                  39%
                </Progress>
                <div className="align-box-row progress-bar--label mt-1 text-muted">
                  <small className="text-dark">0</small>
                  <div className="ml-auto">100%</div>
                </div>
              </ListGroupItem>
              <ListGroupItem className="py-2">
                <div className="align-box-row py-1">
                  <div>
                    <div className="font-weight-bold">Users</div>
                  </div>
                  <div className="ml-auto">
                    <div className="font-size-xl font-weight-bold text-info">
                      <small>#</small>
                      87
                    </div>
                  </div>
                </div>
                <Progress
                  className="progress-animated-alt"
                  color="info"
                  value="51">
                  51%
                </Progress>
                <div className="align-box-row progress-bar--label mt-1 text-muted">
                  <small className="text-dark">0</small>
                  <div className="ml-auto">100%</div>
                </div>
              </ListGroupItem>
              <ListGroupItem className="py-2">
                <div className="align-box-row py-1">
                  <div>
                    <div className="font-weight-bold">Orders</div>
                  </div>
                  <div className="ml-auto">
                    <div className="font-size-xl font-weight-bold text-success">
                      348
                    </div>
                  </div>
                </div>
                <Progress
                  className="progress-animated-alt"
                  color="success"
                  value="34">
                  34%
                </Progress>
                <div className="align-box-row progress-bar--label mt-1 text-muted">
                  <small className="text-dark">0</small>
                  <div className="ml-auto">100%</div>
                </div>
              </ListGroupItem>
              <ListGroupItem className="py-2">
                <div className="align-box-row py-1">
                  <div>
                    <div className="font-weight-bold">Sales</div>
                  </div>
                  <div className="ml-auto">
                    <div className="font-size-xl font-weight-bold text-danger">
                      <small>$</small>
                      2.3M
                    </div>
                  </div>
                </div>
                <Progress
                  className="progress-animated-alt"
                  color="danger"
                  value="39">
                  39%
                </Progress>
                <div className="align-box-row progress-bar--label mt-1 text-muted">
                  <small className="text-dark">0</small>
                  <div className="ml-auto">100%</div>
                </div>
              </ListGroupItem>
            </ListGroup>
          </PerfectScrollbar>
        </div>
        <div className="card-footer bg-secondary p-3 text-center">
          <Button color="second">
            <span className="btn-wrapper--icon">
              <FontAwesomeIcon
                icon={['far', 'question-circle']}
                className="font-size-lg"
              />
            </span>
            <span className="btn-wrapper--label">View details</span>
          </Button>
        </div>
      </Card>
    </>
  );
}
