import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-8  mh-16 shadow-lg">
      <div className="flex justify-center gap-6 mb-4 text-2xl">
        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noreferrer" style={{ color: '#E4405F' }}>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com/share/15Q4Ue6CT8/?mibextid=wwXIfr" target="_blank" rel="noreferrer" style={{ color: '#1877F2' }}>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://wa.me/972xxxxxxxxx" target="_blank" rel="noreferrer" style={{ color: '#25D366' }}>
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a href="https://www.youtube.com/@InFinityKosherKravi" target="_blank" rel="noreferrer" style={{ color: '#FF0000' }}>
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="https://www.tiktok.com/@infinitykosherkravi?_t=ZN-8wOaMspnRLi&_r=1" target="_blank" rel="noreferrer" style={{ color: '#69C9D0' }}>
          <FontAwesomeIcon icon={faTiktok} />
        </a>
      </div>
      <p className="text-sm">&copy; 2025 כושר קרבי | כל הזכויות שמורות</p>
    </footer>
  );
};

export default Footer;