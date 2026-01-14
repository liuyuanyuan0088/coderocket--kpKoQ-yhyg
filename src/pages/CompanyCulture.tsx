import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useContent } from '../contexts/ContentContext';
function CompanyCulture() {
  const { companyCulture } = useContent();
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-[#10B981] mb-6">公司文化</h1>
            <p className="text-xl text-[#5A5A5A]">{companyCulture.coreValuesIntro}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-[#10B981] to-[#059669] rounded-lg p-8 text-white">
              <p className="text-sm font-medium mb-2 opacity-90">{companyCulture.mission.subtitle}</p>
              <h2 className="text-3xl font-bold mb-4">{companyCulture.mission.title}</h2>
              <p className="leading-relaxed">
                {companyCulture.mission.description}
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#0D9488] to-[#0F766E] rounded-lg p-8 text-white">
              <p className="text-sm font-medium mb-2 opacity-90">{companyCulture.vision.subtitle}</p>
              <h2 className="text-3xl font-bold mb-4">{companyCulture.vision.title}</h2>
              <p className="leading-relaxed">
                {companyCulture.vision.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default CompanyCulture;