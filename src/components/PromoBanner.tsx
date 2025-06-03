import React from 'react';

const PromoBanner: React.FC = () => {
  return (
    <div className="
      bg-gradient-to-r from-green-700 to-green-800
      text-white
      text-center
      py-8 px-6
      rounded-lg
      shadow-lg
    ">
      {/* Badge */}
      <div className="mb-4">
        <span className="
          bg-white text-orange-600
          px-3 py-1 rounded-full
          text-sm font-semibold
          inline-block
        ">
          מבצע מיוחד 🔥
        </span>
      </div>

      {/* Main content */}
      <h2 className="
        text-2xl sm:text-3xl lg:text-4xl
        font-bold
        mb-2
      ">
        שני אימוני ניסיון חינם
      </h2>
      
      <div className="text-lg sm:text-xl mb-4 text-orange-100">
        +
      </div>

      <h3 className="
        text-xl sm:text-2xl lg:text-3xl
        font-semibold
        text-yellow-100
      ">
        חודש ראשון ב־15 ש״ח בלבד!
      </h3>
    </div>
  );
};

export default PromoBanner;