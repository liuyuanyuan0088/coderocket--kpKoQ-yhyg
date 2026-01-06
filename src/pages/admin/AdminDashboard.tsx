import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
export default function AdminDashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };
  const menuItems = [
    {
      title: '網站基本設置',
      description: '編輯網站名稱、標語、聯繫方式等基本信息',
      icon: '⚙️',
      link: '/admin/settings',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: '首頁內容管理',
      description: '編輯首頁的標題、描述和主要內容',
      icon: '🏠',
      link: '/admin/home',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: '輪播圖管理',
      description: '管理首頁的輪播圖片和標題',
      icon: '🖼️',
      link: '/admin/hero',
      color: 'from-pink-500 to-pink-600'
    },
    {
      title: '頁腳管理',
      description: '編輯頁腳的聯繫信息和鏈接',
      icon: '📍',
      link: '/admin/footer',
      color: 'from-gray-500 to-gray-600'
    },
    {
      title: '關於卡片管理',
      description: '編輯首頁的關於我們卡片',
      icon: '📋',
      link: '/admin/about-cards',
      color: 'from-green-500 to-green-600'
    },
    {
      title: '公司文化管理',
      description: '編輯公司文化頁面內容',
      icon: '🎨',
      link: '/admin/culture',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      title: '核心價值觀管理',
      description: '編輯核心價值觀內容',
      icon: '💎',
      link: '/admin/values',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      title: '服務管理',
      description: '管理服務項目和描述',
      icon: '🛠️',
      link: '/admin/services',
      color: 'from-red-500 to-red-600'
    },
    {
      title: '團隊管理',
      description: '管理團隊成員信息',
      icon: '👥',
      link: '/admin/team',
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: '團隊文化管理',
      description: '編輯團隊文化頁面內容',
      icon: '🌟',
      link: '/admin/team-culture',
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: '新聞管理',
      description: '管理公司新聞和行業新聞',
      icon: '📰',
      link: '/admin/news',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      title: 'FAQ管理',
      description: '管理常見問題',
      icon: '❓',
      link: '/admin/faq',
      color: 'from-violet-500 to-violet-600'
    },
    {
      title: 'App下載頁面管理',
      description: '編輯App下載頁面內容',
      icon: '📱',
      link: '/admin/app-download',
      color: 'from-lime-500 to-lime-600'
    },
    {
      title: '聯繫我們頁面管理',
      description: '編輯聯繫頁面的所有文字內容',
      icon: '📧',
      link: '/admin/contact',
      color: 'from-emerald-500 to-emerald-600'
    }
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 頂部導航欄 */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="mx-auto px-6 py-4 max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-2">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">內容管理系統</h1>
                <p className="text-sm text-gray-500">東盟新能資產管理有限公司</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                返回網站
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors cursor-pointer flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                登出
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 主要內容區域 */}
      <div className="mx-auto px-6 py-8 max-w-7xl">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">管理面板</h2>
          <p className="text-gray-600">選擇要編輯的內容模塊</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{item.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
                  <span>編輯內容</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* 快捷操作提示 */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="bg-blue-600 rounded-full p-2">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">使用提示</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 點擊任意卡片進入編輯頁面</li>
                <li>• 所有更改會立即保存到本地存儲</li>
                <li>• 編輯完成後可以直接在前台查看效果</li>
                <li>• 記得定期備份重要內容</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}