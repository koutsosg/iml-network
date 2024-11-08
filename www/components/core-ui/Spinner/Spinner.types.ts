import { HTMLAttributes } from "react";

export type SpinnerSize = "small" | "medium" | "large" | "none";

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  /** The size of the spinner.
   * "none": "",
   * "small": "w-4 h-4",
   * "medium": "w-6 h-6",
   * "large": "w-8 h-8",
   */
  size?: SpinnerSize;
  /** The color of the spinner. HEX */
  color?: string;
  /** Additional classes for custom styling. */
  extraClasses?: string;
}
