import Link from "next/link";
import Logo from "@/components/shared/Logo";

const AuthShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col bg-background lg:flex-row">
      {/* Left brand panel */}
      <div className="relative flex shrink-0 flex-col justify-between overflow-hidden bg-linear-to-br from-hero-start to-hero-end px-8 py-10 lg:h-screen lg:w-1/2 lg:min-w-[720px] lg:px-[84px] lg:py-[76px]">
        <div>
          <Logo />
          <div className="mt-16 lg:mt-28">
            <span className="inline-flex h-8 items-center rounded-full bg-[#1D3A5C] px-3.5 text-xs font-semibold text-[#BDEBFF]">
              THE ART OF CLEAN
            </span>
            <h1 className="mt-10 text-[34px] font-extrabold leading-[1.25] text-foreground sm:text-[42px]">
              Your car deserves
              <br />
              the gloss treatment.
            </h1>
            <p className="mt-6 text-[17px] text-[#C1D0E2]">
              Book expert car care in just a few clicks.
            </p>
          </div>
        </div>

        <div className="mt-16 lg:mt-0">
          <p className="text-[19px] font-semibold text-foreground">
            &ldquo;A flawless finish, every single time.&rdquo;
          </p>
          <p className="mt-3 text-[13px] text-muted-foreground">
            &mdash; The GlossRide promise
          </p>
        </div>
      </div>

      {/* Right form panel */}
      <div className="flex flex-1 flex-col px-6 py-10 sm:px-10 lg:h-screen lg:overflow-y-auto lg:px-20 lg:py-[90px]">
        <Link
          href="/"
          className="text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          &larr; Back to website
        </Link>

        <div className="mt-14 w-full max-w-[500px] lg:mt-[72px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthShell;
