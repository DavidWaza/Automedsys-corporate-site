import { Nav, Navbar, Container} from "react-bootstrap";
import styles from "../styles/Nav.module.css";
import Image from "next/image";
import Logo from "../images/logo.png";

const NavBar = (props) => {
  return (
    <>
      <Navbar bg="light" expand="lg" className={styles.navbar}>
        <Container>
          <Navbar.Brand href="/">
            <Image
              src={Logo}
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={styles.navList}>
              <Nav.Link href="/Solutions">Solutions</Nav.Link>
              <Nav.Link href="/Features">Features</Nav.Link>
              <Nav.Link href="/Pricing">Pricing</Nav.Link>
              <Nav.Link href="/Contact">Contact us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Nav className={styles.navList}>
              <Nav.Link href="/Login">Log in</Nav.Link>
              <Nav.Link href="/Getstarted" className={styles.getStarted}>Get Started</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
