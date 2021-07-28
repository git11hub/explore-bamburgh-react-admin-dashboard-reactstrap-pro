import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row,
  Col,
  Card,
  CustomInput,
  Badge,
  UncontrolledTooltip,
  Button
} from 'reactstrap';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';
import { Settings, Grid, Users, Layers } from 'react-feather';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col xl="6">
          <Card className="card-box mb-5 pt-4">
            <div className="card-tr-actions">
              <CustomInput
                type="checkbox"
                id="checkboxProjects3"
                className="p-0 mt-3"
                label="&nbsp;"
              />
            </div>
            <div className="d-flex align-items-center px-4 mb-3">
              <div className="avatar-icon-wrapper rounded mr-3">
                <div className="d-block p-0 avatar-icon-wrapper m-0 d-100">
                  <div className="rounded overflow-hidden">
                    <img alt="..." className="img-fluid" src={avatar1} />
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
                <span className="text-black-50 d-block pb-1">
                  Freelance Designer, Mutual Inc.
                </span>
                <div className="d-flex align-items-center pt-2">
                  <Button
                    size="sm"
                    color="primary"
                    className="mr-3 shadow-none">
                    Chat
                  </Button>
                  <Button size="sm" color="neutral-success">
                    View
                  </Button>
                </div>
              </div>
            </div>
            <div className="my-3 font-size-sm p-3 mx-4 bg-secondary rounded-sm">
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
            <div className="d-flex flex-wrap mb-1 mx-2">
              <div className="w-50 p-3">
                <Button
                  color="primary"
                  className="btn-gradient bg-night-sky text-left px-4 py-3 w-100 rounded-lg shadow-none">
                  <div>
                    <Settings className="h1 d-block my-2 text-warning" />
                    <div className="font-weight-bold font-size-lg">Reports</div>
                    <div className="font-size-md mb-1 opacity-8">
                      Monthly Stats
                    </div>
                  </div>
                </Button>
              </div>
              <div className="w-50 p-3">
                <Button
                  color="primary"
                  className="btn-gradient bg-midnight-bloom text-left px-4 py-3 w-100 rounded-lg shadow-none">
                  <div>
                    <Grid className="h1 d-block my-2 text-success" />
                    <div className="font-weight-bold font-size-lg">
                      Statistics
                    </div>
                    <div className="font-size-md mb-1 opacity-8">
                      Customers stats
                    </div>
                  </div>
                </Button>
              </div>
              <div className="w-50 p-3">
                <Button
                  color="primary"
                  className="btn-gradient bg-vicious-stance text-left px-4 py-3 w-100 rounded-lg shadow-none">
                  <div>
                    <Users className="h1 d-block my-2 text-danger" />
                    <div className="font-weight-bold font-size-lg">
                      Projects
                    </div>
                    <div className="font-size-md mb-1 opacity-8">
                      Manage servers
                    </div>
                  </div>
                </Button>
              </div>
              <div className="w-50 p-3">
                <Button
                  color="primary"
                  className="btn-gradient bg-royal text-left px-4 py-3 w-100 rounded-lg shadow-none">
                  <div>
                    <Layers className="h1 d-block my-2 text-first" />
                    <div className="font-weight-bold font-size-lg">Tasks</div>
                    <div className="font-size-md mb-1 opacity-8">
                      Pending items
                    </div>
                  </div>
                </Button>
              </div>
            </div>
          </Card>
        </Col>
        <Col xl="6">
          <Card className="card-box pt-4 mb-5">
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
            <div className="text-center">
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
                  id="btnGithubTooltip88">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon
                      icon={['fab', 'github']}
                      className="font-size-lg"
                    />
                  </span>
                </Button>
                <UncontrolledTooltip target="btnGithubTooltip88">
                  Github
                </UncontrolledTooltip>
                <Button
                  color="instagram"
                  className="d-50 m-2 p-0"
                  id="btnInstagramTooltip88">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon
                      icon={['fab', 'instagram']}
                      className="font-size-lg"
                    />
                  </span>
                </Button>
                <UncontrolledTooltip target="btnInstagramTooltip88">
                  Instagram
                </UncontrolledTooltip>
                <Button
                  color="google"
                  className="d-50 m-2 p-0"
                  id="btnGoogleTooltip88">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon
                      icon={['fab', 'google']}
                      className="font-size-lg"
                    />
                  </span>
                </Button>
                <UncontrolledTooltip target="btnGoogleTooltip88">
                  Google
                </UncontrolledTooltip>
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
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
