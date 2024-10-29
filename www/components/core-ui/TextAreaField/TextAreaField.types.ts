export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  required?: boolean;
  wrapperClassName?: string;
  textAreaClassName?: string;
  textAreaRef?: React.RefObject<HTMLTextAreaElement>;
}
