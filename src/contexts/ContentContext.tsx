import React, { createContext, useContext, useState, useEffect } from 'react';
interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
}
interface Service {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  services: string[];
  value: string[];
  note?: string;
}
interface TeamMember {
  name: string;
  nameEn: string;
  position: string;
  positionEn: string;
  background: string;
  focus: string;
  belief: string;
}
interface ContentContextType {
  heroSlides: HeroSlide[];
  services: Service[];
  teamMembers: TeamMember[];
  updateHeroSlides: (slides: HeroSlide[]) => void;
  updateServices: (services: Service[]) => void;
  updateTeamMembers: (members: TeamMember[]) => void;
}
const ContentContext = createContext<ContentContextType | undefined>(undefined);
const defaultHeroSlides: HeroSlide[] = [
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
  },
  {
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2074&auto=format&fit=crop',
    title: '智慧能源管理',
    subtitle: '以科技驅動綠色投資'
  }
];
export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [heroSlides, setHeroSlides] = useState<HeroSlide[]>(() => {
    const stored = localStorage.getItem('heroSlides');
    return stored ? JSON.parse(stored) : defaultHeroSlides;
  });
  const [services, setServices] = useState<Service[]>(() => {
    const stored = localStorage.getItem('services');
    return stored ? JSON.parse(stored) : [];
  });
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(() => {
    const stored = localStorage.getItem('teamMembers');
    return stored ? JSON.parse(stored) : [];
  });
  useEffect(() => {
    localStorage.setItem('heroSlides', JSON.stringify(heroSlides));
  }, [heroSlides]);
  useEffect(() => {
    localStorage.setItem('services', JSON.stringify(services));
  }, [services]);
  useEffect(() => {
    localStorage.setItem('teamMembers', JSON.stringify(teamMembers));
  }, [teamMembers]);
  const updateHeroSlides = (slides: HeroSlide[]) => {
    setHeroSlides(slides);
  };
  const updateServices = (newServices: Service[]) => {
    setServices(newServices);
  };
  const updateTeamMembers = (members: TeamMember[]) => {
    setTeamMembers(members);
  };
  return (
    <ContentContext.Provider
      value={{
        heroSlides,
        services,
        teamMembers,
        updateHeroSlides,
        updateServices,
        updateTeamMembers,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}
export function useContent() {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within ContentProvider');
  }
  return context;
}