import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FiMenu, FiX } from 'react-icons/fi'; 

function CustomNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar collapseOnSelect expand="lg" className="shadow-lg fixed top-0 left-0 w-full z-50 bg-black">
      <Container fluid>
        {/* שם האתר */}
        <Link to="/">
          <div className="text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-cyan-400">
            INFINITY
          </div>
        </Link>

        
        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`  focus:outline-none lg:hidden ${
            isMenuOpen ? 'text-black' : 'text-white'
          }`}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </Navbar.Toggle>

        {/* Offcanvas */}
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          show={isMenuOpen}
          onHide={() => setIsMenuOpen(false)}
          className={`transition-all duration-300 ${
            isMenuOpen ? 'bg-gray-900' : 'bg-black'
          }`}
        >
          <Offcanvas.Header closeButton className='bg-black' closeVariant="white"/>
            
          <Offcanvas.Body className="bg-black relative">
            {/* קישורים */}
            <Nav
              className={`flex flex-col lg:flex-row gap-4 text-lg ${
                isMenuOpen ? '' : 'mr-20'
              }`}
            >
              <Link
                to="/"
                className={`px-3  transition-all duration-300 text-center ${
                  isMenuOpen ? 'py-2' : ''
                }`}
              >
                ראשי
              </Link>
              <Link
                to="/Team"
                className={`px-3  transition-all duration-300 text-center ${
                  isMenuOpen ? 'py-2' : ''
                }`}
              >
                הצוות שלנו
              </Link>
              <Link
                to="/FAQs"
                className={`px-3   transition-all duration-300 text-center ${
                  isMenuOpen ? 'py-2' : ''
                }`}
              >
                שאלות נפוצות
              </Link>
              <Link
                to="/about"
                className={`px-3   transition-all duration-300 text-center ${
                  isMenuOpen ? 'py-2' : ''
                }`}
              >
                אודות
              </Link>
              <Link
                to="/Contact"
                className={`  transition-all duration-300 text-center ${
                  isMenuOpen ? 'py-2' : ''
                }`}
              >
                השאירו פרטים
              </Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
