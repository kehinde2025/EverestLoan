import {
  BoltIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

const advantages = [
  {
    icon: CurrencyDollarIcon,
    title: "Zero Interest Rate",
    text: "You borrow $5,000, you pay back $5,000. No interest, no origination fees, no prepayment penalties.",
  },
  {
    icon: UserCircleIcon,
    title: "No Minimum Credit Score",
    text: "Scores below 580 are welcome. We look at your employment and income, not just a three-digit number.",
  },
  {
    icon: ClockIcon,
    title: "Same-Day Decisions",
    text: "Submit your application before 2 PM Eastern and receive a lending decision the same business day.",
  },
  {
    icon: BoltIcon,
    title: "Human-Reviewed Applications",
    text: "Every application is personally reviewed by a loan specialist who understands real-life circumstances.",
  },
];

export default function Advantages() {
  return (
    <section
      id="advantages"
      className="bg-white px-6 py-20 md:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.2em] text-green-600">
            Our Advantages
          </span>

          <h2 className="text-3xl font-bold leading-tight text-green-900 md:text-5xl">
            Built to Remove
            <span className="text-green-600"> Financial Barriers</span>
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            Traditional lenders can make borrowing unnecessarily difficult.
            Everest Loan is designed to provide a simpler, more transparent
            path to financing.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;

            return (
              <div
                key={idx}
                className="group flex items-start gap-5 rounded-2xl border border-green-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-green-600 hover:via-green-700 hover:to-green-800 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 transition-colors duration-300 group-hover:bg-white/15">
                  <Icon className="h-6 w-6 text-green-600 group-hover:text-white" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white">
                    {adv.title}
                  </h3>

                  <p className="mt-2 leading-7 text-gray-600 group-hover:text-green-50">
                    {adv.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}