const Portfolio = () => {
  const companies = [
    {
      name: "Stir",
      description: "Financial infrastructure for creators",
      url: "https://stir.com"
    },
    {
      name: "Watershed",
      description: "Enterprise climate platform",
      url: "https://watershed.com"
    },
    {
      name: "Ramp",
      description: "Corporate cards and spend management",
      url: "https://ramp.com"
    },
    // Add more portfolio companies as needed
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {companies.map((company) => (
          <a
            key={company.name}
            href={company.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 border rounded-lg hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{company.name}</h3>
            <p className="text-gray-600">{company.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Portfolio; 