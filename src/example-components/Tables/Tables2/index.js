import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Table,
  CardBody,
  Card,
  Badge,
  UncontrolledTooltip,
  Button,
  Progress
} from 'reactstrap';

import avatar4 from '../../../assets/images/avatars/avatar4.jpg';
import avatar5 from '../../../assets/images/avatars/avatar5.jpg';
import avatar6 from '../../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <Card className="card-box mb-5">
        <div className="card-header pr-2">
          <div className="card-header--title">Employees status</div>
          <div className="card-header--actions">
            <Button size="sm" color="neutral-primary" id="RefreshTooltip17624">
              <FontAwesomeIcon icon={['fas', 'cog']} spin />
            </Button>
            <UncontrolledTooltip target="RefreshTooltip17624">
              Refresh
            </UncontrolledTooltip>
          </div>
        </div>
        <CardBody>
          <div className="table-responsive-md">
            <Table hover borderless className="text-nowrap mb-0">
              <thead>
                <tr>
                  <th>#</th>
                  <th className="text-left">Name</th>
                  <th className="text-center">Status</th>
                  <th className="text-center">Progress</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>12</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper mr-3">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar7} />
                        </div>
                      </div>
                      <div>
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Shanelle Wynn
                        </a>
                        <span className="text-black-50 d-block">
                          UI Engineer, Apple Inc.
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <Badge
                      color="neutral-warning"
                      className="text-warning px-4">
                      Pending
                    </Badge>
                  </td>
                  <td>
                    <Progress
                      value="55"
                      className="progress-bar-rounded"
                      color="info">
                      55%
                    </Progress>
                  </td>
                  <td className="text-center">
                    <Button
                      size="sm"
                      color="neutral-dark"
                      className="hover-scale-sm d-40 p-0 btn-icon">
                      <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper mr-3">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar4} />
                        </div>
                      </div>
                      <div>
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Shanelle Wynn
                        </a>
                        <span className="text-black-50 d-block">
                          UI Engineer, Apple Inc.
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <Badge
                      color="neutral-warning"
                      className="text-warning px-4">
                      Pending
                    </Badge>
                  </td>
                  <td>
                    <Progress
                      value="55"
                      className="progress-bar-rounded"
                      color="info">
                      55%
                    </Progress>
                  </td>
                  <td className="text-center">
                    <Button
                      size="sm"
                      color="neutral-dark"
                      className="hover-scale-sm d-40 p-0 btn-icon">
                      <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper mr-3">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar5} />
                        </div>
                      </div>
                      <div>
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Regan Norris
                        </a>
                        <span className="text-black-50 d-block">
                          Senior Project Manager
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <Badge color="neutral-danger" className="text-danger px-4">
                      Failed
                    </Badge>
                  </td>
                  <td>
                    <Progress
                      value="67"
                      color="danger"
                      className="progress-bar-rounded">
                      {' '}
                      67%
                    </Progress>
                  </td>
                  <td className="text-center">
                    <Button
                      size="sm"
                      color="neutral-dark"
                      className="hover-scale-sm d-40 p-0 btn-icon">
                      <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>33</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper mr-3">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar6} />
                        </div>
                      </div>
                      <div>
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Beck Simpson
                        </a>
                        <span className="text-black-50 d-block">
                          Frontend Developer
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <Badge
                      color="neutral-success"
                      className="text-success px-4">
                      Completed
                    </Badge>
                  </td>
                  <td>
                    <Progress
                      value="39"
                      color="dark"
                      className="progress-bar-rounded">
                      {' '}
                      39%
                    </Progress>
                  </td>
                  <td className="text-center">
                    <Button
                      size="sm"
                      color="neutral-dark"
                      className="hover-scale-sm d-40 p-0 btn-icon">
                      <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </CardBody>
        <div className="card-footer d-flex justify-content-between">
          <Button outline color="danger" size="sm">
            Delete
          </Button>
          <div>
            <Button size="sm" color="primary">
              Add new entry
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
}
