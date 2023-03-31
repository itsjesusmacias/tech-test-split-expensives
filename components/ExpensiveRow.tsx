import { Bill } from "../models";

export type ExpensiveRowProps = Omit<Bill, "id">;

import styles from "../styles/Bills.module.css";

const ExpensiveRow: React.FC<ExpensiveRowProps> = ({
  author,
  date,
  description,
  price,
  onRemoveBill,
  onOpenEditBill,
}) => {
  return (
    <tr className={styles.row}>
      <td className={styles.cell}>{date}</td>
      <td className={styles.cell}>{description}</td>
      <td className={styles.cell}>{price}</td>
      <td className={styles.cell}>{author}</td>
      <td className={styles.cell}>
        <button onClick={onRemoveBill}>x</button>
      </td>
      <td className={styles.cell}>
        <button onClick={onOpenEditBill}>Edit</button>
      </td>
    </tr>
  );
};

export { ExpensiveRow };
