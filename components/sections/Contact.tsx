'use client';

import { useState } from 'react';

const Contact = () => {
  const handleContact = () => {
    const subject = encodeURIComponent("Xtripe Syndicate Inquiry");
    window.location.href = `mailto:contact@xtripe.vc?subject=${subject}`;
  };

  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
      <button
        onClick={handleContact}
        className="px-6 py-3 bg-[--stripe-purple] text-white rounded-full font-medium hover:opacity-90 transition-opacity"
      >
        Email Us
      </button>
    </div>
  );
};

export default Contact; 