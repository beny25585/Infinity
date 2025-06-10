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
    <footer className=" text-white text-center py-8 shadow-lg ">
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
          href="https://instagram.com/your_account"
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
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>

        <a
          href="https://www.tiktok.com/@infinitykosherkravi?_t=ZN-8wOaMspnRLi&_r=1"
          target="_blank"
          rel="noreferrer"
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE2C55] via-[#25F4EE] to-[#000000] font-bold"
        >
          <FontAwesomeIcon icon={faTiktok} />
        </a>

        <a
          href="https://www.youtube.com/@InFinityKosherKravi"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#FF0000" }}
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
      <p className="text-sm text-black">&copy; 2025 כושר קרבי | כל הזכויות שמורות</p>
    </footer>
  );
};

export default Footer;
