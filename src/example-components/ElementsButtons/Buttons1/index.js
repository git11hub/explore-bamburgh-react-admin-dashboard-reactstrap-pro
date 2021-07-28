import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Button color="primary" className="m-2">
          Button
        </Button>
        <Button color="primary" className="m-2">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon icon={['far', 'lightbulb']} />
          </span>
          <span className="btn-wrapper--label">Left icon</span>
        </Button>
        <Button color="primary" className="m-2">
          <span className="btn-wrapper--label">Right icon</span>
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon icon={['far', 'keyboard']} />
          </span>
        </Button>
        <Button color="primary" className="m-2">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon icon={['fas', 'cog']} />
          </span>
        </Button>
      </div>
      <div className="divider my-3" />
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Button size="sm" color="primary" className="m-2">
          Button
        </Button>
        <Button color="primary" className="m-2">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon icon={['far', 'lightbulb']} />
          </span>
          <span className="btn-wrapper--label">Left icon</span>
        </Button>
        <Button size="lg" color="primary" className="m-2">
          <span className="btn-wrapper--label">Right icon</span>
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon icon={['far', 'keyboard']} />
          </span>
        </Button>
      </div>
    </>
  );
}
