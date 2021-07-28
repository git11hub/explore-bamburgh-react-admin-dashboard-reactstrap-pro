import React, { useState } from 'react';

import { Row, Col, Card } from 'reactstrap';

import {
  BarLoader,
  CircleLoader,
  ClimbingBoxLoader,
  DotLoader,
  ScaleLoader,
  SyncLoader
} from 'react-spinners';
import BlockUi from 'react-block-ui';
export default function LivePreviewExample() {
  const [blocking, setBlocking] = useState(false);

  function toggleBlocking() {
    setBlocking(!blocking);
  }

  return (
    <>
      <Row>
        <Col md="6" xl="4">
          <div className="text-center mb-3">
            <button
              onClick={toggleBlocking}
              className="btn btn-sm btn-outline-primary m-2">
              Toogle block loading
            </button>
          </div>
          <Card className="card-box mb-5 text-center overflow-hidden">
            <BlockUi
              className="p-5"
              tag="div"
              blocking={blocking}
              loader={
                <CircleLoader color={'var(--first)'} loading={blocking} />
              }>
              <div className="font-weight-bold font-size-lg mb-2">
                {' '}
                Block loading example 1
              </div>
              <p className="text-black-50 mb-0">
                Click the buttons above to see this loader in action.
              </p>
            </BlockUi>
          </Card>
        </Col>
        <Col md="6" xl="4">
          <div className="text-center mb-3">
            <button
              onClick={toggleBlocking}
              className="btn btn-sm btn-outline-primary m-2">
              Toogle block loading
            </button>
          </div>
          <Card className="card-box mb-5 text-center overflow-hidden">
            <BlockUi
              className="p-5"
              tag="div"
              blocking={blocking}
              loader={
                <ScaleLoader color={'var(--success)'} loading={blocking} />
              }>
              <div className="font-weight-bold font-size-lg mb-2">
                {' '}
                Block loading example 1
              </div>
              <p className="text-black-50 mb-0">
                Click the buttons above to see this loader in action.
              </p>
            </BlockUi>
          </Card>
        </Col>
        <Col md="6" xl="4">
          <div className="text-center mb-3">
            <button
              onClick={toggleBlocking}
              className="btn btn-sm btn-outline-primary m-2">
              Toogle block loading
            </button>
          </div>

          <Card className="card-box mb-5 text-center overflow-hidden">
            <BlockUi
              className="p-5"
              tag="div"
              blocking={blocking}
              loader={<BarLoader color={'var(--danger)'} loading={blocking} />}>
              <div className="font-weight-bold font-size-lg mb-2">
                {' '}
                Block loading example 1
              </div>
              <p className="text-black-50 mb-0">
                Click the buttons above to see this loader in action.
              </p>
            </BlockUi>
          </Card>
        </Col>
        <Col md="6" xl="4">
          <div className="text-center mb-3">
            <button
              onClick={toggleBlocking}
              className="btn btn-sm btn-outline-primary m-2">
              Toogle block loading
            </button>
          </div>
          <Card className="card-box mb-5 text-center overflow-hidden">
            <BlockUi
              className="p-5 block-loading-overlay-dark"
              tag="div"
              blocking={blocking}
              loader={<SyncLoader color={'var(--white)'} loading={blocking} />}>
              <div className="font-weight-bold font-size-lg mb-2">
                {' '}
                Block loading example 1
              </div>
              <p className="text-black-50 mb-0">
                Click the buttons above to see this loader in action.
              </p>
            </BlockUi>
          </Card>
        </Col>
        <Col md="6" xl="4">
          <div className="text-center mb-3">
            <button
              onClick={toggleBlocking}
              className="btn btn-sm btn-outline-primary m-2">
              Toogle block loading
            </button>
          </div>
          <Card className="card-box mb-5 text-center overflow-hidden">
            <BlockUi
              className="p-5 block-loading-overlay-dark"
              tag="div"
              blocking={blocking}
              loader={
                <ClimbingBoxLoader color={'var(--white)'} loading={blocking} />
              }>
              <div className="font-weight-bold font-size-lg mb-2">
                {' '}
                Block loading example 1
              </div>
              <p className="text-black-50 mb-0">
                Click the buttons above to see this loader in action.
              </p>
            </BlockUi>
          </Card>
        </Col>
        <Col md="6" xl="4">
          <div className="text-center mb-3">
            <button
              onClick={toggleBlocking}
              className="btn btn-sm btn-outline-primary m-2">
              Toogle block loading
            </button>
          </div>
          <Card className="card-box mb-5 text-center overflow-hidden">
            <BlockUi
              className="p-5 block-loading-overlay-dark"
              tag="div"
              blocking={blocking}
              loader={<DotLoader color={'var(--white)'} loading={blocking} />}>
              <div className="font-weight-bold font-size-lg mb-2">
                {' '}
                Block loading example 1
              </div>
              <p className="text-black-50 mb-0">
                Click the buttons above to see this loader in action.
              </p>
            </BlockUi>
          </Card>
        </Col>
      </Row>
    </>
  );
}
