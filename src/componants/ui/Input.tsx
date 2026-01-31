import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = ({ label, className = "", ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-text">{label}</label>
      )}
      <input
        className={`border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
