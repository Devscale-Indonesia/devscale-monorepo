import { DM_Sans, Inter } from 'next/font/google';
import { Providers } from '../components/Providers/Providers';
import '../styles/global.css';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata = {
  title: 'Devscale Indonesia',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
