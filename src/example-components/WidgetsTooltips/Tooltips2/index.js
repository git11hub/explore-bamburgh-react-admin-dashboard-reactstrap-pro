import React from 'react';

import { UncontrolledTooltip, Button } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Button color="primary" className="m-2" id="TooltipExampleBasicPrimary">
          Primary
        </Button>
        <UncontrolledTooltip
          trigger="hover"
          popperClassName="tooltip-primary"
          placement="top"
          container="body"
          target="TooltipExampleBasicPrimary">
          This tooltip example has a primary color state !
        </UncontrolledTooltip>

        <Button color="light" className="m-2" id="TooltipExampleBasicSecondary">
          Secondary
        </Button>
        <UncontrolledTooltip
          trigger="hover"
          popperClassName="tooltip-secondary"
          placement="top"
          container="body"
          target="TooltipExampleBasicSecondary">
          This tooltip example has a secondary color state !
        </UncontrolledTooltip>

        <Button color="first" className="m-2" id="TooltipExampleBasicFirst">
          Primary Alt
        </Button>
        <UncontrolledTooltip
          trigger="hover"
          popperClassName="tooltip-first"
          placement="top"
          container="body"
          target="TooltipExampleBasicFirst">
          This tooltip example has a first color state !
        </UncontrolledTooltip>

        <Button color="second" className="m-2" id="TooltipExampleBasicSecond">
          Secondary Alt
        </Button>
        <UncontrolledTooltip
          trigger="hover"
          popperClassName="tooltip-second"
          placement="top"
          container="body"
          target="TooltipExampleBasicSecond">
          This tooltip example has a second color state !
        </UncontrolledTooltip>

        <Button color="info" className="m-2" id="TooltipExampleBasicInfo">
          Info
        </Button>
        <UncontrolledTooltip
          trigger="hover"
          popperClassName="tooltip-info"
          placement="top"
          container="body"
          target="TooltipExampleBasicInfo">
          This tooltip example has a info color state !
        </UncontrolledTooltip>

        <Button color="success" className="m-2" id="TooltipExampleBasicSuccess">
          Success
        </Button>
        <UncontrolledTooltip
          trigger="hover"
          popperClassName="tooltip-success"
          placement="top"
          container="body"
          target="TooltipExampleBasicSuccess">
          This tooltip example has a success color state !
        </UncontrolledTooltip>

        <Button color="warning" className="m-2" id="TooltipExampleBasicWarning">
          Warning
        </Button>
        <UncontrolledTooltip
          trigger="hover"
          popperClassName="tooltip-warning"
          placement="top"
          container="body"
          target="TooltipExampleBasicWarning">
          This tooltip example has a warning color state !
        </UncontrolledTooltip>

        <Button color="danger" className="m-2" id="TooltipExampleBasicDanger">
          Danger
        </Button>
        <UncontrolledTooltip
          trigger="hover"
          popperClassName="tooltip-danger"
          placement="top"
          container="body"
          target="TooltipExampleBasicDanger">
          This tooltip example has a danger color state !
        </UncontrolledTooltip>

        <Button color="dark" className="m-2" id="TooltipExampleBasicDark">
          Dark
        </Button>
        <UncontrolledTooltip
          trigger="hover"
          popperClassName="tooltip-dark"
          placement="top"
          container="body"
          target="TooltipExampleBasicDark">
          This tooltip example has a dark color state !
        </UncontrolledTooltip>
      </div>
    </>
  );
}
