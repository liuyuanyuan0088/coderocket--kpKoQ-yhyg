import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
function Services() {
  const services = [
    {
      title: '新能源产业研究与咨询',
      subtitle: 'New Energy Industry Research & Advisory',
      description: '我们围绕新能源及可持续产业，为企业、机构及合作伙伴提供以产业为导向的研究与咨询支持，协助其理解市场环境、政策框架与产业趋势，为战略决策提供理性参考。',
      icon: '📊',
      services: [
        '产业与政策研究 - 围绕新能源整车、动力电池、光伏、风电、储能及关键资源领域',
        '市场趋势分析 - 结合区域市场特征，分析新能源产业发展阶段',
        '决策支持建议 - 基于研究成果，提供战略与项目参考建议'
      ],
      value: [
        '提升对新能源产业与区域市场的系统性认知',
        '降低信息不对称带来的决策不确定性',
        '为中长期发展方向提供研究支持'
      ]
    },
    {
      title: '跨境项目协作与孵化支持',
      subtitle: 'Cross-border Project Collaboration & Incubation Support',
      description: '我们为新能源相关项目提供项目评估、资源协作与落地支持，协助不同市场主体在跨区域合作中建立可执行的合作路径。',
      icon: '🌏',
      services: [
        '项目评估与可行性分析 - 从产业逻辑、市场环境及执行条件等角度评估',
        '资源与合作对接 - 协助对接产业资源、技术伙伴及本地合作方',
        '项目推进与协调支持 - 提供沟通协调与管理支持，提升执行效率'
      ],
      value: [
        '提升项目落地的可行性与执行效率',
        '降低跨区域合作中的沟通与协作成本',
        '获得系统化的项目支持与协作经验'
      ]
    },
    {
      title: '市场研究与数据分析',
      subtitle: 'Market Research & Data Analysis',
      description: '围绕新能源产业与区域市场，我们提供以研究为核心的数据分析服务，帮助合作伙伴更清晰地理解市场结构与竞争环境。',
      icon: '📈',
      services: [
        '市场结构与趋势研究 - 分析新能源相关市场的规模、发展阶段与结构变化',
        '产业链与竞争格局分析 - 梳理关键产业链环节及主要参与者',
        '用户与应用场景研究 - 结合实际应用场景，分析市场需求与发展方向'
      ],
      value: [
        '为战略规划与项目布局提供研究依据',
        '辅助企业识别潜在机会与风险',
        '提升决策的系统性与理性程度'
      ]
    },
    {
      title: '企业战略与项目管理咨询',
      subtitle: 'Corporate Strategy & Project Management Consulting',
      description: '我们协助新能源及相关企业，在发展过程中优化战略路径与项目执行方式，提升组织与项目管理能力。',
      icon: '🎯',
      services: [
        '发展战略与路径设计 - 围绕企业定位与市场环境，协助梳理中长期发展思路',
        '项目管理与执行支持 - 为新能源项目提供管理流程与执行层面的支持建议',
        '组织与协作机制优化 - 协助企业提升跨团队、跨区域协作效率'
      ],
      value: [
        '明确发展方向与执行重点',
        '提升项目推进的稳定性与可控性',
        '优化组织协作与管理效率'
      ]
    },
    {
      title: '产业协作与资本对接支持',
      subtitle: 'Industry Collaboration & Capital Coordination Support',
      description: '在合法合规前提下，我们为新能源相关项目提供产业协作与资本沟通支持，协助企业更高效地与市场资源建立联系。',
      icon: '💼',
      note: '注：本服务不构成受规管的投资、融资或证券相关活动。',
      services: [
        '合作模式设计支持 - 协助企业梳理适合自身发展的合作与协作模式',
        '产业与资源沟通协调 - 在产业合作框架下，协助企业与相关机构、产业方进行沟通',
        '资本结构与发展路径研究 - 从研究与规划角度，协助企业理解不同发展阶段的资本路径'
      ],
      value: [
        '提升产业合作与资源对接效率',
        '为企业发展提供结构性参考',
        '降低跨主体合作中的信息成本'
      ]
    },
    {
      title: '合作沟通与关系管理支持',
      subtitle: 'Stakeholder & Partner Relations Support',
      description: '我们协助企业建立清晰、理性的沟通机制，提升与合作伙伴及相关方之间的信任与协作效率。',
      icon: '🤝',
      services: [
        '合作沟通机制设计 - 协助企业建立规范、透明的对外沟通方式',
        '合作活动与交流支持 - 支持企业组织产业交流与合作活动',
        '风险沟通与舆情应对建议 - 为企业提供沟通层面的风险应对与建议支持'
      ],
      value: [
        '提升企业对外沟通的专业度',
        '强化合作伙伴之间的信任基础',
        '降低合作过程中的沟通风险'
      ]
    }
  ];
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-[#10B981] mb-6">服务与解决方案</h1>
            <p className="text-xl text-[#5A5A5A]">Services & Solutions</p>
          </div>
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border-2 border-[#ECF0F6] rounded-lg p-8 hover:shadow-lg hover:border-[#10B981] transition-all"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="text-5xl flex-shrink-0">{service.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#10B981] mb-2">{service.title}</h3>
                    <p className="text-sm text-[#666666] mb-4">{service.subtitle}</p>
                    <p className="text-[#666666] leading-relaxed">{service.description}</p>
                    {service.note && (
                      <p className="text-sm text-orange-600 mt-2">⚠️ {service.note}</p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#ECF0F6] rounded-lg p-6">
                    <h4 className="font-bold text-[#10B981] mb-4">服务内容</h4>
                    <ul className="space-y-2">
                      {service.services.map((item, idx) => (
                        <li key={idx} className="text-sm text-[#666666] flex items-start gap-2">
                          <span className="text-[#10B981] flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#ECF0F6] rounded-lg p-6">
                    <h4 className="font-bold text-[#10B981] mb-4">客户价值</h4>
                    <ul className="space-y-2">
                      {service.value.map((item, idx) => (
                        <li key={idx} className="text-sm text-[#666666] flex items-start gap-2">
                          <span className="text-[#10B981] flex-shrink-0">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Services;