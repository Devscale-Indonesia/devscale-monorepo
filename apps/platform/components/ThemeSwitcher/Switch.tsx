'use client';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';

export const Switch = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme('dark');
  }, []);

  return (
    <div>
      The current theme is: {theme}
      <button onClick={() => setTheme('light')}>Light Mode</button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
    </div>
  );
};
