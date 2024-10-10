"use client";

import {
  Dispatch,
  SetStateAction,
  useState,
  useCallback,
  useMemo,
} from "react";

export interface ModalProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

type ModalComponentType<T extends ModalProps> = (props: T) => JSX.Element;

export default function useModal<T extends ModalProps>(
  ModalComponent: ModalComponentType<T>,
  props?: any
) {
  const [showModal, setShowModal] = useState(false);

  const renderModal = useCallback(() => {
    return (
      <ModalComponent
        showModal={showModal}
        setShowModal={setShowModal}
        {...props}
      />
    );
  }, [showModal, setShowModal, props]);

  return useMemo(
    () => ({ Modal: renderModal, setShowModal, showModal }),
    [setShowModal, renderModal, showModal]
  );
}
