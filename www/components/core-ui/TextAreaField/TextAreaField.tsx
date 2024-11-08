import classNames from "classnames";
import { TextAreaProps } from "./TextAreaField.types";
import styles from "./TextAreaField.module.scss";

export const TextAreaField = ({
  name,
  label,
  wrapperClassName = "",
  textAreaClassName = "px-6 py-7 w-full",
  textAreaRef,
  rows = 4,
  cols,
  ...props
}: TextAreaProps) => {
  const textAreaClasses = classNames(
    "peer rounded-lg border bg-white leading-none focus:outline-none",
    styles.sr_textarea,
    textAreaClassName,
  );
  return (
    <div className={`relative ${wrapperClassName}`}>
      <textarea
        name={name}
        id={name}
        placeholder=""
        ref={textAreaRef}
        rows={rows}
        cols={cols}
        className={textAreaClasses}
        {...props}
      />
      {label && (
        <label
          htmlFor={name}
          className="pointer-events-none absolute inset-x-6 top-1/2 -translate-y-1/2 text-[10px] uppercase leading-none transition-all peer-focus:top-[20px]"
        >
          {label}
        </label>
      )}
    </div>
  );
};
