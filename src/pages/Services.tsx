import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useContent } from '../contexts/ContentContext';
function Services() {
  const { services } = useContent();
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-[#10B981] mb-6">服務與解決方案</h1>
            <p className="text-xl text-[#5A5A5A]">提供全方位資產管理與投資顧問服務</p>
          </div>
          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white border-2 border-[#ECF0F6] rounded-lg p-8 hover:shadow-lg transition-all">
                <div className="flex items-start gap-6 mb-6">
                  <div className="text-5xl flex-shrink-0">{service.icon}</div>
                  <div>
                    <h2 className="text-3xl font-bold text-[#10B981] mb-2">{service.title}</h2>
                    <p className="text-[#059669] font-medium mb-4">{service.subtitle}</p>
                    <p className="text-[#666666] leading-relaxed">{service.description}</p>
                  </div>
                </div>
                {service.note && (
                  <div className="bg-[#ECF0F6] rounded-lg p-4 mb-6">
                    <p className="text-[#666666] text-sm">{service.note}</p>
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-[#10B981] mb-4">服務內容</h3>
                    <ul className="space-y-3">
                      {service.services.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-[#10B981] mt-1">•</span>
                          <span className="text-[#666666]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#10B981] mb-4">客戶價值</h3>
                    <ul className="space-y-3">
                      {service.value.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-[#10B981] mt-1">✓</span>
                          <span className="text-[#666666]">{item}</span>
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