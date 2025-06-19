import React, { useState } from "react";
import {
  MapPin,
  User,
  MessageSquare,
  Send,
  Phone,
  ChevronsDown,
} from "lucide-react";

// Add type declaration for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

interface FormData {
  name: string;
  phone: string;
  city: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  city?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    city: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastSubmission, setLastSubmission] = useState<number>(0); // Rate limiting

  // Israeli phone number validation - supports all mobile (050-059) and landline numbers
  const validatePhone = (phone: string): boolean => {
    // Updated regex that includes all Israeli mobile numbers and landlines
    const israeliPhoneRegex = /^(?:\+972|0)(?:[23489]|5[0-9]|77)[0-9]{7}$/;
    return israeliPhoneRegex.test(phone.replace(/[-\s]/g, ""));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "שם הוא שדה חובה";
    }

    if (!formData.city.trim()) {
      newErrors.city = "עיר הוא שדה חובה";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "מספר טלפון הוא שדה חובה";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "אנא הכנס מספר טלפון תקין";
    }

    if (!formData.message.trim()) {
      newErrors.message = "הודעה היא שדה חובה";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Sanitize user input to prevent XSS attacks
  const sanitizeInput = (input: string): string => {
    return input.trim().replace(/[<>]/g, "");
  };

  // Track form submission for Google Analytics
  const trackFormSubmission = () => {
    if (window.gtag) {
      window.gtag("event", "form_submit", {
        event_category: "engagement",
        event_label: "contact_form",
      });
    }
  };

  // Format phone number for API submission (convert to international format)
  const formatPhone = (e: string) => {
    let cleaned = e.replace(/\D/g, "");

    if (cleaned.startsWith("0")) {
      return "+972" + cleaned.slice(1);
    }

    return cleaned;
  };

  // Handle form input changes with real-time validation
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    // Apply sanitization to all inputs
    const sanitizedValue = sanitizeInput(value);

    setFormData((prev) => ({
      ...prev,
      [name]: sanitizedValue,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  // Submit form with rate limiting and error handling
  const handleSubmit = async () => {
    // Rate limiting: prevent multiple submissions within 10 seconds
    const now = Date.now();
    if (now - lastSubmission < 10000) {
      alert("אנא המתן 10 שניות בין שליחות");
      return;
    }

    if (!validateForm()) return;

    setIsSubmitting(true);
    setLastSubmission(now);

    try {
      const body = JSON.stringify({
        name: sanitizeInput(formData.name),
        phone: formatPhone(formData.phone),
        city: sanitizeInput(formData.city),
        message: sanitizeInput(formData.message),
        message_type: "submission_success",
        api_key: "0548898564",
      });

      const res = await fetch("http://127.0.0.1:8000/api/send-message/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      });

      const result = await res.json();

      if (res.ok) {
        setIsSubmitted(true);
        setIsSubmitting(false);
        trackFormSubmission(); // Track successful submission

        // Auto-reset form after success message
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: "", city: "", phone: "", message: "" });
        }, 3000);
      } else {
        alert("אירעה שגיאה בשליחת הטופס: " + JSON.stringify(result));
        setIsSubmitting(false);
      }
    } catch (error) {
      alert("שגיאה ברשת, אנא נסה שוב.");
      console.error(error);
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="flex flex-col items-center justify-center py-4 md:py-8 mx-auto max-w-7xl min-h-screen px-4 sm:px-6 lg:px-8"
      dir="rtl"
      style={{
        backgroundImage: "url('/images/soldier3.jpeg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black/30 rounded-xl md:rounded-2xl shadow-2xl p-4 md:p-6 mt-2 flex flex-col items-center w-full max-w-sm md:max-w-xl">
        <h2 className="text-xl md:text-3xl font-extrabold text-center text-white mb-1">
          צרו קשר
        </h2>
        <ChevronsDown className="animate-bounce w-5 h-5 md:w-6 md:h-6 mt-1 mb-3 md:mb-4 text-white" />

        {isSubmitted ? (
          <div className="text-center py-4 w-full">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mx-auto mb-2 bg-green-700">
              <Send className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <h3 className="text-base md:text-lg font-semibold text-white mb-1">
              ההודעה נשלחה!
            </h3>
            <p className="text-gray-300 text-sm">
              תודה רבה! נחזור אליכם בהקדם.
            </p>
          </div>
        ) : (
          <div className="w-full flex flex-col gap-3 md:gap-4">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-white font-medium mb-1 text-right"
              >
                <User className="w-4 h-4 inline ml-1" />
                שם מלא
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-3 py-2.5 md:py-3 bg-white/10 backdrop-blur-sm border text-white placeholder-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-right ${
                  errors.name
                    ? "border-red-500 bg-red-500/20"
                    : "border-white/30"
                }`}
                placeholder="הכנס את שמך המלא"
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-300 text-right">
                  {errors.name}
                </p>
              )}
            </div>

            {/* City Field */}
            <div>
              <label
                htmlFor="city"
                className="block text-sm text-white font-medium mb-1 text-right"
              >
                <MapPin className="w-4 h-4 inline ml-1" />
                עיר
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className={`w-full px-3 py-2.5 md:py-3 bg-white/10 backdrop-blur-sm border text-white placeholder-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-right ${
                  errors.city
                    ? "border-red-500 bg-red-500/20"
                    : "border-white/30"
                }`}
                placeholder="מאיפה אתה?"
              />
              {errors.city && (
                <p className="mt-1 text-xs text-red-300 text-right">
                  {errors.city}
                </p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-white mb-1 text-right"
              >
                <Phone className="w-4 h-4 inline ml-1" />
                טלפון
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full px-3 py-2.5 md:py-3 bg-white/10 backdrop-blur-sm border text-white placeholder-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-right ${
                  errors.phone
                    ? "border-red-500 bg-red-500/20"
                    : "border-white/30"
                }`}
                placeholder="הכנס את מספר הטלפון שלך"
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-300 text-right">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white mb-1 text-right"
              >
                <MessageSquare className="w-4 h-4 inline ml-1" />
                הודעה
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                className={`w-full px-3 py-2.5 border rounded-lg bg-white/10 backdrop-blur-sm focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none text-right text-white placeholder-gray-300 ${
                  errors.message
                    ? "border-red-500 bg-red-500/20"
                    : "border-white/30"
                }`}
                placeholder="למה אינפיניטי כושר קרבי?"
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-300 text-right">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Info Text */}
            <div className="bg-green-700/80 border border-green-500 rounded-lg p-2.5">
              <p className="text-xs md:text-sm text-white text-center">
                גיל 14 עד 18?
                <br />
                מגיע לך מאיתנו חודש ראשון ב50 ש״ח בלבד ו2 אימונים ללא עלות!
              </p>
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex items-center justify-center w-full px-4 py-3 md:py-3.5 text-base md:text-lg font-semibold text-white bg-green-700 hover:bg-green-800 disabled:bg-gray-600 rounded-lg transition duration-300 ease-in-out shadow-lg"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  <span>שולח...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  <span>שלח</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
