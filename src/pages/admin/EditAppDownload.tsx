import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContent } from '../../contexts/ContentContext';
import { ArrowLeft, Plus, Trash2, Save, Upload } from 'lucide-react';
function EditAppDownload() {
  const navigate = useNavigate();
  const { appDownloadContent, updateAppDownloadContent } = useContent();
  const [content, setContent] = useState(appDownloadContent);
  const [saved, setSaved] = useState(false);
  const handleChange = (field: string, value: string | string[]) => {
    setContent({ ...content, [field]: value });
  };
  const handleFeatureChange = (index: number, value: string) => {
    const newFeatures = [...content.features];
    newFeatures[index] = value;
    setContent({ ...content, features: newFeatures });
  };
  const handleAddFeature = () => {
    setContent({ ...content, features: [...content.features, ''] });
  };
  const handleRemoveFeature = (index: number) => {
    const newFeatures = content.features.filter((_, i) => i !== index);
    setContent({ ...content, features: newFeatures });
  };
  const handleRequirementChange = (type: 'ios' | 'android', index: number, value: string) => {
    const field = type === 'ios' ? 'iosRequirements' : 'androidRequirements';
    const newRequirements = [...content[field]];
    newRequirements[index] = value;
    setContent({ ...content, [field]: newRequirements });
  };
  const handleAddRequirement = (type: 'ios' | 'android') => {
    const field = type === 'ios' ? 'iosRequirements' : 'androidRequirements';
    setContent({ ...content, [field]: [...content[field], ''] });
  };
  const handleRemoveRequirement = (type: 'ios' | 'android', index: number) => {
    const field = type === 'ios' ? 'iosRequirements' : 'androidRequirements';
    const newRequirements = content[field].filter((_, i) => i !== index);
    setContent({ ...content, [field]: newRequirements });
  };
  const handleSave = () => {
    updateAppDownloadContent(content);
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
          <h1 className="text-4xl font-bold text-gray-800 mb-2">App下載頁面管理</h1>
          <p className="text-gray-600">編輯App下載頁面的所有內容、鏈接和圖片</p>
        </div>
        {saved && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            ✓ 更改已保存成功！
          </div>
        )}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">頁面標題</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">主標題</label>
                <input
                  type="text"
                  value={content.pageTitle}
                  onChange={(e) => handleChange('pageTitle', e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">副標題</label>
                <input
                  type="text"
                  value={content.pageSubtitle}
                  onChange={(e) => handleChange('pageSubtitle', e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">功能特色</h2>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">板塊標題</label>
              <input
                type="text"
                value={content.featuresTitle}
                onChange={(e) => handleChange('featuresTitle', e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
              />
            </div>
            <div className="space-y-3">
              {content.features.map((feature, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={feature}
                    onChange={(e) => handleFeatureChange(index, e.target.value)}
                    className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                    placeholder={`功能特色 ${index + 1}`}
                  />
                  <button
                    onClick={() => handleRemoveFeature(index)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg cursor-pointer"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={handleAddFeature}
              className="mt-4 flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg cursor-pointer"
            >
              <Plus className="h-4 w-4" />
              <span>添加功能</span>
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">下載鏈接</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">下載板塊標題</label>
                <input
                  type="text"
                  value={content.downloadTitle}
                  onChange={(e) => handleChange('downloadTitle', e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">iOS App Store 鏈接</label>
                <input
                  type="url"
                  value={content.iosAppStoreUrl}
                  onChange={(e) => handleChange('iosAppStoreUrl', e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                  placeholder="https://apps.apple.com/..."
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Android Google Play 鏈接</label>
                <input
                  type="url"
                  value={content.androidPlayStoreUrl}
                  onChange={(e) => handleChange('androidPlayStoreUrl', e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                  placeholder="https://play.google.com/..."
                />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">二維碼圖片</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">二維碼說明文字</label>
                <input
                  type="text"
                  value={content.qrCodeDescription}
                  onChange={(e) => handleChange('qrCodeDescription', e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">iOS 二維碼圖片URL</label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={content.iosQRCode}
                    onChange={(e) => handleChange('iosQRCode', e.target.value)}
                    className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                    placeholder="https://example.com/ios-qr.png"
                  />
                  <button className="px-4 py-2 bg-[#10B981] hover:bg-[#059669] text-white rounded-lg flex items-center gap-2 cursor-pointer">
                    <Upload className="h-4 w-4" />
                    <span>上傳</span>
                  </button>
                </div>
                {content.iosQRCode && (
                  <img src={content.iosQRCode} alt="iOS QR" className="mt-2 w-32 h-32 border rounded" />
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Android 二維碼圖片URL</label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={content.androidQRCode}
                    onChange={(e) => handleChange('androidQRCode', e.target.value)}
                    className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                    placeholder="https://example.com/android-qr.png"
                  />
                  <button className="px-4 py-2 bg-[#10B981] hover:bg-[#059669] text-white rounded-lg flex items-center gap-2 cursor-pointer">
                    <Upload className="h-4 w-4" />
                    <span>上傳</span>
                  </button>
                </div>
                {content.androidQRCode && (
                  <img src={content.androidQRCode} alt="Android QR" className="mt-2 w-32 h-32 border rounded" />
                )}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">系統要求</h2>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">板塊標題</label>
              <input
                type="text"
                value={content.systemRequirementsTitle}
                onChange={(e) => handleChange('systemRequirementsTitle', e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">iOS 標題</label>
                <input
                  type="text"
                  value={content.iosTitle}
                  onChange={(e) => handleChange('iosTitle', e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none mb-3"
                />
                <div className="space-y-2">
                  {content.iosRequirements.map((req, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={req}
                        onChange={(e) => handleRequirementChange('ios', index, e.target.value)}
                        className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                        placeholder={`iOS 要求 ${index + 1}`}
                      />
                      <button
                        onClick={() => handleRemoveRequirement('ios', index)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg cursor-pointer"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => handleAddRequirement('ios')}
                  className="mt-3 flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg cursor-pointer"
                >
                  <Plus className="h-4 w-4" />
                  <span>添加iOS要求</span>
                </button>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Android 標題</label>
                <input
                  type="text"
                  value={content.androidTitle}
                  onChange={(e) => handleChange('androidTitle', e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none mb-3"
                />
                <div className="space-y-2">
                  {content.androidRequirements.map((req, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={req}
                        onChange={(e) => handleRequirementChange('android', index, e.target.value)}
                        className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                        placeholder={`Android 要求 ${index + 1}`}
                      />
                      <button
                        onClick={() => handleRemoveRequirement('android', index)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg cursor-pointer"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => handleAddRequirement('android')}
                  className="mt-3 flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg cursor-pointer"
                >
                  <Plus className="h-4 w-4" />
                  <span>添加Android要求</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditAppDownload;