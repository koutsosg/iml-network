# Spinner Component Documentation

## Overview

The `Spinner` component is a simple, customizable loading indicator that can be used independently or as part of other components (like `Button`). It uses CSS for the spinning animation and supports various sizes and colors.

## Props

| Prop Name        | Type                             | Default    | Description                                                |
| ---------------- | -------------------------------- | ---------- | ---------------------------------------------------------- |
| **size**         | `"small", "medium"  , "large"`   | `"medium"` | The size of the spinner. See "Default Styles" below.       |
| **color**        | `string` (HEX)                   | `"white"`  | The color of the spinner's top border.                     |
| **extraClasses** | `string`                         | `""`       | Additional classes for custom styling.                     |
| **...props**     | `HTMLAttributes<HTMLDivElement>` | N/A        | Additional props passed to the underlying `<div>` element. |

## Default Styles

### Spinner Sizes

| Size   | Default Style |
| ------ | ------------- |
| small  | `"w-4 h-4"`   |
| medium | `"w-6 h-6"`   |
| large  | `"w-8 h-8"`   |

## Usage Example

```jsx
import Spinner from "@/app/components/spinner/Spinner";

export default function LoadingIndicator() {
  return (
    <Spinner
      size="large"
      color="#3498db" // light blue color
      extraClasses="m-4"
    />
  );
}
```

---

# Spinner Component Documentation

## Overview

The `Spinner` component is a simple, customizable loading indicator that can be used independently or as part of other components (like `Button`). It uses CSS for the spinning animation and supports various sizes and colors.

## Props

- **size** (`"small" | "medium" | "large"`) - _Default:_ `"medium"`  
  The size of the spinner. See "Default Styles" below.

- **color** (`string` in HEX) - _Default:_ `"white"`  
  The color of the spinner’s top border.

- **extraClasses** (`string`) - _Default:_ `""`  
  Additional classes for custom styling.

- **...props** (`HTMLAttributes<HTMLDivElement>`)  
  Any additional props will be passed to the underlying `<div>` element.

## Default Styles

### Spinner Sizes

- **small**: `"w-4 h-4"`
- **medium**: `"w-6 h-6"`
- **large**: `"w-8 h-8"`

## Usage Example

```jsx
import Spinner from "@/app/components/spinner/Spinner";

export default function LoadingIndicator() {
  return (
    <Spinner
      size="large"
      color="#3498db" // light blue color
      extraClasses="m-4"
    />
  );
}
```

---
