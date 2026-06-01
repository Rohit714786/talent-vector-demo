type GradientTextProps = {
  children: React.ReactNode;
  as?: "span" | "strong";
};

export function GradientText({ children, as: Tag = "span" }: GradientTextProps) {
  return <Tag className="text-gradient">{children}</Tag>;
}
