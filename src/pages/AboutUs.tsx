import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-[#10B981] mb-6">關於我們</h1>
            <p className="text-xl text-[#5A5A5A]">專注於東盟地區新能源資產投資管理</p>
          </div>
          <div className="bg-gradient-to-r from-[#10B981] to-[#059669] rounded-lg p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">公司簡介</h2>
            <p className="text-lg leading-relaxed">
              東盟新能資產管理有限公司立足新能源与可持续产业领域，
              以产业研究、跨境协作与项目支持为核心能力，
              连接资本、技术与市场资源。
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default AboutUs;