import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
interface Value {
  icon: string;
  title: string;
  description: string;
}
export default function EditValues() {
  const [values, setValues] = useState<Value[]>([
    {
      icon: 'https://hklingrui.com/pc/images/gc.png',
      title: '共創',
      description: '團隊是我們最強的競爭力，我們堅信協作創造最大的價值。每位成員的智慧與努力，構築了我們不斷進步的動力。'
    },
    {
      icon: 'https://hklingrui.com/pc/images/dc.png',
      title: '洞察',
      description: '成功的投資源於對市場、趨勢和週期的深刻理解。我們將持續以敏銳的洞察力為客戶提供獨到的市場分析與前瞻建議。'
    },
    {
      icon: 'https://hklingrui.com/pc/images/wj.png',
      title: '穩進',
      description: '我們秉持理性投資理念，始終堅持長期主義。無論市場環境如何變化，我們始終穩步前行。'
    },
    {
      icon: 'https://hklingrui.com/pc/images/xr.png',
      title: '信任',
      description: '透明與責任是我們建立的基石。我們致力於通過專業的服務和可靠的執行，贏得客戶、團隊及市場的信任。'
    },
    {
      icon: 'https://hklingrui.com/pc/images/jh.png',
      title: '進化',
      description: '時代不斷進化，我們也在不斷成長。通過不斷學習和實踐，我們優化決策與團隊管理，始終保持行業領先地位。'
    }
  ]);
  useEffect(() => {
    const saved = localStorage.getItem('coreValues');
    if (saved) {
      try {
        setValues(JSON.parse(saved));
      } catch (error) {
        console.error('Failed to load core values:', error);
      }
    }
  }, []);
  const handleSave = () => {
    localStorage.setItem('coreValues', JSON.stringify(values));
    alert('核心價值觀已保存！');
  };
  const updateValue = (index: number, field: keyof Value, value: string) => {
    const newValues = [...values];
    newValues[index] = { ...newValues[index], [field]: value };
    setValues(newValues);
  };
  const addValue = () => {
    setValues([...values, { icon: '', title: '', description: '' }]);
  };
  const removeValue = (index: number) => {
    if (values.length > 1) {
      setValues(values.filter((_, i) => i !== index));
    }
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
          <h1 className="text-3xl font-bold mb-6">核心價值觀管理</h1>
          <div className="space-y-8">
            {values.map((value, index) => (
              <div key={index} className="border-b pb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold">價值觀 {index + 1}</h3>
                  {values.length > 1 && (
                    <button
                      onClick={() => removeValue(index)}
                      className="text-red-600 hover:text-red-800 cursor-pointer"
                    >
                      刪除
                    </button>
                  )}
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">圖標URL</label>
                    <input
                      type="text"
                      value={value.icon}
                      onChange={(e) => updateValue(index, 'icon', e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg"
                      placeholder="圖標圖片URL"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">標題</label>
                    <input
                      type="text"
                      value={value.title}
                      onChange={(e) => updateValue(index, 'title', e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">描述</label>
                    <textarea
                      value={value.description}
                      onChange={(e) => updateValue(index, 'description', e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg"
                      rows={4}
                    />
                  </div>
                </div>
              </div>
            ))}
            <button
              onClick={addValue}
              className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-colors cursor-pointer"
            >
              + 添加新價值觀
            </button>
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