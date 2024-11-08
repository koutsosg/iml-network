# Button Component Documentation

## Overview

The `Button` component is a reusable and flexible button element in React that supports various visual styles, sizes, and loading states. It can display a spinner during loading and allows for additional customization through class names.

## Props

| Prop Name          | Type                                         | Default        | Description                                                     |
| ------------------ | -------------------------------------------- | -------------- | --------------------------------------------------------------- |
| **variant**        | `"primary" , "secondary" , "danger", "none"` | `"primary"`    | The visual style of the button. See "Default Styles" below.     |
| **size**           | `"small" , "medium" , "large","none"`        | `"medium"`     | The size of the button. See "Default Styles" below.             |
| **isLoading**      | `boolean`                                    | `false`        | Whether the button shows a loading state.                       |
| **loadingText**    | `string`                                     | `"Loading..."` | Text to display when the button is loading.                     |
| **extraClasses**   | `string`                                     | `""`           | Additional classes for custom styling.                          |
| **spinner**        | `boolean`                                    | `false`        | Whether to show a spinner when loading.                         |
| **spinnerColor**   | `string` (HEX)                               | `"#FFF"`       | The color of the spinner.                                       |
| **spinnerClasses** | `string`                                     | `""`           | Additional classes for custom styling of the spinner.           |
| **children**       | `React.ReactNode`                            | N/A            | The content to display inside the button when it’s not loading. |
| **...props**       | `ButtonHTMLAttributes<HTMLButtonElement>`    | N/A            | Additional props passed to the underlying `<button>` element.   |

## Default Styles

### Button Variants

| Variant   | Default Style                                |
| --------- | -------------------------------------------- |
| primary   | `"bg-blue-500 text-white hover:bg-blue-600"` |
| secondary | `"bg-gray-500 text-white hover:bg-gray-600"` |
| danger    | `"bg-red-500 text-white hover:bg-red-600"`   |
| none      | `" "`                                        |

### Button Sizes

| Size   | Default Style           |
| ------ | ----------------------- |
| small  | `"py-1 px-3 text-sm"`   |
| medium | `"py-2 px-4 text-base"` |
| large  | `"py-3 px-6 text-lg"`   |
| none   | `" "`                   |

## Usage Example

```jsx
import Button from "@/app/components/primaryButton/Button";

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    // handle form submission logic
    setIsLoading(false);
  };

  return (
    <Button
      variant="primary"
      size="medium"
      isLoading={isLoading}
      loadingText="Signing in..."
      spinner
    >
      Sign In
    </Button>
  );
}
```

---

# Button Component Documentation

## Overview

The `Button` component is a reusable and flexible button element in React that supports various visual styles, sizes, and loading states. It can display a spinner during loading and allows for additional customization through class names.

## Props

- **variant** (`"primary" | "secondary" | "danger" | "none"`) - _Default:_ `"primary"`  
  The visual style of the button. See "Default Styles" below.

- **size** (`"small" | "medium" | "large"| "none"`) - _Default:_ `"medium"`  
  The size of the button. See "Default Styles" below.

- **isLoading** (`boolean`) - _Default:_ `false`  
  Whether the button shows a loading state.

- **loadingText** (`string`) - _Default:_ `"Loading..."`  
  Text to display when the button is loading.

- **extraClasses** (`string`) - _Default:_ `""`  
  Additional classes for custom styling.

- **spinner** (`boolean`) - _Default:_ `false`  
  Whether to show a spinner when loading.

- **spinnerColor** (`string` in HEX) - _Default:_ `"#FFF"`  
  The color of the spinner.

- **spinnerClasses** (`string`) - _Default:_ `""`  
  Additional classes for custom styling of the spinner.

- **children** (`React.ReactNode`)  
  The content to display inside the button when it’s not loading.

- **...props** (`ButtonHTMLAttributes<HTMLButtonElement>`)  
  Any additional props will be passed to the underlying `<button>` element.

## Default Styles

### Button Variants

- **primary**: `"bg-blue-500 text-white hover:bg-blue-600"`
- **secondary**: `"bg-gray-500 text-white hover:bg-gray-600"`
- **danger**: `"bg-red-500 text-white hover:bg-red-600"`
- **none**: `" "`

### Button Sizes

- **small**: `"py-1 px-3 text-sm"`
- **medium**: `"py-2 px-4 text-base"`
- **large**: `"py-3 px-6 text-lg"`
- **none**: `" "`

## Usage Example

```jsx
import Button from "@/app/components/primaryButton/Button";

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    // handle form submission logic
    setIsLoading(false);
  };

  return (
    <Button
      variant="primary"
      size="medium"
      isLoading={isLoading}
      loadingText="Signing in..."
      spinner
    >
      Sign In
    </Button>
  );
}
```

---
