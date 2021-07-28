import React, { useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  CardBody,
  Card,
  CardHeader,
  Input,
  Badge,
  UncontrolledTooltip,
  Button
} from 'reactstrap';

import PerfectScrollbar from 'react-perfect-scrollbar';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

import people2 from '../../../assets/images/stock-photos/people-2.jpg';
import people1 from '../../../assets/images/stock-photos/people-1.jpg';

export default function LivePreviewExample() {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const [inputBg, setInputBg] = useState(false);
  const toggleInputBg = () => setInputBg(!inputBg);

  return (
    <>
      <Card className="card-box mb-5">
        <CardHeader>
          <div className="card-header--title">
            <small>Messenger</small>
            <b>Talking to Kate</b>
          </div>
          <div className="card-header--actions">
            <Button
              color="neutral-first"
              className="btn-pill p-0 d-40 btn-icon btn-animated-icon"
              id="SendMessageTooltip2">
              <span>
                <FontAwesomeIcon
                  icon={['fas', 'plus']}
                  className="font-size-sm"
                />
              </span>
            </Button>
            <UncontrolledTooltip target="SendMessageTooltip2">
              Send new message
            </UncontrolledTooltip>
          </div>
        </CardHeader>
        <CardBody>
          <div className="scroll-area-lg shadow-overflow">
            <PerfectScrollbar>
              <div className="chat-wrapper">
                <div className="chat-item p-2 mb-2">
                  <div className="align-box-row">
                    <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                      <div className="avatar-icon rounded border-0">
                        <img alt="..." src={avatar7} />
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
                        <img alt="..." src={avatar3} />
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
                                alt="..."
                                className="img-fluid rounded m-1 shadow-sm"
                                src={people1}
                                width="54"
                              />
                            </a>
                            <a href="#/" onClick={(e) => e.preventDefault()}>
                              <img
                                alt="..."
                                className="img-fluid rounded m-1 shadow-sm"
                                src={people2}
                                width="54"
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
                        <img alt="..." src={avatar7} />
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
                        <img alt="..." src={avatar7} />
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
                        <img alt="..." src={avatar3} />
                      </div>
                    </div>
                    <div>
                      <div className="chat-box bg-first text-white">
                        <p>Almost forgot about your tasks.</p>
                        <p>
                          <b>Check the links below:</b>
                        </p>
                        <Card className="bg-premium-dark p-1 mt-3 mb-2">
                          <div className="text-center py-2">
                            <Button
                              color="link"
                              className="p-0 btn-icon bg-ripe-malin d-inline-block text-center text-white font-size-xl d-40 rounded-circle border-0 m-2"
                              id="MenuExampleTooltip111">
                              <FontAwesomeIcon
                                icon={['far', 'gem']}
                                className="font-size-sm"
                              />
                            </Button>
                            <Button
                              color="link"
                              className="p-0 btn-icon bg-grow-early d-inline-block text-center text-white font-size-xl d-40 rounded-circle border-0 m-2"
                              id="MenuExampleTooltip118">
                              <FontAwesomeIcon
                                icon={['far', 'building']}
                                className="font-size-sm"
                              />
                            </Button>
                            <Button
                              color="link"
                              className="p-0 btn-icon bg-arielle-smile d-inline-block text-center text-white font-size-xl d-40 rounded-circle border-0 m-2"
                              id="MenuExampleTooltip125">
                              <FontAwesomeIcon
                                icon={['far', 'chart-bar']}
                                className="font-size-sm"
                              />
                            </Button>
                            <UncontrolledTooltip target="MenuExampleTooltip111">
                              Menu example
                            </UncontrolledTooltip>
                            <UncontrolledTooltip target="MenuExampleTooltip118">
                              Menu Example
                            </UncontrolledTooltip>
                            <UncontrolledTooltip target="MenuExampleTooltip125">
                              Menu Example
                            </UncontrolledTooltip>
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
        </CardBody>
        <div className="card-footer p-0">
          <div
            className={clsx(
              'd-block d-md-flex text-center text-md-left transition-base align-items-center justify-content-between py-3 px-4',
              { 'bg-secondary': !inputBg }
            )}>
            <div>
              <Button
                size="sm"
                color="neutral-dark"
                className={clsx('d-inline-flex mr-2 btn-pill px-3 py-1', {
                  active: activeTab === '1'
                })}
                onClick={() => {
                  toggle('1');
                }}>
                <span className="btn-wrapper--label font-size-xs text-uppercase">
                  Create Post
                </span>
              </Button>
              <Button
                size="sm"
                color="neutral-dark"
                className={clsx('d-inline-flex btn-pill px-3 py-1', {
                  active: activeTab === '3'
                })}
                onClick={() => {
                  toggle('3');
                }}>
                <span className="btn-wrapper--label font-size-xs text-uppercase">
                  Event
                </span>
              </Button>
            </div>
            <div className="text-black-50 pt-3 pt-md-0 font-size-sm">
              Posting as <b className="text-black">Emma Taylor</b>
            </div>
          </div>
          <div className="divider" />
          <div
            className={clsx(
              'd-flex align-items-center transition-base px-4 py-3',
              { 'bg-secondary': inputBg }
            )}>
            <div className="avatar-icon-wrapper avatar-initials avatar-icon-lg mr-3">
              <div className="avatar-icon text-white bg-second">H</div>
              <Badge
                color="success"
                className="badge-position badge-position--bottom-center badge-circle"
                title="Badge bottom center">
                Online
              </Badge>
            </div>
            <Input
              onFocus={toggleInputBg}
              onBlur={toggleInputBg}
              className={clsx('transition-base border-0 pl-2 font-size-lg', {
                'pl-4': inputBg
              })}
              bsSize="lg"
              placeholder="Write your message here..."
            />
          </div>
          <div className="divider" />
          <div className="d-flex align-items-center justify-content-between px-4 py-3">
            <div>
              <Button
                size="sm"
                color="neutral-warning"
                className="d-inline-flex mr-2 btn-transition-none btn-pill pb-0 pt-1">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['far', 'file-audio']} />
                </span>
                <span className="btn-wrapper--label font-size-xs font-weight-bold text-uppercase">
                  Audio
                </span>
              </Button>
              <Button
                size="sm"
                color="neutral-first"
                className="d-inline-flex mr-2 btn-transition-none btn-pill pb-0 pt-1">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['far', 'file-video']} />
                </span>
              </Button>
              <Button
                size="sm"
                color="neutral-danger"
                className="d-inline-flex mr-2 btn-transition-none btn-pill pb-0 pt-1">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['far', 'file-excel']} />
                </span>
                <span className="btn-wrapper--label font-size-xs font-weight-bold text-uppercase">
                  Doc
                </span>
              </Button>
            </div>
            <div>
              <Button
                className="d-inline-flex font-weight-bold font-size-sm text-uppercase"
                color="primary">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['far', 'envelope']} />
                </span>
                <span className="btn-wrapper--label font-size-xs font-weight-bold text-uppercase">
                  Send
                </span>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
