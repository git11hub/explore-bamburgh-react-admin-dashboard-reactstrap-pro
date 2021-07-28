import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Button color="primary" className="m-2">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon icon={['far', 'building']} />
          </span>
          <span className="btn-wrapper--label">Left Icon</span>
        </Button>
        <Button color="first" className="m-2">
          <span className="btn-wrapper--label">Right Icon</span>
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon icon={['far', 'building']} />
          </span>
        </Button>
        <Button color="second" className="m-2">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon icon={['far', 'building']} />
          </span>
          <span className="btn-wrapper--label">Left/Right Icons</span>
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon icon={['far', 'building']} />
          </span>
        </Button>
        <Button color="info" className="m-2 btn-icon">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon icon={['far', 'building']} />
          </span>
        </Button>
      </div>
      <div className="divider my-3" />

      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Button color="success" className="btn-icon btn-pill d-40 p-0 m-2">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon
              icon={['far', 'building']}
              className="font-size-xs"
            />
          </span>
        </Button>
        <Button color="danger" className="btn-icon btn-pill d-50 p-0 m-2">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon
              icon={['far', 'building']}
              className="font-size-sm"
            />
          </span>
        </Button>
        <Button color="warning" className="btn-icon btn-pill d-60 p-0 m-2">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon
              icon={['far', 'building']}
              className="font-size-lg"
            />
          </span>
        </Button>
        <Button color="info" className="btn-icon btn-pill d-70 p-0 m-2">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon
              icon={['far', 'building']}
              className="font-size-lg"
            />
          </span>
        </Button>
        <Button color="dark" className="btn-icon btn-pill d-80 p-0 m-2">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon
              icon={['far', 'building']}
              className="font-size-xl"
            />
          </span>
        </Button>
        <Button color="second" className="btn-icon btn-pill d-90 p-0 m-2">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon
              icon={['far', 'building']}
              className="font-size-xxl"
            />
          </span>
        </Button>
      </div>
    </>
  );
}
