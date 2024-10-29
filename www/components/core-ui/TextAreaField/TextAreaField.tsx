"use client";
import React from "react";
import classNames from "classnames";
import styles from "@components/core-ui/TextAreaField/TextAreaField.module.scss";
import { TextAreaProps } from "./TextAreaField.types";

const TextAreaField: React.FC<TextAreaProps> = ({
  name,
  value,
  label,
  required = false,
  placeholder = "",
  wrapperClassName = "",
  textAreaClassName = "px-6 py-7 w-full",
  defaultValue,
  textAreaRef,
  rows = 4,
  cols,
  ...props
}) => {
  const textAreaClasses = classNames(
    "peer rounded-[8px] border bg-white leading-none focus:outline-none",
    styles.sr_textarea,
    textAreaClassName
  );

  return (
    <div className={`relative ${wrapperClassName}`}>
      <textarea
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
        defaultValue={defaultValue}
        ref={textAreaRef}
        rows={rows}
        cols={cols}
        className={textAreaClasses}
        {...props}
      />
      {label && (
        <label
          htmlFor={name}
          className="pointer-events-none absolute inset-x-6 top-1/2 -translate-y-1/2 text-[10px] leading-none transition-all peer-focus:top-[20px]"
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default TextAreaField;
