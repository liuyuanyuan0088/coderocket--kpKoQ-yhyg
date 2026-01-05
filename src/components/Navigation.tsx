import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent } from '../contexts/ContentContext';
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { siteSettings } = useContent();
  const navItems = [
    { label: '网站首页', href: '/' },
    { label: '公司文化', href: '/company-culture' },
    { label: '关于我们', href: '/about' },
    { label: '服务解决', href: '/services' },
    { 
      label: '新闻中心', 
      href: '/news',
      submenu: [
        { label: '公司新闻', href: '/news/company' },
        { label: '行业新闻', href: '/news/industry' },
        { label: '常见问题', href: '/news/faq' }
      ]
    },
    { label: '联系我们', href: '/contact' },
    { label: 'App下载', href: '/app-download' }
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="mx-auto px-4 max-w-[1200px]">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <img
              src={siteSettings.logoUrl}
              alt={siteSettings.companyName}
              className="h-16"
            />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  to={item.href}
                  className="text-[#333333] hover:text-[#10B981] transition-colors text-sm font-medium cursor-pointer"
                >
                  {item.label}
                </Link>
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.submenu.map((subitem, subindex) => (
                      <Link
                        key={subindex}
                        to={subitem.href}
                        className="block px-6 py-2 text-[#333333] hover:bg-[#ECF0F6] hover:text-[#10B981] transition-colors text-sm cursor-pointer whitespace-nowrap"
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 cursor-pointer"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item, index) => (
              <div key={index}>
                <Link
                  to={item.href}
                  className="block py-3 text-[#333333] hover:text-[#10B981] transition-colors cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
                {item.submenu && (
                  <div className="pl-4">
                    {item.submenu.map((subitem, subindex) => (
                      <Link
                        key={subindex}
                        to={subitem.href}
                        className="block py-2 text-sm text-[#666666] hover:text-[#10B981] transition-colors cursor-pointer"
                        onClick={() => setIsOpen(false)}
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
export default Navigation;