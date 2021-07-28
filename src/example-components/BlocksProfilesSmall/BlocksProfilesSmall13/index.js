import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Badge, UncontrolledTooltip, Button } from 'reactstrap';

import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col lg="6">
          <Card className="card-box p-4 bg-night-sky text-white mb-5">
            <div className="card-tr-actions">
              <Button
                color="link"
                className="btn-link-white p-0 font-size-xl text-white opacity-8">
                <FontAwesomeIcon
                  icon={['fas', 'ellipsis-h']}
                  className="font-size-lg"
                />
              </Button>
            </div>
            <div className="text-center">
              <div className="avatar-icon-wrapper rounded-circle m-0">
                <div className="d-block p-0 avatar-icon-wrapper m-0 d-90">
                  <div className="rounded-circle overflow-hidden">
                    <img alt="..." className="img-fluid" src={avatar2} />
                  </div>
                </div>
              </div>
              <h3 className="font-weight-bold mt-3">Akeem Griffith</h3>
              <Badge
                color="warning"
                className="mt-1 mb-4 font-size-xs px-4 py-1 h-auto">
                Pending
              </Badge>
              <p className="mb-0 text-white-50">
                Browse through the live previews to see just how powerful this
                admin template really is!
              </p>
              <div className="pt-3">
                <Button
                  color="secondary"
                  className="btn-pill d-50 m-2 p-0 shadow-none text-github"
                  id="btnTooltipExample159123">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon
                      icon={['fab', 'github']}
                      className="font-size-lg"
                    />
                  </span>
                </Button>
                <UncontrolledTooltip target="btnTooltipExample159123">
                  Github
                </UncontrolledTooltip>
                <Button
                  color="secondary"
                  className="btn-pill d-50 m-2 p-0 shadow-none text-instagram"
                  id="btnTooltipExample159124">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon
                      icon={['fab', 'instagram']}
                      className="font-size-lg"
                    />
                  </span>
                </Button>
                <UncontrolledTooltip target="btnTooltipExample159124">
                  Instagram
                </UncontrolledTooltip>
                <Button
                  color="secondary"
                  className="btn-pill d-50 m-2 p-0 shadow-none text-google"
                  id="btnTooltipExample159125">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon
                      icon={['fab', 'google']}
                      className="font-size-lg"
                    />
                  </span>
                </Button>
                <UncontrolledTooltip target="btnTooltipExample159125">
                  Google
                </UncontrolledTooltip>
              </div>
            </div>
          </Card>
        </Col>
        <Col lg="6">
          <Card className="card-box bg-midnight-bloom text-white p-4 mb-5">
            <div className="card-tr-actions">
              <Button
                color="link"
                className="btn-link-white p-0 font-size-xl text-white opacity-8">
                <FontAwesomeIcon
                  icon={['fas', 'ellipsis-h']}
                  className="font-size-lg"
                />
              </Button>
            </div>
            <div className="text-center">
              <div className="avatar-icon-wrapper rounded-circle m-0">
                <div className="d-block p-0 avatar-icon-wrapper m-0 d-90">
                  <div className="rounded-circle overflow-hidden">
                    <img alt="..." className="img-fluid" src={avatar3} />
                  </div>
                </div>
              </div>
              <h3 className="font-weight-bold mt-3">Abigayle Hicks</h3>
              <Badge
                color="danger"
                className="mt-1 mb-4 font-size-xs px-4 py-1 h-auto">
                Offline
              </Badge>
              <p className="mb-0 text-white-50">
                Browse through the live previews to see just how powerful this
                admin template really is!
              </p>
              <div className="pt-3">
                <Button
                  color="secondary"
                  className="btn-pill d-50 m-2 p-0 shadow-none text-github"
                  id="btnTooltipExample159126">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon
                      icon={['fab', 'github']}
                      className="font-size-lg"
                    />
                  </span>
                </Button>
                <UncontrolledTooltip target="btnTooltipExample159126">
                  Github
                </UncontrolledTooltip>
                <Button
                  color="secondary"
                  className="btn-pill d-50 m-2 p-0 shadow-none text-instagram"
                  id="btnTooltipExample159127">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon
                      icon={['fab', 'instagram']}
                      className="font-size-lg"
                    />
                  </span>
                </Button>
                <UncontrolledTooltip target="btnTooltipExample159127">
                  Instagram
                </UncontrolledTooltip>
                <Button
                  color="secondary"
                  className="btn-pill d-50 m-2 p-0 shadow-none text-google"
                  id="btnTooltipExample159128">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon
                      icon={['fab', 'google']}
                      className="font-size-lg"
                    />
                  </span>
                </Button>
                <UncontrolledTooltip target="btnTooltipExample159128">
                  Google
                </UncontrolledTooltip>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
