import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
interface FooterData {
  quickLinksTitle: string;
  quickLinks: Array<{ label: string; link: string }>;
  contactTitle: string;
  addressLabel: string;
  address: string;
  contactMethodLabel: string;
  contactMethod: string;
  websiteLabel: string;
  website: string;
  customerServiceTitle: string;
  customerServiceIcon: string;
  customerServiceLabel: string;
  workingHoursLabel: string;
  workingHours: string;
  copyright: string;
  disclaimer: string;
}
function Footer() {
  const [footerData, setFooterData] = useState<FooterData>({
    quickLinksTitle: '快速鏈接',
    quickLinks: [
      { label: '公司文化', link: '/company-culture' },
      { label: '瑞行团队', link: '/about' },
      { label: '核心價值', link: '/services' },
      { label: '新聞中心', link: '/news' }
    ],
    contactTitle: '聯繫我們',
    addressLabel: '地址',
    address: '香港銅鑼灣希慎道33號',
    contactMethodLabel: '聯繫方式',
    contactMethod: 'team@hklingrui.com',
    websiteLabel: '網站',
    website: 'asean-newenergy.com',
    customerServiceTitle: '在線客服',
    customerServiceIcon: 'https://jojdwiugelqhcajbccxn.supabase.co/storage/v1/object/public/images/1767693565053-aee6773b-c9d1-411a-8a9c-e6ccb7969649-1.png',
    customerServiceLabel: '客服',
    workingHoursLabel: '上班時間',
    workingHours: '週一至週五 9:00 - 18:00',
    copyright: '東盟新能資產管理有限公司 ©All Rights reserved',
    disclaimer: '未經許可不得複製、轉載或摘編，違者必究！'
  });
  useEffect(() => {
    // 从 localStorage 读取页脚数据
    const savedData = localStorage.getItem('footerData');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setFooterData(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.error('Failed to parse footer data:', error);
      }
    }
    // 监听 storage 事件
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'footerData' && e.newValue) {
        try {
          const parsed = JSON.parse(e.newValue);
          setFooterData(prev => ({ ...prev, ...parsed }));
        } catch (error) {
          console.error('Failed to parse footer data:', error);
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
            <h3 className="text-xl font-bold mb-4">{footerData.quickLinksTitle}</h3>
            <div className="space-y-2">
              {footerData.quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.link}
                  className="block text-[#DEE1ED] hover:text-white transition-colors cursor-pointer"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">{footerData.contactTitle}</h3>
            <div className="space-y-2 text-[#DEE1ED]">
              <p><strong>{footerData.addressLabel}:</strong> {footerData.address}</p>
              <p><strong>{footerData.contactMethodLabel}:</strong> {footerData.contactMethod}</p>
              <p><strong>{footerData.websiteLabel}:</strong> {footerData.website}</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">{footerData.customerServiceTitle}</h3>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={footerData.customerServiceIcon}
                alt={footerData.customerServiceLabel}
                className="h-12 w-12 rounded-full object-cover"
              />
              <span className="text-[#DEE1ED]">{footerData.customerServiceLabel}</span>
            </div>
            <div className="mt-4">
              <p className="text-sm text-[#DEE1ED] mb-1">{footerData.workingHoursLabel}</p>
              <p className="text-sm text-[#DEE1ED]">{footerData.workingHours}</p>
            </div>
          </div>
        </div>
        <div className="border-t border-[#DEE1ED] border-opacity-20 pt-6 text-center">
          <p className="text-sm text-[#DEE1ED]">
            {footerData.copyright}
          </p>
          <p className="text-xs text-[#DEE1ED] mt-2">
            {footerData.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;