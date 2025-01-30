const FAQ = () => {
  const faqs = [
    {
      question: "What is the fund structure?",
      answer: "We are using the AngelList Syndicates platform. The main difference between a syndicate and a fund is that a fund collects money upfront and the general partners make the ultimate investment decisions. On the other hand, the syndicate invests on a deal by deal basis and capital is only called per investment. You ultimately get to decide which deals you want to invest in and which you want to pass on, so it's much more like angel investing."
    },
    {
      question: "How do I join the Syndicate?",
      answer: "You must be an accredited investor and sign up for an account on AngelList. Once you get approved from AngelList, join our private syndicate. Join our channel #xtripe-angels in the Alumni Slack. This DOES NOT represent a legally binding commitment to capital."
    },
    {
      question: "Can I invite others to the syndicate?",
      answer: "You may invite other Stripe Alumni (Xtripes)."
    },
    {
      question: "Can only Stripe Alumni invest?",
      answer: "We prioritize internal capital from Stripe Alumni. For certain deals we might co-syndicate or invite select individuals to fill up the allocation."
    },
    {
      question: "How much of an allocation do you ask for per deal?",
      answer: "We're seeking at least $100K allocation to start, more if there is strong interest and available allocation. AngelList charges a flat $8K fee per deal to spin up the legal entity structure (will be split pro rata among investors) so a deal will not go through unless we can raise $100K+."
    },
    {
      question: "What is the check size per deal per investor?",
      answer: "Historically people have invested an average of $5k to $10K per investment up to $100k."
    },
    {
      question: "Is there a management fee?",
      answer: "No, we do not charge a management fee. We want to create an active community where folks genuinely want to help out and long term interests are aligned."
    },
    {
      question: "What is the carry?",
      answer: "The syndicate gets a standard 20% of carry, which is the share of any profits realized from the investment."
    },
    {
      question: "Can I refer an investment opportunity to the syndicate?",
      answer: "Yes, absolutely! Many of our deals come through our alumni network, just send us a DM on Slack. If the syndicate ends up investing into the deal, you will get a an equal 5% share of the carry."
    },
    {
      question: "How does the investment process work?",
      answer: "For every investment opportunity, we will send out an investment memo and if the founder agrees, set up a video pitch session & Q&A (we will record these for those that cannot attend live). Afterward, we ask members to submit commitments through our form (give a 3-7 day deadline). If we see over $100k+ in commitments submitted, one of our leads will create the AngelList page and invite everyone who signed up to send their funds over AngelList (who then remits funds to the startup)."
    },
    {
      question: "How many deals do we invest in per year?",
      answer: "Ultimately, you decide which deals you want to invest in. We expect to be very selective to start with a few deals per year, and we will see where the venture goes from there."
    },
    {
      question: "What if a deal is oversubscribed?",
      answer: "If the deal looks oversubscribed based on Slack soft commitments, we will enforce a limit on how much each person can contribute and accept funds on a first come first serve basis or honor prioritization requests from the founder."
    },
    {
      question: "What if I have competitive interests?",
      answer: "Please refrain from participating in deals where you have a competitive interest."
    },
    {
      question: "Do my Stripe shares count towards the accredited investor status?",
      answer: "Our non-legal answer is generally, yes (please consult with official legal counsel about your own specific situation before making important decisions). However, the accredited investor definition is known to be self-reported."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-6">
            <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-500 italic">
          Mandatory disclaimer: Seed investing is a risky activity for sophisticated investors and 
          there is no guarantee that you will see your money again. By participating, you certify 
          that you know what you're doing.
        </p>
      </div>
    </div>
  );
};

export default FAQ; 