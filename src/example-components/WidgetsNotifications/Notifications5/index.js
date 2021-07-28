import React from 'react';

import { Button } from 'reactstrap';

import { toast, Slide, Flip, Zoom } from 'react-toastify';
export default function LivePreviewExample() {
  const notify1 = () => {
    toast('Good evening, you lovely person!', { containerId: 'A' });
  };
  const notify2 = () => {
    toast.info('This library is built on top of React.', { containerId: 'C' });
  };
  const notify3 = () => {
    toast.success('Notification successfully opened!', { containerId: 'B' });
  };
  const notify4 = () => {
    toast.warn('Notification successfully opened.', { containerId: 'A' });
  };
  const notify5 = () => {
    toast.error('Warning! But not an error! Just a warning!', {
      containerId: 'B'
    });
  };
  const notify8 = () => {
    toast.success('Notification successfully opened.', {
      containerId: 'C',
      transition: Slide
    });
  };
  const notify6 = () => {
    toast.error('Whoops, something went wrong. Probably.', {
      containerId: 'A',
      transition: Flip
    });
  };
  const notify7 = () => {
    toast('Good evening, you lovely person!', {
      containerId: 'B',
      transition: Zoom
    });
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Button onClick={notify1} color="primary" className="m-2">
          Primary
        </Button>
        <Button onClick={notify2} color="info" className="m-2">
          Info
        </Button>
        <Button onClick={notify3} color="success" className="m-2">
          Success
        </Button>
        <Button onClick={notify4} color="warning" className="m-2">
          Warning
        </Button>
        <Button onClick={notify5} color="danger" className="m-2">
          Error
        </Button>
      </div>
      <div className="divider my-4" />
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Button onClick={notify6} color="primary" className="m-2">
          Slide
        </Button>
        <Button onClick={notify7} color="primary" className="m-2">
          Flip
        </Button>
        <Button onClick={notify8} color="primary" className="m-2">
          Zoom
        </Button>
      </div>
    </>
  );
}
