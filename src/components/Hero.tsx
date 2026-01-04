import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: 'https://hklingrui.com/static/upload/image/20251024/1761314468397066.jpg',
      title: '專業資產管理',
      subtitle: '以創新思維打造穩健投資組合'
    },
    {
      image: 'https://hklingrui.com/static/upload/image/20251024/1761314481945270.jpg',
      title: '新能源投資領先者',
      subtitle: '把握綠色經濟發展機遇'
    },
    {
      image: 'https://hklingrui.com/static/upload/image/20251024/1761318501603440.jpg',
      title: '東盟市場專家',
      subtitle: '深耕區域市場，創造長期價值'
    }
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  return (
    <div className="relative h-[600px] overflow-hidden mt-20">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                <p className="text-xl md:text-2xl">{slide.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-3 transition-all cursor-pointer"
      >
        <ChevronLeft className="h-6 w-6 text-[#34478F]" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-3 transition-all cursor-pointer"
      >
        <ChevronRight className="h-6 w-6 text-[#34478F]" />
      </button>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-12 h-1 rounded-full transition-all cursor-pointer ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
export default Hero;