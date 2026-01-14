import { useContent } from '../contexts/ContentContext';
function CoreValues() {
  const { coreValues, homePageTexts } = useContent();
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto px-4 max-w-[1200px]">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#10B981] mb-4">
            {homePageTexts.coreValuesSectionTitle}
          </h2>
          <p className="text-lg text-[#059669] mb-2 font-medium">
            {homePageTexts.coreValuesSectionSubtitle}
          </p>
          <p className="text-base text-[#666666] max-w-2xl mx-auto">
            {homePageTexts.coreValuesSectionDescription}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 border-2 border-gray-100 hover:border-[#10B981] hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="text-6xl transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#10B981] mb-2 text-center group-hover:text-[#059669] transition-colors">
                {value.title}
              </h3>
              <p className="text-sm text-[#059669] mb-4 text-center font-medium">
                {value.subtitle}
              </p>
              <p className="text-[#666666] leading-relaxed text-center">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default CoreValues;