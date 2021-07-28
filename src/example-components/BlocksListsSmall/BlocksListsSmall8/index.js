import React, { useState } from 'react';

import clsx from 'clsx';

import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  TabContent,
  TabPane,
  Button
} from 'reactstrap';

import PerfectScrollbar from 'react-perfect-scrollbar';
import { ArrowDownRight, ArrowUpRight, ArrowLeft } from 'react-feather';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar6 from '../../../assets/images/avatars/avatar6.jpg';

import people1 from '../../../assets/images/stock-photos/stock-2.jpg';
import people3 from '../../../assets/images/stock-photos/stock-1.jpg';

export default function LivePreviewExample() {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      <Card className="shadow-xxl mb-5">
        <CardHeader className="d-flex align-items-center justify-content-between card-header-alt p-4">
          <div>
            <h6 className="font-weight-bold font-size-lg mb-1 text-black">
              Recent Activity
            </h6>
            <p className="text-black-50 mb-0">Your recent crypto activities</p>
          </div>
          <div className="btn-group btn-group-sm" role="group">
            <Button
              className={clsx({ active: activeTab === '1' })}
              onClick={() => {
                toggle('1');
              }}
              color="primary">
              Activity
            </Button>
            <Button
              className={clsx({ active: activeTab === '2' })}
              onClick={() => {
                toggle('2');
              }}
              color="primary">
              Trading
            </Button>
          </div>
        </CardHeader>
        <div className="divider" />
        <div className="divider" />
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <div className="pl-3">
              <div className="scroll-area shadow-overflow">
                <PerfectScrollbar>
                  <div className="timeline-list timeline-list-offset timeline-list-offset-dot py-3">
                    <div className="timeline-item">
                      <div className="timeline-item-offset">12 Feb</div>
                      <div className="timeline-item--content">
                        <div className="timeline-item--icon" />
                        <h4 className="timeline-item--label mb-2 font-weight-bold">
                          <div className="badge badge-success">sell/market</div>
                        </h4>
                        <p>
                          You sold <b>12 ETH</b> for <b>3478 USD</b>.
                        </p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-item-offset">11 Feb</div>
                      <div className="timeline-item--content">
                        <div className="timeline-item--icon" />
                        <h4 className="timeline-item--label mb-2 font-weight-bold">
                          Invite code sent
                        </h4>
                        <p>Your friends joined the platform.</p>
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
                      <div className="timeline-item-offset">9 Feb</div>
                      <div className="timeline-item--content">
                        <div className="timeline-item--icon" />
                        <h4 className="timeline-item--label mb-2 font-weight-bold">
                          Uploaded documents
                        </h4>
                        <p>
                          You uploaded the following documents onto the crypto
                          platform:
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
                      <div className="timeline-item-offset">9 Feb</div>
                      <div className="timeline-item--content">
                        <div className="timeline-item--icon" />
                        <h4 className="timeline-item--label mb-2 font-weight-bold">
                          Profile verification
                        </h4>
                        <p>You partially submitted the required documents.</p>
                        <div className="mt-2">
                          <Button size="sm" color="warning">
                            Submit remaining docs
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-item-offset">6 Feb</div>
                      <div className="timeline-item--content">
                        <div className="timeline-item--icon" />
                        <h4 className="timeline-item--label mb-2 font-weight-bold">
                          Joined bamburgh
                        </h4>
                        <p>Welcome to the platform. Enjoy your stay here!</p>
                      </div>
                    </div>
                  </div>
                </PerfectScrollbar>
              </div>
            </div>
            <div className="card-footer p-3 text-center">
              <Button size="sm" className="py-2 px-4" color="primary">
                <span className="btn-wrapper--label text-uppercase font-weight-bold">
                  View all activity
                </span>
              </Button>
            </div>
          </TabPane>
          <TabPane tabId="2">
            <div className="scroll-area shadow-overflow">
              <PerfectScrollbar>
                <ListGroup flush>
                  <ListGroupItem className="d-flex justify-content-between align-items-center py-3">
                    <div className="d-flex align-items-center mr-4">
                      <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill font-size-lg mr-3 bg-success">
                        <ArrowDownRight />
                      </div>
                      <div>
                        <div className="font-weight-bold">Received Bitcoin</div>
                        <span className="text-black opacity-5 d-block">
                          To <b>My Bitcoin Wallet</b>
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="text-right mr-3">
                        <div className="font-weight-bold font-size-lg">
                          0.234894 BTC
                        </div>
                        <div className="font-weight-bold text-black opacity-4">
                          $438
                        </div>
                      </div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem className="d-flex justify-content-between align-items-center py-3">
                    <div className="d-flex align-items-center mr-4">
                      <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill font-size-lg mr-3 bg-first">
                        <ArrowUpRight />
                      </div>
                      <div>
                        <div className="font-weight-bold">Sent Ethereum</div>
                        <span className="text-black opacity-5 d-block">
                          From <b>Ether Wallet</b>
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="text-right mr-3">
                        <div className="font-weight-bold font-size-lg">
                          1.3984 ETH
                        </div>
                        <div className="font-weight-bold text-black opacity-4">
                          $1,495 USD
                        </div>
                      </div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem className="d-flex justify-content-between align-items-center py-3">
                    <div className="d-flex align-items-center mr-4">
                      <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill font-size-lg mr-3 bg-danger">
                        <ArrowLeft />
                      </div>
                      <div>
                        <div className="font-weight-bold">
                          Withdraw to bank account
                        </div>
                        <span className="text-black opacity-5 d-block">
                          From <b>Total Balance</b>
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="text-right mr-3">
                        <div className="font-weight-bold text-danger font-size-lg">
                          -23,549 USD
                        </div>
                      </div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem className="py-4 text-center text-black-50">
                    You've reached the end of the trading list!
                  </ListGroupItem>
                </ListGroup>
              </PerfectScrollbar>
            </div>
            <div className="card-footer p-3 text-center">
              <Button size="sm" className="py-2 px-4" color="primary">
                <span className="btn-wrapper--label text-uppercase font-weight-bold">
                  View all transactions
                </span>
              </Button>
            </div>
          </TabPane>
        </TabContent>
      </Card>
    </>
  );
}
