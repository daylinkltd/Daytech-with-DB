import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-4 text-dark dark:text-light">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy:</h1>
      <p className="mb-4">
        Your privacy is important to us. It is Daytech.blog's policy to respect your privacy regarding
        any information we may collect from you across our website.
      </p>
      <p className="mb-4">
        <strong>Information We Collect:</strong>
        We may collect personal information such as your name, email address, and other details when
        you voluntarily submit it through our website.
      </p>
      <div className="mb-4">
        <strong>How We Use Your Information:</strong>
        We may use the information we collect in the following ways:
        <ul className="list-disc ml-8">
          <li>To personalize your experience on our website.</li>
          <li>To improve our website based on your feedback.</li>
          <li>To send periodic emails regarding our services.</li>
        </ul>
      </div>
      <p className="mb-4">
        <strong>Third-Party Services:</strong>
        We may use third-party services such as Google Analytics, Search Console, and Google AdSense
        to understand how our website is used and to provide relevant content and advertisements.
        These services may collect and use your information in accordance with their own privacy policies.
      </p>
      <p className="mb-4">
        <strong>Security:</strong>
        We strive to protect your personal information; however, no data transmission over the internet
        can be guaranteed to be 100% secure. While we strive to use commercially acceptable means to protect
        your personal information, we cannot guarantee its absolute security.
      </p>
      <p className="mb-4">
        <strong>Changes to This Privacy Policy:</strong>
        Daytech.blog may update this privacy policy from time to time. We will notify you of any changes
        by posting the new privacy policy on this page. We encourage you to review this privacy policy periodically
        for any changes.
      </p>
      <p className="mb-4">
        By using our website, you agree to the terms outlined in this privacy policy.
      </p>
      <p className="mb-4">
        If you have any questions about our Terms and Conditions or Privacy Policy, please contact us at{' '}
        <a href="mailto:daylinkltd@email.com" className="text-blue-500">daylinkltd@email.com</a>.
      </p>
      <h2 className="text-2xl font-bold mb-4">Installed Packages Related to Privacy:</h2>
      <p>
        <strong>Google Analytics:</strong>
        We use Google Analytics to analyze website traffic and improve user experience. Google Analytics may
        collect data about your device, browser, IP address, and pages you visit on our site. This information
        is used to understand and optimize our website performance.
      </p>
      <p>
        <strong>Google Search Console:</strong>
        We use Google Search Console to monitor and maintain our website's presence in Google search results.
        This service may collect data related to search queries and user interactions with search results.
      </p>
      <p>
        <strong>Google AdSense (Future Integration):</strong>
        If integrated, Google AdSense may display personalized ads based on user interests. It may use cookies
        or similar technologies to serve relevant ads. Users can opt-out of personalized advertising through
        their Ad Settings.
      </p>
      <div>
        Please review the privacy policies of these third-party services for more information on how they handle
        your data:
        <ul className="list-disc ml-8">
          <li>
            <a href="https://policies.google.com/privacy" className="text-blue-500" target="_blank" rel="noopener noreferrer">
              Google Analytics Privacy Policy
            </a>
          </li>
          <li>
            <a href="https://policies.google.com/technologies/partner-sites" className="text-blue-500" target="_blank" rel="noopener noreferrer">
              Google AdSense Privacy & Terms
            </a>
          </li>
        </ul>
      </div>
      <p className="mt-4">
        This is a general template and it is strongly recommended to consult with a legal professional
        to ensure compliance with applicable laws and regulations in your jurisdiction.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
