import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge, UncontrolledTooltip, Button } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Button color="primary" className="m-3 badge-wrapper">
          <Badge
            color="success"
            className="badge-position badge-position--top-left badge-circle">
            New notifications
          </Badge>
          <FontAwesomeIcon icon={['far', 'bell']} />
          <Badge color="warning" className="ml-3">
            <b>23</b> New
          </Badge>
        </Button>
        <Button
          color="primary"
          className="badge-wrapper m-3"
          id="ExampleTooltip10">
          <Badge
            color="info"
            className="badge-position badge-position--top-center badge-circle">
            New notifications
          </Badge>
          <span>
            <FontAwesomeIcon icon={['far', 'keyboard']} />
          </span>
        </Button>
        <UncontrolledTooltip target="ExampleTooltip10">
          Tooltip example
        </UncontrolledTooltip>

        <Button
          color="primary"
          className="badge-wrapper m-3"
          id="ExampleTooltip11">
          <Badge
            color="info"
            className="badge-position badge-position--top-right badge-circle">
            New notifications
          </Badge>
          <span>
            <FontAwesomeIcon icon={['far', 'lightbulb']} />
          </span>
        </Button>
        <UncontrolledTooltip target="ExampleTooltip11">
          Tooltip example
        </UncontrolledTooltip>
      </div>

      <div className="divider my-3" />
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Button color="primary" className="m-3 badge-wrapper">
          <Badge
            color="warning"
            className="badge-position badge-position--top-left badge-circle-inner">
            New notifications
          </Badge>
          Button
        </Button>
        <Button color="primary" className="badge-wrapper m-3">
          <Badge
            color="danger"
            className="badge-position badge-position--top-center badge-circle-inner">
            New notifications
          </Badge>
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon icon={['far', 'keyboard']} />
          </span>
          <span className="btn-wrapper--label">Button</span>
        </Button>
        <Button color="primary" className="badge-wrapper m-3">
          <Badge
            color="danger"
            className="badge-position badge-position--top-right badge-circle-inner">
            New notifications
          </Badge>
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon icon={['far', 'lightbulb']} />
          </span>
          <span className="btn-wrapper--label">Button</span>
        </Button>
      </div>
      <div className="divider my-3" />
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Button color="primary" className="m-3 badge-wrapper">
          <Badge
            color="success"
            className="badge-position badge-position--bottom-left badge-circle">
            New notifications
          </Badge>
          <FontAwesomeIcon icon={['far', 'bell']} />
          <Badge color="warning" className="ml-3">
            <b>23</b> New
          </Badge>
        </Button>
        <Button
          color="primary"
          className="badge-wrapper m-3"
          id="TooltipExample34">
          <Badge
            color="info"
            className="badge-position badge-position--bottom-center badge-circle">
            New notifications
          </Badge>
          <span>
            <FontAwesomeIcon icon={['far', 'keyboard']} />
          </span>
        </Button>
        <UncontrolledTooltip target="TooltipExample34">
          Tooltip example
        </UncontrolledTooltip>
        <Button
          color="primary"
          className="badge-wrapper m-3"
          id="TooltipExample35">
          <Badge
            color="info"
            className="badge-position badge-position--bottom-right badge-circle">
            New notifications
          </Badge>
          <span>
            <FontAwesomeIcon icon={['far', 'lightbulb']} />
          </span>
        </Button>
        <UncontrolledTooltip target="TooltipExample35">
          Tooltip example
        </UncontrolledTooltip>
      </div>
      <div className="divider my-3" />
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Button color="primary" className="m-3 badge-wrapper">
          <Badge
            color="warning"
            className="badge-position badge-position--bottom-left badge-circle-inner">
            New notifications
          </Badge>
          Button
        </Button>
        <Button
          color="primary"
          className="badge-wrapper m-3"
          title="Tooltip example">
          <Badge
            color="info"
            className="badge-position badge-position--bottom-center badge-circle-inner">
            New notifications
          </Badge>
          <span>
            <FontAwesomeIcon icon={['far', 'keyboard']} />
          </span>
        </Button>
        <Button color="primary" className="badge-wrapper m-3">
          <Badge
            color="danger"
            className="badge-position badge-position--bottom-right badge-circle-inner">
            New notifications
          </Badge>
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon icon={['far', 'lightbulb']} />
          </span>
          <span className="btn-wrapper--label">Button</span>
        </Button>
      </div>
    </>
  );
}
