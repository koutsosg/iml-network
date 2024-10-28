import {
  buttonStyles,
  sizeStyles,
} from "@components/core-ui/Button/Button.styles";
import { ButtonProps } from "@components/core-ui/Button/Button.types";
import Spinner from "@components/core-ui/Spinner/Spinner";
import classNames from "classnames";

const Button: React.FC<ButtonProps> = ({
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
}) => {
  const variantClass = buttonStyles[variant];

  const sizeClass = sizeStyles[size];

  const buttonClasses = classNames(
    "capitalize inline-flex text-nowrap items-center justify-center font-medium rounded-md transition duration-150 ease-in-out ",
    variantClass,
    sizeClass,
    extraClasses
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
export default Button;
