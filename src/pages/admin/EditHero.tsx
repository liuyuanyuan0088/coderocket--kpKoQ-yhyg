import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContent } from '../../contexts/ContentContext';
import { ArrowLeft, Plus, Trash2, Save, Eye } from 'lucide-react';
function EditHero() {
  const navigate = useNavigate();
  const { heroSlides, updateHeroSlides } = useContent();
  const [slides, setSlides] = useState(heroSlides);
  const [saved, setSaved] = useState(false);
  const handleAddSlide = () => {
    setSlides([
      ...slides, 
      { 
        image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop', 
        title: '新輪播圖', 
        subtitle: '請編輯此輪播圖' 
      }
    ]);
  };
  const handleRemoveSlide = (index: number) => {
    if (slides.length <= 1) {
      alert('至少需要保留一張輪播圖！');
      return;
    }
    setSlides(slides.filter((_, i) => i !== index));
  };
  const handleSlideChange = (index: number, field: string, value: string) => {
    const newSlides = [...slides];
    newSlides[index] = { ...newSlides[index], [field]: value };
    setSlides(newSlides);
  };
  const handleSave = () => {
    if (slides.length === 0) {
      alert('至少需要一張輪播圖！');
      return;
    }
    updateHeroSlides(slides);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };
  const handlePreview = () => {
    window.open('/', '_blank');
  };
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow-md">
        <div className="mx-auto px-4 max-w-[1200px] py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/admin/dashboard')}
              className="flex items-center gap-2 text-gray-600 hover:text-[#10B981] transition-colors cursor-pointer"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>返回控制台</span>
            </button>
            <div className="flex items-center gap-3">
              <button
                onClick={handlePreview}
                className="flex items-center gap-2 px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors cursor-pointer"
              >
                <Eye className="h-5 w-5" />
                <span>預覽</span>
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
      </div>
      <div className="mx-auto px-4 max-w-[1200px] py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">輪播圖管理</h1>
          <p className="text-gray-600">編輯首頁輪播圖內容（當前 {slides.length} 張）</p>
        </div>
        {saved && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>更改已保存成功！請刷新前台頁面查看效果。</span>
          </div>
        )}
        <div className="space-y-6">
          {slides.map((slide, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">輪播圖 #{index + 1}</h3>
                <button
                  onClick={() => handleRemoveSlide(index)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer flex items-center gap-2"
                  disabled={slides.length <= 1}
                >
                  <Trash2 className="h-5 w-5" />
                  <span className="text-sm">刪除</span>
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    圖片URL <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={slide.image}
                    onChange={(e) => handleSlideChange(index, 'image', e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                    placeholder="https://images.unsplash.com/photo-..."
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    建議使用 Unsplash 圖片鏈接，尺寸建議 2070x600 或更高
                  </p>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    標題 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={slide.title}
                    onChange={(e) => handleSlideChange(index, 'title', e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                    placeholder="輸入醒目的標題"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    副標題 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={slide.subtitle}
                    onChange={(e) => handleSlideChange(index, 'subtitle', e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                    placeholder="輸入補充說明"
                  />
                </div>
                {slide.image && (
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">預覽</label>
                    <div className="relative h-48 rounded-lg overflow-hidden bg-gray-200">
                      <img
                        src={slide.image}
                        alt={slide.title || '預覽'}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=400&auto=format&fit=crop';
                        }}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <div className="text-center text-white px-4">
                          <h2 className="text-2xl font-bold mb-2">{slide.title}</h2>
                          <p className="text-sm">{slide.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handleAddSlide}
          className="mt-6 flex items-center gap-2 px-6 py-3 bg-[#10B981] hover:bg-[#059669] text-white rounded-lg transition-colors cursor-pointer"
        >
          <Plus className="h-5 w-5" />
          <span>新增輪播圖</span>
        </button>
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h4 className="font-bold text-blue-900 mb-2">💡 使用提示</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• 建議使用高質量圖片（建議尺寸：2070x600 或更高）</li>
            <li>• 可以使用 Unsplash.com 獲取免費高質量圖片</li>
            <li>• 標題和副標題會疊加在圖片上顯示，請確保文字清晰可讀</li>
            <li>• 至少需要保留一張輪播圖</li>
            <li>• 保存後請刷新前台頁面查看效果</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default EditHero;