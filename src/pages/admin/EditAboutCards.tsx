import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
interface AboutCard {
  title: string;
  image: string;
  description: string;
  link: string;
}
export default function EditAboutCards() {
  const [cards, setCards] = useState<AboutCard[]>([
    {
      title: '公司文化',
      image: 'https://picsum.photos/id/10/400/300',
      description: '秉持專業、創新、穩健的經營理念',
      link: '/company-culture'
    },
    {
      title: '服務與解決方案',
      image: 'https://picsum.photos/id/20/400/300',
      description: '提供全方位資產管理與投資顧問服務',
      link: '/services'
    },
    {
      title: '關於我們',
      image: 'https://picsum.photos/id/30/400/300',
      description: '專注於東盟地區新能源資產投資管理',
      link: '/about'
    }
  ]);
  useEffect(() => {
    const saved = localStorage.getItem('aboutCards');
    if (saved) {
      try {
        setCards(JSON.parse(saved));
      } catch (error) {
        console.error('Failed to load about cards:', error);
      }
    }
  }, []);
  const handleSave = () => {
    localStorage.setItem('aboutCards', JSON.stringify(cards));
    alert('關於卡片已保存！');
  };
  const updateCard = (index: number, field: keyof AboutCard, value: string) => {
    const newCards = [...cards];
    newCards[index] = { ...newCards[index], [field]: value };
    setCards(newCards);
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
          <h1 className="text-3xl font-bold mb-6">關於卡片管理</h1>
          <div className="space-y-8">
            {cards.map((card, index) => (
              <div key={index} className="border-b pb-6">
                <h3 className="text-lg font-bold mb-4">卡片 {index + 1}</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">標題</label>
                    <input
                      type="text"
                      value={card.title}
                      onChange={(e) => updateCard(index, 'title', e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">圖片URL</label>
                    <input
                      type="text"
                      value={card.image}
                      onChange={(e) => updateCard(index, 'image', e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">描述</label>
                    <textarea
                      value={card.description}
                      onChange={(e) => updateCard(index, 'description', e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg"
                      rows={3}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">鏈接</label>
                    <input
                      type="text"
                      value={card.link}
                      onChange={(e) => updateCard(index, 'link', e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
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