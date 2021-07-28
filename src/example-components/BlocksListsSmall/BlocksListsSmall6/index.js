import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  CardBody,
  Card,
  CardHeader,
  Badge,
  ListGroup,
  ListGroupItem,
  UncontrolledTooltip,
  Button
} from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <Card className="card-box mb-5">
        <CardHeader className="bg-secondary">
          <div className="card-header--title">
            <h5 className="mb-0 py-2 font-weight-bold">Pricing Plans</h5>
          </div>
          <div className="card-header--actions">
            <Button
              size="sm"
              color="success"
              className="py-1 px-3 text-uppercase font-size-xs">
              Add new
            </Button>
          </div>
        </CardHeader>
        <CardBody className="p-0">
          <ListGroup flush className="my-3">
            <ListGroupItem className="list-group-item-action hover-show-hide-container d-flex justify-content-between align-items-center py-3 border-0">
              <Badge
                color="success"
                className="badge-circle mt-2 mr-2 align-self-start">
                Basic
              </Badge>
              <div className="font-weight-bold flex-grow-1">
                <div className="text-second font-size-lg">Basic</div>
                <span className="opacity-8">
                  <FontAwesomeIcon icon={['far', 'user']} className="mr-1" />
                  <b className="pr-1">3847</b>
                  subscribers
                </span>
              </div>
              <div className="text-right hover-hide-wrapper">
                <div className="font-weight-bold text-second">$176.00</div>
                <span className="opacity-7">per month</span>
              </div>
              <div className="text-right hover-show-wrapper">
                <Button
                  className="bg-white border-dark text-first d-40 rounded-circle btn-icon btn-animated-icon p-0 ml-1"
                  id="ViewDetailsTooltip1">
                  <FontAwesomeIcon
                    icon={['far', 'user']}
                    className="font-size-md mx-auto"
                  />
                </Button>
                <UncontrolledTooltip
                  target="ViewDetailsTooltip1"
                  popperClassName="tooltip-first"
                  container="body">
                  View details
                </UncontrolledTooltip>
                <Button
                  className="bg-white border-dark text-danger d-40 rounded-circle btn-icon btn-animated-icon p-0 ml-1"
                  id="RemoveTooltip1">
                  <FontAwesomeIcon
                    icon={['fas', 'times']}
                    className="font-size-md mx-auto"
                  />
                </Button>
                <UncontrolledTooltip
                  target="RemoveTooltip1"
                  popperClassName="tooltip-danger"
                  container="body">
                  Remove
                </UncontrolledTooltip>
              </div>
            </ListGroupItem>
            <ListGroupItem className="list-group-item-action hover-show-hide-container d-flex justify-content-between align-items-center py-3 border-0">
              <Badge
                color="danger"
                className="badge-circle mt-2 mr-2 align-self-start">
                Basic
              </Badge>
              <div className="font-weight-bold flex-grow-1">
                <div className="text-second font-size-lg">Premium</div>
                <span className="opacity-8">
                  <FontAwesomeIcon icon={['far', 'user']} className="mr-1" />
                  <b className="pr-1">346</b>
                  subscribers
                </span>
              </div>
              <div className="text-right hover-hide-wrapper">
                <div className="font-weight-bold text-second">$567.00</div>
                <span className="opacity-7">per month</span>
              </div>
              <div className="text-right hover-show-wrapper">
                <Button
                  className="bg-white border-dark text-first d-40 rounded-circle btn-icon btn-animated-icon p-0 ml-1"
                  id="ViewDetailsTooltip2">
                  <FontAwesomeIcon
                    icon={['far', 'user']}
                    className="font-size-md mx-auto"
                  />
                </Button>
                <UncontrolledTooltip
                  target="ViewDetailsTooltip2"
                  popperClassName="tooltip-first"
                  container="body">
                  View details
                </UncontrolledTooltip>
                <Button
                  className="bg-white border-dark text-danger d-40 rounded-circle btn-icon btn-animated-icon p-0 ml-1"
                  id="RemoveTooltip2">
                  <FontAwesomeIcon
                    icon={['fas', 'times']}
                    className="font-size-md mx-auto"
                  />
                </Button>
                <UncontrolledTooltip
                  target="RemoveTooltip2"
                  popperClassName="tooltip-danger"
                  container="body">
                  Remove
                </UncontrolledTooltip>
              </div>
            </ListGroupItem>
            <ListGroupItem className="list-group-item-action hover-show-hide-container d-flex justify-content-between align-items-center py-3 border-0">
              <Badge
                color="first"
                className="badge-circle mt-2 mr-2 align-self-start">
                Basic
              </Badge>
              <div className="font-weight-bold flex-grow-1">
                <div className="text-second font-size-lg">Ultra</div>
                <span className="opacity-8">
                  <FontAwesomeIcon icon={['far', 'user']} className="mr-1" />
                  <b className="pr-1">1,659</b>
                  subscribers
                </span>
              </div>
              <div className="text-right hover-hide-wrapper">
                <div className="font-weight-bold text-second">$893.00</div>
                <span className="opacity-7">per month</span>
              </div>
              <div className="text-right hover-show-wrapper">
                <Button
                  className="bg-white border-dark text-first d-40 rounded-circle btn-icon btn-animated-icon p-0 ml-1"
                  id="ViewDetailsTooltip3">
                  <FontAwesomeIcon
                    icon={['far', 'user']}
                    className="font-size-md mx-auto"
                  />
                </Button>
                <UncontrolledTooltip
                  target="ViewDetailsTooltip3"
                  popperClassName="tooltip-first"
                  container="body">
                  View details
                </UncontrolledTooltip>
                <Button
                  className="bg-white border-dark text-danger d-40 rounded-circle btn-icon btn-animated-icon p-0 ml-1"
                  id="RemoveTooltip3">
                  <FontAwesomeIcon
                    icon={['fas', 'times']}
                    className="font-size-md mx-auto"
                  />
                </Button>
                <UncontrolledTooltip
                  target="RemoveTooltip3"
                  popperClassName="tooltip-danger"
                  container="body">
                  Remove
                </UncontrolledTooltip>
              </div>
            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    </>
  );
}
