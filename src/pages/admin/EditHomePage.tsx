import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function EditHomePage() {
  const [content, setContent] = useState({
    heroTitle: '專業資產管理',
    heroSubtitle: '以創新思維打造穩健投資組合',
    heroButton1: '了解更多',
    heroButton2: '聯繫我們',
    aboutTitle: '凌瑞團隊',
    aboutSubtitle: '以凌雲之志謀未來，以瑞氣盈門築財富',
    valuesTitle: '核心價值觀',
  });
  useEffect(() => {
    const saved = localStorage.getItem('homePageContent');
    if (saved) {
      try {
        setContent(JSON.parse(saved));
      } catch (error) {
        console.error('Failed to load home page content:', error);
      }
    }
  }, []);
  const handleSave = () => {
    localStorage.setItem('homePageContent', JSON.stringify(content));
    alert('首頁內容已保存！');
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
          <h1 className="text-3xl font-bold mb-6">首頁內容管理</h1>
          <div className="space-y-6">
            <div className="border-b pb-4">
              <h2 className="text-xl font-bold mb-4">英雄區域</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">主標題</label>
                  <input
                    type="text"
                    value={content.heroTitle}
                    onChange={(e) => setContent({ ...content, heroTitle: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">副標題</label>
                  <input
                    type="text"
                    value={content.heroSubtitle}
                    onChange={(e) => setContent({ ...content, heroSubtitle: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">按鈕1文字</label>
                  <input
                    type="text"
                    value={content.heroButton1}
                    onChange={(e) => setContent({ ...content, heroButton1: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">按鈕2文字</label>
                  <input
                    type="text"
                    value={content.heroButton2}
                    onChange={(e) => setContent({ ...content, heroButton2: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="border-b pb-4">
              <h2 className="text-xl font-bold mb-4">關於區域</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">區域標題</label>
                  <input
                    type="text"
                    value={content.aboutTitle}
                    onChange={(e) => setContent({ ...content, aboutTitle: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">區域副標題</label>
                  <input
                    type="text"
                    value={content.aboutSubtitle}
                    onChange={(e) => setContent({ ...content, aboutSubtitle: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4">核心價值觀區域</h2>
              <div>
                <label className="block text-sm font-medium mb-2">區域標題</label>
                <input
                  type="text"
                  value={content.valuesTitle}
                  onChange={(e) => setContent({ ...content, valuesTitle: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                />
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