import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, UncontrolledTooltip, Button } from 'reactstrap';

import PerfectScrollbar from 'react-perfect-scrollbar';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';

import people1 from '../../../assets/images/stock-photos/people-1.jpg';
import people2 from '../../../assets/images/stock-photos/people-2.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <Card className="card-box p-0">
        <div className="card-header">
          <div className="card-header--title">
            <small>Messenger</small>
            <b>Chatting with Dustin</b>
          </div>
          <div className="card-actions-pane">
            <Button
              id="UnlockAccountTooltip"
              color="neutral-danger"
              className="btn-icon btn-animated-icon btn-transition-none btn-pill d-40 p-0">
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon
                  icon={['fas', 'unlock-alt']}
                  className="font-size-xs"
                />
              </span>
            </Button>
            <UncontrolledTooltip
              target="UnlockAccountTooltip"
              popperClassName="tooltip-danger">
              Unlock Account
            </UncontrolledTooltip>
          </div>
        </div>
        <div className="shadow-overflow">
          <PerfectScrollbar
            className="scroll-area-sm"
            option={{ wheelPropagation: false }}>
            <div className="chat-wrapper p-3">
              <div className="chat-item p-2 mb-2">
                <div className="align-box-row">
                  <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                    <div className="avatar-icon rounded border-0">
                      <img src={avatar7} alt="..." />
                    </div>
                  </div>
                  <div>
                    <div className="chat-box bg-first text-white">
                      <p>Hello, John.</p>
                      <p>This is Kenny. How are you?</p>
                    </div>
                    <small className="mt-2 d-block text-black-50">
                      <FontAwesomeIcon
                        icon={['far', 'clock']}
                        className="mr-1 opacity-5"
                      />
                      11:01 AM | Yesterday
                    </small>
                  </div>
                </div>
              </div>
              <div className="chat-item chat-item-reverse p-2 mb-2">
                <div className="align-box-row flex-row-reverse">
                  <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                    <div className="avatar-icon rounded border-0">
                      <img src={avatar3} alt="..." />
                    </div>
                  </div>
                  <div>
                    <div className="chat-box bg-first text-white">
                      <p>Hey, Kate.</p>
                      <p>I'm attaching the pictures you requested below:</p>
                      <Card className="mt-3 mb-2 pt-2 pb-2 text-center">
                        <div>
                          <a href="#/" onClick={(e) => e.preventDefault()}>
                            <img
                              src={people1}
                              alt="..."
                              width="54"
                              className="img-fluid rounded m-1 shadow-sm"
                            />
                          </a>
                          <a href="#/" onClick={(e) => e.preventDefault()}>
                            <img
                              src={people2}
                              alt="..."
                              width="54"
                              className="img-fluid rounded m-1 shadow-sm"
                            />
                          </a>
                        </div>
                      </Card>
                    </div>
                    <small className="mt-2 d-block text-black-50">
                      <FontAwesomeIcon
                        icon={['far', 'clock']}
                        className="mr-1 opacity-5"
                      />
                      11:01 AM | Yesterday
                    </small>
                  </div>
                </div>
              </div>
              <div className="chat-item p-2 mb-2">
                <div className="align-box-row">
                  <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                    <div className="avatar-icon rounded border-0">
                      <img src={avatar7} alt="..." />
                    </div>
                  </div>
                  <div>
                    <div className="chat-box bg-first text-white">
                      <p>Thanks.</p>
                      <p>Really appreciate it!</p>
                    </div>
                    <small className="mt-2 d-block text-black-50">
                      <FontAwesomeIcon
                        icon={['far', 'clock']}
                        className="mr-1 opacity-5"
                      />
                      11:01 AM | Yesterday
                    </small>
                  </div>
                </div>
              </div>
              <div className="chat-item p-2 mb-2">
                <div className="align-box-row">
                  <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                    <div className="avatar-icon rounded border-0">
                      <img src={avatar7} alt="..." />
                    </div>
                  </div>
                  <div>
                    <div className="chat-box bg-first text-white">
                      <p>Bye for now, talk to you later.</p>
                    </div>
                    <small className="mt-2 d-block text-black-50">
                      <FontAwesomeIcon
                        icon={['far', 'clock']}
                        className="mr-1 opacity-5"
                      />
                      11:01 AM | Yesterday
                    </small>
                  </div>
                </div>
              </div>
              <div className="chat-item chat-item-reverse p-2 mb-2">
                <div className="align-box-row flex-row-reverse">
                  <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                    <div className="avatar-icon rounded border-0">
                      <img src={avatar3} alt="..." />
                    </div>
                  </div>
                  <div>
                    <div className="chat-box bg-first text-white">
                      <p>Almost forgot about your tasks.</p>
                      <p>
                        <b>Check the links below:</b>
                      </p>
                      <Card className="bg-premium-dark p-2 mt-3 mb-2">
                        <div className="text-center py-2">
                          <a
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            color="link"
                            className="m-1 p-0 bg-grow-early d-inline-block text-center text-white d-40 btn-icon btn-pill">
                            <FontAwesomeIcon
                              icon={['far', 'object-group']}
                              className="font-size-sm"
                            />
                          </a>
                          <a
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            color="link"
                            className="m-1 p-0 bg-ripe-malin d-inline-block text-center text-white d-40 btn-icon btn-pill">
                            <FontAwesomeIcon
                              icon={['far', 'lightbulb']}
                              className="font-size-sm"
                            />
                          </a>
                          <a
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            color="link"
                            className="m-1 p-0 bg-plum-plate d-inline-block text-center text-white d-40 btn-icon btn-pill">
                            <FontAwesomeIcon
                              icon={['far', 'keyboard']}
                              className="font-size-sm"
                            />
                          </a>
                        </div>
                      </Card>
                    </div>
                    <small className="mt-2 d-block text-black-50">
                      <FontAwesomeIcon
                        icon={['far', 'clock']}
                        className="mr-1 opacity-5"
                      />
                      11:03 AM | Yesterday
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </PerfectScrollbar>
        </div>
        <div className="card-footer py-3 d-flex justify-content-center">
          <Button size="sm" color="danger">
            <small className="font-weight-bold text-uppercase">
              View details
            </small>
          </Button>
        </div>
      </Card>
    </>
  );
}
