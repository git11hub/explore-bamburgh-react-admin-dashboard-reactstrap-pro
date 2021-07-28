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

import hero1 from '../../../assets/images/hero-bg/hero-1.jpg';

import MarketingHeaders1 from '../../MarketingHeaders/MarketingHeaders1';

import logo1 from '../../../assets/images/stock-logos/discord-icon.svg';
import logo2 from '../../../assets/images/stock-logos/google-icon.svg';
import logo3 from '../../../assets/images/stock-logos/spotify-icon.svg';
import logo4 from '../../../assets/images/stock-logos/slack-icon.svg';
import logo5 from '../../../assets/images/stock-logos/pinterest-icon.svg';

export default function LivePreviewExample() {
  return (
    <>
      <div className="hero-wrapper bg-composed-wrapper bg-second">
        <Container className="py-2">
          <MarketingHeaders1 />
        </Container>
        <div className="divider bg-white-5" />
        <div className="hero-wrapper--content">
          <div
            className="bg-composed-wrapper--image"
            style={{ backgroundImage: 'url(' + hero1 + ')' }}
          />
          <div className="bg-composed-wrapper--bg bg-premium-dark opacity-5" />
          <div className="bg-composed-wrapper--content">
            <Container className="z-over text-white py-0 py-xl-5">
              <Row className="py-5">
                <Col lg="6">
                  <div className="text-center text-lg-left py-0 pr-0 pr-xl-3 py-xl-5">
                    <div className="pr-0 pr-xl-5 text-white">
                      <h1 className="display-3 mb-3 font-weight-bold">
                        Bamburgh React Admin Dashboard with Reactstrap PRO
                      </h1>
                      <p className="font-size-xxl m-0 py-3 text-white-50">
                        350+ custom-made, beautiful components, widgets, pages,
                        dashboards and applications.
                      </p>
                      <p className="font-size-lg m-0 py-2 text-white opacity-7">
                        Browse through the live previews to see just how
                        powerful this admin template really is!
                      </p>
                      <div className="d-block mt-4">
                        <Button
                          color="first"
                          className="px-5 font-size-sm font-weight-bold btn-animated-icon text-uppercase rounded shadow-none py-3 hover-scale-sm hover-scale-lg mr-3">
                          <span className="btn-wrapper--label">
                            Purchase now
                          </span>
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg="6" className="d-flex align-items-center">
                  <Card className="bg-secondary m-5 m-lg-0 object-skew hover-scale-lg shadow-xxl w-100 card-box">
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
            <div className="shape-container-top-1 z-below">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="var(--light)"
                  fillOpacity="1"
                  d="M0,96L48,112C96,128,192,160,288,176C384,192,480,192,576,202.7C672,213,768,235,864,213.3C960,192,1056,128,1152,133.3C1248,139,1344,213,1392,250.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
