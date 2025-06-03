import { FaWhatsapp } from "react-icons/fa";
interface FloatingWhatsAppProps {
  isHidden?: boolean;
}

const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ isHidden }) => {
  if (isHidden) return null;

  return (
    <a
      href="https://wa.me/972559696929" // החלף למספר שלך
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl z-50 px-2 py-2"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="שלח הודעה בוואטסאפ"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default FloatingWhatsApp;
