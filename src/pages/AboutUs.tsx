import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useContent } from '../contexts/ContentContext';
function AboutUs() {
  const { teamMembers, teamCulture } = useContent();
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-[#10B981] mb-6">關於我們</h1>
            <p className="text-xl text-[#5A5A5A]">專注於東盟地區新能源資產投資管理</p>
          </div>
          <div className="mb-16">
            <div className="bg-gradient-to-r from-[#10B981] to-[#059669] rounded-lg p-12 text-white mb-12">
              <h2 className="text-3xl font-bold mb-6">公司簡介</h2>
              <p className="text-lg leading-relaxed mb-4">
                東盟新能資產管理有限公司立足新能源与可持续产业领域，
                以产业研究、跨境协作与项目支持为核心能力，
                连接资本、技术与市场资源。
              </p>
              <p className="text-lg leading-relaxed">
                公司秉持專業、創新、穩健的經營理念，致力於為客戶提供優質的資產管理服務，
                通過專業的投資策略和嚴格的風險管理，為客戶創造長期穩健的投資回報。
              </p>
            </div>
          </div>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#10B981] mb-8 text-center">管理團隊</h2>
            <div className="space-y-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-[#ECF0F6] rounded-lg p-8"
                >
                  <div className="flex items-start gap-6 mb-6">
                    {member.avatar ? (
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-24 h-24 rounded-full object-cover flex-shrink-0 border-4 border-[#10B981]"
                      />
                    ) : (
                      <div className="w-24 h-24 bg-[#10B981] rounded-full flex-shrink-0"></div>
                    )}
                    <div>
                      <h3 className="text-2xl font-bold text-[#10B981] mb-1">{member.name}</h3>
                      <p className="text-sm text-[#666666] mb-2">{member.nameEn}</p>
                      <p className="text-lg font-semibold text-[#10B981] mb-1">{member.position}</p>
                      <p className="text-sm text-[#666666]">{member.positionEn}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-[#10B981] mb-2">背景</h4>
                      <p className="text-[#666666] leading-relaxed">{member.background}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#10B981] mb-2">专业领域</h4>
                      <p className="text-[#666666]">{member.focus}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#10B981] mb-2">信念</h4>
                      <p className="text-[#666666] italic">{member.belief}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#ECF0F6] rounded-lg p-12 mb-16">
            <h2 className="text-3xl font-bold text-[#10B981] mb-6 text-center">团队文化 Team Culture</h2>
            <p className="text-[#666666] leading-relaxed mb-8 text-center">
              東盟新能資产管理有限公司的团队文化，建立在协作、信任与长期主义之上。
              我们相信，在新能源与跨境产业合作的复杂环境中，真正可持续的成果，
              来自团队的集体判断与稳定执行，而非个人的短期表现。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamCulture.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-[#10B981] mb-1">{item.title}</h4>
                    <p className="text-sm text-[#10B981] mb-2">{item.subtitle}</p>
                    <p className="text-sm text-[#666666]">{item.description}</p>
                  </div>
                </div>
              ))}
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
export default AboutUs;