import React from "react";

const PromoBanner: React.FC = () => {
  return (
    <div
      className="
      bg-gradient-to-r from-green-700 to-green-800
      text-white
      text-center
      py-8 px-6
    "
    >
      {/* Main content */}
      <h2
        className="
        text-2xl sm:text-3xl lg:text-4xl
        font-bold
        mb-2
      "
      >
        גיל 14 עד 18?
        <br />
        מגיע לך מאיתנו חודש ראשון ב-50 ש״ח בלבד ו-2 אימונים ללא עלות{" "}
      </h2>
    </div>
  );
};

export default PromoBanner;
