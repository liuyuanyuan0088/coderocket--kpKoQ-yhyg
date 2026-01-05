import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContent } from '../../contexts/ContentContext';
import { ArrowLeft, Plus, Trash2, Save, Upload, User } from 'lucide-react';
function EditTeam() {
  const navigate = useNavigate();
  const { teamMembers, updateTeamMembers } = useContent();
  const [members, setMembers] = useState(teamMembers);
  const [saved, setSaved] = useState(false);
  const handleAddMember = () => {
    setMembers([...members, {
      name: '',
      nameEn: '',
      position: '',
      positionEn: '',
      background: '',
      focus: '',
      belief: '',
      avatar: ''
    }]);
  };
  const handleRemoveMember = (index: number) => {
    setMembers(members.filter((_, i) => i !== index));
  };
  const handleMemberChange = (index: number, field: string, value: string) => {
    const newMembers = [...members];
    newMembers[index] = { ...newMembers[index], [field]: value };
    setMembers(newMembers);
  };
  const handleSave = () => {
    updateTeamMembers(members);
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
          <h1 className="text-4xl font-bold text-gray-800 mb-2">團隊管理</h1>
          <p className="text-gray-600">編輯團隊成員資訊和頭像</p>
        </div>
        {saved && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            ✓ 更改已保存成功！
          </div>
        )}
        <div className="space-y-6">
          {members.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">團隊成員 #{index + 1}</h3>
                <button
                  onClick={() => handleRemoveMember(index)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6">
                  <label className="block text-gray-700 font-medium mb-2">頭像圖片</label>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {member.avatar ? (
                        <img
                          src={member.avatar}
                          alt="頭像預覽"
                          className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
                        />
                      ) : (
                        <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center border-4 border-gray-300">
                          <User className="h-16 w-16 text-gray-400" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        value={member.avatar || ''}
                        onChange={(e) => handleMemberChange(index, 'avatar', e.target.value)}
                        className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none mb-2"
                        placeholder="輸入圖片URL (例如: https://example.com/avatar.jpg)"
                      />
                      <p className="text-sm text-gray-500 mb-3">
                        建議尺寸：256x256px 或更大，正方形圖片效果最佳
                      </p>
                      <button className="flex items-center gap-2 px-4 py-2 bg-[#10B981] hover:bg-[#059669] text-white rounded-lg transition-colors cursor-pointer">
                        <Upload className="h-4 w-4" />
                        <span>上傳頭像圖片</span>
                      </button>
                      <p className="text-xs text-gray-400 mt-2">
                        支持 JPG, PNG, GIF 格式
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">姓名（中文）</label>
                    <input
                      type="text"
                      value={member.name}
                      onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">姓名（英文）</label>
                    <input
                      type="text"
                      value={member.nameEn}
                      onChange={(e) => handleMemberChange(index, 'nameEn', e.target.value)}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">職位（中文）</label>
                    <input
                      type="text"
                      value={member.position}
                      onChange={(e) => handleMemberChange(index, 'position', e.target.value)}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">職位（英文）</label>
                    <input
                      type="text"
                      value={member.positionEn}
                      onChange={(e) => handleMemberChange(index, 'positionEn', e.target.value)}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">背景介紹</label>
                  <textarea
                    value={member.background}
                    onChange={(e) => handleMemberChange(index, 'background', e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none resize-none"
                    rows={4}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">專業領域</label>
                  <input
                    type="text"
                    value={member.focus}
                    onChange={(e) => handleMemberChange(index, 'focus', e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none"
                    placeholder="用｜分隔多個領域"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">信念</label>
                  <textarea
                    value={member.belief}
                    onChange={(e) => handleMemberChange(index, 'belief', e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none resize-none"
                    rows={2}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handleAddMember}
          className="mt-6 flex items-center gap-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors cursor-pointer"
        >
          <Plus className="h-5 w-5" />
          <span>新增團隊成員</span>
        </button>
      </div>
    </div>
  );
}
export default EditTeam;