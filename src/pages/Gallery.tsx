import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlinePhotograph } from "react-icons/hi";

const images = [
  "/images/infinity_image1.jpg",
  "/images/infinity_image2.jpg",
  "/images/infinity_image3.jpg",
  "/images/infinity_image4.jpg",
  "/images/infinity_image5.jpg",
];

const GalleryMobile = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="bg-green-100 min-h-screen p-4 font-hebrew direction-rtl">
      {/* כותרת מונפשת עם אייקון */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="flex items-center justify-center gap-3 text-primary  mb-6"
      >
        <div className="top-0 blue-100 ">
          <HiOutlinePhotograph className="w-10 h-10 text-blue-600 animate-pulse" />
        </div>
        <div className="relative">
          <motion.h1 className="text-3xl font-bold">גלריה</motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute right-0 bottom-0 h-1 w-full origin-right bg-gradient-to-l from-blue-500 to-indigo-500 rounded-full"
          />
        </div>
      </motion.div>

      {/* גריד תמונות */}
      <div className="bg-gradient-to-b from-blue-100 via-white to-blue-200 grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl shadow-md">
        {images.map((src, i) => (
          <div
            key={i}
            className="cursor-pointer overflow-hidden rounded-xl shadow-md"
            onClick={() => setSelected(src)}
          >
            <img
              src={src}
              alt={`תמונה ${i + 1}`}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* לייטבוקס לתמונה נבחרת */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center backdrop-blur z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => {
                setSelected(null);
                e.stopPropagation();
              }}
              className="relative"
            >
              <img
                src={selected}
                alt="Selected"
                className="max-w-full max-h-[80vh] rounded-lg shadow-lg"
              />
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute top-2 right-2 text-white hover:text-gray-300 transition-colors duration-200"
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryMobile;
