import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useContent } from '../../contexts/ContentContext';
import { 
  Image, 
  Briefcase, 
  Users, 
  Newspaper, 
  Settings,
  LogOut,
  Home,
  MessageSquare,
  Award,
  Building2,
  FileText,
  Palette
} from 'lucide-react';
function AdminDashboard() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { heroSlides, aboutCards, services, teamMembers, newsArticles, faqItems, coreValues } = useContent();
  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };
  const menuItems = [
    {
      title: '網站設置',
      description: '公司信息、Logo、聯繫方式',
      icon: Settings,
      path: '/admin/edit-settings',
      color: 'from-gray-500 to-gray-600'
    },
    {
      title: '首頁文案',
      description: '首頁標題、描述文字',
      icon: FileText,
      path: '/admin/edit-homepage',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: '輪播圖管理',
      description: '首頁輪播圖片和文字',
      icon: Image,
      path: '/admin/edit-hero',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: '關於卡片',
      description: '首頁三個關於卡片',
      icon: Palette,
      path: '/admin/edit-about-cards',
      color: 'from-pink-500 to-pink-600'
    },
    {
      title: '公司文化',
      description: '使命、願景內容',
      icon: Building2,
      path: '/admin/edit-culture',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      title: '核心價值觀',
      description: '五大核心價值',
      icon: Award,
      path: '/admin/edit-values',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      title: '服務管理',
      description: '服務項目內容',
      icon: Briefcase,
      path: '/admin/edit-services',
      color: 'from-green-500 to-green-600'
    },
    {
      title: '團隊管理',
      description: '團隊成員資訊',
      icon: Users,
      path: '/admin/edit-team',
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: '團隊文化',
      description: '團隊文化內容',
      icon: Users,
      path: '/admin/edit-team-culture',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      title: '新聞管理',
      description: '新聞文章內容',
      icon: Newspaper,
      path: '/admin/edit-news',
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'FAQ管理',
      description: '常見問題內容',
      icon: MessageSquare,
      path: '/admin/edit-faq',
      color: 'from-red-500 to-red-600'
    }
  ];
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow-md">
        <div className="mx-auto px-4 max-w-[1400px] py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="https://jojdwiugelqhcajbccxn.supabase.co/storage/v1/object/public/images/1767523138256-aee6773b-c9d1-411a-8a9c-e6ccb7969649-0.png"
                alt="Logo"
                className="h-12"
              />
              <span className="text-xl font-bold text-[#10B981]">內容管理系統</span>
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
      <div className="mx-auto px-4 max-w-[1400px] py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">內容管理控制台</h1>
          <p className="text-gray-600">管理網站所有文字、圖片和內容</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
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
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">內容統計</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            <div className="border-2 border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-gray-800 mb-2 text-sm">輪播圖</h3>
              <p className="text-3xl font-bold text-[#10B981]">{heroSlides.length}</p>
            </div>
            <div className="border-2 border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-gray-800 mb-2 text-sm">關於卡片</h3>
              <p className="text-3xl font-bold text-[#10B981]">{aboutCards.length}</p>
            </div>
            <div className="border-2 border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-gray-800 mb-2 text-sm">核心價值</h3>
              <p className="text-3xl font-bold text-[#10B981]">{coreValues.length}</p>
            </div>
            <div className="border-2 border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-gray-800 mb-2 text-sm">服務項目</h3>
              <p className="text-3xl font-bold text-[#10B981]">{services.length}</p>
            </div>
            <div className="border-2 border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-gray-800 mb-2 text-sm">團隊成員</h3>
              <p className="text-3xl font-bold text-[#10B981]">{teamMembers.length}</p>
            </div>
            <div className="border-2 border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-gray-800 mb-2 text-sm">新聞文章</h3>
              <p className="text-3xl font-bold text-[#10B981]">{newsArticles.length}</p>
            </div>
            <div className="border-2 border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-gray-800 mb-2 text-sm">FAQ條目</h3>
              <p className="text-3xl font-bold text-[#10B981]">{faqItems.length}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminDashboard;