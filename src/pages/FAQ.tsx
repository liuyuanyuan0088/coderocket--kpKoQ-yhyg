import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useState } from 'react';
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    {
      question: '如何開始投資？',
      answer: '您可以通過我們的官方網站或手機應用註冊賬戶，完成身份驗證後即可開始投資。我們的專業顧問團隊會為您提供個性化的投資建議。'
    },
    {
      question: '最低投資金額是多少？',
      answer: '我們的最低投資金額為10,000美元。對於大額投資，我們可以提供更優惠的管理費率和專屬服務。'
    },
    {
      question: '投資期限有何要求？',
      answer: '我們建議的最短投資期限為1年，以確保投資策略的有效實施。當然，您可以根據自身情況選擇更長的投資期限。'
    },
    {
      question: '如何查看投資收益？',
      answer: '您可以通過我們的手機應用或網站隨時查看投資組合和收益情況。我們還會定期發送投資報告到您的郵箱。'
    },
    {
      question: '投資風險如何控制？',
      answer: '我們採用嚴格的風險管理體系，包括投資組合分散、定期風險評估和止損機制等措施，力求在控制風險的前提下實現穩健收益。'
    },
    {
      question: '如何聯繫客戶服務？',
      answer: '您可以通過電話、郵件或在線聊天聯繫我們的客服團隊。我們的服務時間為週一至週五9:00-18:00。'
    }
  ];
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-[#34478F] mb-6">常見問題</h1>
            <p className="text-xl text-[#5A5A5A]">查看常見問題解答</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border-2 border-[#ECF0F6] rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-[#ECF0F6] transition-colors cursor-pointer"
                >
                  <h3 className="text-lg font-bold text-[#34478F] text-left">{faq.question}</h3>
                  <span className="text-[#34478F] text-2xl">
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
          <div className="mt-12 bg-[#ECF0F6] rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-[#34478F] mb-4">還有其他問題？</h2>
            <p className="text-[#666666] mb-6">
              如果您沒有找到想要的答案，請隨時聯繫我們的客服團隊
            </p>
            <button className="bg-[#34478F] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#2a3670] transition-colors cursor-pointer">
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