import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Container } from 'reactstrap';

import illustration1 from '../../../assets/images/illustrations/pack2/online_shopping.svg';

export default function LivePreviewExample() {
  return (
    <>
      <div className="p-4 rounded bg-white">
        <Container>
          <Row>
            <Col xl="6" className="d-flex align-items-center">
              <div>
                <div className="badge bg-neutral-primary mb-4 text-primary h-auto py-2 px-3 font-size-xs badge-pill font-weight-normal">
                  Promo Campaign
                </div>
                <h1 className="display-4 mb-4">
                  Bamburgh React Admin Dashboard with Reactstrap PRO
                </h1>
                <p className="font-size-lg py-2 mb-0 text-black-50">
                  This admin template is a complete frontend solution for
                  easy-building applications or presentation websites. It&#39;s
                  fully responsive and designed by professional UI&#x2F;UX
                  designers and developers.
                </p>
                <Row className="mt-4">
                  <Col sm="6">
                    <div className="text-primary d-flex align-items-center mb-3">
                      <div className="d-30 rounded-pill btn-icon bg-neutral-primary mr-2">
                        <FontAwesomeIcon
                          icon={['fas', 'check']}
                          className="font-size-sm"
                        />
                      </div>
                      <span className="pt-1">300+ Components</span>
                    </div>
                    <div className="text-primary d-flex align-items-center">
                      <div className="d-30 rounded-pill btn-icon bg-neutral-primary mr-2">
                        <FontAwesomeIcon
                          icon={['fas', 'check']}
                          className="font-size-sm"
                        />
                      </div>
                      <span className="pt-1">UI Kit Included</span>
                    </div>
                  </Col>
                  <Col sm="6">
                    <div className="text-primary d-flex align-items-center mb-3">
                      <div className="d-30 rounded-pill btn-icon bg-neutral-primary mr-2">
                        <FontAwesomeIcon
                          icon={['fas', 'check']}
                          className="font-size-sm"
                        />
                      </div>
                      <span className="pt-1">Unlimited Options</span>
                    </div>
                    <div className="text-primary d-flex align-items-center">
                      <div className="d-30 rounded-pill btn-icon bg-neutral-primary mr-2">
                        <FontAwesomeIcon
                          icon={['fas', 'check']}
                          className="font-size-sm"
                        />
                      </div>
                      <span className="pt-1">Multiple Apps</span>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xl="6" className="d-none d-xl-flex">
              <img src={illustration1} className="img-fluid w-100" alt="..." />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
