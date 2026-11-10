import { Card } from "@/components/ui/card";
import { cn } from "cn";

type StatCardProps = {
  label: string;
  value: string;
  delta: string;
  className?: string;
};

const StatCard = ({ label, value, delta, className }: StatCardProps) => {
  return (
    <Card
      className={cn(
        "h-[118px] justify-start gap-0 rounded-2xl border border-border bg-card p-[18px] ring-0",
        className
      )}
    >
      <p className="text-xs font-medium text-muted-foreground">{label}</p>
      <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="text-[29px] font-extrabold leading-none text-foreground">
          {value}
        </span>
        <span className="text-[11px] font-semibold text-success">{delta}</span>
      </div>
    </Card>
  );
};

export default StatCard;
