import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Trang chủ</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to='/' style={{textDecoration: "none", color: "black"}}>Home</Link></Nav.Link>
            <Nav.Link><Link to='/details' style={{textDecoration:"none", color:"black"}}>Đặt hàng</Link></Nav.Link>
            <Nav.Link><Link to='/admin' style={{textDecoration: "none", color: "black"}}>Quản trị</Link></Nav.Link>
            <Nav.Link><Link to='/login' style={{textDecoration: "none", color: "black"}}>Đăng nhập</Link></Nav.Link>
            <Nav.Link><Link to='/search' style={{textDecoration: "none", color: "black"}}>Tìm kiếm</Link></Nav.Link>
            <NavDropdown title="Các sản phẩm" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Tôm</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Cua
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cá</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Các sản phẩm khác
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;