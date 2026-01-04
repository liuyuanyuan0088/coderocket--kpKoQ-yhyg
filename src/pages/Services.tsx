import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
function Services() {
  const services = [
    {
      title: '新能源产业研究与咨询',
      subtitle: 'New Energy Industry Research & Advisory',
      description: '我们围绕新能源及可持续产业，为企业、机构及合作伙伴提供以产业为导向的研究与咨询支持。',
      icon: '📊'
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
                className="bg-white border-2 border-[#ECF0F6] rounded-lg p-8"
              >
                <div className="flex items-start gap-6">
                  <div className="text-5xl">{service.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#10B981] mb-2">{service.title}</h3>
                    <p className="text-sm text-[#666666] mb-4">{service.subtitle}</p>
                    <p className="text-[#666666]">{service.description}</p>
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