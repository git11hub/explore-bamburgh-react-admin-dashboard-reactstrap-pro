import React from 'react';

import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <UncontrolledDropdown tag="span" className="m-2">
          <DropdownToggle size="sm" color="second" caret>
            Save
          </DropdownToggle>
          <DropdownMenu>
            <div role="menuitem">
              <a
                className="dropdown-item"
                href="#/"
                onClick={(e) => e.preventDefault()}>
                Action
              </a>
            </div>
            <div role="menuitem">
              <a
                className="dropdown-item"
                href="#/"
                onClick={(e) => e.preventDefault()}>
                Another action
              </a>
            </div>
            <div role="menuitem">
              <a
                className="dropdown-item"
                href="#/"
                onClick={(e) => e.preventDefault()}>
                Something else here
              </a>
            </div>
            <div className="divider dropdown-divider" />
            <div role="menuitem">
              <a
                className="dropdown-item"
                href="#/"
                onClick={(e) => e.preventDefault()}>
                Separated link
              </a>
            </div>
          </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown tag="span" className="m-2">
          <DropdownToggle color="second" caret>
            Save
          </DropdownToggle>
          <DropdownMenu>
            <div role="menuitem">
              <a
                className="dropdown-item"
                href="#/"
                onClick={(e) => e.preventDefault()}>
                Action
              </a>
            </div>
            <div role="menuitem">
              <a
                className="dropdown-item"
                href="#/"
                onClick={(e) => e.preventDefault()}>
                Another action
              </a>
            </div>
            <div role="menuitem">
              <a
                className="dropdown-item"
                href="#/"
                onClick={(e) => e.preventDefault()}>
                Something else here
              </a>
            </div>
            <div className="divider dropdown-divider" />
            <div role="menuitem">
              <a
                className="dropdown-item"
                href="#/"
                onClick={(e) => e.preventDefault()}>
                Separated link
              </a>
            </div>
          </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown tag="span" className="m-2">
          <DropdownToggle size="lg" color="second" caret>
            Save
          </DropdownToggle>
          <DropdownMenu>
            <div role="menuitem">
              <a
                className="dropdown-item"
                href="#/"
                onClick={(e) => e.preventDefault()}>
                Action
              </a>
            </div>
            <div role="menuitem">
              <a
                className="dropdown-item"
                href="#/"
                onClick={(e) => e.preventDefault()}>
                Another action
              </a>
            </div>
            <div role="menuitem">
              <a
                className="dropdown-item"
                href="#/"
                onClick={(e) => e.preventDefault()}>
                Something else here
              </a>
            </div>
            <div className="divider dropdown-divider" />
            <div role="menuitem">
              <a
                className="dropdown-item"
                href="#/"
                onClick={(e) => e.preventDefault()}>
                Separated link
              </a>
            </div>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    </>
  );
}
