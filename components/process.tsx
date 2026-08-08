export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Submit Online",
      description:
        "Complete our secure digital form in about 10 minutes. No printing, scanning, or faxing required.",
    },
    {
      number: "02",
      title: "Speak to a Specialist",
      description:
        "A dedicated loan specialist contacts you to review your situation and confirm the right loan amount.",
    },
    {
      number: "03",
      title: "Review Your Offer",
      description:
        "Read through your personalized loan terms. E-sign when ready. No pressure, no countdown timers.",
    },
    {
      number: "04",
      title: "Receive Your Funds",
      description:
        "Money hits your bank account via ACH transfer, typically within one business day of signing.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="bg-white px-6 py-20 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-4 inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-800">
            Simple Process
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-green-950 md:text-4xl">
            Four Steps to Funding
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600">
            We have cut unnecessary steps so you spend less time on paperwork
            and more time on what matters.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">

          {/* Connecting Line - Desktop */}
          <div className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-green-200 lg:block" />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="group relative flex flex-col items-center text-center"
              >
                {/* Number */}
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-green-700 text-sm font-bold text-white shadow-md transition duration-300 group-hover:scale-110 group-hover:bg-green-800">
                  {step.number}
                </div>

                {/* Icon Circle */}
                <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-700 transition duration-300 group-hover:bg-green-100">
                  {step.number === "01" && (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h6m-6 4h4m4-12H7a2 2 0 00-2 2v14l3-2 3 2 3-2 3 2V6a2 2 0 00-2-2z"
                      />
                    </svg>
                  )}

                  {step.number === "02" && (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 10h.01M12 10h.01M16 10h.01M21 12a8.5 8.5 0 01-9 8 8.8 8.8 0 01-3.8-.85L4 20l1.3-3.2A7.8 7.8 0 013 12a8.5 8.5 0 019-8 8.5 8.5 0 019 8z"
                      />
                    </svg>
                  )}

                  {step.number === "03" && (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4m5-2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h8l6 4z"
                      />
                    </svg>
                  )}

                  {step.number === "04" && (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 10h18M5 10v8m4-8v8m6-8v8m4-8v8M3 20h18M4 10l8-6 8 6"
                      />
                    </svg>
                  )}
                </div>

                {/* Text */}
                <h3 className="mt-5 text-lg font-bold text-green-950">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-xs text-sm leading-6 text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}