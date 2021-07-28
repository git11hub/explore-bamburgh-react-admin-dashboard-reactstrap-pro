import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Badge, Button, Progress } from 'reactstrap';

import Slider from 'react-slick';
import avatar6 from '../../../assets/images/avatars/avatar2.jpg';
import avatar2 from '../../../assets/images/avatars/avatar6.jpg';

function SliderArrowNext(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FontAwesomeIcon icon={['fas', 'chevron-right']} />
    </div>
  );
}

function SliderArrowPrev(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FontAwesomeIcon icon={['fas', 'chevron-left']} />
    </div>
  );
}

export default function LivePreviewExample() {
  const widgetsCarousels5A = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SliderArrowNext />,
    prevArrow: <SliderArrowPrev />
  };

  const widgetsCarousels5B = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SliderArrowNext />,
    prevArrow: <SliderArrowPrev />
  };

  return (
    <>
      <Row className="align-items-center">
        <Col lg="6">
          <Card className="card-box mb-5 mb-lg-0 d-block">
            <div className="card-header bg-light">
              <div className="card-header--title">
                <small>Statistics</small>
                <b>Last quarter report</b>
              </div>
              <div className="card-header--actions">
                <a href="#/" onClick={(e) => e.preventDefault()}>
                  <FontAwesomeIcon icon={['fas', 'plus']} />
                </a>
              </div>
            </div>
            <Slider {...widgetsCarousels5A}>
              <div>
                <div className="py-3">
                  <Row className="mt-3 mb-2">
                    <Col sm="6">
                      <div className="text-center">
                        <div>
                          <FontAwesomeIcon
                            icon={['far', 'user']}
                            className="font-size-xxl text-success"
                          />
                        </div>
                        <div className="mt-2 line-height-sm">
                          <b className="font-size-lg">2,345</b>
                          <span className="text-black-50 d-block">users</span>
                        </div>
                      </div>
                    </Col>
                    <Col sm="6">
                      <div className="text-center">
                        <div>
                          <FontAwesomeIcon
                            icon={['far', 'keyboard']}
                            className="font-size-xxl text-danger"
                          />
                        </div>
                        <div className="mt-2 line-height-sm">
                          <b className="font-size-lg">3,568</b>
                          <span className="text-black-50 d-block">clicks</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="p-4 mb-3 text-center">
                  <Button outline color="primary" className="mb-1">
                    <span className="btn-wrapper--label">
                      View complete report
                    </span>
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fas', 'angle-right']} />
                    </span>
                  </Button>
                </div>
              </div>
              <div>
                <div className="card-body pb-0 text-center">
                  <div className="font-weight-bold">
                    <small className="text-black-50 d-block mt-2 mb-2 text-uppercase">
                      New Accounts
                    </small>
                    <span className="font-size-xxl ">586,356</span>
                  </div>
                  <div className="mt-1">
                    <FontAwesomeIcon
                      icon={['fas', 'arrow-up']}
                      className="text-danger"
                    />
                    <span className="text-success px-1">15.4%</span>
                    <span className="text-black-50">increase this month</span>
                  </div>
                  <div className="mt-4">
                    <Button outline color="primary" className="btn-pill mb-3">
                      <span className="btn-wrapper--label">
                        View complete report
                      </span>
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={['fas', 'angle-right']} />
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </Slider>
          </Card>
        </Col>
        <Col lg="6">
          <Card className="card-box d-block p-4">
            <div className="card-tr-actions">
              <Button
                color="link"
                className="btn-link-primary p-0 font-size-xl text-dark no-caret">
                <FontAwesomeIcon
                  icon={['fas', 'ellipsis-h']}
                  className="font-size-lg"
                />
              </Button>
            </div>
            <Slider {...widgetsCarousels5B}>
              <div>
                <div>
                  <div className="d-flex align-items-center">
                    <div className="avatar-icon-wrapper rounded-circle mr-3">
                      <div className="d-block p-0 avatar-icon-wrapper m-0 d-100">
                        <div className="rounded-circle overflow-hidden">
                          <img alt="..." className="img-fluid" src={avatar6} />
                        </div>
                      </div>
                    </div>
                    <div className="w-100">
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="font-weight-bold font-size-lg"
                        title="...">
                        Kate Winchester
                      </a>
                      <span className="text-black-50 d-block">
                        Freelance Designer, Mutual Inc.
                      </span>
                      <div className="d-flex align-items-center pt-1">
                        <Progress
                          className="progress-xs progress-bar-rounded flex-grow-1 progress-animated-alt"
                          color="danger"
                          value="56"
                        />
                        <div className="font-weight-bold text-black-50 pl-2">
                          56%
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-black-50 font-size-md mt-3 mb-0">
                    From its medieval origins to the digital era, learn
                    everything there is to know about.
                  </p>
                  <div className="mt-4 mb-5 font-size-sm p-3 bg-secondary rounded-sm">
                    <div className="d-flex justify-content-between">
                      <span className="font-weight-bold">Email:</span>
                      <span className="text-black-50">russotry@russo.com</span>
                    </div>
                    <div className="d-flex justify-content-between py-2">
                      <span className="font-weight-bold">Job Description:</span>
                      <span className="text-black-50">Project Manager</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span className="font-weight-bold">Location:</span>
                      <span className="text-black-50">San Francisco, USA</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="d-flex align-items-center">
                    <div
                      className="avatar-icon-wrapper rounded-circle mr-3"
                      title="Online">
                      <Badge
                        color="success"
                        className="badge-position badge-position--bottom-center badge-circle">
                        Online
                      </Badge>
                      <div className="rounded-circle overflow-hidden d-100 bg-neutral-danger font-size-lg text-center font-weight-bold text-danger d-flex justify-content-center flex-column">
                        <span>KA</span>
                      </div>
                    </div>
                    <div className="w-100">
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="font-weight-bold font-size-lg"
                        title="...">
                        Kris Alexander
                      </a>
                      <span className="text-black-50 d-block">
                        Project Manager, Apple Inc.
                      </span>
                      <div className="d-flex align-items-center pt-1">
                        <Progress
                          animated
                          className="progress-xs flex-grow-1 progress-bar-rounded"
                          color="warning"
                          value="42"
                        />
                        <div className="font-weight-bold text-black-50 pl-2">
                          42%
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-black-50 font-size-md mt-3 mb-0">
                    Creation timelines for the standard lorem ipsum passage
                    vary, with some citing the 20th.
                  </p>
                  <div className="mt-4 mb-5 font-size-sm p-3 bg-secondary rounded-sm">
                    <div className="d-flex justify-content-between">
                      <span className="font-weight-bold">Email:</span>
                      <span className="text-black-50">russotry@russo.com</span>
                    </div>
                    <div className="d-flex justify-content-between py-2">
                      <span className="font-weight-bold">Job Description:</span>
                      <span className="text-black-50">Project Manager</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span className="font-weight-bold">Location:</span>
                      <span className="text-black-50">San Francisco, USA</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="d-flex align-items-center">
                    <div className="avatar-icon-wrapper rounded-circle mr-3">
                      <div className="d-block p-0 avatar-icon-wrapper m-0 d-100">
                        <div className="rounded-circle overflow-hidden">
                          <img alt="..." className="img-fluid" src={avatar2} />
                        </div>
                      </div>
                    </div>
                    <div className="w-100">
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="font-weight-bold font-size-lg"
                        title="...">
                        Matteo Mcphee
                      </a>
                      <span className="text-black-50 d-block">
                        Frontend Developer, Stripe Inc.
                      </span>
                      <div className="d-flex align-items-center pt-1">
                        <Progress
                          animated
                          className="progress-xs flex-grow-1 progress-bar-rounded"
                          color="first"
                          value="31"
                        />
                        <div className="font-weight-bold text-black-50 pl-2">
                          31%
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-black-50 font-size-md mt-3 mb-0">
                    So how did the classical Latin become so incoherent?
                    According to McClintock, a 15th century.
                  </p>
                  <div className="mt-4 mb-5 font-size-sm p-3 bg-secondary rounded-sm">
                    <div className="d-flex justify-content-between">
                      <span className="font-weight-bold">Email:</span>
                      <span className="text-black-50">russotry@russo.com</span>
                    </div>
                    <div className="d-flex justify-content-between py-2">
                      <span className="font-weight-bold">Job Description:</span>
                      <span className="text-black-50">Project Manager</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span className="font-weight-bold">Location:</span>
                      <span className="text-black-50">San Francisco, USA</span>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </Card>
        </Col>
      </Row>
    </>
  );
}
