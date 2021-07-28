import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Card,
  CardHeader,
  Badge,
  ListGroup,
  ListGroupItem,
  UncontrolledTooltip,
  Button,
  Progress
} from 'reactstrap';

import PerfectScrollbar from 'react-perfect-scrollbar';
import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';

import avatar5 from '../../../assets/images/avatars/avatar5.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <Card className="card-box mb-5">
        <CardHeader className="bg-light">
          <div className="card-header--title">
            <small className="d-block text-uppercase mt-1">Progress</small>
            <b>Users Analytics</b>
          </div>
          <div className="card-header--actions">
            <Badge pill color="dark">
              Pending
            </Badge>
          </div>
        </CardHeader>
        <div className="scroll-area shadow-overflow">
          <PerfectScrollbar options={{ wheelPropagation: false }}>
            <ListGroup flush>
              <ListGroupItem>
                <div className="align-box-row py-2">
                  <div className="mr-4">
                    <a
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="avatar-icon-wrapper avatar-icon-lg m-0"
                      id="ViewDetailsTooltip20">
                      <div className="dot-badge" />
                      <div className="avatar-icon">
                        <img alt="..." src={avatar7} />
                      </div>
                    </a>
                    <UncontrolledTooltip
                      target="ViewDetailsTooltip20"
                      placement="right">
                      View details
                    </UncontrolledTooltip>
                  </div>

                  <div className="flex-grow-1">
                    <Progress
                      className="progress-bar-rounded progress-animated-alt"
                      color="success"
                      value="61">
                      61%
                    </Progress>
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <small className="text-black-50 d-block text-uppercase">
                      Totals
                    </small>
                    <b className="font-size-lg text-success">
                      <small className="pr-1 text-black-50">$</small>
                      1,628
                    </b>
                  </div>
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div className="align-box-row py-2">
                  <div className="mr-4">
                    <a
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="avatar-icon-wrapper avatar-icon-lg m-0"
                      id="ViewDetailsTooltip8">
                      <div className="dot-badge" />
                      <div className="avatar-icon">
                        <img alt="..." src={avatar5} />
                      </div>
                    </a>
                    <UncontrolledTooltip
                      target="ViewDetailsTooltip8"
                      placement="right">
                      View details
                    </UncontrolledTooltip>
                  </div>

                  <div className="flex-grow-1">
                    <Progress
                      className="progress-animated-alt progress-bar-rounded"
                      color="info"
                      value="44">
                      44%
                    </Progress>
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <small className="text-black-50 d-block text-uppercase">
                      Totals
                    </small>
                    <b className="font-size-lg text-info">
                      <small className="text-black-50 pr-1">$</small>
                      7,389
                    </b>
                  </div>
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div className="align-box-row py-2">
                  <div className="mr-4">
                    <a
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="avatar-icon-wrapper avatar-icon-lg m-0"
                      id="ViewDetailsTooltip11">
                      <div className="dot-badge" />
                      <div className="avatar-icon">
                        <img alt="..." src={avatar1} />
                      </div>
                    </a>
                    <UncontrolledTooltip
                      target="ViewDetailsTooltip11"
                      placement="right">
                      View details
                    </UncontrolledTooltip>
                  </div>

                  <div className="flex-grow-1">
                    <Progress
                      className="progress-bar-rounded progress-animated-alt"
                      color="danger"
                      value="29">
                      29%
                    </Progress>
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <small className="text-black-50 d-block text-uppercase">
                      Totals
                    </small>
                    <b className="font-size-lg text-danger">
                      <small className="text-black-50 pr-1">$</small>
                      8,493
                    </b>
                  </div>
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div className="align-box-row py-2">
                  <div className="mr-4">
                    <a
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="avatar-icon-wrapper avatar-icon-lg m-0"
                      id="ViewDetailsTooltip27">
                      <div className="dot-badge" />
                      <div className="avatar-icon">
                        <img alt="..." src={avatar2} />
                      </div>
                    </a>
                    <UncontrolledTooltip
                      target="ViewDetailsTooltip27"
                      placement="right">
                      View details
                    </UncontrolledTooltip>
                  </div>

                  <div className="flex-grow-1">
                    <Progress
                      className="progress-bar-rounded progress-animated-alt"
                      color="warning"
                      value="38">
                      38%
                    </Progress>
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <small className="text-black-50 d-block text-uppercase">
                      Totals
                    </small>
                    <b className="font-size-lg text-warning">
                      <small className="text-black-50 pr-1">$</small>
                      2,594
                    </b>
                  </div>
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div className="align-box-row py-2">
                  <div className="mr-4">
                    <a
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="avatar-icon-wrapper avatar-icon-lg m-0"
                      id="ViewDetailsTooltip20">
                      <div className="dot-badge" />
                      <div className="avatar-icon">
                        <img alt="..." src={avatar7} />
                      </div>
                    </a>
                    <UncontrolledTooltip
                      target="ViewDetailsTooltip20"
                      placement="right">
                      View details
                    </UncontrolledTooltip>
                  </div>

                  <div className="flex-grow-1">
                    <Progress
                      className="progress-bar-rounded progress-animated-alt"
                      color="success"
                      value="61">
                      61%
                    </Progress>
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <small className="text-black-50 d-block text-uppercase">
                      Totals
                    </small>
                    <b className="font-size-lg text-success">
                      <small className="pr-1 text-black-50">$</small>
                      1,628
                    </b>
                  </div>
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div className="align-box-row py-2">
                  <div className="mr-4">
                    <a
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="avatar-icon-wrapper avatar-icon-lg m-0"
                      id="ViewDetailsTooltip8">
                      <div className="dot-badge" />
                      <div className="avatar-icon">
                        <img alt="..." src={avatar5} />
                      </div>
                    </a>
                    <UncontrolledTooltip
                      target="ViewDetailsTooltip8"
                      placement="right">
                      View details
                    </UncontrolledTooltip>
                  </div>

                  <div className="flex-grow-1">
                    <Progress
                      className="progress-animated-alt progress-bar-rounded"
                      color="info"
                      value="44">
                      44%
                    </Progress>
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <small className="text-black-50 d-block text-uppercase">
                      Totals
                    </small>
                    <b className="font-size-lg text-info">
                      <small className="text-black-50 pr-1">$</small>
                      7,389
                    </b>
                  </div>
                </div>
              </ListGroupItem>
            </ListGroup>
          </PerfectScrollbar>
        </div>
        <div className="card-footer p-3 bg-secondary text-center">
          <Button color="first">
            <span className="btn-wrapper--icon">
              <FontAwesomeIcon icon={['far', 'question-circle']} />
            </span>
            <span className="btn-wrapper--label">Generate reports</span>
          </Button>
        </div>
      </Card>
    </>
  );
}
