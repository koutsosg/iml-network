import {
  ButtonVariant,
  ButtonSize,
} from "@components/core-ui/Button/Button.types";

export const buttonStyles: Record<ButtonVariant, string> = {
  none: "",
  primary: "bg-blue-500 text-white hover:bg-blue-600",
  secondary: "bg-gray-500 text-white hover:bg-gray-600",
  danger: "bg-red-500 text-white hover:bg-red-600",
};

export const sizeStyles: Record<ButtonSize, string> = {
  none: "",
  small: "py-1 px-3 text-sm",
  medium: "py-2 px-4 text-base",
  large: "py-3 px-6 text-lg",
};
