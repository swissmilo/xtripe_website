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
        className="px-6 py-3 bg-[--stripe-purple] text-white rounded-full font-medium hover:opacity-90 transition-opacity mb-8"
      >
        Email Us
      </button>

      {/* Social Media Links */}
      <div className="flex justify-center items-center space-x-6 mt-6">
        <a
          href="https://www.linkedin.com/company/xtripe-angels/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-[--stripe-purple] transition-colors"
        >
          <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
        <a
          href="https://x.com/XtripeVC"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-[--stripe-purple] transition-colors"
        >
          <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Contact; 