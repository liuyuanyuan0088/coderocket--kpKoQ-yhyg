import React, { createContext, useContext, useState, useEffect } from 'react';
interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
}
interface AboutCard {
  title: string;
  image: string;
  description: string;
}
interface CoreValue {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
}
interface ServiceItem {
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
  avatar?: string;
}
interface TeamCultureItem {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
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
  coreValuesIntro: string;
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
  footerText: string;
  footerCopyright: string;
}
interface HomePageTexts {
  aboutSectionTitle: string;
  aboutSectionSubtitle: string;
  aboutSectionDescription: string;
  coreValuesSectionTitle: string;
  coreValuesSectionSubtitle: string;
  coreValuesSectionDescription: string;
}
interface AppDownloadContent {
  pageTitle: string;
  pageSubtitle: string;
  featuresTitle: string;
  features: string[];
  downloadTitle: string;
  iosAppStoreUrl: string;
  androidPlayStoreUrl: string;
  qrCodeDescription: string;
  iosQRCode: string;
  androidQRCode: string;
  systemRequirementsTitle: string;
  iosTitle: string;
  iosRequirements: string[];
  androidTitle: string;
  androidRequirements: string[];
}
interface ContactPageContent {
  pageTitle: string;
  pageSubtitle: string;
  contactMethodsTitle: string;
  addressTitle: string;
  address: string;
  emailTitle: string;
  email: string;
  phoneTitle: string;
  phone: string;
  hoursTitle: string;
  hours: string;
  formTitle: string;
  nameLabel: string;
  emailLabel: string;
  phoneLabel: string;
  messageLabel: string;
  submitButton: string;
}
interface ContentContextType {
  heroSlides: HeroSlide[];
  aboutCards: AboutCard[];
  coreValues: CoreValue[];
  services: ServiceItem[];
  teamMembers: TeamMember[];
  teamCulture: TeamCultureItem[];
  newsArticles: NewsArticle[];
  faqItems: FAQItem[];
  companyCulture: CompanyCulture;
  siteSettings: SiteSettings;
  homePageTexts: HomePageTexts;
  appDownloadContent: AppDownloadContent;
  contactPageContent: ContactPageContent;
  updateHeroSlides: (slides: HeroSlide[]) => void;
  updateAboutCards: (cards: AboutCard[]) => void;
  updateCoreValues: (values: CoreValue[]) => void;
  updateServices: (services: ServiceItem[]) => void;
  updateTeamMembers: (members: TeamMember[]) => void;
  updateTeamCulture: (culture: TeamCultureItem[]) => void;
  updateNewsArticles: (articles: NewsArticle[]) => void;
  updateFAQItems: (items: FAQItem[]) => void;
  updateCompanyCulture: (culture: CompanyCulture) => void;
  updateSiteSettings: (settings: SiteSettings) => void;
  updateHomePageTexts: (texts: HomePageTexts) => void;
  updateAppDownloadContent: (content: AppDownloadContent) => void;
  updateContactPageContent: (content: ContactPageContent) => void;
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
  }
];
const defaultAboutCards: AboutCard[] = [
  {
    title: '公司文化',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    description: '秉持專業、創新、穩健的經營理念'
  },
  {
    title: '服務與解決方案',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
    description: '提供全方位資產管理與投資顧問服務'
  },
  {
    title: '關於我們',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    description: '專注於東盟地區新能源資產投資管理'
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
const defaultServices: ServiceItem[] = [
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
    belief: '"尊重产业规律，顺应时代趋势，在长期主义中创造真实价值。"',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop'
  }
];
const defaultTeamCulture: TeamCultureItem[] = [
  {
    icon: '🤝',
    title: '协作共进',
    subtitle: 'Cross-functional Collaboration',
    description: '我们鼓励跨职能、跨背景的深度协作。通过不同专业视角的融合，形成更全面、更稳健的判断，共同推动项目落地。'
  },
  {
    icon: '📚',
    title: '持续学习',
    subtitle: 'Continuous Learning',
    description: '新能源产业快速演进，我们保持开放与学习的心态。通过研究、复盘与经验分享，不断提升团队的专业能力与产业理解深度。'
  },
  {
    icon: '🌱',
    title: '理性创新',
    subtitle: 'Rational Innovation',
    description: '我们尊重创新，但同样重视可行性与风险边界。在保持开放思维的同时，坚持理性判断，让创新服务于长期价值。'
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
  },
  coreValuesIntro: '在新能源产业与跨境合作的复杂环境中，我们以以下五大价值观，指引团队稳健前行。'
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
  teamDescription: '顺应产业发展趋势，以踏实执行与专业协作，推动长期价值的形成。',
  footerText: '東盟新能資產管理有限公司',
  footerCopyright: '未經許可不得複製、轉載或摘編，違者必究！'
};
const defaultHomePageTexts: HomePageTexts = {
  aboutSectionTitle: '瑞行团队',
  aboutSectionSubtitle: '以瑞势顺时代，以笃行筑长远',
  aboutSectionDescription: '顺应产业发展趋势，以踏实执行与专业协作，推动长期价值的形成。',
  coreValuesSectionTitle: '核心价值观',
  coreValuesSectionSubtitle: 'Core Values',
  coreValuesSectionDescription: '在新能源产业与跨境合作的复杂环境中，我们以以下五大价值观，指引团队稳健前行'
};
const defaultAppDownloadContent: AppDownloadContent = {
  pageTitle: 'App下載',
  pageSubtitle: '隨時隨地掌握投資動態',
  featuresTitle: '功能特色',
  features: [
    '實時查看投資組合和收益情況',
    '接收重要通知和市場資訊',
    '快速進行投資操作和資金劃轉',
    '查閱詳細的投資報告',
    '與專業顧問在線溝通'
  ],
  downloadTitle: '立即下載',
  iosAppStoreUrl: 'https://apps.apple.com',
  androidPlayStoreUrl: 'https://play.google.com',
  qrCodeDescription: '或掃描二維碼下載',
  iosQRCode: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://apps.apple.com',
  androidQRCode: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://play.google.com',
  systemRequirementsTitle: '系統要求',
  iosTitle: 'iOS版本',
  iosRequirements: [
    '系統要求：iOS 13.0或更高版本',
    '兼容設備：iPhone、iPad、iPod touch',
    '應用大小：約85MB',
    '語言支持：繁體中文、英文'
  ],
  androidTitle: 'Android版本',
  androidRequirements: [
    '系統要求：Android 8.0或更高版本',
    '兼容設備：支持大部分Android手機和平板',
    '應用大小：約90MB',
    '語言支持：繁體中文、英文'
  ]
};
const defaultContactPageContent: ContactPageContent = {
  pageTitle: '聯繫我們',
  pageSubtitle: '我們隨時為您提供專業服務',
  contactMethodsTitle: '聯繫方式',
  addressTitle: '公司地址',
  address: '香港銅鑼灣希慎道33號',
  emailTitle: '電子郵件',
  email: 'team@hklingrui.com',
  phoneTitle: '聯繫電話',
  phone: '+852 1234 5678',
  hoursTitle: '工作時間',
  hours: '週一至週五 9:00 - 18:00',
  formTitle: '發送消息',
  nameLabel: '姓名',
  emailLabel: '電子郵件',
  phoneLabel: '電話',
  messageLabel: '消息內容',
  submitButton: '發送消息'
};
export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [heroSlides, setHeroSlides] = useState<HeroSlide[]>(() => {
    const stored = localStorage.getItem('heroSlides');
    return stored ? JSON.parse(stored) : defaultHeroSlides;
  });
  const [aboutCards, setAboutCards] = useState<AboutCard[]>(() => {
    const stored = localStorage.getItem('aboutCards');
    return stored ? JSON.parse(stored) : defaultAboutCards;
  });
  const [coreValues, setCoreValues] = useState<CoreValue[]>(() => {
    const stored = localStorage.getItem('coreValues');
    return stored ? JSON.parse(stored) : defaultCoreValues;
  });
  const [services, setServices] = useState<ServiceItem[]>(() => {
    const stored = localStorage.getItem('services');
    return stored ? JSON.parse(stored) : defaultServices;
  });
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(() => {
    const stored = localStorage.getItem('teamMembers');
    return stored ? JSON.parse(stored) : defaultTeamMembers;
  });
  const [teamCulture, setTeamCulture] = useState<TeamCultureItem[]>(() => {
    const stored = localStorage.getItem('teamCulture');
    return stored ? JSON.parse(stored) : defaultTeamCulture;
  });
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>(() => {
    const stored = localStorage.getItem('newsArticles');
    return stored ? JSON.parse(stored) : [];
  });
  const [faqItems, setFAQItems] = useState<FAQItem[]>(() => {
    const stored = localStorage.getItem('faqItems');
    return stored ? JSON.parse(stored) : [];
  });
  const [companyCulture, setCompanyCulture] = useState<CompanyCulture>(() => {
    const stored = localStorage.getItem('companyCulture');
    return stored ? JSON.parse(stored) : defaultCompanyCulture;
  });
  const [siteSettings, setSiteSettings] = useState<SiteSettings>(() => {
    const stored = localStorage.getItem('siteSettings');
    return stored ? JSON.parse(stored) : defaultSiteSettings;
  });
  const [homePageTexts, setHomePageTexts] = useState<HomePageTexts>(() => {
    const stored = localStorage.getItem('homePageTexts');
    return stored ? JSON.parse(stored) : defaultHomePageTexts;
  });
  const [appDownloadContent, setAppDownloadContent] = useState<AppDownloadContent>(() => {
    const stored = localStorage.getItem('appDownloadContent');
    return stored ? JSON.parse(stored) : defaultAppDownloadContent;
  });
  const [contactPageContent, setContactPageContent] = useState<ContactPageContent>(() => {
    const stored = localStorage.getItem('contactPageContent');
    return stored ? JSON.parse(stored) : defaultContactPageContent;
  });
  useEffect(() => {
    localStorage.setItem('heroSlides', JSON.stringify(heroSlides));
  }, [heroSlides]);
  useEffect(() => {
    localStorage.setItem('aboutCards', JSON.stringify(aboutCards));
  }, [aboutCards]);
  useEffect(() => {
    localStorage.setItem('coreValues', JSON.stringify(coreValues));
  }, [coreValues]);
  useEffect(() => {
    localStorage.setItem('services', JSON.stringify(services));
  }, [services]);
  useEffect(() => {
    localStorage.setItem('teamMembers', JSON.stringify(teamMembers));
  }, [teamMembers]);
  useEffect(() => {
    localStorage.setItem('teamCulture', JSON.stringify(teamCulture));
  }, [teamCulture]);
  useEffect(() => {
    localStorage.setItem('newsArticles', JSON.stringify(newsArticles));
  }, [newsArticles]);
  useEffect(() => {
    localStorage.setItem('faqItems', JSON.stringify(faqItems));
  }, [faqItems]);
  useEffect(() => {
    localStorage.setItem('companyCulture', JSON.stringify(companyCulture));
  }, [companyCulture]);
  useEffect(() => {
    localStorage.setItem('siteSettings', JSON.stringify(siteSettings));
  }, [siteSettings]);
  useEffect(() => {
    localStorage.setItem('homePageTexts', JSON.stringify(homePageTexts));
  }, [homePageTexts]);
  useEffect(() => {
    localStorage.setItem('appDownloadContent', JSON.stringify(appDownloadContent));
  }, [appDownloadContent]);
  useEffect(() => {
    localStorage.setItem('contactPageContent', JSON.stringify(contactPageContent));
  }, [contactPageContent]);
  return (
    <ContentContext.Provider
      value={{
        heroSlides,
        aboutCards,
        coreValues,
        services,
        teamMembers,
        teamCulture,
        newsArticles,
        faqItems,
        companyCulture,
        siteSettings,
        homePageTexts,
        appDownloadContent,
        contactPageContent,
        updateHeroSlides: setHeroSlides,
        updateAboutCards: setAboutCards,
        updateCoreValues: setCoreValues,
        updateServices: setServices,
        updateTeamMembers: setTeamMembers,
        updateTeamCulture: setTeamCulture,
        updateNewsArticles: setNewsArticles,
        updateFAQItems: setFAQItems,
        updateCompanyCulture: setCompanyCulture,
        updateSiteSettings: setSiteSettings,
        updateHomePageTexts: setHomePageTexts,
        updateAppDownloadContent: setAppDownloadContent,
        updateContactPageContent: setContactPageContent,
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