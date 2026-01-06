import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
interface Service {
  title: string;
  description: string;
  icon: string;
}
interface Advantage {
  title: string;
  description: string;
}
export default function EditServices() {
  const [content, setContent] = useState({
    title: '服務與解決方案',
    subtitle: '提供全方位資產管理與投資顧問服務',
    services: [
      {
        title: '資產配置',
        description: '根據客戶風險偏好和投資目標，提供個性化的資產配置方案',
        icon: '📊'
      },
      {
        title: '投資顧問',
        description: '專業的投資建議和市場分析，幫助客戶做出明智的投資決策',
        icon: '💡'
      },
      {
        title: '風險管理',
        description: '全面的風險評估和管理，保障客戶資產安全',
        icon: '🛡️'
      },
      {
        title: '新能源投資',
        description: '專注於東盟地區新能源項目投資，把握綠色經濟機遇',
        icon: '⚡'
      },
      {
        title: '基金管理',
        description: '專業的基金管理服務，追求穩健的長期回報',
        icon: '📈'
      },
      {
        title: '財富規劃',
        description: '全方位的財富管理和傳承規劃服務',
        icon: '💰'
      }
    ] as Service[],
    advantagesTitle: '我們的優勢',
    advantages: [
      {
        title: '專業團隊',
        description: '經驗豐富的投資管理團隊，深諳東盟市場'
      },
      {
        title: '穩健策略',
        description: '注重風險控制，追求長期穩定回報'
      },
      {
        title: '透明服務',
        description: '定期報告投資情況，保持溝通透明'
      },
      {
        title: '個性化方案',
        description: '根據客戶需求定制投資方案'
      }
    ] as Advantage[]
  });
  useEffect(() => {
    const saved = localStorage.getItem('servicesContent');
    if (saved) {
      try {
        setContent(JSON.parse(saved));
      } catch (error) {
        console.error('Failed to load services:', error);
      }
    }
  }, []);
  const handleSave = () => {
    localStorage.setItem('servicesContent', JSON.stringify(content));
    alert('服務內容已保存！');
  };
  const updateService = (index: number, field: keyof Service, value: string) => {
    const newServices = [...content.services];
    newServices[index] = { ...newServices[index], [field]: value };
    setContent({ ...content, services: newServices });
  };
  const updateAdvantage = (index: number, field: keyof Advantage, value: string) => {
    const newAdvantages = [...content.advantages];
    newAdvantages[index] = { ...newAdvantages[index], [field]: value };
    setContent({ ...content, advantages: newAdvantages });
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
          <h1 className="text-3xl font-bold mb-6">服務管理</h1>
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
              <h3 className="text-lg font-bold mb-4">服務項目</h3>
              {content.services.map((service, index) => (
                <div key={index} className="border-b pb-4 mb-4">
                  <h4 className="font-bold mb-2">服務 {index + 1}</h4>
                  <div className="space-y-2">
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">圖標 (Emoji)</label>
                      <input
                        type="text"
                        value={service.icon}
                        onChange={(e) => updateService(index, 'icon', e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">標題</label>
                      <input
                        type="text"
                        value={service.title}
                        onChange={(e) => updateService(index, 'title', e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">描述</label>
                      <textarea
                        value={service.description}
                        onChange={(e) => updateService(index, 'description', e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg"
                        rows={2}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t pt-6">
              <h3 className="text-lg font-bold mb-4">優勢區塊</h3>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">區塊標題</label>
                <input
                  type="text"
                  value={content.advantagesTitle}
                  onChange={(e) => setContent({ ...content, advantagesTitle: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              {content.advantages.map((advantage, index) => (
                <div key={index} className="border-b pb-4 mb-4">
                  <h4 className="font-bold mb-2">優勢 {index + 1}</h4>
                  <div className="space-y-2">
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">標題</label>
                      <input
                        type="text"
                        value={advantage.title}
                        onChange={(e) => updateAdvantage(index, 'title', e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">描述</label>
                      <input
                        type="text"
                        value={advantage.description}
                        onChange={(e) => updateAdvantage(index, 'description', e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              ))}
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