import React, { useState } from 'react';

import { Button } from 'reactstrap';

import SweetAlert from 'sweetalert2-react';
export default function LivePreviewExample() {
  const [show1, setShow1] = useState(false);
  const [message34, setMessage34] = useState(false);
  const [message33, setMessage33] = useState(false);
  const [message32, setMessage32] = useState(false);
  const [message1, setMessage1] = useState(false);
  const [message2, setMessage2] = useState(false);

  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Button
          className="m-2"
          color="success"
          onClick={() => setShow1({ show: true })}>
          Success
        </Button>
        <Button
          className="m-2"
          color="danger"
          onClick={() => setMessage34({ message34: true })}>
          Danger
        </Button>
        <Button
          className="m-2"
          color="info"
          onClick={() => setMessage32({ message32: true })}>
          Info
        </Button>
        <Button
          className="m-2"
          color="warning"
          onClick={() => setMessage33({ message33: true })}>
          Warning
        </Button>
      </div>

      <div className="divider my-4" />

      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Button
          className="m-2"
          color="primary"
          onClick={() => setMessage1({ message1: true })}>
          Basic
        </Button>
        <Button
          className="m-2"
          color="primary"
          onClick={() => setMessage2({ message2: true })}>
          Title and Text
        </Button>
      </div>

      <SweetAlert
        title="Bamburgh React Admin Dashboard with Reactstrap PRO"
        show={show1}
        text="Browse through the live previews to see just how powerful this admin template really is!"
        type="success"
      />

      <SweetAlert
        title="Bamburgh React Admin Dashboard with Reactstrap PRO"
        show={message34}
        text="Browse through the live previews to see just how powerful this admin template really is!"
        type="error"
      />

      <SweetAlert
        title="Bamburgh React Admin Dashboard with Reactstrap PRO"
        show={message32}
        text="Browse through the live previews to see just how powerful this admin template really is!"
        type="info"
      />

      <SweetAlert
        title="Bamburgh React Admin Dashboard with Reactstrap PRO"
        show={message33}
        text="Browse through the live previews to see just how powerful this admin template really is!"
        type="warning"
      />

      <SweetAlert
        title=""
        show={message1}
        text="Browse through the live previews to see just how powerful this admin template really is!"
      />

      <SweetAlert
        title="Bamburgh React Admin Dashboard with Reactstrap PRO"
        show={message2}
        text="Browse through the live previews to see just how powerful this admin template really is!"
      />
    </>
  );
}
