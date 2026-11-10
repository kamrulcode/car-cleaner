import { cn } from "cn";

const Logo = ({ className }: { className?: string }) => {
  return (
    <span
      className={cn(
        "text-[26px] font-extrabold tracking-tight select-none",
        className
      )}
    >
      <span className="text-foreground">GLOSS</span>
      <span className="text-aqua">RIDE</span>
    </span>
  );
};

export default Logo;
