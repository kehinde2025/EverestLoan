import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white pt-24 md:pt-28">
      {/* HERO */}
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">

          {/* LEFT CONTENT */}
          <div className="relative z-10">

            {/* Small Label */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-[#006B3F]">
              <span className="text-[#006B3F]">✦</span>
              Funds Delivered as Fast as 24hrs
            </div>

            {/* Heading */}
            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight text-[#003D29] sm:text-5xl md:text-6xl">
              Personal Loans
              <br />
              That Work for
              <br />
              <span className="text-[#008F5A]">Real People</span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
              Borrow up to $80,000 at zero interest. We evaluate your current
              income, not your credit history — giving everyone a fair shot at
              the funds they need.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#apply"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#006B3F] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-green-900/20 transition hover:bg-[#005532]"
              >
                Apply in 10 Minutes
                
              </Link>

              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#006B3F] bg-white px-7 py-3.5 text-sm font-bold text-[#006B3F] transition hover:bg-green-50"
              >
                See the Process
                <span>▷</span>
              </Link>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative min-h-[400px] sm:min-h-[500px] lg:min-h-[560px]">

            {/* Mountain Background */}
            <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
              <Image
                src="/images/hero/hero.png"
                alt="Everest mountain"
                fill
                priority
                className="object-cover"
              />

              {/* Green overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#006B3F]/20 via-transparent to-[#003D29]/30" />
            </div>

            {/* Laptop / Approval Card */}
            <div className="absolute left-1/2 top-1/2 w-[88%] -translate-x-1/2 -translate-y-1/2">
              <div className="rounded-xl bg-gray-900 p-2 shadow-2xl sm:p-3">

                {/* Laptop Screen */}
                <div className="rounded-lg bg-white p-5 sm:p-7">

                  {/* Mini Logo */}
                  <div className="mb-6 flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center text-[#006B3F]">
                      ▲
                    </div>

                    <div className="leading-none">
                      <div className="text-xs font-extrabold text-[#003D29]">
                        EVEREST
                      </div>
                      <div className="text-[7px] font-bold tracking-[0.2em] text-[#008F5A]">
                        LOAN
                      </div>
                    </div>
                  </div>

                  {/* Approval */}
                  <div className="text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#008F5A] text-3xl text-white shadow-lg">
                      ✓
                    </div>

                    <h2 className="mt-4 text-xl font-extrabold text-[#003D29] sm:text-2xl">
                      Loan Approved!
                    </h2>

                    <p className="mt-1 text-xs text-gray-500">
                      Your funds are on the way!
                    </p>
                  </div>

                  {/* Loan Details */}
                  <div className="mt-6 grid grid-cols-3 divide-x rounded-xl border border-gray-100 bg-gray-50 py-4">
                    <div className="px-2 text-center">
                      <p className="text-[9px] text-gray-500">
                        Approved Amount
                      </p>
                      <p className="mt-1 text-sm font-bold text-[#006B3F] sm:text-base">
                        $10,000
                      </p>
                    </div>

                    <div className="px-2 text-center">
                      <p className="text-[9px] text-gray-500">
                        Funding Time
                      </p>
                      <p className="mt-1 text-sm font-bold text-[#006B3F] sm:text-base">
                        As fast as 24hrs
                      </p>
                    </div>

                    <div className="px-2 text-center">
                      <p className="text-[9px] text-gray-500">
                        Interest Rate
                      </p>
                      <p className="mt-1 text-sm font-bold text-[#006B3F] sm:text-base">
                        0%
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop Base */}
              <div className="mx-auto h-3 w-[90%] rounded-b-xl bg-gray-300 shadow-xl sm:h-4" />
            </div>

            {/* Phone */}
            <div className="absolute -bottom-3 right-0 w-[90px] rounded-2xl border-4 border-gray-900 bg-white p-1 shadow-2xl sm:-bottom-5 sm:right-2 sm:w-[115px]">
              <div className="rounded-xl bg-white p-3 sm:p-4">

                <div className="text-center">
                  <div className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-[#008F5A] text-sm text-white">
                    ✓
                  </div>

                  <p className="mt-2 text-[8px] font-bold text-[#003D29] sm:text-[10px]">
                    Loan Approved!
                  </p>

                  <p className="mt-1 text-[6px] text-gray-500 sm:text-[7px]">
                    Your funds are on the way!
                  </p>

                  <div className="mt-3 rounded-md bg-gray-50 p-2">
                    <p className="text-[6px] text-gray-400">
                      Approved Amount
                    </p>
                    <p className="text-[9px] font-bold text-[#006B3F]">
                      $10,000
                    </p>
                  </div>

                  <div className="mt-2 rounded-md bg-gray-50 p-2">
                    <p className="text-[6px] text-gray-400">
                      Interest Rate
                    </p>
                    <p className="text-[9px] font-bold text-[#006B3F]">
                      0%
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* HERO STATS */}
        <div className="relative z-20 -mt-2 rounded-2xl border border-gray-100 bg-white p-4 shadow-xl sm:p-5 lg:-mt-8">
          <div className="grid grid-cols-2 divide-x divide-y divide-gray-100 lg:grid-cols-4 lg:divide-y-0">

            {/* 0% */}
            <div className="flex items-center gap-3 px-3 py-3 sm:px-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-50 text-lg font-bold text-[#006B3F]">
                %
              </div>

              <div>
                <p className="text-xl font-extrabold text-[#006B3F]">
                  0%
                </p>
                <p className="text-xs text-gray-500">
                  Interest Rate
                </p>
              </div>
            </div>

            {/* $80K */}
            <div className="flex items-center gap-3 px-3 py-3 sm:px-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-50 text-lg font-bold text-[#006B3F]">
                $
              </div>

              <div>
                <p className="text-xl font-extrabold text-[#006B3F]">
                  $80K
                </p>
                <p className="text-xs text-gray-500">
                  Max Loan
                </p>
              </div>
            </div>

            {/* 15K+ */}
            <div className="flex items-center gap-3 px-3 py-3 sm:px-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-50 text-lg font-bold text-[#006B3F]">
                +
              </div>

              <div>
                <p className="text-xl font-extrabold text-[#006B3F]">
                  15K+
                </p>
                <p className="text-xs text-gray-500">
                  Clients Served
                </p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3 px-3 py-3 sm:px-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-50 text-lg text-[#006B3F]">
                ★
              </div>

              <div>
                <p className="text-xl font-extrabold text-[#006B3F]">
                  4.8/5
                </p>
                <p className="text-xs text-gray-500">
                  Client Rating
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* TRUST STRIP */}
      <div className="mx-auto mt-4 max-w-7xl border-t border-gray-100 px-4 py-5">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center text-[10px] font-medium text-gray-500 sm:text-xs">
          <span>🔒 256-Bit SSL Encryption</span>
          <span>◈ FDIC Insured Institution</span>
          <span>✓ BBB A+ Accredited</span>
          <span>▣ NMLS Licensed #123456</span>
          <span>◎ Serving All 50 States</span>
          <span>◷ Established 2019</span>
        </div>
      </div>
    </section>
  );
}