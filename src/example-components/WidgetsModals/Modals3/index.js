import React, { useState } from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function LivePreviewExample() {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);

  const toggle1 = () => setModal1(!modal1);
  const toggle2 = () => setModal2(!modal2);
  const toggle3 = () => setModal3(!modal3);
  const toggle4 = () => setModal4(!modal4);

  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Button
          color="primary"
          onClick={toggle1}
          className="shadow-none btn-gradient bg-strong-bliss m-2">
          Strong bliss
        </Button>
        <Modal
          zIndex={2000}
          centered
          isOpen={modal1}
          toggle={toggle1}
          contentClassName="modal-dark bg-strong-bliss">
          <ModalHeader toggle={toggle1}>Example modal</ModalHeader>
          <ModalBody>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="link" className="text-white" onClick={toggle1}>
              Close
            </Button>{' '}
            <Button color="primary" className="ml-auto" onClick={toggle1}>
              Save changes
            </Button>
          </ModalFooter>
        </Modal>

        <Button
          color="primary"
          onClick={toggle2}
          className="shadow-none btn-gradient bg-amy-crisp m-2">
          Amy crisp
        </Button>
        <Modal
          zIndex={2000}
          centered
          isOpen={modal2}
          toggle={toggle2}
          contentClassName="modal-dark bg-amy-crisp">
          <ModalHeader toggle={toggle2}>Example modal</ModalHeader>
          <ModalBody>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={toggle2}>
              Yes, I confirm
            </Button>
          </ModalFooter>
        </Modal>

        <Button
          color="primary"
          onClick={toggle3}
          className="shadow-none btn-gradient bg-warning m-2">
          Warning
        </Button>
        <Modal
          zIndex={2000}
          centered
          isOpen={modal3}
          toggle={toggle3}
          contentClassName="modal-dark bg-warning">
          <ModalHeader toggle={toggle3}>Example modal</ModalHeader>
          <ModalBody>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button className="secondary text-second ml-auto" onClick={toggle3}>
              Save
            </Button>
          </ModalFooter>
        </Modal>

        <Button
          color="primary"
          onClick={toggle4}
          className="shadow-none btn-gradient bg-plum-plate m-2">
          Plum plate
        </Button>
        <Modal
          zIndex={2000}
          centered
          isOpen={modal4}
          toggle={toggle4}
          contentClassName="modal-dark bg-plum-plate">
          <ModalHeader toggle={toggle4}>Example modal</ModalHeader>
          <ModalBody>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="second" onClick={toggle4}>
              Save changes
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}
