import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Badge, Button } from 'reactstrap';

import Slider from 'react-slick';
import stock1 from '../../../assets/images/stock-photos/stock-4.jpg';
import stock2 from '../../../assets/images/stock-photos/stock-5.jpg';
import stock3 from '../../../assets/images/stock-photos/stock-2.jpg';

import avatar6 from '../../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';
import avatar5 from '../../../assets/images/avatars/avatar5.jpg';

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
  const widgetsCarousels1A = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SliderArrowNext />,
    prevArrow: <SliderArrowPrev />
  };

  const widgetsCarousels1B = {
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
          <Slider
            className="rounded-lg overflow-hidden mb-5 mb-lg-0 slider-dots-light"
            {...widgetsCarousels1A}>
            <div>
              <Card className="shadow-none rounded-0 overflow-hidden">
                <div className="card-img-wrapper rounded">
                  <a
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="img-wrapper-overlay p-4 p-xl-5 img-wrapper-overlay--visible rounded">
                    <div className="overlay-btn-wrapper card-body text-white text-center">
                      <h5 className="px-2 font-weight-bold display-4 mb-4">
                        Bamburgh React Admin Dashboard with Reactstrap PRO
                      </h5>
                      <p className="font-size-lg text-white-50 mb-0">
                        This admin template is a complete frontend solution for
                        easy-building applications or presentation websites.
                        It&#39;s fully responsive and designed by professional
                        UI&#x2F;UX designers and developers.
                      </p>
                      <div className="mt-4">
                        <div className="avatar-icon-wrapper mx-auto mb-2">
                          <div className="avatar-icon shadow-sm-dark">
                            <img alt="..." src={avatar6} />
                          </div>
                        </div>
                        <div>Dalia Finney</div>
                      </div>
                    </div>
                    <div className="card-badges card-badges-top">
                      <Badge pill color="danger">
                        Development
                      </Badge>
                    </div>
                  </a>
                  <img
                    src={stock1}
                    className="card-overlay-image img-fit-container rounded"
                    alt="..."
                  />
                </div>
              </Card>
            </div>
            <div>
              <Card className="shadow-none rounded-0 overflow-hidden">
                <div className="card-img-wrapper rounded">
                  <a
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="img-wrapper-overlay p-4 p-xl-5 img-wrapper-overlay--visible rounded">
                    <div className="overlay-btn-wrapper card-body text-white text-center">
                      <h5 className="px-2 font-weight-bold display-4 mb-4">
                        Bamburgh React Admin Dashboard with Reactstrap PRO
                      </h5>
                      <p className="font-size-lg text-white-50 mb-0">
                        This admin template is a complete frontend solution for
                        easy-building applications or presentation websites.
                        It&#39;s fully responsive and designed by professional
                        UI&#x2F;UX designers and developers.
                      </p>
                      <div className="mt-4">
                        <div className="avatar-icon-wrapper mx-auto mb-2">
                          <div className="avatar-icon shadow-sm-dark">
                            <img alt="..." src={avatar7} />
                          </div>
                        </div>
                        <div>Miranda Lawson</div>
                      </div>
                    </div>
                    <div className="card-badges">
                      <Badge
                        pill
                        color="neutral-success"
                        className="text-success">
                        Marketing
                      </Badge>
                    </div>
                  </a>
                  <img
                    src={stock2}
                    className="card-overlay-image img-fit-container rounded"
                    alt="..."
                  />
                </div>
              </Card>
            </div>
          </Slider>
        </Col>
        <Col lg="6">
          <Card className="shadow-xxl d-block p-4">
            <Slider
              className="rounded-lg overflow-hidden slider-dots-light"
              {...widgetsCarousels1B}>
              <div>
                <Card className="shadow-none">
                  <a
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="card-img-wrapper h-320px">
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
                      className="h-100 w-auto rounded"
                      alt="..."
                    />
                  </a>
                </Card>
              </div>
              <div>
                <Card className="shadow-none">
                  <a
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="card-img-wrapper h-320px">
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
                            <FontAwesomeIcon icon={['fas', 'download']} />
                          </span>
                          <span className="btn-wrapper--label">
                            View Profile
                          </span>
                        </Button>
                      </div>
                    </div>
                    <div className="card-badges">
                      <Badge pill color="neutral-info" className="text-info">
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
              </div>
              <div>
                <Card className="shadow-none">
                  <a
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="card-img-wrapper h-320px">
                    <div className="img-wrapper-overlay">
                      <div className="overlay-btn-wrapper">
                        <Button
                          outline
                          color="secondary"
                          className="shadow-sm-dark btn-pill d-inline-flex justify-content-center align-items-center border-2 p-0 d-40 m-1">
                          <FontAwesomeIcon icon={['far', 'comment-dots']} />
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
                      src={stock3}
                      className="card-img-top rounded"
                      alt="..."
                    />
                  </a>
                </Card>
              </div>
            </Slider>
          </Card>
        </Col>
      </Row>
    </>
  );
}
