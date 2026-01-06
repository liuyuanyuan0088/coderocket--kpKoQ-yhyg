import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
interface FooterSettings {
  companyName: string;
  address: string;
  email: string;
  phone: string;
  workingHours: string;
  customerServiceText: string;
  copyright: string;
  rightsReserved: string;
}
function Footer() {
  const [settings, setSettings] = useState<FooterSettings>({
    companyName: '東盟新能資產管理有限公司',
    address: '香港中环金融街8号国际金融中心1期39楼',
    email: 'asean-newenergy.com',
    phone: '+852 47485997',
    workingHours: '週一至週五 9:00 - 18:00',
    customerServiceText: '客服',
    copyright: '東盟新能資產管理有限公司 ©All Rights reserved',
    rightsReserved: '未經許可不得複製、轉載或摘編，違者必究！'
  });
  useEffect(() => {
    // 从 localStorage 读取设置
    const savedSettings = localStorage.getItem('settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.error('Failed to parse settings:', error);
      }
    }
    // 监听 storage 事件
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'settings' && e.newValue) {
        try {
          const parsed = JSON.parse(e.newValue);
          setSettings(prev => ({ ...prev, ...parsed }));
        } catch (error) {
          console.error('Failed to parse settings:', error);
        }
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);
  return (
    <footer className="bg-[#424040] text-white py-12" id="contact">
      <div className="mx-auto px-4 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">快速鏈接</h3>
            <div className="space-y-2">
              <Link to="/company-culture" className="block text-[#DEE1ED] hover:text-white transition-colors cursor-pointer">
                公司文化
              </Link>
              <Link to="/about" className="block text-[#DEE1ED] hover:text-white transition-colors cursor-pointer">
                凌瑞團隊
              </Link>
              <Link to="/services" className="block text-[#DEE1ED] hover:text-white transition-colors cursor-pointer">
                核心價值
              </Link>
              <Link to="/news" className="block text-[#DEE1ED] hover:text-white transition-colors cursor-pointer">
                新聞中心
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">聯繫我們</h3>
            <div className="space-y-2 text-[#DEE1ED]">
              <p>地址：{settings.address}</p>
              <p>電子郵件：{settings.email}</p>
              <p>電話：{settings.phone}</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">在線客服</h3>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://hklingrui.com/pc/images/qq.png"
                alt="客服"
                className="h-8 w-8"
              />
              <span className="text-[#DEE1ED]">{settings.customerServiceText}</span>
            </div>
            <div>
              <p className="text-sm text-[#DEE1ED] mb-1">上班時間</p>
              <p className="text-sm text-[#DEE1ED]">{settings.workingHours}</p>
            </div>
          </div>
        </div>
        <div className="border-t border-[#DEE1ED] border-opacity-20 pt-6 text-center">
          <p className="text-sm text-[#DEE1ED]">
            {settings.copyright}
          </p>
          <p className="text-xs text-[#DEE1ED] mt-2">
            {settings.rightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;