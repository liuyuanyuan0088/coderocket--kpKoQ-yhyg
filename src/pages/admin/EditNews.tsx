import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContent } from '../../contexts/ContentContext';
import { ArrowLeft, Plus, Trash2, Save, Edit } from 'lucide-react';
function EditNews() {
  const navigate = useNavigate();
  const { newsArticles, updateNewsArticles } = useContent();
  const [articles, setArticles] = useState(newsArticles);
  const [saved, setSaved] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const handleAddArticle = () => {
    const newArticle = {
      id: Date.now().toString(),
      title: '',
      date: new Date().toISOString().split('T')[0],
      summary: '',
      content: '',
      category: '',
      type: 'company' as const
    };
    setArticles([...articles, newArticle]);
    setEditingIndex(articles.length);
  };
  const handleRemoveArticle = (index: number) => {
    setArticles(articles.filter((_, i) => i !== index));
    setEditingIndex(null);
  };
  const handleArticleChange = (index: number, field: string, value: string) => {
    const newArticles = [...articles];
    newArticles[index] = { ...newArticles[index], [field]: value };
    setArticles(newArticles);
  };
  const handleSave = () => {
    updateNewsArticles(articles);
    setSaved(true);
    setEditingIndex(null);
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
          <h1 className="text-4xl font-bold text-gray-800 mb-2">新聞管理</h1>
          <p className="text-gray-600">管理新聞與文章</p>
        </div>
        {saved && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            ✓ 更改已保存成功！
          </div>
        )}
        <div className="space-y-6">
          {articles.map((article, index) => (
            <div key={article.id} className="bg-white rounded-lg shadow-md p-6">
              {editingIndex === index ? (
                <>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-800">編輯文章</h3>
                    <button
                      onClick={() => handleRemoveArticle(index)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">標題</label>
                        <input
                          type="text"
                          value={article.title}
                          onChange={(e) => handleArticleChange(index, 'title', e.target.value)}
                          className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">日期</label>
                        <input
                          type="date"
                          value={article.date}
                          onChange={(e) => handleArticleChange(index, 'date', e.target.value)}
                          className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">類型</label>
                        <select
                          value={article.type}
                          onChange={(e) => handleArticleChange(index, 'type', e.target.value)}
                          className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                        >
                          <option value="company">公司新聞</option>
                          <option value="industry">行業新聞</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">分類標籤</label>
                        <input
                          type="text"
                          value={article.category}
                          onChange={(e) => handleArticleChange(index, 'category', e.target.value)}
                          className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                          placeholder="如：公司動態、市場趨勢"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">摘要</label>
                      <textarea
                        value={article.summary}
                        onChange={(e) => handleArticleChange(index, 'summary', e.target.value)}
                        className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none resize-none"
                        rows={3}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">內容</label>
                      <textarea
                        value={article.content}
                        onChange={(e) => handleArticleChange(index, 'content', e.target.value)}
                        className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none resize-none"
                        rows={8}
                      />
                    </div>
                    <button
                      onClick={() => setEditingIndex(null)}
                      className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg cursor-pointer"
                    >
                      收起
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-800">{article.title || '未命名文章'}</h3>
                        <span className={`px-2 py-1 rounded text-xs ${
                          article.type === 'company' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                        }`}>
                          {article.type === 'company' ? '公司新聞' : '行業新聞'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{article.date} | {article.category || '未分類'}</p>
                      <p className="text-gray-700 mt-2">{article.summary}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setEditingIndex(index)}
                        className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                      >
                        <Edit className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleRemoveArticle(index)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        <button
          onClick={handleAddArticle}
          className="mt-6 flex items-center gap-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors cursor-pointer"
        >
          <Plus className="h-5 w-5" />
          <span>新增新聞文章</span>
        </button>
      </div>
    </div>
  );
}
export default EditNews;