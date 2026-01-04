import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
function AboutUs() {
  const team = [
    {
      name: '姜云成',
      nameEn: 'Jiang Yuncheng',
      position: '创始人',
      positionEn: 'Founder',
      background: '姜云成先生长期从事产业协作与企业发展相关工作，具备跨区域、跨产业的实践经验。其职业生涯中，持续关注新能源与可持续产业的发展方向，并积极参与企业家交流与产业合作平台的建设。在企业实践过程中，姜云成先生逐步将重心放在新能源产业研究、跨境资源协作及项目推动上，致力于连接中国内地与东南亚市场，推动产业、技术与资源之间的理性合作。',
      focus: '新能源产业研究｜跨境产业协作｜项目推动与资源协调｜长期发展战略',
      belief: '"尊重产业规律，顺应时代趋势，在长期主义中创造真实价值。"'
    },
    {
      name: '李柏青',
      nameEn: 'Li Baiqing',
      position: '项目负责人',
      positionEn: 'Project Lead',
      background: '在产业研究与项目管理领域拥有多年实践经验，长期参与跨团队、跨区域项目协作，对复杂项目的推进节奏、风险识别与资源协调具备系统性理解。',
      focus: '项目规划与执行｜风险识别与管理｜资源协同｜跨团队协作',
      belief: '"顺应产业趋势，保持定力判断，在变化中稳健推进。"'
    },
    {
      name: '陈思琪',
      nameEn: 'Chen Siqi',
      position: '首席咨询官',
      positionEn: 'Chief Consulting Officer',
      background: '拥有超过 10 年的企业咨询与产业研究经验，长期为企业提供战略分析与决策支持。其工作重点在于结合行业研究与实际场景，协助企业在产业变革与市场调整中保持稳健发展。',
      focus: '产业与市场研究｜企业发展战略｜合作关系与沟通机制',
      belief: '"理性的战略，源于对产业逻辑的理解，以及对变化的冷静回应。"'
    }
  ];
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
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-[#ECF0F6] rounded-lg p-8"
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-24 h-24 bg-[#10B981] rounded-full flex-shrink-0"></div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🤝</div>
                <div>
                  <h4 className="font-bold text-[#10B981] mb-2">协作共进 Cross-functional Collaboration</h4>
                  <p className="text-sm text-[#666666]">
                    我们鼓励跨职能、跨背景的深度协作。
                    通过不同专业视角的融合，形成更全面、更稳健的判断，共同推动项目落地。
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">📚</div>
                <div>
                  <h4 className="font-bold text-[#10B981] mb-2">持续学习 Continuous Learning</h4>
                  <p className="text-sm text-[#666666]">
                    新能源产业快速演进，我们保持开放与学习的心态。
                    通过研究、复盘与经验分享，不断提升团队的专业能力与产业理解深度。
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">🌱</div>
                <div>
                  <h4 className="font-bold text-[#10B981] mb-2">理性创新 Rational Innovation</h4>
                  <p className="text-sm text-[#666666]">
                    我们尊重创新，但同样重视可行性与风险边界。
                    在保持开放思维的同时，坚持理性判断，让创新服务于长期价值。
                  </p>
                </div>
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
export default AboutUs;