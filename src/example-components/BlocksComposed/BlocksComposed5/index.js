import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row,
  Col,
  CardBody,
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Button,
  Progress
} from 'reactstrap';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar6 from '../../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <Card className="card-box mb-5">
        <ListGroup tag="div" flush>
          <ListGroupItem tag="div" className="p-0">
            <CardHeader className="bg-light">
              <div className="font-size-lg d-block text-truncate">
                <span className="text-black-50 pr-2">#34</span> Hackathon
              </div>
              <div className="ml-auto d-flex align-items-center align-content-center">
                <div className="avatar-wrapper-overlap">
                  <div className="avatar-icon-wrapper" title="Rodrigo Barrera">
                    <div className="avatar-icon">
                      <img alt="..." src={avatar1} />
                    </div>
                  </div>
                  <div className="avatar-icon-wrapper" title="Tobi Esparza">
                    <div className="avatar-icon">
                      <img alt="..." src={avatar6} />
                    </div>
                  </div>
                </div>

                <Button
                  color="first"
                  className="ml-3 d-40 btn-icon p-0 rounded-circle border-0">
                  <FontAwesomeIcon icon={['fas', 'plus']} />
                </Button>
              </div>
            </CardHeader>
            <CardBody>
              <Row>
                <Col lg="6" md="3">
                  <div className="text-center">
                    <span className="text-black-50 d-block">Users</span>
                    <b className="font-size-xxl">2,345</b>
                  </div>
                </Col>
                <Col lg="6" md="3">
                  <div className="text-center">
                    <span className="text-black-50 d-block">Revenue</span>
                    <b className="font-size-xxl">$9,693</b>
                  </div>
                </Col>
                <Col lg="12" md="6" className="align-box-row">
                  <div className="w-100 mt-3 mt-md-0">
                    <div className="mb-1 d-flex justify-content-between align-items-center">
                      <span className="text-black-50 pr-1">Progress:</span>
                      <span className="text-danger font-weight-bold font-size-sm">
                        100%
                      </span>
                    </div>
                    <Progress
                      color="danger"
                      value={43}
                      className="progress-sm progress-bar-rounded progress-animated-alt progress-bar-animated-alt"
                    />
                  </div>
                </Col>
              </Row>
            </CardBody>
          </ListGroupItem>
          <ListGroupItem tag="div" className="p-0">
            <CardHeader className="bg-light">
              <div className="font-size-lg d-block text-truncate">
                <span className="text-black-50 pr-2">#33</span> Gaming center
              </div>
              <div className="ml-auto d-flex align-items-center align-content-center">
                <div className="avatar-wrapper-overlap">
                  <div className="avatar-icon-wrapper" title="Karson Kline">
                    <div className="avatar-icon">
                      <img alt="..." src={avatar7} />
                    </div>
                  </div>
                </div>
                <Button
                  color="first"
                  className="ml-3 d-40 btn-icon p-0 rounded-circle border-0">
                  <FontAwesomeIcon icon={['fas', 'plus']} />
                </Button>
              </div>
            </CardHeader>
            <CardBody>
              <Row>
                <Col lg="6" md="3">
                  <div className="text-center">
                    <span className="text-black-50 d-block">Users</span>
                    <b className="font-size-xxl">1,466</b>
                  </div>
                </Col>
                <Col lg="6" md="3">
                  <div className="text-center">
                    <span className="text-black-50 d-block">Revenue</span>
                    <b className="font-size-xxl text-danger">$6,465</b>
                  </div>
                </Col>
                <Col lg="12" md="6" className="align-box-row">
                  <div className="w-100 mt-3 mt-md-0">
                    <div className="mb-1 d-flex justify-content-between align-items-center">
                      <span className="text-black-50 pr-1">Progress:</span>
                      <span className="text-warning font-weight-bold font-size-sm">
                        100%
                      </span>
                    </div>
                    <Progress
                      color="warning"
                      value={76}
                      className="progress-sm progress-bar-rounded progress-animated-alt progress-bar-animated-alt"
                    />
                  </div>
                </Col>
              </Row>
            </CardBody>
          </ListGroupItem>
          <ListGroupItem tag="div" className="p-0">
            <CardHeader className="bg-light">
              <div className="font-size-lg d-block text-truncate">
                <span className="text-black-50 pr-2">#34</span> Hackathon
              </div>
              <div className="ml-auto d-flex align-items-center align-content-center">
                <div className="avatar-wrapper-overlap">
                  <div className="avatar-icon-wrapper" title="Rodrigo Barrera">
                    <div className="avatar-icon">
                      <img alt="..." src={avatar1} />
                    </div>
                  </div>
                  <div className="avatar-icon-wrapper" title="Tobi Esparza">
                    <div className="avatar-icon">
                      <img alt="..." src={avatar6} />
                    </div>
                  </div>
                </div>

                <Button
                  color="first"
                  className="ml-3 d-40 btn-icon p-0 rounded-circle border-0">
                  <FontAwesomeIcon icon={['fas', 'plus']} />
                </Button>
              </div>
            </CardHeader>
            <CardBody>
              <Row>
                <Col md="6">
                  <div>
                    <span className="font-size-xl font-weight-bold">73%</span>
                  </div>
                  <Progress
                    value="73"
                    className="progress-bar-rounded progress-sm mb-2"
                    color="success"
                  />
                  <div className="text-dark">Orders</div>
                </Col>
                <Col md="6">
                  <div>
                    <span className="font-size-xl font-weight-bold">87%</span>
                  </div>
                  <Progress
                    value="87"
                    color="warning"
                    className="progress-bar-rounded progress-sm mb-2"
                  />
                  <div className="text-dark">Products</div>
                </Col>
              </Row>
            </CardBody>
          </ListGroupItem>
        </ListGroup>
      </Card>
    </>
  );
}
