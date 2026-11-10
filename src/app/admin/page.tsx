import DashboardShell from "@/components/dashboard/DashboardShell";
import StatCard from "@/components/dashboard/StatCard";
import StatusBadge from "@/components/dashboard/StatusBadge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";

const navItems = [
  { label: "Overview", href: "/admin" },
  { label: "Bookings", href: "#bookings" },
  { label: "Customers", href: "#customers" },
  { label: "Services", href: "#services" },
  { label: "Staff", href: "#staff" },
  { label: "Analytics", href: "#analytics" },
  { label: "Settings", href: "#settings" },
];

const stats = [
  { label: "Total revenue", value: "$24,680", delta: "+12.8% vs last month" },
  { label: "Bookings", value: "384", delta: "+8.2% this month" },
  { label: "New customers", value: "126", delta: "+16.4% this month" },
  { label: "Avg. rating", value: "4.9 / 5", delta: "+0.2 this month" },
];

const revenue = [
  { month: "May", height: 85 },
  { month: "Jun", height: 115 },
  { month: "Jul", height: 95 },
  { month: "Aug", height: 145 },
  { month: "Sep", height: 125 },
  { month: "Oct", height: 170 },
];

const distribution = [
  { name: "Exterior wash", percent: 42, color: "bg-brand" },
  { name: "Interior detail", percent: 31, color: "bg-aqua" },
  { name: "Full detailing", percent: 27, color: "bg-success" },
];

const bookings = [
  {
    customer: "Olivia Rhye",
    service: "Full detailing",
    date: "Nov 10",
    status: "Confirmed",
    total: "$99",
  },
  {
    customer: "Phoenix Baker",
    service: "Interior detail",
    date: "Nov 10",
    status: "In progress",
    total: "$59",
  },
  {
    customer: "Lana Steiner",
    service: "Exterior wash",
    date: "Nov 09",
    status: "Completed",
    total: "$19",
  },
];

const tableCols = "grid-cols-[1fr_255px_195px_230px_60px]";

export default function AdminPage() {
  return (
    <DashboardShell
      navItems={navItems}
      activeLabel="Overview"
      title="Admin overview"
      subtitle="Monitor your business performance at a glance."
      role="Administrator"
      headerAction={
        <Button className="h-[46px] w-[180px] gap-2 rounded-xl text-sm font-bold">
          <Plus className="size-4" />
          Add booking
        </Button>
      }
    >
      {/* Stats */}
      <div className="grid grid-cols-2 gap-5 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} className="h-[125px]" />
        ))}
      </div>

      {/* Charts */}
      <div className="mt-6 grid gap-5 xl:grid-cols-[1fr_400px]">
        <Card className="h-[350px] justify-start gap-0 rounded-[18px] border border-border bg-card p-[25px] ring-0">
          <h2 className="text-[17px] font-bold text-foreground">
            Revenue overview
          </h2>
          <p className="mt-1.5 text-xs text-muted-foreground">
            Monthly revenue performance
          </p>

          <div className="relative ml-[25px] mt-8 h-[185px] border-b border-l border-[#3B4C63]">
            <span className="absolute left-[15px] top-[20px] text-[10px] text-muted-foreground">
              $8k
            </span>
            <span className="absolute left-[15px] top-[75px] text-[10px] text-muted-foreground">
              $4k
            </span>
            <span className="absolute left-[15px] top-[130px] text-[10px] text-muted-foreground">
              $2k
            </span>
            <div className="absolute inset-0 flex items-end gap-[46px] pl-10">
              {revenue.map((bar) => (
                <div
                  key={bar.month}
                  style={{ height: bar.height }}
                  className="w-[42px] rounded-lg bg-linear-to-r from-brand to-aqua"
                />
              ))}
            </div>
          </div>
          <div className="ml-[25px] mt-3 flex gap-[46px] pl-10">
            {revenue.map((bar) => (
              <span
                key={bar.month}
                className="w-[42px] text-center text-[11px] font-medium text-muted-foreground"
              >
                {bar.month}
              </span>
            ))}
          </div>
        </Card>

        <Card className="h-[350px] justify-start gap-0 rounded-[18px] border border-border bg-card p-[25px] ring-0">
          <h2 className="text-[17px] font-bold text-foreground">
            Service distribution
          </h2>
          <p className="mt-1.5 text-xs text-muted-foreground">
            Bookings by service type
          </p>

          <div className="mt-11 space-y-8">
            {distribution.map((item) => (
              <div key={item.name}>
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-semibold text-foreground">
                    {item.name}
                  </span>
                  <span className="text-[13px] font-bold text-foreground">
                    {item.percent}%
                  </span>
                </div>
                <div className="mt-2 h-[9px] w-full overflow-hidden rounded-full bg-border">
                  <div
                    style={{ width: `${item.percent}%` }}
                    className={`h-full rounded-full ${item.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Recent bookings */}
      <Card className="mt-8 h-[250px] justify-start gap-0 rounded-[18px] border border-border bg-card p-[25px] ring-0">
        <h2 className="text-[17px] font-bold text-foreground">
          Recent bookings
        </h2>

        <div className="mt-5 overflow-x-auto">
          <div className="min-w-[900px]">
            <div
              className={`grid ${tableCols} gap-4 text-[10px] font-bold tracking-wide text-muted-foreground`}
            >
              <span>CUSTOMER</span>
              <span>SERVICE</span>
              <span>DATE</span>
              <span>STATUS</span>
              <span>TOTAL</span>
            </div>
            <div className="mt-4 border-t border-border">
              {bookings.map((booking) => (
                <div
                  key={booking.customer}
                  className={`grid ${tableCols} h-[42px] items-center gap-4 border-b border-border last:border-b-0`}
                >
                  <span className="text-xs font-semibold text-foreground">
                    {booking.customer}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {booking.service}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {booking.date}
                  </span>
                  <StatusBadge status={booking.status} />
                  <span className="text-xs font-bold text-foreground">
                    {booking.total}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </DashboardShell>
  );
}
