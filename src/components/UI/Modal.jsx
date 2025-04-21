import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

const Modal = ({ children, onClose }) => {
  const dialogRef = useRef();

  useEffect(() => {
    const dialog = dialogRef.current;
    dialog.showModal();

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      dialog.close();
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return createPortal(
    <dialog
      ref={dialogRef}
      className="fixed inset-0 w-full max-w-md mx-auto my-8 p-6 rounded-lg shadow-lg backdrop:bg-black/50"
      onClick={(e) => {
        // Close when clicking on backdrop
        if (e.target === dialogRef.current) {
          onClose();
        }
      }}
    >
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
