import React from "react";

interface InputFieldProps {
  label: string;
  defaultValue?: string;
  required?: boolean;
  inputRef: React.RefObject<HTMLInputElement>;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  defaultValue,
  required,
  inputRef,
}) => {
  return (
    <label className="flex flex-col gap-2">
      {label}
      <input
        type="text"
        defaultValue={defaultValue}
        ref={inputRef}
        className="border border-gray-300 rounded p-2"
        required={required}
      />
    </label>
  );
};

export default InputField;
