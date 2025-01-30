const Portfolio = () => {
  const companies = [
    {
      name: "Mosey",
      description: "Easy state registration and compliance management for hiring anywhere",
      date: "January 2021",
      founder: "Alex Kehayias",
      founderLinkedIn: "https://www.linkedin.com/in/alexkehayias/",
      companyLinkedIn: "https://www.linkedin.com/company/mosey-inc/"
    },
    {
      name: "Wholesail",
      description: "Accounts receivable automation system for businesses of all sizes",
      date: "June 2021",
      founder: "Eli Chait and Corey Reese",
      founderLinkedIn: ["https://www.linkedin.com/in/elichait/", "https://www.linkedin.com/in/coreyreese/"],
      companyLinkedIn: "https://www.linkedin.com/company/wholesail/"
    },
    {
      name: "Arc",
      description: "Digitally-native investment bank for startups",
      date: "July 2021",
      founder: "Don Muir and Nick Lombardo",
      founderLinkedIn: ["https://www.linkedin.com/in/donmuir/", "https://www.linkedin.com/in/nicklombardo/"],
      companyLinkedIn: "https://www.linkedin.com/company/arc-technologies-inc/"
    },
    {
      name: "Encuadrado",
      description: "Software for Latin American businesses to schedule, pay, and invoice",
      date: "September 2021",
      founder: "Thomas Maremaa",
      founderLinkedIn: "https://www.linkedin.com/in/tmaremaa/",
      companyLinkedIn: "https://www.linkedin.com/company/encuadrado/"
    },
    {
      name: "Vela",
      description: "Multi-platform ecommerce optimization for sellers",
      date: "January 2022",
      founder: "Justin Killian",
      founderLinkedIn: "https://www.linkedin.com/in/justinkillian/",
      companyLinkedIn: "https://www.linkedin.com/company/vela/"
    },
    {
      name: "Stainless",
      description: "Platform for high-quality, easy-to-use APIs",
      date: "July 2022",
      founder: "Alex Rattray",
      founderLinkedIn: "https://www.linkedin.com/in/rattrayalex/",
      companyLinkedIn: "https://www.linkedin.com/company/stainlessapi/"
    },
    {
      name: "Griz",
      description: "Scaling data science the way Figma scaled design",
      date: "August 2022",
      founder: "Christian Griset",
      founderLinkedIn: "https://www.linkedin.com/in/christiangriset/",
      companyLinkedIn: "https://www.linkedin.com/company/griz-ai/"
    },
    {
      name: "Versa (fka Bend)",
      description: "Smart receipts for your business spend",
      date: "September 2022",
      founder: "Ted Power",
      founderLinkedIn: "https://www.linkedin.com/in/tedpower/",
      companyLinkedIn: "https://www.linkedin.com/company/versa-protocol/"
    },
    {
      name: "Userfront",
      description: "Secure authentication and access control platform",
      date: "January 2023",
      founder: "Tyler Warnock",
      founderLinkedIn: "https://www.linkedin.com/in/tylerwarnock/",
      companyLinkedIn: "https://www.linkedin.com/company/userfront/"
    },
    {
      name: "Plenty",
      description: "Simple multiplayer investment and planning for modern households",
      date: "April 2023",
      founder: "Emily Luk and Channing Allen",
      founderLinkedIn: ["https://www.linkedin.com/in/emilyluk/", "https://www.linkedin.com/in/channingallen/"],
      companyLinkedIn: "https://www.linkedin.com/company/plenty/"
    },
    {
      name: "Ash Wellness",
      description: "Healthcare solutions",
      date: "April 2024",
      founder: "David Stein"
    },
    {
      name: "Inversion Space",
      description: "Space technology",
      date: "July 2024",
      founder: "Justin Fiaschetti"
    },
    {
      name: "Macro Oceans",
      description: "Ocean technology",
      date: "January 2025",
      founder: "Matthew Perkins"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {companies.map((company) => (
          <div
            key={company.name}
            className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <a 
              href={company.companyLinkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[--stripe-purple] transition-colors">
                {company.name}
              </h3>
            </a>
            <p className="text-gray-600 mb-4">{company.description}</p>
            <div className="text-sm text-gray-500">
              <p className="mb-1">{company.date}</p>
              <p>Founded by{' '}
                {Array.isArray(company.founderLinkedIn) ? (
                  company.founder.split(' and ').map((founder, index) => (
                    <span key={founder}>
                      {index > 0 && ' and '}
                      <a
                        href={company.founderLinkedIn[index]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[--stripe-purple] hover:opacity-80 transition-opacity"
                      >
                        {founder}
                      </a>
                    </span>
                  ))
                ) : (
                  <a
                    href={company.founderLinkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[--stripe-purple] hover:opacity-80 transition-opacity"
                  >
                    {company.founder}
                  </a>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio; 