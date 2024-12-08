import { Navbar, Container } from 'react-bootstrap';

function NavbarBottom() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" fixed="bottom" sticky="bottom">
      <Container className="text-center">
        <Navbar.Text className="text-light">
          Desenvolvedor: João Henrique Calza | Contato: <a href="mailto:198069@upf.br" className="text-light">198069@upf.br</a>
        </Navbar.Text>
        <Navbar.Text className="text-light">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default NavbarBottom;
