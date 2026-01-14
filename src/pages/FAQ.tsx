import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useState } from 'react';
import { useContent } from '../contexts/ContentContext';
function FAQ() {
  const { faqItems } = useContent();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-[#10B981] mb-6">常見問題</h1>
            <p className="text-xl text-[#5A5A5A]">查看常見問題解答</p>
          </div>
          {faqItems.length > 0 ? (
            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <div
                  key={faq.id}
                  className="bg-white border-2 border-[#ECF0F6] rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-8 py-6 flex items-center justify-between hover:bg-[#ECF0F6] transition-colors cursor-pointer"
                  >
                    <h3 className="text-lg font-bold text-[#10B981] text-left">{faq.question}</h3>
                    <span className="text-[#10B981] text-2xl">
                      {openIndex === index ? '−' : '+'}
                    </span>
                  </button>
                  {openIndex === index && (
                    <div className="px-8 pb-6">
                      <p className="text-[#666666] leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-[#666666]">暫無常見問題</p>
            </div>
          )}
          <div className="mt-12 bg-[#ECF0F6] rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-[#10B981] mb-4">還有其他問題？</h2>
            <p className="text-[#666666] mb-6">
              如果您沒有找到想要的答案，請隨時聯繫我們的客服團隊
            </p>
            <button className="bg-[#10B981] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#059669] transition-colors cursor-pointer">
              聯繫客服
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default FAQ;