import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
interface CultureContent {
  title: string;
  subtitle: string;
  missionTitle: string;
  missionContent: string;
  visionTitle: string;
  visionContent: string;
  coreTitle: string;
  coreValues: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  joinTitle: string;
  joinDescription: string;
  joinButtonText: string;
}
function CompanyCulture() {
  const [content, setContent] = useState<CultureContent>({
    title: '公司文化',
    subtitle: '秉持專業、創新、穩健的經營理念',
    missionTitle: '我們的使命',
    missionContent: '致力於為客戶創造長期穩健的投資回報，通過專業的資產管理服務，幫助客戶實現財富增值目標。我們專注於東盟地區新能源領域，把握綠色經濟發展機遇，為可持續發展做出貢獻。',
    visionTitle: '我們的願景',
    visionContent: '成為東盟地區最受信賴的新能源資產管理機構，以專業的投資策略和卓越的風險管理能力，為客戶提供優質的資產管理服務，創造可持續的價值。',
    coreTitle: '企業文化核心',
    coreValues: [
      { icon: '專', title: '專業', description: '深厚的行業知識和專業的投資管理能力' },
      { icon: '創', title: '創新', description: '不斷創新投資策略，把握市場機遇' },
      { icon: '穩', title: '穩健', description: '穩健的風險管理，保障客戶資產安全' }
    ],
    joinTitle: '加入我們',
    joinDescription: '我們正在尋找志同道合的專業人才，一起開創美好未來',
    joinButtonText: '查看職位'
  });
  useEffect(() => {
    const saved = localStorage.getItem('companyCulture');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setContent(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.error('Failed to parse company culture:', error);
      }
    }
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'companyCulture' && e.newValue) {
        try {
          const parsed = JSON.parse(e.newValue);
          setContent(prev => ({ ...prev, ...parsed }));
        } catch (error) {
          console.error('Failed to parse company culture:', error);
        }
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-[#34478F] mb-6">{content.title}</h1>
            <p className="text-xl text-[#5A5A5A]">{content.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-[#ECF0F6] rounded-lg p-8">
              <h2 className="text-3xl font-bold text-[#34478F] mb-4">{content.missionTitle}</h2>
              <p className="text-[#666666] leading-relaxed">{content.missionContent}</p>
            </div>
            <div className="bg-[#ECF0F6] rounded-lg p-8">
              <h2 className="text-3xl font-bold text-[#34478F] mb-4">{content.visionTitle}</h2>
              <p className="text-[#666666] leading-relaxed">{content.visionContent}</p>
            </div>
          </div>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#34478F] mb-8 text-center">{content.coreTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {content.coreValues.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="bg-[#34478F] text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#34478F] mb-2">{value.title}</h3>
                  <p className="text-[#666666]">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#34478F] to-[#5B6FB5] rounded-lg p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">{content.joinTitle}</h2>
            <p className="text-lg mb-6">{content.joinDescription}</p>
            <button className="bg-white text-[#34478F] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors cursor-pointer">
              {content.joinButtonText}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default CompanyCulture;