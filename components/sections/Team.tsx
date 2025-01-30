const Team = () => {
  const team = [
    {
      name: "Milo",
      role: "General Partner",
      bio: "Previously led Growth at Stripe",
    },
    {
      name: "Danika",
      role: "General Partner",
      bio: "Previously led Product at Stripe",
    },
    {
      name: "Anthony",
      role: "General Partner",
      bio: "Previously led Engineering at Stripe",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member) => (
          <div key={member.name} className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200"></div>
            <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
            <p className="text-gray-600 mb-2">{member.role}</p>
            <p className="text-sm text-gray-500">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team; 