// components/WebsiteTermsOfService.js
'use client';

import React from 'react';

const TermsOfService = () => {
  return (
    <div className="p-8 text-gray-700 md:p-12 lg:p-16">
      <h1 className="mb-6 text-4xl font-bold">Website Terms of Service</h1>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">1. Introduction</h2>
        <p className="leading-relaxed">
          Welcome to PoSciDonDAO Foundation (“Company”, “we”, “our”, “us”). These Terms of Service ("Terms") govern your access and use of our website located at https://www.poscidondao.com (the "Website").
        </p>
        <p className="leading-relaxed">
          By visiting or using our Website, you acknowledge and agree to these Terms. If you disagree with any part, please discontinue your use of the Website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">2. Use of Website</h2>
        <p className="leading-relaxed">
          The content provided on this Website is for informational purposes only and should not be considered financial, investment, or legal advice. Users are solely responsible for conducting their own due diligence.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">3. Intellectual Property</h2>
        <p className="leading-relaxed">
          All content on the Website, including text, graphics, logos, and images, is the property of PoSciDonDAO Foundation or its licensors and is protected by applicable intellectual property laws. Unauthorized use or reproduction is strictly prohibited.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">4. Third-Party Links</h2>
        <p className="leading-relaxed">
          Our Website may contain links to external websites or resources not controlled by us. We are not responsible for the content or privacy practices of these external websites. Users access these links at their own risk.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">5. Disclaimer</h2>
        <p className="leading-relaxed">
          The information provided on our Website is offered "as-is" without any warranty of accuracy, completeness, or reliability. PoSciDonDAO Foundation disclaims all liability arising from the use or reliance on this Website or its contents.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">6. Limitation of Liability</h2>
        <p className="leading-relaxed">
          Under no circumstances will PoSciDonDAO Foundation be liable for any direct, indirect, incidental, or consequential damages resulting from your access or use of the Website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">7. Changes to Terms</h2>
        <p className="leading-relaxed">
          We reserve the right to amend or update these Terms at any time. Changes will be posted on this page with an updated revision date. Your continued use of the Website signifies acceptance of these changes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">8. Governing Law</h2>
        <p className="leading-relaxed">
          These Terms are governed by and construed in accordance with the laws of the Republic of Panama. Any dispute arising out of or related to these Terms shall be submitted to the exclusive jurisdiction of the courts of Panama.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">9. Contact Information</h2>
        <p className="leading-relaxed">
          For any questions regarding these Terms, please contact us at hello@poscidon.com.
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;
