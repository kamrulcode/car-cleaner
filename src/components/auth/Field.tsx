import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "cn";

type FieldProps = React.ComponentProps<"input"> & {
  label: string;
};

const Field = ({ label, className, ...props }: FieldProps) => {
  return (
    <div>
      <Label className="text-[13px] font-semibold text-[#D6E2F0]">
        {label}
      </Label>
      <Input
        className={cn(
          "mt-1.5 h-[52px] rounded-[11px] bg-card px-5 text-sm dark:bg-card placeholder:text-[#71839B]",
          className
        )}
        {...props}
      />
    </div>
  );
};

export default Field;
