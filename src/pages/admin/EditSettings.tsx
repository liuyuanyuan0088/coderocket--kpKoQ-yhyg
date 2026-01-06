import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function EditSettings() {
  const [settings, setSettings] = useState({
    siteName: '東盟新能資產管理有限公司',
    siteDescription: '專注於東盟地區新能源資產投資管理',
    contactEmail: 'team@hklingrui.com',
    contactPhone: '+852 1234 5678',
    address: '香港銅鑼灣希慎道33號',
    customerService: {
      icon: 'https://hklingrui.com/pc/images/qq.png',
      label: '客服',
      link: '',
      workingHoursLabel: '上班時間',
      workingHours: '週一到週五'
    }
  });
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    const savedSettings = localStorage.getItem('settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.error('Failed to parse settings:', error);
      }
    }
  }, []);
  const handleSave = () => {
    localStorage.setItem('settings', JSON.stringify(settings));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="mx-auto px-6 py-4 max-w-4xl">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">網站基本設置</h1>
            <Link
              to="/admin/dashboard"
              className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
            >
              ← 返回控制台
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto px-6 py-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              網站名稱
            </label>
            <input
              type="text"
              value={settings.siteName}
              onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              網站描述
            </label>
            <textarea
              value={settings.siteDescription}
              onChange={(e) => setSettings({ ...settings, siteDescription: e.target.value })}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              聯繫郵箱
            </label>
            <input
              type="email"
              value={settings.contactEmail}
              onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              聯繫電話
            </label>
            <input
              type="tel"
              value={settings.contactPhone}
              onChange={(e) => setSettings({ ...settings, contactPhone: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              公司地址
            </label>
            <input
              type="text"
              value={settings.address}
              onChange={(e) => setSettings({ ...settings, address: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="border-t border-gray-200 pt-6 mt-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">在線客服設置</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  客服圖標URL
                </label>
                <input
                  type="text"
                  value={settings.customerService.icon}
                  onChange={(e) => setSettings({
                    ...settings,
                    customerService: { ...settings.customerService, icon: e.target.value }
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://example.com/icon.png"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  客服標籤
                </label>
                <input
                  type="text"
                  value={settings.customerService.label}
                  onChange={(e) => setSettings({
                    ...settings,
                    customerService: { ...settings.customerService, label: e.target.value }
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="客服"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  客服鏈接（選填，留空則不可點擊）
                </label>
                <input
                  type="text"
                  value={settings.customerService.link}
                  onChange={(e) => setSettings({
                    ...settings,
                    customerService: { ...settings.customerService, link: e.target.value }
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://wa.me/85212345678 或 QQ客服鏈接"
                />
                <p className="mt-1 text-sm text-gray-500">
                  示例：WhatsApp: https://wa.me/85212345678 | QQ: tencent://message/?uin=123456
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  工作時間標籤
                </label>
                <input
                  type="text"
                  value={settings.customerService.workingHoursLabel}
                  onChange={(e) => setSettings({
                    ...settings,
                    customerService: { ...settings.customerService, workingHoursLabel: e.target.value }
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  工作時間
                </label>
                <input
                  type="text"
                  value={settings.customerService.workingHours}
                  onChange={(e) => setSettings({
                    ...settings,
                    customerService: { ...settings.customerService, workingHours: e.target.value }
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end pt-4">
            <button
              onClick={handleSave}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
            >
              {saved ? '✓ 已保存' : '保存更改'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}