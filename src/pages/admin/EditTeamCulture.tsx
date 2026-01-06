import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
interface TeamMember {
  name: string;
  position: string;
  description: string;
}
interface Milestone {
  year: string;
  description: string;
}
export default function EditTeamCulture() {
  const [content, setContent] = useState({
    title: '關於我們',
    subtitle: '專注於東盟地區新能源資產投資管理',
    introTitle: '公司簡介',
    introContent: '東盟新能資產管理有限公司是一家專注於東盟地區新能源領域投資管理的專業機構。',
    stat1Value: '10+',
    stat1Label: '專業投資經理',
    stat2Value: '20+',
    stat2Label: '投資項目',
    stat3Value: '500M+',
    stat3Label: '管理資產規模（美元）',
    teamTitle: '管理團隊',
    teamMembers: [
      {
        name: '張明',
        position: '首席執行官',
        description: '20年投資管理經驗'
      }
    ] as TeamMember[],
    historyTitle: '發展歷程',
    milestones: [
      { year: '2020年', description: '公司成立' }
    ] as Milestone[]
  });
  useEffect(() => {
    const saved = localStorage.getItem('aboutContent');
    if (saved) {
      try {
        setContent(JSON.parse(saved));
      } catch (error) {
        console.error('Failed to load about content:', error);
      }
    }
  }, []);
  const handleSave = () => {
    localStorage.setItem('aboutContent', JSON.stringify(content));
    alert('團隊文化內容已保存！');
  };
  const updateTeamMember = (index: number, field: keyof TeamMember, value: string) => {
    const newMembers = [...content.teamMembers];
    newMembers[index] = { ...newMembers[index], [field]: value };
    setContent({ ...content, teamMembers: newMembers });
  };
  const updateMilestone = (index: number, field: keyof Milestone, value: string) => {
    const newMilestones = [...content.milestones];
    newMilestones[index] = { ...newMilestones[index], [field]: value };
    setContent({ ...content, milestones: newMilestones });
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
          <h1 className="text-3xl font-bold mb-6">團隊文化管理</h1>
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
              <h3 className="text-lg font-bold mb-4">公司簡介</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">標題</label>
                  <input
                    type="text"
                    value={content.introTitle}
                    onChange={(e) => setContent({ ...content, introTitle: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">內容</label>
                  <textarea
                    value={content.introContent}
                    onChange={(e) => setContent({ ...content, introContent: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg"
                    rows={6}
                  />
                </div>
              </div>
            </div>
            <div className="border-t pt-6">
              <h3 className="text-lg font-bold mb-4">統計數據</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">數值1</label>
                  <input
                    type="text"
                    value={content.stat1Value}
                    onChange={(e) => setContent({ ...content, stat1Value: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                  <label className="block text-xs text-gray-600 mb-1 mt-2">標籤1</label>
                  <input
                    type="text"
                    value={content.stat1Label}
                    onChange={(e) => setContent({ ...content, stat1Label: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">數值2</label>
                  <input
                    type="text"
                    value={content.stat2Value}
                    onChange={(e) => setContent({ ...content, stat2Value: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                  <label className="block text-xs text-gray-600 mb-1 mt-2">標籤2</label>
                  <input
                    type="text"
                    value={content.stat2Label}
                    onChange={(e) => setContent({ ...content, stat2Label: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">數值3</label>
                  <input
                    type="text"
                    value={content.stat3Value}
                    onChange={(e) => setContent({ ...content, stat3Value: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                  <label className="block text-xs text-gray-600 mb-1 mt-2">標籤3</label>
                  <input
                    type="text"
                    value={content.stat3Label}
                    onChange={(e) => setContent({ ...content, stat3Label: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="border-t pt-6">
              <h3 className="text-lg font-bold mb-4">管理團隊</h3>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">區塊標題</label>
                <input
                  type="text"
                  value={content.teamTitle}
                  onChange={(e) => setContent({ ...content, teamTitle: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              {content.teamMembers.map((member, index) => (
                <div key={index} className="border-b pb-4 mb-4">
                  <h4 className="font-bold mb-2">團隊成員 {index + 1}</h4>
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="姓名"
                      value={member.name}
                      onChange={(e) => updateTeamMember(index, 'name', e.target.value)}
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                    <input
                      type="text"
                      placeholder="職位"
                      value={member.position}
                      onChange={(e) => updateTeamMember(index, 'position', e.target.value)}
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                    <input
                      type="text"
                      placeholder="描述"
                      value={member.description}
                      onChange={(e) => updateTeamMember(index, 'description', e.target.value)}
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t pt-6">
              <h3 className="text-lg font-bold mb-4">發展歷程</h3>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">區塊標題</label>
                <input
                  type="text"
                  value={content.historyTitle}
                  onChange={(e) => setContent({ ...content, historyTitle: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              {content.milestones.map((milestone, index) => (
                <div key={index} className="border-b pb-4 mb-4">
                  <h4 className="font-bold mb-2">里程碑 {index + 1}</h4>
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="年份"
                      value={milestone.year}
                      onChange={(e) => updateMilestone(index, 'year', e.target.value)}
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                    <input
                      type="text"
                      placeholder="描述"
                      value={milestone.description}
                      onChange={(e) => updateMilestone(index, 'description', e.target.value)}
                      className="w-full px-3 py-2 border rounded-lg"
                    />
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