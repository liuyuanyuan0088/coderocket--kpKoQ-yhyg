import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContent } from '../../contexts/ContentContext';
import { ArrowLeft, Save } from 'lucide-react';
function EditContact() {
  const navigate = useNavigate();
  const { contactPageContent, updateContactPageContent } = useContent();
  const [content, setContent] = useState(contactPageContent);
  const [saved, setSaved] = useState(false);
  const handleChange = (field: string, value: string) => {
    setContent({ ...content, [field]: value });
  };
  const handleSave = () => {
    updateContactPageContent(content);
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
          <h1 className="text-4xl font-bold text-gray-800 mb-2">聯繫我們頁面管理</h1>
          <p className="text-gray-600">編輯聯繫頁面的所有文字內容</p>
        </div>
        {saved && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            ✓ 更改已保存成功！
          </div>
        )}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">頁面標題</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">主標題</label>
                <input
                  type="text"
                  value={content.pageTitle}
                  onChange={(e) => handleChange('pageTitle', e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">副標題</label>
                <input
                  type="text"
                  value={content.pageSubtitle}
                  onChange={(e) => handleChange('pageSubtitle', e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">聯繫信息</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">板塊標題</label>
                <input
                  type="text"
                  value={content.contactMethodsTitle}
                  onChange={(e) => handleChange('contactMethodsTitle', e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">地址標題</label>
                  <input
                    type="text"
                    value={content.addressTitle}
                    onChange={(e) => handleChange('addressTitle', e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">地址內容</label>
                  <input
                    type="text"
                    value={content.address}
                    onChange={(e) => handleChange('address', e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">郵箱標題</label>
                  <input
                    type="text"
                    value={content.emailTitle}
                    onChange={(e) => handleChange('emailTitle', e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">郵箱地址</label>
                  <input
                    type="email"
                    value={content.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">電話標題</label>
                  <input
                    type="text"
                    value={content.phoneTitle}
                    onChange={(e) => handleChange('phoneTitle', e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">電話號碼</label>
                  <input
                    type="tel"
                    value={content.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">工作時間標題</label>
                  <input
                    type="text"
                    value={content.hoursTitle}
                    onChange={(e) => handleChange('hoursTitle', e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">工作時間</label>
                  <input
                    type="text"
                    value={content.hours}
                    onChange={(e) => handleChange('hours', e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">表單文字</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">表單標題</label>
                <input
                  type="text"
                  value={content.formTitle}
                  onChange={(e) => handleChange('formTitle', e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">姓名標籤</label>
                  <input
                    type="text"
                    value={content.nameLabel}
                    onChange={(e) => handleChange('nameLabel', e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">郵箱標籤</label>
                  <input
                    type="text"
                    value={content.emailLabel}
                    onChange={(e) => handleChange('emailLabel', e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">電話標籤</label>
                  <input
                    type="text"
                    value={content.phoneLabel}
                    onChange={(e) => handleChange('phoneLabel', e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">消息標籤</label>
                  <input
                    type="text"
                    value={content.messageLabel}
                    onChange={(e) => handleChange('messageLabel', e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">提交按鈕文字</label>
                <input
                  type="text"
                  value={content.submitButton}
                  onChange={(e) => handleChange('submitButton', e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditContact;