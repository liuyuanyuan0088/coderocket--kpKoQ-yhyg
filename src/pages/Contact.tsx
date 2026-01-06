import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
interface ContactPageData {
  title: string;
  description: string;
  contactMethodsTitle: string;
  addressLabel: string;
  addressContent: string;
  emailLabel: string;
  emailAddress: string;
  phoneLabel: string;
  phoneNumber: string;
  hoursLabel: string;
  workingHours: string;
  formTitle: string;
  nameLabel: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  phonePlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitButton: string;
}
function Contact() {
  const [contactData, setContactData] = useState<ContactPageData>({
    title: '聯繫我們',
    description: '我們隨時為您提供專業服務',
    contactMethodsTitle: '聯繫方式',
    addressLabel: '公司地址',
    addressContent: '香港中环金融街8号国际金融中心1期39楼',
    emailLabel: '電子郵件',
    emailAddress: 'asean-newenergy.com',
    phoneLabel: '聯繫電話',
    phoneNumber: '+852 47485997',
    hoursLabel: '工作時間',
    workingHours: '週一至週五 9:00 - 18:00',
    formTitle: '發送消息',
    nameLabel: '姓名',
    namePlaceholder: '請輸入您的姓名',
    emailPlaceholder: '請輸入您的郵箱',
    phonePlaceholder: '請輸入您的電話',
    messageLabel: '消息內容',
    messagePlaceholder: '請輸入您想諮詢的內容',
    submitButton: '發送消息',
  });
  useEffect(() => {
    // 从 localStorage 读取保存的联系页面数据
    const savedData = localStorage.getItem('contactPage');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setContactData(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.error('Failed to parse contact page data:', error);
      }
    }
    // 监听 storage 事件，当其他标签页更新数据时同步
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'contactPage' && e.newValue) {
        try {
          const parsed = JSON.parse(e.newValue);
          setContactData(prev => ({ ...prev, ...parsed }));
        } catch (error) {
          console.error('Failed to parse contact page data:', error);
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
            <h1 className="text-5xl font-bold text-[#34478F] mb-6">
              {contactData.title}
            </h1>
            <p className="text-xl text-[#5A5A5A]">
              {contactData.description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#34478F] mb-8">
                {contactData.contactMethodsTitle}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#34478F] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h3 className="font-bold text-[#34478F] mb-2">
                      {contactData.addressLabel}
                    </h3>
                    <p className="text-[#666666]">{contactData.addressContent}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#34478F] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    📧
                  </div>
                  <div>
                    <h3 className="font-bold text-[#34478F] mb-2">
                      {contactData.emailLabel}
                    </h3>
                    <p className="text-[#666666]">{contactData.emailAddress}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#34478F] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <h3 className="font-bold text-[#34478F] mb-2">
                      {contactData.phoneLabel}
                    </h3>
                    <p className="text-[#666666]">{contactData.phoneNumber}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#34478F] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    🕐
                  </div>
                  <div>
                    <h3 className="font-bold text-[#34478F] mb-2">
                      {contactData.hoursLabel}
                    </h3>
                    <p className="text-[#666666]">{contactData.workingHours}</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#34478F] mb-8">
                {contactData.formTitle}
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-[#34478F] font-medium mb-2">
                    {contactData.nameLabel}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-[#ECF0F6] rounded-lg focus:border-[#34478F] outline-none transition-colors"
                    placeholder={contactData.namePlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-[#34478F] font-medium mb-2">
                    {contactData.emailLabel}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border-2 border-[#ECF0F6] rounded-lg focus:border-[#34478F] outline-none transition-colors"
                    placeholder={contactData.emailPlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-[#34478F] font-medium mb-2">
                    {contactData.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border-2 border-[#ECF0F6] rounded-lg focus:border-[#34478F] outline-none transition-colors"
                    placeholder={contactData.phonePlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-[#34478F] font-medium mb-2">
                    {contactData.messageLabel}
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-[#ECF0F6] rounded-lg focus:border-[#34478F] outline-none transition-colors resize-none"
                    placeholder={contactData.messagePlaceholder}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#34478F] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#2a3670] transition-colors cursor-pointer"
                >
                  {contactData.submitButton}
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