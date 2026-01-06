import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useContent } from '../contexts/ContentContext';
function Contact() {
  const content = useContent();
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-[#34478F] mb-6">
              {content.contactPage.title}
            </h1>
            <p className="text-xl text-[#5A5A5A]">
              {content.contactPage.description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#34478F] mb-8">
                {content.contactPage.contactMethodsTitle}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#34478F] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h3 className="font-bold text-[#34478F] mb-2">
                      {content.contactPage.addressLabel}
                    </h3>
                    <p className="text-[#666666]">{content.settings.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#34478F] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    📧
                  </div>
                  <div>
                    <h3 className="font-bold text-[#34478F] mb-2">
                      {content.contactPage.emailLabel}
                    </h3>
                    <p className="text-[#666666]">{content.settings.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#34478F] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <h3 className="font-bold text-[#34478F] mb-2">
                      {content.contactPage.phoneLabel}
                    </h3>
                    <p className="text-[#666666]">{content.settings.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#34478F] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    🕐
                  </div>
                  <div>
                    <h3 className="font-bold text-[#34478F] mb-2">
                      {content.contactPage.hoursLabel}
                    </h3>
                    <p className="text-[#666666]">{content.settings.workingHours}</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#34478F] mb-8">
                {content.contactPage.formTitle}
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-[#34478F] font-medium mb-2">
                    {content.contactPage.nameLabel}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-[#ECF0F6] rounded-lg focus:border-[#34478F] outline-none transition-colors"
                    placeholder={content.contactPage.namePlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-[#34478F] font-medium mb-2">
                    {content.contactPage.emailLabel}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border-2 border-[#ECF0F6] rounded-lg focus:border-[#34478F] outline-none transition-colors"
                    placeholder={content.contactPage.emailPlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-[#34478F] font-medium mb-2">
                    {content.contactPage.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border-2 border-[#ECF0F6] rounded-lg focus:border-[#34478F] outline-none transition-colors"
                    placeholder={content.contactPage.phonePlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-[#34478F] font-medium mb-2">
                    {content.contactPage.messageLabel}
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-[#ECF0F6] rounded-lg focus:border-[#34478F] outline-none transition-colors resize-none"
                    placeholder={content.contactPage.messagePlaceholder}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#34478F] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#2a3670] transition-colors cursor-pointer"
                >
                  {content.contactPage.submitButton}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Contact;