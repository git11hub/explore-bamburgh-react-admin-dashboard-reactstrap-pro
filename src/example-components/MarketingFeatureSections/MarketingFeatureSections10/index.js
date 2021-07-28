import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Row,
  Col,
  Card,
  Container,
  Badge,
  ListGroup,
  ListGroupItem,
  Button
} from 'reactstrap';

import logo1 from '../../../assets/images/stock-logos/discord-icon.svg';
import logo2 from '../../../assets/images/stock-logos/google-icon.svg';
import logo3 from '../../../assets/images/stock-logos/spotify-icon.svg';
import logo4 from '../../../assets/images/stock-logos/slack-icon.svg';
import logo5 from '../../../assets/images/stock-logos/pinterest-icon.svg';

export default function LivePreviewExample() {
  return (
    <>
      <div className="rounded bg-white px-4 py-4 py-xl-5">
        <Container className="py-0 py-xl-4">
          <Row>
            <Col xl="6">
              <div className="pr-4 pr-xl-5 text-black">
                <h1 className="display-3 mb-3 font-weight-bold">
                  Bamburgh React Admin Dashboard with Reactstrap PRO
                </h1>
                <p className="font-size-xxl m-0 py-3 text-black-50">
                  350+ custom-made, beautiful components, widgets, pages,
                  dashboards and applications.
                </p>
                <p className="font-size-lg m-0 py-2 text-black opacity-7">
                  Browse through the live previews to see just how powerful this
                  admin template really is!
                </p>
                <div className="d-block mt-4">
                  <Button
                    color="first"
                    className="px-5 font-size-sm font-weight-bold btn-animated-icon text-uppercase rounded shadow-none py-3 hover-scale-sm hover-scale-lg mr-3">
                    <span className="btn-wrapper--label">Purchase now</span>
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                    </span>
                  </Button>
                </div>
              </div>
            </Col>
            <Col xl="6" className="d-flex align-items-center">
              <Card className="my-5 my-xl-0 bg-secondary object-skew hover-scale-lg shadow-xxl w-100 card-box">
                <ListGroup flush>
                  <ListGroupItem
                    tag="a"
                    action
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="d-flex align-items-center py-3">
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon mr-3 d-50">
                        <img
                          className="img-fit-container"
                          alt="..."
                          src={logo1}
                        />
                      </div>
                      <div>
                        <div className="font-weight-bold text-black">
                          Build React Interface
                        </div>
                        <div className="text-black-50">Development</div>
                      </div>
                    </div>
                    <div className="ml-auto">
                      <Badge
                        color="neutral-success"
                        className="text-success font-size-xs font-weight-normal py-1 h-auto px-3 badge-pill">
                        $3884
                      </Badge>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem
                    tag="a"
                    action
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="d-flex align-items-center py-3">
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon mr-3 d-50">
                        <img
                          className="img-fit-container"
                          alt="..."
                          src={logo2}
                        />
                      </div>
                      <div>
                        <div className="font-weight-bold text-black">
                          Create Ads Campaign
                        </div>
                        <div className="text-black-50">Marketing</div>
                      </div>
                    </div>
                    <div className="ml-auto">
                      <Badge
                        color="neutral-warning"
                        className="text-warning font-size-xs font-weight-normal py-1 h-auto px-3 badge-pill">
                        $8362
                      </Badge>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem
                    tag="a"
                    action
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="d-flex align-items-center py-3">
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon mr-3 d-50">
                        <img
                          className="img-fit-container"
                          alt="..."
                          src={logo3}
                        />
                      </div>
                      <div>
                        <div className="font-weight-bold text-black">
                          Resolve All Github Issues
                        </div>
                        <div className="text-black-50">Bugfixes</div>
                      </div>
                    </div>
                    <div className="ml-auto">
                      <Badge
                        color="neutral-success"
                        className="text-success font-size-xs font-weight-normal py-1 h-auto px-3 badge-pill">
                        $9385
                      </Badge>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem
                    tag="a"
                    action
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="d-flex align-items-center py-3">
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon mr-3 d-50">
                        <img
                          className="img-fit-container"
                          alt="..."
                          src={logo4}
                        />
                      </div>
                      <div>
                        <div className="font-weight-bold text-black">
                          Build UI for Angular
                        </div>
                        <div className="text-black-50">Development</div>
                      </div>
                    </div>
                    <div className="ml-auto">
                      <Badge
                        color="neutral-success"
                        className="text-success font-size-xs font-weight-normal py-1 h-auto px-3 badge-pill">
                        $1964
                      </Badge>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem
                    tag="a"
                    action
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="d-flex align-items-center py-3">
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon mr-3 d-50">
                        <img
                          className="img-fit-container"
                          alt="..."
                          src={logo5}
                        />
                      </div>
                      <div>
                        <div className="font-weight-bold text-black">
                          Create UI Designs
                        </div>
                        <div className="text-black-50">Marketing</div>
                      </div>
                    </div>
                    <div className="ml-auto">
                      <Badge
                        color="neutral-danger"
                        className="text-danger font-size-xs font-weight-normal py-1 h-auto px-3 badge-pill">
                        $5825
                      </Badge>
                    </div>
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
