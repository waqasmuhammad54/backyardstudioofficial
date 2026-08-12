import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for Backyard Studio Official — Dubai production studio. Our service terms, payment, intellectual property, and cancellation policy.",
  alternates: { canonical: "https://www.backyardstudioofficial.com/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="container-xl" style={{ maxWidth: "52rem" }}>
        <p className="text-[#e8c547] text-xs tracking-[0.3em] uppercase font-semibold mb-4">Legal</p>
        <h1 className="font-display text-4xl md:text-5xl text-white mb-6">Terms &amp; Conditions</h1>
        <p className="text-[#666] text-sm mb-12">Last updated: January 2025</p>

        <div className="space-y-10 text-[#a0a0a0] leading-relaxed">
          <section>
            <h2 className="text-white text-xl font-semibold mb-4">1. Agreement</h2>
            <p>These Terms and Conditions govern all services provided by Backyard Studio Official ("we", "us", "our"), a production studio registered and operating in Dubai, United Arab Emirates. By engaging our services, you agree to be bound by these terms.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">2. Services</h2>
            <p>Backyard Studio Official provides photography, videography, and creative production services including but not limited to: wedding photography, corporate video production, event coverage, drone videography, social media content, and commercial photography.</p>
            <p className="mt-3">All services are subject to availability and confirmation by our team. A confirmed booking requires a signed agreement and deposit payment.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">3. Booking and Payment</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>A non-refundable deposit of 50% is required to confirm your booking date.</li>
              <li>The remaining balance is due prior to or on the day of the shoot, unless otherwise agreed in writing.</li>
              <li>We accept payment by bank transfer, credit card, or cash (UAE Dirham).</li>
              <li>Quotes are valid for 14 days from the date of issue.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">4. Cancellation Policy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cancellations made more than 14 days before the scheduled shoot: deposit is non-refundable but can be transferred to a new date within 6 months.</li>
              <li>Cancellations made within 14 days of the scheduled shoot: full package amount is forfeit.</li>
              <li>If we are required to cancel due to circumstances beyond our control (force majeure), we will reschedule at no additional charge or refund the deposit in full.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">5. Delivery Timelines</h2>
            <p>Standard delivery timelines are stated in your project agreement. Typical timelines:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Photo editing: 5–7 business days</li>
              <li>Video production: 7–14 business days</li>
              <li>Wedding photography: 14–21 business days</li>
              <li>Rush delivery is available at an additional charge — contact us for availability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">6. Intellectual Property</h2>
            <p>Upon full payment, the client receives a licence to use all delivered photographs and video content for personal and business purposes. Backyard Studio Official retains the copyright to all creative work produced.</p>
            <p className="mt-3">We reserve the right to use project work in our portfolio, website, and marketing materials unless the client requests confidentiality in writing prior to the project.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">7. Client Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Obtain all necessary permissions for filming at locations.</li>
              <li>Ensure subjects are available and ready at agreed times.</li>
              <li>Provide accurate project briefs and feedback within 7 days of draft delivery.</li>
              <li>Two rounds of revisions are included in all packages; additional revisions are charged at AED 350 per hour.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">8. Liability</h2>
            <p>Our liability is limited to the value of the services contracted. We are not liable for indirect or consequential losses. In the unlikely event of equipment failure or data loss, our liability is limited to a partial or full refund of fees paid — we do not guarantee re-shoots unless agreed in writing.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">9. Governing Law</h2>
            <p>These terms are governed by the laws of the United Arab Emirates. Any disputes shall be subject to the jurisdiction of the courts of Dubai, UAE.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-4">10. Contact</h2>
            <div className="p-6 bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm">
              <p className="text-white font-semibold">Backyard Studio Official</p>
              <p>Dubai, United Arab Emirates</p>
              <p className="mt-2"><a href="mailto:info@backyardstudioofficial.com" className="text-[#e8c547] hover:underline">info@backyardstudioofficial.com</a></p>
              <p><a href="https://wa.me/971585882685" className="text-[#e8c547] hover:underline">+971 58 588 2685</a></p>
            </div>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-[#2a2a2a]">
          <Link href="/privacy-policy" className="text-[#a0a0a0] hover:text-[#e8c547] text-sm transition-colors mr-8">Privacy Policy</Link>
          <Link href="/" className="text-[#a0a0a0] hover:text-[#e8c547] text-sm transition-colors">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
