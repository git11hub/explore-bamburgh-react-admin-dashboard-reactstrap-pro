import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Button
          color="success"
          className="btn-icon btn-animated-icon btn-transition-none btn-pill d-40 p-0 m-2">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon
              icon={['far', 'user-circle']}
              className="font-size-xs"
            />
          </span>
        </Button>
        <Button
          color="danger"
          className="btn-icon btn-animated-icon btn-transition-none btn-pill d-50 p-0 m-2">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon
              icon={['far', 'user-circle']}
              className="font-size-sm"
            />
          </span>
        </Button>
        <Button
          color="warning"
          className="btn-icon btn-animated-icon btn-transition-none btn-pill d-60 p-0 m-2">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon
              icon={['far', 'user-circle']}
              className="font-size-lg"
            />
          </span>
        </Button>
        <Button
          color="info"
          className="btn-icon btn-animated-icon btn-transition-none btn-pill d-70 p-0 m-2">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon
              icon={['far', 'user-circle']}
              className="font-size-lg"
            />
          </span>
        </Button>
        <Button
          color="dark"
          className="btn-icon btn-animated-icon btn-transition-none btn-pill d-80 p-0 m-2">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon
              icon={['far', 'user-circle']}
              className="font-size-xl"
            />
          </span>
        </Button>
        <Button
          color="second"
          className="btn-icon btn-animated-icon btn-transition-none btn-pill d-90 p-0 m-2">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon
              icon={['far', 'user-circle']}
              className="font-size-xxl"
            />
          </span>
        </Button>
      </div>
      <div className="divider my-3" />
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Button
          color="neutral-success"
          className="btn-icon btn-animated-icon btn-transition-none d-40 p-0 m-2">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon
              icon={['far', 'life-ring']}
              className="font-size-xs"
            />
          </span>
        </Button>
        <Button
          color="neutral-danger"
          className="btn-icon btn-animated-icon btn-transition-none d-50 p-0 m-2">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon
              icon={['far', 'life-ring']}
              className="font-size-sm"
            />
          </span>
        </Button>
        <Button
          color="neutral-warning"
          className="btn-icon btn-animated-icon btn-transition-none d-60 p-0 m-2">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon
              icon={['far', 'life-ring']}
              className="font-size-lg"
            />
          </span>
        </Button>
        <Button
          color="neutral-info"
          className="btn-icon btn-animated-icon btn-transition-none d-70 p-0 m-2">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon
              icon={['far', 'life-ring']}
              className="font-size-lg"
            />
          </span>
        </Button>
        <Button
          color="neutral-dark"
          className="btn-icon btn-animated-icon btn-transition-none d-80 p-0 m-2">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon
              icon={['far', 'life-ring']}
              className="font-size-xl"
            />
          </span>
        </Button>
        <Button
          color="neutral-second"
          className="btn-icon btn-animated-icon btn-transition-none d-90 p-0 m-2">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon
              icon={['far', 'life-ring']}
              className="font-size-xxl"
            />
          </span>
        </Button>
      </div>
    </>
  );
}
