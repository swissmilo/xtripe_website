const FAQ = () => {
  const faqs = [
    {
      question: "What is xTripe?",
      answer: "xTripe is an angel investing syndicate composed of former Stripe employees who invest in early-stage startups."
    },
    {
      question: "What types of companies do you invest in?",
      answer: "We focus on fintech, developer tools, and enterprise software companies where our operational experience can add the most value."
    },
    {
      question: "What is your typical check size?",
      answer: "We typically invest between $25,000 to $100,000 in pre-seed and seed stage companies."
    },
    {
      question: "How can founders get in touch?",
      answer: "You can reach out to us through our contact form or email us directly at team@xtripe.com"
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
    </div>
  );
};

export default FAQ; 