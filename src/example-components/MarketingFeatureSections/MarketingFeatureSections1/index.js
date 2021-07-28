import React from 'react';

import { Row, Col, Container } from 'reactstrap';

import Slider from 'react-slick';
import illustration1 from '../../../assets/images/illustrations/pack2/financial_analyst.svg';
export default function LivePreviewExample() {
  return (
    <>
      <div className="feature-box py-3 py-xl-5">
        <Container className="py-3 py-xl-5">
          <Row>
            <Col xl="6">
              <div className="py-0 pb-5 py-xl-5">
                <div className="pr-0 pr-xl-5">
                  <h1 className="display-3 mb-3 font-weight-bold">
                    Bamburgh React Admin Dashboard with Reactstrap PRO
                  </h1>
                  <p className="font-size-lg text-black-50">
                    Browse through the live previews to see just how powerful
                    this admin template really is!
                  </p>
                </div>
                <div className="d-block mt-4">
                  <Slider
                    slidesToShow={2}
                    slidesToScroll={2}
                    dots={true}
                    className="slick-slider slider-dots-outside slick-slider-left">
                    <div>
                      <div className="feature-box pr-4">
                        <h3 className="font-size-lg font-weight-bold my-3">
                          <a
                            className="text-first"
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            title="">
                            Elements
                          </a>
                        </h3>
                        <p className="text-black-50 mb-3">
                          It takes a trivial example, which of us ever
                          undertakes.
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="feature-box pr-4">
                        <h3 className="font-size-lg font-weight-bold my-3">
                          <a
                            className="text-first"
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            title="">
                            Widgets
                          </a>
                        </h3>
                        <p className="text-black-50 mb-3">
                          Occur in which toil and pain can procure him some
                          great pleasure.
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="feature-box pr-4">
                        <h3 className="font-size-lg font-weight-bold my-3">
                          <a
                            className="text-first"
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            title="">
                            Components
                          </a>
                        </h3>
                        <p className="text-black-50 mb-3">
                          Nor again is there anyone who loves or pursues or
                          desires.
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="feature-box pr-4">
                        <h3 className="font-size-lg font-weight-bold my-3">
                          <a
                            className="text-first"
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            title="">
                            Pages
                          </a>
                        </h3>
                        <p className="text-black-50 mb-3">
                          On the other hand, we denounce with righteous
                          indignation.
                        </p>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </Col>
            <Col xl="6" className="d-none d-xl-flex align-items-center">
              <img alt="..." className="w-100" src={illustration1} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
