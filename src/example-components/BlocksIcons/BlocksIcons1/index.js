import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Card } from 'reactstrap';

import illustration1 from '../../../assets/images/illustrations/pack1/analysis.svg';
import illustration2 from '../../../assets/images/illustrations/pack1/businessman.svg';
import illustration3 from '../../../assets/images/illustrations/pack1/handshake.svg';
import illustration4 from '../../../assets/images/illustrations/pack1/moving.svg';

export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col md="6" lg="12" xl="6">
          <Card className="mb-5">
            <div className="p-4">
              <Row className="no-gutters">
                <Col md="3">
                  <img
                    alt="..."
                    className="img-fluid"
                    style={{ minHeight: '100px', maxHeight: '150px' }}
                    src={illustration1}
                  />
                </Col>
                <Col md="9" className="d-flex align-items-center">
                  <div>
                    <div className="font-size-lg font-weight-bold mb-1">
                      Informations
                    </div>
                    <p className="opacity-7 font-size-md mb-0">
                      Acccess this page in order to manage and customize all
                      aspects of your profile data and accounts.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="divider" />
            <a
              href="#/"
              onClick={(e) => e.preventDefault()}
              className="px-4 py-3 text-first btn btn-white shadow-none d-flex justify-content-between align-items-center">
              <div>Manage account</div>
              <FontAwesomeIcon icon={['fas', 'chevron-right']} />
            </a>
          </Card>
        </Col>
        <Col md="6" lg="12" xl="6">
          <Card className="mb-5">
            <div className="p-4">
              <Row className="no-gutters">
                <Col md="3">
                  <img
                    alt="..."
                    className="img-fluid"
                    style={{ minHeight: '100px', maxHeight: '150px' }}
                    src={illustration2}
                  />
                </Col>
                <Col md="9" className="d-flex align-items-center">
                  <div>
                    <div className="font-size-lg font-weight-bold mb-1">
                      Account Settings
                    </div>
                    <p className="opacity-7 font-size-md mb-0">
                      Control everything related to your profile and trading
                      accounts as shown in this page.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="divider" />
            <a
              href="#/"
              onClick={(e) => e.preventDefault()}
              className="px-4 py-3 text-first btn btn-white shadow-none d-flex justify-content-between align-items-center">
              <div>Manage settings</div>
              <FontAwesomeIcon icon={['fas', 'chevron-right']} />
            </a>
          </Card>
        </Col>
        <Col md="6" lg="12" xl="6">
          <Card className="mb-5">
            <div className="p-4">
              <Row className="no-gutters">
                <Col md="3">
                  <img
                    alt="..."
                    className="img-fluid"
                    style={{ minHeight: '100px', maxHeight: '150px' }}
                    src={illustration3}
                  />
                </Col>
                <Col md="9" className="d-flex align-items-center">
                  <div>
                    <div className="font-size-lg font-weight-bold mb-1">
                      Crypto Balance
                    </div>
                    <p className="opacity-7 font-size-md mb-0">
                      You can view, manage and customize your wallets and
                      balances from this wallets page.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="divider" />
            <a
              href="#/"
              onClick={(e) => e.preventDefault()}
              className="px-4 py-3 text-first btn btn-white shadow-none d-flex justify-content-between align-items-center">
              <div>Manage wallets</div>
              <FontAwesomeIcon icon={['fas', 'chevron-right']} />
            </a>
          </Card>
        </Col>
        <Col md="6" lg="12" xl="6">
          <Card className="mb-5">
            <div className="p-4">
              <Row className="no-gutters">
                <Col md="3">
                  <img
                    alt="..."
                    className="img-fluid"
                    style={{ minHeight: '100px', maxHeight: '150px' }}
                    src={illustration4}
                  />
                </Col>
                <Col md="9" className="d-flex align-items-center">
                  <div>
                    <div className="font-size-lg font-weight-bold mb-1">
                      Profile Verification
                    </div>
                    <p className="opacity-7 font-size-md mb-0">
                      Complete your profile verifications to take full advantage
                      of your account right away.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="divider" />
            <a
              href="#/"
              onClick={(e) => e.preventDefault()}
              className="px-4 py-3 text-first btn btn-white shadow-none d-flex justify-content-between align-items-center">
              <div>Complete verifications</div>
              <FontAwesomeIcon icon={['fas', 'chevron-right']} />
            </a>
          </Card>
        </Col>
      </Row>
    </>
  );
}
