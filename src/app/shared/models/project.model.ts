export interface Project {
  id?: number; // optional when creating
  name: string;
  heading: string;
  imageName: string;
  introduction: string;
  description: string;
  concepts: [string, string, string, string, string, string];
  features: [string, string, string, string, string, string];

  hyperlinks: [string, string, string];
}
