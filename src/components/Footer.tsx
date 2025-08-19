import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faTiktok,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="text-white text-center py-8 shadow-lg bg-gray-100">
      {/* אייקוני רשתות חברתיות */}
      <div className="flex justify-center gap-6 mb-4 text-2xl">
        <a
          href="https://wa.me/972559696929"
          target="_blank"
          rel="noreferrer"
          className="transition-transform hover:scale-110"
          style={{ color: "#25D366" }}
          title="WhatsApp"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a
          href="https://www.instagram.com/infinity.kosherkravi?igsh=NGM3dmg0YW52ejgy"
          target="_blank"
          rel="noreferrer"
          className="transition-transform hover:scale-110"
          style={{ color: "#E4405F" }}
          title="Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://www.facebook.com/share/15Q4Ue6CT8/?mibextid=wwXIfr"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#1877F2" }}
          title="Facebook"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://www.tiktok.com/@infinity.kosherkravi?_t=ZN-8xiVr8iNWNy&_r=1"
          target="_blank"
          rel="noreferrer"
          title="TikTok"
          style={{ color: "#000000" }}
        >
          <FontAwesomeIcon icon={faTiktok} />
        </a>
        <a
          href="https://www.youtube.com/@InFinity.KosherKravi"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#FF0000" }}
          title="YouTube"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>

      {/* קישורים משפטיים */}
      <div className="mb-3">
        <a
          href="/PrivacyPolicy"
          className="text-sm text-blue-700 hover:underline mx-2"
        >
          מדיניות פרטיות
        </a>
        |
        <a
          href="/TermsOfUse"
          className="text-sm text-blue-700 hover:underline mx-2"
        >
          תנאי שימוש
        </a>
      </div>

      {/* זכויות יוצרים */}
      <p className="text-sm text-black">
        &copy; 2025 כושר קרבי | כל הזכויות שמורות ל-InFinity כושר קרבי מנטלי
      </p>
    </footer>
  );
};

export default Footer;
