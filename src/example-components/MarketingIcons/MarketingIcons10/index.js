import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card, Container, Button } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <Card className="p-4">
        <Container>
          <Row>
            <Col lg="6">
              <div className="feature-box my-5 text-center">
                <div className="bg-deep-blue text-white font-size-xl mx-auto d-50 rounded-circle">
                  <FontAwesomeIcon icon={['fas', 'bomb']} />
                </div>
                <h3 className="font-size-lg font-weight-bold mt-4">Widgets</h3>
                <p className="text-black-50 mt-2 px-2">
                  This admin template is a complete frontend solution for
                  easy-building applications or presentation websites. It&#39;s
                  fully responsive and designed by professional UI&#x2F;UX
                  designers and developers.
                </p>
                <Button size="sm" outline color="first" className="mt-1">
                  <span className="btn-wrapper--label">Learn more</span>
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                  </span>
                </Button>
              </div>
            </Col>
            <Col lg="6">
              <div className="feature-box my-5 text-center">
                <div className="bg-grow-early text-white font-size-xl mx-auto d-50 rounded-circle">
                  <FontAwesomeIcon icon={['fas', 'network-wired']} />
                </div>
                <h3 className="font-size-lg font-weight-bold mt-4">
                  Components
                </h3>
                <p className="text-black-50 mt-2 px-2">
                  This admin template is a complete frontend solution for
                  easy-building applications or presentation websites. It&#39;s
                  fully responsive and designed by professional UI&#x2F;UX
                  designers and developers.
                </p>
                <Button size="sm" outline color="first" className="mt-1">
                  <span className="btn-wrapper--label">Learn more</span>
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                  </span>
                </Button>
              </div>
            </Col>
            <Col lg="6">
              <div className="feature-box my-5 text-center">
                <div className="bg-strong-bliss text-white font-size-xl mx-auto d-50 rounded-circle">
                  <FontAwesomeIcon icon={['fas', 'birthday-cake']} />
                </div>
                <h3 className="font-size-lg font-weight-bold mt-4">Blocks</h3>
                <p className="text-black-50 mt-2 px-2">
                  This admin template is a complete frontend solution for
                  easy-building applications or presentation websites. It&#39;s
                  fully responsive and designed by professional UI&#x2F;UX
                  designers and developers.
                </p>
                <Button size="sm" outline color="first" className="mt-1">
                  <span className="btn-wrapper--label">Learn more</span>
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                  </span>
                </Button>
              </div>
            </Col>
            <Col lg="6">
              <div className="feature-box my-5 text-center">
                <div className="bg-plum-plate text-white font-size-xl mx-auto d-50 rounded-circle">
                  <FontAwesomeIcon icon={['fas', 'bus-alt']} />
                </div>
                <h3 className="font-size-lg font-weight-bold mt-4">Pages</h3>
                <p className="text-black-50 mt-2 px-2">
                  This admin template is a complete frontend solution for
                  easy-building applications or presentation websites. It&#39;s
                  fully responsive and designed by professional UI&#x2F;UX
                  designers and developers.
                </p>
                <Button size="sm" outline color="first" className="mt-1">
                  <span className="btn-wrapper--label">Learn more</span>
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                  </span>
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
}
