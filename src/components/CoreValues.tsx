function CoreValues() {
  const values = [
    {
      icon: '🤝',
      title: '协同共创',
      subtitle: 'Collaboration',
      description: '我们相信，真正的竞争力来自协作。通过跨区域、跨产业、跨专业的深度合作，整合多方优势，共同创造长期价值。'
    },
    {
      icon: '🔍',
      title: '产业洞察',
      subtitle: 'Insight',
      description: '一切决策，源于对产业的理解。我们持续关注新能源技术演进、政策环境与产业周期变化，以研究为基础，提供理性、前瞻且可执行的判断支持。'
    },
    {
      icon: '⚖️',
      title: '稳健前行',
      subtitle: 'Prudence',
      description: '我们坚持长期主义与稳健原则。在面对市场波动与环境变化时，保持理性判断，重视风险识别与管理，避免短期行为，追求可持续发展。'
    },
    {
      icon: '🤍',
      title: '诚信信任',
      subtitle: 'Trust',
      description: '信任是合作的基础。我们重视透明沟通、责任意识与专业操守，通过可靠的执行与持续的价值创造，赢得合作伙伴、团队与市场的长期信任。'
    },
    {
      icon: '🌱',
      title: '持续进化',
      subtitle: 'Evolution',
      description: '新能源产业不断演进，我们亦持续成长。通过学习、实践与复盘，不断优化专业能力与协作方式，在变化中保持清醒，在进化中坚守初心。'
    }
  ];
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto px-4 max-w-[1200px]">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#10B981] mb-4">核心价值观</h2>
          <p className="text-lg text-[#5A5A5A]">Core Values</p>
          <p className="text-[#666666] mt-4">
            在新能源产业与跨境合作的复杂环境中，我们以以下五大价值观，指引团队稳健前行
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-[#ECF0F6] rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-6">
                <div className="text-5xl">{value.icon}</div>
              </div>
              <h3 className="text-2xl font-bold text-[#10B981] mb-2 text-center">{value.title}</h3>
              <p className="text-sm text-[#10B981] mb-4 text-center">{value.subtitle}</p>
              <p className="text-[#666666] leading-relaxed text-center">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default CoreValues;