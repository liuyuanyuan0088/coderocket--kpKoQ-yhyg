import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
function News() {
  const newsCategories = [
    {
      title: '公司新聞',
      description: '了解公司最新動態和重要公告',
      link: '/news/company',
      icon: '📢'
    },
    {
      title: '行業新聞',
      description: '掌握新能源行業最新資訊',
      link: '/news/industry',
      icon: '📰'
    },
    {
      title: '常見問題',
      description: '查看常見問題解答',
      link: '/news/faq',
      icon: '❓'
    }
  ];
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-[#34478F] mb-6">新聞中心</h1>
            <p className="text-xl text-[#5A5A5A]">了解最新資訊和動態</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsCategories.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="bg-white border-2 border-[#ECF0F6] rounded-lg p-8 hover:shadow-lg hover:border-[#34478F] transition-all cursor-pointer"
              >
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold text-[#34478F] mb-4">{category.title}</h3>
                <p className="text-[#666666]">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default News;