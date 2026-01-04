import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContent } from '../../contexts/ContentContext';
import { ArrowLeft, Plus, Trash2, Save } from 'lucide-react';
function EditServices() {
  const navigate = useNavigate();
  const { services, updateServices } = useContent();
  const [servicesList, setServicesList] = useState(services);
  const [saved, setSaved] = useState(false);
  const handleAddService = () => {
    setServicesList([...servicesList, {
      title: '',
      subtitle: '',
      description: '',
      icon: '📊',
      services: [''],
      value: [''],
      note: ''
    }]);
  };
  const handleRemoveService = (index: number) => {
    setServicesList(servicesList.filter((_, i) => i !== index));
  };
  const handleServiceChange = (index: number, field: string, value: string | string[]) => {
    const newServices = [...servicesList];
    newServices[index] = { ...newServices[index], [field]: value };
    setServicesList(newServices);
  };
  const handleAddServiceItem = (serviceIndex: number, type: 'services' | 'value') => {
    const newServices = [...servicesList];
    newServices[serviceIndex][type].push('');
    setServicesList(newServices);
  };
  const handleRemoveServiceItem = (serviceIndex: number, itemIndex: number, type: 'services' | 'value') => {
    const newServices = [...servicesList];
    newServices[serviceIndex][type] = newServices[serviceIndex][type].filter((_, i) => i !== itemIndex);
    setServicesList(newServices);
  };
  const handleServiceItemChange = (serviceIndex: number, itemIndex: number, value: string, type: 'services' | 'value') => {
    const newServices = [...servicesList];
    newServices[serviceIndex][type][itemIndex] = value;
    setServicesList(newServices);
  };
  const handleSave = () => {
    updateServices(servicesList);
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
          <h1 className="text-4xl font-bold text-gray-800 mb-2">服務管理</h1>
          <p className="text-gray-600">編輯服務與解決方案</p>
        </div>
        {saved && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            ✓ 更改已保存成功！
          </div>
        )}
        <div className="space-y-6">
          {servicesList.map((service, serviceIndex) => (
            <div key={serviceIndex} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">服務項目 #{serviceIndex + 1}</h3>
                <button
                  onClick={() => handleRemoveService(serviceIndex)}
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
                      value={service.title}
                      onChange={(e) => handleServiceChange(serviceIndex, 'title', e.target.value)}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">英文副標題</label>
                    <input
                      type="text"
                      value={service.subtitle}
                      onChange={(e) => handleServiceChange(serviceIndex, 'subtitle', e.target.value)}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">描述</label>
                  <textarea
                    value={service.description}
                    onChange={(e) => handleServiceChange(serviceIndex, 'description', e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none resize-none"
                    rows={3}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">圖標（Emoji）</label>
                  <input
                    type="text"
                    value={service.icon}
                    onChange={(e) => handleServiceChange(serviceIndex, 'icon', e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                    placeholder="📊"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">備註（可選）</label>
                  <input
                    type="text"
                    value={service.note || ''}
                    onChange={(e) => handleServiceChange(serviceIndex, 'note', e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-gray-700 font-medium">服務內容</label>
                    <button
                      onClick={() => handleAddServiceItem(serviceIndex, 'services')}
                      className="text-sm px-3 py-1 bg-[#10B981] text-white rounded hover:bg-[#059669] cursor-pointer"
                    >
                      + 添加項目
                    </button>
                  </div>
                  {service.services.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => handleServiceItemChange(serviceIndex, itemIndex, e.target.value, 'services')}
                        className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                        placeholder="服務內容項目"
                      />
                      <button
                        onClick={() => handleRemoveServiceItem(serviceIndex, itemIndex, 'services')}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg cursor-pointer"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-gray-700 font-medium">客戶價值</label>
                    <button
                      onClick={() => handleAddServiceItem(serviceIndex, 'value')}
                      className="text-sm px-3 py-1 bg-[#10B981] text-white rounded hover:bg-[#059669] cursor-pointer"
                    >
                      + 添加項目
                    </button>
                  </div>
                  {service.value.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => handleServiceItemChange(serviceIndex, itemIndex, e.target.value, 'value')}
                        className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                        placeholder="客戶價值項目"
                      />
                      <button
                        onClick={() => handleRemoveServiceItem(serviceIndex, itemIndex, 'value')}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg cursor-pointer"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handleAddService}
          className="mt-6 flex items-center gap-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors cursor-pointer"
        >
          <Plus className="h-5 w-5" />
          <span>新增服務項目</span>
        </button>
      </div>
    </div>
  );
}
export default EditServices;