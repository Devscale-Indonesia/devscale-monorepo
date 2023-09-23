export const AuthTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-screen justify-center items-center">
      <div className="w-[280px]">{children}</div>
    </main>
  );
};
