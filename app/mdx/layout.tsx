export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-full lg:max-w-[1120px] flex flex-col h-screen">
      <div>This is the page header</div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
