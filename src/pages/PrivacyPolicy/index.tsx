export default function PrivacyPolicy() {
  const lastUpdated = "May 10, 2026";

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 py-12">
      <div className="">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">
          Last updated: {lastUpdated}
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Information We Collect
            </h2>
            <p className="leading-7">
              We may collect personal information you voluntarily provide to us,
              including your name, email address, phone number, company name,
              and any other information submitted through forms or contact
              requests.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2 leading-7">
              <li>Respond to inquiries and requests</li>
              <li>Provide products or services</li>
              <li>Send updates, marketing, or promotional materials</li>
              <li>Improve our website and user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Sharing of Information
            </h2>
            <p className="leading-7">
              We do not sell your personal information. We may share information
              with trusted service providers who help us operate our business,
              such as hosting providers, analytics platforms, or CRM tools.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Data Security
            </h2>
            <p className="leading-7">
              We take reasonable measures to protect your information from
              unauthorized access, disclosure, or misuse. However, no method of
              transmission over the internet is completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Your Rights
            </h2>
            <p className="leading-7">
              You may request access to, correction of, or deletion of your
              personal information by contacting us directly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Third-Party Services
            </h2>
            <p className="leading-7">
              Our website may use third-party tools or integrations, including
              analytics, advertising, and customer relationship management
              services. These providers may process data according to their own
              privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Contact Us
            </h2>
            <p className="leading-7">
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>

            <div className="mt-4 p-4 border rounded-xl bg-gray-50">
              <p>Seed Builders</p>
              <p>seedbuilderjim@gmail.com</p>
              <p>https://seedbuilders.org</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}