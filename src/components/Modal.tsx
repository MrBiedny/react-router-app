import React from "react";
import styles from "./Modal.module.css";
import { useNavigate } from "react-router-dom";

interface ModalProps {
  children: React.ReactNode;
}

function Modal({ children }: ModalProps) {
  const navigate = useNavigate();

  function closeHandler() {
    navigate("..");
  }

  return (
    <>
      <div className={styles.backdrop} onClick={closeHandler} />
      <dialog open className={styles.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
