import React, { useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row,
  Col,
  Card,
  CardHeader,
  Container,
  Badge,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  Pagination,
  PaginationItem,
  PaginationLink,
  Button,
  Progress,
  Alert
} from 'reactstrap';
import { NavLink as NavLinkStrap } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import GaugeChart from 'react-gauge-chart';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useDropzone } from 'react-dropzone';
import { useEffect } from 'react';

import logo2 from '../../../assets/images/stock-logos/google-icon.svg';

import { Bell, FileText, Folder, Upload, Check, X } from 'react-feather';

import stock1 from '../../../assets/images/stock-photos/stock-1.jpg';
import stock2 from '../../../assets/images/stock-photos/stock-2.jpg';

import stock4 from '../../../assets/images/stock-photos/stock-4.jpg';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar6 from '../../../assets/images/avatars/avatar6.jpg';

import people1 from '../../../assets/images/stock-photos/people-1.jpg';
import people3 from '../../../assets/images/stock-photos/people-3.jpg';
import avatar5 from '../../../assets/images/avatars/avatar5.jpg';

export default function LivePreviewExample() {
  const [isSidebarMenuOpen, setIsSidebarMenuOpen] = useState(false);
  const toggleSidebarMenu = () => setIsSidebarMenuOpen(!isSidebarMenuOpen);

  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const [files, setFiles] = useState([]);
  const {
    isDragActive,
    isDragAccept,
    isDragReject,
    getRootProps,
    getInputProps
  } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    }
  });

  const thumbs = files.map((file) => (
    <Col md="3" className="p-2" key={file.name}>
      <div className="p-2 bg-white shadow-xxl border-dark card-box d-flex overflow-hidden rounded-sm">
        <img
          className="img-fluid img-fit-container rounded-sm"
          src={file.preview}
          alt="..."
        />
      </div>
    </Col>
  ));

  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <>
      <div className="app-inner-content-layout app-inner-content-layout-fixed">
        <div className="btn-md-pane d-lg-none px-4 order-0">
          <Button
            onClick={toggleSidebarMenu}
            size="sm"
            color="primary"
            className="p-0 btn-icon d-40">
            <FontAwesomeIcon icon={['fas', 'ellipsis-v']} />
          </Button>
        </div>
        <div
          className={clsx(
            'app-inner-content-layout--sidebar bg-white app-inner-content-layout--sidebar__lg order-1',
            { 'layout-sidebar-open': isSidebarMenuOpen }
          )}>
          <PerfectScrollbar>
            <div className="text-center pt-4 pb-3">
              <div className="bg-second d-110 rounded-lg mx-auto shadow-xxl d-flex align-items-center justify-content-center">
                <img
                  alt="..."
                  className="img-fluid mt-2 mx-auto"
                  style={{ height: '70px' }}
                  src={logo2}
                />
              </div>

              <div className="pt-3 mx-auto font-size-xl">
                <Button
                  color="link"
                  className="text-warning d-30 btn-icon p-0 border-0 hover-scale-lg"
                  href="#/"
                  onClick={(e) => e.preventDefault()}>
                  <FontAwesomeIcon icon={['fas', 'star']} />
                </Button>
                <Button
                  color="link"
                  className="text-warning d-30 btn-icon p-0 border-0 hover-scale-lg"
                  href="#/"
                  onClick={(e) => e.preventDefault()}>
                  <FontAwesomeIcon icon={['fas', 'star']} />
                </Button>
                <Button
                  color="link"
                  className="text-warning d-30 btn-icon p-0 border-0 hover-scale-lg"
                  href="#/"
                  onClick={(e) => e.preventDefault()}>
                  <FontAwesomeIcon icon={['fas', 'star']} />
                </Button>
                <Button
                  color="link"
                  className="text-muted d-30 btn-icon p-0 border-0 hover-scale-lg opacity-6"
                  href="#/"
                  onClick={(e) => e.preventDefault()}>
                  <FontAwesomeIcon icon={['fas', 'star']} />
                </Button>
                <Button
                  color="link"
                  className="text-muted d-30 btn-icon p-0 border-0 hover-scale-lg opacity-6"
                  href="#/"
                  onClick={(e) => e.preventDefault()}>
                  <FontAwesomeIcon icon={['fas', 'star']} />
                </Button>
              </div>

              <p className="font-size-lg text-dark px-3 my-4">
                Browse through the live previews to see just how powerful this
                admin template really is!
              </p>

              <Nav
                pills
                className="nav-neutral-first nav-lg nav-alt flex-column pr-3">
                <NavItem>
                  <NavLinkStrap
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="br-tl br-bl pl-4 pr-3 rounded-pill active">
                    <span>All Files</span>
                    <div className="ml-auto">
                      <FontAwesomeIcon
                        icon={['fas', 'chevron-right']}
                        className="font-size-xs opacity-3"
                      />
                    </div>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="br-tl br-bl pl-4 pr-3 rounded-pill">
                    <span>Recent files</span>
                    <div className="ml-auto">
                      <FontAwesomeIcon
                        icon={['fas', 'chevron-right']}
                        className="font-size-xs opacity-3"
                      />
                    </div>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="br-tl br-bl pl-4 pr-3 rounded-pill">
                    <span>Deleted files</span>
                    <div className="ml-auto">
                      <FontAwesomeIcon
                        icon={['fas', 'chevron-right']}
                        className="font-size-xs opacity-3"
                      />
                    </div>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="br-tl br-bl pl-4 pr-3 rounded-pill">
                    <span>Images</span>
                    <div className="ml-auto">
                      <Badge color="dark" className="mr-3">
                        453
                      </Badge>
                      <FontAwesomeIcon
                        icon={['fas', 'chevron-right']}
                        className="font-size-xs opacity-3"
                      />
                    </div>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="br-tl br-bl pl-4 pr-3 rounded-pill">
                    <span>Documents</span>
                    <div className="ml-auto">
                      <Badge color="dark" className="mr-3">
                        654
                      </Badge>
                      <FontAwesomeIcon
                        icon={['fas', 'chevron-right']}
                        className="font-size-xs opacity-3"
                      />
                    </div>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="br-tl br-bl pl-4 pr-3 rounded-pill">
                    <span>Videos</span>
                    <div className="ml-auto">
                      <Badge color="dark" className="mr-3">
                        237
                      </Badge>
                      <FontAwesomeIcon
                        icon={['fas', 'chevron-right']}
                        className="font-size-xs opacity-3"
                      />
                    </div>
                  </NavLinkStrap>
                </NavItem>
              </Nav>
            </div>
            <div className="divider mb-3" />
            <div className="timeline-list mb-3 timeline-list-offset timeline-list-offset-dot">
              <div className="timeline-item">
                <div className="timeline-item-offset">9:25</div>
                <div className="timeline-item--content">
                  <div className="timeline-item--icon" />
                  <h4 className="timeline-item--label mb-2 font-weight-bold">
                    1991
                  </h4>
                  <p>The World Wide Web goes live with its first web page.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-item-offset">9:25</div>
                <div className="timeline-item--content">
                  <div className="timeline-item--icon" />
                  <h4 className="timeline-item--label mb-2 font-weight-bold">
                    Java exam day
                  </h4>
                  <p>Bill Clinton's presidential scandal makes it online.</p>
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
                    Mosaic, the first graphical browser, is introduced to the
                    average consumer.
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

            <div className="divider mb-3" />

            <div className="w-100 p-3 d-flex align-items-center">
              <div className="d-flex flex-column flex-grow-1 justify-content-center w-100">
                <div className="card-header-alt d-flex justify-content-between align-items-center">
                  <h6 className="font-weight-bold font-size-lg mb-0 text-black">
                    Monthly Limits
                  </h6>
                  <div className="text-success font-weight-bold">274.54 GB</div>
                </div>
                <div className="mx-auto pt-2">
                  <CircularProgressbar
                    circleRatio={0.75}
                    styles={buildStyles({ rotation: 1 / 2 + 1 / 8 })}
                    value={84.32}
                    text={84.32 + '%'}
                    strokeWidth={5}
                    className="m-3 circular-progress-xxl circular-progress-success"
                  />{' '}
                </div>
                <div className="divider" />
                <div className="divider mb-1" />
                <div className="pt-4">
                  <div className="text-success d-flex align-items-center">
                    <div className="d-30 rounded-sm btn-icon bg-neutral-success mr-2">
                      <FontAwesomeIcon icon={['fas', 'angle-up']} />
                    </div>
                    <span className="pt-1 font-weight-bold font-size-sm">
                      +34.54%
                    </span>
                  </div>
                  <div className="text-black-50 pt-3">
                    You had increased storage consumption over the last 30 days.
                  </div>
                </div>
              </div>
            </div>
          </PerfectScrollbar>
        </div>
        <div className="app-inner-content-layout--main order-3 order-lg-2 card-box bg-secondary">
          <PerfectScrollbar>
            <CardHeader className="rounded-0 bg-white px-5 py-4 border-bottom">
              <Container className="d-block text-center py-3 text-sm-left d-sm-flex align-items-center justify-content-between">
                <div className="font-weight-bold font-size-xxl mb-3 mb-sm-0">
                  <div>File Manager</div>
                  <p className="text-black-50 font-weight-normal font-size-lg mb-0">
                    Use this page to upload your favourite files for safe
                    storage.
                  </p>
                </div>
                <div>
                  <Button
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                    color="primary">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fas', 'plus']} />
                    </span>
                    <span className="btn-wrapper--label">Upload</span>
                  </Button>
                </div>
              </Container>
            </CardHeader>
            <div className="pt-5 pb-4">
              <Container>
                <Row>
                  <Col md="8">
                    <Card className="rounded-lg shadow-xxl">
                      <div className="card-header-alt p-4 text-center">
                        <h6 className="font-weight-bold font-size-lg mb-1 text-black">
                          Storage Usage
                        </h6>
                        <p className="text-black-50 mb-0">
                          See how content is split between content types
                        </p>
                      </div>
                      <div className="divider" />
                      <div className="p-5">
                        <div className="mb-4">
                          <div className="line-height-1">
                            <span className="font-size-lg font-weight-bold pr-3">
                              54,126
                            </span>
                            <span className="text-black-50">Audio Files</span>
                          </div>
                          <div className="d-flex justify-content-center align-items-center">
                            <div className="flex-grow-1">
                              <Progress
                                value="50"
                                className="progress-bar-rounded progress-xs"
                                color="success"
                              />
                            </div>
                            <div className="text-success font-weight-bold pl-3">
                              50%
                            </div>
                          </div>
                        </div>
                        <div className="mb-4">
                          <div className="line-height-1">
                            <span className="font-size-lg font-weight-bold pr-3">
                              12,345
                            </span>
                            <span className="text-black-50">Video Files</span>
                          </div>
                          <div className="d-flex justify-content-center align-items-center">
                            <div className="flex-grow-1">
                              <Progress
                                value="76"
                                color="info"
                                className="progress-xs progress-bar-rounded"
                              />
                            </div>
                            <div className="text-info font-weight-bold pl-3">
                              76%
                            </div>
                          </div>
                        </div>
                        <div className="mb-4">
                          <div className="line-height-1">
                            <span className="font-size-lg font-weight-bold pr-3">
                              34,985
                            </span>
                            <span className="text-black-50">Documents</span>
                          </div>
                          <div className="d-flex justify-content-center align-items-center">
                            <div className="flex-grow-1">
                              <Progress
                                value="87"
                                color="first"
                                className="progress-bar-rounded progress-xs"
                              />
                            </div>
                            <div className="text-first font-weight-bold pl-3">
                              87%
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="line-height-1">
                            <span className="font-size-lg font-weight-bold pr-3">
                              76,381
                            </span>
                            <span className="text-black-50">Applications</span>
                          </div>
                          <div className="d-flex justify-content-center align-items-center">
                            <div className="flex-grow-1">
                              <Progress
                                value="59"
                                color="danger"
                                className="progress-bar-rounded progress-xs"
                              />
                            </div>
                            <div className="text-danger font-weight-bold pl-3">
                              59%
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="divider" />
                      <div className="text-center p-4">
                        <Button color="first">
                          <span className="btn-wrapper--label">
                            View complete report
                          </span>
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                          </span>
                        </Button>
                      </div>
                    </Card>
                  </Col>
                  <Col md="4" className="d-flex">
                    <Card className="bg-second shadow-xxl text-white d-flex w-100 card-box-hover-rise justify-content-between card-box-hover rounded-lg p-3 p-xl-4 d-block">
                      <div>
                        <h5 className="font-weight-bold font-size-xxl">
                          Storage Capacity
                        </h5>
                        <div className="d-flex py-4 align-items-center">
                          <div className="d-80 rounded-lg border-0 card-icon-wrapper bg-success btn-icon text-center shadow-success mr-3">
                            <div className="d-70">
                              <Bell className="w-50 h-50" />
                            </div>
                          </div>
                          <div className="display-3 font-weight-bold ml-1">
                            34.12%
                          </div>
                        </div>
                        <div className="text-white-50 mb-2">
                          <a
                            className="text-white font-weight-bold"
                            href="#/"
                            onClick={(e) => e.preventDefault()}>
                            See methods
                          </a>{' '}
                          that can be used to increase your storage capacity
                          today.
                        </div>
                      </div>

                      <div className="bg-white-10 rounded-lg py-3">
                        <GaugeChart
                          id="chartsGauges1A"
                          nrOfLevels={24}
                          colors={['#1bc943', '#f83245']}
                          arcWidth={0.3}
                          percent={0.34}
                        />
                      </div>
                      <div className="text-center">
                        <Button
                          color="first"
                          size="sm"
                          className="font-weight-bold btn-pill font-size-xs text-uppercase px-4">
                          Increase Capacity
                        </Button>
                      </div>
                    </Card>
                  </Col>
                </Row>

                <Card className="rounded-lg shadow-xxl p-3 my-5">
                  <div className="nav-tabs-first tabs-animated tabs-animated-shadow">
                    <Nav tabs className="justify-content-center">
                      <NavItem>
                        <NavLinkStrap
                          className={clsx('mb-0', {
                            active: activeTab === '1'
                          })}
                          onClick={() => {
                            toggle('1');
                          }}>
                          <span className="font-weight-bold font-size-sm text-uppercase">
                            Documents
                          </span>
                          <div className="divider" />
                        </NavLinkStrap>
                      </NavItem>
                      <NavItem>
                        <NavLinkStrap
                          className={clsx('mb-0', {
                            active: activeTab === '2'
                          })}
                          onClick={() => {
                            toggle('2');
                          }}>
                          <span className="font-weight-bold font-size-sm text-uppercase">
                            Images
                          </span>
                          <div className="divider" />
                        </NavLinkStrap>
                      </NavItem>
                      <NavItem>
                        <NavLinkStrap
                          className={clsx('mb-0', {
                            active: activeTab === '4'
                          })}
                          onClick={() => {
                            toggle('4');
                          }}>
                          <span className="font-weight-bold font-size-sm text-uppercase">
                            Folders
                          </span>
                          <div className="divider" />
                        </NavLinkStrap>
                      </NavItem>
                    </Nav>
                  </div>
                </Card>

                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <Row>
                      <Col xl="4">
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="card btn hover-scale-sm rounded text-left mb-5 p-4">
                          <div className="d-flex align-items-center">
                            <div className="d-70 rounded-circle bg-light text-dark mr-3 text-center">
                              <FileText className="w-50 h-50" />
                            </div>
                            <div className="flex-grow-1 text-black-50">
                              <div className="pb-1 text-black font-weight-bold">
                                Report_feb_2020.doc
                              </div>
                              <div className="font-weight-bold">15.23 MB</div>
                              <div className="font-size-sm mt-2">
                                Last Updated:{' '}
                                <span className="text-black">
                                  three days ago
                                </span>
                              </div>
                            </div>
                            <div className="font-size-sm opacity-5">
                              <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                            </div>
                          </div>
                        </a>
                      </Col>
                      <Col xl="4">
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="card btn hover-scale-sm rounded text-left mb-5 p-4">
                          <div className="d-flex align-items-center">
                            <div className="d-70 rounded-circle bg-light text-dark mr-3 text-center">
                              <FileText className="w-50 h-50" />
                            </div>
                            <div className="flex-grow-1 text-black-50">
                              <div className="pb-1 text-black font-weight-bold">
                                Word_file.doc
                              </div>
                              <div className="font-weight-bold">15.23 MB</div>
                              <div className="font-size-sm mt-2">
                                Last Updated:{' '}
                                <span className="text-black">
                                  three days ago
                                </span>
                              </div>
                            </div>
                            <div className="font-size-sm opacity-5">
                              <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                            </div>
                          </div>
                        </a>
                      </Col>
                      <Col xl="4">
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="card btn hover-scale-sm rounded text-left mb-5 p-4">
                          <div className="d-flex align-items-center">
                            <div className="d-70 rounded-circle bg-light text-dark mr-3 text-center">
                              <FileText className="w-50 h-50" />
                            </div>
                            <div className="flex-grow-1 text-black-50">
                              <div className="pb-1 text-black font-weight-bold">
                                Word_file.doc
                              </div>
                              <div className="font-weight-bold">15.23 MB</div>
                              <div className="font-size-sm mt-2">
                                Last Updated:{' '}
                                <span className="text-black">
                                  three days ago
                                </span>
                              </div>
                            </div>
                            <div className="font-size-sm opacity-5">
                              <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                            </div>
                          </div>
                        </a>
                      </Col>
                      <Col xl="4">
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="card btn hover-scale-sm rounded text-left mb-5 p-4">
                          <div className="d-flex align-items-center">
                            <div className="d-70 rounded-circle bg-light text-dark mr-3 text-center">
                              <FileText className="w-50 h-50" />
                            </div>
                            <div className="flex-grow-1 text-black-50">
                              <div className="pb-1 text-black font-weight-bold">
                                Word_file.doc
                              </div>
                              <div className="font-weight-bold">15.23 MB</div>
                              <div className="font-size-sm mt-2">
                                Last Updated:{' '}
                                <span className="text-black">
                                  three days ago
                                </span>
                              </div>
                            </div>
                            <div className="font-size-sm opacity-5">
                              <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                            </div>
                          </div>
                        </a>
                      </Col>
                      <Col xl="4">
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="card btn hover-scale-sm rounded text-left mb-5 p-4">
                          <div className="d-flex align-items-center">
                            <div className="d-70 rounded-circle bg-light text-dark mr-3 text-center">
                              <FileText className="w-50 h-50" />
                            </div>
                            <div className="flex-grow-1 text-black-50">
                              <div className="pb-1 text-black font-weight-bold">
                                Report_feb_2020.doc
                              </div>
                              <div className="font-weight-bold">15.23 MB</div>
                              <div className="font-size-sm mt-2">
                                Last Updated:{' '}
                                <span className="text-black">
                                  three days ago
                                </span>
                              </div>
                            </div>
                            <div className="font-size-sm opacity-5">
                              <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                            </div>
                          </div>
                        </a>
                      </Col>
                      <Col xl="4">
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="card btn hover-scale-sm rounded text-left mb-5 p-4">
                          <div className="d-flex align-items-center">
                            <div className="d-70 rounded-circle bg-light text-dark mr-3 text-center">
                              <FileText className="w-50 h-50" />
                            </div>
                            <div className="flex-grow-1 text-black-50">
                              <div className="pb-1 text-black font-weight-bold">
                                AllPhotos.zip
                              </div>
                              <div className="font-weight-bold">15.23 MB</div>
                              <div className="font-size-sm mt-2">
                                Last Updated:{' '}
                                <span className="text-black">
                                  three days ago
                                </span>
                              </div>
                            </div>
                            <div className="font-size-sm opacity-5">
                              <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                            </div>
                          </div>
                        </a>
                      </Col>
                      <Col xl="4">
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="card btn hover-scale-sm rounded text-left mb-5 p-4">
                          <div className="d-flex align-items-center">
                            <div className="d-70 rounded-circle bg-light text-dark mr-3 text-center">
                              <FileText className="w-50 h-50" />
                            </div>
                            <div className="flex-grow-1 text-black-50">
                              <div className="pb-1 text-black font-weight-bold">
                                Word_file.doc
                              </div>
                              <div className="font-weight-bold">15.23 MB</div>
                              <div className="font-size-sm mt-2">
                                Last Updated:{' '}
                                <span className="text-black">
                                  three days ago
                                </span>
                              </div>
                            </div>
                            <div className="font-size-sm opacity-5">
                              <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                            </div>
                          </div>
                        </a>
                      </Col>
                      <Col xl="4">
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="card btn hover-scale-sm rounded text-left mb-5 p-4">
                          <div className="d-flex align-items-center">
                            <div className="d-70 rounded-circle bg-light text-dark mr-3 text-center">
                              <FileText className="w-50 h-50" />
                            </div>
                            <div className="flex-grow-1 text-black-50">
                              <div className="pb-1 text-black font-weight-bold">
                                Report_feb_2020.doc
                              </div>
                              <div className="font-weight-bold">15.23 MB</div>
                              <div className="font-size-sm mt-2">
                                Last Updated:{' '}
                                <span className="text-black">
                                  three days ago
                                </span>
                              </div>
                            </div>
                            <div className="font-size-sm opacity-5">
                              <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                            </div>
                          </div>
                        </a>
                      </Col>
                      <Col xl="4">
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="card btn hover-scale-sm rounded text-left mb-5 p-4">
                          <div className="d-flex align-items-center">
                            <div className="d-70 rounded-circle bg-light text-dark mr-3 text-center">
                              <FileText className="w-50 h-50" />
                            </div>
                            <div className="flex-grow-1 text-black-50">
                              <div className="pb-1 text-black font-weight-bold">
                                AllPhotos.zip
                              </div>
                              <div className="font-weight-bold">15.23 MB</div>
                              <div className="font-size-sm mt-2">
                                Last Updated:{' '}
                                <span className="text-black">
                                  three days ago
                                </span>
                              </div>
                            </div>
                            <div className="font-size-sm opacity-5">
                              <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                            </div>
                          </div>
                        </a>
                      </Col>
                      <Col xl="4">
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="card btn hover-scale-sm rounded text-left mb-5 p-4">
                          <div className="d-flex align-items-center">
                            <div className="d-70 rounded-circle bg-light text-dark mr-3 text-center">
                              <FileText className="w-50 h-50" />
                            </div>
                            <div className="flex-grow-1 text-black-50">
                              <div className="pb-1 text-black font-weight-bold">
                                Word_file.doc
                              </div>
                              <div className="font-weight-bold">15.23 MB</div>
                              <div className="font-size-sm mt-2">
                                Last Updated:{' '}
                                <span className="text-black">
                                  three days ago
                                </span>
                              </div>
                            </div>
                            <div className="font-size-sm opacity-5">
                              <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                            </div>
                          </div>
                        </a>
                      </Col>
                      <Col xl="4">
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="card btn hover-scale-sm rounded text-left mb-5 p-4">
                          <div className="d-flex align-items-center">
                            <div className="d-70 rounded-circle bg-light text-dark mr-3 text-center">
                              <FileText className="w-50 h-50" />
                            </div>
                            <div className="flex-grow-1 text-black-50">
                              <div className="pb-1 text-black font-weight-bold">
                                Word_file.doc
                              </div>
                              <div className="font-weight-bold">15.23 MB</div>
                              <div className="font-size-sm mt-2">
                                Last Updated:{' '}
                                <span className="text-black">
                                  three days ago
                                </span>
                              </div>
                            </div>
                            <div className="font-size-sm opacity-5">
                              <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                            </div>
                          </div>
                        </a>
                      </Col>
                      <Col xl="4">
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="card btn hover-scale-sm rounded text-left mb-5 p-4">
                          <div className="d-flex align-items-center">
                            <div className="d-70 rounded-circle bg-light text-dark mr-3 text-center">
                              <FileText className="w-50 h-50" />
                            </div>
                            <div className="flex-grow-1 text-black-50">
                              <div className="pb-1 text-black font-weight-bold">
                                Word_file.doc
                              </div>
                              <div className="font-weight-bold">15.23 MB</div>
                              <div className="font-size-sm mt-2">
                                Last Updated:{' '}
                                <span className="text-black">
                                  three days ago
                                </span>
                              </div>
                            </div>
                            <div className="font-size-sm opacity-5">
                              <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                            </div>
                          </div>
                        </a>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="2">
                    <Row>
                      <Col lg="6">
                        <Card className="shadow-xxl mb-5">
                          <a
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="card-img-wrapper rounded">
                            <div className="img-wrapper-overlay">
                              <div className="overlay-btn-wrapper">
                                <Button
                                  color="facebook"
                                  className="m-2 btn-icon hover-scale-lg btn-animated-icon d-50 p-0 border-0 rounded-lg">
                                  <span className="btn-wrapper--icon d-flex">
                                    <FontAwesomeIcon
                                      icon={['fab', 'facebook']}
                                      className="font-size-lg"
                                    />
                                  </span>
                                </Button>
                                <Button
                                  color="twitter"
                                  className="m-2 btn-icon hover-scale-lg btn-animated-icon d-50 p-0 border-0 rounded-lg">
                                  <span className="btn-wrapper--icon d-flex">
                                    <FontAwesomeIcon
                                      icon={['fab', 'twitter']}
                                      className="font-size-lg"
                                    />
                                  </span>
                                </Button>
                              </div>
                            </div>
                            <div className="card-badges card-badges-bottom">
                              <Badge pill color="warning">
                                Pending
                              </Badge>
                            </div>
                            <img
                              src={stock1}
                              className="card-img-top rounded"
                              alt="..."
                            />
                          </a>
                        </Card>
                      </Col>
                      <Col lg="6">
                        <Card className="shadow-xxl mb-5">
                          <a
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="card-img-wrapper rounded">
                            <div className="img-wrapper-overlay">
                              <div className="overlay-btn-wrapper">
                                <div className="avatar-icon-wrapper mx-auto mb-2">
                                  <div className="avatar-icon">
                                    <img alt="..." src={avatar5} />
                                  </div>
                                </div>
                                <div className="font-size-lg font-weight-bold">
                                  Darrel Devlin
                                </div>
                                <div className="text-white-50 pb-4">
                                  Senior UX Developer, Apple Inc.
                                </div>
                                <Button
                                  size="sm"
                                  color="info"
                                  className="btn-pill px-4 hover-scale-sm">
                                  <span className="btn-wrapper--icon">
                                    <FontAwesomeIcon
                                      icon={['fas', 'download']}
                                    />
                                  </span>
                                  <span className="btn-wrapper--label">
                                    View Profile
                                  </span>
                                </Button>
                              </div>
                            </div>
                            <div className="card-badges">
                              <Badge
                                pill
                                color="neutral-info"
                                className="text-info">
                                Articles
                              </Badge>
                            </div>
                            <img
                              src={stock2}
                              className="card-img-top rounded"
                              alt="..."
                            />
                          </a>
                        </Card>
                      </Col>
                      <Col lg="6">
                        <Card className="shadow-xxl mb-5">
                          <a
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="card-img-wrapper rounded">
                            <div className="img-wrapper-overlay">
                              <div className="overlay-btn-wrapper">
                                <Button
                                  outline
                                  color="secondary"
                                  className="shadow-sm-dark btn-pill d-inline-flex justify-content-center align-items-center border-2 p-0 d-40 m-1">
                                  <FontAwesomeIcon
                                    icon={['far', 'comment-dots']}
                                  />
                                </Button>
                                <Button
                                  outline
                                  color="secondary"
                                  className="shadow-sm-dark btn-pill d-inline-flex justify-content-center align-items-center border-2 p-0 d-40 m-1">
                                  <FontAwesomeIcon icon={['far', 'envelope']} />
                                </Button>
                              </div>
                            </div>
                            <div className="card-badges card-badges-bottom">
                              <Badge color="danger">Overdue</Badge>
                            </div>
                            <img
                              src={stock4}
                              className="card-img-top rounded"
                              alt="..."
                            />
                          </a>
                        </Card>
                      </Col>
                      <Col lg="6">
                        <Card className="shadow-xxl mb-5">
                          <a
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="card-img-wrapper rounded">
                            <div className="img-wrapper-overlay">
                              <div className="overlay-btn-wrapper">
                                <Button
                                  color="facebook"
                                  className="m-2 btn-icon hover-scale-lg btn-animated-icon d-50 p-0 border-0 rounded-lg">
                                  <span className="btn-wrapper--icon d-flex">
                                    <FontAwesomeIcon
                                      icon={['fab', 'facebook']}
                                      className="font-size-lg"
                                    />
                                  </span>
                                </Button>
                                <Button
                                  color="twitter"
                                  className="m-2 btn-icon hover-scale-lg btn-animated-icon d-50 p-0 border-0 rounded-lg">
                                  <span className="btn-wrapper--icon d-flex">
                                    <FontAwesomeIcon
                                      icon={['fab', 'twitter']}
                                      className="font-size-lg"
                                    />
                                  </span>
                                </Button>
                              </div>
                            </div>
                            <div className="card-badges card-badges-bottom">
                              <Badge pill color="warning">
                                Pending
                              </Badge>
                            </div>
                            <img
                              src={stock1}
                              className="card-img-top rounded"
                              alt="..."
                            />
                          </a>
                        </Card>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="4">
                    <Row>
                      <Col xl="6">
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="card btn hover-scale-sm rounded text-left mb-5 p-4">
                          <div className="d-flex align-items-center">
                            <div className="d-70 rounded bg-neutral-first text-dark mr-3 text-center">
                              <Folder className="w-50 h-50" />
                            </div>
                            <div className="flex-grow-1 text-black-50">
                              <div className="text-black font-weight-bold">
                                Downloads
                              </div>
                              <div>
                                <span className="font-weight-bold">
                                  563 files
                                </span>
                                , 364.78 MB
                              </div>
                              <div className="font-size-sm mt-2">
                                Last Updated:{' '}
                                <span className="text-black">moments ago</span>
                              </div>
                            </div>
                            <div className="font-size-sm opacity-5">
                              <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                            </div>
                          </div>
                        </a>
                      </Col>
                      <Col xl="6">
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="card btn hover-scale-sm rounded text-left mb-5 p-4">
                          <div className="d-flex align-items-center">
                            <div className="d-70 rounded bg-neutral-first text-dark mr-3 text-center">
                              <Folder className="w-50 h-50" />
                            </div>
                            <div className="flex-grow-1 text-black-50">
                              <div className="text-black font-weight-bold">
                                Downloads
                              </div>
                              <div>
                                <span className="font-weight-bold">
                                  285 files
                                </span>
                                , 364.78 MB
                              </div>
                              <div className="font-size-sm mt-2">
                                Last Updated:{' '}
                                <span className="text-black">moments ago</span>
                              </div>
                            </div>
                            <div className="font-size-sm opacity-5">
                              <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                            </div>
                          </div>
                        </a>
                      </Col>
                      <Col xl="6">
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="card btn hover-scale-sm rounded text-left mb-5 p-4">
                          <div className="d-flex align-items-center">
                            <div className="d-70 rounded bg-neutral-first text-dark mr-3 text-center">
                              <Folder className="w-50 h-50" />
                            </div>
                            <div className="flex-grow-1 text-black-50">
                              <div className="text-black font-weight-bold">
                                Downloads
                              </div>
                              <div>
                                <span className="font-weight-bold">
                                  652 files
                                </span>
                                , 364.78 MB
                              </div>
                              <div className="font-size-sm mt-2">
                                Last Updated:{' '}
                                <span className="text-black">moments ago</span>
                              </div>
                            </div>
                            <div className="font-size-sm opacity-5">
                              <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                            </div>
                          </div>
                        </a>
                      </Col>
                      <Col xl="6">
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="card btn hover-scale-sm rounded text-left mb-5 p-4">
                          <div className="d-flex align-items-center">
                            <div className="d-70 rounded bg-neutral-first text-dark mr-3 text-center">
                              <Folder className="w-50 h-50" />
                            </div>
                            <div className="flex-grow-1 text-black-50">
                              <div className="text-black font-weight-bold">
                                Downloads
                              </div>
                              <div>
                                <span className="font-weight-bold">
                                  628 files
                                </span>
                                , 364.78 MB
                              </div>
                              <div className="font-size-sm mt-2">
                                Last Updated:{' '}
                                <span className="text-black">moments ago</span>
                              </div>
                            </div>
                            <div className="font-size-sm opacity-5">
                              <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                            </div>
                          </div>
                        </a>
                      </Col>
                      <Col xl="6">
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="card btn hover-scale-sm rounded text-left mb-5 p-4">
                          <div className="d-flex align-items-center">
                            <div className="d-70 rounded bg-neutral-first text-dark mr-3 text-center">
                              <Folder className="w-50 h-50" />
                            </div>
                            <div className="flex-grow-1 text-black-50">
                              <div className="text-black font-weight-bold">
                                Reports
                              </div>
                              <div>
                                <span className="font-weight-bold">
                                  542 files
                                </span>
                                , 364.78 MB
                              </div>
                              <div className="font-size-sm mt-2">
                                Last Updated:{' '}
                                <span className="text-black">moments ago</span>
                              </div>
                            </div>
                            <div className="font-size-sm opacity-5">
                              <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                            </div>
                          </div>
                        </a>
                      </Col>
                      <Col xl="6">
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="card btn hover-scale-sm rounded text-left mb-5 p-4">
                          <div className="d-flex align-items-center">
                            <div className="d-70 rounded bg-neutral-first text-dark mr-3 text-center">
                              <Folder className="w-50 h-50" />
                            </div>
                            <div className="flex-grow-1 text-black-50">
                              <div className="text-black font-weight-bold">
                                Other files
                              </div>
                              <div>
                                <span className="font-weight-bold">
                                  237 files
                                </span>
                                , 364.78 MB
                              </div>
                              <div className="font-size-sm mt-2">
                                Last Updated:{' '}
                                <span className="text-black">moments ago</span>
                              </div>
                            </div>
                            <div className="font-size-sm opacity-5">
                              <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                            </div>
                          </div>
                        </a>
                      </Col>
                      <Col xl="6">
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="card btn hover-scale-sm rounded text-left mb-5 p-4">
                          <div className="d-flex align-items-center">
                            <div className="d-70 rounded bg-neutral-first text-dark mr-3 text-center">
                              <Folder className="w-50 h-50" />
                            </div>
                            <div className="flex-grow-1 text-black-50">
                              <div className="text-black font-weight-bold">
                                Websites
                              </div>
                              <div>
                                <span className="font-weight-bold">
                                  645 files
                                </span>
                                , 364.78 MB
                              </div>
                              <div className="font-size-sm mt-2">
                                Last Updated:{' '}
                                <span className="text-black">moments ago</span>
                              </div>
                            </div>
                            <div className="font-size-sm opacity-5">
                              <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                            </div>
                          </div>
                        </a>
                      </Col>
                      <Col xl="6">
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="card btn hover-scale-sm rounded text-left mb-5 p-4">
                          <div className="d-flex align-items-center">
                            <div className="d-70 rounded bg-neutral-first text-dark mr-3 text-center">
                              <Folder className="w-50 h-50" />
                            </div>
                            <div className="flex-grow-1 text-black-50">
                              <div className="text-black font-weight-bold">
                                Image album
                              </div>
                              <div>
                                <span className="font-weight-bold">
                                  234 files
                                </span>
                                , 2.4 GB
                              </div>
                              <div className="font-size-sm mt-2">
                                Last Updated:{' '}
                                <span className="text-black">moments ago</span>
                              </div>
                            </div>
                            <div className="font-size-sm opacity-5">
                              <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                            </div>
                          </div>
                        </a>
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>

                <div className="d-flex mb-5 align-items-center justify-content-center flex-wrap">
                  <Pagination>
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
                      <PaginationLink
                        href="#/"
                        onClick={(e) => e.preventDefault()}>
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#/"
                        onClick={(e) => e.preventDefault()}>
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#/"
                        onClick={(e) => e.preventDefault()}>
                        3
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

                <Card className="mt-4 mb-5 shadow-xxl">
                  <div className="p-3 p-lg-5">
                    <div className="dropzone">
                      <div
                        {...getRootProps({
                          className: 'dropzone-upload-wrapper'
                        })}>
                        <input {...getInputProps()} />
                        <div className="dropzone-inner-wrapper bg-white">
                          {isDragAccept && (
                            <div>
                              <div className="d-140 hover-scale-lg icon-blob icon-blob-animated btn-icon text-success mx-auto">
                                <svg
                                  className="d-140 opacity-2"
                                  viewBox="0 0 600 600"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <g transform="translate(300,300)">
                                    <path
                                      d="M170.4,-137.2C213.2,-82.3,234.8,-11.9,223.6,56.7C212.4,125.2,168.5,191.9,104.3,226.6C40.2,261.3,-44.1,264,-104,229.8C-163.9,195.7,-199.4,124.6,-216.2,49.8C-233,-25.1,-231,-103.9,-191.9,-158C-152.7,-212.1,-76.4,-241.6,-6.3,-236.6C63.8,-231.6,127.7,-192.2,170.4,-137.2Z"
                                      fill="currentColor"
                                    />
                                  </g>
                                </svg>
                                <div className="blob-icon-wrapper">
                                  <Check className="d-50" />
                                </div>
                              </div>
                              <div className="font-size-sm text-success">
                                All files will be uploaded!
                              </div>
                            </div>
                          )}
                          {isDragReject && (
                            <div>
                              <div className="d-140 hover-scale-lg icon-blob icon-blob-animated btn-icon text-danger mx-auto">
                                <svg
                                  className="d-140 opacity-2"
                                  viewBox="0 0 600 600"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <g transform="translate(300,300)">
                                    <path
                                      d="M169,-144C206.7,-87.5,216.5,-18,196.9,35.7C177.3,89.4,128.3,127.1,75.2,150.7C22,174.2,-35.4,183.5,-79.7,163.1C-124,142.7,-155.1,92.6,-164.1,40.9C-173.1,-10.7,-160.1,-64,-129,-118.9C-98,-173.8,-49,-230.4,8.3,-237.1C65.7,-243.7,131.3,-200.4,169,-144Z"
                                      fill="currentColor"
                                    />
                                  </g>
                                </svg>
                                <div className="blob-icon-wrapper">
                                  <X className="d-50" />
                                </div>
                              </div>
                              <div className="font-size-sm text-danger">
                                Some files will be rejected!
                              </div>
                            </div>
                          )}
                          {!isDragActive && (
                            <div>
                              <div className="d-140 hover-scale-lg icon-blob btn-icon text-first mx-auto">
                                <svg
                                  className="d-140 opacity-2"
                                  viewBox="0 0 600 600"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <g transform="translate(300,300)">
                                    <path
                                      d="M171.2,-128.5C210.5,-87.2,223.2,-16.7,205.1,40.4C186.9,97.5,137.9,141.1,81.7,167.2C25.5,193.4,-38,202.1,-96.1,181.2C-154.1,160.3,-206.7,109.7,-217.3,52.7C-227.9,-4.4,-196.4,-68,-153.2,-110.2C-110,-152.4,-55,-173.2,5.5,-177.5C65.9,-181.9,131.9,-169.8,171.2,-128.5Z"
                                      fill="currentColor"
                                    />
                                  </g>
                                </svg>
                                <div className="blob-icon-wrapper">
                                  <Upload className="d-50" />
                                </div>
                              </div>
                              <div className="font-size-sm">
                                Drag some images to see the animated effects!
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer p-4 bg-secondary">
                    <div>
                      <div className="font-weight-bold mb-3 text-uppercase text-dark font-size-sm text-center">
                        Uploaded Files
                      </div>
                      {thumbs.length <= 0 && (
                        <div className="text-first text-center font-size-sm">
                          Uploaded demo images previews will appear here!
                        </div>
                      )}
                      {thumbs.length > 0 && (
                        <div>
                          <Alert color="success" className="text-center mb-3">
                            You have uploaded <b>{thumbs.length}</b> files!
                          </Alert>
                          <Row className="no-gutters">{thumbs}</Row>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </Container>
            </div>
          </PerfectScrollbar>
        </div>

        <div
          onClick={toggleSidebarMenu}
          className={clsx('sidebar-inner-layout-overlay', {
            active: isSidebarMenuOpen
          })}
        />
      </div>
    </>
  );
}
