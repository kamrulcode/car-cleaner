import { cn } from "cn";

const statusStyles: Record<string, string> = {
  Confirmed: "bg-[#19385E] text-[#9BCBFF]",
  "In progress": "bg-[#19385E] text-[#9BCBFF]",
  Completed: "bg-[#123A35] text-success",
};

const StatusBadge = ({ status }: { status: string }) => {
  return (
    <span
      className={cn(
        "inline-flex h-8 w-fit items-center rounded-full px-4 text-xs font-semibold",
        statusStyles[status] ?? "bg-secondary text-muted-foreground"
      )}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
