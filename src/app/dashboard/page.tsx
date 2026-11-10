import DashboardShell from "@/components/dashboard/DashboardShell";
import StatCard from "@/components/dashboard/StatCard";
import StatusBadge from "@/components/dashboard/StatusBadge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const navItems = [
  { label: "Overview", href: "/dashboard" },
  { label: "My bookings", href: "#bookings" },
  { label: "Services", href: "#services" },
  { label: "My vehicles", href: "#vehicles" },
  { label: "Payments", href: "#payments" },
  { label: "Messages", href: "#messages" },
];

const stats = [
  { label: "Total bookings", value: "12", delta: "+2 this month" },
  { label: "Upcoming", value: "02", delta: "Next: Nov 14" },
  { label: "Rewards points", value: "480", delta: "+60 earned" },
  { label: "Saved vehicles", value: "02", delta: "Manage vehicles" },
];

const bookings = [
  {
    service: "Full detailing",
    date: "Nov 14, 2026",
    status: "Confirmed",
    total: "$99",
  },
  {
    service: "Interior refresh",
    date: "Oct 22, 2026",
    status: "Completed",
    total: "$59",
  },
  {
    service: "Express wash",
    date: "Oct 03, 2026",
    status: "Completed",
    total: "$19",
  },
];

export default function DashboardPage() {
  return (
    <DashboardShell
      navItems={navItems}
      activeLabel="Overview"
      title="Good morning, Kamrul 👋"
      subtitle="Here’s what’s happening with your car care."
      role="Member"
    >
      {/* Next appointment */}
      <section className="flex flex-col gap-6 rounded-[18px] border border-[#294768] bg-linear-to-br from-hero-start to-hero-end p-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[11px] font-bold tracking-wide text-[#A9D9FF]">
            YOUR NEXT APPOINTMENT
          </p>
          <h2 className="mt-3 text-[25px] font-extrabold leading-tight text-foreground">
            Premium full detail
          </h2>
          <p className="mt-2 text-[13px] text-[#C7D7EA]">
            Saturday, Nov 14&nbsp;&nbsp;•&nbsp;&nbsp;10:30 AM&nbsp;&nbsp;•&nbsp;&nbsp;Downtown Studio
          </p>
        </div>
        <Button className="h-[46px] w-full rounded-xl px-5 text-sm font-bold sm:w-[190px]">
          View booking
        </Button>
      </section>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-2 gap-5 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      {/* Bookings + vehicles */}
      <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_405px]">
        <Card className="h-[400px] justify-start gap-0 rounded-[18px] border border-border bg-card p-5 ring-0">
          <h2 className="text-base font-bold text-foreground">
            Recent bookings
          </h2>
          <p className="mt-1.5 text-xs text-muted-foreground">
            Your latest service activity
          </p>

          <div className="mt-5 grid grid-cols-[1fr_130px_120px_70px] gap-4 text-[10px] font-bold tracking-wide text-muted-foreground">
            <span className="pl-1">SERVICE</span>
            <span>DATE</span>
            <span>STATUS</span>
            <span>TOTAL</span>
          </div>
          <div className="mt-4 border-t border-border">
            {bookings.map((booking) => (
              <div
                key={booking.service}
                className="grid h-[78px] grid-cols-[1fr_130px_120px_70px] items-center gap-4 border-b border-border last:border-b-0"
              >
                <span className="pl-1 text-[13px] font-semibold text-foreground">
                  {booking.service}
                </span>
                <span className="text-xs text-muted-foreground">
                  {booking.date}
                </span>
                <StatusBadge status={booking.status} />
                <span className="text-[13px] font-bold text-foreground">
                  {booking.total}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="h-[400px] justify-start gap-0 rounded-[18px] border border-border bg-card p-5 ring-0">
          <h2 className="text-base font-bold text-foreground">My vehicles</h2>
          <p className="mt-1.5 text-xs text-muted-foreground">
            Vehicles linked to your account
          </p>

          <div className="mt-3 rounded-[14px] bg-secondary p-5">
            <p className="text-base font-bold text-foreground">
              🚘&nbsp;&nbsp;Tesla Model 3
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              2024&nbsp;&nbsp;•&nbsp;&nbsp;Pearl white
            </p>
            <Badge className="mt-3.5 h-8 rounded-full bg-[#1E3A5F] px-3.5 text-xs font-semibold text-[#9DDCFF]">
              PRIMARY
            </Badge>
          </div>

          <button
            type="button"
            className="mt-5 flex h-[75px] w-full items-center rounded-[14px] bg-secondary px-5 text-[13px] font-bold text-aqua transition-colors hover:bg-accent"
          >
            ＋&nbsp;&nbsp;Add another vehicle
          </button>
        </Card>
      </div>

      {/* Recommended */}
      <section className="mt-12">
        <h2 className="text-lg font-bold text-foreground">
          Recommended for you
        </h2>
        <div className="mt-4 flex flex-col gap-4 rounded-[14px] border border-border bg-card px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-8">
            <p className="text-sm font-bold text-foreground">
              Ceramic coating
            </p>
            <p className="text-xs text-muted-foreground">
              Long-lasting shine and paint protection.
            </p>
          </div>
          <a
            href="#services"
            className="text-xs font-bold text-aqua hover:underline"
          >
            Explore →
          </a>
        </div>
      </section>
    </DashboardShell>
  );
}
