export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  wrapperClassName?: string;
  inputClassName?: string;
}
