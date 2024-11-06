import React from "react";
import classNames from "classnames";
import { SpinnerProps } from "./Spinner.types";
import { sizeStyles } from "./Spinner.styles";

export const Spinner = ({
  size = "medium",
  color = "white", // Default color
  extraClasses,
  ...props
}: SpinnerProps) => {
  const sizeClass = sizeStyles[size];

  const spinnerClasses = classNames(
    "border-black/20 border-spinner rounded-full animate-spin",
    sizeClass,
    extraClasses,
  );

  return (
    <div
      style={{ borderTopColor: color }}
      className={spinnerClasses}
      {...props}
    ></div>
  );
};
