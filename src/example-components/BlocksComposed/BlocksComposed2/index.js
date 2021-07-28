import React, { useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Card,
  CardHeader,
  Badge,
  UncontrolledTooltip,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';
import { NavLink as NavLinkStrap } from 'reactstrap';
import Chart from 'react-apexcharts';
import PerfectScrollbar from 'react-perfect-scrollbar';
import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar6 from '../../../assets/images/avatars/avatar6.jpg';

import people3 from '../../../assets/images/stock-photos/people-3.jpg';
import people1 from '../../../assets/images/stock-photos/people-1.jpg';

export default function LivePreviewExample() {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const chartComposed2Options = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      },
      stacked: true
    },
    dataLabels: {
      enabled: true
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '65%'
      }
    },
    stroke: {
      show: false,
      width: 0,
      colors: ['transparent']
    },
    colors: ['#7a7b97', 'rgba(122, 123, 151, 0.15)'],
    fill: {
      opacity: 1
    },
    labels: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
      'Last week',
      'Last month',
      'Last year',
      'Last quarter'
    ],
    legend: {
      show: false
    }
  };
  const chartComposed2Data = [
    {
      name: 'Net Profit',
      data: [2.3, 3.1, 4.0, 3.8, 5.1, 3.6, 4.0, 3.8, 5.1, 3.6, 3.2]
    },
    {
      name: 'Net Loss',
      data: [2.1, 2.1, 3.0, 2.8, 4.0, 3.8, 5.1, 3.6, 4.1, 2.6, 1.2]
    }
  ];

  return (
    <>
      <Card className="card-box mb-5">
        <CardHeader className="border-0">
          <div className="card-header--title py-2 font-size-lg">
            Tasks for today
          </div>
          <div className="card-header--actions">
            <UncontrolledDropdown>
              <DropdownToggle
                color="neutral-first"
                size="sm"
                className="btn-transition-none">
                <span className="btn-wrapper--label">Actions</span>
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon
                    icon={['fas', 'chevron-down']}
                    className="opacity-8 font-size-xs"
                  />
                </span>
              </DropdownToggle>
              <DropdownMenu right className="dropdown-menu-xl p-2">
                <Nav className="nav-neutral-first nav-lg nav-pills nav-pills-rounded flex-column">
                  <NavItem>
                    <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                      <span>View all reports</span>
                    </NavLinkStrap>
                  </NavItem>
                  <NavItem>
                    <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                      <span>View active items</span>
                      <Badge className="ml-auto" color="second">
                        23
                      </Badge>
                    </NavLinkStrap>
                  </NavItem>
                  <li className="dropdown-divider" />
                  <NavItem>
                    <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                      <div className="nav-link-icon">
                        <FontAwesomeIcon icon={['fas', 'download']} />
                      </div>
                      <span>Download</span>
                    </NavLinkStrap>
                  </NavItem>
                  <NavItem>
                    <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                      <div className="nav-link-icon">
                        <FontAwesomeIcon icon={['far', 'file-excel']} />
                      </div>
                      <span>Export to CSV</span>
                    </NavLinkStrap>
                  </NavItem>
                </Nav>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        </CardHeader>
        <div className="text-center">
          <div className="bg-composed-wrapper bg-night-sky border-0">
            <div className="bg-composed-img-5 bg-composed-wrapper--image" />
            <div className="bg-composed-wrapper--content text-light px-2 py-4">
              <h4 className="font-size-xl font-weight-bold mb-2">
                Notifications
              </h4>
              <p className="opacity-8 mb-0">
                You have <b className="text-success">472</b> new messages
              </p>
            </div>
          </div>
        </div>
        <div className="divider" />
        <div className="tabs-animated tabs-animated-shadow tabs-bordered">
          <Nav tabs justified>
            <NavItem>
              <NavLinkStrap
                className={clsx({ active: activeTab === '1' })}
                onClick={() => {
                  toggle('1');
                }}>
                <span>Timeline</span>
              </NavLinkStrap>
            </NavItem>
            <NavItem>
              <NavLinkStrap
                className={clsx({ active: activeTab === '2' })}
                onClick={() => {
                  toggle('2');
                }}>
                <span>Tasks</span>
              </NavLinkStrap>
            </NavItem>
            <NavItem>
              <NavLinkStrap
                className={clsx({ active: activeTab === '3' })}
                onClick={() => {
                  toggle('3');
                }}>
                <span>Reports</span>
              </NavLinkStrap>
            </NavItem>
          </Nav>
        </div>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <div className="scroll-area shadow-overflow">
              <PerfectScrollbar>
                <div className="timeline-list timeline-list-offset timeline-list-offset-dot">
                  <div className="timeline-item">
                    <div className="timeline-item-offset">9:25</div>
                    <div className="timeline-item--content">
                      <div className="timeline-item--icon" />
                      <h4 className="timeline-item--label mb-2 font-weight-bold">
                        1991
                      </h4>
                      <p>
                        The World Wide Web goes live with its first web page.
                      </p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-item-offset">9:25</div>
                    <div className="timeline-item--content">
                      <div className="timeline-item--icon" />
                      <h4 className="timeline-item--label mb-2 font-weight-bold">
                        Java exam day
                      </h4>
                      <p>
                        Bill Clinton's presidential scandal makes it online.
                      </p>
                      <div className="avatar-wrapper-overlap mt-2 mb-1">
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
                        <div className="avatar-icon-wrapper avatar-icon-sm">
                          <div className="avatar-icon">
                            <img alt="..." src={avatar6} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-item-offset">9:25</div>
                    <div className="timeline-item--content">
                      <div className="timeline-item--icon" />
                      <h4 className="timeline-item--label mb-2 font-weight-bold">
                        Business investor meeting
                      </h4>
                      <p>
                        Mosaic, the first graphical browser, is introduced to
                        the average consumer.
                      </p>
                      <div className="mt-3">
                        <a href="#/" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img-fluid rounded mr-3 shadow-sm"
                            src={people1}
                            width="70"
                          />
                        </a>
                        <a href="#/" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img-fluid rounded shadow-sm"
                            src={people3}
                            width="70"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-item-offset">9:25</div>
                    <div className="timeline-item--content">
                      <div className="timeline-item--icon" />
                      <h4 className="timeline-item--label mb-2 font-weight-bold">
                        Learning round table gathering
                      </h4>
                      <p>First ever iPod launches.</p>
                      <div className="mt-2">
                        <Button size="sm" color="primary">
                          Submit Report
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-item-offset">9:25</div>
                    <div className="timeline-item--content">
                      <div className="timeline-item--icon" />
                      <h4 className="timeline-item--label mb-2 font-weight-bold">
                        2003
                      </h4>
                      <p>MySpace becomes the most popular social network.</p>
                    </div>
                  </div>
                </div>
              </PerfectScrollbar>
            </div>
          </TabPane>
          <TabPane tabId="2">
            <div className="text-center my-5">
              <div className="avatar-icon-wrapper rounded-circle m-0">
                <div className="d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-danger text-danger m-0 d-130">
                  <FontAwesomeIcon
                    icon={['fas', 'times']}
                    className="d-flex align-self-center display-3"
                  />
                </div>
              </div>
              <h6 className="font-weight-bold font-size-lg mb-1 mt-4 text-black">
                Incoming messages
              </h6>
              <p className="text-black-50 mb-0">
                You have pending actions to take care of.
              </p>
            </div>
          </TabPane>
          <TabPane tabId="3">
            <div className="text-center my-4">
              <div className="btn-group mx-auto" role="group">
                <Button active outline color="second">
                  Income
                </Button>
                <Button outline color="second">
                  Expenses
                </Button>
              </div>
            </div>

            <div className="text-center text-black font-size-xl pb-2 font-weight-bold">
              Total Sales
              <small className="d-block text-black-50">
                Total performance for selected period
              </small>
            </div>
            <div className="px-2 pb-3 pt-2">
              <Chart
                options={chartComposed2Options}
                series={chartComposed2Data}
                type="bar"
                height={210}
              />
            </div>
          </TabPane>
        </TabContent>
        <div className="text-center pt-3 pb-4">
          <Button
            color="primary"
            className="px-4 btn-gradient badge-wrapper bg-midnight-bloom">
            <Badge
              color="warning"
              className="badge-position badge-position--top-right badge-circle-inner"
              id="NewNotificationsTooltip1456">
              New notifications
            </Badge>
            <UncontrolledTooltip target="NewNotificationsTooltip1456">
              You have 472 new messages
            </UncontrolledTooltip>
            <span className="btn-wrapper--label">Learn more</span>
            <span className="btn-wrapper--icon">
              <FontAwesomeIcon icon={['fas', 'arrow-right']} />
            </span>
          </Button>
        </div>
      </Card>
    </>
  );
}
