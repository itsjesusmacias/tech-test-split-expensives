// Components
import { Button } from "./Button";

// Style
import styles from "@/styles/Button.module.css";

// Models
import { ButtonProps } from "@/models/index";

const SecondaryButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  isDisabled,
}) => (
  <Button
    className={styles.secondary}
    isDisabled={isDisabled}
    onClick={onClick}
  >
    {children}
  </Button>
);

export { SecondaryButton };
