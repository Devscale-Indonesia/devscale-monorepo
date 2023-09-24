import { DashboardTemplate } from '../../components/Dashboard/components/Templates/Dashboard.Template';
import { pocketbase } from '../../../platform/utils/pocketbase';
import { headers } from 'next/headers';

// async function getUser() {
//   pocketbase.authStore.loadFromCookie(headers().get('cookie') || '');
//   const data = pocketbase.authStore.isValid;
//   return data;
// }

export default function Layout({ children }: { children: React.ReactNode }) {
  pocketbase.authStore.loadFromCookie(headers().get('cookie') || '');

  return <DashboardTemplate isAdmin={pocketbase.authStore.isValid}>{children}</DashboardTemplate>;
}
