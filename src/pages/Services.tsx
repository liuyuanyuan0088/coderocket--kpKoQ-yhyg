import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
function Services() {
  const services = [
    {
      title: '資產配置',
      description: '根據客戶風險偏好和投資目標，提供個性化的資產配置方案',
      icon: '📊'
    },
    {
      title: '投資顧問',
      description: '專業的投資建議和市場分析，幫助客戶做出明智的投資決策',
      icon: '💡'
    },
    {
      title: '風險管理',
      description: '全面的風險評估和管理，保障客戶資產安全',
      icon: '🛡️'
    },
    {
      title: '新能源投資',
      description: '專注於東盟地區新能源項目投資，把握綠色經濟機遇',
      icon: '⚡'
    },
    {
      title: '基金管理',
      description: '專業的基金管理服務，追求穩健的長期回報',
      icon: '📈'
    },
    {
      title: '財富規劃',
      description: '全方位的財富管理和傳承規劃服務',
      icon: '💰'
    }
  ];
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-[#34478F] mb-6">服務與解決方案</h1>
            <p className="text-xl text-[#5A5A5A]">提供全方位資產管理與投資顧問服務</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border-2 border-[#ECF0F6] rounded-lg p-8 hover:shadow-lg hover:border-[#34478F] transition-all cursor-pointer"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-[#34478F] mb-4">{service.title}</h3>
                <p className="text-[#666666] leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#ECF0F6] rounded-lg p-12">
            <h2 className="text-3xl font-bold text-[#34478F] mb-6 text-center">我們的優勢</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#34478F] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-[#34478F] mb-2">專業團隊</h4>
                  <p className="text-[#666666]">經驗豐富的投資管理團隊，深諳東盟市場</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#34478F] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-[#34478F] mb-2">穩健策略</h4>
                  <p className="text-[#666666]">注重風險控制，追求長期穩定回報</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#34478F] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-[#34478F] mb-2">透明服務</h4>
                  <p className="text-[#666666]">定期報告投資情況，保持溝通透明</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#34478F] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-[#34478F] mb-2">個性化方案</h4>
                  <p className="text-[#666666]">根據客戶需求定制投資方案</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Services;