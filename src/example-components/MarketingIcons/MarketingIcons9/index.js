import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Container, Button } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <div className="rounded mb-5 bg-asteroid">
        <Container className="pt-5">
          <Row className="py-5">
            <Col lg="4">
              <div className="feature-box px-3 text-white mb-5">
                <div className="bg-strong-bliss text-center text-white font-size-xl d-50 rounded-circle">
                  <FontAwesomeIcon icon={['fas', 'birthday-cake']} />
                </div>
                <h3 className="font-size-lg font-weight-bold mt-4">Blocks</h3>
                <p className="text-white-50 mt-2">
                  Who are so beguiled and demoralized by the charms of pleasure.
                </p>
                <Button
                  size="sm"
                  outline
                  color="secondary"
                  className="btn-pill shadow-none mt-3">
                  Continue reading
                </Button>
              </div>
            </Col>
            <Col lg="4">
              <div className="feature-box px-3 text-white mb-5">
                <div className="bg-plum-plate text-center text-white font-size-xl d-50 rounded-circle">
                  <FontAwesomeIcon icon={['fas', 'bus-alt']} />
                </div>
                <h3 className="font-size-lg font-weight-bold mt-4">Pages</h3>
                <p className="text-white-50 mt-2">
                  Which toil and pain can procure him some great pleasure.
                </p>
                <Button
                  size="sm"
                  outline
                  color="secondary"
                  className="btn-pill shadow-none mt-3">
                  Continue reading
                </Button>
              </div>
            </Col>
            <Col lg="4">
              <div className="feature-box px-3 text-white mb-5">
                <div className="bg-arielle-smile text-center text-white font-size-xl d-50 rounded-circle">
                  <FontAwesomeIcon icon={['fas', 'eye-dropper']} />
                </div>
                <h3 className="font-size-lg font-weight-bold mt-4">Widgets</h3>
                <p className="text-white-50 mt-2">
                  To take a trivial example, which of us avoids pleasure, some
                  great pleasure.
                </p>
                <Button
                  size="sm"
                  outline
                  color="secondary"
                  className="btn-pill shadow-none mt-3">
                  Continue reading
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="rounded bg-vicious-stance">
        <Container className="pt-5">
          <Row className="py-5">
            <Col lg="6">
              <div className="feature-box text-white mb-5">
                <div className="bg-deep-blue text-center text-white font-size-xl d-50 rounded-circle">
                  <FontAwesomeIcon icon={['fas', 'bomb']} />
                </div>
                <h3 className="font-size-lg font-weight-bold mt-4">Widgets</h3>
                <p className="text-white-50 mt-2">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and account of
                  the system.
                </p>
                <Button
                  size="sm"
                  outline
                  color="secondary"
                  className="btn-pill shadow-none mt-1">
                  Continue reading
                </Button>
              </div>
            </Col>
            <Col lg="6">
              <div className="feature-box text-white mb-5">
                <div className="bg-grow-early text-center text-white font-size-xl d-50 rounded-circle">
                  <FontAwesomeIcon icon={['fas', 'network-wired']} />
                </div>
                <h3 className="font-size-lg font-weight-bold mt-4">
                  Components
                </h3>
                <p className="text-white-50 mt-2">
                  The master-builder of human happiness. No one rejects,
                  dislikes, or avoids pleasure itself, because it is pleasure.
                </p>
                <Button
                  size="sm"
                  outline
                  color="secondary"
                  className="btn-pill shadow-none mt-1">
                  Continue reading
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
