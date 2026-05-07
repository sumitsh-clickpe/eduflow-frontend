export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen font-sans bg-[#f8f9fa] text-gray-500 selection:bg-[#00D05A]/20 selection:text-[#081028] pt-20 pb-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="fixed top-0 left-1/4 -translate-x-1/2 w-[800px] h-[600px] bg-[#00D05A]/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="fixed bottom-0 right-1/4 translate-x-1/2 w-[600px] h-[500px] bg-[#081028]/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="max-w-4xl mx-auto bg-white rounded-[32px] p-8 md:p-16 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight text-[#081028]">
          Refund <span className="text-[#00D05A]">Policy</span>
        </h1>
        <div className="space-y-12 text-gray-500 font-medium leading-relaxed text-lg">
          <p>
            <strong className="text-[#081028] font-bold">["Margcred", "we" or "us"]</strong>{" "}
            is committed to fair and transparent refunds for our learners. This Refund Policy explains the conditions under which refunds may be requested and processed for course purchases on our platform.
          </p>
          <section>
            <h2 className="text-2xl font-bold text-[#081028] tracking-tight mb-4 border-l-4 border-[#00D05A] pl-4">1. Eligibility for Refund</h2>
            <p>You may request a refund within <strong className="text-[#00D05A] font-bold">7 days</strong> of purchase, provided you have consumed less than 25% of the course content.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-[#081028] tracking-tight mb-4 border-l-4 border-[#00D05A] pl-4">2. Non-Refundable Items</h2>
            <ul className="space-y-4">
              <li className="bg-[#f8f9fa] p-5 rounded-[16px] border border-gray-100 shadow-sm">Subscriptions after the trial period has ended.</li>
              <li className="bg-[#f8f9fa] p-5 rounded-[16px] border border-gray-100 shadow-sm">Courses where certificates have already been issued.</li>
              <li className="bg-[#f8f9fa] p-5 rounded-[16px] border border-gray-100 shadow-sm">Convenience fees and applicable taxes.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-[#081028] tracking-tight mb-4 border-l-4 border-[#00D05A] pl-4">3. Refund Process</h2>
            <p>Approved refunds are credited to the original payment method within <strong className="text-[#00D05A] font-bold">7-10 business days</strong>.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-[#081028] tracking-tight mb-4 border-l-4 border-[#00D05A] pl-4">4. How to Request</h2>
            <ul className="grid md:grid-cols-2 gap-4 mt-5">
              {["Log in to your Margcred account","Visit My Purchases","Select the course and click Request Refund","Provide a reason for your request","Submit and await confirmation","Receive refund within 7-10 days"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-500 font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#00D05A]"></span>{item}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-[#081028] tracking-tight mb-4 border-l-4 border-[#00D05A] pl-4">5. Disputes</h2>
            <p><strong className="text-[#00D05A] font-bold">"Margcred"</strong> reserves the right to deny refund requests in cases of suspected abuse or violation of our Terms and Conditions.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-[#081028] tracking-tight mb-4 border-l-4 border-[#00D05A] pl-4">6. Contact Us</h2>
            <p>For refund queries, contact <span className="text-[#081028] font-bold hover:text-[#00D05A] transition-colors cursor-pointer">+91 7965258132</span>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}