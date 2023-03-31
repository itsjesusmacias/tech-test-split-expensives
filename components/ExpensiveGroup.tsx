// Hooks
import { useState } from "react";
import { useBills } from "@/hooks/index";

import { NewBill } from "@/models/index";

import { Bill } from "@/models/index";

import { ExpensiveTable } from "./ExpensiveTable";
import { CreationForm } from "./CreationForm";
import { EditionForm } from "./EditionForm";

// Models
import { useModal } from "@/hooks/useModal";

const ExpensiveGroup = () => {
  const [selectedBill, setSelectedBill] = useState<Bill>();
  const { bills, addBill, removeBill, editBill } = useBills();

  const [showCreationModal, openCreationModal, closeCreationModal ] = useModal();
  const [showEditionModal, openEditionModal, closeEditionModal] = useModal();

  const onCloseEditionModal = () => {
    setSelectedBill(undefined);
    closeEditionModal()
  }

  const onOpenEditBill = ({ id }: { id: number }) => {
    const bill = bills.find((bill) => id === bill.id);
    setSelectedBill(bill);
    openEditionModal();
  };

  return (
    <>
      {showCreationModal && <CreationForm
        showModal={showCreationModal}
        handleAddBill={addBill}
        closeModal={closeCreationModal}
      />}
      {showEditionModal && <EditionForm
        bills={bills}
        closeModal={onCloseEditionModal}
        handleEditionBill={editBill}
        selectedBill={selectedBill}
        showModal={showEditionModal}
      />}

      <button onClick={openCreationModal}>Create</button>

      <ExpensiveTable
        rows={bills}
        onRemoveBill={removeBill}
        onOpenEditBill={onOpenEditBill}
      />
    </>
  );
};

export { ExpensiveGroup };
