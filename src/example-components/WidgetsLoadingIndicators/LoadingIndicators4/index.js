import React from 'react';

import { Row, Col, CardBody, Card, CardHeader } from 'reactstrap';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
export default function LivePreviewExample() {
  return (
    <>
      <Row>
        <Col xl="4">
          <Card className="card-box mb-5">
            <CardHeader>
              <div className="card-header--title">Line skeleton loading</div>
            </CardHeader>
            <CardBody>
              <Skeleton count={8} />
            </CardBody>
          </Card>
          <Card className="card-box mb-5">
            <CardHeader>
              <div className="card-header--title">
                Skeleton with custom colors
              </div>
            </CardHeader>
            <CardBody>
              <SkeletonTheme color="#f0f0f0" highlightColor="#fff">
                <p>
                  <Skeleton duration={1} />
                </p>
                <p>
                  <Skeleton duration={2} />
                </p>
                <p>
                  <Skeleton duration={3} />
                </p>
                <p className="mb-0">
                  <Skeleton duration={4} />
                </p>
              </SkeletonTheme>
            </CardBody>
          </Card>
        </Col>
        <Col xl="4">
          <Card className="card-box mb-5">
            <CardHeader>
              <div className="card-header--title">Custom settings skeleton</div>
            </CardHeader>
            <CardBody>
              <Skeleton count={4} height={32} />
            </CardBody>
          </Card>
          <Card className="card-box mb-5">
            <CardHeader>
              <div className="card-header--title">Custom circle skeleton</div>
            </CardHeader>
            <CardBody>
              <span className="p-1">
                <Skeleton circle={true} height={80} width={80} />
              </span>
              <span className="p-1">
                <Skeleton circle={true} height={80} width={80} />
              </span>
              <span className="p-1">
                <Skeleton circle={true} height={80} width={80} />
              </span>
              <span className="p-1">
                <Skeleton circle={true} height={80} width={80} />
              </span>
            </CardBody>
          </Card>
        </Col>
        <Col xl="4">
          <Card className="card-box mb-5">
            <CardHeader>
              <div className="card-header--title">Article skeleton example</div>
            </CardHeader>
            <CardBody>
              <p>
                <Skeleton circle={true} height={84} width={84} />
              </p>
              <p className="mb-2">
                <Skeleton width={287} />
              </p>
              <p className="mb-2">
                <Skeleton width={295} />
              </p>
              <p className="mb-2">
                <Skeleton width={290} />
              </p>
              <p className="mb-2">
                <Skeleton width={305} />
              </p>
              <p className="mb-2">
                <Skeleton width={320} />
              </p>
            </CardBody>
          </Card>
          <Card className="card-box mb-5">
            <CardHeader>
              <div className="card-header--title">Circle skeleton loading</div>
            </CardHeader>
            <CardBody>
              <span className="p-1">
                <Skeleton circle={true} height={38} width={38} />
              </span>
              <span className="p-1">
                <Skeleton circle={true} height={38} width={38} />
              </span>
              <span className="p-1">
                <Skeleton circle={true} height={38} width={38} />
              </span>
              <span className="p-1">
                <Skeleton circle={true} height={38} width={38} />
              </span>
              <span className="p-1">
                <Skeleton circle={true} height={38} width={38} />
              </span>
              <span className="p-1">
                <Skeleton circle={true} height={38} width={38} />
              </span>
              <span className="p-1">
                <Skeleton circle={true} height={38} width={38} />
              </span>
              <span className="p-1">
                <Skeleton circle={true} height={38} width={38} />
              </span>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
