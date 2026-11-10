import AuthShell from "@/components/auth/AuthShell";
import Field from "@/components/auth/Field";
import SocialAuth from "@/components/auth/SocialAuth";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const SignUp = () => {
  return (
    <AuthShell>
      <h2 className="text-[32px] font-extrabold leading-tight text-foreground">
        Create your account
      </h2>
      <p className="mt-3 text-sm text-muted-foreground">
        Join GlossRide and keep your car looking its best.
      </p>

      <form className="mt-9">
        <div className="space-y-4">
          <Field
            label="Full name"
            name="name"
            placeholder="Enter your full name"
            autoComplete="name"
          />
          <Field
            label="Email address"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
          />
          <Field
            label="Phone number"
            name="phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            autoComplete="tel"
          />
          <Field
            label="Password"
            name="password"
            type="password"
            placeholder="At least 8 characters"
            autoComplete="new-password"
          />
        </div>

        <div className="mt-6 flex items-center gap-2.5">
          <Checkbox
            id="terms"
            className="border-primary dark:border-primary"
          />
          <Label
            htmlFor="terms"
            className="text-xs font-normal text-muted-foreground"
          >
            I agree to the Terms of Service and Privacy Policy
          </Label>
        </div>

        <Button
          type="submit"
          className="mt-8 h-[46px] w-full rounded-xl text-sm font-bold"
        >
          Create account
        </Button>
      </form>

      <p className="mt-6 text-[13px] text-muted-foreground">
        Already have an account?{" "}
        <Link
          href="/signin"
          className="font-bold text-aqua hover:underline"
        >
          Sign in
        </Link>
      </p>

      <SocialAuth />
    </AuthShell>
  );
};

export default SignUp;
