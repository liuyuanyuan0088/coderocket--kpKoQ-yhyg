import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function EditSettings() {
  const [settings, setSettings] = useState({
    companyName: '東盟新能資產管理有限公司',
    tagline: '專注於東盟地區新能源資產投資管理',
    address: '香港中环金融街8号国际金融中心1期39楼',
    email: 'asean-newenergy.com',
    phone: '+852 47485997',
    workingHours: '週一至週五 9:00 - 18:00',
    customerServiceText: '客服',
    copyright: '東盟新能資產管理有限公司 ©All Rights reserved',
    rightsReserved: '未經許可不得複製、轉載或摘編，違者必究！'
  });
  useEffect(() => {
    const saved = localStorage.getItem('settings');
    if (saved) {
      try {
        setSettings(JSON.parse(saved));
      } catch (error) {
        console.error('Failed to load settings:', error);
      }
    }
  }, []);
  const handleSave = () => {
    localStorage.setItem('settings', JSON.stringify(settings));
    alert('設置已保存！');
  };
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto px-4 max-w-4xl">
        <div className="mb-6">
          <Link
            to="/admin/dashboard"
            className="text-blue-600 hover:text-blue-800 flex items-center gap-2 cursor-pointer"
          >
            ← 返回控制台
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-6">網站基本設置</h1>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">公司名稱</label>
              <input
                type="text"
                value={settings.companyName}
                onChange={(e) => setSettings({ ...settings, companyName: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">標語</label>
              <input
                type="text"
                value={settings.tagline}
                onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">公司地址</label>
              <input
                type="text"
                value={settings.address}
                onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">電子郵件</label>
              <input
                type="email"
                value={settings.email}
                onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">聯繫電話</label>
              <input
                type="tel"
                value={settings.phone}
                onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">工作時間</label>
              <input
                type="text"
                value={settings.workingHours}
                onChange={(e) => setSettings({ ...settings, workingHours: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">客服文字</label>
              <input
                type="text"
                value={settings.customerServiceText}
                onChange={(e) => setSettings({ ...settings, customerServiceText: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">版權聲明</label>
              <input
                type="text"
                value={settings.copyright}
                onChange={(e) => setSettings({ ...settings, copyright: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">權利保留聲明</label>
              <input
                type="text"
                value={settings.rightsReserved}
                onChange={(e) => setSettings({ ...settings, rightsReserved: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <button
              onClick={handleSave}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
            >
              保存更改
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}