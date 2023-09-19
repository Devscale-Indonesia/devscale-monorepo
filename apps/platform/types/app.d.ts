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
  name: string;
  slug: string;
  description: string;
  prerequirements: string;
  isPublished: boolean;
  level: string;
  courseSections: unknown[];
}
