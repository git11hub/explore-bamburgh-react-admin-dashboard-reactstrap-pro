import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Badge, UncontrolledTooltip, Button } from 'reactstrap';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';

import avatar5 from '../../../assets/images/avatars/avatar5.jpg';
import avatar6 from '../../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

import stock6 from '../../../assets/images/stock-photos/stock-6.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <Card className="card-box mb-5">
        <Row className="no-gutters">
          <Col xl="5">
            <div className="p-4 text-center">
              <div className="avatar-icon-wrapper rounded-circle mx-auto">
                <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0 border-3 border-first">
                  <div className="rounded-circle border-3 border-white overflow-hidden">
                    <img alt="..." className="img-fluid" src={avatar5} />
                  </div>
                </div>
              </div>
              <h4 className="font-size-lg font-weight-bold my-2">
                Marion Devine
              </h4>
              <div className="text-center my-4">
                <Badge pill color="neutral-first" className="text-first mx-1">
                  Web developer
                </Badge>
                <Badge
                  pill
                  color="neutral-warning"
                  className="text-warning mx-1">
                  Javascript
                </Badge>
                <Badge pill color="neutral-danger" className="text-danger mx-1">
                  Angular
                </Badge>
              </div>

              <p className="text-muted mb-4">
                I should be incapable of drawing a single stroke at the present
                moment; and yet I feel that I never was a greater artist than
                now.
              </p>

              <div className="divider my-4" />
              <Row>
                <Col sm="6">
                  <span className="opacity-6 pb-2">Current month</span>
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="font-weight-bold font-size-lg">
                      <small className="opacity-6 pr-1">$</small>
                      46,362
                    </span>
                    <Badge color="neutral-danger" className="ml-2 text-danger">
                      -8%
                    </Badge>
                  </div>
                </Col>
                <Col sm="6">
                  <span className="opacity-6 pb-2">Last year</span>
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="font-weight-bold font-size-lg">
                      <small className="opacity-6 pr-1">$</small>
                      34,546
                    </span>
                    <Badge
                      color="neutral-success"
                      className="text-success ml-2">
                      +13%
                    </Badge>
                  </div>
                </Col>
              </Row>
              <div className="divider my-4" />
              <div className="font-weight-bold text-uppercase text-black-50 text-center mb-3">
                Team members
              </div>
              <div className="avatar-wrapper-overlap d-flex justify-content-center mb-3">
                <div className="avatar-icon-wrapper" id="DelaneyTooltip1">
                  <div className="avatar-icon">
                    <img alt="..." src={avatar1} />
                  </div>
                </div>
                <UncontrolledTooltip
                  target="DelaneyTooltip1"
                  popperClassName="tooltip-danger">
                  Chelsey Delaney
                </UncontrolledTooltip>

                <div className="avatar-icon-wrapper" id="SantosTooltip1">
                  <div className="avatar-icon">
                    <img alt="..." src={avatar7} />
                  </div>
                </div>
                <UncontrolledTooltip
                  target="SantosTooltip1"
                  popperClassName="tooltip-first">
                  Laibah Santos
                </UncontrolledTooltip>

                <div className="avatar-icon-wrapper" id="WeberTooltip1">
                  <div className="avatar-icon">
                    <img alt="..." src={avatar1} />
                  </div>
                </div>
                <UncontrolledTooltip
                  target="WeberTooltip1"
                  popperClassName="tooltip-second">
                  Ksawery Weber
                </UncontrolledTooltip>

                <div className="avatar-icon-wrapper" id="MaganaTooltip1">
                  <div className="avatar-icon">
                    <img alt="..." src={avatar2} />
                  </div>
                </div>
                <UncontrolledTooltip
                  target="MaganaTooltip1"
                  popperClassName="tooltip-info">
                  Killian Magana
                </UncontrolledTooltip>

                <div className="avatar-icon-wrapper" id="BanksTooltip1">
                  <div className="avatar-icon">
                    <img alt="..." src={avatar6} />
                  </div>
                </div>
                <UncontrolledTooltip
                  target="BanksTooltip1"
                  popperClassName="tooltip-success">
                  Kean Banks
                </UncontrolledTooltip>
              </div>
              <div className="divider my-4" />
              <Button outline color="first" className="mt-2">
                View complete profile
              </Button>
            </div>
          </Col>
          <Col xl="7">
            <div className="hero-wrapper bg-composed-wrapper h-100 rounded br-xl-left-0">
              <div className="flex-grow-1 w-100 d-flex align-items-end">
                <div
                  className="bg-composed-wrapper--image rounded br-xl-left-0 opacity-9 bg-composed-filter-rm"
                  style={{ backgroundImage: 'url(' + stock6 + ')' }}
                />
                <div className="bg-composed-wrapper--bg bg-second rounded br-xl-left-0 opacity-5" />
                <div className="bg-composed-wrapper--content text-center p-5">
                  <div className="text-white mt-3">
                    <h1 className="display-3 my-3 font-weight-bold">
                      Bamburgh React Admin Dashboard with Reactstrap PRO
                    </h1>
                    <p className="font-size-lg mb-0 text-white-50">
                      This admin template is a complete frontend solution for
                      easy-building applications or presentation websites.
                      It&#39;s fully responsive and designed by professional
                      UI&#x2F;UX designers and developers.
                    </p>
                    <div className="divider border-1 mx-auto my-4 border-light opacity-2 rounded w-25" />
                    <div>
                      <Button
                        tag="a"
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        color="success"
                        size="lg"
                        className="btn-pill hover-scale-lg">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['far', 'envelope']} />
                        </span>
                        <span className="btn-wrapper--label">Get in touch</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
}
