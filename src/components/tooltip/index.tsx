import { ReactNode } from "react";

interface TooltipProps {
  children: ReactNode;
  text: string;
}

export default function Tooltip({ children, text }: TooltipProps) {
  return (
    <div className="tooltip top">
      {children}
      <span className="text">{text}</span>
    </div>
  );
}
