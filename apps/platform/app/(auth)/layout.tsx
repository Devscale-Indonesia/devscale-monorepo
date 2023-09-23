import { AuthTemplate } from '../../components/Auth/components/Auth.Template';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <AuthTemplate>{children}</AuthTemplate>;
}
