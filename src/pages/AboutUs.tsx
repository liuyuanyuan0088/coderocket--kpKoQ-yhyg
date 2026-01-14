import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useContent } from '../contexts/ContentContext';
function AboutUs() {
  const { teamMembers, siteSettings, teamCulture } = useContent();
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-[#10B981] mb-4">{siteSettings.teamTitle}</h1>
            <p className="text-xl text-[#5A5A5A] mb-2">{siteSettings.teamSubtitle}</p>
            <p className="text-base text-[#666666]">{siteSettings.teamDescription}</p>
          </div>
          {teamMembers.length > 0 && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-[#10B981] mb-8 text-center">團隊成員</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <div key={index} className="bg-white border-2 border-[#ECF0F6] rounded-lg p-6 hover:shadow-lg transition-shadow">
                    {member.avatar && (
                      <div className="flex justify-center mb-4">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-32 h-32 rounded-full object-cover border-4 border-[#10B981]"
                        />
                      </div>
                    )}
                    <div className="text-center mb-4">
                      <h3 className="text-2xl font-bold text-[#10B981] mb-1">{member.name}</h3>
                      <p className="text-sm text-[#059669] mb-1">{member.nameEn}</p>
                      <p className="text-[#666666] font-medium">{member.position}</p>
                      <p className="text-sm text-[#666666]">{member.positionEn}</p>
                    </div>
                    <div className="space-y-3 text-sm">
                      <p className="text-[#666666] leading-relaxed">{member.background}</p>
                      {member.focus && (
                        <div>
                          <p className="font-bold text-[#10B981] mb-1">專業領域：</p>
                          <p className="text-[#666666]">{member.focus}</p>
                        </div>
                      )}
                      {member.belief && (
                        <div className="bg-[#ECF0F6] rounded-lg p-3">
                          <p className="text-[#666666] italic">{member.belief}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {teamCulture.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold text-[#10B981] mb-8 text-center">團隊文化</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {teamCulture.map((culture, index) => (
                  <div key={index} className="bg-[#ECF0F6] rounded-lg p-6 text-center">
                    <div className="text-5xl mb-4">{culture.icon}</div>
                    <h3 className="text-xl font-bold text-[#10B981] mb-2">{culture.title}</h3>
                    <p className="text-sm text-[#059669] font-medium mb-3">{culture.subtitle}</p>
                    <p className="text-[#666666] leading-relaxed">{culture.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default AboutUs;