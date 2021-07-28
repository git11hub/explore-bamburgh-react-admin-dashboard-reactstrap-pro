import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Alert } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <Alert className="alerts-alternate" color="success">
        <div className="d-flex align-items-center align-content-start">
          <span className="font-size-lg d-block d-40 btn-icon mr-3 text-center bg-success text-white rounded-sm">
            <FontAwesomeIcon icon={['far', 'object-group']} />
          </span>
          <span>
            <strong className="d-block">Success!</strong> This is a success
            alert—check it out!
          </span>
        </div>
      </Alert>
      <Alert className="alerts-alternate" color="info">
        <div className="d-flex align-items-center align-content-start">
          <span className="font-size-lg d-block d-40 btn-icon mr-3 text-center bg-info text-white rounded-sm">
            <FontAwesomeIcon icon={['far', 'building']} />
          </span>
          <span>
            <strong className="d-block">Info!</strong> This is an info
            alert—check it out!
          </span>
        </div>
      </Alert>
      <Alert className="alerts-alternate" color="warning">
        <div className="d-flex align-items-center align-content-start">
          <span className="font-size-lg d-block d-40 btn-icon mr-3 text-center bg-warning text-white rounded-sm">
            <FontAwesomeIcon icon={['far', 'question-circle']} />
          </span>
          <span>
            <strong className="d-block">Warning!</strong> This is a warning
            alert—check it out!
          </span>
        </div>
      </Alert>
      <Alert className="alerts-alternate" color="danger">
        <div className="d-flex align-items-center align-content-start">
          <span className="font-size-lg d-block d-40 btn-icon mr-3 text-center bg-danger text-white rounded-sm">
            <FontAwesomeIcon icon={['far', 'keyboard']} />
          </span>
          <span>
            <strong className="d-block">Danger!</strong> This is an error
            alert—check it out!
          </span>
        </div>
      </Alert>
    </>
  );
}
