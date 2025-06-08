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
      mb-2
    ">
     

      {/* Main content */}
      <h2 className="
        text-2xl sm:text-3xl lg:text-4xl
        font-bold
        mb-2
      ">
        אין לחץ בואו תכירו אותנו
      </h2>
      
   

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