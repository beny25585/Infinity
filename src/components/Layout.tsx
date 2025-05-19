function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col flex-grow min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-x-hidden pt-40 text-white">
      {/* טקסטורת רקע עדינה */}
      <div
        className="fixed inset-0 pointer-events-none opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat z-0"
      ></div>

      {/* התוכן מעל הרקע */}
      <main className="relative z-10 flex-grow">
        {children}
      </main>
    </div>
  );
}

export default Layout;
