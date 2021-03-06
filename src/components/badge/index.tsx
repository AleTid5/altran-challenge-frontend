interface BadgeProps {
  text: string;
  color?: string | "blue" | "red";
  onClick?: () => void;
}

export default function Badge({ text, color = "blue", onClick }: BadgeProps) {
  return (
    <div
      className={`badge ${color} ${onClick ? "cursor-pointer" : "user-none"}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
}
