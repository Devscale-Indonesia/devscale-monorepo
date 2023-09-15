'use client';

import { Provider } from 'jotai';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'react-hot-toast';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider>
      <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
        <div>{children}</div>
        <Toaster position="top-right" toastOptions={{ duration: 5000 }} />
      </ThemeProvider>
    </Provider>
  );
};
