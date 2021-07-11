import { ReactNode } from "react";

interface TooltipInterface {
  children: ReactNode;
  text: string;
}

export default function Tooltip({ children, text }: TooltipInterface) {
  return (
    <div className="tooltip top">
      {children}
      <span className="text">{text}</span>
    </div>
  );
}
