import React from 'react';

import { Row, Col, Card, Button } from 'reactstrap';

import {
  BarLoader,
  BeatLoader,
  BounceLoader,
  CircleLoader,
  ClimbingBoxLoader
} from 'react-spinners';
export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col xl="6">
          <div className="d-flex flex-row align-items-center text-center flex-wrap justify-content-center">
            <div className="spinner-border m-2 text-primary">
              <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-border m-2 text-secondary">
              <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-border m-2 text-success">
              <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-border m-2 text-danger">
              <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-border m-2 text-warning">
              <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-border m-2 text-info">
              <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-border m-2 text-light">
              <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-border m-2 text-dark">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          <div className="divider my-4" />
          <div className="d-flex flex-row align-items-center text-center flex-wrap justify-content-center">
            <div className="spinner-grow m-2 text-primary">
              <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow m-2 text-secondary">
              <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow m-2 text-success">
              <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow m-2 text-danger">
              <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow m-2 text-warning">
              <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow m-2 text-info">
              <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow m-2 text-light">
              <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow m-2 text-dark">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </Col>
        <Col xl="6">
          <div className="d-flex flex-row align-items-center text-center flex-wrap justify-content-center">
            <div className="card rounded-sm card-box shadow-none p-2 m-2 align-items-center">
              <div className="spinner-border m-2 spinner-border-sm">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
            <div className="card rounded-sm card-box shadow-none p-2 m-2 align-items-center">
              <div className="spinner-grow m-2 spinner-grow-sm">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
            <div className="card rounded-sm card-box shadow-none p-2 m-2 align-items-center">
              <div
                className="spinner-border"
                style={{ width: '3rem', height: '3rem' }}>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
            <div className="card rounded-sm card-box shadow-none p-2 m-2 align-items-center">
              <div
                className="spinner-grow"
                style={{ width: '3rem', height: '3rem' }}>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
          <div className="divider my-4" />
          <div className="d-flex flex-row align-items-center text-center flex-wrap justify-content-center">
            <Button
              color="primary"
              className="m-2 d-flex align-items-center"
              disabled>
              <span className="spinner-border spinner-border-sm" />
              <span className="sr-only">Loading...</span>
            </Button>
            <Button
              color="primary"
              className="m-2 d-flex align-items-center"
              disabled>
              <span className="spinner-border spinner-border-sm mr-1" />
              Loading...
            </Button>
            <Button
              color="primary"
              className="m-2 d-flex align-items-center"
              disabled>
              <span className="spinner-grow spinner-grow-sm" />
              <span className="sr-only">Loading...</span>
            </Button>
            <Button
              color="primary"
              className="m-2 d-flex align-items-center"
              disabled>
              <span className="spinner-grow spinner-grow-sm mr-1" />
              Loading...
            </Button>
          </div>
        </Col>
      </Row>

      <div className="divider my-4" />

      <div className="d-flex flex-row text-center align-items-center flex-wrap justify-content-center">
        <Card className="rounded-sm card-box shadow-none p-3 m-3">
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ width: '150px', height: '80px' }}>
            <BarLoader color={'var(--danger)'} loading={true} />
          </div>
          <p className="mb-0 pt-3 text-black-50 text-center">Danger</p>
        </Card>

        <Card className="rounded-sm card-box shadow-none p-3 m-3">
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ width: '150px', height: '80px' }}>
            <BeatLoader color={'var(--first)'} loading={true} />
          </div>
          <p className="mb-0 pt-3 text-black-50 text-center">First</p>
        </Card>

        <Card className="rounded-sm card-box shadow-none p-3 m-3">
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ width: '150px', height: '80px' }}>
            <BounceLoader color={'var(--success)'} loading={true} />
          </div>
          <p className="mb-0 pt-3 text-black-50 text-center">Success</p>
        </Card>

        <Card className="rounded-sm card-box shadow-none p-3 m-3">
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ width: '150px', height: '80px' }}>
            <CircleLoader color={'var(--warning)'} loading={true} />
          </div>
          <p className="mb-0 pt-3 text-black-50 text-center">Warning</p>
        </Card>

        <Card className="rounded-sm card-box shadow-none p-3 m-3">
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ width: '150px', height: '80px' }}>
            <ClimbingBoxLoader color={'var(--info)'} loading={true} />
          </div>
          <p className="mb-0 pt-3 text-black-50 text-center">Info</p>
        </Card>
      </div>
    </>
  );
}
