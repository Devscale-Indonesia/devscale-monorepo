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
