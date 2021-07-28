import React from 'react';

import { Row, Col, Card, Container } from 'reactstrap';

import {
  Bell,
  Settings,
  Grid,
  Activity,
  Briefcase,
  LifeBuoy
} from 'react-feather';

export default function LivePreviewExample() {
  return (
    <>
      <Card className="bg-plum-plate pt-5">
        <Container className="py-5">
          <Row>
            <Col md="6" xl="4">
              <Card className="card-box-hover-rise card-box-hover rounded-lg text-center p-3 p-xl-4 mb-5 d-block">
                <div className="d-130 object-skew hover-scale-sm icon-blob btn-icon text-danger mx-auto">
                  <svg
                    className="blob-wrapper opacity-1"
                    viewBox="0 0 600 600"
                    xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(300,300)">
                      <path
                        d="M169,-144C206.7,-87.5,216.5,-18,196.9,35.7C177.3,89.4,128.3,127.1,75.2,150.7C22,174.2,-35.4,183.5,-79.7,163.1C-124,142.7,-155.1,92.6,-164.1,40.9C-173.1,-10.7,-160.1,-64,-129,-118.9C-98,-173.8,-49,-230.4,8.3,-237.1C65.7,-243.7,131.3,-200.4,169,-144Z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                  <div className="blob-icon-wrapper">
                    <Bell />
                  </div>
                </div>
                <h5 className="font-weight-bold font-size-lg text-second mb-2">
                  Analytics
                </h5>
                <p className="mb-4 text-black-50">
                  Browse through the live previews to see just how powerful this
                  admin template really is!
                </p>
                <a
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="transition-base rounded-pill py-1 px-4 text-lowercase font-size-xs bg-neutral-danger text-danger d-inline-flex">
                  click for details
                </a>
              </Card>
            </Col>
            <Col md="6" xl="4">
              <Card className="card-box-hover-rise card-box-hover rounded-lg text-center p-3 p-xl-4 mb-5 d-block">
                <div className="d-130 object-skew hover-scale-sm icon-blob btn-icon text-warning mx-auto">
                  <svg
                    className="blob-wrapper opacity-1"
                    viewBox="0 0 600 600"
                    xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(300,300)">
                      <path
                        d="M155,-128.8C192.2,-77,207.7,-13,197.7,50.9C187.7,114.8,152.2,178.6,96.7,208.2C41.1,237.9,-34.6,233.4,-102.6,204C-170.6,174.7,-231.1,120.6,-246.7,55.4C-262.4,-9.9,-233.2,-86.3,-184.6,-140.7C-136,-195.2,-68,-227.6,-4.6,-223.9C58.9,-220.3,117.8,-180.6,155,-128.8Z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                  <div className="blob-icon-wrapper">
                    <Settings />
                  </div>
                </div>
                <h5 className="font-weight-bold font-size-lg text-second mb-2">
                  Budgets
                </h5>
                <p className="mb-4 text-black-50">
                  Browse through the live previews to see just how powerful this
                  admin template really is!
                </p>
                <a
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="transition-base rounded-pill py-1 px-4 text-lowercase font-size-xs bg-neutral-warning text-warning d-inline-flex">
                  click for details
                </a>
              </Card>
            </Col>
            <Col md="6" xl="4">
              <Card className="card-box-hover-rise card-box-hover rounded-lg text-center p-3 p-xl-4 mb-5 d-block">
                <div className="d-130 object-skew hover-scale-sm icon-blob btn-icon text-success mx-auto">
                  <svg
                    className="blob-wrapper opacity-1"
                    viewBox="0 0 600 600"
                    xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(300,300)">
                      <path
                        d="M170.4,-137.2C213.2,-82.3,234.8,-11.9,223.6,56.7C212.4,125.2,168.5,191.9,104.3,226.6C40.2,261.3,-44.1,264,-104,229.8C-163.9,195.7,-199.4,124.6,-216.2,49.8C-233,-25.1,-231,-103.9,-191.9,-158C-152.7,-212.1,-76.4,-241.6,-6.3,-236.6C63.8,-231.6,127.7,-192.2,170.4,-137.2Z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                  <div className="blob-icon-wrapper">
                    <LifeBuoy />
                  </div>
                </div>
                <h5 className="font-weight-bold font-size-lg text-second mb-2">
                  Performance
                </h5>
                <p className="mb-4 text-black-50">
                  Browse through the live previews to see just how powerful this
                  admin template really is!
                </p>
                <a
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="transition-base rounded-pill py-1 px-4 text-lowercase font-size-xs bg-neutral-success text-success d-inline-flex">
                  click for details
                </a>
              </Card>
            </Col>
            <Col md="6" xl="4">
              <Card className="card-box-hover-rise card-box-hover rounded-lg text-center p-3 p-xl-4 mb-5 d-block">
                <div className="d-130 object-skew hover-scale-sm icon-blob btn-icon text-first mx-auto">
                  <svg
                    className="blob-wrapper opacity-1"
                    viewBox="0 0 600 600"
                    xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(300,300)">
                      <path
                        d="M171.2,-128.5C210.5,-87.2,223.2,-16.7,205.1,40.4C186.9,97.5,137.9,141.1,81.7,167.2C25.5,193.4,-38,202.1,-96.1,181.2C-154.1,160.3,-206.7,109.7,-217.3,52.7C-227.9,-4.4,-196.4,-68,-153.2,-110.2C-110,-152.4,-55,-173.2,5.5,-177.5C65.9,-181.9,131.9,-169.8,171.2,-128.5Z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                  <div className="blob-icon-wrapper">
                    <Briefcase />
                  </div>
                </div>
                <h5 className="font-weight-bold font-size-lg text-second mb-2">
                  Profiles
                </h5>
                <p className="mb-4 text-black-50">
                  Browse through the live previews to see just how powerful this
                  admin template really is!
                </p>
                <a
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="transition-base rounded-pill py-1 px-4 text-lowercase font-size-xs bg-neutral-first text-first d-inline-flex">
                  click for details
                </a>
              </Card>
            </Col>

            <Col md="6" xl="4">
              <Card className="card-box-hover-rise card-box-hover rounded-lg text-center p-3 p-xl-4 mb-5 d-block">
                <div className="d-130 object-skew hover-scale-sm icon-blob btn-icon text-info mx-auto">
                  <svg
                    className="blob-wrapper opacity-1"
                    viewBox="0 0 600 600"
                    xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(300,300)">
                      <path
                        d="M155,-128.8C192.2,-77,207.7,-13,197.7,50.9C187.7,114.8,152.2,178.6,96.7,208.2C41.1,237.9,-34.6,233.4,-102.6,204C-170.6,174.7,-231.1,120.6,-246.7,55.4C-262.4,-9.9,-233.2,-86.3,-184.6,-140.7C-136,-195.2,-68,-227.6,-4.6,-223.9C58.9,-220.3,117.8,-180.6,155,-128.8Z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                  <div className="blob-icon-wrapper">
                    <Activity />
                  </div>
                </div>
                <h5 className="font-weight-bold font-size-lg text-second mb-2">
                  Activity
                </h5>
                <p className="mb-4 text-black-50">
                  Browse through the live previews to see just how powerful this
                  admin template really is!
                </p>
                <a
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="transition-base rounded-pill py-1 px-4 text-lowercase font-size-xs bg-neutral-info text-info d-inline-flex">
                  click for details
                </a>
              </Card>
            </Col>
            <Col md="6" xl="4">
              <Card className="card-box-hover-rise card-box-hover rounded-lg text-center p-3 p-xl-4 mb-5 d-block">
                <div className="d-130 object-skew hover-scale-sm icon-blob btn-icon text-dark mx-auto">
                  <svg
                    className="blob-wrapper opacity-1"
                    viewBox="0 0 600 600"
                    xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(300,300)">
                      <path
                        d="M170.4,-137.2C213.2,-82.3,234.8,-11.9,223.6,56.7C212.4,125.2,168.5,191.9,104.3,226.6C40.2,261.3,-44.1,264,-104,229.8C-163.9,195.7,-199.4,124.6,-216.2,49.8C-233,-25.1,-231,-103.9,-191.9,-158C-152.7,-212.1,-76.4,-241.6,-6.3,-236.6C63.8,-231.6,127.7,-192.2,170.4,-137.2Z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                  <div className="blob-icon-wrapper">
                    <Grid />
                  </div>
                </div>
                <h5 className="font-weight-bold font-size-lg text-second mb-2">
                  Servers
                </h5>
                <p className="mb-4 text-black-50">
                  Browse through the live previews to see just how powerful this
                  admin template really is!
                </p>
                <a
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="transition-base rounded-pill py-1 px-4 text-lowercase font-size-xs bg-neutral-dark text-dark d-inline-flex">
                  click for details
                </a>
              </Card>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
}
