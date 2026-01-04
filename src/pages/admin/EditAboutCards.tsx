import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContent } from '../../contexts/ContentContext';
import { ArrowLeft, Plus, Trash2, Save, Upload } from 'lucide-react';
function EditAboutCards() {
  const navigate = useNavigate();
  const { aboutCards, updateAboutCards } = useContent();
  const [cards, setCards] = useState(aboutCards);
  const [saved, setSaved] = useState(false);
  const handleAddCard = () => {
    setCards([...cards, { title: '', image: '', description: '' }]);
  };
  const handleRemoveCard = (index: number) => {
    setCards(cards.filter((_, i) => i !== index));
  };
  const handleCardChange = (index: number, field: string, value: string) => {
    const newCards = [...cards];
    newCards[index] = { ...newCards[index], [field]: value };
    setCards(newCards);
  };
  const handleSave = () => {
    updateAboutCards(cards);
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
          <h1 className="text-4xl font-bold text-gray-800 mb-2">關於卡片管理</h1>
          <p className="text-gray-600">編輯首頁關於板塊的三個卡片</p>
        </div>
        {saved && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            ✓ 更改已保存成功！
          </div>
        )}
        <div className="space-y-6">
          {cards.map((card, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">卡片 #{index + 1}</h3>
                <button
                  onClick={() => handleRemoveCard(index)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">標題</label>
                  <input
                    type="text"
                    value={card.title}
                    onChange={(e) => handleCardChange(index, 'title', e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                    placeholder="例如：公司文化"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">圖片URL</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={card.image}
                      onChange={(e) => handleCardChange(index, 'image', e.target.value)}
                      className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                      placeholder="https://example.com/image.jpg"
                    />
                    <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center gap-2 cursor-pointer">
                      <Upload className="h-5 w-5" />
                      <span>上傳</span>
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">描述</label>
                  <textarea
                    value={card.description}
                    onChange={(e) => handleCardChange(index, 'description', e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none resize-none"
                    rows={3}
                    placeholder="卡片描述文字"
                  />
                </div>
                {card.image && (
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">預覽</label>
                    <img
                      src={card.image}
                      alt="預覽"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handleAddCard}
          className="mt-6 flex items-center gap-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors cursor-pointer"
        >
          <Plus className="h-5 w-5" />
          <span>新增卡片</span>
        </button>
      </div>
    </div>
  );
}
export default EditAboutCards;