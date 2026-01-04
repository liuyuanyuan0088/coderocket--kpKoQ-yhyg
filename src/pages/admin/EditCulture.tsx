import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContent } from '../../contexts/ContentContext';
import { ArrowLeft, Save } from 'lucide-react';
function EditCulture() {
  const navigate = useNavigate();
  const { companyCulture, updateCompanyCulture } = useContent();
  const [culture, setCulture] = useState(companyCulture);
  const [saved, setSaved] = useState(false);
  const handleMissionChange = (field: string, value: string) => {
    setCulture({
      ...culture,
      mission: { ...culture.mission, [field]: value }
    });
  };
  const handleVisionChange = (field: string, value: string) => {
    setCulture({
      ...culture,
      vision: { ...culture.vision, [field]: value }
    });
  };
  const handleSave = () => {
    updateCompanyCulture(culture);
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
          <h1 className="text-4xl font-bold text-gray-800 mb-2">公司文化管理</h1>
          <p className="text-gray-600">編輯使命與願景</p>
        </div>
        {saved && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            ✓ 更改已保存成功！
          </div>
        )}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">使命 Mission</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">主標題</label>
                <input
                  type="text"
                  value={culture.mission.title}
                  onChange={(e) => handleMissionChange('title', e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">副標題（英文）</label>
                <input
                  type="text"
                  value={culture.mission.subtitle}
                  onChange={(e) => handleMissionChange('subtitle', e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">詳細描述</label>
                <textarea
                  value={culture.mission.description}
                  onChange={(e) => handleMissionChange('description', e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none resize-none"
                  rows={6}
                />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">願景 Vision</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">主標題</label>
                <input
                  type="text"
                  value={culture.vision.title}
                  onChange={(e) => handleVisionChange('title', e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">副標題（英文）</label>
                <input
                  type="text"
                  value={culture.vision.subtitle}
                  onChange={(e) => handleVisionChange('subtitle', e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">詳細描述</label>
                <textarea
                  value={culture.vision.description}
                  onChange={(e) => handleVisionChange('description', e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none resize-none"
                  rows={6}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditCulture;