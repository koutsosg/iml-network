export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  wrapperClassName?: string;
  textAreaClassName?: string;
  textAreaRef?: React.RefObject<HTMLTextAreaElement>;
}
