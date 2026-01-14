import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';
function Hero() {
  const { heroSlides } = useContent();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});
  // 确保至少有默认轮播图
  const slides = heroSlides && heroSlides.length > 0 ? heroSlides : [
    {
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop',
      title: '綠色能源 · 美好未來',
      subtitle: '投資可持續發展，共創綠色未來'
    },
    {
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop',
      title: '太陽能領域的領導者',
      subtitle: '專注東盟地區清潔能源投資'
    },
    {
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop',
      title: '風能 · 無限可能',
      subtitle: '把握可再生能源發展機遇'
    }
  ];
  useEffect(() => {
    if (slides.length === 0) return;
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
  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };
  if (slides.length === 0) {
    return (
      <div className="relative h-[600px] overflow-hidden mt-20 bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">歡迎來到東盟新能資產管理</h1>
          <p className="text-xl md:text-2xl">專注於新能源領域的專業投資管理</p>
        </div>
      </div>
    );
  }
  return (
    <div className="relative h-[600px] overflow-hidden mt-20 bg-gray-900">
      {slides.map((slide, index) => {
        const hasError = imageErrors[index];
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="relative h-full w-full">
              {!hasError ? (
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  onError={() => handleImageError(index)}
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#10B981] to-[#059669]" />
              )}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 flex items-center justify-center">
                <div className="text-center text-white px-4 max-w-4xl">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-2xl animate-fade-in">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-2xl drop-shadow-lg animate-fade-in-delay">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full p-3 transition-all cursor-pointer z-20 shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full p-3 transition-all cursor-pointer z-20 shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1 rounded-full transition-all cursor-pointer ${
                  index === currentSlide 
                    ? 'bg-white w-12' 
                    : 'bg-white/50 w-8 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
export default Hero;