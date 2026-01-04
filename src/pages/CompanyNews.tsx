import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
function CompanyNews() {
  const news = [
    {
      title: '公司管理資產規模突破5億美元',
      date: '2024-01-15',
      summary: '得益於穩健的投資策略和專業的管理團隊，公司管理資產規模成功突破5億美元大關。',
      content: '這是公司發展史上的重要里程碑...'
    },
    {
      title: '新增東盟三國投資項目',
      date: '2024-01-10',
      summary: '公司在越南、泰國、印尼三國新增多個新能源投資項目，進一步擴大業務版圖。',
      content: '隨著東盟地區新能源市場的快速發展...'
    },
    {
      title: '獲得最佳資產管理公司獎',
      date: '2023-12-20',
      summary: '在2023年度金融服務評選中，公司榮獲"最佳新能源資產管理公司"獎項。',
      content: '這一榮譽充分肯定了公司在新能源投資領域的專業表現...'
    }
  ];
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-[#10B981] mb-6">公司新聞</h1>
            <p className="text-xl text-[#5A5A5A]">了解公司最新動態和重要公告</p>
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
                    公司動態
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
export default CompanyNews;