import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContent } from '../../contexts/ContentContext';
import { ArrowLeft, Plus, Trash2, Save } from 'lucide-react';
function EditFAQ() {
  const navigate = useNavigate();
  const { faqItems, updateFAQItems } = useContent();
  const [items, setItems] = useState(faqItems);
  const [saved, setSaved] = useState(false);
  const handleAddItem = () => {
    setItems([...items, {
      id: Date.now().toString(),
      question: '',
      answer: ''
    }]);
  };
  const handleRemoveItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };
  const handleItemChange = (index: number, field: string, value: string) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [field]: value };
    setItems(newItems);
  };
  const handleSave = () => {
    updateFAQItems(items);
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
          <h1 className="text-4xl font-bold text-gray-800 mb-2">FAQ管理</h1>
          <p className="text-gray-600">編輯常見問題</p>
        </div>
        {saved && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            ✓ 更改已保存成功！
          </div>
        )}
        <div className="space-y-6">
          {items.map((item, index) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">FAQ #{index + 1}</h3>
                <button
                  onClick={() => handleRemoveItem(index)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">問題</label>
                  <input
                    type="text"
                    value={item.question}
                    onChange={(e) => handleItemChange(index, 'question', e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                    placeholder="輸入問題"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">回答</label>
                  <textarea
                    value={item.answer}
                    onChange={(e) => handleItemChange(index, 'answer', e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none resize-none"
                    rows={4}
                    placeholder="輸入回答"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handleAddItem}
          className="mt-6 flex items-center gap-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors cursor-pointer"
        >
          <Plus className="h-5 w-5" />
          <span>新增FAQ</span>
        </button>
      </div>
    </div>
  );
}
export default EditFAQ;