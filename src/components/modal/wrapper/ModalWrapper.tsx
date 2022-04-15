import { FC, MouseEvent, ReactNode } from "react";

import styles from "./ModalWrapper.module.css";

export type ModalWrapperProps = {
  hideModal: Function;
  isModalOpened: boolean;
  children: ReactNode;
};

const ModalWrapper: FC<ModalWrapperProps> = ({
  children,
  hideModal,
  isModalOpened,
}) => {
  const hideModalPanel = () => {
    if (hideModal) {
      hideModal();
    }
  };

  const stop = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      onMouseDown={hideModalPanel}
      className={
        isModalOpened ? styles.modal + " " + styles.visible : styles.modal
      }
    >
      <div
        onMouseDown={stop}
        className={
          isModalOpened
            ? styles.modal__wrapper + " " + styles.visible
            : styles.modal__wrapper
        }
      >
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
