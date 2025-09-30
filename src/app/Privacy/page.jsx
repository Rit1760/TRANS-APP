"use client";

import "../../Styles/Privacy.css";
import Head from "next/head";

const Privacy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Transbolt Lightning Protection India</title>
        <meta
          name="description"
          content="Read Transbolt's privacy policy to understand how we collect, use, and protect your data. Your privacy matters to us."
        />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Transbolt | Privacy Policy" />
        <meta
          property="og:description"
          content="This privacy policy explains how Transbolt handles your personal data when you use our website and services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.transbolt.in/Privacy" />
        <meta property="og:site_name" content="Transbolt" />

        <meta
          name="keywords"
          content="Transbolt privacy policy, lightning protection privacy, data protection India, website privacy, data usage terms, user privacy Transbolt"
        />
      </Head>
      <div className="container1_Privacy">
        <h1>Privacy Policy</h1>
        <div className="col1_Privacy">
          <p>Effective Date: June 9, 2025</p>
          <p>
            At <strong>Transbolt</strong>, your privacy is important to us. This
            Privacy Policy outlines how we collect, use, and protect your
            personal information when you use our website and services.
          </p>
        </div>
        <div className="col2_Privacy">
          <h2>1. Information We Collect</h2>
          <p>We collect the following personal information from users:</p>
          <ul>
            <li>Full Name</li>
            <li>Email Address</li>
          </ul>
          <p>
            This information is collected when you fill out forms on our
            website, such as contact forms or newsletter signups.
          </p>
        </div>
        <div className="col3_Privacy">
          <h2>2. How We Use Your Information</h2>
          <p>Your personal information is used to:</p>
          <ul>
            <li>Respond to your inquiries or service requests</li>
            <li>Send updates or promotional emails (only if you opt-in)</li>
            <li>Improve our website and services</li>
          </ul>
        </div>
        <div className="col4_Privacy">
          <h2>3. Data Security</h2>
          <p>
            We take appropriate technical and organizational measures to protect
            your personal information from unauthorized access, loss, or misuse.
            However, please note that no system is 100% secure.
          </p>
        </div>
        <div className="col5_Privacy">
          <h2>4. Sharing of Data</h2>
          <p>
            We do <strong>not sell</strong> or share your personal information
            with third parties, except:
          </p>
          <ul>
            <li>When required by law</li>
            <li>
              To trusted partners who help us operate the website (under
              confidentiality agreements)
            </li>
          </ul>
        </div>
        <div className="col6_Privacy">
          <h2>5. Cookies and Analytics</h2>
          <p>
            Our website may use cookies or similar tracking technologies to
            improve user experience. These cookies may track anonymous usage
            data but do not collect personal information unless explicitly
            provided by you.
          </p>
        </div>
        <div className="col7_Privacy">
          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal data we have about you</li>
            <li>Request correction or deletion of your data</li>
            <li>Withdraw consent for marketing communications</li>
          </ul>
          <p>To exercise these rights, please contact us at the email below.</p>
        </div>
        <div className="col8_Privacy">
          <h2>7. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <p>
            <strong>Email:</strong> privacy@transbolt.in
          </p>
          <p>By using our website, you agree to this Privacy Policy.</p>
        </div>
      </div>
    </>
  );
};

export default Privacy;