import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
export default function EditFooter() {
  const [footerData, setFooterData] = useState<FooterData>({
    quickLinksTitle: '快速鏈接',
    quickLinks: [
      { label: '公司文化', link: '/company-culture' },
      { label: '凌瑞團隊', link: '/about' },
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
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    const savedData = localStorage.getItem('footerData');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setFooterData(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.error('Failed to parse footer data:', error);
      }
    }
  }, []);
  const handleSave = () => {
    localStorage.setItem('footerData', JSON.stringify(footerData));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };
  const updateQuickLink = (index: number, field: 'label' | 'link', value: string) => {
    const newLinks = [...footerData.quickLinks];
    newLinks[index] = { ...newLinks[index], [field]: value };
    setFooterData({ ...footerData, quickLinks: newLinks });
  };
  const addQuickLink = () => {
    setFooterData({
      ...footerData,
      quickLinks: [...footerData.quickLinks, { label: '新鏈接', link: '/' }]
    });
  };
  const removeQuickLink = (index: number) => {
    setFooterData({
      ...footerData,
      quickLinks: footerData.quickLinks.filter((_, i) => i !== index)
    });
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="mx-auto px-6 py-4 max-w-7xl">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">頁腳管理</h1>
            <div className="flex gap-4">
              <Link
                to="/admin/dashboard"
                className="text-gray-600 hover:text-gray-900 cursor-pointer"
              >
                返回控制台
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto px-6 py-8 max-w-4xl">
        {saved && (
          <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
            ✓ 頁腳內容已保存！
          </div>
        )}
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-8">
          {/* 快速链接 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">快速鏈接</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                板塊標題
              </label>
              <input
                type="text"
                value={footerData.quickLinksTitle}
                onChange={(e) => setFooterData({ ...footerData, quickLinksTitle: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="space-y-4">
              {footerData.quickLinks.map((link, index) => (
                <div key={index} className="flex gap-4 items-start p-4 border border-gray-200 rounded-lg">
                  <div className="flex-1 space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        鏈接文字
                      </label>
                      <input
                        type="text"
                        value={link.label}
                        onChange={(e) => updateQuickLink(index, 'label', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        鏈接地址
                      </label>
                      <input
                        type="text"
                        value={link.link}
                        onChange={(e) => updateQuickLink(index, 'link', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => removeQuickLink(index)}
                    className="mt-8 text-red-600 hover:text-red-700 cursor-pointer"
                  >
                    刪除
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={addQuickLink}
              className="mt-4 text-blue-600 hover:text-blue-700 cursor-pointer"
            >
              + 添加鏈接
            </button>
          </div>
          {/* 联系信息 */}
          <div className="border-t pt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">聯繫信息</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  板塊標題
                </label>
                <input
                  type="text"
                  value={footerData.contactTitle}
                  onChange={(e) => setFooterData({ ...footerData, contactTitle: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    地址標籤
                  </label>
                  <input
                    type="text"
                    value={footerData.addressLabel}
                    onChange={(e) => setFooterData({ ...footerData, addressLabel: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    地址內容
                  </label>
                  <input
                    type="text"
                    value={footerData.address}
                    onChange={(e) => setFooterData({ ...footerData, address: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    聯繫方式標籤
                  </label>
                  <input
                    type="text"
                    value={footerData.contactMethodLabel}
                    onChange={(e) => setFooterData({ ...footerData, contactMethodLabel: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    聯繫方式內容
                  </label>
                  <input
                    type="text"
                    value={footerData.contactMethod}
                    onChange={(e) => setFooterData({ ...footerData, contactMethod: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    網站標籤
                  </label>
                  <input
                    type="text"
                    value={footerData.websiteLabel}
                    onChange={(e) => setFooterData({ ...footerData, websiteLabel: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    網站地址
                  </label>
                  <input
                    type="text"
                    value={footerData.website}
                    onChange={(e) => setFooterData({ ...footerData, website: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* 在线客服 */}
          <div className="border-t pt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">在線客服</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  板塊標題
                </label>
                <input
                  type="text"
                  value={footerData.customerServiceTitle}
                  onChange={(e) => setFooterData({ ...footerData, customerServiceTitle: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  客服圖標 URL
                </label>
                <input
                  type="text"
                  value={footerData.customerServiceIcon}
                  onChange={(e) => setFooterData({ ...footerData, customerServiceIcon: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://..."
                />
                {footerData.customerServiceIcon && (
                  <img 
                    src={footerData.customerServiceIcon} 
                    alt="預覽" 
                    className="mt-2 h-16 w-16 rounded-full object-cover"
                  />
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    客服標籤
                  </label>
                  <input
                    type="text"
                    value={footerData.customerServiceLabel}
                    onChange={(e) => setFooterData({ ...footerData, customerServiceLabel: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    工作時間標籤
                  </label>
                  <input
                    type="text"
                    value={footerData.workingHoursLabel}
                    onChange={(e) => setFooterData({ ...footerData, workingHoursLabel: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  工作時間
                </label>
                <input
                  type="text"
                  value={footerData.workingHours}
                  onChange={(e) => setFooterData({ ...footerData, workingHours: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
          {/* 版权信息 */}
          <div className="border-t pt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">版權信息</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  版權聲明
                </label>
                <input
                  type="text"
                  value={footerData.copyright}
                  onChange={(e) => setFooterData({ ...footerData, copyright: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  免責聲明
                </label>
                <input
                  type="text"
                  value={footerData.disclaimer}
                  onChange={(e) => setFooterData({ ...footerData, disclaimer: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4 pt-6">
            <button
              onClick={handleSave}
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer font-medium"
            >
              保存更改
            </button>
            <Link
              to="/admin/dashboard"
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
            >
              取消
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}