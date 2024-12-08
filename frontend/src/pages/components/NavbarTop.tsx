import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useRouter } from "next/router";

interface NavbarTopProps {
  isAuthenticated: boolean;
  onLogout: () => void;
}

function NavbarTop({ isAuthenticated, onLogout }: NavbarTopProps) {
  const router = useRouter();

  const handleAuthClick = () => {
    if (isAuthenticated) {
      onLogout();
    } else {
      router.push("/login"); 
    }
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark" fixed="top" sticky="top">
      <Container>
        <Navbar.Brand>
          <Link href="/" passHref>
            Home
          </Link>
        </Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} href="/products" passHref>
            Produtos
          </Nav.Link>
          <Nav.Link as={Link} href="/categories" passHref>
            Categorias
          </Nav.Link>
          <Nav.Link as={Link} href="/cachorros" passHref>
            Cachorros
          </Nav.Link>
          <Nav.Link as={Link} href="/perfil" passHref>
            Perfil
          </Nav.Link>
          <Nav.Link onClick={handleAuthClick}>
            {isAuthenticated ? "Logout" : "Login"}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarTop;
