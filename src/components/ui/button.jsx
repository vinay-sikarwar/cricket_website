import React from "react";

// Simple replacement for the `cn` function
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Emulate class-variance-authority (cva) behavior manually
const buttonVariants = ({
  variant = "default",
  size = "default",
  className = "",
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const variantClasses = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    destructive: "bg-red-600 text-white hover:bg-red-700",
    outline: "border border-gray-300 bg-white text-black hover:bg-gray-100",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
    ghost: "hover:bg-gray-100 text-black",
    link: "text-blue-600 underline underline-offset-4 hover:text-blue-800",
  };

  const sizeClasses = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10 p-2",
  };

  return cn(base, variantClasses[variant], sizeClasses[size], className);
};

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? "span" : "button"; // Slot is removed, using span as fallback
    return (
      <Comp
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";
export { Button };
