export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen font-sans bg-[#f8f9fa] text-gray-500 selection:bg-[#00D05A]/20 selection:text-[#081028] pt-20 pb-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="fixed top-0 left-1/4 -translate-x-1/2 w-[800px] h-[600px] bg-[#00D05A]/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="fixed bottom-0 right-1/4 translate-x-1/2 w-[600px] h-[500px] bg-[#081028]/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="max-w-4xl mx-auto bg-white rounded-[32px] p-8 md:p-16 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight text-[#081028]">
          Terms & <span className="text-[#00D05A]">Conditions</span>
        </h1>
        <div className="space-y-12 text-gray-500 font-medium leading-relaxed text-lg">
          <p>
            These terms govern your use of <strong className="text-[#081028] font-bold">"Margcred"</strong> services including online learning, payments and related features. Please read them carefully.
          </p>
          <section>
            <h2 className="text-2xl font-bold text-[#081028] tracking-tight mb-4 border-l-4 border-[#00D05A] pl-4">General</h2>
            <p>This website and app are operated by "Margcred". By using the Services, you agree to these terms.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-[#081028] tracking-tight mb-4 border-l-4 border-[#00D05A] pl-4">Eligibility</h2>
            <p>You must be <strong className="text-[#00D05A] font-bold">18+</strong> and legally capable to form binding contracts in India, or a registered entity operating in India.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-[#081028] tracking-tight mb-4 border-l-4 border-[#00D05A] pl-4">Registration</h2>
            <p>Provide true, accurate, current and complete information. "Margcred" may reject or terminate access for violations.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-[#081028] tracking-tight mb-4 border-l-4 border-[#00D05A] pl-4">User Obligations</h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {["Provide accurate information","Maintain required licenses","Comply with applicable laws","Maintain account security","Bear applicable taxes"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 bg-[#f8f9fa] p-5 rounded-[16px] border border-gray-100 shadow-sm text-gray-500">
                  <span className="w-2 h-2 rounded-full bg-[#00D05A] shrink-0"></span>{item}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-[#081028] tracking-tight mb-4 border-l-4 border-[#00D05A] pl-4">Payment Terms - Fees</h2>
            <p>Convenience fees are disclosed prior to transaction and are <strong className="text-[#081028] font-bold">non-refundable</strong>, except for technical failures.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-[#081028] tracking-tight mb-4 border-l-4 border-[#00D05A] pl-4">Contact Information</h2>
            <p>For queries, contact <span className="text-[#081028] font-bold hover:text-[#00D05A] transition-colors cursor-pointer">+91 7965258132</span>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}