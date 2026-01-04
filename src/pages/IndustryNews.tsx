import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
function IndustryNews() {
  const news = [
    {
      title: '東盟新能源市場增長強勁',
      date: '2024-01-18',
      summary: '根據最新報告，東盟地區新能源市場預計在未來五年將保持20%以上的年增長率。',
      category: '市場趨勢'
    },
    {
      title: '太陽能投資成本持續下降',
      date: '2024-01-12',
      summary: '技術進步推動太陽能發電成本大幅下降，為投資者帶來更多機遇。',
      category: '技術發展'
    },
    {
      title: '政府政策支持綠色能源發展',
      date: '2024-01-05',
      summary: '多個東盟國家出台新政策，加大對新能源項目的支持力度。',
      category: '政策解讀'
    }
  ];
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-[#10B981] mb-6">行業新聞</h1>
            <p className="text-xl text-[#5A5A5A]">掌握新能源行業最新資訊</p>
          </div>
          <div className="space-y-8">
            {news.map((item, index) => (
              <div
                key={index}
                className="bg-white border-2 border-[#ECF0F6] rounded-lg p-8 hover:shadow-lg hover:border-[#10B981] transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[#10B981] font-bold">{item.date}</span>
                  <span className="text-[#666666]">|</span>
                  <span className="bg-[#ECF0F6] text-[#10B981] px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-[#10B981] mb-4">{item.title}</h2>
                <p className="text-[#666666] leading-relaxed mb-4">{item.summary}</p>
                <button className="text-[#10B981] font-medium hover:underline cursor-pointer">
                  閱讀更多 →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default IndustryNews;