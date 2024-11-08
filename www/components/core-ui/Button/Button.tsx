import classNames from "classnames";
import { ButtonProps } from "./Button.types";
import { Spinner } from "@components/core-ui";
import { buttonStyles, sizeStyles } from "./Button.styles";

export const Button = ({
  variant = "primary",
  size = "medium",
  isLoading = false,
  loadingText = "Loading...",
  extraClasses = " ",
  spinner = false,
  spinnerColor = "#FFF",
  spinnerClasses = "",
  children,
  ...props
}: ButtonProps) => {
  const variantClass = buttonStyles[variant];

  const sizeClass = sizeStyles[size];

  const buttonClasses = classNames(
    "capitalize inline-flex text-nowrap items-center justify-center font-medium rounded-md transition duration-150 ease-in-out ",
    variantClass,
    sizeClass,
    extraClasses,
  );

  const renderContent = () =>
    isLoading ? (
      <div className="relative flex items-center justify-center">
        {spinner && (
          <Spinner
            size={size}
            color={spinnerColor}
            extraClasses={spinnerClasses}
          />
        )}
        <span className={classNames({ "sr-only": spinner })}>
          {loadingText}
        </span>
      </div>
    ) : (
      children
    );

  return (
    <button
      aria-busy={isLoading}
      aria-disabled={isLoading || props.disabled}
      className={buttonClasses}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {renderContent()}
    </button>
  );
};
