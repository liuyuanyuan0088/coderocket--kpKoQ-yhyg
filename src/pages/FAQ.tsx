import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useState } from 'react';
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    {
      question: '如何開始投資？',
      answer: '您可以通過我們的網站註冊賬戶開始投資。'
    }
  ];
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-[#10B981] mb-6">常見問題</h1>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border-2 border-[#ECF0F6] rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between cursor-pointer"
                >
                  <h3 className="text-lg font-bold text-[#10B981]">{faq.question}</h3>
                  <span className="text-[#10B981] text-2xl">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <p className="text-[#666666]">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default FAQ;