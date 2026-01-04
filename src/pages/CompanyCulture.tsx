import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
function CompanyCulture() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-[#10B981] mb-6">公司文化</h1>
            <p className="text-xl text-[#5A5A5A]">Company Culture</p>
          </div>
          <div className="mb-16">
            <div className="bg-gradient-to-r from-[#10B981] to-[#059669] rounded-lg p-12 text-white mb-8">
              <h2 className="text-3xl font-bold mb-4">使命 Mission</h2>
              <p className="text-2xl font-semibold mb-6">连接产业价值，推动可持续未来</p>
              <p className="text-lg leading-relaxed">
                東盟新能資產管理有限公司立足新能源与可持续产业领域，
                以产业研究、跨境协作与项目支持为核心能力，
                连接资本、技术与市场资源，
                协助合作伙伴在复杂多变的区域与全球环境中，
                实现长期、稳健与可持续的发展。
                我们关注的不只是资源配置，更是价值如何被理解、形成并真正落地。
              </p>
            </div>
            <div className="bg-[#ECF0F6] rounded-lg p-12">
              <h2 className="text-3xl font-bold text-[#10B981] mb-4">愿景 Vision</h2>
              <p className="text-2xl font-semibold text-[#10B981] mb-6">成为值得信赖的新能源产业研究与协作平台</p>
              <p className="text-lg text-[#666666] leading-relaxed">
                立足中国，连接东盟，面向全球。
                我们致力于打造一个具备前瞻视野、专业深度与高度信任度的
                新能源产业研究与协作平台，
                成为政府机构、产业伙伴及合作方在新能源领域中
                长期可靠的战略支持者与协作伙伴。
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default CompanyCulture;