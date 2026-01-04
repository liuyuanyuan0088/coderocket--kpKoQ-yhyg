import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContent } from '../../contexts/ContentContext';
import { ArrowLeft, Plus, Trash2, Save } from 'lucide-react';
function EditHero() {
  const navigate = useNavigate();
  const { heroSlides, updateHeroSlides } = useContent();
  const [slides, setSlides] = useState(heroSlides);
  const [saved, setSaved] = useState(false);
  const handleAddSlide = () => {
    setSlides([...slides, { image: '', title: '', subtitle: '' }]);
  };
  const handleRemoveSlide = (index: number) => {
    setSlides(slides.filter((_, i) => i !== index));
  };
  const handleSlideChange = (index: number, field: string, value: string) => {
    const newSlides = [...slides];
    newSlides[index] = { ...newSlides[index], [field]: value };
    setSlides(newSlides);
  };
  const handleSave = () => {
    updateHeroSlides(slides);
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
          <h1 className="text-4xl font-bold text-gray-800 mb-2">輪播圖管理</h1>
          <p className="text-gray-600">編輯首頁輪播圖內容</p>
        </div>
        {saved && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            ✓ 更改已保存成功！
          </div>
        )}
        <div className="space-y-6">
          {slides.map((slide, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">輪播圖 #{index + 1}</h3>
                <button
                  onClick={() => handleRemoveSlide(index)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">圖片URL</label>
                  <input
                    type="text"
                    value={slide.image}
                    onChange={(e) => handleSlideChange(index, 'image', e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">標題</label>
                  <input
                    type="text"
                    value={slide.title}
                    onChange={(e) => handleSlideChange(index, 'title', e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                    placeholder="輸入標題"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">副標題</label>
                  <input
                    type="text"
                    value={slide.subtitle}
                    onChange={(e) => handleSlideChange(index, 'subtitle', e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                    placeholder="輸入副標題"
                  />
                </div>
                {slide.image && (
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">預覽</label>
                    <img
                      src={slide.image}
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
          onClick={handleAddSlide}
          className="mt-6 flex items-center gap-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors cursor-pointer"
        >
          <Plus className="h-5 w-5" />
          <span>新增輪播圖</span>
        </button>
      </div>
    </div>
  );
}
export default EditHero;