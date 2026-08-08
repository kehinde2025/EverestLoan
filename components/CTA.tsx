import Link from "next/link";
import {
  ArrowRightIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export default function FinalCTA() {
  return (
    <section className="bg-[#063B2A] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-[#0A4A35] border border-[#D4A63A]/30 px-6 py-14 md:px-12 text-center shadow-2xl">

          {/* Decorative circles */}
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#D4A63A]/10" />
          <div className="absolute -bottom-32 -left-20 w-72 h-72 rounded-full bg-white/5" />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4A63A]/15 text-[#F2D27A] text-xs font-bold tracking-wider uppercase mb-6">
              <ShieldCheckIcon className="w-4 h-4" />
              Secure & Simple
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Ready to Take the
              <span className="block text-[#D4A63A]">
                Next Step?
              </span>
            </h2>

            <p className="max-w-2xl mx-auto mt-5 text-white/75 text-lg leading-relaxed">
              Get started with a simple online application. Our team is ready
              to review your information and help you find the right lending
              solution for your needs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link
                href="#loanapplication"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#D4A63A] text-[#063B2A] font-bold shadow-lg hover:bg-[#E5BC55] transition-all duration-300 hover:-translate-y-0.5"
              >
                Apply Now
                <ArrowRightIcon className="w-5 h-5" />
              </Link>

              <a
                href="#faq"
                className="px-8 py-4 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Have Questions?
              </a>
            </div>

            <p className="mt-6 text-sm text-white/50">
              Secure application • No obligation • Takes about 10 minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}