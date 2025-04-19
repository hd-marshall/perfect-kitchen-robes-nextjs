import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

// Define button variants
const buttonVariants = cva(
  "rounded-lg transition-all duration-300 cursor-pointer font-normal", 
  {
    variants: {
      intent: {
        primary: "bg-white text-black hover:bg-[#c9c5b1] hover:text-white hover:shadow-md",
        secondary: "bg-[#c9c5b1] text-white hover:bg-white hover:text-black hover:shadow-md",
        outline: "bg-transparent border border-white text-white hover:bg-white hover:text-black hover:shadow-md",
        ghost: "bg-transparent text-white hover:bg-white/10 hover:shadow-md",
      },
      size: {
        sm: "py-2 px-4 text-sm",
        md: "py-3 px-8",
        lg: "py-4 px-10 text-lg",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

export interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = ({
  className = "",
  intent,
  size,
  fullWidth,
  children,
  ...props 
}: ButtonProps) => {
  return (
    <button
      className={`${buttonVariants({ intent, size, fullWidth })} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button, buttonVariants };