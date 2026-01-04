import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Lock } from 'lucide-react';
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
      setError('密碼錯誤');
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <div className="flex justify-center mb-6">
          <div className="bg-[#10B981] rounded-full p-4">
            <Lock className="h-8 w-8 text-white" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-center text-[#10B981] mb-2">
          管理員登入
        </h1>
        <p className="text-center text-gray-600 mb-8">
          請輸入管理員密碼以繼續
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              密碼
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#10B981] outline-none transition-colors"
              placeholder="請輸入密碼"
              required
            />
          </div>
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-[#10B981] hover:bg-[#059669] text-white font-bold py-3 rounded-lg transition-colors cursor-pointer"
          >
            登入
          </button>
        </form>
        <div className="mt-6 text-center">
          <a
            href="/"
            className="text-[#10B981] hover:text-[#059669] transition-colors cursor-pointer"
          >
            返回網站首頁
          </a>
        </div>
        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-600 text-center">
            默認密碼: <code className="bg-white px-2 py-1 rounded">admin123</code>
          </p>
        </div>
      </div>
    </div>
  );
}
export default AdminLogin;