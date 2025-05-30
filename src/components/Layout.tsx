import FloatingWhatsApp from "./FloatingWhatsApp";
import AccessibilityPlugin from "./AccessibilityPlugin";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col flex-grow min-h-screen  relative overflow-x-hidden pt-30 pb-20 text-white">
      {/* טקסטורת רקע עדינה */}
      <AccessibilityPlugin />
      <FloatingWhatsApp />
      <div id="site-wrapper" className="flex flex-col flex-grow pt-30 pb-20">
        <main className="relative z-10 flex-grow">{children}</main>
      </div>
    </div>
  );
}

export default Layout;
