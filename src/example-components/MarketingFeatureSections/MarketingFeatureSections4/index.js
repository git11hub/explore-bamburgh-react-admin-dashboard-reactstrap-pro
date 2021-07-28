import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Container, Badge, Button } from 'reactstrap';

import stock1 from '../../../assets/images/stock-photos/stock-1.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <div className="bg-light pt-4">
        <Container className="py-3">
          <Card className="shadow-xxl mb-5">
            <div className="p-3 p-xl-5">
              <div className="d-flex flex-xl-row flex-column align-items-center">
                <div className="feature-box-img shadow-xxl p-4 p-xl-0 mb-5 mb-xl-0">
                  <img src={stock1} className="img-fluid" alt="..." />
                </div>
                <div className="pl-0 pl-xl-5 py-0 py-xl-2 text-center text-xl-left">
                  <div className="mb-4">
                    <Badge pill color="success">
                      New Release
                    </Badge>
                    <h1 className="display-4 mt-3 font-weight-bold">
                      350+ custom-made, beautiful components, widgets, pages,
                      dashboards and applications.
                    </h1>
                    <div className="my-4">
                      <Button
                        color="primary"
                        className="mr-3 p-0 d-inline-block text-center d-50 btn-icon rounded"
                        title="Menu Example">
                        <FontAwesomeIcon icon={['far', 'building']} />
                      </Button>
                      <Button
                        color="success"
                        className="mr-3 p-0 d-inline-block text-center d-50 btn-icon rounded"
                        title="Menu Example">
                        <FontAwesomeIcon icon={['far', 'keyboard']} />
                      </Button>
                      <Button
                        color="danger"
                        className="p-0 d-inline-block text-center d-50 btn-icon rounded"
                        title="Menu Example">
                        <FontAwesomeIcon icon={['far', 'object-group']} />
                      </Button>
                    </div>
                    <p className="font-size-lg text-black-50">
                      This admin template is a complete frontend solution for
                      easy-building applications or presentation websites.
                      It&#39;s fully responsive and designed by professional
                      UI&#x2F;UX designers and developers.
                    </p>
                  </div>
                  <div className="mb-4 mb-xl-0">
                    <Button
                      tag="a"
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      size="lg"
                      color="primary"
                      className="d-block d-sm-inline-block">
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={['far', 'question-circle']} />
                      </span>
                      <span className="btn-wrapper--label">View Details</span>
                    </Button>
                    <Button
                      tag="a"
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      size="lg"
                      outline
                      color="second"
                      className="d-block d-sm-inline-block ml-0 mt-3 mt-sm-0 ml-sm-3"
                      title="View documentation">
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={['far', 'question-circle']} />
                      </span>
                      <span className="btn-wrapper--label">Documentation</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Container>
      </div>
    </>
  );
}
