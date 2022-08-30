import { AsModal, Card } from "./modal.e";

function Modal({ width, open, setOpen, children }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AsModal onClose={handleClose} isOpen={open}>
      <Card style={{ width: width }}>{children}</Card>
    </AsModal>
  );
}

export default Modal;
