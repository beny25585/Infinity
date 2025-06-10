import { useState } from "react";
import FloatingWhatsApp from "./FloatingWhatsApp";
import AccessibilityPlugin from "./AccessibilityPlugin";
import PopupForm from "./popupForm";

function Layout({ children }: { children: React.ReactNode }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="bg-gray-300 flex flex-col  min-h-screen  pt-14   text-white">
      <AccessibilityPlugin />
      <FloatingWhatsApp isHidden={isPopupOpen} />
      <div id="site-wrapper" className="flex flex-col ">
        <main >{children}</main>
      </div>

      <PopupForm
        onPopupOpen={() => setIsPopupOpen(true)}
        onPopupClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
}
export default Layout;
