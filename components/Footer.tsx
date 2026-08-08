export default function Footer() {
  return (
    <footer className="bg-[#063B2A] text-gray-300 px-6 md:px-16 py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          {/* Logo */}
          <div className="flex items-center gap-2">
            {/* Icon */}
            <div className="bg-[#D4A63A] rounded-full w-8 h-8 flex items-center justify-center shadow-md">
              <svg
                className="w-4 h-4 text-[#063B2A]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>

            {/* Brand Name */}
            <span className="text-xl font-bold text-white select-none">
            EverestLoan
            </span>
          </div>

          <p className="text-sm leading-relaxed mt-4 text-gray-300">
            Licensed personal loan provider serving customers across all 50 states since 2019.
          </p>

          <div className="mt-4 space-y-1 text-sm text-gray-400">
            <p>FDIC Compliant</p>
            <p>BBB A+ Rated</p>
            <p>NMLS #195624</p>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white font-semibold mb-4">Navigation</h3>

          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#advantages"
                className="hover:text-[#D4A63A] transition-colors"
              >
                Why Choose Us
              </a>
            </li>

            <li>
              <a
                href="#process"
                className="hover:text-[#D4A63A] transition-colors"
              >
                How It Works
              </a>
            </li>

            <li>
              <a
                href="#mission"
                className="hover:text-[#D4A63A] transition-colors"
              >
                Our Mission
              </a>
            </li>

            <li>
              <a
                href="#faq"
                className="hover:text-[#D4A63A] transition-colors"
              >
                FAQs
              </a>
            </li>

            <li>
              <a
                href="#apply"
                className="hover:text-[#D4A63A] transition-colors"
              >
                Apply Now
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>

          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-[#D4A63A] transition-colors"
              >
                Privacy Policy
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:text-[#D4A63A] transition-colors"
              >
                Terms of Service
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:text-[#D4A63A] transition-colors"
              >
                Responsible Lending
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:text-[#D4A63A] transition-colors"
              >
                NMLS Registry
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>

          <ul className="space-y-2 text-sm">
            <li>hello@EverestLoan.live</li>
            <li>1-888-555-0100</li>
            <li>Live Chat Support</li>
            <li>Nationwide Coverage</li>
          </ul>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto border-t border-white/10 mt-10 pt-6 text-sm text-gray-400 text-center space-y-3">

        <p>
          © 2019–{new Date().getFullYear()} EverestLoan. EverestLoan Financial Corp. All rights reserved.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="hover:text-[#D4A63A] transition-colors"
          >
            Privacy
          </a>

          <a
            href="#"
            className="hover:text-[#D4A63A] transition-colors"
          >
            Terms
          </a>

          <a
            href="#"
            className="hover:text-[#D4A63A] transition-colors"
          >
            Accessibility
          </a>
        </div>

        {/* Disclaimer */}
        <p className="max-w-3xl mx-auto text-xs leading-relaxed text-gray-500">
          APR ranges from 5.99% to 24.99%. Loan amounts from $1,000 to $80,000.
          Repayment terms 12–60 months. All loans subject to credit approval.
          EverestLoan Financial Corp, NMLS #195624.
        </p>

      </div>
    </footer>
  );
}