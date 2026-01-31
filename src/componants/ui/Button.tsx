import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:opacity-90",
  secondary: "bg-secondary text-white hover:opacity-90",
  danger: "bg-danger text-white hover:opacity-90",
};

const Button = ({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg text-sm font-medium transition ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
};

export default Button;
