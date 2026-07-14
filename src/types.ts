export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  category: 'fullstack' | 'frontend' | 'ai' | 'other';
  githubUrl?: string;
  demoUrl?: string;
  highlights?: string[];
}

export interface Skill {
  name: string;
  category: 'languages' | 'frameworks' | 'databases' | 'security' | 'tooling' | 'devops';
  level: number; // 0-100
}

export interface CompetitiveProgramming {
  platform: 'LeetCode' | 'CodeForces';
  solved: number;
  maxRating?: number;
  ratingText?: string;
  details: string;
  profileUrl: string;
}
