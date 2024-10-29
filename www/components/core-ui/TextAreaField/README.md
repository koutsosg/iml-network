# Reusable TextArea Component

The `TextAreaField` component is a customizable and reusable textarea input field designed for multi-line text inputs. It supports animated labels that float when the textarea is focused or contains text. Styling is managed with Tailwind CSS and CSS modules, making the component highly customizable.

## Features

- Multi-line text input with customizable rows and columns
- Optional floating label that animates on focus or when content is present
- Supports additional custom styling through CSS modules and Tailwind CSS
- Fully accessible with standard HTML attributes for textarea elements

## Usage

To use the `TextAreaField` component in your project, follow the example below:

### Basic Example

```jsx
import TextAreaField from "@/components/TextAreaField/TextAreaField";

const Example = () => {
  return (
    <div>
      <TextAreaField
        name="description"
        label="Description"
        placeholder="Enter a detailed description..."
      />
      <TextAreaField
        name="comments"
        label="Comments"
        placeholder="Leave your comments here..."
        rows={5}
      />
    </div>
  );
};
```

### Props

| Prop                | Type                                                | Default              | Description                                                                     |
| ------------------- | --------------------------------------------------- | -------------------- | ------------------------------------------------------------------------------- |
| `name`              | `string`                                            | `undefined`          | The name of the textarea, used for form submissions.                            |
| `value`             | `string`                                            | `undefined`          | The value of the textarea. Can be controlled or uncontrolled.                   |
| `label`             | `string`                                            | `undefined`          | A label for the textarea. Floats when the field is focused or contains a value. |
| `required`          | `boolean`                                           | `false`              | Sets whether the textarea is required.                                          |
| `placeholder`       | `string`                                            | `""`                 | Placeholder text for the textarea.                                              |
| `wrapperClassName`  | `string`                                            | `""`                 | Extra classes for the textarea wrapper (parent `div` element).                  |
| `textAreaClassName` | `string`                                            | `"px-6 py-7 w-full"` | Extra classes for the `textarea` element itself.                                |
| `rows`              | `number`                                            | `30`                 | Number of rows for the textarea.                                                |
| `cols`              | `number`                                            | `undefined`          | Number of columns for the textarea (optional).                                  |
| `textAreaRef`       | `React.RefObject<HTMLTextAreaElement>`              | `undefined`          | Ref object for the textarea element.                                            |
| `...props`          | `React.TextareaHTMLAttributes<HTMLTextAreaElement>` | N/A                  | Any additional standard textarea props.                                         |

### Example with Custom Styling and Label

This component supports custom styles and animated floating labels.

```jsx
<TextAreaField
  name="feedback"
  label="Feedback"
  placeholder="Provide your feedback"
  required
  wrapperClassName="mb-4"
  textAreaClassName="bg-gray-100 border border-gray-300"
/>
```

### Styling

The component uses Tailwind CSS utility classes alongside CSS modules. The CSS module (`TextAreaField.module.scss`) includes styles for animations, such as floating labels that move when the textarea is focused or populated.

Example of `TextAreaField.module.scss`:

```scss
.sr_textarea {
  &:not(:placeholder-shown) ~ label,
  &:focus ~ label {
    top: 20px;
  }
}
```

### Dependencies

- [Tailwind CSS](https://tailwindcss.com/) for utility-based styling.

The `TextAreaField` component is now ready to be integrated into your project with customizable styling and functionality tailored to handle multi-line text inputs effectively.
