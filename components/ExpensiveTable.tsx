// Style
import styles from "../styles/Bills.module.css";

import { ExpensiveRow } from "./ExpensiveRow";

import { Bill } from "../models";

interface ExpensiveTableProps {
  rows: Array<Bill>;
  onRemoveBill: ({ id }: { id: number }) => void;
  onOpenEditBill: ({ id }: { id: number }) => void;
}

const ExpensiveTable: React.FC<ExpensiveTableProps> = ({
  rows,
  onRemoveBill,
  onEditBill,
  onOpenEditBill,
}) => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <tr className={styles.row}>
          <th className={styles.cell}>Date</th>
          <th className={styles.cell}>Description</th>
          <th className={styles.cell}>Price</th>
          <th className={styles.cell}>Author</th>
          <th className={styles.cell}>close</th>
          <th className={styles.cell}>edit</th>
        </tr>
        {rows.map(({ id, date, description, price, author }) => (
          <ExpensiveRow
            key={id}
            date={date}
            description={description}
            price={price}
            author={author}
            onRemoveBill={() => onRemoveBill({ id })}
            onOpenEditBill={() => onOpenEditBill({ id })}
          />
        ))}
      </table>
    </div>
  );
};

export { ExpensiveTable };
