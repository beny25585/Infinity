// src/components/CTASection.tsx
import React from "react";
import CTAButton from "./CTAButton";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  bgColor?: "green" | "dark" | "gradient";
  className?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title = "מוכן להצטרף למשפחת InFiniTy?",
  subtitle = "השאר פרטים ונחזור אליך בהקדם עם כל הפרטים",
  bgColor = "green",
  className = "",
}) => {
  const getBgClasses = () => {
    switch (bgColor) {
      case "green":
        return "bg-green-800";
      case "dark":
        return "bg-gray-900";
      case "gradient":
        return "bg-gradient-to-br from-green-800 via-green-900 to-black";
      default:
        return "bg-green-800";
    }
  };

  return (
    <>
      <section
        className={`${getBgClasses()} py-12 md:py-16 lg:py-20 ${className}`}
        dir="rtl"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              {title}
            </h2>

            {/* Subtitle */}
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 md:mb-10 max-w-2xl mx-auto">
              {subtitle}
            </p>
  
            {/* CTAButtons */}
            <div className="flex justify-center">
              <CTAButton
                variant="primary"
                size="medium"
                text="להשארת פרטים"
                className="block md:hidden"
                action="contact"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTASection;
