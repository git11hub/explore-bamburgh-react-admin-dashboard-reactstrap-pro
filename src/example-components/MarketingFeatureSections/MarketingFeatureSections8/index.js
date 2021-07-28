import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row,
  Col,
  Card,
  Badge,
  ListGroup,
  ListGroupItem,
  Button
} from 'reactstrap';

import hero2 from '../../../assets/images/hero-bg/hero-2.jpg';

import avatar4 from '../../../assets/images/avatars/avatar4.jpg';
import avatar5 from '../../../assets/images/avatars/avatar5.jpg';
import avatar6 from '../../../assets/images/avatars/avatar6.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <Row className="py-5 my-5 no-gutters">
        <Col
          xl="6"
          className="hero-wrapper bg-composed-wrapper bg-serious-blue">
          <div className="hero-wrapper--content">
            <div
              className="bg-composed-wrapper--image bg-composed-filter-rm"
              style={{ backgroundImage: 'url(' + hero2 + ')' }}
            />
            <div className="bg-composed-wrapper--bg bg-second opacity-4" />
            <div className="bg-composed-wrapper--content p-4 p-xl-0">
              <Col lg="10" xl="9" className="p-0 mx-auto">
                <Card>
                  <ListGroup flush>
                    <ListGroupItem
                      tag="a"
                      action
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="d-flex bg-white hover-scale-rounded justify-content-between align-items-center py-3">
                      <div className="d-flex align-items-center">
                        <div className="avatar-icon-wrapper d-50 mr-3">
                          <div className="avatar-icon rounded-circle d-50">
                            <img alt="..." src={avatar6} />
                          </div>
                        </div>
                        <div>
                          <div className="font-weight-bold font-size-sm text-black">
                            Karla Byrne
                          </div>
                          <div className="d-flex align-items-center font-size-xs">
                            <Badge
                              color="success"
                              className="badge-circle border-white border-1 mr-2">
                              Completed
                            </Badge>
                            <div className="text-success">Online</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <Button size="sm" color="neutral-dark" className="px-3">
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon icon={['fas', 'plus']} />
                          </span>
                          <span className="btn-wrapper--label">Add</span>
                        </Button>
                      </div>
                    </ListGroupItem>
                    <ListGroupItem
                      tag="a"
                      action
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="d-flex bg-white hover-scale-rounded justify-content-between align-items-center py-3">
                      <div className="d-flex align-items-center">
                        <div className="avatar-icon-wrapper d-50 mr-3">
                          <div className="avatar-icon rounded-circle d-50">
                            <img alt="..." src={avatar5} />
                          </div>
                        </div>
                        <div>
                          <div className="font-weight-bold font-size-sm text-black">
                            Eden Hays
                          </div>
                          <div className="d-flex align-items-center font-size-xs">
                            <Badge
                              color="danger"
                              className="badge-circle border-white border-1 mr-2">
                              Completed
                            </Badge>
                            <div className="text-danger">Offline</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <Button
                          size="sm"
                          color="neutral-dark"
                          className="px-3 disabled">
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon icon={['fas', 'plus']} />
                          </span>
                          <span className="btn-wrapper--label">Add</span>
                        </Button>
                      </div>
                    </ListGroupItem>
                    <ListGroupItem
                      tag="a"
                      action
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="d-flex bg-white hover-scale-rounded justify-content-between align-items-center py-3">
                      <div className="d-flex align-items-center">
                        <div className="avatar-icon-wrapper d-50 mr-3">
                          <div className="avatar-icon rounded-circle d-50">
                            <img alt="..." src={avatar4} />
                          </div>
                        </div>
                        <div>
                          <div className="font-weight-bold font-size-sm text-black">
                            Janine Benton
                          </div>
                          <div className="d-flex align-items-center font-size-xs">
                            <Badge
                              color="warning"
                              className="badge-circle border-white border-1 mr-2">
                              Completed
                            </Badge>
                            <div className="text-warning">In a meeting</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <Button size="sm" color="neutral-dark" className="px-3">
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon icon={['fas', 'plus']} />
                          </span>
                          <span className="btn-wrapper--label">Add</span>
                        </Button>
                      </div>
                    </ListGroupItem>
                  </ListGroup>
                </Card>
              </Col>
            </div>
          </div>
        </Col>
        <Col xl="6" className="bg-white">
          <div className="p-4">
            <div className="p-0 p-lg-4">
              <h1 className="display-4 font-weight-bold mb-3">
                Bamburgh React Admin Dashboard with Reactstrap PRO
              </h1>
              <p className="font-size-lg text-black-50">
                This admin template is a complete frontend solution for
                easy-building applications or presentation websites. It&#39;s
                fully responsive and designed by professional UI&#x2F;UX
                designers and developers.
              </p>
              <Row className="text-first mt-4">
                <Col sm="6">
                  <div className="d-flex align-items-center mb-3">
                    <div className="d-30 rounded-pill btn-icon bg-neutral-first mr-2">
                      <FontAwesomeIcon icon={['fas', 'check']} />
                    </div>
                    <span className="pt-1">300+ components available</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="d-30 rounded-pill btn-icon bg-neutral-first mr-2">
                      <FontAwesomeIcon icon={['fas', 'check']} />
                    </div>
                    <span className="pt-1">UI Kit included</span>
                  </div>
                </Col>
                <Col sm="6">
                  <div className="d-flex align-items-center mb-3">
                    <div className="d-30 rounded-pill btn-icon bg-neutral-first mr-2">
                      <FontAwesomeIcon icon={['fas', 'check']} />
                    </div>
                    <span className="pt-1">Unlimited custom options</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="d-30 rounded-pill btn-icon bg-neutral-first mr-2">
                      <FontAwesomeIcon icon={['fas', 'check']} />
                    </div>
                    <span className="pt-1">Multiple applications</span>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}
