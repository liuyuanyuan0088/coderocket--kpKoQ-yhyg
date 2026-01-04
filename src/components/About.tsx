import { Link } from 'react-router-dom';
function About() {
  const sections = [
    {
      title: '公司文化',
      image: 'https://picsum.photos/id/10/400/300',
      description: '秉持專業、創新、穩健的經營理念',
      link: '/company-culture'
    },
    {
      title: '服務與解決方案',
      image: 'https://picsum.photos/id/20/400/300',
      description: '提供全方位資產管理與投資顧問服務',
      link: '/services'
    },
    {
      title: '關於我們',
      image: 'https://picsum.photos/id/30/400/300',
      description: '專注於東盟地區新能源資產投資管理',
      link: '/about'
    }
  ];
  return (
    <section className="py-20 bg-[#F5F5F5]" id="about">
      <div className="mx-auto px-4 max-w-[1200px]">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#34478F] mb-4">凌瑞團隊</h2>
          <p className="text-lg text-[#5A5A5A]">以凌雲之志謀未來，以瑞氣盈門築財富</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((section, index) => (
            <Link
              key={index}
              to={section.link}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#34478F] mb-2">{section.title}</h3>
                <p className="text-[#666666]">{section.description}</p>
              </div>
            </Link>
          ))}
          <Link
            to="/app-download"
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
          >
            <div className="relative h-48 bg-gradient-to-br from-[#34478F] to-[#5B6FB5] flex items-center justify-center">
              <div className="text-center text-white">
                <svg
                  className="mx-auto mb-3 h-16 w-16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.9 17.39c-.26-.8-1.01-1.39-1.9-1.39h-1v-3a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1V7h2a2 2 0 0 0 2-2v-.41c2.93 1.18 5 4.05 5 7.41 0 2.08-.8 3.97-2.1 5.39M11 19.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.22.21-1.79L9 15v1a2 2 0 0 0 2 2m1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"/>
                </svg>
                <h3 className="text-xl font-bold">行動應用下載</h3>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#34478F] mb-2">App下載</h3>
              <p className="text-[#666666]">隨時隨地掌握投資動態</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default About;