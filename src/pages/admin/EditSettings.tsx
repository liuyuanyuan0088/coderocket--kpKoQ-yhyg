import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContent } from '../../contexts/ContentContext';
import { ArrowLeft, Save, Upload } from 'lucide-react';
function EditSettings() {
  const navigate = useNavigate();
  const { siteSettings, updateSiteSettings } = useContent();
  const [settings, setSettings] = useState(siteSettings);
  const [saved, setSaved] = useState(false);
  const handleChange = (field: string, value: string) => {
    setSettings({ ...settings, [field]: value });
  };
  const handleSave = () => {
    updateSiteSettings(settings);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow-md">
        <div className="mx-auto px-4 max-w-[1200px] py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/admin')}
              className="flex items-center gap-2 text-gray-600 hover:text-[#10B981] transition-colors cursor-pointer"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>返回控制台</span>
            </button>
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-6 py-2 bg-[#10B981] hover:bg-[#059669] text-white rounded-lg transition-colors cursor-pointer"
            >
              <Save className="h-5 w-5" />
              <span>保存更改</span>
            </button>
          </div>
        </div>
      </div>
      <div className="mx-auto px-4 max-w-[1200px] py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">網站設置</h1>
          <p className="text-gray-600">編輯網站基本信息和聯繫方式</p>
        </div>
        {saved && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            ✓ 更改已保存成功！刷新頁面即可看到更新
          </div>
        )}
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">公司信息</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">公司名稱（中文）</label>
                <input
                  type="text"
                  value={settings.companyName}
                  onChange={(e) => handleChange('companyName', e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">公司名稱（英文）</label>
                <input
                  type="text"
                  value={settings.companyNameEn}
                  onChange={(e) => handleChange('companyNameEn', e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Logo URL</label>
            <div className="flex gap-4">
              <input
                type="text"
                value={settings.logoUrl}
                onChange={(e) => handleChange('logoUrl', e.target.value)}
                className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                placeholder="https://example.com/logo.png"
              />
              <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center gap-2 cursor-pointer">
                <Upload className="h-5 w-5" />
                <span>上傳</span>
              </button>
            </div>
            {settings.logoUrl && (
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">預覽：</p>
                <img src={settings.logoUrl} alt="Logo" className="h-16" />
              </div>
            )}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">聯繫信息</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">電子郵箱</label>
                <input
                  type="email"
                  value={settings.contactEmail}
                  onChange={(e) => handleChange('contactEmail', e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">公司地址</label>
                <input
                  type="text"
                  value={settings.contactAddress}
                  onChange={(e) => handleChange('contactAddress', e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">聯繫電話</label>
                <input
                  type="text"
                  value={settings.contactPhone}
                  onChange={(e) => handleChange('contactPhone', e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">工作時間</label>
                <input
                  type="text"
                  value={settings.workingHours}
                  onChange={(e) => handleChange('workingHours', e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">團隊板塊設置</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">團隊標題</label>
                <input
                  type="text"
                  value={settings.teamTitle}
                  onChange={(e) => handleChange('teamTitle', e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">團隊副標題</label>
                <input
                  type="text"
                  value={settings.teamSubtitle}
                  onChange={(e) => handleChange('teamSubtitle', e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">團隊描述</label>
                <textarea
                  value={settings.teamDescription}
                  onChange={(e) => handleChange('teamDescription', e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none resize-none"
                  rows={3}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditSettings;