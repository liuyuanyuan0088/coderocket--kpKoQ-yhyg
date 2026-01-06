import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useContent } from '../contexts/ContentContext';
function Contact() {
  const contentData = useContent();
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-[#34478F] mb-6">
              {contentData.contactPage?.title || '聯繫我們'}
            </h1>
            <p className="text-xl text-[#5A5A5A]">
              {contentData.contactPage?.description || '我們隨時為您提供專業服務'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#34478F] mb-8">
                {contentData.contactPage?.contactMethodsTitle || '聯繫方式'}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#34478F] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h3 className="font-bold text-[#34478F] mb-2">
                      {contentData.contactPage?.addressLabel || '公司地址'}
                    </h3>
                    <p className="text-[#666666]">
                      {contentData.settings?.address || '香港銅鑼灣希慎道33號'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#34478F] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    📧
                  </div>
                  <div>
                    <h3 className="font-bold text-[#34478F] mb-2">
                      {contentData.contactPage?.emailLabel || '電子郵件'}
                    </h3>
                    <p className="text-[#666666]">
                      {contentData.settings?.email || 'team@hklingrui.com'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#34478F] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <h3 className="font-bold text-[#34478F] mb-2">
                      {contentData.contactPage?.phoneLabel || '聯繫電話'}
                    </h3>
                    <p className="text-[#666666]">
                      {contentData.settings?.phone || '+852 1234 5678'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#34478F] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    🕐
                  </div>
                  <div>
                    <h3 className="font-bold text-[#34478F] mb-2">
                      {contentData.contactPage?.hoursLabel || '工作時間'}
                    </h3>
                    <p className="text-[#666666]">
                      {contentData.settings?.workingHours || '週一至週五 9:00 - 18:00'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#34478F] mb-8">
                {contentData.contactPage?.formTitle || '發送消息'}
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-[#34478F] font-medium mb-2">
                    {contentData.contactPage?.nameLabel || '姓名'}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-[#ECF0F6] rounded-lg focus:border-[#34478F] outline-none transition-colors"
                    placeholder={contentData.contactPage?.namePlaceholder || '請輸入您的姓名'}
                  />
                </div>
                <div>
                  <label className="block text-[#34478F] font-medium mb-2">
                    {contentData.contactPage?.emailLabel || '電子郵件'}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border-2 border-[#ECF0F6] rounded-lg focus:border-[#34478F] outline-none transition-colors"
                    placeholder={contentData.contactPage?.emailPlaceholder || '請輸入您的郵箱'}
                  />
                </div>
                <div>
                  <label className="block text-[#34478F] font-medium mb-2">
                    {contentData.contactPage?.phoneLabel || '電話'}
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border-2 border-[#ECF0F6] rounded-lg focus:border-[#34478F] outline-none transition-colors"
                    placeholder={contentData.contactPage?.phonePlaceholder || '請輸入您的電話'}
                  />
                </div>
                <div>
                  <label className="block text-[#34478F] font-medium mb-2">
                    {contentData.contactPage?.messageLabel || '消息內容'}
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-[#ECF0F6] rounded-lg focus:border-[#34478F] outline-none transition-colors resize-none"
                    placeholder={contentData.contactPage?.messagePlaceholder || '請輸入您想諮詢的內容'}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#34478F] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#2a3670] transition-colors cursor-pointer"
                >
                  {contentData.contactPage?.submitButton || '發送消息'}
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