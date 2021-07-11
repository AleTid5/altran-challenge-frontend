interface BadgeProps {
  text: string;
  color?: string | "blue" | "red";
}

export default function Badge({ text, color = "blue" }: BadgeProps) {
  return <div className={`badge ${color}`}>{text}</div>;
}
