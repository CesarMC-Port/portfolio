
export interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  date: string;
  status: string;
  image: string;
  url?: string;
  url2?: string;
}

export interface ProjectCardProps {
  project: ProjectProps;
  index: number;
}