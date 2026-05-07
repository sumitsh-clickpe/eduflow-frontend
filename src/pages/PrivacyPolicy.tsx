export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen font-sans bg-[#f8f9fa] text-gray-500 selection:bg-[#00D05A]/20 selection:text-[#081028] pt-20 pb-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="fixed top-0 left-1/4 -translate-x-1/2 w-[800px] h-[600px] bg-[#00D05A]/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="fixed bottom-0 right-1/4 translate-x-1/2 w-[600px] h-[500px] bg-[#081028]/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="max-w-4xl mx-auto bg-white rounded-[32px] p-8 md:p-16 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight text-[#081028]">
          Privacy <span className="text-[#00D05A]">Policy</span>
        </h1>
        <div className="space-y-12 text-gray-500 font-medium leading-relaxed text-lg">
          <p>
            <strong className="text-[#081028] font-bold">["Margcred", "we" or "us"]</strong>{" "}
            is committed to protecting your information and privacy. This Privacy Policy is designed to help you understand how we may collect, process, store and use the information you provide to us and to assist you in making informed decisions while using our Service.
          </p>
          <section>
            <h2 className="text-2xl font-bold text-[#081028] tracking-tight mb-4 border-l-4 border-[#00D05A] pl-4">1. Acceptance of this Policy</h2>
            <p>You are advised to read this Privacy Policy carefully. By accepting this Privacy Policy and the Terms and Conditions of Use, a User expressly consents to <strong className="text-[#00D05A] font-bold">"Margcred"</strong> collection, storage, use, and disclosure of his information as described herein.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-[#081028] tracking-tight mb-4 border-l-4 border-[#00D05A] pl-4">2. Applicability of this Policy</h2>
            <p>This Privacy Policy applies to any information of the user when he accesses/visits our Sites or uses our Services and does not apply to online platforms or services that <strong className="text-[#00D05A] font-bold">"Margcred"</strong> do not own or control.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-[#081028] tracking-tight mb-4 border-l-4 border-[#00D05A] pl-4">3. Changes to this Policy</h2>
            <p>We may revise this Privacy Policy from time to time to reflect changes to our business, the Sites or Services, or applicable laws. The revised Privacy Policy will be effective as of the published effective date.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-[#081028] tracking-tight mb-4 border-l-4 border-[#00D05A] pl-4">4. Data Retention Policy</h2>
            <p><strong className="text-[#00D05A] font-bold">"Margcred"</strong> ensures secure storage of user data and retains transactional records as per regulatory compliance. Users can request data deletion as per our privacy policy.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-[#081028] tracking-tight mb-4 border-l-4 border-[#00D05A] pl-4">5. Definitions</h2>
            <ul className="space-y-4">
              <li className="bg-[#f8f9fa] p-5 rounded-[16px] border border-gray-100 shadow-sm"><strong className="text-[#081028] font-bold">"Margcred"</strong> includes its affiliates and subsidiaries.</li>
              <li className="bg-[#f8f9fa] p-5 rounded-[16px] border border-gray-100 shadow-sm"><strong className="text-[#081028] font-bold">"Margcred" Account/Services</strong> means services offered by "Margcred" in connection with your account.</li>
              <li className="bg-[#f8f9fa] p-5 rounded-[16px] border border-gray-100 shadow-sm"><strong className="text-[#081028] font-bold">Personal Data/Information</strong> means personal information that can identify a person.</li>
              <li className="bg-[#f8f9fa] p-5 rounded-[16px] border border-gray-100 shadow-sm"><strong className="text-[#081028] font-bold">Process</strong> means any method we handle Personal Data whether or not by automated means.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-[#081028] tracking-tight mb-4 border-l-4 border-[#00D05A] pl-4">6. Information We Collect</h2>
            <p>We collect information necessary to render services, including name, address, contact, and KYC details.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-[#081028] tracking-tight mb-4 border-l-4 border-[#00D05A] pl-4">7. Storage of Personal Information</h2>
            <p>We retain personal information as required by law and legitimate business interests.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-[#081028] tracking-tight mb-4 border-l-4 border-[#00D05A] pl-4">8. Use of Personal Information</h2>
            <ul className="grid md:grid-cols-2 gap-4 mt-5">
              {["Providing and improving services","Completing transactions and settlements","Tailoring user experience","Resolving disputes and troubleshooting","Detecting and preventing fraud","Complying with legal requirements"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-500 font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#00D05A]"></span>{item}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-[#081028] tracking-tight mb-4 border-l-4 border-[#00D05A] pl-4">9. Information Security</h2>
            <p><strong className="text-[#00D05A] font-bold">"Margcred"</strong> employs stringent security measures. Sensitive information is encrypted.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-[#081028] tracking-tight mb-4 border-l-4 border-[#00D05A] pl-4">10. Contact Us</h2>
            <p>For queries regarding this Privacy Policy, contact <span className="text-[#081028] font-bold hover:text-[#00D05A] transition-colors cursor-pointer">+91 7965258132</span>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}