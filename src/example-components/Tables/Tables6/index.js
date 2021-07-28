import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Table,
  Card,
  CardHeader,
  UncontrolledTooltip,
  Button,
  Progress
} from 'reactstrap';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../../assets/images/avatars/avatar4.jpg';
import avatar5 from '../../../assets/images/avatars/avatar5.jpg';
import avatar6 from '../../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';
export default function LivePreviewExample() {
  return (
    <>
      <Card className="card-box mb-5">
        <CardHeader>
          <div className="card-header--title font-size-lg">
            Tasks management
          </div>
          <div className="card-header--actions">
            <Button
              size="sm"
              color="link"
              className="px-1"
              id="btnAddNewTooltip345">
              <FontAwesomeIcon
                icon={['fas', 'plus']}
                className="text-success font-size-lg"
              />
            </Button>
            <UncontrolledTooltip target="btnAddNewTooltip345">
              Add new
            </UncontrolledTooltip>
            <Button
              size="sm"
              color="link"
              className="px-1"
              id="btnCloseTooltip345">
              <FontAwesomeIcon
                icon={['fas', 'times']}
                className="text-danger font-size-lg"
              />
            </Button>
            <UncontrolledTooltip target="btnCloseTooltip345">
              Close
            </UncontrolledTooltip>
          </div>
        </CardHeader>
        <div className="table-responsive-md">
          <Table hover className="text-nowrap mb-0">
            <thead>
              <tr>
                <th className="text-left" style={{ width: 180 }}>
                  Project name
                </th>
                <th className="text-center">Due date</th>
                <th className="text-center">Status</th>
                <th className="text-center">Members</th>
                <th className="text-center"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-weight-bold">Calendar Application</td>
                <td className="text-center">14 Feb 2020</td>
                <td>
                  <Progress
                    className="progress-sm"
                    color="success"
                    value="100"
                  />
                  <div className="font-size-sm text-black-50 pt-1">
                    Completed
                  </div>
                </td>
                <td className="text-center">
                  <div className="avatar-wrapper-overlap d-flex justify-content-center">
                    <div className="avatar-icon-wrapper avatar-icon-sm">
                      <div className="avatar-icon">
                        <img alt="..." src={avatar1} />
                      </div>
                    </div>
                    <div className="avatar-icon-wrapper avatar-icon-sm">
                      <div className="avatar-icon">
                        <img alt="..." src={avatar3} />
                      </div>
                    </div>
                    <div className="avatar-icon-wrapper avatar-icon-sm">
                      <div className="avatar-icon">
                        <img alt="..." src={avatar2} />
                      </div>
                    </div>
                    <div className="avatar-icon-wrapper avatar-icon-sm">
                      <div className="avatar-icon">
                        <img alt="..." src={avatar6} />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-center">
                  <Button
                    size="sm"
                    color="link"
                    className="d-30 p-0 btn-icon btn-animated-icon">
                    <FontAwesomeIcon
                      icon={['fas', 'plus-circle']}
                      className="font-size-lg"
                    />
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="font-weight-bold">File Manager</td>
                <td className="text-center">16 Feb 2020</td>
                <td>
                  <Progress
                    value="55"
                    striped
                    animated
                    className="progress-sm"
                    color="danger"
                  />
                  <div className="font-size-sm text-black-50 pt-1">Overdue</div>
                </td>
                <td className="text-center">
                  <div className="avatar-wrapper-overlap d-flex justify-content-center">
                    <div className="avatar-icon-wrapper avatar-icon-sm">
                      <div className="avatar-icon">
                        <img alt="..." src={avatar1} />
                      </div>
                    </div>
                    <div className="avatar-icon-wrapper avatar-icon-sm">
                      <div className="avatar-icon">
                        <img alt="..." src={avatar6} />
                      </div>
                    </div>
                    <div className="avatar-icon-wrapper avatar-icon-sm">
                      <div className="avatar-icon">
                        <img alt="..." src={avatar5} />
                      </div>
                    </div>
                    <div className="avatar-icon-wrapper avatar-icon-sm">
                      <div className="avatar-icon">
                        <img alt="..." src={avatar4} />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-center">
                  <Button
                    size="sm"
                    color="link"
                    className="d-30 p-0 btn-icon btn-animated-icon">
                    <FontAwesomeIcon
                      icon={['fas', 'plus-circle']}
                      className="font-size-lg"
                    />
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="font-weight-bold">Tasks App</td>
                <td className="text-center">18 Feb 2020</td>
                <td>
                  <Progress
                    value="51"
                    className="progress-sm"
                    color="warning"
                  />
                  <div className="font-size-sm text-black-50 pt-1">Pending</div>
                </td>
                <td className="text-center">
                  <div className="avatar-wrapper-overlap d-flex justify-content-center">
                    <div className="avatar-icon-wrapper avatar-icon-sm">
                      <div className="avatar-icon">
                        <img alt="..." src={avatar4} />
                      </div>
                    </div>
                    <div className="avatar-icon-wrapper avatar-icon-sm">
                      <div className="avatar-icon">
                        <img alt="..." src={avatar3} />
                      </div>
                    </div>
                    <div className="avatar-icon-wrapper avatar-icon-sm">
                      <div className="avatar-icon">
                        <img alt="..." src={avatar2} />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-center">
                  <Button
                    size="sm"
                    color="link"
                    className="d-30 p-0 btn-icon btn-animated-icon">
                    <FontAwesomeIcon
                      icon={['fas', 'plus-circle']}
                      className="font-size-lg"
                    />
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="font-weight-bold">Tickets Management</td>
                <td className="text-center">22 Feb 2020</td>
                <td>
                  <Progress className="progress-sm" color="first" value="76" />
                  <div className="font-size-sm text-black-50 pt-1">
                    In progress
                  </div>
                </td>
                <td className="text-center">
                  <div className="avatar-wrapper-overlap d-flex justify-content-center">
                    <div className="avatar-icon-wrapper avatar-icon-sm">
                      <div className="avatar-icon">
                        <img alt="..." src={avatar1} />
                      </div>
                    </div>
                    <div className="avatar-icon-wrapper avatar-icon-sm">
                      <div className="avatar-icon">
                        <img alt="..." src={avatar7} />
                      </div>
                    </div>
                    <div className="avatar-icon-wrapper avatar-icon-sm">
                      <div className="avatar-icon">
                        <img alt="..." src={avatar1} />
                      </div>
                    </div>
                    <div className="avatar-icon-wrapper avatar-icon-sm">
                      <div className="avatar-icon">
                        <img alt="..." src={avatar2} />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-center">
                  <Button
                    size="sm"
                    color="link"
                    className="d-30 p-0 btn-icon btn-animated-icon">
                    <FontAwesomeIcon
                      icon={['fas', 'plus-circle']}
                      className="font-size-lg"
                    />
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="card-footer py-3 text-center">
          <Button size="sm" outline color="second">
            View more entries
          </Button>
        </div>
      </Card>
    </>
  );
}
