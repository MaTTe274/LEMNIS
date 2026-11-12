export type ServiceSlug =
  | "social-media"
  | "foto"
  | "video"
  | "ads"
  | "web-ecommerce";

export interface Deliverable {
  title: string;
  description: string;
  specs?: string;
}

export interface ProcessStep {
  step: string;
  phase: string;
  title: string;
  description: string;
  timeline?: string;
}

export interface ServiceTarget {
  idealFor: string[];
  triggers: string[];
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceGuarantee {
  title: string;
  description: string;
}

export interface ServiceDetail {
  slug: ServiceSlug;
  idNumber: string;
  title: string;
  tagline: string;
  leadParagraph: string;
  target: ServiceTarget;
  deliverables: Deliverable[];
  deliverablesSpecs: {
    formats: string[];
    licensing: string;
    turnaround: string;
    revisions: string;
  };
  process: ProcessStep[];
  faqs: ServiceFAQ[];
  guarantees: ServiceGuarantee[];
  metrics: {
    label: string;
    value: string;
  }[];
  heroMedia: {
    type: "image" | "video";
    url: string;
    caption: string;
  };
}
