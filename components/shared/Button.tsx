// Models
import { ButtonProps } from "@/models/index";

// Styles
import styles from "@/styles/Button.module.css";

const Button: React.FC<ButtonProps> = ({
  children,
  className = styles.primary,
  isDisabled,
  onClick,
  type,
}) => (
  <button
    className={className}
    disabled={isDisabled}
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
);

export { Button };
