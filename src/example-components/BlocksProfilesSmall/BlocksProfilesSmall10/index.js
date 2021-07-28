import React from 'react';

import { Row, Col, Card, Badge } from 'reactstrap';

import avatar4 from '../../../assets/images/avatars/avatar4.jpg';
import avatar5 from '../../../assets/images/avatars/avatar5.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col lg="6">
          <Card className="card-box text-center p-4 mb-5">
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
              <Badge pill color="neutral-warning" className="text-warning mx-1">
                Javascript
              </Badge>
              <Badge pill color="neutral-danger" className="text-danger mx-1">
                Angular
              </Badge>
            </div>

            <p className="text-muted mb-4">
              I should be incapable of drawing a single stroke at the present
              moment; and yet I feel that I never was a greater artist than now.
            </p>

            <div className="d-flex justify-content-between text-center line-height-sm font-size-lg text-black-50">
              <div>
                <div className="text-second font-weight-bold">86%</div>
                <small>Profile completion</small>
              </div>
              <div>
                <div className="text-second font-weight-bold">$1,864</div>
                <small>Lifetime earnings</small>
              </div>
              <div>
                <div className="text-second font-weight-bold">241</div>
                <small>Projects completed</small>
              </div>
            </div>
          </Card>
        </Col>
        <Col lg="6">
          <Card className="card-box text-center p-4 mb-5">
            <div className="avatar-icon-wrapper rounded-circle mx-auto">
              <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0 border-3 border-danger">
                <div className="rounded-circle border-3 border-white overflow-hidden">
                  <img alt="..." className="img-fluid" src={avatar4} />
                </div>
              </div>
            </div>
            <h4 className="font-size-lg font-weight-bold my-2">
              Charlotte Vasquez
            </h4>
            <div className="text-center my-4">
              <Badge pill color="neutral-first" className="text-first mx-1">
                UX Designer
              </Badge>
              <Badge pill color="neutral-warning" className="text-warning mx-1">
                Software Architect
              </Badge>
              <Badge pill color="neutral-danger" className="text-danger mx-1">
                React
              </Badge>
            </div>

            <p className="text-muted mb-4">
              To an English person, it will seem like simplified English, as a
              skeptical Cambridge friend of mine told me what Occidental is.
            </p>

            <div className="d-flex justify-content-between text-center line-height-sm font-size-lg text-black-50">
              <div>
                <div className="text-second font-weight-bold">44%</div>
                <small>Profile completion</small>
              </div>
              <div>
                <div className="text-second font-weight-bold">$12,547</div>
                <small>Lifetime earnings</small>
              </div>
              <div>
                <div className="text-second font-weight-bold">347</div>
                <small>Projects completed</small>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
