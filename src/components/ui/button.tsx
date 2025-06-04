import type React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "../../utils/cn";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    isLoading?: boolean;
  };

const buttonVariants = cva(
  "relative flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.97] hover:scale-[1.02] shadow-lg hover:shadow-xl",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white shadow-blue-500/25 hover:shadow-blue-500/40 hover:from-blue-700 hover:to-indigo-800 focus-visible:ring-blue-500 border border-blue-600/20",
        secondary:
          "border-2 border-gray-200 bg-white text-gray-700 shadow-gray-200/50 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 hover:shadow-gray-300/50 focus-visible:ring-gray-400 backdrop-blur-sm",
        outline:
          "border-2 border-blue-500 bg-transparent text-blue-600 hover:bg-blue-50 hover:border-blue-600 hover:text-blue-700 focus-visible:ring-blue-500 shadow-blue-200/30 hover:shadow-blue-300/50",
        ghost:
          "bg-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus-visible:ring-gray-400 shadow-none hover:shadow-md",
        destructive:
          "bg-gradient-to-r from-red-500 via-red-600 to-pink-600 text-white shadow-red-500/25 hover:shadow-red-500/40 hover:from-red-600 hover:to-pink-700 focus-visible:ring-red-500 border border-red-500/20",
        success:
          "bg-gradient-to-r from-emerald-500 via-green-600 to-teal-600 text-white shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:from-emerald-600 hover:to-teal-700 focus-visible:ring-emerald-500 border border-emerald-500/20",
      },
      size: {
        sm: "h-9 px-4 text-sm gap-1.5",
        md: "h-11 px-6 text-base gap-2",
        lg: "h-13 px-8 text-lg gap-2.5",
        icon: "h-11 w-11 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      leftIcon,
      rightIcon,
      isLoading,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cn(
          buttonVariants({ variant, size }),
          className,
          "cursor-pointer"
        )}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </span>
        )}
        <span
          className={cn(
            "flex items-center gap-2 transition-all duration-300",
            isLoading ? "invisible" : "visible"
          )}
        >
          {leftIcon && (
            <span className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
              {leftIcon}
            </span>
          )}
          {children}
          {rightIcon && (
            <span className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
              {rightIcon}
            </span>
          )}
        </span>
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
