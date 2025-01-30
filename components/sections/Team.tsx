const Team = () => {
  const team = [
    {
      name: "Anthony Kline",
      role: "Partner - The General Partnership",
      stripeTenure: "2016-2019 (SF)",
      stripeRole: "Talent + M&A",
      currentRole: "Partner - The General Partnership",
      linkedin: "https://www.linkedin.com/in/anthonyklinesf/",
      image: "/team/anthony.jpg"
    },
    {
      name: "Danika Koenig",
      role: "Payments - Ness",
      stripeTenure: "2015-2020 (SF)",
      stripeRole: "Risk + Financial Partnerships",
      currentRole: "Head of Payment Operations - Stash",
      linkedin: "https://www.linkedin.com/in/danika-koenig-2642a41/",
      image: "/team/danika.jpg"
    },
    {
      name: "Milo Spirig",
      role: "Product - Brex",
      stripeTenure: "2015-2019 (SF)",
      stripeRole: "Financial Partnerships",
      currentRole: "Member of Staff - Accrual",
      linkedin: "https://www.linkedin.com/in/milospirig/",
      image: "/team/milo.jpg"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Syndicate Leads</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member) => (
          <div key={member.name} className="text-center">
            <a 
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden group-hover:ring-2 ring-[--stripe-purple] transition-all">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1 group-hover:text-[--stripe-purple] transition-colors">
                {member.name}
              </h3>
            </a>
            <p className="text-gray-600 mb-2">{member.currentRole}</p>
            <div className="text-sm text-gray-500">
              <p className="mb-1">Stripe: {member.stripeTenure}</p>
              <p>{member.stripeRole}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team; 