function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-36">
      {" "}
      {/* התאמה לגובה ה-navbar */}
      {children}
    </div>
  );
}

export default Layout;
