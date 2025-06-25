import React, { useState } from "react";
import { User, MessageSquare, Send, Phone, X, MapPin } from "lucide-react";

interface PopupFormProps {
  onPopupOpen: () => void;
  onPopupClose: () => void;
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

const PopupForm: React.FC<PopupFormProps> = ({ onPopupOpen, onPopupClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    city: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [seenPopup, setSeenPopup] = useState(false);

  React.useEffect(() => {
    if (seenPopup) return;
    const timer = setTimeout(() => {
      onPopupOpen();
      setIsOpen(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

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

    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const closeModal = () => {
    setIsOpen(false);
    onPopupClose();
    setErrors({});
    setIsSubmitted(false);
    setSeenPopup(true);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2  "
      dir="rtl"
    >
      <div
        className=" mt-5
      bg-white rounded-lg shadow-xl 
      max-w-md w-full relative
      h-fit max-h-[95vh] overflow-y-auto
      sm:w-80 sm:p-0 sm:max-h-[95vh]    
      md:w-96 md:max-h-[95vh]        
    "
      >
        {/* Header  */}
        <div className="relative bg-green-800 text-white p-4 text-center rounded-t-lg">
          <button
            onClick={closeModal}
            className="absolute top-2 left-2 p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <h5 className="text-lg font-bold mb-2 tracking-wide">
            אינפיניטי מחכה לך!
          </h5>
          <p className="text-xs opacity-90 leading-relaxed">
            השאר פרטים נציג מטעם אינפיניטי יחזור אליך בהקדם האפשרי
          </p>
        </div>

        {/* Content */}
        <div className="p-4">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                ההודעה נשלחה!
              </h3>
              <p className="text-sm text-gray-600">
                תודה רבה! נחזור אליכם בהקדם.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-black mb-2 text-right   "
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
                  className={`w-full px-3 py-2 text-sm border rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-right text-black ${
                    errors.name ? "border-red-300 bg-red-50" : "border-gray-300"
                  }`}
                  placeholder="הכנס את שמך המלא"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-600 text-right">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* City Field */}
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-black mb-2 text-right "
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
                  className={`w-full px-3 py-2 text-sm text-black border rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-right ${
                    errors.city ? "border-red-300 bg-red-50" : "border-gray-300"
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
                  <Phone className="w-4 h-4 inline ml-1" />
                  טלפון
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 text-sm text-black border rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-right ${
                    errors.phone
                      ? "border-red-300 bg-red-50"
                      : "border-gray-300"
                  }`}
                  placeholder="הכנס את מספר הטלפון שלך"
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-600 text-right">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-black mb-2 text-right "
                >
                  <MessageSquare className="w-4 h-4 inline ml-1" />
                  הודעה
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={2}
                  className={`w-full px-3 py-2 text-sm border text-black rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none text-right ${
                    errors.message
                      ? "border-red-300 bg-red-50"
                      : "border-gray-300"
                  }`}
                  placeholder="למה בחרת אינפיניטי כושר קרבי מנטלי?"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-600 text-right">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Info Text */}
              <div className="bg-green-50 border border-green-200 rounded-md p-3">
                <p className="text-sm text-green-700 text-center">
                  מגיע לך מאיתנו 2 אימוני ניסיון ללא עלות
                </p>
              </div>

              {/* Submit Button - Olive Green */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-green-700 hover:bg-green-800 disabled:bg-green-400 text-white font-medium py-3 px-4 rounded-md transition-colors flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>שולח...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>שלח הודעה</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
