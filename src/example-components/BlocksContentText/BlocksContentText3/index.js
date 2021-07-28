import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row,
  Col,
  Card,
  Badge,
  ListGroup,
  ListGroupItem,
  Button,
  Progress
} from 'reactstrap';

import avatar6 from '../../../assets/images/avatars/avatar6.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <Card className="card-box mb-5">
        <div className="card-tr-actions">
          <Button
            color="link"
            className="btn-link-second p-0 font-size-xl text-second">
            <FontAwesomeIcon
              icon={['fas', 'ellipsis-h']}
              className="font-size-lg"
            />
          </Button>
        </div>
        <div className="d-flex justify-content-center px-4 py-4">
          <div className="text-center">
            <h6 className="font-weight-bold font-size-xxl mb-1 text-black">
              Profiles Content Cards
            </h6>
            <p className="text-black-50 font-size-lg mb-0">
              This is an example card that uses progress bars, icons and
              avatars.
            </p>
          </div>
        </div>
        <div className="divider" />
        <ListGroup flush>
          <ListGroupItem className="text-center text-md-left p-4 d-block d-md-flex justify-content-between align-items-start">
            <a
              href="#/"
              onClick={(e) => e.preventDefault()}
              className="avatar-icon-wrapper mr-0 mr-md-3">
              <div className="d-block p-0 avatar-icon-wrapper m-0 d-100">
                <Badge color="success" className="badge-circle p-top-a">
                  Online
                </Badge>
                <div className="rounded overflow-hidden">
                  <img alt="..." className="img-fluid" src={avatar6} />
                </div>
              </div>
            </a>
            <div className="d-flex flex-grow-1 pl-1 flex-column">
              <div className="d-flex flex-column flex-xl-row justify-content-between">
                <div>
                  <a
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="font-size-lg mx-0 my-3 my-xl-0 font-weight-bold p-0">
                    Trystan Russo
                  </a>
                  <div className="d-block d-md-flex align-items-center mt-1 mb-3">
                    <FontAwesomeIcon
                      icon={['far', 'envelope']}
                      className="mr-2"
                    />
                    <span className="text-black-50 pr-4">
                      russotry@russo.com
                    </span>

                    <FontAwesomeIcon
                      icon={['far', 'address-card']}
                      className="mr-2"
                    />
                    <span className="text-black-50 pr-4">Project Manager</span>

                    <FontAwesomeIcon icon={['far', 'map']} className="mr-2" />
                    <span className="text-black-50">San Francisco, USA</span>
                  </div>
                </div>
                <div className="divider mb-3 mb-xl-0" />
                <div className="pb-3 pt-1 py-xl-0">
                  <Button
                    color="primary"
                    size="sm"
                    className="shadow-none mr-2 text-uppercase font-size-xs font-weight-bold">
                    Chat
                  </Button>
                  <Button
                    size="sm"
                    color="neutral-primary"
                    className="text-uppercase font-size-xs font-weight-bold">
                    Profile
                  </Button>
                </div>
              </div>
              <Row className="d-flex align-items-center">
                <Col lg="6">
                  <p className="mb-0">
                    McClintock's eye for detail certainly helped narrow the
                    whereabouts.
                  </p>
                </Col>
                <Col lg="6">
                  <div className="d-flex flex-grow-1 align-items-center">
                    <div className="text-black-50">Progress</div>
                    <Progress
                      className="progress-bar-rounded flex-grow-1 progress-xs progress-animated-alt mx-2"
                      color="danger"
                      value="56"
                    />
                    <div className="font-weight-bold font-size-lg">56%</div>
                  </div>
                </Col>
              </Row>
            </div>
          </ListGroupItem>
          <ListGroupItem className="text-center text-md-left p-4 d-block d-md-flex justify-content-between align-items-start">
            <a
              href="#/"
              onClick={(e) => e.preventDefault()}
              className="mr-0 mr-md-3">
              <div className="avatar-icon-wrapper m-0 d-100">
                <Badge
                  color="danger"
                  className="badge-position badge-position--bottom-right badge-circle">
                  Offline
                </Badge>
                <div className="rounded overflow-hidden bg-neutral-danger font-size-lg text-center font-weight-bold text-danger d-flex justify-content-center flex-column">
                  <span>HS</span>
                </div>
              </div>
            </a>
            <div className="d-flex flex-grow-1 pl-1 flex-column">
              <div className="d-flex flex-column flex-xl-row justify-content-between">
                <div>
                  <a
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="font-size-lg mx-0 my-3 my-xl-0 font-weight-bold p-0">
                    Zara Wagstaff
                  </a>
                  <div className="d-block d-md-flex align-items-center mt-1 mb-3">
                    <FontAwesomeIcon
                      icon={['far', 'envelope']}
                      className="mr-2"
                    />
                    <span className="text-black-50 pr-4">zara@wags.com</span>

                    <FontAwesomeIcon
                      icon={['far', 'address-card']}
                      className="mr-2"
                    />
                    <span className="text-black-50 pr-4">UX Consultant</span>

                    <FontAwesomeIcon icon={['far', 'map']} className="mr-2" />
                    <span className="text-black-50">London, UK</span>
                  </div>
                </div>
                <div className="divider mb-3 mb-xl-0" />
                <div className="pb-3 pt-1 py-xl-0">
                  <Button
                    color="primary"
                    size="sm"
                    className="shadow-none mr-2 text-uppercase font-size-xs font-weight-bold">
                    Chat
                  </Button>
                  <Button
                    size="sm"
                    color="neutral-primary"
                    className="text-uppercase font-size-xs font-weight-bold">
                    Profile
                  </Button>
                </div>
              </div>
              <Row className="d-flex align-items-center">
                <Col lg="6">
                  <p className="mb-0">
                    A 1914 English translation by Harris Rackham reads.
                  </p>
                </Col>
                <Col lg="6">
                  <div className="d-flex flex-grow-1 align-items-center">
                    <div className="text-black-50">Progress</div>
                    <Progress
                      className="progress-bar-rounded flex-grow-1 progress-xs progress-animated-alt mx-2"
                      color="success"
                      value="89"
                    />
                    <div className="font-weight-bold font-size-lg">56%</div>
                  </div>
                </Col>
              </Row>
            </div>
          </ListGroupItem>
        </ListGroup>
      </Card>
    </>
  );
}
