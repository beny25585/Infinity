import { useState, useEffect } from "react";
import FloatingWhatsApp from "./FloatingWhatsApp";
import AccessibilityPlugin from "./AccessibilityPlugin";
import PopupForm from "./popupForm";

function Layout({ children }: { children: React.ReactNode }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // חוסם/מחזיר גלילה על כל הדף
  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // ניקוי כשהקומפוננטה נהרסת
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isPopupOpen]);

  return (
    <div className="bg-gray-300 flex flex-col min-h-screen pt-14 text-white">
      <AccessibilityPlugin />
      <FloatingWhatsApp isHidden={isPopupOpen} />
      <div id="site-wrapper" className="flex flex-col overflow-hidden">
        <main>{children}</main>
      </div>

      <PopupForm
        onPopupOpen={() => setIsPopupOpen(true)}
        onPopupClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
}

export default Layout;
