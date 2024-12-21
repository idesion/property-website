const AgentNetwork = () => {
  const overallStats = {
    totalTransactions: "51,700+",
    totalValue: "$15.5B",
    totalAgencies: "130+",
    totalAgents: "20,000+",
  };

  const agencyStats = [
    {
      name: "Century 21",
      logo: "/placeholder.svg",
    },
    {
      name: "RE/MAX",
      logo: "/placeholder.svg",
    },
    {
      name: "Coldwell Banker",
      logo: "/placeholder.svg",
    },
    {
      name: "Keller Williams",
      logo: "/placeholder.svg",
    },
    {
      name: "Sotheby's",
      logo: "/placeholder.svg",
    },
    {
      name: "Berkshire Hathaway",
      logo: "/placeholder.svg",
    },
    {
      name: "eXp Realty",
      logo: "/placeholder.svg",
    },
    {
      name: "Compass",
      logo: "/placeholder.svg",
    },
  ];

  return (
    <div className="container mx-auto py-20 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Agent Network</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Partner with the most successful real estate agencies in the country
        </p>
      </div>

      {/* Overall Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        <div className="text-center">
          <h4 className="text-4xl font-bold text-primary mb-2">
            {overallStats.totalTransactions}
          </h4>
          <p className="text-gray-600">annual transactions completed</p>
        </div>
        <div className="text-center">
          <h4 className="text-4xl font-bold text-primary mb-2">
            {overallStats.totalValue}
          </h4>
          <p className="text-gray-600">total property value transacted</p>
        </div>
        <div className="text-center">
          <h4 className="text-4xl font-bold text-primary mb-2">
            {overallStats.totalAgencies}
          </h4>
          <p className="text-gray-600">partnered agencies</p>
        </div>
        <div className="text-center">
          <h4 className="text-4xl font-bold text-primary mb-2">
            {overallStats.totalAgents}
          </h4>
          <p className="text-gray-600">trusted agents</p>
        </div>
      </div>

      {/* Agency Logos */}
      <div className="flex flex-wrap justify-center items-center gap-8">
        {agencyStats.map((agency, index) => (
          <img
            key={index}
            src={agency.logo}
            alt={`${agency.name} logo`}
            className="w-24 h-24 object-contain grayscale hover:grayscale-0 transition-all"
          />
        ))}
      </div>
    </div>
  );
};

export default AgentNetwork;
