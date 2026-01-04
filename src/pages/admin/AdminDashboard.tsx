import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { 
  Image, 
  Briefcase, 
  Users, 
  Newspaper, 
  Settings,
  LogOut,
  Home
} from 'lucide-react';
function AdminDashboard() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };
  const menuItems = [
    {
      title: '輪播圖管理',
      description: '編輯首頁輪播圖內容',
      icon: Image,
      path: '/admin/edit-hero',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: '服務管理',
      description: '編輯服務與解決方案',
      icon: Briefcase,
      path: '/admin/edit-services',
      color: 'from-green-500 to-green-600'
    },
    {
      title: '團隊管理',
      description: '編輯團隊成員資訊',
      icon: Users,
      path: '/admin/edit-team',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: '新聞管理',
      description: '管理新聞與文章',
      icon: Newspaper,
      path: '/admin/edit-news',
      color: 'from-orange-500 to-orange-600'
    }
  ];
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow-md">
        <div className="mx-auto px-4 max-w-[1200px] py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="https://jojdwiugelqhcajbccxn.supabase.co/storage/v1/object/public/images/1767523138256-aee6773b-c9d1-411a-8a9c-e6ccb7969649-0.png"
                alt="Logo"
                className="h-12"
              />
              <span className="text-xl font-bold text-[#10B981]">管理後台</span>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-[#10B981] transition-colors cursor-pointer"
              >
                <Home className="h-5 w-5" />
                <span>返回網站</span>
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors cursor-pointer"
              >
                <LogOut className="h-5 w-5" />
                <span>登出</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto px-4 max-w-[1200px] py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">管理控制台</h1>
          <p className="text-gray-600">管理網站內容和設置</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                onClick={() => navigate(item.path)}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all cursor-pointer text-left"
              >
                <div className={`bg-gradient-to-r ${item.color} rounded-lg p-4 mb-4 inline-block`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </button>
            );
          })}
        </div>
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">快速操作</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border-2 border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-gray-800 mb-2">數據統計</h3>
              <p className="text-3xl font-bold text-[#10B981]">4</p>
              <p className="text-sm text-gray-600">輪播圖數量</p>
            </div>
            <div className="border-2 border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-gray-800 mb-2">服務項目</h3>
              <p className="text-3xl font-bold text-[#10B981]">6</p>
              <p className="text-sm text-gray-600">服務數量</p>
            </div>
            <div className="border-2 border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-gray-800 mb-2">團隊成員</h3>
              <p className="text-3xl font-bold text-[#10B981]">3</p>
              <p className="text-sm text-gray-600">成員數量</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminDashboard;