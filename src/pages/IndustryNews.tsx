import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useContent } from '../contexts/ContentContext';
function IndustryNews() {
  const { newsArticles } = useContent();
  const industryNews = newsArticles.filter(article => article.type === 'industry');
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-[#10B981] mb-6">行業新聞</h1>
            <p className="text-xl text-[#5A5A5A]">掌握新能源行業最新資訊</p>
          </div>
          {industryNews.length > 0 ? (
            <div className="space-y-8">
              {industryNews.map((item, index) => (
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
          ) : (
            <div className="text-center py-12">
              <p className="text-[#666666]">暫無行業新聞</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default IndustryNews;