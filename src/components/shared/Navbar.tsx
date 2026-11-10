import Link from "next/link";
import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Home", href: "/", active: true },
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

const Navbar = () => {
  return (
    <header className="w-full">
      {/* Announcement bar */}
      <div className="flex h-[38px] items-center justify-center bg-[#101E32] px-4">
        <p className="text-center text-xs font-medium text-[#C7D7EA]">
          ✦&nbsp;&nbsp;Complimentary interior refresh with every premium detail
          this month
        </p>
      </div>

      {/* Nav bar */}
      <div className="mx-auto flex h-[82px] max-w-[1440px] items-center justify-between px-6 lg:px-[82px]">
        <Link href="/" aria-label="GlossRide home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm transition-colors hover:text-foreground ${
                link.active
                  ? "font-bold text-foreground"
                  : "font-medium text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <Link
            href="/signin"
            className="hidden text-sm font-semibold text-foreground transition-colors hover:text-aqua sm:block"
          >
            Sign in
          </Link>
          <Button
            render={<Link href="/signup" />}
            className="h-[46px] rounded-xl px-5 text-sm font-bold"
          >
            Book a wash
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
