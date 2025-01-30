const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">About Xtripe Syndicate</h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Why did we start this collective?</h3>
          <p className="text-gray-600">
            We believe in the future potential of the Stripe network and how it can benefit 
            the next generation of startups. The Xtripe Syndicate is an opportunity to leverage 
            our collective expertise to accelerate and increase the overall value of startups 
            where we invest. It's also a chance for Stripe Alumni to get introduced to investing.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4">Who do we invest in?</h3>
          <p className="text-gray-600">
            We prioritize pre-seed & seed-stage companies led by exceptional founders, working 
            in areas where the expertise of our alumni network can add value (fintech, developer 
            products, B2B SaaS, risk management, etc.). We're also partial to Stripe Alumni 
            starting companies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About; 