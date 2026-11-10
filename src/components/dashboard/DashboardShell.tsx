import React from "react";
import Logo from "@/components/shared/Logo";
import Header from "@/components/shared/Header";
import { Separator } from "@/components/ui/separator";
import { cn } from "cn";

export type NavItem = {
  label: string;
  href: string;
};

type DashboardShellProps = {
  navItems: NavItem[];
  activeLabel: string;
  title: string;
  subtitle: string;
  role: string;
  headerAction?: React.ReactNode;
  children: React.ReactNode;
};

const DashboardShell = ({
  navItems,
  activeLabel,
  title,
  subtitle,
  role,
  headerAction,
  children,
}: DashboardShellProps) => {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="hidden w-[250px] shrink-0 flex-col bg-sidebar lg:flex">
        <div className="px-8 pt-8">
          <Logo className="text-[22px]" />
        </div>

        <p className="px-8 pt-8 pb-2 text-[10px] font-bold tracking-wide text-[#64748B]">
          WORKSPACE
        </p>

        <nav className="flex flex-col gap-3 px-[18px]">
          {navItems.map((item) => {
            const active = item.label === activeLabel;
            return (
              <a
                key={item.label}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative flex h-[46px] items-center rounded-[10px] pl-6 text-sm transition-colors",
                  active
                    ? "bg-[#1B3555] font-semibold text-foreground"
                    : "font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                {active && (
                  <span className="absolute left-0 top-0 h-full w-[3px] rounded-l-[10px] bg-aqua" />
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="mt-auto px-6 pb-10">
          <Separator className="bg-border" />
          <a
            href="#help"
            className="mt-8 block pl-[18px] text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Help &amp; support
          </a>
        </div>
      </aside>

      {/* Main column */}
      <div className="flex min-w-0 flex-1 flex-col">
        <Header title={title} subtitle={subtitle} role={role} />

        <main className="flex-1 px-6 py-6 lg:px-[30px]">
          {headerAction && (
            <div className="mb-6 flex justify-end">{headerAction}</div>
          )}
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardShell;
