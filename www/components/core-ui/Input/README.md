# Reusable Input Component

This component is a fully customizable and reusable input field that handles various input types, including password fields with show/hide functionality. It also supports dynamic styling through Tailwind CSS and CSS modules.

## Features

- Supports multiple input types (`text`, `password`, `email`, etc.)
- Show/Hide password functionality for password fields
- Accepts custom classes for both wrapper and input
- Optional labels that animate when focused or when content is entered
- Fully customizable using Tailwind CSS classes and CSS Modules

## Usage

To use the input component in your project, follow the example below:

### Basic Example

```jsx
import Input from "@/app/components/Input/Input";

const Example = () => {
  return (
    <div>
      <Input
        type="text"
        name="username"
        label="Username"
        placeholder="Enter your username"
      />
      <Input
        type="password"
        name="password"
        label="Password"
        placeholder="Enter your password"
      />
    </div>
  );
};
```

### Props

| Prop               | Type                                          | Default              | Description                                                                                      |
| ------------------ | --------------------------------------------- | -------------------- | ------------------------------------------------------------------------------------------------ |
| `type`             | `string`                                      | `"text"`             | The type of the input field. Can be any valid input type like `"text"`, `"password"`, `"email"`. |
| `name`             | `string`                                      | `undefined`          | The name of the input field. Used for form submissions.                                          |
| `value`            | `string \| number`                            | `undefined`          | The value of the input field. Can be controlled or uncontrolled.                                 |
| `label`            | `string`                                      | `undefined`          | A label for the input. It will animate when the field is focused or contains a value.            |
| `required`         | `boolean`                                     | `false`              | Sets whether the input field is required.                                                        |
| `placeholder`      | `string`                                      | `""`                 | Placeholder text for the input field.                                                            |
| `wrapperClassName` | `string`                                      | `""`                 | Extra classes for the input wrapper (parent `div` element).                                      |
| `inputClassName`   | `string`                                      | `"px-6 py-4 w-full"` | Extra classes for the `input` element itself.                                                    |
| `...props`         | `React.InputHTMLAttributes<HTMLInputElement>` | N/A                  | Any additional standard input props.                                                             |

### Password Field with Show/Hide Toggle

This component comes with built-in support for toggling password visibility.

```jsx
<Input
  type="password"
  name="password"
  label="Password"
  placeholder="Enter your password"
/>
```

In this example:

- The password input field will display a button to toggle visibility (`show`/`hide`).

### Customizing with Classes

You can pass custom classes for both the input wrapper and the input itself. Use Tailwind CSS classes for easy customization.

```jsx
<Input
  type="email"
  name="email"
  label="Email"
  placeholder="Enter your email"
  wrapperClassName="mb-4"
  inputClassName="bg-gray-100 border border-gray-300"
/>
```

### Example with All Props

```jsx
<Input
  type="text"
  name="fullName"
  value="John Doe"
  label="Full Name"
  placeholder="Enter your full name"
  required
  wrapperClassName="mb-6"
  inputClassName="border border-blue-500 px-4 py-2"
/>
```

### Styling

The component uses a combination of Tailwind CSS utility classes and CSS modules. The CSS module (`input.module.scss`) includes styles for the input field animations, like the label floating up when the input is focused or contains a value.

Example of `input.module.scss`:

```scss
.sr_input {
  &:not(:placeholder-shown) ~ label,
  &:focus ~ label {
    top: 25%;
  }
}
```

### Customizing Button for Password Toggle

The password toggle button is rendered using the reusable `Button` component. You can customize the button style by passing additional `extraClasses`:

```jsx
<Button
  type="button"
  size="none"
  variant="none"
  extraClasses="absolute right-0 top-1/2 transform -translate-y-1/2 mr-4"
  onClick={handleClick}
>
  {showPassword ? "Show" : "Hide"}
</Button>
```

### Dependencies

- [Tailwind CSS](https://tailwindcss.com/) for utility-based styling.
- [CSS Modules](https://github.com/css-modules/css-modules) for scoped component-level styling.
