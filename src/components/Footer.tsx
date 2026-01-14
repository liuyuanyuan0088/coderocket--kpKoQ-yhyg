import { Link } from 'react-router-dom';
import { useContent } from '../contexts/ContentContext';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
function Footer() {
  const { siteSettings } = useContent();
  return (
    <footer className="bg-[#1F2937] text-white py-12" id="contact">
      <div className="mx-auto px-4 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-[#10B981]">●</span> 快速鏈接
            </h3>
            <div className="space-y-2">
              <Link 
                to="/company-culture" 
                className="block text-gray-300 hover:text-[#10B981] transition-colors cursor-pointer"
              >
                → 公司文化
              </Link>
              <Link 
                to="/about" 
                className="block text-gray-300 hover:text-[#10B981] transition-colors cursor-pointer"
              >
                → {siteSettings.teamTitle}
              </Link>
              <Link 
                to="/services" 
                className="block text-gray-300 hover:text-[#10B981] transition-colors cursor-pointer"
              >
                → 服務與解決方案
              </Link>
              <Link 
                to="/news" 
                className="block text-gray-300 hover:text-[#10B981] transition-colors cursor-pointer"
              >
                → 新聞中心
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-[#10B981]">●</span> 聯繫我們
            </h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                <p>{siteSettings.contactAddress}</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-[#10B981] flex-shrink-0" />
                <a 
                  href={`mailto:${siteSettings.contactEmail}`}
                  className="hover:text-[#10B981] transition-colors"
                >
                  {siteSettings.contactEmail}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-[#10B981] flex-shrink-0" />
                <a 
                  href={`tel:${siteSettings.contactPhone}`}
                  className="hover:text-[#10B981] transition-colors"
                >
                  {siteSettings.contactPhone}
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-[#10B981]">●</span> 工作時間
            </h3>
            <div className="flex items-center gap-2 text-gray-300 mb-6">
              <Clock className="h-5 w-5 text-[#10B981] flex-shrink-0" />
              <span>{siteSettings.workingHours}</span>
            </div>
            <div className="bg-[#374151] rounded-lg p-4">
              <h4 className="font-bold mb-2">在線客服</h4>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#10B981] rounded-full flex items-center justify-center">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-300">隨時為您服務</p>
                  <p className="text-xs text-gray-400">{siteSettings.workingHours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © 2024 {siteSettings.footerText}. All Rights Reserved.
            </p>
            <p className="text-xs text-gray-500 text-center md:text-right">
              {siteSettings.footerCopyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;