import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Badge, UncontrolledTooltip, Button } from 'reactstrap';

import avatar7 from '../../../assets/images/avatars/avatar7.jpg';
import { Settings, Grid, Users, Layers } from 'react-feather';

import hero3 from '../../../assets/images/hero-bg/hero-3.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <Card className="card-box mb-5">
        <Row className="no-gutters">
          <Col xl="6">
            <div className="hero-wrapper bg-composed-wrapper bg-grow-early h-100 rounded br-xl-right-0">
              <div className="flex-grow-1 w-100 d-flex align-items-center">
                <div
                  className="bg-composed-wrapper--image rounded br-xl-right-0"
                  style={{ backgroundImage: 'url(' + hero3 + ')' }}
                />
                <div className="bg-composed-wrapper--bg bg-second opacity-5 rounded br-xl-right-0" />
                <div className="bg-composed-wrapper--content text-center p-5">
                  <div className="text-white">
                    <h1 className="display-3 my-3 font-weight-bold">
                      Bamburgh React Admin Dashboard with Reactstrap PRO
                    </h1>
                    <p className="font-size-lg mb-0 text-white-50">
                      This admin template is a complete frontend solution for
                      easy-building applications or presentation websites.
                      It&#39;s fully responsive and designed by professional
                      UI&#x2F;UX designers and developers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="hero-footer pb-5">
                <Button
                  tag="a"
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  color="success"
                  className="hover-scale-sm shadow-sm-dark px-4 font-weight-bold">
                  <span className="btn-wrapper--label">Continue reading</span>
                </Button>
              </div>
            </div>
          </Col>
          <Col xl="6">
            <div className="card-tr-actions">
              <Button size="sm" color="neutral-dark" id="SendMessageTooltip2">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['far', 'envelope']} />
                </span>
              </Button>
              <UncontrolledTooltip target="SendMessageTooltip2">
                Send Message
              </UncontrolledTooltip>
            </div>
            <div className="text-center pt-4">
              <div className="avatar-icon-wrapper rounded-circle m-0">
                <div className="d-block p-0 avatar-icon-wrapper m-0 d-90">
                  <div className="rounded-circle overflow-hidden">
                    <img alt="..." className="img-fluid" src={avatar7} />
                  </div>
                </div>
              </div>
              <div>
                <Badge
                  color="neutral-success"
                  className="my-2 text-success font-size-sm px-4 py-1 h-auto">
                  Online
                </Badge>
              </div>
              <h3 className="font-weight-bold mt-3">Lacie-Mae Mckay</h3>
              <p className="mb-0 text-black-50">
                Senior Frontend Developer at <b>Google Inc.</b>
              </p>
              <div className="pt-3">
                <Button
                  color="github"
                  className="d-50 m-2 p-0"
                  id="btnGithubTooltip">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon
                      icon={['fab', 'github']}
                      className="font-size-lg"
                    />
                  </span>
                </Button>
                <UncontrolledTooltip target="btnGithubTooltip">
                  Github
                </UncontrolledTooltip>
                <Button
                  color="instagram"
                  className="d-50 m-2 p-0"
                  id="btnInstagramTooltip">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon
                      icon={['fab', 'instagram']}
                      className="font-size-lg"
                    />
                  </span>
                </Button>
                <Button
                  color="google"
                  className="d-50 m-2 p-0"
                  id="btnGoogleTooltip">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon
                      icon={['fab', 'google']}
                      className="font-size-lg"
                    />
                  </span>
                </Button>
              </div>
              <div className="d-flex p-4 bg-secondary card-footer mt-4 flex-wrap">
                <div className="w-50 p-2">
                  <button className="btn card card-box text-left d-flex justify-content-center px-4 py-3 w-100">
                    <div>
                      <Settings className="h1 d-block my-2 text-warning" />
                      <div className="font-weight-bold font-size-lg text-black">
                        Reports
                      </div>
                      <div className="font-size-md mb-1 text-black-50">
                        Monthly Stats
                      </div>
                    </div>
                  </button>
                </div>
                <div className="w-50 p-2">
                  <button className="btn card card-box text-left d-flex justify-content-center px-4 py-3 w-100">
                    <div>
                      <Grid className="h1 d-block my-2 text-success" />
                      <div className="font-weight-bold font-size-lg text-black">
                        Statistics
                      </div>
                      <div className="font-size-md mb-1 text-black-50">
                        Customers stats
                      </div>
                    </div>
                  </button>
                </div>
                <div className="w-50 p-2">
                  <button className="btn card card-box text-left d-flex justify-content-center px-4 py-3 w-100">
                    <div>
                      <Users className="h1 d-block my-2 text-danger" />
                      <div className="font-weight-bold font-size-lg text-black">
                        Projects
                      </div>
                      <div className="font-size-md mb-1 text-black-50">
                        Manage servers
                      </div>
                    </div>
                  </button>
                </div>
                <div className="w-50 p-2">
                  <button className="btn card card-box text-left d-flex justify-content-center px-4 py-3 w-100">
                    <div>
                      <Layers className="h1 d-block my-2 text-first" />
                      <div className="font-weight-bold font-size-lg text-black">
                        Tasks
                      </div>
                      <div className="font-size-md mb-1 text-black-50">
                        Pending items
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
}
