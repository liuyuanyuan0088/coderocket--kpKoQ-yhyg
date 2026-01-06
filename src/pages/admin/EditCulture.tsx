import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
interface CultureContent {
  title: string;
  subtitle: string;
  missionTitle: string;
  missionContent: string;
  visionTitle: string;
  visionContent: string;
  coreTitle: string;
  coreValues: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  joinTitle: string;
  joinDescription: string;
  joinButtonText: string;
}
export default function EditCulture() {
  const [content, setContent] = useState<CultureContent>({
    title: '公司文化',
    subtitle: '秉持專業、創新、穩健的經營理念',
    missionTitle: '我們的使命',
    missionContent: '致力於為客戶創造長期穩健的投資回報，通過專業的資產管理服務，幫助客戶實現財富增值目標。我們專注於東盟地區新能源領域，把握綠色經濟發展機遇，為可持續發展做出貢獻。',
    visionTitle: '我們的願景',
    visionContent: '成為東盟地區最受信賴的新能源資產管理機構，以專業的投資策略和卓越的風險管理能力，為客戶提供優質的資產管理服務，創造可持續的價值。',
    coreTitle: '企業文化核心',
    coreValues: [
      { icon: '專', title: '專業', description: '深厚的行業知識和專業的投資管理能力' },
      { icon: '創', title: '創新', description: '不斷創新投資策略，把握市場機遇' },
      { icon: '穩', title: '穩健', description: '穩健的風險管理，保障客戶資產安全' }
    ],
    joinTitle: '加入我們',
    joinDescription: '我們正在尋找志同道合的專業人才，一起開創美好未來',
    joinButtonText: '查看職位'
  });
  useEffect(() => {
    const saved = localStorage.getItem('companyCulture');
    if (saved) {
      try {
        setContent(JSON.parse(saved));
      } catch (error) {
        console.error('Failed to load company culture:', error);
      }
    }
  }, []);
  const handleSave = () => {
    localStorage.setItem('companyCulture', JSON.stringify(content));
    alert('公司文化內容已保存！');
  };
  const updateCoreValue = (index: number, field: string, value: string) => {
    const newCoreValues = [...content.coreValues];
    newCoreValues[index] = { ...newCoreValues[index], [field]: value };
    setContent({ ...content, coreValues: newCoreValues });
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
          <h1 className="text-3xl font-bold mb-6">公司文化管理</h1>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">頁面標題</label>
              <input
                type="text"
                value={content.title}
                onChange={(e) => setContent({ ...content, title: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">頁面副標題</label>
              <input
                type="text"
                value={content.subtitle}
                onChange={(e) => setContent({ ...content, subtitle: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="border-t pt-6">
              <h3 className="text-lg font-bold mb-4">使命區塊</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">標題</label>
                  <input
                    type="text"
                    value={content.missionTitle}
                    onChange={(e) => setContent({ ...content, missionTitle: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">內容</label>
                  <textarea
                    value={content.missionContent}
                    onChange={(e) => setContent({ ...content, missionContent: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg"
                    rows={4}
                  />
                </div>
              </div>
            </div>
            <div className="border-t pt-6">
              <h3 className="text-lg font-bold mb-4">願景區塊</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">標題</label>
                  <input
                    type="text"
                    value={content.visionTitle}
                    onChange={(e) => setContent({ ...content, visionTitle: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">內容</label>
                  <textarea
                    value={content.visionContent}
                    onChange={(e) => setContent({ ...content, visionContent: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg"
                    rows={4}
                  />
                </div>
              </div>
            </div>
            <div className="border-t pt-6">
              <h3 className="text-lg font-bold mb-4">企業文化核心</h3>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">區塊標題</label>
                <input
                  type="text"
                  value={content.coreTitle}
                  onChange={(e) => setContent({ ...content, coreTitle: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              {content.coreValues.map((value, index) => (
                <div key={index} className="border-b pb-4 mb-4">
                  <h4 className="font-bold mb-2">核心價值 {index + 1}</h4>
                  <div className="space-y-2">
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">圖標文字</label>
                      <input
                        type="text"
                        value={value.icon}
                        onChange={(e) => updateCoreValue(index, 'icon', e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">標題</label>
                      <input
                        type="text"
                        value={value.title}
                        onChange={(e) => updateCoreValue(index, 'title', e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">描述</label>
                      <input
                        type="text"
                        value={value.description}
                        onChange={(e) => updateCoreValue(index, 'description', e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t pt-6">
              <h3 className="text-lg font-bold mb-4">加入我們區塊</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">標題</label>
                  <input
                    type="text"
                    value={content.joinTitle}
                    onChange={(e) => setContent({ ...content, joinTitle: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">描述</label>
                  <input
                    type="text"
                    value={content.joinDescription}
                    onChange={(e) => setContent({ ...content, joinDescription: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">按鈕文字</label>
                  <input
                    type="text"
                    value={content.joinButtonText}
                    onChange={(e) => setContent({ ...content, joinButtonText: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
              </div>
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