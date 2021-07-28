import React from 'react';

import { UncontrolledAlert } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <>
      <UncontrolledAlert color="primary">
        This is a primary alert with{' '}
        <a href="#/" onClick={(e) => e.preventDefault()} className="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </UncontrolledAlert>
      <UncontrolledAlert color="success">
        This is a success alert with{' '}
        <a href="#/" onClick={(e) => e.preventDefault()} className="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </UncontrolledAlert>
      <UncontrolledAlert color="danger">
        This is a danger alert with{' '}
        <a href="#/" onClick={(e) => e.preventDefault()} className="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </UncontrolledAlert>
      <UncontrolledAlert color="warning">
        This is a warning alert with{' '}
        <a href="#/" onClick={(e) => e.preventDefault()} className="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </UncontrolledAlert>
      <UncontrolledAlert color="info">
        This is a info alert with{' '}
        <a href="#/" onClick={(e) => e.preventDefault()} className="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </UncontrolledAlert>
      <UncontrolledAlert color="dark">
        This is a dark alert with{' '}
        <a href="#/" onClick={(e) => e.preventDefault()} className="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </UncontrolledAlert>
    </>
  );
}
