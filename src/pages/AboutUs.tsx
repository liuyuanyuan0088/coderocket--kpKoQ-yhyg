import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
interface TeamMember {
  name: string;
  position: string;
  description: string;
}
interface Milestone {
  year: string;
  description: string;
}
interface AboutContent {
  title: string;
  subtitle: string;
  introTitle: string;
  introContent: string;
  stat1Value: string;
  stat1Label: string;
  stat2Value: string;
  stat2Label: string;
  stat3Value: string;
  stat3Label: string;
  teamTitle: string;
  teamMembers: TeamMember[];
  historyTitle: string;
  milestones: Milestone[];
}
function AboutUs() {
  const [content, setContent] = useState<AboutContent>({
    title: '關於我們',
    subtitle: '專注於東盟地區新能源資產投資管理',
    introTitle: '公司簡介',
    introContent: '東盟新能資產管理有限公司是一家專注於東盟地區新能源領域投資管理的專業機構。我們擁有經驗豐富的投資管理團隊，深入了解東盟各國市場特點和投資環境。公司秉持專業、創新、穩健的經營理念，致力於為客戶提供優質的資產管理服務，通過專業的投資策略和嚴格的風險管理，為客戶創造長期穩健的投資回報。',
    stat1Value: '10+',
    stat1Label: '專業投資經理',
    stat2Value: '20+',
    stat2Label: '投資項目',
    stat3Value: '500M+',
    stat3Label: '管理資產規模（美元）',
    teamTitle: '管理團隊',
    teamMembers: [
      {
        name: '張明',
        position: '首席執行官',
        description: '20年投資管理經驗，曾任大型基金公司高管'
      },
      {
        name: '李華',
        position: '首席投資官',
        description: '15年新能源行業投資經驗，專注於東盟市場'
      },
      {
        name: '王芳',
        position: '首席風險官',
        description: '18年風險管理經驗，專長於投資風險控制'
      }
    ],
    historyTitle: '發展歷程',
    milestones: [
      { year: '2020年', description: '公司成立，開始專注於東盟新能源領域投資' },
      { year: '2021年', description: '完成首個新能源項目投資，管理資產規模達到1億美元' },
      { year: '2022年', description: '擴展投資組合，管理資產規模突破3億美元' },
      { year: '2023年', description: '開拓多個東盟國家市場，管理資產規模達到5億美元' }
    ]
  });
  useEffect(() => {
    const saved = localStorage.getItem('aboutContent');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setContent(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.error('Failed to parse about content:', error);
      }
    }
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'aboutContent' && e.newValue) {
        try {
          const parsed = JSON.parse(e.newValue);
          setContent(prev => ({ ...prev, ...parsed }));
        } catch (error) {
          console.error('Failed to parse about content:', error);
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
          <div className="mb-16">
            <div className="bg-gradient-to-r from-[#34478F] to-[#5B6FB5] rounded-lg p-12 text-white mb-12">
              <h2 className="text-3xl font-bold mb-6">{content.introTitle}</h2>
              <p className="text-lg leading-relaxed">{content.introContent}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-[#34478F] mb-2">{content.stat1Value}</div>
                <p className="text-[#666666]">{content.stat1Label}</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#34478F] mb-2">{content.stat2Value}</div>
                <p className="text-[#666666]">{content.stat2Label}</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#34478F] mb-2">{content.stat3Value}</div>
                <p className="text-[#666666]">{content.stat3Label}</p>
              </div>
            </div>
          </div>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#34478F] mb-8 text-center">{content.teamTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {content.teamMembers.map((member, index) => (
                <div key={index} className="bg-[#ECF0F6] rounded-lg p-8 text-center">
                  <div className="w-32 h-32 bg-[#34478F] rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-bold text-[#34478F] mb-2">{member.name}</h3>
                  <p className="text-[#666666] mb-4">{member.position}</p>
                  <p className="text-sm text-[#666666]">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#ECF0F6] rounded-lg p-12">
            <h2 className="text-3xl font-bold text-[#34478F] mb-6 text-center">{content.historyTitle}</h2>
            <div className="space-y-6">
              {content.milestones.map((milestone, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-24 font-bold text-[#34478F]">{milestone.year}</div>
                  <div className="text-[#666666]">{milestone.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default AboutUs;