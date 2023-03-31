import { useState } from "react";

type ReturnType = [boolean, () => void, () => void];

const useModal = (): ReturnType => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return [showModal, openModal, closeModal];
};

export { useModal };
