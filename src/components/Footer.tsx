import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer className="bg-[#424040] text-white py-12" id="contact">
      <div className="mx-auto px-4 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">快速鏈接</h3>
            <div className="space-y-2">
              <Link to="/company-culture" className="block text-[#DEE1ED] hover:text-white transition-colors cursor-pointer">
                公司文化
              </Link>
              <Link to="/about" className="block text-[#DEE1ED] hover:text-white transition-colors cursor-pointer">
                凌瑞團隊
              </Link>
              <Link to="/services" className="block text-[#DEE1ED] hover:text-white transition-colors cursor-pointer">
                核心價值
              </Link>
              <Link to="/news" className="block text-[#DEE1ED] hover:text-white transition-colors cursor-pointer">
                新聞中心
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">聯繫我們</h3>
            <div className="space-y-2 text-[#DEE1ED]">
              <p>地址：香港銅鑼灣希慎道33號</p>
              <p>聯繫方式：team@hklingrui.com</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">在線客服</h3>
            <div className="flex items-center gap-3">
              <img
                src="https://hklingrui.com/pc/images/qq.png"
                alt="客服"
                className="h-8 w-8"
              />
              <span className="text-[#DEE1ED]">客服</span>
            </div>
            <div className="mt-4">
              <p className="text-sm text-[#DEE1ED] mb-1">上班時間</p>
              <p className="text-sm text-[#DEE1ED]">周一到周五</p>
            </div>
          </div>
        </div>
        <div className="border-t border-[#DEE1ED] border-opacity-20 pt-6 text-center">
          <p className="text-sm text-[#DEE1ED]">
            東盟新能資產管理有限公司 ©All Rights reserved
          </p>
          <p className="text-xs text-[#DEE1ED] mt-2">
            未經許可不得複製、轉載或摘編，違者必究！
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;