export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
  defaultValue?: string;
  required?: boolean;
  inputRef?: React.RefObject<HTMLInputElement>;
  wrapperClassName?: string;
  inputClassName?: string;
}
