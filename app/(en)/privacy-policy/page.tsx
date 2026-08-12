import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Backyard Studio Official — Dubai's leading production studio. How we collect, use, and protect your personal information.",
  alternates: { canonical: "https://www.backyardstudioofficial.com/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="container-xl" style={{ maxWidth: "52rem" }}>
        <p className="text-[#e8c547] text-xs tracking-[0.3em] uppercase font-semibold mb-4">Legal</p>
        <h1 className="font-display text-4xl md:text-5xl text-white mb-6">Privacy Policy</h1>
        <p className="text-[#666] text-sm mb-12">Last updated: January 2025</p>

        <div className="space-y-10 text-[#a0a0a0] leading-relaxed">
          <section>
            <h2 className="text-white text-xl font-semibold mb-4">1. Who We Are</h2>
            <p>Backyard Studio Official ("we", "us", "our") is a production studio based in Dubai, United Arab Emirates. We provide photography, videography, and creative production services across all 7 UAE emirates.</p>
            <p className="mt-3">Contact: <a href="mailto:info@backyardstudioofficial.com" className="text-[#e8c547] hover:underline">info@backyardstudioofficial.com</a> | +971 58 588 2685</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">2. Information We Collect</h2>
            <p>We collect information you provide directly to us when you:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Contact us via our website contact form, email, or WhatsApp</li>
              <li>Request a quote or book our services</li>
              <li>Subscribe to our newsletter or blog updates</li>
              <li>Communicate with us during project delivery</li>
            </ul>
            <p className="mt-4">This information may include your name, email address, phone number, company name, and project requirements. We also collect standard analytics data (pages visited, browser type, device) via Google Analytics.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Respond to your enquiries and provide quotes</li>
              <li>Deliver the production services you have booked</li>
              <li>Send project updates and deliverables</li>
              <li>Improve our website and services based on usage data</li>
              <li>Comply with legal obligations in the UAE</li>
            </ul>
            <p className="mt-4">We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">4. Data Storage and Security</h2>
            <p>Your information is stored securely using industry-standard encryption. We retain client project data for a period of 3 years following project completion, after which it is securely deleted unless you request otherwise or we are required by law to retain it.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">5. Cookies</h2>
            <p>Our website uses cookies to analyse site traffic via Google Analytics (GA4). These cookies collect anonymised usage data to help us understand how visitors use our site. You can disable cookies in your browser settings at any time.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">6. Your Rights</h2>
            <p>You have the right to request access to, correction of, or deletion of your personal data held by us. To make such a request, contact us at <a href="mailto:info@backyardstudioofficial.com" className="text-[#e8c547] hover:underline">info@backyardstudioofficial.com</a>. We will respond within 30 days.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">7. Third-Party Services</h2>
            <p>Our website may use the following third-party services, each with their own privacy policies:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Google Analytics — website usage analytics</li>
              <li>Google Maps — location information</li>
              <li>WhatsApp — client communication</li>
              <li>Vercel — website hosting</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">8. Contact</h2>
            <p>If you have questions about this Privacy Policy or how we handle your data, please contact us:</p>
            <div className="mt-4 p-6 bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm">
              <p className="text-white font-semibold">Backyard Studio Official</p>
              <p>Dubai, United Arab Emirates</p>
              <p className="mt-2"><a href="mailto:info@backyardstudioofficial.com" className="text-[#e8c547] hover:underline">info@backyardstudioofficial.com</a></p>
              <p><a href="https://wa.me/971585882685" className="text-[#e8c547] hover:underline">+971 58 588 2685</a></p>
            </div>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-[#2a2a2a]">
          <Link href="/terms" className="text-[#a0a0a0] hover:text-[#e8c547] text-sm transition-colors mr-8">Terms &amp; Conditions</Link>
          <Link href="/" className="text-[#a0a0a0] hover:text-[#e8c547] text-sm transition-colors">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
