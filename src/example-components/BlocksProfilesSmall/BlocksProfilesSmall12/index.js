import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Badge, UncontrolledTooltip, Button } from 'reactstrap';

import avatar6 from '../../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col lg="6">
          <Card className="shadow-xxl mb-5">
            <div className="card-header bg-secondary text-center pt-4 pb-3">
              <div className="avatar-icon-wrapper shadow-xxl border-white border-3 rounded-circle m-0">
                <div className="d-block p-0 avatar-icon-wrapper m-0 d-100">
                  <div className="rounded-circle overflow-hidden">
                    <img alt="..." className="img-fluid d-100" src={avatar6} />
                  </div>
                </div>
              </div>
              <h3 className="font-size-xl font-weight-bold mt-2">
                Shania O'Brien
              </h3>
              <Badge
                color="danger"
                className="mt-1 mb-4 font-size-xs badge-pill px-4 py-1 h-auto">
                offline
              </Badge>
              <p className="mb-4 text-dark opacity-8 px-3">
                This admin template is a complete frontend solution for
                easy-building applications or presentation websites. It&#39;s
                fully responsive and designed by professional UI&#x2F;UX
                designers and developers.
              </p>
            </div>
            <div className="card-tr-actions">
              <Button
                color="link"
                className="btn-link-dark p-0 font-size-xl text-dark opacity-8">
                <FontAwesomeIcon
                  icon={['fas', 'ellipsis-h']}
                  className="font-size-lg"
                />
              </Button>
            </div>
            <div className="divider" />
            <div className="card-body pb-0 px-0 text-center card-body-button">
              <div className="card-body-button-wrapper">
                <Button
                  color="github"
                  size="lg"
                  className="shadow-none border-3 border-white btn-pill mx-2 hover-scale-sm btn-animated-icon d-70 p-0"
                  id="btnGithubTooltip23">
                  <FontAwesomeIcon
                    icon={['fab', 'github']}
                    className="font-size-xl"
                  />
                </Button>
                <UncontrolledTooltip target="btnGithubTooltip23">
                  Github
                </UncontrolledTooltip>
                <Button
                  color="instagram"
                  size="lg"
                  className="shadow-none border-3 border-white btn-pill mx-2 hover-scale-sm btn-animated-icon d-70 p-0"
                  id="btnInstagramTooltip23">
                  <FontAwesomeIcon
                    icon={['fab', 'instagram']}
                    className="font-size-xl"
                  />
                </Button>
                <UncontrolledTooltip target="btnInstagramTooltip23">
                  Instagram
                </UncontrolledTooltip>
                <Button
                  color="google"
                  size="lg"
                  className="shadow-none border-3 border-white btn-pill mx-2 hover-scale-sm btn-animated-icon d-70 p-0"
                  id="btnGoogleTooltip23">
                  <FontAwesomeIcon
                    icon={['fab', 'google']}
                    className="font-size-xl"
                  />
                </Button>
                <UncontrolledTooltip target="btnGoogleTooltip23">
                  Google
                </UncontrolledTooltip>
              </div>
              <div className="px-3 pb-3">
                <Row className="no-gutters">
                  <Col md="6">
                    <div className="p-3">
                      <Button
                        color="first"
                        className="border-0 w-100 shadow-none rounded py-3 btn-transition-none btn-animated-icon-sm">
                        <div className="mx-auto">
                          <span className="btn-wrapper--icon btn-icon mx-auto font-size-lg d-40 bg-white-10 rounded-pill d-block text-white mb-2">
                            <FontAwesomeIcon icon={['far', 'bell']} />
                          </span>
                        </div>
                        <span className="font-weight-bold">Deliveries</span>
                      </Button>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="p-3">
                      <Button
                        color="success"
                        className="border-0 w-100 shadow-none rounded py-3 btn-transition-none btn-animated-icon-sm">
                        <div className="mx-auto">
                          <span className="btn-wrapper--icon btn-icon mx-auto font-size-lg d-40 bg-white-10 rounded-pill d-block text-white mb-2">
                            <FontAwesomeIcon icon={['far', 'chart-bar']} />
                          </span>
                        </div>
                        <span className="font-weight-bold">Accounts</span>
                      </Button>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="p-3">
                      <Button
                        color="warning"
                        className="border-0 w-100 shadow-none rounded py-3 btn-transition-none btn-animated-icon-sm">
                        <div className="mx-auto">
                          <span className="btn-wrapper--icon btn-icon mx-auto font-size-lg d-40 bg-white-10 rounded-pill d-block text-white mb-2">
                            <FontAwesomeIcon icon={['far', 'lightbulb']} />
                          </span>
                        </div>
                        <span className="font-weight-bold">Reports</span>
                      </Button>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="p-3">
                      <Button
                        color="danger"
                        className="border-0 w-100 shadow-none rounded py-3 btn-transition-none btn-animated-icon-sm">
                        <div className="mx-auto">
                          <span className="btn-wrapper--icon btn-icon mx-auto font-size-lg d-40 bg-white-10 rounded-pill d-block text-white mb-2">
                            <FontAwesomeIcon icon={['far', 'user']} />
                          </span>
                        </div>
                        <span className="font-weight-bold">Projects</span>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Card>
        </Col>
        <Col lg="6">
          <Card className="shadow-xxl mb-5">
            <div className="card-header bg-secondary text-center pt-4 pb-3">
              <div className="avatar-icon-wrapper shadow-xxl border-white border-3 rounded-circle m-0">
                <div className="d-block p-0 avatar-icon-wrapper m-0 100">
                  <div className="rounded-circle overflow-hidden">
                    <img alt="..." className="img-fluid d-100" src={avatar7} />
                  </div>
                </div>
              </div>
              <h3 className="font-size-xl font-weight-bold mt-2">
                Martin Howell
              </h3>
              <Badge
                color="success"
                className="mt-1 mb-4 font-size-xs px-4 py-1 h-auto">
                online
              </Badge>
              <p className="mb-4 text-dark opacity-8 px-3">
                This admin template is a complete frontend solution for
                easy-building applications or presentation websites. It&#39;s
                fully responsive and designed by professional UI&#x2F;UX
                designers and developers.
              </p>
            </div>
            <div className="card-tr-actions">
              <Button
                color="link"
                className="btn-link-dark p-0 font-size-xl text-dark opacity-8">
                <FontAwesomeIcon
                  icon={['fas', 'ellipsis-h']}
                  className="font-size-lg"
                />
              </Button>
            </div>
            <div className="divider" />
            <div className="card-body text-center card-body-button">
              <div className="card-body-button-wrapper">
                <Button
                  color="instagram"
                  size="lg"
                  className="shadow-none border-3 border-white btn-pill mx-2 hover-scale-sm btn-animated-icon d-70 p-0">
                  <FontAwesomeIcon
                    icon={['fab', 'instagram']}
                    className="font-size-xl"
                  />
                </Button>
                <Button
                  color="discord"
                  size="lg"
                  className="shadow-none border-3 border-white btn-pill mx-2 hover-scale-sm btn-animated-icon d-70 p-0">
                  <FontAwesomeIcon
                    icon={['fab', 'discord']}
                    className="font-size-xl"
                  />
                </Button>
                <Button
                  color="facebook"
                  size="lg"
                  className="shadow-none border-3 border-white btn-pill mx-2 hover-scale-sm btn-animated-icon d-70 p-0">
                  <FontAwesomeIcon
                    icon={['fab', 'facebook']}
                    className="font-size-xl"
                  />
                </Button>
              </div>
              <Row className="no-gutters">
                <Col md="6">
                  <div className="bg-secondary m-3 py-3 px-0 text-center rounded">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'user']}
                        className="font-size-xxl text-warning"
                      />
                    </div>
                    <div className="mt-2 line-height-sm">
                      <b className="font-size-lg">2,345</b>
                      <span className="text-black-50 d-block">users</span>
                    </div>
                  </div>
                </Col>
                <Col md="6">
                  <div className="bg-secondary m-3 py-3 px-0 text-center rounded">
                    <div>
                      <FontAwesomeIcon
                        icon={['fas', 'lemon']}
                        className="font-size-xxl text-success"
                      />
                    </div>
                    <div className="mt-2 line-height-sm">
                      <b className="font-size-lg">$3,586</b>
                      <span className="text-black-50 d-block">sales</span>
                    </div>
                  </div>
                </Col>
                <Col md="6">
                  <div className="bg-secondary m-3 py-3 px-0 text-center rounded">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'chart-bar']}
                        className="font-size-xxl text-info"
                      />
                    </div>
                    <div className="mt-2 line-height-sm">
                      <b className="font-size-lg">$9,693</b>
                      <span className="text-black-50 d-block">revenue</span>
                    </div>
                  </div>
                </Col>
                <Col md="6">
                  <div className="bg-secondary m-3 py-3 px-0 text-center rounded">
                    <div>
                      <FontAwesomeIcon
                        icon={['fas', 'question-circle']}
                        className="font-size-xxl text-danger"
                      />
                    </div>
                    <div className="mt-2 line-height-sm">
                      <b className="font-size-lg">694</b>
                      <span className="text-black-50 d-block">issues</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
