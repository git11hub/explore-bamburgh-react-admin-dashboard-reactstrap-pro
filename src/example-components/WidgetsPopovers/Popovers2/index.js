import React from 'react';

import { UncontrolledPopover, PopoverBody, Button } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Button color="primary" className="m-2" id="PopoverExampleColorPrimary">
          Primary
        </Button>
        <UncontrolledPopover
          popperClassName="popover-primary"
          trigger="hover"
          placement="top"
          target="PopoverExampleColorPrimary">
          <PopoverBody>
            This popover example has a primary background color !
          </PopoverBody>
        </UncontrolledPopover>

        <Button color="light" className="m-2" id="PopoverExampleColorSecondary">
          Secondary
        </Button>
        <UncontrolledPopover
          popperClassName="popover-secondary"
          trigger="hover"
          placement="top"
          target="PopoverExampleColorSecondary">
          <PopoverBody>
            This popover example has a secondary background color !
          </PopoverBody>
        </UncontrolledPopover>

        <Button color="first" className="m-2" id="PopoverExampleColorFirst">
          Primary Alt
        </Button>
        <UncontrolledPopover
          popperClassName="popover-first"
          trigger="hover"
          placement="top"
          target="PopoverExampleColorFirst">
          <PopoverBody>
            This popover example has a first background color !
          </PopoverBody>
        </UncontrolledPopover>

        <Button color="second" className="m-2" id="PopoverExampleColorSecond">
          Secondary Alt
        </Button>
        <UncontrolledPopover
          popperClassName="popover-second"
          trigger="hover"
          placement="top"
          target="PopoverExampleColorSecond">
          <PopoverBody>
            This popover example has a second background color !
          </PopoverBody>
        </UncontrolledPopover>

        <Button color="info" className="m-2" id="PopoverExampleColorInfo">
          Info
        </Button>
        <UncontrolledPopover
          popperClassName="popover-info"
          trigger="hover"
          placement="top"
          target="PopoverExampleColorInfo">
          <PopoverBody>
            This popover example has a info background color !
          </PopoverBody>
        </UncontrolledPopover>

        <Button color="success" className="m-2" id="PopoverExampleColorSuccess">
          Success
        </Button>
        <UncontrolledPopover
          popperClassName="popover-success"
          trigger="hover"
          placement="top"
          target="PopoverExampleColorSuccess">
          <PopoverBody>
            This popover example has a success background color !
          </PopoverBody>
        </UncontrolledPopover>

        <Button color="warning" className="m-2" id="PopoverExampleColorWarning">
          Warning
        </Button>
        <UncontrolledPopover
          popperClassName="popover-warning"
          trigger="hover"
          placement="top"
          target="PopoverExampleColorWarning">
          <PopoverBody>
            This popover example has a warning background color !
          </PopoverBody>
        </UncontrolledPopover>

        <Button color="danger" className="m-2" id="PopoverExampleColorDanger">
          Danger
        </Button>
        <UncontrolledPopover
          popperClassName="popover-danger"
          trigger="hover"
          placement="top"
          target="PopoverExampleColorDanger">
          <PopoverBody>
            This popover example has a danger background color !
          </PopoverBody>
        </UncontrolledPopover>

        <Button color="dark" className="m-2" id="PopoverExampleColorDark">
          Dark
        </Button>
        <UncontrolledPopover
          popperClassName="popover-dark"
          trigger="hover"
          placement="top"
          target="PopoverExampleColorDark">
          <PopoverBody>
            This popover example has a dark background color !
          </PopoverBody>
        </UncontrolledPopover>
      </div>
    </>
  );
}
