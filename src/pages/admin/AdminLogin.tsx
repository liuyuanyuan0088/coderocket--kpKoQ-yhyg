import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Lock, Shield } from 'lucide-react';
function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      navigate('/admin');
    } else {
      setError('密碼錯誤，請重試');
      setPassword('');
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#10B981] via-[#059669] to-[#047857] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGgxMnYxMkg0NnYxMkg0NHYxMkg0MnYxMkg0MHYxMkg0NHYxMkg0NnYxMkg0OHYxMkg1MHYxMkg0OHYxMkg0NnYxMkg0NHYxMkg0MnYxMkg0MHYxMkg0NHYxMkg0NnYxMkg0OHYxMkg1MHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative z-10">
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-br from-[#10B981] to-[#059669] rounded-full p-4 shadow-lg">
            <Shield className="h-12 w-12 text-white" />
          </div>
        </div>
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            內容管理系統
          </h1>
          <p className="text-gray-600">
            Content Management System
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
            <Lock className="h-4 w-4" />
            <span>安全登入</span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              管理員密碼
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none transition-colors text-lg"
              placeholder="請輸入管理員密碼"
              required
            />
          </div>
          {error && (
            <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
              <div className="flex items-center gap-2">
                <span className="text-xl">⚠️</span>
                <span>{error}</span>
              </div>
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#10B981] to-[#059669] hover:from-[#059669] hover:to-[#047857] text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-xl cursor-pointer text-lg"
          >
            登入控制台
          </button>
        </form>
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-sm text-blue-800">
              <strong>控制台入口：</strong><br />
              直接訪問 <code className="bg-white px-2 py-1 rounded">/admin/login</code>
            </p>
            <p className="text-xs text-blue-600 mt-2">
              默認密碼: <code className="bg-white px-2 py-1 rounded">admin123</code>
            </p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <a
            href="/"
            className="text-[#10B981] hover:text-[#059669] transition-colors cursor-pointer text-sm font-medium"
          >
            ← 返回網站首頁
          </a>
        </div>
      </div>
    </div>
  );
}
export default AdminLogin;