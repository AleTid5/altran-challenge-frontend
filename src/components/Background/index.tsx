import { ReactNode } from "react";

export default function Background({ children }: { children: ReactNode }) {
  return <div className="background">{children}</div>;
}
