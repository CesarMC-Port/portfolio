
export interface ProjectProps {
  title: string;
  description: string;
  descriptionEs?: string;
  tags: string[];
  date: string;
  status: string;
  statusEs?: string;
  image: string;
  url?: string;
  url2?: string;
  url3?: string;
}

export interface ProjectCardProps {
  project: ProjectProps;
  index: number;
}