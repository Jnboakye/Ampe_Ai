
export default function Pricing() {
  return (
    <main id="pricing" className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-12 text-center">Pricing Plans</h1>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="p-6 border rounded shadow text-center">
          <h2 className="text-2xl font-semibold mb-4">Basic</h2>
          <p className="text-4xl font-bold mb-6">$19/mo</p>
          <ul className="mb-6 space-y-2">
            <li>✓ AI-powered chatbot</li>
            <li>✓ Email support</li>
            <li>✓ 1000 monthly queries</li>
          </ul>
          <button className="btn-primary">Get Started</button>
        </div>
        <div className="p-6 border rounded shadow text-center bg-indigo-600 text-white">
          <h2 className="text-2xl font-semibold mb-4">Pro</h2>
          <p className="text-4xl font-bold mb-6">$49/mo</p>
          <ul className="mb-6 space-y-2">
            <li>✓ Everything in Basic</li>
            <li>✓ Priority email support</li>
            <li>✓ 10,000 monthly queries</li>
          </ul>
          <button className="btn-secondary">Get Started</button>
        </div>
        <div className="p-6 border rounded shadow text-center">
          <h2 className="text-2xl font-semibold mb-4">Enterprise</h2>
          <p className="text-4xl font-bold mb-6">Contact Us</p>
          <ul className="mb-6 space-y-2">
            <li>✓ Custom AI solutions</li>
            <li>✓ Dedicated account manager</li>
            <li>✓ Unlimited queries</li>
          </ul>
          <button className="btn-primary">Contact Sales</button>
        </div>
      </div>
    </main>
  );
}
