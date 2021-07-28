import React, { useState } from 'react';

import { Button } from 'reactstrap';

import LaddaButton, {
  EXPAND_LEFT,
  EXPAND_RIGHT,
  EXPAND_UP,
  EXPAND_DOWN,
  SLIDE_LEFT,
  SLIDE_RIGHT,
  SLIDE_UP,
  SLIDE_DOWN,
  ZOOM_IN,
  ZOOM_OUT
} from 'react-ladda';
export default function LivePreviewExample() {
  const [expLeft, setExpLeft] = useState(false);
  const [expRight, setExpRight] = useState(false);
  const [expUp, setExpUp] = useState(false);
  const [expDown, setExpDown] = useState(false);
  const [expSlideLeft, setExpSlideLeft] = useState(false);
  const [expSlideRight, setExpSlideRight] = useState(false);
  const [expSlideUp, setExpSlideUp] = useState(false);
  const [expSlideDown, setExpSlideDown] = useState(false);
  const [expZoomIn, setExpZoomIn] = useState(false);
  const [expZoomOut, setExpZoomOut] = useState(false);

  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Button color="primary" className="m-2 btn-spinner" disabled>
          <span
            className="btn-wrapper--icon spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"></span>
          <span className="sr-only">Loading...</span>
        </Button>
        <Button color="primary" className="m-2 btn-spinner" disabled>
          <span
            className="btn-wrapper--icon spinner-grow spinner-grow-sm"
            role="status"
            aria-hidden="true"></span>
          <span className="sr-only">Loading...</span>
        </Button>
        <Button color="primary" className="m-2 btn-spinner" disabled>
          <span
            className="btn-wrapper--icon spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"></span>
          <span className="btn-wrapper--label">Loading...</span>
        </Button>
        <Button color="primary" className="m-2 btn-spinner" disabled>
          <span
            className="btn-wrapper--icon spinner-grow spinner-grow-sm"
            role="status"
            aria-hidden="true"></span>
          <span className="btn-wrapper--label">Loading...</span>
        </Button>
      </div>
      <div className="divider my-3" />

      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <LaddaButton
          className="m-2 btn btn-primary"
          loading={expLeft}
          onClick={() => setExpLeft(!expLeft)}
          data-style={EXPAND_LEFT}>
          Expand Left
        </LaddaButton>

        <LaddaButton
          className="m-2 btn btn-primary"
          loading={expRight}
          onClick={() => setExpRight(!expRight)}
          data-style={EXPAND_RIGHT}>
          Expand Right
        </LaddaButton>

        <LaddaButton
          className="m-2 btn btn-primary"
          loading={expUp}
          onClick={() => setExpUp(!expUp)}
          data-style={EXPAND_UP}>
          Expand Up
        </LaddaButton>

        <LaddaButton
          className="m-2 btn btn-primary"
          loading={expDown}
          onClick={() => setExpDown(!expDown)}
          data-style={EXPAND_DOWN}>
          Expand Down
        </LaddaButton>
      </div>
      <div className="divider my-3" />
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <LaddaButton
          className="m-2 btn btn-primary"
          loading={expZoomIn}
          onClick={() => setExpZoomIn(!expZoomIn)}
          data-style={ZOOM_IN}>
          Zoom In
        </LaddaButton>

        <LaddaButton
          className="m-2 btn btn-primary"
          loading={expZoomOut}
          onClick={() => setExpZoomOut(!expZoomOut)}
          data-style={ZOOM_OUT}>
          Zoom Out
        </LaddaButton>
      </div>
      <div className="divider my-3" />
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <LaddaButton
          className="m-2 btn btn-primary"
          loading={expSlideLeft}
          onClick={() => setExpSlideLeft(!expSlideLeft)}
          data-style={SLIDE_LEFT}>
          Slide Left
        </LaddaButton>

        <LaddaButton
          className="m-2 btn btn-primary"
          loading={expSlideRight}
          onClick={() => setExpSlideRight(!expSlideRight)}
          data-style={SLIDE_RIGHT}>
          Slide Right
        </LaddaButton>

        <LaddaButton
          className="m-2 btn btn-primary"
          loading={expSlideUp}
          onClick={() => setExpSlideUp(!expSlideUp)}
          data-style={SLIDE_UP}>
          Slide Up
        </LaddaButton>

        <LaddaButton
          className="m-2 btn btn-primary"
          loading={expSlideDown}
          onClick={() => setExpSlideDown(!expSlideDown)}
          data-style={SLIDE_DOWN}>
          Slide Down
        </LaddaButton>
      </div>
    </>
  );
}
