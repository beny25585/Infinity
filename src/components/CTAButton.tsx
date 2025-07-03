// src/components/CTAButton.tsx
import React from "react";
import { MessageCircle, Send } from "lucide-react";
import { Link } from "react-router-dom";

interface CTAButtonProps {
  variant?: "primary" | "secondary" | "floating";
  size?: "small" | "medium" | "large";
  text?: string;
  className?: string;
  position?: "fixed" | "relative";
  action?: "contact" | "whatsapp" | "scroll";
}

const CTAButton: React.FC<CTAButtonProps> = ({
  variant = "primary",
  size = "medium",
  text = "להשארת פרטים",
  className = "",
  position = "relative",
  action = "contact",
}) => {
  const getButtonClasses = () => {
    let baseClasses =
      "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl";

    // Size variants
    switch (size) {
      case "small":
        baseClasses += " px-4 py-2 text-sm";
        break;
      case "medium":
        baseClasses += " px-6 py-3 text-base";
        break;
      case "large":
        baseClasses += " px-8 py-4 text-lg";
        break;
    }

    // Color variants
    switch (variant) {
      case "primary":
        baseClasses += " bg-green-700 hover:bg-green-800 text-white";
        break;
      case "secondary":
        baseClasses +=
          " bg-white hover:bg-gray-50 text-green-700 border-2 border-green-700";
        break;
      case "floating":
        baseClasses += " bg-green-600 hover:bg-green-700 text-white shadow-2xl";
        break;
    }

    // Position variants
    if (position === "fixed") {
      baseClasses += " fixed bottom-6 left-6 z-40";
    }

    return baseClasses;
  };

  // WhatsApp action
  if (action === "whatsapp") {
    return (
      <a
        href="https://wa.me/972559696929"
        target="_blank"
        rel="noopener noreferrer"
        className={`${getButtonClasses()} ${className}`}
        dir="rtl"
      >
        <MessageCircle className="w-4 h-4" />
        <span>{text}</span>
      </a>
    );
  }

  // Contact page action (default)
  return (
    <Link
      to="/Contact"
      className={`${getButtonClasses()} ${className}`}
      dir="rtl"
    >
      <Send className="w-4 h-4" />
      <span>{text}</span>
    </Link>
  );
};

export default CTAButton;
