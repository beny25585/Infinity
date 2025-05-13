import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary ">
      <Container>
        <Navbar.Brand href="/"
         className='text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-cyan-400'>
        INFINITY
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="/"> ראשי</Nav.Link>
            <Nav.Link href="/Team">הצוות שלנו</Nav.Link>
            <Nav.Link href="/about">אודות</Nav.Link>
            <Nav.Link href="/contact">צור קשר</Nav.Link>
            <Nav.Link href="/FAQs">שאלות נפוצות</Nav.Link>
           
          </Nav>
          <Nav>
            <Nav.Link href="/Contact" className="btn btn-danger">השאירו פרטים</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;