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

interface UserPointsProps {
  id: string;
  userId: string;
  point: number;
  user: {
    id: string;
    createdAt: string;
    updatedAt: string;
    fullname: string;
    username: string;
    email: string;
    bio: string;
    avatar: string;
    role: string;
    code: string;
    batch: string;
    isVerified: boolean;
  };
}
