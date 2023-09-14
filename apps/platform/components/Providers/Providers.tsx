'use client';

import { ThemeProvider } from 'next-themes';
import { Switch } from '../ThemeSwitcher/Switch';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
      <Switch />
      <div>{children}</div>
    </ThemeProvider>
  );
};
