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
interface NewsArticle {
  id: string;
  title: string;
  date: string;
  summary: string;
  content: string;
  category: string;
  type: 'company' | 'industry';
}
interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
interface CoreValue {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
}
interface CompanyCulture {
  mission: {
    title: string;
    subtitle: string;
    description: string;
  };
  vision: {
    title: string;
    subtitle: string;
    description: string;
  };
}
interface SiteSettings {
  companyName: string;
  companyNameEn: string;
  logoUrl: string;
  contactEmail: string;
  contactAddress: string;
  contactPhone: string;
  workingHours: string;
  teamTitle: string;
  teamSubtitle: string;
  teamDescription: string;
}
interface ContentContextType {
  heroSlides: HeroSlide[];
  services: Service[];
  teamMembers: TeamMember[];
  newsArticles: NewsArticle[];
  faqItems: FAQItem[];
  coreValues: CoreValue[];
  companyCulture: CompanyCulture;
  siteSettings: SiteSettings;
  updateHeroSlides: (slides: HeroSlide[]) => void;
  updateServices: (services: Service[]) => void;
  updateTeamMembers: (members: TeamMember[]) => void;
  updateNewsArticles: (articles: NewsArticle[]) => void;
  updateFAQItems: (items: FAQItem[]) => void;
  updateCoreValues: (values: CoreValue[]) => void;
  updateCompanyCulture: (culture: CompanyCulture) => void;
  updateSiteSettings: (settings: SiteSettings) => void;
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
const defaultServices: Service[] = [
  {
    title: '新能源产业研究与咨询',
    subtitle: 'New Energy Industry Research & Advisory',
    description: '我们围绕新能源及可持续产业，为企业、机构及合作伙伴提供以产业为导向的研究与咨询支持。',
    icon: '📊',
    services: [
      '产业与政策研究 - 围绕新能源整车、动力电池、光伏、风电、储能及关键资源领域',
      '市场趋势分析 - 结合区域市场特征，分析新能源产业发展阶段',
      '决策支持建议 - 基于研究成果，提供战略与项目参考建议'
    ],
    value: [
      '提升对新能源产业与区域市场的系统性认知',
      '降低信息不对称带来的决策不确定性',
      '为中长期发展方向提供研究支持'
    ]
  }
];
const defaultTeamMembers: TeamMember[] = [
  {
    name: '姜云成',
    nameEn: 'Jiang Yuncheng',
    position: '创始人',
    positionEn: 'Founder',
    background: '姜云成先生长期从事产业协作与企业发展相关工作，具备跨区域、跨产业的实践经验。',
    focus: '新能源产业研究｜跨境产业协作｜项目推动与资源协调｜长期发展战略',
    belief: '"尊重产业规律，顺应时代趋势，在长期主义中创造真实价值。"'
  }
];
const defaultCoreValues: CoreValue[] = [
  {
    icon: '🤝',
    title: '协同共创',
    subtitle: 'Collaboration',
    description: '我们相信，真正的竞争力来自协作。通过跨区域、跨产业、跨专业的深度合作，整合多方优势，共同创造长期价值。'
  },
  {
    icon: '🔍',
    title: '产业洞察',
    subtitle: 'Insight',
    description: '一切决策，源于对产业的理解。我们持续关注新能源技术演进、政策环境与产业周期变化，以研究为基础，提供理性、前瞻且可执行的判断支持。'
  },
  {
    icon: '⚖️',
    title: '稳健前行',
    subtitle: 'Prudence',
    description: '我们坚持长期主义与稳健原则。在面对市场波动与环境变化时，保持理性判断，重视风险识别与管理，避免短期行为，追求可持续发展。'
  },
  {
    icon: '🤍',
    title: '诚信信任',
    subtitle: 'Trust',
    description: '信任是合作的基础。我们重视透明沟通、责任意识与专业操守，通过可靠的执行与持续的价值创造，赢得合作伙伴、团队与市场的长期信任。'
  },
  {
    icon: '🌱',
    title: '持续进化',
    subtitle: 'Evolution',
    description: '新能源产业不断演进，我们亦持续成长。通过学习、实践与复盘，不断优化专业能力与协作方式，在变化中保持清醒，在进化中坚守初心。'
  }
];
const defaultCompanyCulture: CompanyCulture = {
  mission: {
    title: '连接产业价值，推动可持续未来',
    subtitle: 'Mission',
    description: '東盟新能資產管理有限公司立足新能源与可持续产业领域，以产业研究、跨境协作与项目支持为核心能力，连接资本、技术与市场资源，协助合作伙伴在复杂多变的区域与全球环境中，实现长期、稳健与可持续的发展。'
  },
  vision: {
    title: '成为值得信赖的新能源产业研究与协作平台',
    subtitle: 'Vision',
    description: '立足中国，连接东盟，面向全球。我们致力于打造一个具备前瞻视野、专业深度与高度信任度的新能源产业研究与协作平台，成为政府机构、产业伙伴及合作方在新能源领域中长期可靠的战略支持者与协作伙伴。'
  }
};
const defaultSiteSettings: SiteSettings = {
  companyName: '東盟新能資產管理有限公司',
  companyNameEn: 'ASEAN New Energy Asset Management Limited',
  logoUrl: 'https://jojdwiugelqhcajbccxn.supabase.co/storage/v1/object/public/images/1767523138256-aee6773b-c9d1-411a-8a9c-e6ccb7969649-0.png',
  contactEmail: 'team@hklingrui.com',
  contactAddress: '香港銅鑼灣希慎道33號',
  contactPhone: '+852 1234 5678',
  workingHours: '週一至週五 9:00 - 18:00',
  teamTitle: '瑞行团队',
  teamSubtitle: '以瑞势顺时代，以笃行筑长远',
  teamDescription: '顺应产业发展趋势，以踏实执行与专业协作，推动长期价值的形成。'
};
export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [heroSlides, setHeroSlides] = useState<HeroSlide[]>(() => {
    const stored = localStorage.getItem('heroSlides');
    return stored ? JSON.parse(stored) : defaultHeroSlides;
  });
  const [services, setServices] = useState<Service[]>(() => {
    const stored = localStorage.getItem('services');
    return stored ? JSON.parse(stored) : defaultServices;
  });
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(() => {
    const stored = localStorage.getItem('teamMembers');
    return stored ? JSON.parse(stored) : defaultTeamMembers;
  });
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>(() => {
    const stored = localStorage.getItem('newsArticles');
    return stored ? JSON.parse(stored) : [];
  });
  const [faqItems, setFAQItems] = useState<FAQItem[]>(() => {
    const stored = localStorage.getItem('faqItems');
    return stored ? JSON.parse(stored) : [];
  });
  const [coreValues, setCoreValues] = useState<CoreValue[]>(() => {
    const stored = localStorage.getItem('coreValues');
    return stored ? JSON.parse(stored) : defaultCoreValues;
  });
  const [companyCulture, setCompanyCulture] = useState<CompanyCulture>(() => {
    const stored = localStorage.getItem('companyCulture');
    return stored ? JSON.parse(stored) : defaultCompanyCulture;
  });
  const [siteSettings, setSiteSettings] = useState<SiteSettings>(() => {
    const stored = localStorage.getItem('siteSettings');
    return stored ? JSON.parse(stored) : defaultSiteSettings;
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
  useEffect(() => {
    localStorage.setItem('newsArticles', JSON.stringify(newsArticles));
  }, [newsArticles]);
  useEffect(() => {
    localStorage.setItem('faqItems', JSON.stringify(faqItems));
  }, [faqItems]);
  useEffect(() => {
    localStorage.setItem('coreValues', JSON.stringify(coreValues));
  }, [coreValues]);
  useEffect(() => {
    localStorage.setItem('companyCulture', JSON.stringify(companyCulture));
  }, [companyCulture]);
  useEffect(() => {
    localStorage.setItem('siteSettings', JSON.stringify(siteSettings));
  }, [siteSettings]);
  return (
    <ContentContext.Provider
      value={{
        heroSlides,
        services,
        teamMembers,
        newsArticles,
        faqItems,
        coreValues,
        companyCulture,
        siteSettings,
        updateHeroSlides: setHeroSlides,
        updateServices: setServices,
        updateTeamMembers: setTeamMembers,
        updateNewsArticles: setNewsArticles,
        updateFAQItems: setFAQItems,
        updateCoreValues: setCoreValues,
        updateCompanyCulture: setCompanyCulture,
        updateSiteSettings: setSiteSettings,
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