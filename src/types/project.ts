import { ServiceSlug } from "./service";

export interface Project {
  slug: string;
  title: string;
  client: string;
  category: ServiceSlug | "full-scope";
  categoryLabel: string;
  year: string;
  subtitle: string;
  heroImage: string;
  gallery: string[];
  challenge: string;
  solution: string;
  results: {
    label: string;
    value: string;
  }[];
  servicesProvided: string[];
  artDirectionNotes: string;
}

