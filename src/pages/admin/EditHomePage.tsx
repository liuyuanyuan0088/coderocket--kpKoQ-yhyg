import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContent } from '../../contexts/ContentContext';
import { ArrowLeft, Save } from 'lucide-react';
function EditHomePage() {
  const navigate = useNavigate();
  const { homePageTexts, updateHomePageTexts } = useContent();
  const [texts, setTexts] = useState(homePageTexts);
  const [saved, setSaved] = useState(false);
  const handleChange = (field: string, value: string) => {
    setTexts({ ...texts, [field]: value });
  };
  const handleSave = () => {
    updateHomePageTexts(texts);
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
          <h1 className="text-4xl font-bold text-gray-800 mb-2">首頁文案管理</h1>
          <p className="text-gray-600">編輯首頁所有文字內容</p>
        </div>
        {saved && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            ✓ 更改已保存成功！
          </div>
        )}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">關於板塊文字</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">板塊標題</label>
                <input
                  type="text"
                  value={texts.aboutSectionTitle}
                  onChange={(e) => handleChange('aboutSectionTitle', e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                  placeholder="例如：瑞行团队"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">副標題</label>
                <input
                  type="text"
                  value={texts.aboutSectionSubtitle}
                  onChange={(e) => handleChange('aboutSectionSubtitle', e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                  placeholder="例如：以瑞势顺时代，以笃行筑长远"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">描述文字</label>
                <textarea
                  value={texts.aboutSectionDescription}
                  onChange={(e) => handleChange('aboutSectionDescription', e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none resize-none"
                  rows={3}
                  placeholder="板塊描述"
                />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">核心價值觀板塊文字</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">板塊標題</label>
                <input
                  type="text"
                  value={texts.coreValuesSectionTitle}
                  onChange={(e) => handleChange('coreValuesSectionTitle', e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                  placeholder="例如：核心价值观"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">英文副標題</label>
                <input
                  type="text"
                  value={texts.coreValuesSectionSubtitle}
                  onChange={(e) => handleChange('coreValuesSectionSubtitle', e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                  placeholder="例如：Core Values"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">描述文字</label>
                <textarea
                  value={texts.coreValuesSectionDescription}
                  onChange={(e) => handleChange('coreValuesSectionDescription', e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none resize-none"
                  rows={3}
                  placeholder="板塊描述"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditHomePage;