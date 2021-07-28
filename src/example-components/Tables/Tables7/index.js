import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Table,
  Card,
  Badge,
  UncontrolledTooltip,
  Pagination,
  PaginationItem,
  PaginationLink,
  Button
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
        <div className="card-header py-3">
          <div className="card-header--title font-size-lg">Support board</div>
          <div className="card-header--actions">
            <Button size="sm" color="neutral-primary">
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon icon={['fas', 'plus-circle']} />
              </span>
              <span className="btn-wrapper--label">Add ticket</span>
            </Button>
          </div>
        </div>
        <div className="d-flex justify-content-between px-4 py-3">
          <div className="d-flex align-items-center">
            <span>Show</span>
            <select className="mx-1 form-control form-control-sm" id="" name="">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
            </select>
            <span>entries</span>
          </div>
          <div className="search-wrapper">
            <span className="icon-wrapper text-black">
              <FontAwesomeIcon icon={['fas', 'search']} />
            </span>
            <input
              className="form-control form-control-sm rounded-pill"
              placeholder="Search terms..."
              type="search"
            />
          </div>
        </div>
        <div className="divider" />
        <div className="table-responsive-md">
          <Table hover className="text-nowrap mb-0">
            <thead>
              <tr>
                <th className="bg-white text-left">ID</th>
                <th className="bg-white">Requester</th>
                <th className="bg-white text-left">Subject</th>
                <th className="bg-white text-center">Assignee</th>
                <th className="bg-white text-center">Priority</th>
                <th className="bg-white text-center">Status</th>
                <th className="bg-white text-center">Created date</th>
                <th className="bg-white text-center">Due date</th>
                <th className="bg-white text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-weight-bold">#453</td>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="avatar-icon-wrapper avatar-icon-sm mr-2">
                      <div className="avatar-icon">
                        <img alt="..." src={avatar1} />
                      </div>
                    </div>
                    <div>Shanelle Wynn</div>
                  </div>
                </td>
                <td>When, while the lovely valley teems</td>
                <td className="text-center">
                  <div
                    className="avatar-icon-wrapper avatar-icon-sm"
                    title="Lili Pemberton">
                    <div className="avatar-icon">
                      <img alt="..." src={avatar2} />
                    </div>
                  </div>
                </td>
                <td className="text-center">
                  <Badge color="bg-neutral-danger" className="text-danger">
                    High
                  </Badge>
                </td>
                <td className="text-center">
                  <Badge color="neutral-dark" className="text-dark">
                    Closed
                  </Badge>
                </td>
                <td className="text-center text-black-50">12/12/2020</td>
                <td className="text-center text-black-50">08/30/2021</td>
                <td className="text-center">
                  <Button
                    size="sm"
                    color="link"
                    className="d-30 p-0 btn-icon hover-scale-sm">
                    <FontAwesomeIcon
                      icon={['fas', 'ellipsis-h']}
                      className="font-size-lg"
                    />
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="font-weight-bold">#584</td>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="avatar-icon-wrapper avatar-icon-sm mr-2">
                      <div className="avatar-icon">
                        <img alt="..." src={avatar3} />
                      </div>
                    </div>
                    <div>Brody Dixon</div>
                  </div>
                </td>
                <td>I am so happy, my dear friend</td>
                <td className="text-center">
                  <div
                    className="avatar-icon-wrapper avatar-icon-sm"
                    id="ArvinTooltip3">
                    <div className="avatar-icon">
                      <img alt="..." src={avatar4} />
                    </div>
                  </div>
                  <UncontrolledTooltip target="ArvinTooltip3">
                    Arvin Weston
                  </UncontrolledTooltip>
                </td>
                <td className="text-center">
                  <Badge color="neutral-warning" className="text-warning">
                    Low
                  </Badge>
                </td>
                <td className="text-center">
                  <Badge color="neutral-success" className="text-success">
                    Open
                  </Badge>
                </td>
                <td className="text-center text-black-50">06/08/2022</td>
                <td className="text-center text-black-50">07/25/2023</td>
                <td className="text-center">
                  <Button
                    size="sm"
                    color="link"
                    className="d-30 p-0 btn-icon hover-scale-sm">
                    <FontAwesomeIcon
                      icon={['fas', 'ellipsis-h']}
                      className="font-size-lg"
                    />
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="font-weight-bold">#764</td>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="avatar-icon-wrapper avatar-icon-sm mr-2">
                      <div className="avatar-icon">
                        <img alt="..." src={avatar5} />
                      </div>
                    </div>
                    <div>Milton Ayala</div>
                  </div>
                </td>
                <td>His own image, and the breath</td>
                <td className="text-center">
                  <div
                    className="avatar-icon-wrapper avatar-icon-sm"
                    id="RosarioTooltip4">
                    <div className="avatar-icon">
                      <img alt="..." src={avatar6} />
                    </div>
                  </div>
                  <UncontrolledTooltip target="RosarioTooltip4">
                    Mali Rosario
                  </UncontrolledTooltip>
                </td>
                <td className="text-center">
                  <Badge color="neutral-info" className="text-info">
                    Medium
                  </Badge>
                </td>
                <td className="text-center">
                  <Badge color="neutral-dark" className="text-dark">
                    Closed
                  </Badge>
                </td>
                <td className="text-center text-black-50">12/12/2020</td>
                <td className="text-center text-black-50">08/30/2021</td>
                <td className="text-center">
                  <Button
                    size="sm"
                    color="link"
                    className="d-30 p-0 btn-icon hover-scale-sm">
                    <FontAwesomeIcon
                      icon={['fas', 'ellipsis-h']}
                      className="font-size-lg"
                    />
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="font-weight-bold">#453</td>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="avatar-icon-wrapper avatar-icon-sm mr-2">
                      <div className="avatar-icon">
                        <img alt="..." src={avatar1} />
                      </div>
                    </div>
                    <div>Kane Gentry</div>
                  </div>
                </td>
                <td>When I hear the buzz</td>
                <td className="text-center">
                  <div
                    className="avatar-icon-wrapper avatar-icon-sm"
                    title="Marion Devine">
                    <div className="avatar-icon">
                      <img alt="..." src={avatar7} />
                    </div>
                  </div>
                </td>
                <td className="text-center">
                  <Badge color="neutral-warning" className="text-warning">
                    Low
                  </Badge>
                </td>
                <td className="text-center">
                  <Badge color="neutral-success" className="text-success">
                    Open
                  </Badge>
                </td>
                <td className="text-center text-black-50">12/12/2020</td>
                <td className="text-center text-black-50">08/30/2021</td>
                <td className="text-center">
                  <Button
                    size="sm"
                    color="link"
                    className="d-30 p-0 btn-icon hover-scale-sm">
                    <FontAwesomeIcon
                      icon={['fas', 'ellipsis-h']}
                      className="font-size-lg"
                    />
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="card-footer py-3 d-flex justify-content-between">
          <Pagination className="pagination-second">
            <PaginationItem disabled>
              <PaginationLink
                first
                href="#/"
                onClick={(e) => e.preventDefault()}>
                <FontAwesomeIcon icon={['fas', 'angle-double-left']} />
              </PaginationLink>
            </PaginationItem>
            <PaginationItem disabled>
              <PaginationLink
                previous
                href="#/"
                onClick={(e) => e.preventDefault()}>
                <FontAwesomeIcon icon={['fas', 'chevron-left']} />
              </PaginationLink>
            </PaginationItem>
            <PaginationItem active>
              <PaginationLink href="#/" onClick={(e) => e.preventDefault()}>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#/" onClick={(e) => e.preventDefault()}>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#/" onClick={(e) => e.preventDefault()}>
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#/" onClick={(e) => e.preventDefault()}>
                4
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#/" onClick={(e) => e.preventDefault()}>
                5
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                next
                href="#/"
                onClick={(e) => e.preventDefault()}>
                <FontAwesomeIcon icon={['fas', 'chevron-right']} />
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                last
                href="#/"
                onClick={(e) => e.preventDefault()}>
                <FontAwesomeIcon icon={['fas', 'angle-double-right']} />
              </PaginationLink>
            </PaginationItem>
          </Pagination>
          <div className="d-flex align-items-center">
            <span>Show</span>
            <select className="mx-1 form-control form-control-sm" id="" name="">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
            </select>
            <span>entries</span>
          </div>
        </div>
      </Card>
    </>
  );
}
