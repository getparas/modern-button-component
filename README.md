# Modern Button Component

A beautiful, accessible, and highly customizable button component built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 **8 Beautiful Variants** - Primary, Secondary, Destructive, Outline, Ghost, Link, Success, Warning
- 📏 **5 Different Sizes** - From small to extra large, plus icon-only
- ⚡ **Loading States** - Built-in loading spinner
- ♿ **Fully Accessible** - ARIA compliant with keyboard navigation
- 🎯 **TypeScript Support** - Full type safety
- 🎭 **Icon Support** - Left and right icon positioning
- 🌙 **Dark Mode Ready** - Automatic dark mode support
- 📱 **Responsive** - Works perfectly on all devices
- 🚀 **Modern Animations** - Smooth transitions and hover effects

## Installation

Clone the GitHub repository and install dependencies:

```bash
git clone https://github.com/your-username/react-tailwind-button-kit.git
cd react-tailwind-button-kit
npm install
```

## Usage

```tsx
import { Button } from 'modern-button-component';
import { Plus, Download } from 'lucide-react';

function App() {
  return (
    <div>
      {/* Basic usage */}
      <Button>Click me</Button>

      {/* With variants */}
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Delete</Button>

      {/* With sizes */}
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>

      {/* With icons */}
      <Button leftIcon={<Plus />}>Add Item</Button>
      <Button rightIcon={<Download />}>Download</Button>

      {/* Loading state */}
      <Button loading>Processing...</Button>

      {/* Disabled */}
      <Button disabled>Disabled</Button>
    </div>
  );
}
```

## API Reference

### Props

| Prop        | Type                                                                                                    | Default     | Description                  |
| ----------- | ------------------------------------------------------------------------------------------------------- | ----------- | ---------------------------- |
| `variant`   | `'primary' \| 'secondary' \| 'destructive' \| 'outline' \| 'ghost' \| 'link' \| 'success' \| 'warning'` | `'primary'` | Button style variant         |
| `size`      | `'sm' \| 'default' \| 'lg' \| 'xl' \| 'icon'`                                                           | `'default'` | Button size                  |
| `loading`   | `boolean`                                                                                               | `false`     | Show loading spinner         |
| `leftIcon`  | `ReactNode`                                                                                             | -           | Icon to display on the left  |
| `rightIcon` | `ReactNode`                                                                                             | -           | Icon to display on the right |
| `disabled`  | `boolean`                                                                                               | `false`     | Disable the button           |
| `className` | `string`                                                                                                | -           | Additional CSS classes       |

All standard HTML button attributes are also supported.

## Variants

### Primary

The main call-to-action button with a gradient background.

### Secondary

A subtle button with border and background on hover.

### Destructive

For dangerous actions like delete operations.

### Outline

A button with just a border, perfect for secondary actions.

### Ghost

Minimal button with no background, great for subtle interactions.

### Link

Styled like a link with underline on hover.

### Success

Green gradient for positive actions.

### Warning

Amber gradient for warning actions.

## Customization

The component uses Tailwind CSS classes and can be customized by:

1. **Overriding with className prop**
   ```tsx
   <Button className="bg-purple-500 hover:bg-purple-600">
     Custom Color
   </Button>
   ```

2. **Extending the variants** (for advanced users)
   ```tsx
   import { buttonVariants } from 'modern-button-component';
   import { cn } from './utils';

   const customButton = cn(
     buttonVariants({ variant: 'primary' }),
     'your-custom-classes'
   );
   ```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
