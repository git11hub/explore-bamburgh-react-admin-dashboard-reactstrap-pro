import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Badge, UncontrolledTooltip, Button } from 'reactstrap';

import avatar6 from '../../../assets/images/avatars/avatar6.jpg';
import avatar1 from '../../../assets/images/avatars/avatar1.jpg';

import stock3 from '../../../assets/images/stock-photos/stock-3.jpg';
import stock5 from '../../../assets/images/stock-photos/stock-5.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col lg="6">
          <Card className="mb-5">
            <div className="card-img-wrapper h-180px">
              <div className="card-badges card-badges-bottom">
                <Badge color="danger">offline</Badge>
              </div>
              <img
                alt="..."
                className="card-img-top img-fit-container"
                src={stock5}
              />
            </div>
            <div className="card-body text-center card-body-avatar">
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="avatar-icon-wrapper card-box-hover rounded-circle card-box-hover-rise hover-scale-lg d-130">
                <div className="avatar-icon rounded-circle">
                  <img alt="..." className="img-fluid" src={avatar6} />
                </div>
              </a>
              <h3 className="font-weight-bold mt-4 mb-3">Brianne Frost</h3>
              <p className="card-text mb-3">
                This admin template is a complete frontend solution for
                easy-building applications or presentation websites. It&#39;s
                fully responsive and designed by professional UI&#x2F;UX
                designers and developers.
              </p>
              <div className="py-3">
                <Button
                  color="github"
                  className="btn-pill d-60 p-0"
                  id="btnGithubTooltip55">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon
                      icon={['fab', 'github']}
                      className="font-size-xl"
                    />
                  </span>
                </Button>
                <UncontrolledTooltip target="btnGithubTooltip55">
                  Github
                </UncontrolledTooltip>
                <Button
                  color="instagram"
                  className="btn-pill d-60 p-0 mx-2"
                  id="btnInstagramTooltip55">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon
                      icon={['fab', 'instagram']}
                      className="font-size-xl"
                    />
                  </span>
                </Button>
                <UncontrolledTooltip target="btnInstagramTooltip55">
                  Instagram
                </UncontrolledTooltip>
                <Button
                  color="google"
                  className="btn-pill d-60 p-0"
                  id="btnGoogleTooltip55">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon
                      icon={['fab', 'google']}
                      className="font-size-xl"
                    />
                  </span>
                </Button>
                <UncontrolledTooltip target="btnGoogleTooltip55">
                  Google
                </UncontrolledTooltip>
              </div>
            </div>
          </Card>
        </Col>
        <Col lg="6">
          <Card className="mb-5">
            <div className="card-img-wrapper h-180px">
              <div className="card-badges card-badges-top">
                <Badge color="warning">Online</Badge>
              </div>
              <img
                alt="..."
                className="card-img-top img-fit-container"
                src={stock3}
              />
            </div>
            <div className="card-body text-center card-body-avatar">
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="avatar-icon-wrapper shadow-lg rounded-circle card-box-hover-rise d-130">
                <div className="avatar-icon rounded-circle">
                  <img alt="..." className="img-fluid" src={avatar1} />
                </div>
              </a>
              <h3 className="font-weight-bold mt-4 mb-3">Lizzie Guerra</h3>
              <p className="card-text mb-3">
                This admin template is a complete frontend solution for
                easy-building applications or presentation websites. It&#39;s
                fully responsive and designed by professional UI&#x2F;UX
                designers and developers.
              </p>
              <div className="py-3">
                <Button
                  color="github"
                  className="text-github btn-pill bg-white border-2 d-60 p-0"
                  id="btnGithubTooltip55123">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon
                      icon={['fab', 'github']}
                      className="font-size-xl"
                    />
                  </span>
                </Button>
                <UncontrolledTooltip target="btnGithubTooltip55123">
                  Github
                </UncontrolledTooltip>
                <Button
                  color="instagram"
                  className="text-instagram btn-pill bg-white border-2 d-60 p-0 mx-2"
                  id="btnInstagramTooltip55123">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon
                      icon={['fab', 'instagram']}
                      className="font-size-xl"
                    />
                  </span>
                </Button>
                <UncontrolledTooltip target="btnInstagramTooltip55123">
                  Instagram
                </UncontrolledTooltip>
                <Button
                  color="google"
                  className="text-google btn-pill bg-white border-2 d-60 p-0"
                  id="btnGoogleTooltip55123">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon
                      icon={['fab', 'google']}
                      className="font-size-xl"
                    />
                  </span>
                </Button>
                <UncontrolledTooltip target="btnGoogleTooltip55123">
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
