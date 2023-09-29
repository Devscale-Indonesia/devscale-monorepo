interface Menu {
  label: string;
  href: string;
  icon: React.ReactNode;
}

interface LoginProps {
  email: string;
  password: string;
}

interface RegisterProps {
  name: string;
  username: string;
  email: string;
  password: string;
}

interface CourseProps {
  id: string;
  createdAt: string;
  updatedAt: string;
  featuredImage: string;
  title: string;
  slug: string;
  description: string;
  prerequirements: string;
  isPublished: boolean;
  level: string;
  courseSections: unknown[];
}

interface UserPointsProps {
  id: string;
  fullname: string;
  points: number;
}
