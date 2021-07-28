import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Table,
  CardBody,
  Card,
  CustomInput,
  Badge,
  UncontrolledTooltip,
  Pagination,
  PaginationItem,
  PaginationLink,
  Button
} from 'reactstrap';
import { NavLink as NavLinkStrap } from 'reactstrap';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';

const MENU_TYPE = 'SIMPLE';

const attributes = {
  className: 'nav-item'
};

const targets = [
  {
    name: 'Facebook',
    date: '16 August 2020',
    content: (
      <div className="d-flex align-items-center">
        <Button
          color="facebook"
          className="btn-pill d-40 p-0 mr-3"
          id="ViewFacebookTooltip6">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon
              icon={['fab', 'facebook']}
              className="font-size-lg"
            />
          </span>
        </Button>
        <UncontrolledTooltip target="ViewFacebookTooltip6">
          View Facebook Profile
        </UncontrolledTooltip>
        <div>
          <b>Facebook</b>
          <span className="text-black-50 d-block">Social media company</span>
        </div>
      </div>
    )
  },
  {
    name: 'Github',
    date: '22 September 2020',
    content: (
      <div className="d-flex align-items-center">
        <Button
          color="github"
          className="btn-pill d-40 p-0 mr-3"
          id="ViewDetailsTooltip31">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon
              icon={['fab', 'github']}
              className="font-size-lg"
            />
          </span>
        </Button>
        <UncontrolledTooltip target="ViewDetailsTooltip31">
          View Github Profile
        </UncontrolledTooltip>
        <div>
          <b>Github</b>
          <span className="text-black-50 d-block">Recommended company</span>
        </div>
      </div>
    )
  },
  {
    name: 'Instagram',
    date: '18 October 2020',
    content: (
      <div className="d-flex align-items-center">
        <Button
          color="instagram"
          className="btn-pill d-40 p-0 mr-3"
          id="ViewDetailsTooltip32">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon
              icon={['fab', 'instagram']}
              className="font-size-lg"
            />
          </span>
        </Button>
        <UncontrolledTooltip target="ViewDetailsTooltip32">
          View Instagram Profile
        </UncontrolledTooltip>
        <div>
          <b>Instagram</b>
          <span className="text-black-50 d-block">
            Sharing images since 2000
          </span>
        </div>
      </div>
    )
  }
];

function collect(props) {
  return { name: props.name };
}

export default function LivePreviewExample() {
  return (
    <>
      <Card className="card-box mb-5">
        <div className="card-header pr-2">
          <div className="card-header--title">
            <small>Tables</small>
            <b>Right click context menu in tables</b>
          </div>
          <div className="card-header--actions">
            <Button
              size="sm"
              color="link"
              className="btn-icon hover-scale-lg btn-animated-icon text-primary"
              id="RefreshTooltip1345">
              <FontAwesomeIcon icon={['fas', 'cog']} spin />
            </Button>
            <UncontrolledTooltip target="RefreshTooltip1345">
              Refresh
            </UncontrolledTooltip>
          </div>
        </div>
        <CardBody className="p-0">
          <div className="position-relative">
            <ContextMenu
              className="dropdown-menu nav nav-neutral-success nav-pills dropdown-menu-xl flex-column p-3"
              id={MENU_TYPE}>
              <MenuItem attributes={attributes}>
                <span className="font-weight-bold px-4 py-2 d-block text-uppercase font-size-sm text-black">
                  Generate reports
                </span>
              </MenuItem>
              <MenuItem attributes={attributes} data={{ item: 'item 1' }}>
                <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                  <div className="nav-link-icon">
                    <FontAwesomeIcon icon={['far', 'file-pdf']} />
                  </div>
                  <span>Export as PDF</span>
                </NavLinkStrap>
              </MenuItem>
              <MenuItem attributes={attributes} data={{ item: 'item 2' }}>
                <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                  <div className="nav-link-icon">
                    <FontAwesomeIcon icon={['far', 'file-excel']} />
                  </div>
                  <span>Export as Excel</span>
                </NavLinkStrap>
              </MenuItem>
              <MenuItem attributes={attributes} data={{ item: 'item 3' }}>
                <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                  <div className="nav-link-icon">
                    <FontAwesomeIcon icon={['fas', 'download']} />
                  </div>
                  <span>Download</span>
                </NavLinkStrap>
              </MenuItem>
            </ContextMenu>
          </div>
          <div className="table-responsive-md">
            <Table hover className="text-nowrap mb-0">
              <thead className="thead-light">
                <tr>
                  <th className="text-center" style={{ width: '5%' }}>
                    <CustomInput
                      type="checkbox"
                      id="CustomCheckboxTableTop"
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
                {targets.map((item, i) => (
                  <ContextMenuTrigger
                    renderTag="tr"
                    name={item.name}
                    id={MENU_TYPE}
                    holdToDisplay={1000}
                    key={i}
                    collect={collect}>
                    <td className="text-center">
                      <CustomInput
                        type="checkbox"
                        id={'CustomCheckboxTable' + i}
                        className="align-self-start"
                        label="&nbsp;"
                      />
                    </td>
                    <td>{item.content}</td>
                    <td>
                      <div className="align-box-row">{item.date}</div>
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
                      <Button
                        size="sm"
                        color="neutral-first"
                        className="d-30 btn-pill p-0 btn-icon btn-animated-icon">
                        <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                      </Button>
                    </td>
                  </ContextMenuTrigger>
                ))}
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
