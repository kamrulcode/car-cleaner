import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const stats = [
  { value: "2,400+", label: "Happy customers" },
  { value: "4.9 / 5", label: "Average rating" },
  { value: "12+", label: "Expert services" },
  { value: "100%", label: "Care guarantee" },
];

const services = [
  {
    name: "Exterior wash",
    description: "A spotless finish, inside and out.",
    price: "From $19",
  },
  {
    name: "Interior detail",
    description: "A fresh cabin, down to every detail.",
    price: "From $49",
  },
  {
    name: "Full detailing",
    description: "The complete showroom treatment.",
    price: "From $99",
  },
];

const CarIllustration = () => (
  <div className="relative hidden h-[390px] w-[590px] shrink-0 rounded-[28px] border-2 border-[#315174] bg-[#132B47] xl:block">
    <svg
      viewBox="0 0 590 390"
      className="absolute inset-0 size-full"
      aria-hidden="true"
    >
      <g transform="translate(-760,-205)">
        <ellipse
          cx="1050"
          cy="520"
          rx="230"
          ry="28"
          fill="#06101D"
          opacity=".55"
        />
        <path
          d="M825 450 L865 370 Q890 330 970 315 L1135 315 Q1195 320 1245 390 L1295 420 Q1315 435 1315 465 L1310 490 L805 490 L805 465 Q805 450 825 450Z"
          fill="#DCE8F4"
          stroke="#91A8C2"
          strokeWidth="3"
        />
        <path
          d="M900 365 Q922 335 972 332 L1035 332 L1035 405 L868 405Z"
          fill="#1C3857"
        />
        <path
          d="M1050 332 L1130 332 Q1174 340 1210 405 L1050 405Z"
          fill="#1C3857"
        />
        <path d="M1050 332 L1050 405" stroke="#9DB5CE" strokeWidth="3" />
        <circle
          cx="915"
          cy="485"
          r="43"
          fill="#0B1220"
          stroke="#7890AA"
          strokeWidth="8"
        />
        <circle cx="915" cy="485" r="17" fill="#9FB4CA" />
        <circle
          cx="1200"
          cy="485"
          r="43"
          fill="#0B1220"
          stroke="#7890AA"
          strokeWidth="8"
        />
        <circle cx="1200" cy="485" r="17" fill="#9FB4CA" />
        <path
          d="M815 450 L850 440 M1270 440 L1300 450"
          stroke="#22D3EE"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </g>
    </svg>
    <span className="absolute right-[70px] top-[30px] flex h-8 items-center rounded-full bg-[#1D3A5C] px-4 text-xs font-semibold text-[#BDEBFF]">
      ✨&nbsp;&nbsp;SHOWROOM FINISH
    </span>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-linear-to-br from-hero-start to-hero-end">
        <div className="mx-auto flex min-h-[570px] max-w-[1440px] items-center justify-between gap-12 px-6 py-16 lg:px-[90px]">
          <div className="max-w-[600px]">
            <span className="inline-flex h-8 items-center rounded-full bg-[#1E3A5F] px-3.5 text-xs font-semibold text-[#9DDCFF]">
              PREMIUM CAR CARE
            </span>
            <h1 className="mt-11 text-[42px] font-extrabold leading-[1.15] text-foreground sm:text-[58px]">
              A cleaner car.
              <br />A clearer mind.
            </h1>
            <p className="mt-7 max-w-[520px] text-lg text-[#C1D0E2]">
              Professional detailing, effortless booking, and a finish that
              turns every drive into something special.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button className="h-[46px] rounded-xl px-5 text-sm font-bold">
                Book your service
              </Button>
              <Button
                variant="outline"
                className="h-[46px] rounded-xl border-[#47617F] bg-[#20344F] px-5 text-sm font-semibold text-foreground hover:bg-[#2A4361] hover:text-foreground"
              >
                Explore services
              </Button>
            </div>
            <p className="mt-12 text-[13px] font-semibold text-[#D6E3F2]">
              4.9/5&nbsp;&nbsp;•&nbsp;&nbsp;Loved by 2,400+ drivers
            </p>
          </div>

          <CarIllustration />
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-[#0E1929]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-8 px-6 py-8 lg:grid-cols-4 lg:px-[110px]">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-[27px] font-extrabold text-foreground">
                {stat.value}
              </p>
              <p className="mt-1.5 text-[13px] font-medium text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="mx-auto max-w-[1440px] px-6 py-16 lg:px-[90px]"
      >
        <p className="text-xs font-bold tracking-wide text-aqua">
          THE GLOSSRIDE DIFFERENCE
        </p>
        <h2 className="mt-6 text-[32px] font-extrabold text-foreground">
          Care that goes beyond clean.
        </h2>
        <p className="mt-3 text-[15px] text-muted-foreground">
          Choose the perfect treatment for your ride.
        </p>

        <div className="mt-8 grid gap-10 md:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.name}
              className="relative h-[104px] justify-between rounded-2xl border border-border bg-card py-5 pr-5 ring-0"
            >
              <div className="px-5">
                <h3 className="text-lg font-bold text-foreground">
                  {service.name}
                </h3>
                <p className="mt-1.5 text-xs text-muted-foreground">
                  {service.description}
                </p>
              </div>
              <p className="absolute bottom-4 right-5 text-[13px] font-bold text-aqua">
                {service.price}
              </p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
