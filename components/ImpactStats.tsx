export default function ImpactStats() {
  const stats = [
    {
      number: "15,000+",
      label: "Borrowers Funded",
    },
    {
      number: "$2.5M+",
      label: "Donated to Charities",
    },
    {
      number: "50,000+",
      label: "Meals Funded via Charity",
    },
    {
      number: "98%",
      label: "Client Satisfaction Rate",
    },
  ];

  return (
    <section className="bg-green-900 px-6 py-16 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <div className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                {stat.number}
              </div>

              <p className="mt-2 text-sm font-medium text-green-200 md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}