import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Table,
  CardBody,
  Card,
  CustomInput,
  Badge,
  Pagination,
  PaginationItem,
  PaginationLink,
  Button
} from 'reactstrap';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../../assets/images/avatars/avatar4.jpg';
export default function LivePreviewExample() {
  return (
    <>
      <Card className="card-box mb-5">
        <div className="card-header pr-2">
          <div className="card-header--title">
            <small>Tables</small>
            <b>Example table with custom content</b>
          </div>
          <div className="card-header--actions">
            <Button
              tag="a"
              href="#/"
              onClick={(e) => e.preventDefault()}
              size="sm"
              color="link"
              className="text-primary"
              id="RefreshTooltip1">
              <FontAwesomeIcon icon={['fas', 'cog']} spin />
            </Button>
          </div>
        </div>
        <CardBody className="p-0">
          <div className="table-responsive-md">
            <Table className="text-nowrap mb-0">
              <thead className="thead-light">
                <tr>
                  <th className="text-center" style={{ width: '5%' }}>
                    <CustomInput
                      type="checkbox"
                      id="CustomCheckbox3"
                      className="align-self-start"
                      label="&nbsp;"
                    />
                  </th>
                  <th>Company</th>
                  <th>Date</th>
                  <th className="text-center" style={{ width: '20%' }}>
                    Status
                  </th>
                  <th>Employee</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">
                    <CustomInput
                      type="checkbox"
                      id="CustomCheckbox4"
                      className="align-self-start"
                      label="&nbsp;"
                    />
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Button
                        color="facebook"
                        className="btn-pill d-40 btn-icon btn-animated-icon p-0 mr-3">
                        <span className="btn-wrapper--icon d-flex">
                          <FontAwesomeIcon
                            icon={['fab', 'facebook']}
                            className="font-size-lg"
                          />
                        </span>
                      </Button>
                      <div>
                        <b>Facebook</b>
                        <span className="text-black-50 d-block">
                          Social media company
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="align-box-row">16 September 2020</div>
                  </td>
                  <td className="text-center">
                    <Badge color="warning" className="h-auto py-0 px-3">
                      Pending
                    </Badge>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper mr-2">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar2} />
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
                    <div>
                      <Button
                        size="sm"
                        color="neutral-first"
                        className="d-30 btn-pill p-0 btn-icon">
                        <FontAwesomeIcon
                          icon={['fas', 'ellipsis-h']}
                          className="font-size-lg"
                        />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <CustomInput
                      type="checkbox"
                      id="CustomCheckbox5"
                      className="align-self-start"
                      label="&nbsp;"
                    />
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Button
                        color="github"
                        className="btn-pill d-40 btn-icon btn-animated-icon p-0 mr-3">
                        <span className="btn-wrapper--icon d-flex">
                          <FontAwesomeIcon
                            icon={['fab', 'github']}
                            className="font-size-lg"
                          />
                        </span>
                      </Button>
                      <div>
                        <b>Github</b>
                        <span className="text-black-50 d-block">
                          Recommended company
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="align-box-row text-danger">
                      <b>17 September 2020</b>
                      <Badge color="neutral-info" className="text-info ml-2">
                        Due
                      </Badge>
                    </div>
                  </td>
                  <td className="text-center">
                    <Badge color="success" className="h-auto py-0 px-3">
                      Completed
                    </Badge>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper mr-2">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar1} />
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
                    <div>
                      <Button
                        size="sm"
                        color="neutral-first"
                        className="d-30 btn-pill p-0 btn-icon">
                        <FontAwesomeIcon
                          icon={['fas', 'ellipsis-h']}
                          className="font-size-lg"
                        />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <CustomInput
                      type="checkbox"
                      id="CustomCheckbox1"
                      className="align-self-start"
                      label="&nbsp;"
                    />
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Button
                        color="instagram"
                        className="btn-pill d-40 btn-icon btn-animated-icon p-0 mr-3">
                        <span className="btn-wrapper--icon d-flex">
                          <FontAwesomeIcon
                            icon={['fab', 'instagram']}
                            className="font-size-lg"
                          />
                        </span>
                      </Button>
                      <div>
                        <b>Instagram</b>
                        <span className="text-black-50 d-block">
                          Sharing images since 2000
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="align-box-row">18 September 2020</div>
                  </td>
                  <td className="text-center">
                    <Badge color="danger" className="h-auto py-0 px-3">
                      Declined
                    </Badge>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper mr-2">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar3} />
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
                    <div>
                      <Button
                        size="sm"
                        color="neutral-first"
                        className="d-30 btn-pill p-0 btn-icon">
                        <FontAwesomeIcon
                          icon={['fas', 'ellipsis-h']}
                          className="font-size-lg"
                        />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <CustomInput
                      type="checkbox"
                      id="CustomCheckbox2"
                      className="align-self-start"
                      label="&nbsp;"
                    />
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Button
                        color="twitter"
                        className="btn-pill d-40 btn-icon btn-animated-icon p-0 mr-3">
                        <span className="btn-wrapper--icon d-flex">
                          <FontAwesomeIcon
                            icon={['fab', 'twitter']}
                            className="font-size-lg"
                          />
                        </span>
                      </Button>
                      <div>
                        <b>Twitter</b>
                        <span className="text-black-50 d-block">
                          140 characters at a time
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="align-box-row">19 September 2020</div>
                  </td>
                  <td className="text-center">
                    <Badge color="info" className="h-auto py-0 px-3">
                      Review
                    </Badge>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper mr-2">
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
                          Finnlay Haney
                        </a>
                        <span className="text-black-50 d-block">
                          Professional Ingineer
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <div>
                      <Button
                        size="sm"
                        color="neutral-first"
                        className="d-30 btn-pill p-0 btn-icon">
                        <FontAwesomeIcon
                          icon={['fas', 'ellipsis-h']}
                          className="font-size-lg"
                        />
                      </Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="divider" />
          <div className="divider" />
          <div className="p-3 d-flex justify-content-center">
            <Pagination className="pagination-first">
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
          </div>
        </CardBody>
      </Card>
    </>
  );
}
