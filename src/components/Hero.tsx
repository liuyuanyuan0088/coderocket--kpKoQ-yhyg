import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';
function Hero() {
  const { heroSlides } = useContent();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = heroSlides.length > 0 ? heroSlides : [
    {
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop',
      title: '綠色能源 · 美好未來',
      subtitle: '投資可持續發展，共創綠色未來'
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
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent flex items-center">
              <div className="mx-auto px-4 max-w-[1200px] w-full">
                <div className="max-w-2xl">
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-white drop-shadow-md mb-8">
                    {slide.subtitle}
                  </p>
                  <div className="flex gap-4">
                    <button className="bg-[#10B981] hover:bg-[#059669] text-white px-8 py-3 rounded-lg font-bold transition-colors cursor-pointer shadow-lg">
                      了解更多
                    </button>
                    <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-2 border-white px-8 py-3 rounded-lg font-bold transition-colors cursor-pointer shadow-lg">
                      聯繫我們
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 transition-all cursor-pointer shadow-lg"
      >
        <ChevronLeft className="h-6 w-6 text-[#10B981]" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 transition-all cursor-pointer shadow-lg"
      >
        <ChevronRight className="h-6 w-6 text-[#10B981]" />
      </button>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              index === currentSlide 
                ? 'bg-[#10B981] w-12' 
                : 'bg-white/60 w-8 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </div>
  );
}
export default Hero;