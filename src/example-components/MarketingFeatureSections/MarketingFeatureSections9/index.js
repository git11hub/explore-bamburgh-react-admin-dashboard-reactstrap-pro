import React from 'react';

import { Row, Col } from 'reactstrap';

import stock1 from '../../../assets/images/stock-photos/stock-6.jpg';
import stock2 from '../../../assets/images/stock-photos/stock-7.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <Row className="no-gutters">
        <Col xl="6" className="overflow-hidden d-flex">
          <a
            href="#/"
            onClick={(e) => e.preventDefault()}
            className="d-block w-100 hover-scale-rounded">
            <img src={stock1} className="img-fit-container" alt="..." />
          </a>
        </Col>
        <Col xl="6" className="bg-white d-flex align-items-center">
          <div className="p-4 p-lg-5">
            <h1 className="display-4 font-weight-bold mb-4">
              Bamburgh React Admin Dashboard with Reactstrap PRO
            </h1>
            <p className="font-size-xl text-black-50">
              This admin template is a complete frontend solution for
              easy-building applications or presentation websites. It&#39;s
              fully responsive and designed by professional UI&#x2F;UX designers
              and developers.
            </p>
            <div className="d-flex text-black-50 font-size-lg align-items-center flex-wrap mt-4">
              <div className="pr-5">
                <div className="display-4 font-weight-bold text-success pb-2">
                  +300
                </div>
                <div>components</div>
              </div>
              <div className="pr-5">
                <div className="display-4 font-weight-bold text-success pb-2">
                  +10
                </div>
                <div>applications</div>
              </div>
              <div className="pr-5">
                <div className="display-4 font-weight-bold text-success pb-2">
                  +90
                </div>
                <div>widgets</div>
              </div>
            </div>
          </div>
        </Col>
        <Col xl="6" className="bg-second d-flex align-items-center text-white">
          <div className="p-4 text-center p-lg-5">
            <h1 className="display-4 font-weight-bold mb-4">
              Bamburgh React Admin Dashboard with Reactstrap PRO
            </h1>
            <p className="font-size-xl text-white-50">
              This admin template is a complete frontend solution for
              easy-building applications or presentation websites. It&#39;s
              fully responsive and designed by professional UI&#x2F;UX designers
              and developers.
            </p>
            <div className="d-flex text-white-50 font-size-lg justify-content-center align-items-center flex-wrap mt-4">
              <div className="px-3 text-left">
                <div className="display-4 font-weight-bold text-warning pb-2">
                  +300
                </div>
                <div>components</div>
              </div>
              <div className="px-3 text-left">
                <div className="display-4 font-weight-bold text-warning pb-2">
                  +10
                </div>
                <div>applications</div>
              </div>
              <div className="px-3 text-left">
                <div className="display-4 font-weight-bold text-warning pb-2">
                  +90
                </div>
                <div>widgets</div>
              </div>
            </div>
          </div>
        </Col>
        <Col xl="6" className="overflow-hidden d-flex">
          <a
            href="#/"
            onClick={(e) => e.preventDefault()}
            className="d-block w-100 hover-scale-rounded">
            <img src={stock2} className="img-fit-container" alt="..." />
          </a>
        </Col>
      </Row>
    </>
  );
}
