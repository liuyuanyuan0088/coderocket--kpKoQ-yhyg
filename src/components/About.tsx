import { Link } from 'react-router-dom';
import { useContent } from '../contexts/ContentContext';
function About() {
  const { aboutCards, homePageTexts } = useContent();
  return (
    <section className="py-20 bg-[#F5F5F5]" id="about">
      <div className="mx-auto px-4 max-w-[1200px]">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#10B981] mb-4">{homePageTexts.aboutSectionTitle}</h2>
          <p className="text-lg text-[#5A5A5A] mb-3">{homePageTexts.aboutSectionSubtitle}</p>
          <p className="text-base text-[#666666]">
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
                card.title === '關於我們' ? '/about' : '/'
              }
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#10B981] mb-2">{card.title}</h3>
                <p className="text-[#666666]">{card.description}</p>
              </div>
            </Link>
          ))}
          <Link
            to="/app-download"
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
          >
            <div className="relative h-48 bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center">
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
              <h3 className="text-xl font-bold text-[#10B981] mb-2">App下載</h3>
              <p className="text-[#666666]">隨時隨地掌握投資動態</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default About;