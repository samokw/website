export type RoleLine = {
  lead: string;
  org: string;
  orgUrl?: string;
  tail?: string;
};

export type ProjectEntry = {
  name: string;
  url: string;
  summary?: string;
  technology?: string;
  image?: string;
  description?: string[];
};

export type WritingEntry = {
  title: string;
  url: string;
};

export type WorkExperienceEntry = {
  title: string;
  company: string;
  location: string;
  date: string;
  responsibilities: string[];
  image?: string;
};

export type SocialLink = {
  name: string;
  href: string;
};

export type NavEntry = {
  href: string;
  name: string;
  /** Opens in new tab (e.g. PDF resume). */
  external?: boolean;
};

export type SiteContent = {
  meta: {
    title: string;
    description: string;
  };
  name: string;
  hero: {
    greeting: string;
    lines: string[];
    portrait: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  };
  currently: RoleLine[];
  previously: RoleLine[];
  projects: ProjectEntry[];
  writing: WritingEntry[];
  workExperience: WorkExperienceEntry[];
  socials: SocialLink[];
  nav: NavEntry[];
};
