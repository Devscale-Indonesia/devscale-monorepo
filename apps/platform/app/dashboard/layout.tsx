import { DashboardTemplate } from '../../components/Dashboard/components/Templates/Dashboard.Template';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DashboardTemplate>{children}</DashboardTemplate>;
}
