import React from "react";

export type ButtonProps = {
  className?: string;
  isDisabled?: boolean;
  onClick?: (evt: React.MouseEvent<HTMLElement>) => void;
  type?: "submit" | "button" | "password",
};
