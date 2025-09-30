'use client';

import "../../Styles/Term.css";
import Head from 'next/head';

const Term = () => {
  return (
    <>
      <Head>
        <title>Terms and Conditions | Transbolt Lightning Protection</title>
        <meta
          name="description"
          content="Review the terms and conditions for using Transbolt, India's trusted lightning protection solutions provider."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Transbolt | Lightning Protection Terms and Conditions" />
        <meta
          property="og:description"
          content="Understand your rights and responsibilities while using the Transbolt website. Learn about legal terms, user responsibilities, and privacy."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.transbolt.in/terms" />
        <meta property="og:site_name" content="Transbolt" />
      </Head>

      <div className="container1_Term">
        <h1>Terms and Conditions</h1>

        <div className="col1_Term">
          <p>Effective Date: June 9, 2025</p>
          <p>
            These Terms and Conditions ("Terms") govern your use of the website operated by <strong>Transbolt</strong>,
            a company specializing in lightning protection solutions. By accessing or using our website, you agree to be bound by these Terms.
          </p>
        </div>

        <div className="col2_Term">
          <h2>1. Use of the Website</h2>
          <p>
            You agree to use this website only for lawful purposes. You must not use our site in any way that breaches any applicable law or regulation
            or is fraudulent or harmful.
          </p>
        </div>

        <div className="col3_Term">
          <h2>2. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and images, is the property of Transbolt and is protected by copyright and other intellectual property laws.
            You may not copy, reproduce, or distribute any part of the site without our written permission.
          </p>
        </div>

        <div className="col4_Term">
          <h2>3. User Submissions</h2>
          <p>
            Any information you provide to us (such as name or email) must be accurate and lawful. You must not submit any content that is abusive, offensive, or violates any rights.
          </p>
        </div>

        <div className="col5_Term">
          <h2>4. Limitation of Liability</h2>
          <p>
            Transbolt is not liable for any direct, indirect, incidental, or consequential damages arising from your use of this website.
            We provide all content "as is" and make no warranties of any kind.
          </p>
        </div>

        <div className="col6_Term">
          <h2>5. External Links</h2>
          <p>
            Our website may contain links to external websites. We are not responsible for the content or practices of those third-party sites.
          </p>
        </div>

        <div className="col7_Term">
          <h2>6. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. Any changes will be posted on this page. Your continued use of the website after changes means you accept the new Terms.
          </p>
        </div>

        <div className="col8_Term">
          <h2>7. Governing Law</h2>
          <p>
            These Terms shall be governed by the laws of India. Any disputes related to these Terms shall be subject to the exclusive jurisdiction of the courts in India.
          </p>
        </div>

        <div className="col9_Term">
          <h2>8. Contact Us</h2>
          <p>If you have any questions about these Terms and Conditions, you can contact us at:</p>
          <p><strong>Email:</strong> legal@transbolt.in</p>
        </div>

        <div className="col10_Term">
          <p>Thank you for visiting our website.</p>
        </div>
      </div>
    </>
  );
};

export default Term;