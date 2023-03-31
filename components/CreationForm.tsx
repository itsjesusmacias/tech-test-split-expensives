import { Modal } from "./shared/Modal";

// Components
import { PrimaryButton, TextField } from "@/components/shared/index";

// Hooks
import { useField } from "@/hooks/index";

// Utils
import { thereSomeEmptyString } from "@/utils/index";

import { NewBill } from "@/models/bill.model";

interface CreactionPropsTypes {
  showModal: boolean;
  handleAddBill: (bill: NewBill) => void;
  closeModal: () => void;
}

const CreationForm: React.FC<CreactionPropsTypes> = ({
  showModal,
  handleAddBill,
  closeModal,
}) => {
  const [author, handleAuthor, authorType] = useField({ type: "text" });
  const [description, handleDescription, descriptionType ] = useField({ type: "text" });
  const [price, handlePrice, priceType] = useField({ type: "number" });

  const onCreate = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    if (isDisabled) return;

    const date = new Date().toUTCString();
    const priceNumber = +price;

    const bill = {
      author,
      description,
      price: priceNumber,
      date,
    };

    handleAddBill(bill);
    closeModal();
  };

  const isDisabled = thereSomeEmptyString(author, description, price);

  return (
    <Modal showModal={showModal} closeModal={closeModal}>
      <form>
        <TextField
          label="Author"
          type={authorType}
          name="author"
          onChange={handleAuthor}
          value={author}
        />
        <TextField
          label="Description"
          type={descriptionType}
          name="description"
          onChange={handleDescription}
          value={description}
        />
        <TextField
          label="Price"
          type={priceType}
          name="price"
          onChange={handlePrice}
          value={price}
          min="1"
        />
        <PrimaryButton isDisabled={isDisabled} onClick={onCreate}>
          Create
        </PrimaryButton>
      </form>
    </Modal>
  );
};

export { CreationForm };
