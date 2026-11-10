import { Bell, Search } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type HeaderProps = {
  title: string;
  subtitle: string;
  role: string;
};

const Header = ({ title, subtitle, role }: HeaderProps) => {
  return (
    <header className="flex h-[100px] shrink-0 items-center justify-between gap-6 border-b border-border bg-background px-6 lg:px-10">
      <div>
        <h1 className="text-[25px] font-extrabold leading-tight text-foreground">
          {title}
        </h1>
        <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label="Search"
          className="flex size-[42px] items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-accent"
        >
          <Search className="size-[18px]" />
        </button>
        <button
          type="button"
          aria-label="Notifications"
          className="flex size-[42px] items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-accent"
        >
          <Bell className="size-[18px]" />
        </button>

        <div className="flex items-center gap-2.5">
          <Avatar size="lg" className="border-0 bg-[#24466C]">
            <AvatarFallback className="bg-transparent text-xs font-bold text-foreground">
              KM
            </AvatarFallback>
          </Avatar>
          <div className="hidden sm:block">
            <p className="text-xs font-bold leading-tight text-foreground">
              Kamrul
            </p>
            <p className="text-[10px] leading-tight text-muted-foreground">
              {role}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
