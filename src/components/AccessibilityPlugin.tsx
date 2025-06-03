import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUniversalAccess } from "@fortawesome/free-solid-svg-icons";

const textOptions = [
  "100%",
  "110%",
  "120%",
  "130%",
  "140%",
  "150%",
  "160%",
  "170%",
  "180%",
  "190%",
  "200%",
];

const AccessibilityPlugin: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [fontSizeIndex, setFontSizeIndex] = useState(0);
  const [highContrast, setHighContrast] = useState(false);
  const [screenReader, setScreenReader] = useState(false);
  const [originalFontSize, setOriginalFontSize] = useState("");
  const [noAnimations, setNoAnimations] = useState(false);

  const toggleVisibility = () => setVisible(!visible);

  //הגדלת גודל הטקסט
  const increaseFontSize = () => {
    if (fontSizeIndex < textOptions.length - 1) {
      const newIndex = fontSizeIndex + 1;
      setFontSizeIndex(newIndex);
      document.documentElement.style.fontSize = textOptions[newIndex];
    }
  };
  //להחזיר לגודל ברירת מחדל
  const resetFontSize = () => {
    setFontSizeIndex(0);
    document.documentElement.style.fontSize = originalFontSize;
  };
  //ניגודיות
  const toggleContrast = () => {
    setHighContrast(!highContrast);
    document.getElementById("site-wrapper")?.classList.toggle("high-contrast");
  };
  //ביטול אנימציות
  const toggleAnimations = () => {
    if (!noAnimations) {
      setNoAnimations(true);
    } else {
      setNoAnimations(false);
    }
    document.body.classList.toggle("no-animations");
  };
  //הפעלה של הקורא מסך
  const toggleScreenReader = () => {
    setScreenReader(!screenReader);
  };
  //קורא מסך
  const speak = (text: string) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "he-IL";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
  };

  useEffect(() => {
    const defaultSize = window.getComputedStyle(
      document.documentElement
    ).fontSize;
    setOriginalFontSize(defaultSize);
    if (screenReader) {
      const focusHandler = (e: FocusEvent) => {
        const target = e.target as HTMLElement;
        const text =
          target.innerText || target.getAttribute("aria-label") || "";
        if (text.trim()) {
          speak(text.trim());
        }
      };
      const readableElements = document.querySelectorAll<HTMLElement>(
        "h1, h2, h3, h4, h5, h6, p, a, button, input, textarea, select"
      );
      readableElements.forEach((el) =>
        el.addEventListener("focus", focusHandler)
      );
      return () =>
        readableElements.forEach((el) =>
          el.removeEventListener("focus", focusHandler)
        );
    }
  }, [screenReader]);

  visible;

  return (
    <div className="fixed bottom-4 left-4 z-60">
      <button
        onClick={toggleVisibility}
        className="bg-blue-600  text-white px-4 py-2 rounded shadow hover:bg-blue-700"
        aria-label="תפריט נגישות"
      >
        <FontAwesomeIcon className=" text-lg" icon={faUniversalAccess} />
      </button>

      {visible && (
        <div className="mt-2 bg-white text-black p-4 rounded shadow w-64 space-y-2 border border-gray-300">
          <button
            onClick={increaseFontSize}
            className={` w-full   p-2 rounded ${
              fontSizeIndex > 0
                ? "bg-blue-500 text-white"
                : "bg-gray-100 hover:bg-gray-200 "
            }`}
          >
            הגדלת טקסט
          </button>
          <button
            onClick={resetFontSize}
            className="w-full bg-gray-100 hover:bg-gray-200 p-2 rounded"
          >
            איפוס טקסט
          </button>
          <button
            onClick={toggleContrast}
            className={` w-full   p-2 rounded ${
              highContrast
                ? "bg-blue-500 text-white"
                : "bg-gray-100 hover:bg-gray-200 "
            }`}
          >
            ניגודיות גבוהה
          </button>
          <button
            onClick={toggleAnimations}
            className={` w-full   p-2 rounded ${
              noAnimations
                ? "bg-blue-500 text-white"
                : "bg-gray-100 hover:bg-gray-200 "
            }`}
          >
            {noAnimations ? "הפעלת אנימציות" : "כיבוי אנימציות"}
          </button>
          <button
            onClick={toggleScreenReader}
            className={` w-full   p-2 rounded ${
              screenReader
                ? "bg-blue-500 text-white"
                : "bg-gray-100 hover:bg-gray-200 "
            }`}
          >
            {screenReader ? "כיבוי קורא מסך" : "הפעלת קורא מסך"}
          </button>
        </div>
      )}

      {/* סגנונות עבור מצבים */}
      <style>{`
        #site-wrapper.high-contrast {
          filter: contrast(2) grayscale(1);
          background-color: black;
          color: yellow;
        }

        .no-animations * {
          animation: none !important;
          transition: none !important;
        }
      `}</style>
    </div>
  );
};

export default AccessibilityPlugin;
