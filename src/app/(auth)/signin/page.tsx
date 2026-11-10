import AuthShell from "@/components/auth/AuthShell";
import Field from "@/components/auth/Field";
import SocialAuth from "@/components/auth/SocialAuth";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SignIn = () => {
  return (
    <AuthShell>
      <h2 className="text-[32px] font-extrabold leading-tight text-foreground">
        Welcome back
      </h2>
      <p className="mt-3 text-sm text-muted-foreground">
        Sign in to manage your bookings and your car.
      </p>

      <form className="mt-9">
        <div className="space-y-4">
          <Field
            label="Email address"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
          />
          <Field
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            autoComplete="current-password"
          />
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs font-medium text-muted-foreground">
            Remember me
          </span>
          <Link
            href="#forgot-password"
            className="text-xs font-semibold text-aqua hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        <Button
          type="submit"
          className="mt-5 h-[46px] w-full rounded-xl text-sm font-bold"
        >
          Sign in
        </Button>
      </form>

      <p className="mt-6 text-[13px] text-muted-foreground">
        New to GlossRide?{" "}
        <Link
          href="/signup"
          className="font-bold text-aqua hover:underline"
        >
          Create an account
        </Link>
      </p>

      <SocialAuth />
    </AuthShell>
  );
};

export default SignIn;
