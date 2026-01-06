import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
function Contact() {
  // 暂时使用静态内容，确保编译通过
  const pageData = {
    title: '聯繫我們',
    description: '我們隨時為您提供專業服務',
    contactMethodsTitle: '聯繫方式',
    formTitle: '發送消息',
    addressLabel: '公司地址',
    emailLabel: '電子郵件',
    phoneLabel: '聯繫電話',
    hoursLabel: '工作時間',
    nameLabel: '姓名',
    namePlaceholder: '請輸入您的姓名',
    emailPlaceholder: '請輸入您的郵箱',
    phonePlaceholder: '請輸入您的電話',
    messageLabel: '消息內容',
    messagePlaceholder: '請輸入您想諮詢的內容',
    submitButton: '發送消息',
  };
  const contactInfo = {
    address: '香港銅鑼灣希慎道33號',
    email: 'team@hklingrui.com',
    phone: '+852 1234 5678',
    workingHours: '週一至週五 9:00 - 18:00',
  };
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-[#34478F] mb-6">
              {pageData.title}
            </h1>
            <p className="text-xl text-[#5A5A5A]">
              {pageData.description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#34478F] mb-8">
                {pageData.contactMethodsTitle}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#34478F] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h3 className="font-bold text-[#34478F] mb-2">
                      {pageData.addressLabel}
                    </h3>
                    <p className="text-[#666666]">{contactInfo.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#34478F] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    📧
                  </div>
                  <div>
                    <h3 className="font-bold text-[#34478F] mb-2">
                      {pageData.emailLabel}
                    </h3>
                    <p className="text-[#666666]">{contactInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#34478F] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <h3 className="font-bold text-[#34478F] mb-2">
                      {pageData.phoneLabel}
                    </h3>
                    <p className="text-[#666666]">{contactInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#34478F] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    🕐
                  </div>
                  <div>
                    <h3 className="font-bold text-[#34478F] mb-2">
                      {pageData.hoursLabel}
                    </h3>
                    <p className="text-[#666666]">{contactInfo.workingHours}</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#34478F] mb-8">
                {pageData.formTitle}
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-[#34478F] font-medium mb-2">
                    {pageData.nameLabel}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-[#ECF0F6] rounded-lg focus:border-[#34478F] outline-none transition-colors"
                    placeholder={pageData.namePlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-[#34478F] font-medium mb-2">
                    {pageData.emailLabel}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border-2 border-[#ECF0F6] rounded-lg focus:border-[#34478F] outline-none transition-colors"
                    placeholder={pageData.emailPlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-[#34478F] font-medium mb-2">
                    {pageData.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border-2 border-[#ECF0F6] rounded-lg focus:border-[#34478F] outline-none transition-colors"
                    placeholder={pageData.phonePlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-[#34478F] font-medium mb-2">
                    {pageData.messageLabel}
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-[#ECF0F6] rounded-lg focus:border-[#34478F] outline-none transition-colors resize-none"
                    placeholder={pageData.messagePlaceholder}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#34478F] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#2a3670] transition-colors cursor-pointer"
                >
                  {pageData.submitButton}
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