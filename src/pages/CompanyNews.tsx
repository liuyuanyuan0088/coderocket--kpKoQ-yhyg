import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
function CompanyNews() {
  const news = [
    {
      title: '公司新聞標題',
      date: '2024-01-15',
      summary: '這是新聞摘要'
    }
  ];
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-[#10B981] mb-6">公司新聞</h1>
          </div>
          <div className="space-y-8">
            {news.map((item, index) => (
              <div
                key={index}
                className="bg-white border-2 border-[#ECF0F6] rounded-lg p-8"
              >
                <span className="text-[#10B981] font-bold">{item.date}</span>
                <h2 className="text-2xl font-bold text-[#10B981] my-4">{item.title}</h2>
                <p className="text-[#666666]">{item.summary}</p>
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