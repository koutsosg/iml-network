"use client";
import { useState } from "react";
import styles from "@components/core-ui/Input/Input.module.scss";
import classNames from "classnames";
import Button from "../Button/Button";
import { InputProps } from "./Input.types";

const Input: React.FC<InputProps> = ({
  type = "text",
  name,
  value,
  label,
  required = false,
  placeholder = "",
  wrapperClassName = "",
  inputClassName = "px-6 py-4 w-full",
  defaultValue,
  inputRef,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = type === "password" && showPassword ? "text" : type;

  const inputClasses = classNames(
    " peer rounded-[8px] border bg-white leading-none focus:outline-none",
    styles.sr_input,
    inputClassName
  );

  const handleClick = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className={`relative ${wrapperClassName}`}>
      <input
        type={inputType}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        required={required}
        defaultValue={defaultValue}
        ref={inputRef}
        className={inputClasses}
        {...props}
      />
      {type === "password" && (
        <Button
          type="button"
          size="none"
          variant="none"
          extraClasses="absolute right-0 top-1/2 transform -translate-y-1/2 mr-4"
          onClick={handleClick}
        >
          {showPassword ? "-_-" : "o.o"}
        </Button>
      )}
      {label && (
        <label
          htmlFor={name}
          className="pointer-events-none absolute inset-x-6 top-1/2 -translate-y-1/2 text-[10px] leading-none transition-all peer-focus:top-1/4"
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Input;
