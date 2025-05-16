

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-24"> {/* התאמה לגובה ה-navbar */}
      {children}
    </div>
  );
}

export default Layout;
