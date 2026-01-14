import { Link } from 'react-router-dom';
import { useContent } from '../contexts/ContentContext';
import { ArrowRight } from 'lucide-react';
function About() {
  const { aboutCards, homePageTexts } = useContent();
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="about">
      <div className="mx-auto px-4 max-w-[1200px]">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#10B981] mb-4">
            {homePageTexts.aboutSectionTitle}
          </h2>
          <p className="text-lg text-[#059669] mb-2 font-medium">
            {homePageTexts.aboutSectionSubtitle}
          </p>
          <p className="text-base text-[#666666] max-w-2xl mx-auto">
            {homePageTexts.aboutSectionDescription}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutCards.map((card, index) => (
            <Link
              key={index}
              to={
                card.title === '公司文化' ? '/company-culture' :
                card.title === '服務與解決方案' ? '/services' :
                '/about'
              }
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400&auto=format&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#10B981] mb-2 group-hover:text-[#059669] transition-colors">
                  {card.title}
                </h3>
                <p className="text-[#666666] mb-4">{card.description}</p>
                <div className="flex items-center text-[#10B981] font-medium text-sm group-hover:gap-2 transition-all">
                  <span>了解更多</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
          <Link
            to="/app-download"
            className="group bg-gradient-to-br from-[#10B981] to-[#059669] rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            <div className="relative h-48 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="mx-auto h-16 w-16"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.9 17.39c-.26-.8-1.01-1.39-1.9-1.39h-1v-3a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1V7h2a2 2 0 0 0 2-2v-.41c2.93 1.18 5 4.05 5 7.41 0 2.08-.8 3.97-2.1 5.39M11 19.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.22.21-1.79L9 15v1a2 2 0 0 0 2 2m1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">行動應用下載</h3>
              </div>
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold text-[#10B981] mb-2 group-hover:text-[#059669] transition-colors">
                App下載
              </h3>
              <p className="text-[#666666] mb-4">隨時隨地掌握投資動態</p>
              <div className="flex items-center text-[#10B981] font-medium text-sm group-hover:gap-2 transition-all">
                <span>立即下載</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default About;