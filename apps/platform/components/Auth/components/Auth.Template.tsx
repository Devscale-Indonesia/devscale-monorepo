'use client';

import { usePathname } from 'next/navigation';

export const AuthTemplate = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  if (pathname === '/') {
    return (
      <main className="flex h-screen justify-center items-center">
        <div className="w-[320px]">{children}</div>
      </main>
    );
  }

  return <>{children}</>;
};
