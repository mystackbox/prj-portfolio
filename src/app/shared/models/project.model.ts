export interface Project {
  id: number;
  name: string;
  heading: string;
  imagePath: string;
  introduction: string;
  description: string;
  concepts: {
    'Concept 1': string;
    'Concept 2': string;
    'Concept 3': string;
    'Concept 4': string;
    'Concept 5': string;
    'Concept 6': string;
  };
  features: {
    'Feature 1': string;
    'Feature 2': string;
    'Feature 3': string;
    'Feature 4': string;
    'Feature 5': string;
    'Feature 6': string;
  };
}
