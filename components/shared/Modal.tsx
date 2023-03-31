import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import VisuallyHidden from "@reach/visually-hidden";

interface ModalPropsTypes {
  showModal: boolean;
  closeModal: () => void;
}

const Modal: React.FC<ModalPropsTypes> = ({
  children,
  showModal,
  closeModal,
}) => {
  return (
    <Dialog isOpen={showModal} onDismiss={closeModal}>
      <button className="close-button" onClick={closeModal}>
        <VisuallyHidden>Close</VisuallyHidden>
        <span aria-hidden>×</span>
      </button>
      {children}
    </Dialog>
  );
};

export { Modal };
