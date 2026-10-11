export type Language = "vi" | "en";

export interface SDKInfo {
  id: string;
  name: string;
  purpose: {
    vi: string;
    en: string;
  };
  policyUrl: string;
  enabled: boolean;
}

export interface GameConfig {
  gameName: string;
  developerName: string;
  contactEmail: string;
  effectiveDate: string;
  lastUpdated: string;
  websiteUrl?: string;
  appCategory: string;
  targetAudience: "all" | "teens_adults" | "children";
  sdks: SDKInfo[];
}

export interface SectionContent {
  id: string;
  title: {
    vi: string;
    en: string;
  };
  icon: string;
  badge?: {
    vi: string;
    en: string;
  };
  contentVi: string;
  contentEn: string;
}
