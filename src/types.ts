export interface Skill {
  name: string;
  proficiency: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  examples: string;
  type: "Technical" | "Leadership" | "Hard" | "Soft";
  tags: string[];
}

export interface Experience {
  company: string;
  title: string;
  dates: string;
  location: string;
  bullets: string[];
}

export interface ImpactHighlight {
  metric: string;
  metricLabel?: string;
  headline: string;
  story: string;
  category: string;
}

export interface Service {
  id: string;
  title: string;
  headline: string;
  body: string;
  whatsIncluded: string[];
  iconName: string;
}

export interface PersonalFact {
  icon: string;
  label: string;
}
