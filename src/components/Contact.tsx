import React, { useState } from "react";
import { MapPin, User, MessageSquare, Send, Phone,ChevronsDown } from "lucide-react";


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
    } else if (
      !/^[\+]?[\d\s\-\(\)]{10,}$/.test(formData.phone.replace(/\s/g, ""))
    ) {
      newErrors.phone = "אנא הכנס מספר טלפון תקין";
    }

    if (!formData.message.trim()) {
      newErrors.message = "הודעה היא שדה חובה";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatPhone = (e: string) => {
    let cleaned = e.replace(/\D/g, "");

    if (cleaned.startsWith("0")) {
      return "+972" + cleaned.slice(1);
    }

    return cleaned;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const body = JSON.stringify({
        name: formData.name,
        phone: formatPhone(formData.phone),
        city: formData.city,
        message: formData.message,
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
      className="flex flex-col items-center justify-center py-12 mx-auto  max-w-7xl z-10"
      dir="rtl"
    >
      <h2 className="text-4xl font-extrabold  text-center gradient-text text-black">
        צרו קשר
      </h2>
      <ChevronsDown className="animate-bounce w-8 h-8 mt-8 text-[var(--primary)]"/>

      {isSubmitted ? (
        <div className="text-center py-8 w-full max-w-2xl">
          <div className="w-16 h-16  rounded-full flex items-center justify-center mx-auto mb-4">
            <Send className="w-8 h-8 text-green-600 px-6" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            ההודעה נשלחה!
          </h3>
          <p className="text-gray-600">תודה רבה! נחזור אליכם בהקדם.</p>
        </div>
      ) : (
        <div className="w-full max-w-2xl flex flex-col gap-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm text-black font-medium text-gray-700 mb-2 text-right"
            >
              <User className="w-4 h-4 inline ml-2" />
              שם מלא
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 bg-white border text-black rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-right ${
                errors.name ? "border-red-300 bg-red-50" : "border-gray-300"
              }`}
              placeholder="הכנס את שמך המלא"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600 text-right">
                {errors.name}
              </p>
            )}
          </div>
          {/* City Field */}
          <div>
            <label
              htmlFor="city"
              className="block text-sm text-black font-medium text-gray-700 mb-2 text-right"
            >
              <MapPin className="w-4 h-4 inline ml-2" />
              עיר
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 bg-white border text-black rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-right ${
                errors.name ? "border-red-300 bg-red-50" : "border-gray-300"
              }`}
              placeholder="מאיפה אתה?"
            />
            {errors.city && (
              <p className="mt-1 text-xs text-red-600 text-right">
                {errors.city}
              </p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-black mb-2 text-right"
            >
              <Phone className="w-4 h-4 inline ml-2" />
              טלפון
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 bg-white border text-black rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-right ${
                errors.phone ? "border-red-300 bg-red-50" : "border-gray-300"
              }`}
              placeholder="הכנס את מספר הטלפון שלך"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600 text-right">
                {errors.phone}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium  mb-2 text-right"
            >
              <MessageSquare className="w-4 h-4 inline ml-2" />
              הודעה
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={5}
              className={`w-full px-4 py-3 border rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-right text-black ${
                errors.message ? "border-red-300 bg-red-50" : "border-gray-300"
              }`}
              placeholder="איך נוכל לעזור לכם?"
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600 text-right">
                {errors.message}
              </p>
            )}
          </div>

          {/* Info Text */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <p className="text-sm text-green-700 text-right">
              <Phone className="w-4 h-4 inline ml-2" />
              מתחייבים לחזור אליכם עד 24 שעות!
            </p>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="flex items-center justify-center w-full px-4 py-3 text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-xl transition duration-300 ease-in-out"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>שולח...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>שלח</span>
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
};

export default Contact;
