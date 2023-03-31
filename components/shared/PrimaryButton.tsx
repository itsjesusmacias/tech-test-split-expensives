// Components
import { Button } from "./Button";

// Styles
import styles from "@/styles/Button.module.css";

// Models
import { ButtonProps } from "@/models/index";

const PrimaryButton: React.FC<ButtonProps> = ({
  children,
  isDisabled,
  onClick,
  type,
}) => (
  <Button
    className={styles.primary}
    isDisabled={isDisabled}
    onClick={onClick}
    type={type}
  >
    {children}
  </Button>
);

export { PrimaryButton };
