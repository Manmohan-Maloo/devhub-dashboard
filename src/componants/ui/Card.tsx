import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div className={`bg-surface rounded-xl shadow-sm p-4 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
