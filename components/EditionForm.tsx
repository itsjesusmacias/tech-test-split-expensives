// Components
import { PrimaryButton, TextField, Modal } from "@/components/shared/index";

// Hooks
import { useField, useBillsStorage } from "@/hooks/index";

// Utils
import { thereSomeEmptyString } from "@/utils/index";
import { Bill } from "../models";

const EditionForm: React.FC = ({
  showModal,
  handleEditionBill,
  closeModal,
  selectedBill,
}) => {
  const [author, handleAuthor, authorType] = useField({
    type: "text",
    initialValue: selectedBill.author,
  });
  const [description, handleDescription, descriptionType] = useField({
    type: "text",
    initialValue: selectedBill.description,
  });
  const [price, handlePrice, priceType] = useField({
    type: "number",
    initialValue: selectedBill.price,
  });

  const onEdit = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();

    const { id } = selectedBill;

    const updatedBill = {
      author,
      description,
      price,
      id
    }

    handleEditionBill(updatedBill);
    closeModal();
  };

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
        <PrimaryButton onClick={onEdit}>Edit</PrimaryButton>
      </form>
    </Modal>
  );
};

export { EditionForm };
