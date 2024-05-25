import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

export const DeliveryConfirmationButton = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [confirmationshow, setConfirmationShow] = useState(false);

  const confirmationHandleClose = () => setConfirmationShow(false);
  const confirmationHandleShow = () => {
    handleClose(); // Zamyka pierwszy modal
    setConfirmationShow(true); // Pokazuje drugi modal
  };
  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Potwierdz dostarczenie zlecenia
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Czy napewno chcesz potwierdzić dostarczenie zlecenia?
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Nie
          </Button>
          <Button variant="primary" onClick={confirmationHandleShow}>
            Tak
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={confirmationshow} onHide={confirmationHandleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Potwierdzono dostarczenie zlecenia</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="primary" onClick={confirmationHandleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
