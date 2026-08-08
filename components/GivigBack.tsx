import Image from "next/image";

export default function GivingBack() {
  const steps = [
    {
      number: "01",
      title: "You Get Approved",
      description:
        "Once your application is approved, you receive the loan amount outlined in your agreement.",
    },
    {
      number: "02",
      title: "We Match Your Loan",
      description:
        "Everest commits additional resources to support the communities and families we serve.",
    },
    {
      number: "03",
      title: "A Portion Supports Giving",
      description:
        "A portion of our committed resources is directed toward verified charitable initiatives.",
    },
    {
      number: "04",
      title: "No Extra Cost",
      description:
        "Our giving initiatives are funded separately and do not add an additional charge to your loan.",
    },
  ];

  return (
    <section
      id="mission"
      className="bg-white px-6 py-20 md:px-12 lg:px-20"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-14 lg:flex-row">
        
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2">
          
          {/* Badge */}
          <span className="mb-5 inline-flex rounded-full bg-green-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-green-700">
            Lending With Purpose
          </span>

          {/* Heading */}
          <h2 className="text-3xl font-bold leading-tight text-green-900 md:text-4xl lg:text-5xl">
            The Giving Back
            <span className="block text-green-600">
              Initiative
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
            At Everest, we believe lending can be about more than providing
            financial solutions. We are committed to supporting families and
            communities through responsible lending and meaningful giving.
          </p>

          {/* STEPS */}
          <div className="relative mt-10 space-y-7">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative flex gap-5"
              >
                {/* Number + Line */}
                <div className="relative flex flex-col items-center">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-700 text-sm font-bold text-white shadow-md">
                    {step.number}
                  </div>

                  {index !== steps.length - 1 && (
                    <div className="mt-2 h-full min-h-10 w-px bg-green-200" />
                  )}
                </div>

                {/* Text */}
                <div className="pb-1">
                  <h3 className="text-lg font-bold text-green-900">
                    {step.title}
                  </h3>

                  <p className="mt-1 max-w-lg text-sm leading-6 text-gray-600 md:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* VERIFIED INITIATIVES */}
          <div className="mt-10 rounded-2xl border border-green-100 bg-green-50/60 p-6">
            <h3 className="mb-4 text-lg font-bold text-green-900">
              Our Commitment
            </h3>

            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-700 text-xs text-white">
                  ✓
                </span>
                Responsible lending practices
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-700 text-xs text-white">
                  ✓
                </span>
                Community-focused initiatives
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-700 text-xs text-white">
                  ✓
                </span>
                Transparent giving practices
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2">
          <div className="relative h-[380px] overflow-hidden rounded-3xl shadow-xl md:h-[500px]">
            <img
              src="https://picsum.photos/id/1059/800/600"
              alt="Everest community giving initiative"
              className="object-cover"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-green-950/70 via-green-900/10 to-transparent" />

            {/* Floating Card */}
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/95 p-5 shadow-xl backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-wider text-green-600">
                Everest Loan
              </p>

              <h3 className="mt-1 text-xl font-bold text-green-900">
                Lending With Purpose
              </h3>

              <p className="mt-2 text-sm leading-5 text-gray-600">
                Building financial solutions while supporting the communities
                we serve.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}