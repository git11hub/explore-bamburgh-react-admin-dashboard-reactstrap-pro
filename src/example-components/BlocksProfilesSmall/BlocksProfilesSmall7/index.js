import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Button } from 'reactstrap';

import avatar5 from '../../../assets/images/avatars/avatar5.jpg';
import avatar6 from '../../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';
export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col md="4">
          <Card className="card-box mb-5">
            <div className="text-center py-3">
              <div className="d-90 rounded-circle border-0 my-2 card-icon-wrapper bg-plum-plate btn-icon mx-auto text-center">
                <div className="avatar-icon-wrapper d-80">
                  <div className="avatar-icon d-80 rounded-circle">
                    <img alt="..." src={avatar5} />
                  </div>
                </div>
              </div>
              <div className="font-size-xl font-weight-bold pt-2 text-black">
                Cinar Aguilar
              </div>
              <div className="opacity-5 pb-3">Junior Project Manager</div>
              <div className="divider mx-auto w-50 my-3" />
              <div className="text-center">
                <Button
                  className="p-0 d-50 btn-icon btn-pill mx-1 btn-transition-none"
                  color="first"
                  outline>
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['far', 'eye']} />
                  </span>
                </Button>
                <Button
                  className="p-0 d-50 btn-icon btn-pill mx-1 btn-transition-none"
                  color="first"
                  outline>
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['far', 'heart']} />
                  </span>
                </Button>
                <Button
                  className="p-0 d-50 btn-icon btn-pill mx-1 btn-transition-none"
                  color="first"
                  outline>
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fas', 'user']} />
                  </span>
                </Button>
              </div>
            </div>
          </Card>
        </Col>
        <Col md="4">
          <Card className="card-border-top border-danger mb-5">
            <div className="text-center py-3">
              <div className="d-90 rounded-circle border-0 shadow-sm my-2 card-icon-wrapper bg-love-kiss btn-icon mx-auto text-center">
                <div className="avatar-icon-wrapper d-80">
                  <div className="avatar-icon d-80 rounded-circle">
                    <img alt="..." src={avatar6} />
                  </div>
                </div>
              </div>
              <div className="font-size-xl font-weight-bold pt-2 text-black">
                Lexie Livingston
              </div>
              <div className="opacity-5 pb-3">Lead React Developer</div>
              <div className="divider mx-auto w-50 my-3" />
              <div className="text-center">
                <Button
                  className="p-0 d-50 btn-icon btn-pill mx-1 btn-animated-icon hover-scale-sm"
                  color="discord">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fab', 'discord']} />
                  </span>
                </Button>
                <Button
                  className="p-0 d-50 btn-icon btn-pill mx-1 btn-animated-icon hover-scale-sm"
                  color="github">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fab', 'github']} />
                  </span>
                </Button>
                <Button
                  className="p-0 d-50 btn-icon btn-pill mx-1 btn-animated-icon hover-scale-sm"
                  color="dribbble">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fab', 'dribbble']} />
                  </span>
                </Button>
              </div>
            </div>
          </Card>
        </Col>
        <Col md="4">
          <Card className="bg-serious-blue card-box mb-5">
            <div className="text-center text-white py-3">
              <div className="d-90 rounded-circle shadow-sm-dark border-0 my-2 card-icon-wrapper bg-skim-blue btn-icon mx-auto text-center">
                <div className="avatar-icon-wrapper d-80">
                  <div className="avatar-icon d-80 rounded-circle">
                    <img alt="..." src={avatar7} />
                  </div>
                </div>
              </div>
              <div className="font-size-xl font-weight-bold pt-2">
                Ricardo Colon
              </div>
              <div className="opacity-5 pb-3">Senior UX Designer</div>
              <div className="divider mx-auto opacity-3 w-50 my-3" />
              <div className="text-center">
                <Button
                  className="p-0 d-50 btn-icon btn-pill mx-1 btn-transition-none shadow-none"
                  color="secondary"
                  outline>
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['far', 'eye']} />
                  </span>
                </Button>
                <Button
                  className="p-0 d-50 btn-icon btn-pill mx-1 btn-transition-none shadow-none"
                  color="secondary"
                  outline>
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['far', 'heart']} />
                  </span>
                </Button>
                <Button
                  className="p-0 d-50 btn-icon btn-pill mx-1 btn-transition-none shadow-none"
                  color="secondary"
                  outline>
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fas', 'user']} />
                  </span>
                </Button>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
