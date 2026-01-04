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
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#10B981] mb-8 text-center">核心价值观 Core Values</h2>
            <p className="text-center text-[#666666] mb-12">
              在新能源产业与跨境合作的复杂环境中，我们以以下五大价值观，指引团队稳健前行。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white border-2 border-[#10B981] rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-[#10B981] mb-2">协同共创</h3>
                <p className="text-sm text-[#10B981] mb-4">Collaboration</p>
                <p className="text-[#666666] leading-relaxed">
                  我们相信，真正的竞争力来自协作。
                  通过跨区域、跨产业、跨专业的深度合作，
                  整合多方优势，共同创造长期价值。
                </p>
              </div>
              <div className="bg-white border-2 border-[#10B981] rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-[#10B981] mb-2">产业洞察</h3>
                <p className="text-sm text-[#10B981] mb-4">Insight</p>
                <p className="text-[#666666] leading-relaxed">
                  一切决策，源于对产业的理解。
                  我们持续关注新能源技术演进、政策环境与产业周期变化，
                  以研究为基础，提供理性、前瞻且可执行的判断支持。
                </p>
              </div>
              <div className="bg-white border-2 border-[#10B981] rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">⚖️</div>
                <h3 className="text-xl font-bold text-[#10B981] mb-2">稳健前行</h3>
                <p className="text-sm text-[#10B981] mb-4">Prudence</p>
                <p className="text-[#666666] leading-relaxed">
                  我们坚持长期主义与稳健原则。
                  在面对市场波动与环境变化时，
                  保持理性判断，重视风险识别与管理，
                  避免短期行为，追求可持续发展。
                </p>
              </div>
              <div className="bg-white border-2 border-[#10B981] rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🤍</div>
                <h3 className="text-xl font-bold text-[#10B981] mb-2">诚信信任</h3>
                <p className="text-sm text-[#10B981] mb-4">Trust</p>
                <p className="text-[#666666] leading-relaxed">
                  信任是合作的基础。
                  我们重视透明沟通、责任意识与专业操守，
                  通过可靠的执行与持续的价值创造，
                  赢得合作伙伴、团队与市场的长期信任。
                </p>
              </div>
              <div className="bg-white border-2 border-[#10B981] rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-bold text-[#10B981] mb-2">持续进化</h3>
                <p className="text-sm text-[#10B981] mb-4">Evolution</p>
                <p className="text-[#666666] leading-relaxed">
                  新能源产业不断演进，我们亦持续成长。
                  通过学习、实践与复盘，不断优化专业能力与协作方式，
                  在变化中保持清醒，在进化中坚守初心。
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#10B981] to-[#059669] rounded-lg p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">加入我们 Join Us</h2>
            <p className="text-lg mb-6">
              我们欢迎认同长期主义、理性判断与协作精神的伙伴加入团队。
              在这里，你将与来自不同背景的专业人士共同工作，
              参与新能源与跨境产业合作的真实实践，
              在稳健中成长，在协作中创造长期价值。
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default CompanyCulture;